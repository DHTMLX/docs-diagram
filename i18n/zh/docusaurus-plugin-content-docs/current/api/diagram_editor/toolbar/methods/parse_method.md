---
sidebar_label: parse()
title: Toolbar 的 parse 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Toolbar 的 parse 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# parse()

### 描述 {#description}

@short: 将项目加载到 Diagram Editor 的 Toolbar 中

### 用法 {#usage}

~~~jsx
parse(items: (object | string)[]): void;
~~~

### 参数 {#parameters}

- `items` -（必需）解析到 Toolbar 中的项目数组。完整的可用项目列表请参见[此处](api/diagram_editor/toolbar/config/items_property.md)

### 示例 {#example}

~~~jsx {7-8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        toolbar: true
    }
});
// 使用指定的项目显示 Toolbar
editor.toolbar.parse([{ type: "file", disabled: false }, "spacer", "scale"]);
~~~

**更新日志**：v6.0 中新增
