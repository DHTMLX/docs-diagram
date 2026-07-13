---
sidebar_label: parse()
title: Editor 的 parse 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 parse 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 免费的 30 天评估版本。
---

# parse()

### 描述 {#description}

@short: 从本地数据源将数据加载到 editor 中

### 用法 {#usage}

~~~jsx
parse(data: array): void;
~~~

### 参数 {#parameters}

- `data` - （必填）应解析到 editor 中的数据

您可以以任何受支持的数据格式加载数据。详情请参阅 [`parse()`](api/data_collection/parse_method.md) 一文。

### 示例 {#example}

~~~jsx
const data = [
    // shapes
    {
        "id": "a",
        "x": 50,
        "y": 53,
        "type": "triangle",
        "text": "Shape 1",
        "height": 50,
        "width": 50
    },
    {
        "id": "b",
        "x": 367,
        "y": 158,
        "type": "rectangle",
        "text": "Shape 2"
    },

    // connector line
    {
        "id": "ab",
        "from":"a",
        "to":"b",
        "type": "line"
    },
];

const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);
~~~

**相关示例**：

- [Diagram Editor。默认模式。基本初始化](https://snippet.dhtmlx.com/xshe9ut7)
- [Diagram Editor。组织结构图模式。基本初始化](https://snippet.dhtmlx.com/og4qm3ja)
- [Diagram Editor。思维导图模式。情感思维导图](https://snippet.dhtmlx.com/lo1vm0e8)
