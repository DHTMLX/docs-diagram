---
sidebar_label: shapeMoveEnd
title: 编辑器的 shapeMoveEnd 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 shapeMoveEnd 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# shapeMoveEnd

### 描述 {#description}

@short: 在形状移动后触发

:::note
无论选中了多少个元素，该事件仅针对目标元素触发。被拖动元素的 id 会通过回调函数的 `batch` 参数提供。
:::

### 用法 {#usage}

~~~jsx
"shapeMoveEnd": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### 参数 {#parameters}

该事件的回调函数会使用一个包含以下参数的对象进行调用：

  - `id` - 项目的 id
  - `batch` - 已移动元素 id 组成的数组
  - `coords` - 一个包含形状移动后位置的 `x` 和 `y` 坐标的对象，其中：
    - `x` - 形状的水平位置，从左到右移动
    - `y` - 形状的垂直位置，从上到下移动
  - `event` - 一个事件对象

:::info
要处理 Diagram Editor 的内部事件，您可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-13}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("shapeMoveEnd", ({ id, coords }) => {
    console.log(`
        Shape ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**更新日志：**

- `batch` 参数在 v6.0 中新增
- 从 v6.0 起，回调函数以对象作为参数
