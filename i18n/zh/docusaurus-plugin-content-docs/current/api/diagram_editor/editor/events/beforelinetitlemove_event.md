---
sidebar_label: beforeLineTitleMove
title: Editor 的 beforeLineTitleMove 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 beforeLineTitleMove 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# beforeLineTitleMove

### 描述 {#description}

@short: 在线条的文本元素移动之前触发

### 用法 {#usage}

~~~jsx
"beforeLineTitleMove": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: obj
}) => boolean | void;
~~~

### 参数 {#parameters}

事件的回调函数使用一个包含以下参数的对象调用：

  - `event` - 事件对象
  - `lineId` - 线条的 id
  - `titleId` - 线条文本元素的 id
  - `coords` - 一个包含移动前文本元素位置的 `x` 和 `y` 坐标的对象，其中：
    - `x` - 文本元素的水平位置，从左向右移动
    - `y` - 文本元素的垂直位置，从上向下移动

### 返回值 {#returns}

回调函数返回 `false` 以阻止线条的文本元素被移动；否则返回 `true`

:::info
若要处理 Diagram Editor 的内部事件，可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-14}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("beforeLineTitleMove", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**更新日志：**

- 自 v6.0 起，回调函数以对象作为参数