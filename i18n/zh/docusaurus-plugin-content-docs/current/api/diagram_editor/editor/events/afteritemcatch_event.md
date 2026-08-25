---
sidebar_label: afterItemCatch
title: Editor 的 afterItemCatch 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 afterItemCatch 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# afterItemCatch

### 描述 {#description}

@short: 元素被捕获后触发

:::info
该事件仅在 Diagram 的 **组织结构图** 和 `mindmap` 模式下有效，此时必须将 `itemsDraggable` 属性设置为 `true`。
:::

### 用法 {#usage}

~~~jsx
"afterItemCatch": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => void;
~~~

### 参数 {#parameters}

事件的回调函数调用时会传入一个包含以下参数的对象：

  - `id` - 被移动元素的 id
  - `targetId` - 目标元素的 id
  - `batch` - 被移动元素的 id 数组
  - `event` - 一个事件对象

### 示例 {#example}

~~~jsx {6-11}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("afterItemCatch", ({ id, targetId }) => {
    console.log(`
        item ${id} is caught by the item ${targetId}
    `);
});
~~~

**更新日志：**

- `batch` 参数已在 v6.0 中新增
- 自 v6.0 起，回调函数接收一个对象作为参数
