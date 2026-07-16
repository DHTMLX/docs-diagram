---
sidebar_label: 线条属性
title: 线条属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解线条属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 线条属性 {#line-properties}

:::note
请使用 HEX 格式指定颜色值。
:::

## 通用属性 {#common-properties}

### 用法 {#usage}

~~~jsx
const data = [
    // 线条对象
    {
        type: "line" | "dash",
        id?: string | number,
        from?: string | number,
        to?: string | number,
        connectType?: "straight" | "elbow" | "curved",
        strokeWidth?: number, // 默认为 2
        stroke?: string
    },
    // 更多线条对象
]
~~~

### 描述 {#description}

每个线条对象都可以包含以下属性：

- `type` -（必需）连接线的类型："*line*" 或 "*dash*"
- `id` -（可选）连接线的 id
- `from` -（可选）父级形状的 id
- `to` -（可选）子级形状的 id
- `connectType` -（可选）线条的连接类型：["straight"](/lines/#lines-in-the-default-mode)、["elbow"](/lines/#lines-in-the-org-chart-mode)（默认/组织结构图模式下的默认类型）、["curved"](/lines/#lines-in-the-mindmap-mode)（思维导图模式下的默认类型）
- `strokeWidth` -（可选）线条的宽度，默认为 2
- `stroke` -（可选）线条的颜色；默认模式下为 "#2198F3"，组织结构图/思维导图模式下默认为 "#CCC"

## 默认模式特有的属性 {#properties-specific-for-the-default-mode}

### 用法 {#usage-1}

~~~jsx
const data = [
    // 线条对象
    {
        // ... 通用属性
        forwardArrow?: string, // 默认为 "filled"
        backArrow?: string, // 默认为 "filled"
        fromSide?: "top" | "bottom" | "left" | "right" | "center",
        toSide?: "top" | "bottom" | "left" | "right" | "center",
        cornersRadius?: number,
        customGap?: number,
        points?: [
            { x: number, y: number, custom?: boolean },
            // 更多点对象
        ]
    },
    // 更多线条对象
]
~~~

### 描述 {#description-1}

在为默认模式下要加载到图表中的线条准备数据集时，您可以向线条的配置对象中添加以下属性：

- `forwardArrow` -（可选）设置正向箭头连接符，并定义箭头的类型（默认为 `"filled"`）
- `backArrow` -（可选）设置反向箭头连接符，并定义箭头的类型（默认为 `"filled"`）
- `fromSide` -（可选）连接线起始的形状边（"*top*"、"*bottom*"、"*left*"、"*right*"、"*center*"）
- `toSide` -（可选）连接到另一个形状的目标边（"*top*"、"*bottom*"、"*left*"、"*right*"、"*center*"）
- `cornersRadius` -（可选）连接线圆角的半径
- `customGap` -（可选）设置从形状到连接线直角弯折处的距离
- `points` -（可选）为线条设置一个包含点对象的数组。每个对象包含以下属性：
    - `x` -（必需）点的 x 坐标
    - `y` -（必需）点的 y 坐标
    - `custom` -（可选）定义该点是否固定。若为 *true*，则只有在与该点进行交互后才能更改其位置

### 示例 {#example}

~~~jsx
const data = [
    // 配置形状
    { "id": 1, "x": 200, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 200, "y": 320, "text": "Call Client and \n set-up Appointment", "type": "process" },
    // 配置线条
    {
        "type": "line",
        "stroke": "#0AB169",
        "connectType": "straight",
        "from": 1,
        "to": 2,
        "fromSide": "bottom",
        "toSide": "top",
        "forwardArrow": "filled"
    }
];
~~~

## PERT 模式下链接的特有属性 {#properties-specific-for-links-in-the-pert-mode}

### 用法 {#usage-2}

~~~jsx
const dataset = {
    data: [...], // 形状数组（任务、里程碑、项目）
    links: [
        // 链接对象
        {
            id?: string | number,
            source: string | number,
            target: string | number
        },
        // 更多链接对象
    ]
}
~~~

### 描述 {#description-2}

在为 PERT 模式下要加载到图表中的链接准备数据集时，您可以向链接的配置对象中添加以下属性：

- `id` -（可选）链接连接符的 id
- `source` -（必需）链接起始任务的 id
- `target` -（必需）链接结束任务的 id

:::info 重要
请注意，PERT Diagram 中仅支持 `type: "0"`（"finish" -> "start"）类型的链接。所有 [DHTMLX Gantt 图表中使用的其他链接类型](https://docs.dhtmlx.com/gantt/desktop__link_properties.html)也都将按照 `type: "0"` 处理。
:::

:::tip
请注意，由于 Diagram 数据集合中各项的 id 必须唯一，因此在加载数据或添加新链接时，系统会为链接的现有 id 添加 `$link` 前缀。

例如：

~~~jsx
{
    data: [...],
    links: [
        { id: "1" }, // 在 diagram 中将显示为 "$link:1"
    ]
}

// diagram.data.getItem("$link:1");
~~~
:::

### 示例 {#example-1}

~~~jsx {11-16}
const dataset = {
    data: [
        // 配置 project 形状
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 配置 task 形状
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // 配置链接对象
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
};
~~~

**更新日志：**

- 用于 Diagram PERT 模式的 `links` 类型连接器已在 v6.1 中新增
- `line` 对象的 `title` 属性已在 v6.0 中弃用

**相关文章：** [配置线条](/lines/)
