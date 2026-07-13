---
sidebar_label: lineConfig
title: lineConfig 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 lineConfig 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# lineConfig

### 描述 {#description}

@short: 可选。一个包含连接线默认配置的对象

:::info
`lineType`、`lineDirection` 和 `arrowsHidden` 设置将应用于通过 Editor 添加的新连接线。
:::

### 用法 {#usage}

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineDirection?: "backArrow" | "forwardArrow",
    arrowsHidden?: boolean,
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // "curved" 类型仅在 mindmap 模式下使用
};
~~~

### 参数 {#parameters}

`lineConfig` 对象包含以下参数：

- `lineType` -（可选）新连接线的默认类型。如果连接线对象不包含 `"type"` 属性，则应用该值
- `lineDirection` -（可选）新连接线的方向
- `arrowsHidden` -（可选）定义是否隐藏新连接线的箭头
- `lineGap` -（可选）设置连接线到直角弯折处的距离
- `connectType` -（可选）设置线条的连接类型：`"elbow"` | `"straight"` | `"curved"`（`"curved"` 类型仅在 mindmap Diagram 模式下使用）。如果连接线对象不包含 `"connectType"` 属性，则应用该值

:::note
`lineDirection`、`arrowsHidden` 和 `lineGap` 参数仅在 Editor 的 default 模式下有效（*type: `"default"`*）
:::

### 默认配置 {#default-config}

~~~jsx
lineConfig: {
    lineType:"line",
    lineDirection: "forwardArrow",
    arrowsHidden: false,
    lineGap: 10
}
~~~

`connectType` 参数具有以下默认值：

- `"elbow"` - 适用于 default 和 org chart 模式
- `"curved"` - 适用于 mindmap 模式（该类型仅在 mindmap 模式下使用）

### 示例 {#example}

~~~jsx {2-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineDirection: "backArrow",
        arrowsHidden: true,
        lineGap: 50,
        connectType: "straight"
    },
    // 其他配置参数
});
~~~

应用 `lineGap` 属性后的效果如下图所示：

![](/img/linegap_config.png)

**更新日志：**

- `connectType` 参数在 v6.1 中新增
- `lineGap` 参数在 v5.0 中新增（请查看[迁移文章](migration.md#42---50)）
- v4.2 中新增

**相关示例：** [Diagram editor. 设置默认线条（连接线）类型。尝试将形状 A 连接到形状 B](https://snippet.dhtmlx.com/22abzn5m)
