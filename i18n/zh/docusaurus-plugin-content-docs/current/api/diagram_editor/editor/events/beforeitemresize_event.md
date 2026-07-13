---
sidebar_label: beforeItemResize
title: Editor 的 beforeItemResize 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 beforeItemResize 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# beforeItemResize

### 描述 {#description}

@short: 在项目的大小被更改之前触发

### 用法 {#usage}

~~~jsx
"beforeItemResize": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => boolean | void;
~~~

### 参数 {#parameters}

该事件的回调函数使用一个包含以下参数的对象进行调用：

- `id` - 正在调整大小的项目的 id
- `width` - 项目的新宽度
- `height` - 项目的新高度
- `x` - 项目的新 X 坐标
- `y` - 项目的新 Y 坐标
- `dir` - 调整大小操作的方向：
	- `"n"` - 北
    - `"ne"` - 东北
    - `"e"` - 东
    - `"se"` - 东南
    - `"s"` - 南
    - `"sw"` - 西南
    - `"w"` - 西
    - `"nw"` - 西北

### 返回值 {#returns}

回调函数返回 `false` 以阻止项目被调整大小；否则返回 `true`。

### 示例 {#example}

~~~jsx
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeItemResize", ({ id, width, height }) => {
    if (width < 50 || height < 50) {
        console.log(`Preventing resize of item ${id} because it's too small.`);
        return false; // 阻止调整大小
    }
    console.log(`Resizing the item ${id} to the width: ${width}, height: ${height}`);
});
~~~

**更新日志**：

- 该事件已在 v6.1 中新增

**相关 API**：

- [`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md)
- [`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md)

**相关示例**：

- [Diagram Editor. 通过事件管理形状的移动、旋转和调整大小](https://snippet.dhtmlx.com/qldjbbm7)