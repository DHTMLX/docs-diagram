---
sidebar_label: afterItemRotate
title: Editor 的 afterItemRotate 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 afterItemRotate 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# afterItemRotate

### 描述 {#description}

@short: 在项目旋转后触发

### 用法 {#usage}

~~~jsx
"afterItemRotate": ({
    id: string | number,
    angle: number
}) => void;
~~~

### 参数 {#parameters}

该事件的回调函数使用一个包含以下参数的对象进行调用：

- `id` - 被旋转项目的 id
- `angle` - 项目的新旋转角度（以度为单位）

### 示例 {#example}

~~~jsx
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("afterItemRotate", ({ id, angle }) => {
    console.log(`The item ${id} has been rotated by the angle: ${angle}`);
});
~~~

**更新日志**：

- 该事件已在 v6.1 中新增

**相关 API：**

- [`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md)
- [`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

**相关示例：**

- [Diagram Editor：通过事件管理形状的移动、旋转和缩放](https://snippet.dhtmlx.com/qldjbbm7)