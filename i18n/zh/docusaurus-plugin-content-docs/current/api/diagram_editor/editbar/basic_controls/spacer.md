---
sidebar_label: Spacer
title: Editbar 基本控件 - Spacer
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 Spacer 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天试用版 DHTMLX Suite。
---

# Spacer

@short: 通过占用一定空间来排列和对齐 Editbar 上控件的基本控件。

## 用法 {#usage}

~~~jsx
{
    type: "spacer"
}
~~~

## 描述 {#description}

- `type` - （必需）控件的类型。设置为 `"spacer"`

## 示例 {#example}

~~~jsx {10,12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    { type: "input", key: "name", label: "Task name" },
                    { type: "input", key: "id", label: "ID", readOnly: true },
                    { type: "spacer" },
                    { type: "button", text: "Send", full: true },
                    { type: "spacer" }
                ]
            }
        }
    }
});
~~~
