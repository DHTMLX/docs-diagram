---
sidebar_label: copy()
title: Copy Manager 的 copy 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Copy manager 的 copy 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# copy()

### 描述 {#description}

@short: 复制所选元素或由 ID 指定的元素

:::note
仅当 Diagram Editor 以 `default` 模式初始化时，`copy()` 方法才能正常工作。
:::

### 用法 {#usage}

~~~jsx
copy(ids?: (string | number)[]): void;
~~~

### 参数 {#parameters}

- `ids` - （可选）要复制的元素 ID 组成的数组（列表）

### 示例 {#example}

- 不传入参数调用该方法，以复制选择列表中的元素

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // 仅支持 default
});
// ...
editor.model.copy(); // 复制所选项目
~~~

- 向该方法传入一些 ID，以复制相应的元素

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // 仅支持 default
});
// ...
editor.model.copy(["1", "2"]); // 复制指定的项目
~~~

**更新日志**：v6.0 中新增
