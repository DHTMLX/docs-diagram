---
sidebar_label: typeConfig
title: typeConfig 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 typeConfig 属性。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# typeConfig

:::info
该属性在 Editor 中不起作用
:::

### 描述 {#description}

@short: 可选。为处于 mindmap 和 PERT 模式的 Diagram 提供配置设置的对象

对于处于 mindmap 模式的 Diagram，`typeConfig` 属性用于定义形状的方向。如果未应用该属性，子形状将根据主算法自动排列。

对于处于 PERT 模式的 Diagram，`typeConfig` 属性允许设置任务形状中日期的渲染格式。

### 用法 {#usage}

- 适用于 mindmap 模式

~~~jsx
typeConfig?: {
    direction?: "left" | "right";
}

//or
typeConfig?: {
    side?: {
        left?: string[],
        right?: string[]
    }
}
~~~

- 适用于 PERT 模式

~~~jsx
typeConfig?: {
    dateFormat?: string; // 默认为 %d-%m-%Y
}
~~~

### 参数 {#parameters}

`typeConfig` 对象可以包含以下参数之一：

- 适用于 mindmap 模式：
    - `direction` - （可选）设置图形的方向：
      - `"left"` - 将图形的子形状放置在根形状的左侧
      - `"right"` - 将图形的子形状放置在根形状的右侧
    - `side` - （可选）一个为指定的子形状设置强制方向的对象。该对象包含一组 *key:value* 键值对，其中 *key* 是形状的方向（left、right），*value* 是包含形状 ID 的数组
- 适用于 PERT 模式：
    - `dateFormat` - （可选）设置 `task` 类型形状中日期的渲染格式。影响用户界面中日期的渲染

:::tip
对于处于 mindmap 模式的 Diagram，您可以使用 `direction` 属性或 `side` 属性。请勿同时使用两者！
:::

### 示例 {#example}

- 适用于 mindmap 模式：

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap",
    typeConfig: {
        direction: "right"
    }
});
~~~

或

~~~jsx {3-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap",
    typeConfig: {
        side: {
            left: ["2", "3"],
            right: ["4", "5"]
        }
    }
});
~~~

请注意，未在 `side` 选项中设置的其他子形状将根据主算法自动排列。

- 适用于 PERT 模式：

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

**更新日志：**

- 用于 PERT 模式的 `dateFormat` 属性已在 v6.1 中新增
- 已在 v3.1 中新增。

**相关文章：** [Diagram 的 mindmap 模式下形状的排列方式](guides/diagram/configuration.md#arranging-shapes-in-the-mindmap-mode-of-diagram)

**相关示例：**

- [Diagram。Mindmap 模式。方向 ("left" | "right")](https://snippet.dhtmlx.com/pzllujx3)
- [Diagram。Mindmap 模式。自定义方向](https://snippet.dhtmlx.com/atto9ckg)
- [Diagram 和 Gantt。PERT 图表。完全集成](https://snippet.dhtmlx.com/gcnx4a9h)
