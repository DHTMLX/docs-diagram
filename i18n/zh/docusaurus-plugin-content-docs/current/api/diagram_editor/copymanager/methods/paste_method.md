---
sidebar_label: paste()
title: Copy Manager 的 paste 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Copy manager 的 paste 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# paste()

### 描述 {#description}

@short: 创建与通过 "copy()" 方法传递的元素相同的新元素

:::note
仅当 Diagram Editor 以 `default` 模式初始化时，`paste()` 方法才能正常工作。
:::

### 用法 {#usage}

~~~jsx
paste(): void;
~~~

### 示例 {#example}

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // 仅支持 default
});
// ...
editor.model.copy(); // 复制所选项目
editor.model.paste() // 粘贴新项目
~~~

**更新日志**：v6.0 中新增
