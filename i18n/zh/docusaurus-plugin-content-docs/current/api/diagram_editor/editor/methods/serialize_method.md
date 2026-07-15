---
sidebar_label: serialize()
title: serialize Method of Editor
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 serialize 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# serialize()

### 描述 {#description}

@short: 将编辑器的数据序列化为 JSON 对象数组

### 用法 {#usage}

~~~jsx
serialize(): array;
~~~

### 返回值 {#returns}

该方法返回一个 JSON 对象数组，数组中的每个对象对应编辑器数据中的一个项目

### 示例 {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

const data = editor.serialize();
~~~

**相关示例**：[Diagram Editor · 组织结构图模式 · 实时编辑器](https://snippet.dhtmlx.com/bng7ego7)
