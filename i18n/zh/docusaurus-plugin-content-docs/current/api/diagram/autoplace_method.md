---
sidebar_label: autoPlace()
title: autoPlace 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 autoPlace 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# autoPlace()

:::info
`autoPlace()` 方法仅在图表的默认模式下有效，且仅适用于形状
:::

### 描述 {#description}

@short: 按层级结构自动排列已连接的图表形状

### 用法 {#usage}

~~~ts
autoPlace(config?: object): void;
~~~

### 参数 {#parameters}

- `config` - （可选）一个包含自动布局配置设置的对象。如果未指定，将应用默认设置。您可以在此指定以下参数：
    - `mode` - （可选）形状连接的模式，`"direct"`（默认）或 `"edges"`
    - `graphPadding` - （可选）设置未连接图表之间的距离，默认为 *200*
    - `placeMode` - （可选）设置形状的排列模式，`"orthogonal"`（默认）或 `"radial"`
    - `itemPadding` - （可选）项之间的最小间距（最小值为 *1*），默认为 *20*
    - `levelPadding` - （可选）层级之间的最小间距（最小值为 *1*），默认为 *20*

### 示例 {#example}

~~~jsx {4-7}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
    mode: "edges",
    placeMode: "radial"
});
~~~

## 连接形状的模式 {#modes-of-connecting-shapes}

### "direct" 模式 {#direct-mode}

无箭头连接线按"从中心到中心"对齐；线条为直线且呈对角线状。

![](/img/direct_mode.png)

### "edges" 模式 {#edges-mode}

连接线按"从边到边"对齐。

:::note
如果在连接线上设置了 `fromSide` 和 `toSide`，自动布局算法将保留这些值，但在计算排列时不会使用它们。定义连接线的关键属性是 `from` 和 `to`，而 `fromSide` 和 `toSide` 由算法自动计算。
:::

:::info
要为线条添加箭头，请在[线对象](lines/configuration_properties.md)的配置中指定 `forwardArrow: "filled"` 或 `backArrow: "filled"`。
:::

`"edges"` 模式下的连接线可以是：
  - 直线（如果设置[线对象](lines/configuration_properties.md)的 `connectType: "straight"` 属性）

![](/img/edges_straight_mode.png)

  - 或 90 度折线（如果设置[线对象](lines/configuration_properties.md)的 `connectType: "elbow"` 属性）

![](/img/edges_mode.png)

## 形状的排列模式 {#modes-of-placement-of-shapes}

### "orthogonal" 模式 {#orthogonal-mode}

形状沿垂直线和水平线排列

- 线条为 `"direct"` 模式下的 `"orthogonal"` 排列

![](/img/direct_ortogonal.png)


- 线条为 `"edges"` 模式下的 `"orthogonal"` 排列

![](/img/edges_ortogonal.png)

### "radial" 模式 {#radial-mode}

形状围绕中心形状（即连接数最多的形状）排列在假想的圆周上

- 线条为 `"direct"` 模式下的 `"radial"` 排列

![](/img/direct_radial.png)

- 线条为 `"edges"` 模式下的 `"radial"` 排列

![](/img/edges_radial.png)


**更新日志**：

- `itemPadding` 和 `levelPadding` 参数在 v6.1.3 中新增
- `placeMode` 参数在 v5.0 中新增
- `autoplacement` 属性在 v3.0 中新增

**相关文章**：[自动排列形状](guides/manipulating_items.md#arranging-shapes-automatically)

**相关示例**：
- [Diagram. 默认模式。带内边距选项的径向自动布局](https://snippet.dhtmlx.com/huut0l1s)
- [Diagram. 默认模式。自动布局](https://snippet.dhtmlx.com/f3uekgjw)
