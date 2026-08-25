---
sidebar_label: 操作项目
title: 操作项目
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解如何操作项目。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---
# 操作项目

您可以通过 [Diagram Editor](guides/diagram_editor/initialization.md) 来操作 Diagram 项目。本文将探讨如何通过组件的 API 操作 DHTMLX Diagram 的项目。

## 概述 {#overview}

本文包含以下几个部分：

- [如何按层次顺序自动排列形状](#arranging-shapes-automatically)；
- 如何对项目执行一系列操作，具体包括：
    - [添加](#adding-an-item)/[更新](#updating-an-item)/[删除](#deleting-items)项目；
    - [检查项目是否存在](#checking-existence-of-the-item)于图表中，并[获取该项目](#getting-an-item)；
    - [选择项目](#selecting-items)；
    - 如果图表中存在大量项目，可[滚动到所需项目](#showing-the-necessary-item)使其在屏幕上可见；
    - [展开/折叠项目](#expandingcollapsing-items)；
    - [查找](#finding-the-necessary-item)符合特定条件的项目；
    - [筛选图表](#filtering-items)以渲染特定项目；
- [如何管理组内子项目的拖放操作](#drag-n-drop-of-group-items)；
- [如何操作泳道及其单元格](#working-with-swimlane-cells)，具体包括：
    - [设置/重置活动泳道](#settingresetting-the-active-swimlane)；
    - [获取泳道子表头的类型](#getting-the-type-of-the-subheader)；
    - [添加](#adding-a-columnrow)/[删除](#removing-a-columnrow)/[移动](#moving-a-columnrow)列/行；
    - 获取单元格的 [id](#getting-the-id-of-a-cell)/[索引](#getting-the-index-of-a-cell)，并[检查可对该单元格执行哪些操作](#validating-cells)。

## 自动排列形状 {#arranging-shapes-automatically}

该库使您能够为以默认模式初始化的图表中的形状和连接器实现自动布局。自动布局功能可让您：

- 一次性将已连接的形状按对称顺序排列；
- 将以 JSON 格式加载或从服务器加载的数据按层次结构排列。

若要执行自动布局，请使用 [`autoPlace()`](api/diagram/autoplace_method.md) 方法。该方法可以接受一个参数：

- `config` - (*object*) 可选，一个包含自动布局配置设置的对象。该对象可以包含以下属性：
    - `mode` - (*string*) 可选，形状连接的模式，`"direct"`（默认）或 `"edges"`
    - `graphPadding` - (*number*) 可选，设置未连接图表之间的距离，默认值为 *200*
    - `placeMode` - (*string*) 可选，设置形状的排布模式，`"orthogonal"`（默认）或 `"radial"`
    - `itemPadding` - (*number*) 可选，项目之间的最小间距（最小值为 *1*），默认值为 *20*
    - `levelPadding` - (*number*) 可选，层级之间的最小间距（最小值为 *1*），默认值为 *20*

:::note
`autoPlace()` 方法仅适用于图表的默认模式，且仅对形状生效。如果使用组或泳道，自动布局将无法生效。
:::

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
    mode: "edges",
    graphPadding: 100,
    placeMode: "radial",
    itemPadding: 10,
    levelPadding: 10
});
~~~

**相关示例**：[Diagram. Default mode. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)

如果不向该方法传递参数，将应用默认设置。

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace();
~~~

此外，您还可以通过使用 Diagram 的 [`autoplacement`](api/diagram/autoplacement_property.md) 配置项并应用 `autoPlace()` 方法来配置自动布局的设置。下面的示例演示了如何使用自动布局生成并排列一个径向数据集。

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    scale: 0.3,
    autoplacement: {
        placeMode: "radial",
        mode: "direct"
    }
});

diagram.data.parse(getNodes(120, 5));

diagram.autoPlace({
    itemPadding: 10,
    levelPadding: 10,
    graphPadding: 100,
});
~~~

![生成的径向数据集自动布局](/img/radial_datasets_generator.png)

**相关示例：** [Diagram. Default mode. Arranging a generated radial dataset with autoplacement](https://snippet.dhtmlx.com/rwsime82)

## 添加项目 {#adding-an-item}

若要向图表中添加新项目，请应用 `data` 对象的 [`add()`](api/data_collection/add_method.md) 方法。

~~~jsx
diagram.data.add({ id: "3.2", text: "New Item", parent: "3" });
~~~

例如，我们添加了一个具有以下属性的新形状对象：

- `id` - (*string|number*) 形状的唯一 id
- `text` - (*string*) 要在形状中渲染的文本
- `parent` - (*string|number*) 父形状的 id

您可以在 [API 部分](shapes/configuration_properties.md)中查看形状对象的所有可用属性。

**相关示例**：[Diagram. Data. Add/delete item](https://snippet.dhtmlx.com/8wi20uop)

## 获取项目 {#getting-an-item}

您可以将项目的 id 传递给 `data` 对象的 [`getItem()`](api/data_collection/getitem_method.md) 方法，以获取该项目的对象。例如：

~~~jsx
const shape = diagram.data.getItem(1);
~~~

获取项目后，您可以按如下方式访问其原始属性：

~~~jsx
const shape = diagram.data.getItem(1);
const text = shape.text;
~~~

## 获取项目的 id {#getting-the-id-of-an-item}

如果项目的 id 未知，您可以使用 [`getId()`](api/data_collection/getid_method.md) 方法来获取它。该方法将项目的索引作为参数：

~~~jsx
const id = diagram.data.getId(0); // -> 返回 "1"
~~~

## 获取项目的索引 {#getting-the-index-of-an-item}

您可以将项目的 id 传递给 [`getIndex()`](api/data_collection/getindex_method.md) 方法，以获取其索引：

~~~jsx
const id = diagram.data.getIndex("1"); // -> 返回 0
~~~

## 删除项目 {#deleting-items}

### 删除单个项目 {#deleting-a-single-item}

若要删除不需要的项目，请使用 `data` 对象的 [`remove()`](api/data_collection/remove_method.md) 方法，并将相应项目的 id 作为参数传入：

~~~jsx
diagram.data.remove("3.2");
~~~

:::note
如果图表以组织结构图模式或思维导图模式初始化，删除某个形状时，也会同时删除其连接线及所有子形状。
:::

### 删除所有项目 {#deleting-all-the-items}

如有需要，您可以通过一次性删除所有项目来清空图表。为此，请应用 `data` 对象的 [`removeAll()`](api/data_collection/removeall_method.md) 方法：

~~~jsx
diagram.data.removeAll();
~~~

**相关示例**：[Diagram. Data. Add/delete item](https://snippet.dhtmlx.com/8wi20uop)

## 更新项目 {#updating-an-item}

您可以借助 `data` 对象的 [`update()`](api/data_collection/update_method.md) 方法，更新项目的外观和内容：

~~~jsx
diagram.data.update("1", { text: "Some new text" });
~~~

您需要传入两个参数：

- `id` - (*string|number*) 项目的 id
- `config` - (*object*) 包含更新后配置属性的对象

**相关示例**：[Diagram. Data. Update item](https://snippet.dhtmlx.com/y8uk4sbj)

## 检查项目是否存在 {#checking-existence-of-the-item}

您可以通过 `data` 集合的 [`exists()`](api/data_collection/exists_method.md) 方法，检查图表中是否存在某个项目。该方法将项目的 id 作为参数，如果项目存在，则返回 *true*：

~~~jsx
const shapeExists = diagram.data.exists("1");
~~~

## 选择项目 {#selecting-items}

### 选择项目 {#selecting-an-item}

若要选择项目，您首先需要为图表[启用选择功能](guides/diagram/configuration.md#enabling-items-selection)，然后调用 `selection` 对象的 [add()](api/selection/add_method.md) 方法来选择所需的项目。

~~~jsx {8,11-12,15-16}
// 图表必须使用 "select:true" 选项创建
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 加载数据
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> 如果项目已被选中，则返回 true
console.log(diagram.selection.getIds()); // -> ["1"]

// 将 id 为 "2" 的项目添加到已选中的项目中
diagram.selection.add({ id: "2", join: true });
console.log(diagram.selection.getIds()); // -> ["1", "2"]

// 移除之前选中的项目，并添加 id 为 "3" 的项目
diagram.selection.add({ id: "3" });
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

该方法接受一个包含以下参数的对象作为参数：

- `id` -（必选）要添加到选择列表中的项目的 id
- `join` -（可选）将选中元素添加到选择列表的模式。如果该参数设置为 *false* 或未传入，则之前添加到选择列表中的项目将被重置
- `batch` -（可选）要选择的项目列表（如果预先已知）

该方法返回：

- `true` —— 如果该元素之前不在列表中，且已成功添加到列表中
- `false` —— 如果由于某种原因（例如该元素已被添加到列表中）导致该元素未能被添加到列表中

### 取消选择项目 {#unselecting-an-item}

若要从选择列表中移除某个项目，请使用 `selection` 对象的 [`remove()`](api/selection/remove_method.md) 方法：

~~~jsx {2}
console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> 如果项目已被取消选择，则返回 true
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

该方法可以接受一个包含 *要取消选择的项目 id* 的对象作为参数。如果项目已成功从选择列表中移除，则返回 *true*。

您也可以不传入任何参数调用该方法，以清空选择列表，如下所示：

~~~jsx {2-3}
console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// 移除选择列表中的所有项目
diagram.selection.remove();
console.log(diagram.selection.getIds()); // -> []
~~~

### 获取选中项目的 id {#getting-the-ids-of-selected-items}

您可以使用 `selection` 对象的 [`getIds()`](api/selection/getids_method.md) 方法，获取当前选中项目的 id 列表：

~~~jsx
const ids = diagram.selection.getIds(); // -> ["1", "1.1" ...] or []
~~~

该方法返回一个由选中项目及其子项目的 id 组成的数组；如果当前没有选中的项目，则返回一个空数组。

### 获取选中项目的对象 {#getting-the-object-of-a-selected-item}

您可以使用 `selection` 对象的 [`getItem()`](api/selection/getitem_method.md) 方法，获取选中项目的对象。该方法可以接受一个包含以下参数的对象作为参数：

- `id` -（必选）- 相应项目的 id

您也可以不传入参数调用该方法，以获取最后一个选中项目的对象。请查看以下示例，了解该方法的功能：

~~~jsx {9-11,13-15,17-19}
// 图表必须使用 "select:true" 选项创建
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 加载数据
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// 获取最后一个选中的项目
const item = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner"}

// 按 id 获取选中的项目
const item = diagram.selection.getItem({ id: "1" });
// -> {id: "1", text: "Chairman & CEO", title: "Henry Bennett"}

// 尝试获取不在选择列表中的项目
const item = diagram.selection.getItem({ id: "4" });
// -> 返回 undefined，因为选择列表中不存在具有指定 id 的项目
~~~

### 清空选择列表 {#clearing-the-selection-list}

每当您需要在不触发事件的情况下清空选择列表时，可以使用 [`clear()`](api/selection/clear_method.md) 方法：

~~~jsx
diagram.selection.clear();
~~~

### 检查项目是否被选中 {#checking-whether-an-item-is-selected}

您可以通过 API 检查某个项目是否存在于 Diagram 的选中项目列表中。为此，请使用 `selection` 对象的 [`includes()`](api/selection/includes_method.md) 方法：

~~~jsx {2-3}
diagram.selection.getIds(); // -> ["1", "2", "3"]
diagram.selection.includes({ id: "1" }) // 返回 true
diagram.selection.includes({ id: "4" }) // 返回 false
~~~

该方法接受一个包含以下参数的对象作为参数：

- `id` - (*string|number*) 必选，被检查项目的 id

**相关示例**：[Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)

## 展开/折叠项目 {#expandingcollapsing-items}

您可以通过相应的 API 方法：[expandItem()](api/diagram/expanditem_method.md) 和 [collapseItem()](api/diagram/collapseitem_method.md)，展开和折叠具有子形状的形状，或组/泳道。

这两个方法都接受两个参数：

- `id` - (*string|number*) 项目的 id
- `dir` - (*string*) 可选，定义子项相对于父形状隐藏/显示的方向：`"left"`、`"right"`

~~~jsx
// 展开 id 为 "3" 的项目
diagram.expandItem("3");

// 折叠 id 为 "3" 的项目
diagram.collapseItem("3");
~~~

:::note
`dir` 属性仅可在 Diagram 的思维导图模式（type:`"mindmap"`）下使用。
:::

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.data.parse(data);

diagram.collapseItem("main", "left");
// 或者
diagram.expandItem("main", "left");
~~~

## 显示所需项目 {#showing-the-necessary-item}

如果您的图表较大且包含大量项目，可以使所需的项目可见。
为此，请应用 [`showItem()`](api/diagram/showitem_method.md) 方法，该方法将项目的 id 作为参数：

~~~jsx
diagram.showItem("2.1");
~~~

**相关示例**：[Diagram. Scroll content](https://snippet.dhtmlx.com/f970hbym)

您可以[进一步了解 DHTMLX Diagram 中的滚动功能](guides/diagram/scrolling_diagram.md)。

## 查找所需项目 {#finding-the-necessary-item}

您可以使用 Diagram 组件的 API 在图表中查找所需的项目。`data` 集合的 [`find()`](api/data_collection/find_method.md) 方法可以帮助您完成此任务。
该方法将搜索条件作为参数，并返回与指定条件匹配的第一个形状对象：

~~~jsx
// 按属性键搜索形状
const shape = diagram.data.find({by:"text",match:"Manager"});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}

// 按函数搜索形状
const shape = diagram.data.find((shape) => {
    if(shape.text==="Manager"||shape.text==="Marketer"){
        return true;
    }
});
~~~

**相关示例**：[Diagram. Data. Finding necessary shape](https://snippet.dhtmlx.com/sete9z73)

### 查找所有符合搜索条件的项目 {#finding-all-the-items-that-meet-the-search-criteria}

您还可以通过 `data` 集合的 [`findAll()`](api/data_collection/findall_method.md) 方法，查找所有符合设定条件的项目。该方法接受与 `find()` 方法相同的参数，并返回一个项目对象数组：

~~~jsx
// 按属性键搜索形状
const shapes = diagram.data.findAll({by:"text",match:"Manager"});

// 按函数搜索形状
const shapes = diagram.data.findAll((shapes) => {
    if(shapes.text==="Manager"||shapes.text==="Marketer"){
        return true;
    }
});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
// ->{id:"2.1",text:"Marketer",title:"Charles Little", img: "../avatar-4.png", …}
~~~

## 筛选项目 {#filtering-items}

您可以通过 `data` 集合的 [`filter()`](api/data_collection/filter_method.md) 方法筛选图表，仅渲染符合筛选条件的项目。该方法仅显示已筛选的项目，并隐藏其余项目。

<iframe src="https://snippet.dhtmlx.com/tm43bsgn?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 组项目的拖放操作 {#drag-n-drop-of-group-items}

组的默认设置允许您在组内重新排列子项目，以及在组之间拖动项目。

如有需要，您可以禁止将子项目拖动到不同的组，使项目只能在其父组内拖动。此外，您还可以调整父组边框的行为，定义当用户将子项目拖到组外时，边框是否应该扩展。

有关如何配置组项目行为的更多详细信息，请阅读[相关文章](/groups/#configuring-the-behavior-of-group-items)。

## 使用泳道单元格 {#working-with-swimlane-cells}

您可以借助 [CellManager API](/api/cell_manager/) 管理泳道单元格。例如，您可以以行或列的形式添加、移动、删除单元格，验证单元格，以及执行更多操作。

我们以具有以下配置的泳道为例：

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 600,
        layout: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        header: {
            text: "Swimlane",
            position: "top"
        },
        subHeaderRows: {
            headers:[
                { text: "Subheader 1", id: "s1" },
                { text: "Subheader 2", id: "s2" },
                { text: "Subheader 3", id: "s3" }
            ]
        }
    }
];
~~~

并了解如何使用现有的 API 方法操作泳道的单元格。

### 设置/重置活动泳道 {#settingresetting-the-active-swimlane}

若要能够操作泳道的单元格，您需要设置活动泳道。可以通过 cellManager 对象的 [`setSwimlane()`](api/cell_manager/setswimlane_method.md) 方法来实现：

~~~jsx
diagram.cellManager.setSwimlane("main");
~~~

或通过 selection 对象的 [`add()`](api/selection/add_method.md) 方法：

~~~jsx
diagram.selection.add("main");
~~~

完成对泳道或其单元格的操作后，您可以应用 cellManager 对象的 [`resetSwimlane()`](api/cell_manager/resetswimlane_method.md) 方法，取消泳道的选中状态：

~~~jsx
diagram.cellManager.resetSwimlane();
~~~

### 添加列/行 {#adding-a-columnrow}

您可以将一组单元格以行或列的形式添加到泳道中。为此，您需要应用 cellManager 对象的 [`add()`](api/cell_manager/add_method.md) 方法，并向该方法传入两个参数：
- 应添加新列/行的单元格位置的起始索引；
- 添加的方向：添加行使用 *`"up"` | `"down"`*，添加列使用 *`"left"` | `"right"`*。

~~~jsx
// 在指定行下方添加新行
diagram.cellManager.add(0, "down");

// 在指定列左侧添加新列
diagram.cellManager.add(0, "left");
~~~

### 删除列/行 {#removing-a-columnrow}

若要从泳道中删除一组行或列形式的单元格，请使用 cellManager 对象的 [`remove()`](api/cell_manager/remove_method.md) 方法。该方法接受两个参数：

- 要删除的列/行所在位置的索引；
- 要删除的项目类型：*`"col"` | `"row"`*

~~~jsx
// 从泳道中删除第一行
diagram.cellManager.remove(0, "row");

// 从泳道中删除第二列
diagram.cellManager.remove(1, "col");
~~~

### 移动列/行 {#moving-a-columnrow}

您可以通过应用 cellManager 对象的 [`move()`](api/cell_manager/move_method.md) 方法，更改泳道中某列或某行的位置。该方法允许您将列向右或向左移动一个位置，或将行向上或向下移动一个位置。该方法接受两个参数：

- 要移动的列/行当前位置的索引
- 移动项目的方向：*`"up"` | `"down"`* 用于移动行，*`"left"` | `"right"`* 用于移动列

~~~jsx
// 将第一行向下移动一个位置
diagram.cellManager.move(0, "down");

// 将第三列向左移动一个位置
diagram.cellManager.move(2, "left");
~~~

### 验证单元格 {#validating-cells}

您可以通过 cellManager 对象的 [`validation()`](api/cell_manager/validation_method.md) 方法，检查是否可以对指定单元格执行添加、删除或移动等操作：

~~~jsx
// 检查索引为 0 的单元格是否可以向下移动
diagram.cellManager.validation(0, "down", "move"); // true
~~~

### 获取子表头的类型 {#getting-the-type-of-the-subheader}

若要返回泳道子表头的类型，请使用 cellManager 对象的 [`getSubHeaderType()`](api/cell_manager/getsubheadertype_method.md) 方法。该方法将子表头的 id 作为参数：

~~~jsx
diagram.cellManager.getSubHeaderType("s1"); // 返回 "row"
~~~

### 获取单元格的 id {#getting-the-id-of-a-cell}

您可以获取某单元格所属列/行中第一个单元格的 id。可以通过 cellManager 对象的 [`getCellId()`](api/cell_manager/getcellid_method.md) 方法来实现。该方法接受两个参数：

- 行/列中第一个单元格的索引；
- 项目的类型：*`"col"` | `"row"`*。

~~~jsx
// 返回第一行中第一个单元格的 id
diagram.cellManager.getCellId(0, "row"); // 返回 1

// 返回第三列中第一个单元格的 id
diagram.cellManager.getCellId(2, "col"); // 返回 3
~~~

您还可以使用 cellManager 对象的 [`getSubHeaderCellId()`](api/cell_manager/getsubheadercellid_method.md) 方法，获取子表头所属单元格的 id。该方法将泳道子表头的 id 作为参数：

~~~jsx
// 返回子表头所属单元格的 id
diagram.cellManager.getSubHeaderCellId("s2"); // 返回 4
~~~

### 获取单元格的索引 {#getting-the-index-of-a-cell}

当您需要获取泳道单元格的索引时，请使用 cellManager 对象的 [`getCellIndex()`](api/cell_manager/getcellindex_method.md) 方法。该方法接受两个参数：

- 单元格的 id；
- 项目的类型：*`"col"` | `"row"`*。

:::note
属于同一行（或同一列）的所有单元格将具有相同的索引。
:::

~~~js
layout: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
],
~~~

~~~jsx
// 如果 id=2 的单元格属于某一列，返回该单元格的索引
diagram.cellManager.getCellIndex(2, "col"); // 返回 1

// 如果 id=5 的单元格属于某一列，返回该单元格的索引
diagram.cellManager.getCellIndex(8, "col"); // 返回 1

// 如果 id=2 的单元格属于某一行，返回该单元格的索引
diagram.cellManager.getCellIndex(2, "row"); // 返回 0

// 如果 id=5 的单元格属于某一行，返回该单元格的索引
diagram.cellManager.getCellIndex(8, "row"); // 返回 2
~~~

您还可以使用 cellManager 对象的 [`getSubHeaderCellIndex()`](api/cell_manager/getsubheadercellindex_method.md) 方法，获取子表头所属单元格的索引。该方法将泳道子表头的 id 作为参数：

~~~jsx
// 返回子表头所属单元格的索引
diagram.cellManager.getSubHeaderCellIndex("s2"); // 返回 1
~~~
