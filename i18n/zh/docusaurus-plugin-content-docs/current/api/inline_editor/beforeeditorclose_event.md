---
sidebar_label: beforeEditorClose
title: beforeEditorClose Event
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 beforeEditorClose event。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# beforeEditorClose

### 描述 {#description}

@short: 在项目的内联编辑器关闭前触发

### 用法 {#usage}

~~~jsx
beforeEditorClose: (
    id: string | number,
    key: string,
    subId?: string
) => boolean | void;
~~~

### 参数 {#parameters}

该 event 的 callback 接受以下参数：

- `id` - (必需) 项目的 id
- `key` - (必需) 待编辑属性的名称
- `subId` - (可选) 泳道子表头或线条文本元素的 id

### 返回值 {#returns}

返回 `false` 以阻止关闭内联编辑器，否则返回 `true`。

### 示例 {#example}

~~~jsx {9-11}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 加载数据
diagram.data.parse(data);

// 为 event 附加处理程序
diagram.events.on("beforeEditorClose", (id, key, subId) => {
    console.log(id, key, subId);
    return true;
});
~~~

**更新日志：**

- `subHeaderId` 参数已在 v4.1 中更改为 `subId`
- v4.0 中新增
