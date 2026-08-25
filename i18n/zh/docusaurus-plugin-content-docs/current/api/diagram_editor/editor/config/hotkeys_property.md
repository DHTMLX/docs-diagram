---
sidebar_label: hotkeys
title: Editor 的 hotkeys 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editor 的 hotkeys 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# hotkeys

### 描述 {#description}

@short: 可选。允许管理 Editor 中各种操作的键盘快捷键（hotkeys）

您可以完全禁用所有快捷键，禁用特定的组合键，或使用自定义函数覆盖它们的行为。

:::note
请注意，启用或禁用默认快捷键也会影响它们作为工具提示或标签在 Editor 工具栏中的可见性。
:::

### 用法 {#usage}

~~~jsx
hotkeys?:
    | boolean
    | {
        [key: string]: false | ((event: KeyboardEvent) => void);
      };
~~~

### 参数 {#parameters}

- `hotkeys: boolean` - 如果设置为 *false*，则禁用所有标准快捷键；如果设置为 *true*，则启用所有标准快捷键
- `hotkeys: object` - 一个对象，其键对应快捷键名称（例如 `"ctrl+c"`、`"delete"`），值按以下方式定义其行为：
	- `false` - 禁用指定的快捷键
	- `(event: KeyboardEvent) => void` - 定义一个自定义函数，当按下该快捷键时会执行该函数。函数接收一个 `KeyboardEvent` 对象作为参数

### 示例 {#example}

- 禁用所有快捷键

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: false,
});
~~~

- 禁用特定的快捷键（在下面的示例中为 `Ctrl+C` 和 `Ctrl+V`）

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: {
        "ctrl+c": false,
        "ctrl+v": false
    },
});
~~~

- 覆盖快捷键的行为

~~~jsx
let editor = null;

editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: {
        // 覆盖 "delete" 键以移除选中的元素
        "delete": () => editor.diagram.data.remove(editor.diagram.selection.getIds()),
        // 添加自定义快捷键 "Ctrl+F"
        "ctrl+f": () => console.log("custom search"),
    },
});
~~~

### 描述 {#description-1}

下表介绍了标准快捷键执行的操作，并提供了可被覆盖的快捷键对应的键字符串参数：

#### 快捷键表格 {#hotkeys-table}

| 快捷键组合             | 描述                                          | 参数键字符串    |
|--------------------------------|------------------------------------------------------|-------------------------|
| `Alt+1`                        | 显示/隐藏形状栏（仅 default 模式下）             | `"alt+1"`               |
| `Alt+2`                        | 显示/隐藏编辑栏                                  | `"alt+2"`               |
| `Alt+3`                        | 显示/隐藏网格区域                                | `"alt+3"`               |
| `Ctrl+Z`（Win）、`CMD+Z`（macOS）| 撤销最近一次操作                            | `"ctrl+z"`              |
| `Ctrl+Shift+Z`（Win）、`CMD+Shift+Z`（macOS）| 恢复已撤销的操作           | `"ctrl+shift+z"`        |
| `Ctrl+D`（Win）、`CMD+D`（macOS）| 创建选中元素的副本（仅 default 模式下）    | `"ctrl+d"`              |
| `Ctrl+C`（Win）、`CMD+C`（macOS）| 复制选中的元素（仅 default 模式下）        | `"ctrl+c"`              |
| `Ctrl+V`（Win）、`CMD+V`（macOS）| 粘贴选中的元素（仅 default 模式下）        | `"ctrl+v"`              |
| `Ctrl+Alt+C`（Win）、`CMD+Alt+C`（macOS）| 复制选中项的样式（适用于同类元素）| `"alt+ctrl+c"`       |
| `Ctrl+Alt+V`（Win）、`CMD+Alt+V`（macOS）| 将复制的样式应用于选中项（适用于同类元素）| `"alt+ctrl+v"` |
| `Ctrl+A`（Win）、`CMD+A`（macOS）| 选中所有项目                                | `"ctrl+a"`              |
| `Ctrl+Shift+A`（Win）、`CMD+Shift+A`（macOS）| 取消选中所有已选中的项目         | `"ctrl+shift+a"`        |
| `Shift+Left Click`             | 将某项添加到已选中项目列表中                     | （不是直接的 `hotkeys` 参数键） |
| `Alt+Left Click`               | 取消选中所选项目                                | （不是直接的 `hotkeys` 参数键） |
| `Delete`（`Del`）、`Backspace`  | 删除项目                                    | `"delete"`、`"backspace"` |
| `Arrow-Left`、`Arrow-Right`、`Arrow-Up`、`Arrow-Down`| 移动选中的项目       | `"arrowLeft"`、`"arrowRight"`、`"arrowUp"`、`"arrowDown"` |
| `Ctrl+Mousewheel`（Win）、`CMD+Mousewheel`（macOS）| 增大/减小缩放值 | （不是直接的 `hotkeys` 参数键） |

**更新日志：**

- `hotkeys` 属性在 v6.1 中新增

**相关示例：**

- [Diagram Editor. 通过 API 管理快捷键的添加、修改和禁用](https://snippet.dhtmlx.com/8ads5dq8)
