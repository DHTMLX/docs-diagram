---
sidebar_label: afterItemResize
title: Editor 的 afterItemResize 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 afterItemResize 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# afterItemResize

### 描述 {#description}

@short: 在项目大小发生变化后触发

### 用法 {#usage}

~~~jsx
"afterItemResize": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => void;
~~~

### 参数 {#parameters}

该事件的回调函数使用一个包含以下参数的对象进行调用：

- `id` - 被调整大小的项目的 id
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

### 示例 {#example}

~~~jsx
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("afterItemResize", ({ id, width, height }) => {
    console.log(`
        The item ${id} has been resized:
            width: ${width}
            height: ${height}
    `);
});
~~~

**更新日志**：

- 该事件已在 v6.1 中新增

**相关 API：**

- [`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md)
- [`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md)

**相关示例：**

- [Diagram Editor：通过事件管理形状的移动、旋转和缩放](https://snippet.dhtmlx.com/qldjbbm7)