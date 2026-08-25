---
sidebar_label: defaults
title: Editor 的 defaults 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 defaults 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# defaults

### 描述 {#description}

@short: 可选。用于设置形状或线条默认配置的对象

### 用法 {#usage}

~~~jsx
defaults?: {
    [type: string]: object
};
~~~

### 参数 {#parameters}

`defaults` 对象可以包含一组 `key:value` 键值对，其中 *key* 是形状或线条的类型，*value* 是相应[形状](shapes/configuration_properties.md)或[线条](lines/configuration_properties.md)的一组配置设置。

:::note
`type` 和 `id` 属性不能在形状/线条的默认配置中定义。
:::

### 示例 {#example}

~~~jsx {24}
const defaults = {
    // "rectangle" 类型所有形状的默认设置
    rectangle: {
        fill: "#CEEFE1",
        stroke: "#0AB169",
        strokeWidth: 2,
        width: 140,
        height: 140,
        text: "Default text"
    },
    // "line" 类型所有线条的默认设置
    line: {
        strokeWidth: 3,
        stroke: "#245CE0"
    },
    // "dash" 类型所有线条的默认设置
    dash: {
        strokeWidth: 3,
        stroke: "#245CE0"
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    defaults
});
~~~

:::info
为形状/线条的各个类型定义默认设置后，在为这些类型的形状/线条[准备数据集](guides/loading_data.md#preparing-data-to-load)时，您可以省略这些属性，也可以重新定义它们的值。
:::

**更新日志**：为线条设置默认配置的功能在 v4.2 中新增

**相关文章：**

- [设置形状的默认配置](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape)
- [设置形状预览](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)

**相关示例：** [Diagram Editor。设置默认线条（连接器）类型。尝试将形状 A 连接到形状 B](https://snippet.dhtmlx.com/22abzn5m)
