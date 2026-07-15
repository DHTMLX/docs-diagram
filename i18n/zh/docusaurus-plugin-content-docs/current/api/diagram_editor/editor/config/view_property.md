---
sidebar_label: view
title: Editor 的 view 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 view 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# view

### 描述 {#description}

@short: 用于配置 Diagram Editor 的 Toolbar、Shapebar 和 Editbar 视图的对象

### 用法 {#usage}

~~~jsx
view: {
    toolbar?: boolean | object,
    shapebar?: boolean | object,
    editbar?: boolean | object
};
~~~

### 参数 {#parameters}

- `toolbar` - （可选）用于显示/隐藏 `Toolbar`（如果为 *boolean* 类型）或配置其外观（如果为 *object* 类型）。有关配置工具栏的更多信息，请参阅 [Toolbar API](api/diagram_editor/toolbar/api_overview.md) 部分
- `shapebar` - （可选）用于显示/隐藏 `Shapebar`（如果为 *boolean* 类型）或配置其外观（如果为 *object* 类型）。有关配置 shapebar 的更多信息，请参阅 [Shapebar API](api/diagram_editor/shapebar/api_overview.md) 部分
- `editbar` - （可选）用于显示/隐藏 `Editbar`（如果为 *boolean* 类型）或配置其外观（如果为 *object* 类型）。有关配置 Editbar 的更多信息，请参阅 [Editbar API](api/diagram_editor/editbar/api_overview.md) 部分

### 默认配置 {#default-config}

~~~jsx
view: {
    toolbar: true,
    shapebar: true,
    editbar: true
}
~~~

### 示例 {#example}

~~~jsx {3-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "toolbar_custom",
            data: ["file", "separator", "scale"]
        },
        shapebar: {
            width: 400
        },
        editbar: false
    }
    // other configurations
});
~~~

**更新日志：** v6.0 中新增
