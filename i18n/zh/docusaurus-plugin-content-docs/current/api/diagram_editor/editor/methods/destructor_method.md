---
sidebar_label: destructor()
title: Editor 的 destructor 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 destructor 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 免费的 30 天评估版本。
---

# destructor()

### 描述 {#description}

@short: 移除 diagram editor 实例并释放占用的资源

### 用法 {#usage}

~~~jsx
destructor(): void;
~~~

### 示例 {#example}

~~~jsx {6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);

editor.destructor();
~~~

**更新日志**：v6.0 中新增
