---
sidebar_label: filter()
title: Data Collection 的 filter() 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 data collection 的 filter() 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# filter()

### 描述 {#description}

@short: 筛选 Diagram 中的数据项

### 用法 {#usage}

~~~jsx
filter(
    rule?: function,
    config?: {
        id?: string,
        add?: boolean,
        permanent?: boolean
    }
): void;

// 或

filter(
    rule?:{
        by?: string | number,
        match?: string | number | boolean,
        compare?: (value, match, item) => {}
    },
    config?:{
        id?: string,
        add?: boolean,
        permanent?: boolean
    }
): void;
~~~

### 参数 {#parameters}

- `rule` - （可选）筛选条件
  - 如果设置为 *function*，将按照函数中指定的规则进行筛选。该函数接受一个数据项对象作为参数
  - 如果设置为 *object*，该参数可以包含以下属性：
    - `by` - （可选）数据项属性的键
    - `match` - （可选）要匹配的模式
    - `compare` - （可选）用于扩展筛选的函数。该函数返回 *true* 或 *false*，并接受三个参数：
      - `value` - 要比较的值
      - `match` - 要匹配的模式
      - `item` - 需要比较其值的数据项（例如一个图形）
- `config` - （可选）定义筛选参数的对象。该对象可以包含以下属性：
  - `id` - （可选）筛选器的 id
  - `add` - （可选）定义下一次筛选是应用于已经筛选过的数据（<i>true</i>），还是应用于初始数据（<i>false</i>，默认值）
  - `permanent` - （可选）设置为 *true* 可使当前筛选器永久生效。即使下一次筛选的配置对象中没有 `add:true` 属性，该筛选器仍会被应用。此类筛选器只能通过 [`resetFilter()`](api/data_collection/resetfilter_method.md) 方法移除

### 示例 {#example}

~~~jsx {6-9,11-12}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

// 按照函数中指定的规则进行筛选
diagram.data.filter(function (shape) {
    return shape.id > 3;
});

// 按照图形属性的键进行筛选
diagram.data.filter({ by: "text", match: "Read N" });
~~~

若要将 Diagram 恢复到初始状态，请在不传递参数的情况下调用 `filter()` 方法。

~~~jsx
diagram.data.filter();
~~~

**相关文章：** [筛选数据项](guides/manipulating_items.md#filtering-items)

**相关示例：** [Diagram. 数据. 筛选图形](https://snippet.dhtmlx.com/tm43bsgn)

**更新日志：** v6.0 中更新
