---
sidebar_label: afterItemMove
title: Editor 的 afterItemMove 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 afterItemMove 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# afterItemMove

### 描述 {#description}

@short: 当某一项目按网格步长移动时触发

:::note
该事件不适用于 `line` 对象。

无论选中的元素数量多少，该事件仅针对目标元素触发。拖动元素的 id 会通过回调函数的 `batch` 参数提供。
:::

### 用法 {#usage}

~~~jsx
"afterItemMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### 参数 {#parameters}

该事件的回调函数使用一个包含以下参数的对象进行调用：

- `id` - 项目的 id
- `batch` - 已移动元素 id 组成的数组
- `coords` - 一个包含移动后项目位置的 `x` 和 `y` 坐标的对象，其中：
    - `x` - 项目的水平位置，从左向右移动
    - `y` - 项目的垂直位置，从上向下移动
- `event` - 事件对象

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
editor.events.on("afterItemMove", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**更新日志**：

- `batch` 参数已在 v6.0 中新增
- 从 v6.0 起，回调函数将参数作为对象接收

**相关 API：**

- [`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md)
- [`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md)

**相关示例：**

- [Diagram Editor：通过事件管理形状的移动、旋转和缩放](https://snippet.dhtmlx.com/qldjbbm7)