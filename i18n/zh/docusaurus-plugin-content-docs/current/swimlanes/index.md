---
sidebar_label: Swimlane
title: Swimlane
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Swimlane。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# Swimlane {#swimlanes}

## Swimlane 概述 {#swimlane-overview}

swimlane 表示 Diagram 中的一个矩形元素，由垂直或水平排列的单元格（或称泳道）组成。每个单元格（*type: "$sgroup"*）都可以包含子项，例如图形或 group。

:::note
swimlane 仅在 Diagram/Diagram Editor 的默认模式下可用（type: `"default"`）。
:::

<iframe src="https://snippet.dhtmlx.com/z6x5m3gb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

swimlane 可以帮助您从头到尾可视化任何流程（业务、制造、服务或其他类型）及其各个环节。

## 创建 swimlane {#creating-swimlanes}

要创建 swimlane，您需要指定 `type: "$swimlane"`，并在准备要加载到 diagram 的数据集时，在 swimlane 对象内定义 swimlane 布局的结构：

~~~jsx
const data = [
    // 配置 swimlane
    {
        type: "$swimlane",
        height: 500,
        width: 850,
        // swimlane 的布局必须至少包含一个单元格
        layout: [
            [1] // id 为 "1"、type 为 "$sgroup" 的单元格
        ]
    }
];

// 初始化 diagram
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

上面的代码示例展示了使用默认设置（即没有标题和子标题）配置 swimlane 的最简单方式。

### Swimlane 结构 {#swimlane-structure}

swimlane 的结构可以有很大不同，它通过 swimlane 对象的 [layout](swimlanes/configuration_properties.md) 配置属性进行定义。该属性允许您将 swimlane 的单元格排列成行和列。

您只需将一个包含矩阵的数组指定为该属性的值即可。矩阵可以是一个数组：

~~~jsx
// 具有 3 列的 swimlane
layout: [
    [1, 2, 3]
]
~~~

也可以是用逗号分隔的一组数组：

~~~jsx
// 具有 2 行 3 列的 swimlane
layout: [
    [1, 2, 3],
    [4, 5, 6]
]
~~~

其中：

- 布局中的每个单元格都有一个唯一的编号；
- 数组的数量决定行数（如果有多个数组，则所有数组中的单元格数量必须相等）；
- 数组中的单元格数量决定列数。

### Swimlane 对象的属性 {#properties-of-a-swimlane-object}

请查看 [swimlane 对象的完整配置属性列表](swimlanes/configuration_properties.md)，以便根据您的需求创建具有不同设置的各种 swimlane。

## 配置 swimlane 单元格 {#configuring-a-swimlane-cell}

当您在页面上初始化 swimlane 时，单元格的 id 及其配置都会自动生成。要更改单元格的默认配置，请创建一个单元格对象，该对象必须包含 `type: "$sgroup"` 和 `id` 属性，并在其中指定所需的配置设置：

~~~jsx
const data = [
    // 配置 swimlane
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 850,
        layout: [
            [1, 2, 3]
        ]
    },
    // 配置 swimlane 单元格
    {
        type: "$sgroup",
        id: 3,
        style: {
            fill: "#D4DAE4"
        }
    }
];
~~~

### 单元格对象的属性 {#properties-of-a-cell-object}

请查看 [swimlane 单元格的完整配置属性列表](swimlanes/configuration_properties.md#properties-of-a-swimlane-cell)。

## 对单元格进行分组 {#grouping-cells}

当您为每个单元格指定唯一编号时，所有单元格都将带边框渲染：

~~~jsx
layout: [
    [1, 2, 3],
    [4, 5, 6]
]
~~~

![](/img/swimlane_cells.png)

如果需要，您可以对一定范围内的单元格进行分组，并移除它们之间的边框。为此，请从该范围内选择任意一个单元格，并将该范围内其他单元格的唯一编号替换为所选单元格的编号。<br/>
下面是对第一行前两个单元格进行分组的示例：

~~~jsx
layout: [
    [1, 1, 3],
    [4, 5, 6]
]
~~~

结果如下所示：

![](/img/swimlane_merge_cell_row.png)

下面是对第二列单元格进行分组的示例：

~~~jsx
layout: [
    [1, 2, 3],
    [4, 2, 6]
]
~~~

结果：

![](/img/swimlane_merge_cell_col.png)

**相关示例**：[Diagram editor。默认模式。配置 swimlane 中的列和行](https://snippet.dhtmlx.com/uzx5ulal)

## Swimlane 及其单元格的尺寸 {#sizes-of-a-swimlane-and-its-cells}

swimlane 的尺寸由其 `width` 和 `height` 配置属性定义。

~~~jsx
const data = [
    // 配置 swimlane
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 850,
        layout: [
            [1, 2, 3]
        ]
    }
];
~~~

### 单元格宽度 {#cell-width}

单元格的宽度取决于 swimlane 的宽度、列数，以及左/右 swimlane 标题和子标题的高度。例如：

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 830,
        layout: [
            // 3 列
            [1, 2, 3]
        ],
        header: {
            position: "left",
            height: 40
        },
        subHeaderRows: {
            enable: true,
            position: "left",
            height: 40
        }
    }
];
~~~

每个单元格的宽度可以通过 *(830-40-40)/3 = 250* 计算得出。

### 单元格高度 {#cell-height}

单元格的高度取决于 swimlane 的高度、行数，以及上/下 swimlane 标题和子标题的高度。例如：

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 830,
        layout: [
            // 2 行
            [1, 2, 3],
            [4, 5, 6]
        ],
        header: {
            position: "top",
            height: 40
        },
        subHeaderCols: {
            enable: true,
            position: "top",
            height: 40
        }
    }
];
~~~

每个单元格的高度可以通过 *(500-40-40)/2 = 210* 计算得出。
