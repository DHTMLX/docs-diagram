---
sidebar_label: 内联编辑
title: 内联编辑
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解内联编辑的相关内容。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 内联编辑 {#inline-editing}

内联编辑允许您通过双击 Diagram 元素来编辑其文本内容。您可以在 Diagram 和编辑器中编辑这些元素。

对于线条，内联编辑仅在 Diagram 的默认模式下启用。

![](/img/inline_editing.gif)

:::note
内联编辑不适用于自定义形状。
:::

此功能默认启用。要禁用内联编辑，请将您希望设为不可编辑的元素的 `editable` 属性设置为 *false*。

您可以在下方找到禁用 Diagram 元素内联编辑的示例：

#### 线条标题 {#line-titles}

~~~jsx title="禁用编辑线条文本内容的功能" {18}
const data = [
    // 配置形状
    { "id": "shape_1", "type": "start", "x": 0, "text": "Start" },
    { "id": "shape_2", "type": "process", "x": 400, "text": "Step 1" },
    // 配置线条
    {
        "id": "line_1",
        "type": "line",
        "from": "shape_1",
        "to": "shape_2"
    },
    // 配置线条标题
    {
        "id": "title_1",
        "type": "lineTitle",
        "parent": "line_1",
        "text": "Some text",
        "editable": false // 禁用线条文本元素的内联编辑功能
    }
];
~~~

#### 形状 {#shapes}

~~~jsx title="禁用编辑形状文本内容的功能"
const data = [
    { "id": 1, "x": 280, "y": 0, "text": "Start", "type": "start", "editable": false}
];
~~~

#### 组 {#groups}

~~~jsx title="禁用编辑组标题文本内容的功能"
const data = [
    {
        "type": "$group",
        "id": 1,
        "width": 400,
        "height": 200,
        "x": 0,
        "y": 0,
        "header": {
            "text": "Group 1",
            "editable": false
        }
    }
];
~~~

#### 泳道 {#swimlanes}

~~~jsx title="配置编辑泳道标题和子标题文本内容的功能"
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template",
            // 禁用标题的内联编辑功能
            "editable": false
        },
        "layout": [
            [1, 2, 3]
        ],
        "subHeaderCols": {
            "headers": [
                { "text": "September", "fill": "rgba(243, 92, 79, 0.4)" },
                // 启用该子标题的内联编辑功能
                { "text": "October", "fill": "rgba(155, 96, 248, 0.4)", "editable": true },
                { "text": "November", "fill": "rgba(255, 174, 18, 0.4)" }
            ],
            // 禁用所有子标题的内联编辑功能
            "editable": false
        }
    }
];
~~~

## 键盘快捷键 {#keyboard-shortcuts}

内联文本编辑器支持以下键盘快捷键：

| 快捷键 | 描述 |
|--------|-------------|
| `Ctrl+Enter`（Win）、`CMD+Enter`（macOS） | 为选中的元素打开内联文本编辑器。可作为双击操作的替代方式。仅适用于具有可编辑 `text` 属性的形状。 |
| `Shift+Enter` | 插入换行符（`\n`），同时保持编辑器处于打开状态。 |
| `Delete`（`Del`）、`Backspace` | 删除光标位置处的字符，不会删除元素本身。 |
| `Enter` | 确认当前文本并关闭编辑器。由于编辑器会在您输入时动态应用更改，按 Enter 键即表示编辑已成功完成。 |
| `Escape` | 放弃所有未保存的更改并关闭编辑器，将元素的文本恢复为编辑开始前的值。 |

## API 事件 {#api-events}

该库包含一组实用的 [API 事件](/api/inline_editor/)，您可以使用它们来控制编辑器打开/关闭时的行为，以及控制元素文本的编辑过程。
