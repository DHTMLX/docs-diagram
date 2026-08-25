---
sidebar_label: png()
title: png 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 png 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# png()

### 描述 {#description}

@short: 将图表导出为 PNG 文件

:::note
为了避免导出过程中出现问题，必须将 Diagram 图形的所有图像设置为 base64 格式或使用绝对 URL 路径。
:::

### 用法 {#usage}

~~~jsx
png(config?: object): Promise<void>;
~~~

### 返回值 {#returns}

数据导出操作的 Promise 对象

### 参数 {#parameters}

- `config` - （可选）导出设置对象。您可以为导出为 PNG 指定以下设置：
  - `url?: string` - （可选）执行导出并返回导出文件的服务的 URL。该设置为可选项，仅当您需要指定本地导出服务的路径时才需要使用。默认值为 `https://export.dhtmlx.com/diagram/png/6.1.0`
  - `name?: string` - （可选）导出文件的名称
  - `header?: string` - （可选）导出文件中页眉的 HTML 模板
  - `footer?: string` - （可选）导出文件中页脚的 HTML 模板

### 示例 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    // 配置选项
});
diagram.data.parse(data);

// 默认导出
diagram.export.png()
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

// 使用配置设置导出
diagram.export.png({
    name: "result_png"
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

**相关文章：** [导出 Diagram](guides/data_export.md)

**相关示例：**

- [Diagram. 导出. 导出图表](https://snippet.dhtmlx.com/ybpmz0zk)
- [Diagram. 导出. 左下角水印](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. 导出. 重复水印](https://snippet.dhtmlx.com/emkea55j)
