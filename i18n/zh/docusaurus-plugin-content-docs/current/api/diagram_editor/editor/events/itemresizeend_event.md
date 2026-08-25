---
sidebar_label: itemResizeEnd
title: 编辑器的 itemResizeEnd 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 itemResizeEnd 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# itemResizeEnd

### 描述 {#description}

@short: 在元素的调整大小操作完成后（用户释放鼠标按键时）触发

### 用法 {#usage}

~~~jsx
"itemResizeEnd": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => void;
~~~

### 参数 {#parameters}

事件的回调函数会传入一个包含以下参数的对象：

- `id` - 被调整大小的元素的 id
- `width` - 元素的最终宽度
- `height` - 元素的最终高度
- `x` - 元素的最终 X 坐标
- `y` - 元素的最终 Y 坐标
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

// 为事件添加处理程序
editor.events.on("itemResizeEnd", ({ id, width, height }) => {
    console.log(`
        The item ${id} finished resizing:
            the final width: ${width}
            the final height: ${height}
    `);
    // 在这里可以将元素的新尺寸保存到服务器
});
~~~

**更新日志**：

- 该事件已在 v6.1 中新增

**相关 API**：

- [`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md)
- [`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md)

**相关示例**：

- [Diagram Editor. 通过事件管理形状的移动、旋转和调整大小](https://snippet.dhtmlx.com/qldjbbm7)