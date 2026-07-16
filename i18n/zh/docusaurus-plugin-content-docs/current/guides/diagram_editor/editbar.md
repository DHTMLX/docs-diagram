---
sidebar_label: Editbar
title: 编辑器指南 - Editbar
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 Editbar。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# Editbar {#editbar}

您可以针对每个 Diagram 元素单独配置 Editbar 控件，也可以在考虑各种条件的情况下为[一组元素](guides/items_index.md)进行配置。为此，请使用 Editbar 的 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 配置。

如果您想为单个[形状](/category/shapes)配置 Editbar 控件，需要在 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 配置中指定相应的 **形状类型**，如下例所示：

~~~jsx {6-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [ // 为 "pert" 形状配置 editbar 控件
                    { type: "arrange", $properties: { angle: { hidden: true } }},
                    // ... 其他 Editbar 控件配置
                ],
                // ... 其他形状配置
            }
        }
    }
});
~~~

如需配置[一组元素](guides/items_index.md)，您需要在 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 配置中使用以下服务属性：

- [`$default`](#configure-editbar-for-the-grid-area) - 允许在未选中任何元素或选中多个元素时配置 Editbar 控件
- [`$shape`](#configure-editbar-for-shapes) - 允许为[所有形状（包括自定义形状）](/category/shapes)配置 Editbar 控件
- [`$group`](#configure-editbar-for-group-elements) - 允许为所有 [`group`](/groups/) 类型的元素配置 Editbar 控件
- [`$swimlane`](#configure-editbar-for-swimlanes) - 允许为所有 [`swimlane`](/swimlanes/) 类型的元素配置 Editbar 控件
- [`$line`](#configure-editbar-for-lines) - 允许为所有 [`line`](/lines/) 类型的元素配置 Editbar 控件
- [`$lineTitle`](#configure-editbar-for-line-titles) - 允许为所有 [`lineTitle`](/line_titles/) 类型的元素配置 Editbar 控件

<iframe src="https://snippet.dhtmlx.com/ealq0m4l?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 为网格区域配置 Editbar {#configure-editbar-for-the-grid-area}

`$default` 服务属性允许在未选中任何元素或选中多个元素时配置 Editbar 控件。

~~~jsx
properties: {
    $default: [
        {
            type: "gridStep",
            readOnly: true,
            // ...
        }
    ]
}
~~~

**相关复合控件：** [网格步长](api/diagram_editor/editbar/complex_controls/gridstep.md)、[边框](api/diagram_editor/editbar/complex_controls/border.md)、[排列](api/diagram_editor/editbar/complex_controls/arrange.md)

## 为形状配置 Editbar {#configure-editbar-for-shapes}

`$shape` 服务属性允许为[所有形状（包括自定义形状）](/category/shapes)配置 Editbar 控件。

~~~jsx
properties: {
    $shape: [
        {
            type: "position",
            $properties: {
                dx: { disabled: true },
                // ...
            },
            // ...
        }
    ]
}
~~~

**相关复合控件：** [边框](api/diagram_editor/editbar/complex_controls/border.md)、[排列](api/diagram_editor/editbar/complex_controls/arrange.md)、[位置](api/diagram_editor/editbar/complex_controls/position.md)、[大小](api/diagram_editor/editbar/complex_controls/size.md)、[文本对齐](api/diagram_editor/editbar/complex_controls/textalign.md)、[文本样式](api/diagram_editor/editbar/complex_controls/textstyle.md)

## 为分组元素配置 Editbar {#configure-editbar-for-group-elements}

`$group` 服务属性允许为所有 [`group`](/groups/) 类型的元素配置 Editbar 控件。

~~~jsx
properties: {
    $group: [
        {
            type: "header",
            label: "Group header style",
            // ...
        }
    ]
}
~~~

**相关复合控件：** [边框](api/diagram_editor/editbar/complex_controls/border.md)、[排列](api/diagram_editor/editbar/complex_controls/arrange.md)、[表头](api/diagram_editor/editbar/complex_controls/header.md)、[通用表头](api/diagram_editor/editbar/complex_controls/headercommon.md)、[表头位置](api/diagram_editor/editbar/complex_controls/headerposition.md)、[大小](api/diagram_editor/editbar/complex_controls/size.md)、[文本对齐](api/diagram_editor/editbar/complex_controls/textalign.md)、[文本样式](api/diagram_editor/editbar/complex_controls/textstyle.md)

## 为泳道配置 Editbar {#configure-editbar-for-swimlanes}

`$swimlane` 服务属性允许为所有 [`swimlane`](/swimlanes/) 类型的元素配置 Editbar 控件。

~~~jsx
properties: {
    $swimlane: [
        {
            type: "header",
            label: "Swimlane header style",
            // ...
        }
    ]
}
~~~

**相关复合控件：** [边框](api/diagram_editor/editbar/complex_controls/border.md)、[排列](api/diagram_editor/editbar/complex_controls/arrange.md)、[表头](api/diagram_editor/editbar/complex_controls/header.md)、[通用表头](api/diagram_editor/editbar/complex_controls/headercommon.md)、[表头位置](api/diagram_editor/editbar/complex_controls/headerposition.md)、[大小](api/diagram_editor/editbar/complex_controls/size.md)、[文本对齐](api/diagram_editor/editbar/complex_controls/textalign.md)、[文本样式](api/diagram_editor/editbar/complex_controls/textstyle.md)

## 为线条配置 Editbar {#configure-editbar-for-lines}

`$line` 服务属性允许为所有 [`line`](/lines/) 类型的元素配置 Editbar 控件。

~~~jsx
properties: {
    $line: [
        {
            type: "lineShape",
            label: "Line connection type",
            // ...
        }
    ]
}
~~~

**相关复合控件：** [边框](api/diagram_editor/editbar/complex_controls/border.md)、[线条形状](api/diagram_editor/editbar/complex_controls/lineshape.md)、[指针视图](api/diagram_editor/editbar/complex_controls/pointerview.md)

## 为线条标题配置 Editbar {#configure-editbar-for-line-titles}

`$lineTitle` 服务属性允许为所有 [`lineTitle`](/line_titles/) 类型的元素配置 Editbar 控件。

~~~jsx
properties: {
    $lineTitles: [
        {
            type: "textAlign",
            label: "Text align",
            // ...
        },
        // ...
    ]
}
~~~

**相关复合控件：** [文本对齐](api/diagram_editor/editbar/complex_controls/textalign.md)、[文本样式](api/diagram_editor/editbar/complex_controls/textstyle.md)

## 创建和配置自定义 Editbar 控件 {#create-and-configure-custom-editbar-controls}

您可以使用 Editbar 视图的 [`controls`](api/diagram_editor/editbar/config/controls_property.md) 属性，基于[**基础控件**](api/diagram_editor/editbar/basic_controls_overview.md)和/或[**复合控件**](api/diagram_editor/editbar/complex_controls_overview.md)创建自定义控件。

:::warning
不建议使用默认控件类型的名称（参见[***基础控件***](api/diagram_editor/editbar/basic_controls_overview.md)和/或[***复合控件***](api/diagram_editor/editbar/complex_controls_overview.md)）作为自定义控件的名称。请为每个自定义控件使用唯一的名称，以避免出错！
:::

创建自定义控件后，您需要通过 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 属性将其应用到所需的 Diagram 元素上。

<iframe src="https://snippet.dhtmlx.com/w8mrh3ay?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
