---
sidebar_label: itemRotateEnd
title: 编辑器的 itemRotateEnd 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 itemRotateEnd 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# itemRotateEnd

### 描述 {#description}

@short: 在元素的旋转操作完成后（用户释放鼠标按键时）触发

### 用法 {#usage}

~~~jsx
"itemRotateEnd": ({
    id: string | number,
    angle: number
}) => void;
~~~

### 参数 {#parameters}

事件的回调函数会传入一个包含以下参数的对象：

- `id` - 被旋转的元素的 id
- `angle` - 元素的最终旋转角度（单位：度）

### 示例 {#example}

~~~jsx
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件添加处理程序
editor.events.on("itemRotateEnd", ({ id, angle }) => {
    console.log(`The item ${id} finished rotating, the final angle: ${angle}`);
    // 在这里可以将元素的新旋转角度保存到服务器
});
~~~

**更新日志**：

- 该事件已在 v6.1 中新增

**相关 API**：

- [`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md)
- [`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md)

**相关示例**：

- [Diagram Editor. 通过事件管理形状的移动、旋转和调整大小](https://snippet.dhtmlx.com/qldjbbm7)