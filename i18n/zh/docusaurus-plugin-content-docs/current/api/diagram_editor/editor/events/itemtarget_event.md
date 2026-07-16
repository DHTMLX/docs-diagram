---
sidebar_label: itemTarget
title: 编辑器的 itemTarget 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 itemTarget 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# itemTarget

### 描述 {#description}

@short: 当被移动的元素悬停在目标元素上方时触发

:::info
该事件仅在 Diagram 的 **组织结构图** 和 `mindmap` 模式下有效，且必须将 `itemsDraggable` 属性设置为 `true`。

该事件不适用于 *被移动元素的父元素*，也不适用于 *具有 `giveItem: false` 属性的被移动元素*。
:::

### 用法 {#usage}

~~~jsx
"itemTarget": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => boolean | void;
~~~

### 参数 {#parameters}

事件的回调函数会传入一个包含以下参数的对象：

  - `id` - 被移动元素的 id
  - `targetId` - 目标元素的 id
  - `batch` - 被移动元素 id 组成的数组
  - `event` - 事件对象

### 返回值 {#returns}

回调函数返回 `false` 以阻止元素悬停在目标元素上方；否则返回 `true`

:::info
如需处理 Diagram Editor 的内部事件，可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-11}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件添加处理程序
editor.events.on("itemTarget", ({ id, targetId }) => {
    console.log(`
          Item ${id} is hovering over the item ${targetId}
      `);
});
~~~

**更新日志**：

- `batch` 参数已在 v6.0 中新增
- 回调函数自 v6.0 起以对象作为参数
