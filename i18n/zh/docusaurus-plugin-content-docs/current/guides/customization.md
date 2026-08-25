---
sidebar_label: 自定义元素
title: 自定义元素
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解自定义元素的相关内容。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 自定义元素 {#customizing-items}

您可以通过在对象内部使用各种[配置属性](/category/items-api/)来修改 Diagram 元素的外观。您还可以通过创建自定义形状来更改 Diagram 的外观和风格。

## 通过配置属性设置形状和线条的样式 {#styling-shapes-and-lines-via-the-configuration-properties}

### 设置形状样式 {#styling-shapes}

形状对象提供了丰富的属性，您可以使用这些属性修改形状的外观和风格。

<iframe src="https://snippet.dhtmlx.com/a9t2z2dt?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

一次性设置同一类型所有形状样式的好方法是通过 Diagram 的 [`defaults`](api/diagram/defaults_property.md) 属性为形状指定样式设置：

~~~jsx
const defaults = {
  start: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  end: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  // ...
};
~~~

[查看形状对象属性的完整列表](shapes/configuration_properties.md)。

### 设置线条样式 {#styling-lines}

要更改连接线的外观，请在线条对象内部使用所需的配置属性。

~~~jsx
const data = [
    {
      id: "1-2",
      from: "1",
      to: "2",
      type: "line",
      strokeType: "dash", // 虚线
      stroke: "#fa55d1" // 线条颜色
    }
];
~~~

[查看线条对象属性的完整列表](lines/configuration_properties.md)。

查看示例：

<iframe src="https://snippet.dhtmlx.com/um7gy2tb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 定义形状的模板 {#defining-the-shapes-template}

您可以通过向 Diagram 中添加新类型的形状并为其定义模板来创建自定义 Diagram。为此，请使用 Diagram 对象的 [`addShape()`](api/diagram/addshape_method.md) 方法。

### 默认模式下的示例 {#example-in-the-default-mode}

<iframe src="https://snippet.dhtmlx.com/2tzyfois?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 组织结构图模式下的示例 {#example-in-the-org-chart-mode}

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 思维导图模式下的示例 {#example-in-the-mindmap-mode}

<iframe src="https://snippet.dhtmlx.com/do1jwmw1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### PERT 模式下的示例 {#example-in-the-pert-mode}

<iframe src="https://snippet.dhtmlx.com/mtk92awx?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 设置目标形状的样式 {#styling-target-shapes}

在 Diagram Editor 中使用组织结构图和思维导图时，您可以为目标元素添加自定义样式。

:::note
样式设置不适用于被移动元素的父级，也不适用于设置了 `giveItem: false` 的被移动元素
:::

~~~jsx
<style>
    .dhx_diagram_item.dhx_action__target--take {
        // 可以捕获其他元素的目标元素的样式
    }
    .dhx_diagram_item.dhx_action__target--doesnt_take {
        // 无法捕获其他元素的目标元素的样式
    }
</style>
~~~

## 通过配置属性设置组的样式 {#styling-groups-via-the-configuration-properties}

### 设置组的样式 {#styling-the-group}

要为组指定自定义样式，您可以使用[组对象](groups/configuration_properties.md)的 `style` 属性。例如：

<iframe src="https://snippet.dhtmlx.com/pdkgis8g?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 设置组标题的样式 {#styling-the-group-header}

您可以通过[组对象](groups/configuration_properties.md)的 `header` 属性的相关属性来更改组标题的默认样式。

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## 通过配置属性设置泳道的样式 {#styling-swimlanes-via-the-configuration-properties}

### 设置泳道的样式 {#styling-the-swimlane}

您可以通过[泳道对象](swimlanes/configuration_properties.md#properties-of-a-swimlane)的 `style` 属性自定义泳道的 `strokeWidth`、`stroke` 和 `fill` 设置：

~~~jsx
const data = [
    {
        "type": "$swimlane",
        "width": 970,
        "height": 790,
        "header": {
            "text": "Game levels and locations",
            "closable": true
        },
        "layout": [
            ["1"],
            ["2"],
            ["3"],
            ["4"],
            ["5"]
        ],
        "style": {
            "strokeWidth": 5,
            "stroke": "#083796",
            "fill": "#D4DAE4"
        }
    }
];
~~~

### 设置泳道标题/子标题的样式 {#styling-the-swimlane-headerssub-headers}

[泳道对象](swimlanes/configuration_properties.md#properties-of-a-swimlane)的 `header`、`subHeaderRows` 和 `subHeaderCols` 属性包含一组额外的属性，用于自定义泳道的标题和子标题。

例如，您可以通过 `subHeaderCols` 属性更改泳道顶部子标题的背景颜色：

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template"
         },
        "layout": [
            [1, 2, 3, 4]
        ],
        "subHeaderCols": {
            "headers": [
                {
                    "text": "September",
                    "fill": "#f35c4f66"
                },
                {
                    "text": "October",
                    "fill": "#9b60f866"
                },
                {
                    "text": "November",
                    "fill": "#ffae1266"
                },
                {
                    "text": "December",
                    "fill": "#3cc97a66"
                }
            ]
        }
    }
];
~~~

查看完整示例：

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 设置泳道单元格的样式 {#styling-swimlane-cells}

如果需要自定义泳道中的单个单元格，请使用[泳道单元格对象](swimlanes/configuration_properties.md#properties-of-a-swimlane-cell)（`type:"$sgroup"`）的 `style` 属性。

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "layout": [
            [1, 2, 3, 4]
        ],
        // ...
    },
    {
        "id": 1,
        "type": "$sgroup",
        "style": {
            "fill": "#D4DAE4"
        },
        "x": 0,
        "y": 80
    }
];
~~~

**相关示例：** [Diagram。默认模式。瀑布 Diagram 模板](https://snippet.dhtmlx.com/k5vlvj8i)
