---
sidebar_label: beforeItemCatch
title: Editor 的 beforeItemCatch 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 beforeItemCatch 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# beforeItemCatch

### 描述 {#description}

@short: 在项目被捕获之前触发

:::info
该事件仅在 Diagram 的**组织结构图**和 `mindmap` 模式下有效，且必须将 `itemsDraggable` 属性设置为 `true`。
:::

### 用法 {#usage}

~~~jsx
"beforeItemCatch": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => boolean | void;
~~~

### 参数 {#parameters}

该事件的回调函数使用一个包含以下参数的对象进行调用：

  - `id` - 被移动项目的 id
  - `targetId` - 目标项目的 id
  - `batch` - 已移动元素 id 组成的数组
  - `event` - 事件对象

### 返回值 {#returns}

回调函数返回 `false` 以阻止项目被捕获；否则返回 `true`

:::info
要处理 Diagram Editor 的内部事件，您可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-20}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("beforeItemCatch", ({ id, targetId }) => {
  if (targetId === "2.1"){
    console.log(`
      Item ${id} won't be be caught by the item "2.1"
    `);
    return false;
  }
  else{
    console.log(`
      Item ${id} will be caught by the item ${targetId}
    `);
    return true;
  }
});
~~~

**更新日志**：

- `batch` 参数已在 v6.0 中新增
- 自 v6.0 起，回调函数以对象作为参数
