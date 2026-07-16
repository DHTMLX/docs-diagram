---
sidebar_label: beforeShapeMove
title: Editor 的 beforeShapeMove 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 beforeShapeMove 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# beforeShapeMove

### 描述 {#description}

@short: 在形状移动之前触发

:::note
无论选中的元素数量是多少，该事件只针对目标元素触发。被拖动元素的 id 存储在回调函数的 `batch` 参数中。
:::

### 用法 {#usage}

~~~jsx
"beforeShapeMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => boolean | void;
~~~

### 参数 {#parameters}

事件的回调函数使用一个包含以下参数的对象调用：

  - `id` - 形状的 id
  - `batch` - 被移动元素的 id 数组
  - `coords` -  一个包含移动前形状位置的 `x` 和 `y` 坐标的对象，其中：
    - `x` - 形状的水平位置，从左向右移动
    - `y` - 形状的垂直位置，从上向下移动
  - `event` - 事件对象

### 返回值 {#returns}

回调函数返回 `false` 以阻止形状被移动；否则返回 `true`

:::info
若要处理 Diagram Editor 的内部事件，可以使用 `on()` 方法。
:::

### 示例 {#example}

~~~jsx {6-14}
// 初始化 Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// 加载数据
editor.parse(data);

// 为事件绑定处理程序
editor.events.on("beforeShapeMove", ({ id, coords }) => {
    console.log(`
        Shape ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**更新日志：**

- `batch` 参数在 v6.0 中新增
- 自 v6.0 起，回调函数以对象作为参数
- `id` 和 `coords` 参数在 v4.0 中新增