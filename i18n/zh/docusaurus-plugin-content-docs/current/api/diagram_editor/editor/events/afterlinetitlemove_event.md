---
sidebar_label: afterLineTitleMove
title: Editor 的 afterLineTitleMove 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 afterLineTitleMove 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# afterLineTitleMove

### 描述 {#description}

@short: 当连线的文本元素按网格步长移动时触发

### 用法 {#usage}

~~~jsx
"afterLineTitleMove": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: object
}) => void;
~~~

### 参数 {#parameters}

该事件的回调函数使用一个包含以下参数的对象进行调用：

  - `event` - 事件对象
  - `lineId` - 连线的 id
  - `titleId` - 连线的文本元素的 id
  - `coords` - 一个包含移动后文本元素位置的 `x` 和 `y` 坐标的对象，其中：
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

// 为事件绑定处理程序
editor.events.on("afterLineTitleMove", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**更新日志**：自 v6.0 起，回调函数将参数作为对象接收
