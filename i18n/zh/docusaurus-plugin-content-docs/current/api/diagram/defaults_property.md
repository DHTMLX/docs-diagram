---
sidebar_label: defaults
title: defaults 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 defaults 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# defaults

### 描述 {#description}

@short: 可选。用于设置形状或连线默认配置的对象

### 用法 {#usage}

~~~jsx
defaults?: {
    [type: string]: object
};
~~~

### 参数 {#parameters}

`defaults` 属性是一个对象，其中包含一组 `key:value` 键值对，*key* 表示形状或连线的类型，*value* 是一个对象，包含相应 [形状](shapes/configuration_properties.md) 或 [连线](lines/configuration_properties.md) 的一系列配置设置。

:::note
您不能在形状/连线的默认配置中定义 `type` 和 `id`
:::

### 示例 {#example}

~~~jsx {24}
const defaults = {
    // 所有 "rectangle" 类型形状的默认设置
    rectangle: {
        fill: "#CEEFE1",
        stroke: "#0AB169",
        strokeWidth: 2,
        width: 140,
        height: 140,
        text: "Default text"
    },
    // 所有 "line" 类型连线的默认设置
    line: {
        strokeWidth: 3,
        stroke: "#245CE0"
    },
    // 所有 "dash" 类型连线的默认设置
    dash: {
        strokeWidth: 3,
        stroke: "#245CE0"
    }
};

const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    defaults
});
~~~

:::note
在为各类型的形状/连线定义默认设置之后，您可以在为这些类型的形状/连线[准备数据集](guides/loading_data.md#preparing-data-to-load)时省略这些属性，也可以重新定义它们的值。
:::

**更新日志：** 为连线设置默认配置的功能 v4.2 中新增

**相关文章：**

- [设置形状的默认配置](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape)
- [设置形状的预览](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)
