---
sidebar_label: parse()
title: Data Collection 的 parse 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 parse 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# parse()

### 描述 {#description}

@short: 从本地数据源将数据加载到 Diagram 中并对其进行处理

### 用法 {#usage}

~~~jsx
parse(
    data: object[] | { data: object[]; links: object[] } | string,
    driver?: object | string
): void;
~~~

### 参数 {#parameters}

- `data: object[] | { data: object[]; links: object[] } | string` - （必需）要加载的数据。您可以以任意受支持的数据格式加载数据。数据结构取决于 Diagram 的模式：
    - 对于 default、组织结构图和思维导图等 Diagram 模式，数据以包含一组数据对象的数组形式提供
    ~~~jsx
    data: object[]; // 所有形状和连接的数组
    ~~~
    - 对于 PERT Diagram 模式，数据为一个对象，包含：
      -  `data` 数组（用于形状：`"task"`、`"milestone"`、`"project"`）
      -  `links` 数组（用于形状之间的连接）
    ~~~jsx
    {
        data: object[]; // 形状（任务、里程碑、项目）的数组
        links: object[] // 形状之间连接的数组
    };
    ~~~
- `driver` - （可选）`DataDriver` 或数据类型（`"json"`、`"csv"`、`"xml"`），默认为 `"json"`

### 示例 {#example}

- 适用于 Diagram 的组织结构图模式：

~~~jsx
const data = [
    {
        id: "1",
        text: "Chairman & CEO",
        title: "Henry Bennett",
        img: "../common/img/avatar-1.png"
    },
    {
        id: "2",
        text: "Manager",
        title: "Mildred Kim",
        img: "../common/img/avatar-2.png"
    },
    {
        id: "3",
        text: "Technical Director",
        title: "Jerry Wagner",
        img: "../common/img/avatar-3.png"
    },
    { id: "1-2", from: "1", to: "2", type: "line" },
    { id: "1-3", from: "1", to: "3", type: "line" }
];

const diagram = new dhx.Diagram("diagram_container", {
    type: "org"
});

diagram.data.parse(data);
~~~

- 适用于 Diagram 的 PERT 模式：

~~~jsx
const dataset = {
    data: [
        { id: "1", text: "Project #1", type: "project", parent: null },
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
    ],
    links: [
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" },
    ]
};

const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});

diagram.data.parse(dataset);
~~~

**相关文章：**  [加载和存储数据](guides/loading_data.md)

**相关示例：**
- [Diagram。组织结构图模式。基本初始化](https://snippet.dhtmlx.com/5ign6fyy)
- [Diagram。PERT 图表。初始化](https://snippet.dhtmlx.com/4h5fi7xd)
