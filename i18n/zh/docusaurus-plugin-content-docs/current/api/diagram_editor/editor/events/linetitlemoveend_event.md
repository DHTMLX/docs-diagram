---
sidebar_label: lineTitleMoveEnd
title: 编辑器的 lineTitleMoveEnd 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 lineTitleMoveEnd 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# lineTitleMoveEnd

### 描述 {#description}

@short: 在线条的文本元素移动完成后触发

### 用法 {#usage}

~~~jsx
"lineTitleMoveEnd": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: obj
}) => void;
~~~

### 参数 {#parameters}

事件的回调函数会传入一个包含以下参数的对象：

  - `event` - 事件对象
  - `lineId` - 线条的 id
  - `titleId` - 线条的文本元素的 id
  - `coords` - 一个包含文本元素移动后位置的 `x` 和 `y` 坐标的对象，其中：
    - `x` - 文本元素的水平位置，从左向右移动
    - `y` - 文本元素的垂直位置，从上向下移动

:::info
如需处理 Diagram Editor 的内部事件，可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-13}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件添加处理程序
editor.events.on("lineTitleMoveEnd", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**更新日志**：回调函数自 v6.0 起以对象作为参数