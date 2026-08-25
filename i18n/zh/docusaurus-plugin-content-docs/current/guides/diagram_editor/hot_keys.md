---
sidebar_label: 快捷键
title: 编辑器指南 - 快捷键列表
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的快捷键。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 快捷键列表 {#hotkey-list}

本节列出了一组在编辑器中创建图表时可以使用的标准快捷键，介绍了这些快捷键所执行的操作，并给出了可被覆盖的快捷键的键值字符串参数。要在编辑器中管理键盘快捷键，请使用 [`hotkeys`](api/diagram_editor/editor/config/hotkeys_property.md) 属性。

| 快捷键组合             | 说明                                          | 参数键值字符串    |
|--------------------------------|------------------------------------------------------|-------------------------|
| `Alt+1`                        | 显示/隐藏 shapebar（仅默认模式）             | `"alt+1"`               |
| `Alt+2`                        | 显示/隐藏 Editbar                                  | `"alt+2"`               |
| `Alt+3`                        | 显示/隐藏网格区域                                | `"alt+3"`               |
| `Ctrl+Z`（Win）、`CMD+Z`（macOS） | 撤销最近一次操作                            | `"ctrl+z"`              |
| `Ctrl+Shift+Z`（Win）、`CMD+Shift+Z`（macOS） | 恢复已撤销的操作           | `"ctrl+shift+z"`        |
| `Ctrl+D`（Win）、`CMD+D`（macOS） | 创建选中元素的副本（仅默认模式）    | `"ctrl+d"`              |
| `Ctrl+C`（Win）、`CMD+C`（macOS） | 复制选中的元素（仅默认模式）        | `"ctrl+c"`              |
| `Ctrl+V`（Win）、`CMD+V`（macOS） | 粘贴选中的元素（仅默认模式）        | `"ctrl+v"`              |
| `Ctrl+Alt+C`（Win）、`CMD+Alt+C`（macOS） | 复制选中项目的样式（适用于同类元素）| `"alt+ctrl+c"`       |
| `Ctrl+Alt+V`（Win）、`CMD+Alt+V`（macOS） | 将已复制的样式应用到选中项目（适用于同类元素）| `"alt+ctrl+v"` |
| `Ctrl+A`（Win）、`CMD+A`（macOS） | 选中所有项目                                    | `"ctrl+a"`              |
| `Ctrl+Shift+A`（Win）、`CMD+Shift+A`（macOS） | 取消选中所有已选项目             | `"ctrl+shift+a"`        |
| `Shift+Left Click`             | 将某一项目添加到已选项目列表中           | （并非直接对应 `hotkeys` 的参数键） |
| `Alt+Left Click`               | 取消选中该选中的项目                          | （并非直接对应 `hotkeys` 的参数键） |
| `Delete`（`Del`）、`Backspace`  | 删除一个或多个项目                                   | `"delete"`、`"backspace"` |
| `Arrow-Left`、`Arrow-Right`、`Arrow-Up`、`Arrow-Down`| 移动选中的项目       | `"arrowLeft"`、`"arrowRight"`、`"arrowUp"`、`"arrowDown"` |
| `Ctrl+Mousewheel`（Win）、`CMD+Mousewheel`（macOS）| 增大/减小缩放比例 | （并非直接对应 `hotkeys` 的参数键） |
| `Ctrl+Enter`（Win）、`CMD+Enter`（macOS） | 打开选中元素的内联文本编辑器，作为双击操作的替代方式。仅适用于具有可编辑 `text` 属性的形状。 | `"ctrl+enter"` |

## 内联文本编辑器快捷键 {#inline-text-editor-shortcuts}

当[内联文本编辑器](guides/inline_editing.md)处于激活状态时，可以使用以下快捷键。这些快捷键无法通过 `hotkeys` 属性进行配置。

| 快捷键 | 说明 |
|--------|-------------|
| `Ctrl+Enter`（Win）、`CMD+Enter`（macOS） | 打开选中元素的内联文本编辑器，作为双击操作的替代方式。仅适用于具有可编辑 `text` 属性的形状。 |
| `Shift+Enter` | 插入换行符（`\n`），同时保持编辑器处于打开状态。 |
| `Delete`（`Del`）、`Backspace` | 删除光标位置处的字符，不会删除元素本身。 |
| `Enter` | 确认当前文本并关闭编辑器。由于编辑器会在输入时动态应用更改，按下 Enter 键即表示编辑成功完成。 |
| `Escape` | 放弃所有未保存的更改并关闭编辑器，将元素的文本恢复为编辑开始前的值。 |
