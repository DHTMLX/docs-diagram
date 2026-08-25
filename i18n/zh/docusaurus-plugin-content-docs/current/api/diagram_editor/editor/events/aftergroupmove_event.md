---
sidebar_label: afterGroupMove
title: Editor 的 afterGroupMove 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 afterGroupMove 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# afterGroupMove

### 描述 {#description}

@short: 当组或泳道移动一个网格步长时触发

:::note
该事件仅针对目标元素触发，无论选中了多少个元素。被拖动元素的 id 会通过回调函数的 `batch` 参数提供。
:::

### 用法 {#usage}

~~~jsx
"afterGroupMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### 参数 {#parameters}

事件的回调函数调用时会传入一个包含以下参数的对象：

  - `id` - 元素的 id
  - `batch` - 被移动元素的 id 数组
  - `coords` - 一个包含移动后组或泳道位置的 `x` 和 `y` 坐标的对象，其中：
    - `x` - 组/泳道的水平位置，从左向右移动
    - `y` - 组/泳道的垂直位置，从上向下移动
  - `event` - 一个事件对象

:::info
如需处理 Diagram Editor 的内部事件，可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-13}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterGroupMove", ({ id, coords }) => {
    console.log(`
        Group ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**更新日志：**

- `batch` 参数已在 v6.0 中新增
- 自 v6.0 起，回调函数接收一个对象作为参数
