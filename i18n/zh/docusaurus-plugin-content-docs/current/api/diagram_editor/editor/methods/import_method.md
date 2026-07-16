---
sidebar_label: import()
title: Editor 的 import 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 import 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 免费的 30 天评估版本。
---

# import()

### 描述 {#description}

@short: 将数据从现有的 diagram 导入到 editor 中

### 用法 {#usage}

~~~jsx
import(diagram: object): void;
~~~

### 参数 {#parameters}

- `diagram` - （必填）diagram 对象

### 示例 {#example}

~~~jsx
// initializing Diagram
const diagram = new dhx.Diagram("diagram", {
    type: "org"
});
// loading data into Diagram
diagram.data.parse(data);

// initializing Editor
const editor = new dhx.DiagramEditor("editor_container");

// importing data from Diagram into Editor
editor.import(diagram);
~~~

您可以以任何受支持的数据格式加载数据。详情请参阅 [`parse()`](api/data_collection/parse_method.md) 一文。

**相关示例**：[Diagram Editor。组织结构图模式。实时编辑器](https://snippet.dhtmlx.com/bng7ego7)
