---
sidebar_label: 导出 Diagram
title: 导出 Diagram
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解导出 Diagram 的相关内容。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 导出 Diagram {#exporting-diagram}

您可以通过 Export 对象的相关 [pdf()](api/export/pdf_method.md)/[png()](api/export/png_method.md) 方法将 Diagram 导出为 PDF 或 PNG 格式：

<iframe src="https://snippet.dhtmlx.com/ybpmz0zk?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

要调整导出设置，请将包含配置选项的对象传递给所需的方法。

查看可用设置的列表：

- [pdf()](api/export/pdf_method.md) 方法的设置
- [png()](api/export/png_method.md) 方法的设置

## 导出样式 {#exporting-styles}

默认情况下，Diagram 页面上包含的所有 CSS 样式都会被发送到导出服务。这会导致请求大小增加，进而可能导致请求失败。

该库允许您：

- 通过将 Diagram 对象的 [`exportStyles`](api/diagram/exportstyles_property.md) 配置属性设置为 *false*，阻止所有样式被发送到导出服务：

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles: false
});
~~~

- 通过在 [`exportStyles`](api/diagram/exportstyles_property.md) 数组中设置所需样式的绝对路径，定义一组要导出的样式：

<iframe src="https://snippet.dhtmlx.com/jm8if6nh?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

:::note
必须仅使用绝对路径，不能使用相对路径。
:::
