---
sidebar_label: exportStyles
title: exportStyles 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 exportStyles 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# exportStyles

:::info
默认情况下，页面中包含的所有 CSS 样式在导出 DHTMLX Diagram 时都会被发送到导出服务。因此，请求的大小会增加，这可能导致请求失败。

为避免此问题，您可以通过应用 `exportStyles` 属性来减小导出数据的大小。
:::

### 描述 {#description}

@short: 可选。定义导出 Diagram 时发送给导出服务的样式

### 用法 {#usage}

~~~jsx
exportStyles?: boolean;
//或
exportStyles?: string[];
~~~

### 默认配置 {#default-config}

~~~jsx
exportStyles: true
~~~

### 示例 {#example}

将 `exportStyles` 属性设置为 *false*，以防止所有样式被发送到导出服务：

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles: false
});
~~~

或者定义您希望导出的一组样式。为此，您需要将所需样式的绝对路径以字符串值的形式设置到 `exportStyles` 数组中：

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles:[
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ]
});
~~~

:::tip
您必须只使用绝对路径，而不能使用相对路径
:::

**更新日志：**v3.1 中新增

**相关文章：**[导出 Diagram](guides/data_export.md)

**相关示例：**[Diagram. 导出. 导出样式](https://snippet.dhtmlx.com/jm8if6nh)
