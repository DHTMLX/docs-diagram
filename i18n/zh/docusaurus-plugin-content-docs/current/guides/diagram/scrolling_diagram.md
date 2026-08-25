---
sidebar_label: 滚动 Diagram
title: 滚动 Diagram
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解如何滚动 Diagram。浏览开发者指南和 API 参考、试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# 滚动 Diagram {#scrolling-diagram}

默认情况下，组件的大小会自动设置以适应内容。如有需要，组件将采用 HTML 容器的大小，并渲染水平和垂直方向的内部滚动条以适应内容。

## 滚动图表 {#scrolling-diagram-1}

您可以通过图表对象的 [`showItem()`](api/diagram/showitem_method.md) 方法，将图表滚动到所需项目所在的区域。

<iframe src="https://snippet.dhtmlx.com/d7kvzq4r?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

此外，您也可以使用 [`scrollTo()`](api/diagram/scrollto_method.md) 方法滚动到图表上的所需位置。

<iframe src="https://snippet.dhtmlx.com/f970hbym?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 获取滚动状态 {#getting-scroll-state}

Diagram API 允许您通过相关的 [`getScrollState()`](api/diagram/getscrollstate_method.md) 方法获取当前的滚动位置：

~~~jsx
// 返回初始滚动位置
const coords = diagram.getScrollState(); // -> {x:0,y:0}
~~~

该方法返回一个包含水平和垂直滚动位置的对象。

## 捕获图表滚动 {#catching-diagram-scrolling}

您可以使用 [`scroll`](api/diagram/scroll_event.md) 事件捕获 Diagram 滚动的开始。处理函数将滚动位置作为参数：

- `pos` - （*object*）滚动位置，是一个包含 x 和 y 属性的对象

~~~jsx
diagram.events.on("Scroll", (position) => {
    alert("The diagram has been scrolled:" + position);
});
~~~
