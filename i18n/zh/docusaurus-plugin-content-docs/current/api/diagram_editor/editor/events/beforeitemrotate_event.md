---
sidebar_label: beforeItemRotate
title: Editor 的 beforeItemRotate 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 beforeItemRotate 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# beforeItemRotate

### 描述 {#description}

@short: 在项目旋转之前触发

### 用法 {#usage}

~~~jsx
"beforeItemRotate": ({
    id: string | number,
    angle: number
}) => boolean | void;
~~~

### 参数 {#parameters}

事件的回调函数使用一个包含以下参数的对象调用：

- `id` - 正在旋转的项目的 id
- `angle` - 项目的新旋转角度（以度为单位）

### 返回值 {#returns}

回调函数返回 `false` 以阻止项目被旋转；否则返回 `true`。

### 示例 {#example}

~~~jsx
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("beforeItemRotate", ({ id, angle }) => {
    if (angle > 90 && angle < 270) {
        console.log(`Preventing rotation of the item ${id} by this angle.`);
        return false; // 阻止旋转
    }
    console.log(`Rotating the item ${id} by the angle: ${angle}`);
});
~~~

**更新日志：**

- 该事件在 v6.1 中新增

**相关 API：**

- [`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md)
- [`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

**相关示例：**

- [Diagram Editor. 通过事件管理形状的移动、旋转和大小调整](https://snippet.dhtmlx.com/qldjbbm7)