---
sidebar_label: lineConfig
title: lineConfig 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 lineConfig 属性。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# lineConfig

### 描述 {#description}

@short: 可选。包含连接线默认配置的对象

### 用法 {#usage}

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // "curved" 类型仅用于 mindmap 模式
};
~~~

### 参数 {#parameters}

`lineConfig` 对象包含以下参数：

- `lineType` - (可选) 连接线的默认类型。如果线对象不包含 `"type"` 属性，则应用该值
- `lineGap` - (可选) 设置连接线到直角弯折处的距离
- `connectType` - (可选) 设置线条的连接类型：`"elbow"` | `"straight"` | `"curved"` (`"curved"` 类型仅用于 mindmap Diagram 模式)。如果线对象不包含 `"connectType"` 属性，则应用该值

:::info
如果线对象不包含相同的设置，则将应用 `lineType` 和 `connectType` 设置的值。
:::

### 默认配置 {#default-config}

~~~jsx
lineConfig: {
    lineType: "line",
    lineGap: 10
}
~~~

`connectType` 参数具有以下默认值：

- `"elbow"` - 适用于 default 和 org chart Diagram 模式
- `"curved"` - 适用于 mindmap Diagram 模式 (此类型仅用于 mindmap Diagram 模式)

### 示例 {#example}

~~~jsx {2-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineGap: 50,
        connectType: "straight"
    },
    // 其他配置参数
});
~~~

应用 `lineGap` 属性的结果如下图所示：

![](/img/linegap_config.png)

**相关示例**：[Diagram. 默认模式. 活动图](https://snippet.dhtmlx.com/a9t2z2dt)

**更新日志**：

- `connectType` 参数在 v6.1 中新增
- `lineGap` 参数在 v5.0 中新增（请参阅[迁移文章](migration.md#42---50)）
- v4.2 中新增

**相关文章**：[设置图形之间的连接](/lines/#setting-connections-between-shapes)
