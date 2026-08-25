---
sidebar_label: Copy manager API 概览
title: Copy manager API 概览
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中查看 Copy manager 概览。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# Copy manager API 概览 {#copy-manager-api-overview}

这是一组 API，可在复制和粘贴 Diagram Editor 中的项目时使用。使用 `model` 关键字通过 `editor` 对象访问 Copy manager：

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // 仅支持 default
});
// ...
editor.model.copy(); // 复制所选项目
~~~

## Copy manager 方法概览 {#copy-manager-methods-overview}

| 名称                                                                     | 描述                                                                 |
| :----------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [](api/diagram_editor/copymanager/methods/copy_method.md)             | @getshort(api/diagram_editor/copymanager/methods/copy_method.md)       |
| [](api/diagram_editor/copymanager/methods/copystyles_method.md)    | @getshort(api/diagram_editor/copymanager/methods/copystyles_method.md) |
| [](api/diagram_editor/copymanager/methods/paste_method.md)         | @getshort(api/diagram_editor/copymanager/methods/paste_method.md)      |
| [](api/diagram_editor/copymanager/methods/pastestyles_method.md)   | @getshort(api/diagram_editor/copymanager/methods/pastestyles_method.md)|
