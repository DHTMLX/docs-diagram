---
sidebar_label: itemMoveEnd
title: 编辑器的 itemMoveEnd 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 itemMoveEnd 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# itemMoveEnd

### 描述 {#description}

@short: 在元素移动完成后触发

:::note
该事件不适用于 `line` 对象。

无论选中多少个元素，该事件仅针对目标元素触发。被拖动元素的 id 在回调函数的 `batch` 参数中提供。
:::

### 用法 {#usage}

~~~jsx
"itemMoveEnd": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### 参数 {#parameters}

事件的回调函数会传入一个包含以下参数的对象：

  - `id` - 元素的 id
  - `batch` - 被移动元素 id 组成的数组
  - `coords` - 一个包含元素移动后位置的 `x` 和 `y` 坐标的对象，其中：
    - `x` - 元素的水平位置，从左向右移动
    - `y` - 元素的垂直位置，从上向下移动
  - `event` - 事件对象

### 示例 {#example}

~~~jsx {6-13}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件添加处理程序
editor.events.on("itemMoveEnd", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**更新日志**：

- `batch` 参数已在 v6.0 中新增
- 回调函数自 v6.0 起以对象作为参数

**相关 API**：

- [`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md)
- [`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md)

**相关示例**：

- [Diagram Editor. 通过事件管理形状的移动、旋转和调整大小](https://snippet.dhtmlx.com/qldjbbm7)

