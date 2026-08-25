---
sidebar_label: beforeItemMove
title: Editor 的 beforeItemMove 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 beforeItemMove 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# beforeItemMove

### 描述 {#description}

@short: 在项目被移动之前触发

:::note
该事件不适用于 `line` 对象。

无论选中的元素数量如何，该事件仅针对目标元素触发。被拖动元素的 id 通过回调函数的 `batch` 参数提供。
:::

### 用法 {#usage}

~~~jsx
"beforeItemMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent,
}) => boolean | void;
~~~

### 参数 {#parameters}

该事件的回调函数使用一个包含以下参数的对象进行调用：

  - `id` - 项目的 id
  - `batch` - 已移动元素 id 组成的数组
  - `coords` - 一个包含移动前项目位置的 `x` 和 `y` 坐标的对象，其中：
    - `x` - 项目的水平位置，从左向右移动
    - `y` - 项目的垂直位置，从上向下移动
  - `event` - 事件对象

### 返回值 {#returns}

回调函数返回 `false` 以阻止项目被移动；否则返回 `true`

:::info
要处理 Diagram Editor 的内部事件，您可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-14}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeItemMove", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**更新日志**：

- `batch` 参数已在 v6.0 中新增
- 自 v6.0 起，回调函数以对象作为参数

**相关 API**：

- [`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md)
- [`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md)

**相关示例**：

- [Diagram Editor. 通过事件管理形状的移动、旋转和调整大小](https://snippet.dhtmlx.com/qldjbbm7)
