---
sidebar_label: pdf()
title: pdf 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 pdf 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# pdf()

### 描述 {#description}

@short: 将图表导出为 PDF 文件

:::note
为了避免导出过程中出现问题，必须将 Diagram 图形的所有图像设置为 base64 格式或使用绝对 URL 路径。
:::

### 用法 {#usage}

~~~jsx
pdf(config?: object): Promise<void>;
~~~

### 返回值 {#returns}

数据导出操作的 Promise 对象

### 参数 {#parameters}

- `config` - （可选）导出设置对象。您可以为导出为 PDF 指定以下设置：
    - `url?: string` - （可选）执行导出并返回导出文件的服务的 URL。该设置为可选项，仅当您需要指定本地导出服务的路径时才需要使用。默认值为 `https://export.dhtmlx.com/diagram/pdf/6.1.0`
    - `name?: string` - （可选）导出文件的名称
    - `pdf?: object` - （可选）pdf 选项对象。您可以在此指定以下属性：
        - `scale?: number` - （可选）网格渲染的缩放比例（介于 *0.1* 和 *2* 之间）
        - `landscape?: boolean` - （可选）定义横向方向，默认值为 `false`。仅当指定了 `format` 选项时才生效
        - `width?: string | number` - （可选）输出页面的宽度。该属性的值可以指定为数字或带单位的字符串
        - `height?: string | number` - （可选）输出页面的高度。该属性的值可以指定为数字或带单位的字符串
        - `margin?: object` - （可选）纸张边距对象，默认值为 `none`
            - `left?: string | number` - （可选）定义左边距，接受带单位（px、in、cm、mm）的值
            - `right?: string | number` - （可选）定义右边距，接受带单位（px、in、cm、mm）的值
            - `top?: string | number` - （可选）定义上边距，接受带单位（px、in、cm、mm）的值
            - `bottom?: string | number` - （可选）定义下边距，接受带单位（px、in、cm、mm）的值
        - `format?: string` - （可选）定义纸张格式。如果设置了该选项，将优先于 `width` 或 `height` 选项。默认未指定。请查看所有可用[格式及其大小](#list-of-formats)的列表。
        - `pageRanges?: string` - （可选）要打印的纸张范围，例如 1-5、8、11-13。仅当指定了 `format` 选项时才生效
        - `displayHeaderFooter?: boolean` - （可选）定义是否显示页眉和页脚，默认值为 *false*
        - `footerTemplate?: string` - （可选）打印页脚的 HTML 模板。它应该是有效的 HTML 标记，并使用以下类将打印值注入其中：
            - `date` - （可选）格式化后的打印日期
            - `title` - （可选）文档名称
            - `pageNumber` - （可选）当前页码。默认使用该项
            - `totalPages` - （可选）文档的总页数。默认使用该项
        - `headerTemplate?: string` - （可选）打印页眉的 HTML 模板。它应该是有效的 HTML 标记，并使用以下类将打印值注入其中：
            - `date` - （可选）格式化后的打印日期
            - `title` - （可选）文档名称
            - `pageNumber` - （可选）当前页码
            - `totalPages` - （可选）文档的总页数
    - `header?: string` - （可选）导出文件中页眉的 HTML 模板
    - `footer?: string` - （可选）导出文件中页脚的 HTML 模板

### 示例 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    // 配置选项
});
diagram.data.parse(data);

// 默认导出
diagram.export.pdf()
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

// 使用配置设置导出
diagram.export.pdf({
    url: "https://export.dhtmlx.com/diagram/pdf/6.1.0",
    name:"result_pdf"
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

### 详情 {#details}

:::info
请设置足够的边距，以正确显示 `headerTemplate`/`footerTemplate`。
:::

## 格式列表 {#list-of-formats}

| 格式    | 尺寸               |
| --------- | ------------------ |
| `"Letter"`  | (8.5in x 11in)     |
| `"Legal"`   | (8.5in x 14in)     |
| `"Tabloid"` | (11in x 17in)      |
| `"Ledger"`  | (17in x 11in)      |
| `"A0"`      | (33.1in x 46.8in)  |
| `"A1"`      | (23.4in x 33.1in)  |
| `"A2"`      | (16.54in x 23.4in) |
| `"A3"`      | (11.7in x 16.54in) |
| `"A4"`      | (8.27in x 11.7in)  |
| `"A5"`      | (5.83in x 8.27in)  |
| `"A6"`      | (4.13in x 5.83in)  |

**相关文章：** [导出 Diagram](guides/data_export.md)

**相关示例：**

- [Diagram. 导出. 导出图表](https://snippet.dhtmlx.com/ybpmz0zk)
- [Diagram. 导出. 左下角水印](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. 导出. 重复水印](https://snippet.dhtmlx.com/emkea55j)
