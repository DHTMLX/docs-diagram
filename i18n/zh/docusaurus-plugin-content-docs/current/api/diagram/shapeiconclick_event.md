---
sidebar_label: shapeIconClick
title: shapeIconClick 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 shapeIconClick 事件。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# shapeIconClick

### 描述 {#description}

@short: 点击形状工具栏图标时触发

### 用法 {#usage}

~~~jsx
"shapeIconClick": (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### 参数 {#parameters}

该事件的回调函数将使用以下参数调用：

- `id` - 图标的 id
- `event` - 原生 HTML 事件对象

### 示例 {#example}

~~~jsx {23-39}
// 初始化 Diagram
const diagram = new dhx.Diagram("diagram_container", {
    select: true,
    // 为项设置带按钮的工具栏
    toolbar: [
        {
            id: "add",
            content: "<i class='dxi dxi-plus-box'>"
        },
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>"
        }
    ]
});
// 加载数据
diagram.data.parse(data);

diagram.events.on("shapeIconClick", function (action) {
    const selectedId = diagram.selection.getItem().id;
    switch(action) {
        case "download":
            diagram.export.pdf();
            break;
        case "remove":
            diagram.data.remove(selectedId);
            break;
        case "add":
            diagram.data.add({
                text: "New shape",
                parent: selectedId,
            });
            break;
    }
});
~~~

**相关文章：**[事件处理](guides/event_handling.md)

**相关示例：**[Diagram. 配置. 形状工具栏](https://snippet.dhtmlx.com/4if395hd)
