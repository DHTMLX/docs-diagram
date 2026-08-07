---
sidebar_label: 新特性
title: 新特性
description: 您可以在此了解 DHTMLX JavaScript Diagram 库的最新资讯。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 新特性

如果您正在将 Diagram 从旧版本升级，请查看 [迁移到新版本](migration.md) 了解详细信息。

## 版本 6.1.6 {#version-616}

2026 年 7 月 1 日发布

### 修复 {#fixes}

- Diagram。修复了在 `mindmap` 模式下通过 `ShapeCollection`（`DataCollection`）向 Diagram 加载数据时发生错误的问题

## 版本 6.1.5 {#version-615}

2026 年 6 月 17 日发布

### 更新 {#updates}

- Diagram Editor。改进了文本编辑体验，新增键盘快捷键：<kbd>Ctrl</kbd>+<kbd>Enter</kbd> 开始编辑，<kbd>Shift</kbd>+<kbd>Enter</kbd> 换行，<kbd>Enter</kbd> 确认，<kbd>Escape</kbd> 放弃更改

### 修复 {#fixes}

- Diagram Editor。修复了穿过泳道组的线条无法被选中的问题
- Diagram Editor。新增了将连接线拖拽到当前屏幕视图之外的形状时的自动滚动功能。
- Diagram Editor。修复了在编辑形状文本时形状被删除的错误
- Diagram。修复了 Safari 浏览器中具有 `backArrow: "filled"` 属性的线条渲染不正确的特定错误

## 版本 6.1.3 {#version-613}

2026 年 5 月 21 日发布

### 更新 {#updates}

- Diagram / Diagram Editor。改进了自动布局逻辑。通过 [`autoPlace()`](api/diagram/autoplace_method.md) Diagram 方法和 [`autoplacement`](api/diagram/autoplacement_property.md) 配置对象中新增的 `itemPadding` 和 `levelPadding` 属性，新增了控制形状与层级之间间距的能力

### 修复 {#fixes}

- Diagram。修复了应用自动布局后形状之间距离不正确的问题
- Diagram。修复了调用 [`autoPlace()`](api/diagram/autoplace_method.md) 时忽略 [`fromSide` 和 `toSide`](lines/configuration_properties.md) 连接线取值的问题，确保图表结构保持一致
- Diagram。重构了 `Radial` 自动布局算法，修复了形状之间距离过大的问题，从而提供更紧凑的布局

## 版本 6.1.2 {#version-612}

2026 年 4 月 2 日发布

### 修复 {#fixes}

- Diagram Editor。修复了坐标为负数的形状创建连接线时出现的问题
- Diagram Editor。修复了在行内文本编辑期间按下 <kbd>Backspace</kbd> 键会删除形状或线条标题的问题
- Export。通过改进的清理机制和环境加固，修复了 PDF/PNG 导出中允许通过 HTML 注入进行任意本地文件访问的安全漏洞

## 版本 6.1.1 {#version-611}

2026 年 2 月 5 日发布

### 修复 {#fixes}

- Diagram Editor。向下和向右移动项目时无法自动滚动画布的问题

## 版本 6.1 {#version-61}

2025 年 11 月 25 日发布

### 新功能 {#new-functionality}

- 支持根据 Gantt 数据集创建 Diagram PERT 图：
    - [新的 PERT 模式](/#diagram-in-the-pert-mode)，通过[新增类型：`"pert"`](/api/diagram/type_property)设置
    - [新增形状类型：`"task"` 和 `"milestone"`](shapes/default_shapes.md#shapes-in-the-pert-mode)
    - [新增分组类型：`"project"`](/groups/#grouping-shapes-in-the-pert-mode)（用于对任务和里程碑进行分组）
- Diagram Editor。支持在编辑器内管理键盘快捷键（热键）：
    - 新增的 [`hotkeys`](api/diagram_editor/editor/config/hotkeys_property.md) 配置属性允许修改或关闭现有热键，并添加新的热键
- Diagram Editor。支持通过一组新事件管理形状的缩放和旋转：
[`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md),
[`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md),
[`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md),
[`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md),
[`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md),
[`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

### 更新 {#updates}

- DataCollection API。针对 PERT 模式的更新：
    - [`parse()`](api/data_collection/parse_method.md) 方法的第一个参数可以接受一个包含 `data` 和 `links` 数组的对象
    - [`serialize()`](api/data_collection/serialize_method.md) 方法可以返回一个包含 `data` 和 `links` 数组的对象
- Diagram API。支持为 PERT 模式的任务形状设置日期渲染格式：
    - [`typeConfig`](api/diagram/typeconfig_property.md) 配置属性新增 `dateFormat` 参数
- Diagram/Diagram Editor API。支持定义线条的连接类型：
    - Diagram 的 [`lineConfig`](api/diagram/lineconfig_property.md) 配置属性新增 `connectType` 参数
    - Diagram Editor 的 [`lineConfig`](api/diagram_editor/editor/config/lineconfig_property.md) 配置属性新增 `connectType` 参数
- Export API。[`pdf()`](api/export/pdf_method.md) 和 [`png()`](api/export/png_method.md) 导出函数会返回数据导出的 Promise

### 修复 {#fixes}

- Diagram Editor。在 Safari 浏览器中悬停在形状上后出现的脚本错误
- Diagram Editor。移除项目后出现的控制台警告

### 关于 [AI 集成](guides/ai-integrations/ai-demo.md)的新演示 {#new-demo-on-ai-integration}

- [DHTMLX Diagram 组织架构图 AI 构建器](https://dhtmlx.com/docs/demo/ai-org-chart-builder/)


### 新增示例 {#new-samples}

- [Diagram。PERT 图。初始化](https://snippet.dhtmlx.com/4h5fi7xd)
- [Diagram 与 Gantt。PERT 图。初始化](https://snippet.dhtmlx.com/409jj9uh)
- [Diagram 与 Gantt。PERT 图。完整集成](https://snippet.dhtmlx.com/gcnx4a9h)
- [Diagram 与 Gantt。PERT 图。弹出窗口](https://snippet.dhtmlx.com/fvfysbdb)
- [Diagram 与 Gantt。PERT 图。自定义形状和样式（自定义 CSS）](https://snippet.dhtmlx.com/mtk92awx)
- [Diagram。PERT 图。不同数据集](https://snippet.dhtmlx.com/2j2y8vy6)
- [Diagram。PERT 图。筛选/搜索任务](https://snippet.dhtmlx.com/1b2bmmxk)
- [Diagram。PERT 图。用于任务信息的自定义侧边栏](https://snippet.dhtmlx.com/712lsox0)
- [Diagram。PERT 图。主题](https://snippet.dhtmlx.com/2e5y5u6m)
- [Diagram。导出。左下角水印](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram。导出。重复水印](https://snippet.dhtmlx.com/emkea55j)
- [Diagram。交互式电气原理图](https://snippet.dhtmlx.com/cisyixkq)
- [Diagram Editor。通过事件管理形状的移动、旋转和缩放](https://snippet.dhtmlx.com/qldjbbm7)
- [Diagram Editor。通过 API 管理热键的添加、修改和禁用](https://snippet.dhtmlx.com/8ads5dq8)
- [Diagram Editor。鱼骨图。原因与解决方案](https://snippet.dhtmlx.com/7vhwtiba)
- [Diagram Editor。鱼骨图。多重原因](https://snippet.dhtmlx.com/0dgjwt6u)


## 版本 6.0.11 {#version-6011}

2025 年 6 月 18 日发布

### 修复 {#fixes}

- Diagram Editor。缩放时形状移动不正确的问题

## 版本 6.0.10 {#version-6010}

2025 年 3 月 10 日发布

### 修复 {#fixes}

- Diagram。编辑线条宽度时调整线条形状箭头大小的问题

## 版本 6.0.9 {#version-609}

2025 年 2 月 4 日发布

### 修复 {#fixes}

- Diagram Editor。移动包含项目的分组以及将项目移入/移出分组时出现的问题
- Diagram。选中形状时不会触发 `itemMouseOver` 和 `itemMouseOut` 事件的问题

## 版本 6.0.8 {#version-608}

2024 年 12 月 5 日发布

- 将本地试用包导入框架时出现的问题

## 版本 6.0.7 {#version-607}

2024 年 11 月 27 日发布

- Diagram Editor。使用 Editbar 编辑形状时发生错误的问题
- Diagram Editor。行内编辑导航过程中形状移动的问题

## 版本 6.0.4 {#version-604}

2024 年 10 月 1 日发布

### 修复 {#fixes}

- Diagram Editor。调用 `destructor()` 方法会抛出错误的问题

## 版本 6.0.3 {#version-603}

2024 年 8 月 28 日发布

### 修复 {#fixes}

- Diagram Editor。为 Editbar 的 `calendar`、`combobox`、`colorpicker`、`form`、`timepicker` 应用不同语言环境的问题
- Diagram Editor。将 Diagram Editor 添加到 Layout 单元格中的问题
- Diagram Editor。`default` 模式下 `shapeToolbar` 属性并非可选的问题
- Diagram Editor。自定义形状包含预览图片时悬停行为不正确的问题


## 版本 6.0.2 {#version-602}

2024 年 7 月 16 日发布

### 修复 {#fixes}

- Diagram。自动布局。形状隐藏在另一个形状下方的问题

## 版本 6.0.1 {#version-601}

2024 年 6 月 24 日发布

### 修复 {#fixes}

- Diagram Editor。内存泄漏问题
- Diagram Editor。通过 Toolbar 点击垂直和水平分布时出现脚本错误的问题
- Diagram。调用 [`getSubHeaderCellId()`](api/cell_manager/getsubheadercellid_method.md) 方法时的类型问题

## 版本 6.0 {#version-60}

2024 年 5 月 16 日发布

### 重大变更 {#breaking-changes}

此次更新对 Diagram 和 Diagram Editor 的结构和功能进行了重大调整。请查看 [迁移文章](migration.md#50---60) 以跟上最新版本的步伐。

### 新功能 {#new-functionality}

- 重构 Diagram Editor：通过 [`view`](api/diagram_editor/editor/config/view_property.md) 属性提供与其各部分交互并管理其可见性的能力，该属性包含以下配置：
    - [Toolbar](guides/diagram_editor/toolbar.md) - Diagram Editor 的顶部部分，帮助用户控制编辑过程（参见 [API 概述](api/diagram_editor/toolbar/api_overview.md)）
    - [Shapebar](guides/diagram_editor/shapebar.md) - （原 Left panel）Diagram Editor 中用于渲染 Diagram 项目预览的部分（参见 [API 概述](api/diagram_editor/shapebar/api_overview.md)）
    - [Editbar](guides/diagram_editor/editbar.md) - （原 Right panel）Diagram Editor 中允许用户编辑 Diagram 项目的部分（参见 [API 概述](api/diagram_editor/editbar/api_overview.md)）。您可以执行以下操作：
        - 使用预定义的 [Basic controls](api/diagram_editor/editbar/basic_controls_overview.md) 和 [Complex controls](api/diagram_editor/editbar/complex_controls_overview.md) 集合
        - 根据给定条件调整 [Basic controls](api/diagram_editor/editbar/basic_controls_overview.md) 和 [Complex controls](api/diagram_editor/editbar/complex_controls_overview.md) 的配置
        - 根据给定条件动态管理 Editbar 面板（[示例](https://snippet.dhtmlx.com/ealq0m4l?mode=wide)）
        - 创建自定义控件（[示例](https://snippet.dhtmlx.com/1p0wemnn?mode=wide)）
        - 创建 HTML 内容（[示例](https://snippet.dhtmlx.com/vcnt647v?mode=wide)）
- Diagram Editor。新增 [Copy manager API](api/diagram_editor/copymanager/api_overview.md)
- Diagram Editor。支持显示/隐藏 [Shapebar](api/diagram_editor/shapebar/config/show_property.md)、[Editbar](guides/diagram_editor/editbar.md) 和 [Toolbar](guides/diagram_editor/toolbar.md)
- Diagram Editor。新增 [destructor()](api/diagram_editor/editor/methods/destructor_method.md) 方法
- Diagram Editor。支持[隐藏连接点](api/diagram_editor/editor/config/connectionpoints_property.md)
- Diagram Editor。支持[隐藏调整大小的控制点](api/diagram_editor/editor/config/resizepoints_property.md)
- Diagram Editor。支持[隐藏网格](api/diagram_editor/editor/config/grid_property.md)
- 升级 [Selection API](/api/selection/)，支持多选功能
- 线条标题现在被声明为独立对象，通过 [`lineTitles`](/line_titles/) 定义，并拥有各自的[配置属性](line_titles/configuration_properties.md)
- [支持新主题](../category/themes/)：Dark、Light High Contrast 和 Dark High Contrast（[示例](https://snippet.dhtmlx.com/9twmlfus)）
- Diagram Editor。支持通过重新定义 CSS 变量并使用自定义变量来自定义 [Shapebar 项目的配色方案](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar)

### 更新 {#updates}

- Diagram Editor。更新了 [Locales](guides/localization.md)
- Diagram Editor。扩展了 [Hotkeys](guides/diagram_editor/hot_keys.md) 列表
- Diagram Editor。改进了 Shapebar 项目被拖到网格时的行为及其外观
- Diagram Editor。[`zoomIn`](api/diagram_editor/editor/events/zoomin_event.md) / [`zoomOut`](api/diagram_editor/editor/events/zoomout_event.md) 事件的回调函数会附带 `step` 参数被调用
- Diagram Editor。扩展了 [`magnetic`](api/diagram_editor/editor/config/magnetic_property.md) 配置选项的功能
- Diagram Editor。更新了 Editor 对象的移动[事件](api/diagram_editor/editor/events/overview.md)：
[`afterGroupMove`](api/diagram_editor/editor/events/aftergroupmove_event.md),
[`afterItemCatch`](api/diagram_editor/editor/events/afteritemcatch_event.md),
[`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md),
[`afterLineTitleMove`](api/diagram_editor/editor/events/afterlinetitlemove_event.md),
[`afterShapeMove`](api/diagram_editor/editor/events/aftershapemove_event.md),
[`beforeGroupMove`](api/diagram_editor/editor/events/beforegroupmove_event.md),
[`beforeItemCatch`](api/diagram_editor/editor/events/beforeitemcatch_event.md),
[`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md),
[`beforeLineTitleMove`](api/diagram_editor/editor/events/beforelinetitlemove_event.md),
[`beforeShapeMove`](api/diagram_editor/editor/events/beforeshapemove_event.md),
[`groupMoveEnd`](api/diagram_editor/editor/events/groupmoveend_event.md),
[`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md),
[`itemTarget`](api/diagram_editor/editor/events/itemtarget_event.md),
[`lineTitleMoveEnd`](api/diagram_editor/editor/events/linetitlemoveend_event.md),
[`shapeMoveEnd`](api/diagram_editor/editor/events/shapemoveend_event.md)
- 支持[通过 DataCollection API 处理线条标题](/line_titles/#working-with-line-titles)

### 弃用的 API {#deprecated-api}

- #### 属性

    - Diagram Editor 的 `controls` 属性已弃用，不再支持
    - Diagram Editor 的 `editMode` 属性已弃用，不再支持
    - Diagram Editor 的 `gapPreview` 属性已弃用，不再支持
    - Diagram Editor 的 `reservedWidth` 属性已弃用，不再支持
    - Diagram Editor 的 `scalePreview` 属性已弃用，不再支持
    - Diagram Editor 的 `shapeBarWidth` 属性已弃用，不再支持
    - Diagram Editor 的 `shapeSections` 属性已弃用，不再支持
    - [Line](lines/configuration_properties.md) 数据的 `title` 属性已弃用，不再支持

- #### 方法

    - Diagram 的 Selection 对象的 `getId()` 方法已弃用，不再支持
    - Diagram 的 Selection 对象的 `getSubId()` 方法已弃用，不再支持
    - Diagram Editor 的 `setViewMode()` 方法已弃用，不再支持

- #### 事件

    - 由于工具栏中没有对应的按钮，Diagram Editor 的以下事件已弃用，不再支持：`resetButton`、`applyButton`、`visibility`、`exportData`、`importData`、`autoLayout`
    - Diagram Editor 的 `changeGridStep` 事件已弃用，不再支持

### 修复 {#fixes}

- Diagram Editor。修复了数据导入后第二次点击 "Import data" 按钮且未选择文件时导致控制台错误的问题
- Diagram Editor。修复了新形状添加被阻止的问题
- Diagram Editor。修复了手动选择元素时线条复制的问题
- Diagram Editor。修复了在 `mindmap`/`org` 模式下根形状靠近子形状时的拖拽问题
- Diagram Editor。修复了选择形状时需要按住 <kbd>Shift</kbd> 键额外点击一次的选择行为不正确的问题
- Diagram Editor。修复了分组和泳道无法一起移动的问题
- Diagram Editor。修复了移除未使用的线条/连接线的问题
- Diagram Editor。修复了将不同父级的项目移动到目标项目的能力问题（适用于 `org`/`mindmap` 模式）
- Diagram Editor。修复了为 Shapebar 元素设置默认值的能力问题
- Diagram Editor。修复了将移动的项目悬停在任意形状上方时连接线外观的问题
- Diagram Editor。修复了在 `mindmap`/`org` 模式下无法通过菜单移除选中项目的问题
- Diagram Editor。修复了数据导入只能生效一次的问题
- Diagram Editor。提升了连接线移动过程中的性能
- Diagram Editor。限制了 `historyManager` 中连接线移动过程中的操作记录
- Diagram Editor。优化了查找最近连接线的逻辑
- 修复了复杂控件的本地化问题

## 版本 5.0.3 {#version-503}

2023 年 7 月 12 日发布

### 修复 {#fixes}

- 修复了数据解析后调用 [autoPlace()](api/diagram/autoplace_method.md) 方法导致错误的问题

## 版本 5.0.2 {#version-502}

2023 年 5 月 30 日发布

### 修复 {#fixes}

- Diagram Editor。修复了多选移动时自定义点不移动的问题
- Diagram Editor。修复了无法将形状连接到自身的问题
- 修复了在没有 [exportStyles](api/diagram/exportstyles_property.md) 的情况下导出默认图表的问题
- 修复了 promiz.js 库在导入源文件时导致 setImmediate() 方法定义出错的问题
- 修复了 Export 对象中 URL 路径构建的问题
- 新增了导出的类型定义

## 版本 5.0.1 {#version-501}

2023 年 1 月 19 日发布

### 修复 {#fixes}

- Diagram Editor。修复了导出数据后重新加载时线条不总是绘制在正确位置的问题
    - 现在可以在默认模式下为线条定义坐标（线条对象新增 [`points`](lines/configuration_properties.md#properties-specific-for-the-default-mode) 属性）
- Diagram Editor。修复了更改缩放级别后在网格中拖拽形状的问题
- 修复了在没有形状的情况下点击 "Auto layout" 按钮引发错误的问题
- 修复了通过编辑器创建线条后 [默认设置](api/diagram/defaults_property.md) 显示的问题
- 修复了在 `"radial"` 模式下自动布局形状时出现的 Diagram/Diagram Editor 缩放问题

## 版本 5.0 {#version-50}

2022 年 9 月 7 日发布

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-5-0/" target="_blank">在博客上查看版本评测</a>

### 重大变更 {#breaking-changes}

新版本对 `lineGap` 属性进行了一些更改。请查看 [迁移文章](migration.md#42---50) 以跟上最新版本的步伐。

### 新功能 {#new-functionality}

#### Diagram {#diagram}

- [形状自动布局](guides/diagram/configuration.md#configuring-autoplacement-for-shapes)的 Radial 算法：
    - [`autoplacement`](api/diagram/autoplacement_property.md) 属性新增 `placemode` 参数
    - [`autoPlace()`](api/diagram/autoplace_method.md) 方法新增 `placemode` 参数
- 支持为工具栏图标设置提示信息：
    - 图标对象的 `tooltip` 参数已添加到 [`toolbar`](api/diagram/toolbar_property.md) 属性中

#### Diagram Editor {#diagram-editor}

- 形状自动布局的 Radial 算法：
    - [`autoplacement`](api/diagram_editor/editor/config/autoplacement_property.md) 属性新增 `placemode` 参数
    - [Toolbar](guides/diagram_editor/toolbar.md) 的 **Auto Layout** 按钮现在为形状自动布局提供两个选项：*Orthogonal* 和 *Radial*
- 用于在网格区域中更精确地排列形状的[对齐辅助线](guides/diagram_editor/grid_area.md#enablingdisabling-snap-lines)
- 支持通过新增的 [`magnetic`](api/diagram_editor/editor/config/magnetic_property.md) 属性配置对齐辅助线
- 支持通过 <kbd>Alt</kbd>（<kbd>Option</kbd>）+ <kbd>Ctrl</kbd>（<kbd>Cmd</kbd>）+ <kbd>С</kbd> => <kbd>Alt</kbd>（<kbd>Option</kbd>）+ <kbd>Ctrl</kbd>（<kbd>Cmd</kbd>）+ <kbd>V</kbd> 复制和粘贴一个或多个项目的样式（参见 **[示例](https://snippet.dhtmlx.com/klgvu3jq)**）
- 支持[对齐和分布多个项目](guides/diagram_editor/grid_area.md#aligning-multiple-items)
- 现在，当您悬停在项目个人工具栏中的控件上时会显示提示信息
- 扩展了[语言选项](guides/localization.md)列表，以支持单项工具栏中提示信息的本地化
- 支持为[自定义工具栏图标](guides/diagram_editor/grid_area.md#configuring-the-toolbar-of-an-item)设置提示信息：
    - 图标对象的 `tooltip` 参数已添加到 [`shapeToolbar`](api/diagram_editor/editor/config/shapetoolbar_property.md) 属性中
- 改进了 [Grid area](guides/diagram_editor/grid_area.md) 的设计。现在网格区域中点之间的距离取决于网格步长的值

### 修复 {#fixes}

- 修复了加载文件后 Editor 右侧面板的加载图标未消失的问题

## 版本 4.2 {#version-42}

2022 年 3 月 3 日发布

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-2-touch-support-default-settings-connector-lines-default-section-sets-editors-left-panel/" target="_blank">在博客上查看版本评测</a>

### 新功能 {#new-functionality}

- [触控支持](guides/touch_support.md)
- 支持通过 Diagram 的 [`lineConfig`](api/diagram/lineconfig_property.md) 属性指定线条的默认设置
- 支持通过 Diagram Editor 的 [`lineConfig`](api/diagram_editor/editor/config/lineconfig_property.md) 属性指定编辑器中新建线条的默认设置
- 支持在[配置编辑器左侧面板的分区](guides/diagram_editor/shapebar.md#custom-sections)时按所需顺序添加组织架构图形状、分组、泳道的默认集合

### 更新 {#updates}

- Diagram 的 `defaultLinkType` 属性已弃用。请查看[迁移](migration.md#41---42)文章
- Diagram Editor 的 `shapeSections` 属性已更新。请查看[迁移](migration.md#41---42)文章
- 现在不仅可以为特定类型的形状定义默认配置，也可以为线条定义默认配置：
    - Diagram 的 [`defaults`](api/diagram/defaults_property.md) 属性已更新
    - Diagram Editor 的 [`defaults`](api/diagram_editor/editor/config/defaults_property.md) 属性已更新
- 更新了[形状连接模式](api/diagram/autoplace_method.md#modes-of-connecting-shapes)的文档

## 版本 4.1 {#version-41}

2021 年 12 月 7 日发布

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-1-partners-assistants-org-charts-moving-shapes-children-connector-titles-much/" target="_blank">在博客上查看版本评测</a>

### 新功能 {#new-functionality}

- 支持在组织架构图模式中添加[伙伴形状](/#assistant-and-partner-shapes)
- 支持在组织架构图模式中添加[助理形状](/#assistant-and-partner-shapes)
- 支持在默认模式中为[线条添加标题](/#line-titles)
- 支持在组织架构图和思维导图模式的 Editor 中将[形状从一个父级拖放到另一个父级](editor_overview.md#editor-in-the-org-chart-mode)。形状会与其子项目一起被拖动
- 支持在组织架构图和思维导图模式的 Editor 中[为目标项目设置样式](guides/customization.md#styling-target-shapes)

### API {#api}

- Diagram 对象的新事件：[`emptyAreaDblClick`](api/diagram/emptyareadblclick_event.md)、[`emptyAreaMouseDown`](api/diagram/emptyareamousedown_event.md)、[`lineTitleClick`](api/diagram/linetitleclick_event.md)、[`lineTitleDblClick`](api/diagram/linetitledblclick_event.md)、[`lineTitleMouseDown`](api/diagram/linetitlemousedown_event.md)
- 针对组织架构图模式的新增[形状属性](shapes/configuration_properties.md#properties-specific-for-the-org-chart-mode)：`assistant`、`partner`、`catchItem`、`giveItem`
- 针对思维导图模式的新增[形状属性](shapes/configuration_properties.md#properties-specific-for-the-mindmap-mode)：`catchItem`、`giveItem`
- 针对默认模式的新增[线条属性](lines/configuration_properties.md#properties-specific-for-the-default-mode)：`title`
- Editor 对象的新方法：`setViewMode()`、`zoomIn()`、`zoomOut()`
- Editor 对象的新事件：[`beforeLineTitleMove`](api/diagram_editor/editor/events/beforelinetitlemove_event.md)、[`afterLineTitleMove`](api/diagram_editor/editor/events/afterlinetitlemove_event.md)、[`lineTitleMoveEnd`](api/diagram_editor/editor/events/linetitlemoveend_event.md)、[`itemTarget`](api/diagram_editor/editor/events/itemtarget_event.md)、[`beforeItemCatch`](api/diagram_editor/editor/events/beforeitemcatch_event.md)、[`afterItemCatch`](api/diagram_editor/editor/events/afteritemcatch_event.md)
- Editor 对象的新属性：[`itemsDraggable`](api/diagram_editor/editor/config/itemsdraggable_property.md)
- HistoryManager 的新方法：[`add()`](api/diagram_editor/historymanager/methods/add_method.md)、[`disable()`](api/diagram_editor/historymanager/methods/disable_method.md)、[`enable()`](api/diagram_editor/historymanager/methods/enable_method.md)、[`isRedo()`](api/diagram_editor/historymanager/methods/isredo_method.md)、[`redo()`](api/diagram_editor/historymanager/methods/redo_method.md)、[`reset()`](api/diagram_editor/historymanager/methods/reset_method.md)、[`undo()`](api/diagram_editor/historymanager/methods/undo_method.md)
- HistoryManager 的新属性：`disabled`、[`saveDelay`](api/diagram_editor/historymanager/config/savedelay_property.md)
- Selection 的新方法：`getSubId()`

### 更新 {#updates}

- 更新了 [InlineEditor](/api/inline_editor/) 的事件：*subHeaderId* 参数已更改为 *subId*
- 更新了 [Selection API](/api/selection/#events) 的事件：新增了 *subId* 参数
- 默认模式下形状的默认类型已更改为 [*"rectangle"*](shapes/configuration_properties.md#common-properties)

### 修复 {#fixes}

- 提升了所有类型图表的性能
- 修复了 Editor 的 Toolbar 中 *undo/redo* 按钮工作不正确的问题

## 版本 4.0.1 {#version-401}

2021 年 9 月 16 日发布

### 修复 {#fixes}

- 修复了旋转形状时连接线的显示问题
- 修复了图表压缩样式的问题
- 修复了在组织架构图/思维导图模式下向 Diagram Editor 中添加新项目时算法工作不正确的问题
- 修复了编辑器右侧面板在处理文本样式时工作不正确的问题

## 版本 4.0 {#version-40}

2021 年 9 月 7 日发布

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-0-groups-swimlanes-angular-react-vue-demos/" target="_blank">在博客上查看版本评测</a>

### 新功能 {#new-functionality}

- 新增图表项目：[Groups](/groups/)、[Swimlanes](/swimlanes/)
- 在 Diagram Editor 左侧面板中新增分区：[Groups、Swimlanes](guides/diagram_editor/shapebar.md#default-sections)
- [在编辑器右侧面板中为 Groups、Swimlanes 新增侧边栏选项](guides/diagram_editor/editbar.md)
- 支持通过 UI 编辑 [Groups](guides/diagram_editor/grid_area.md#managing-groups) 和 [Swimlanes](guides/diagram_editor/grid_area.md#managing-swimlanes)
- 扩展了[语言选项](guides/localization.md)列表
- 支持通过 [CellManager API](/api/cell_manager/) 操作泳道单元格
- 支持通过双击项目来编辑其文本
- 新增 [DHTMLX Diagram 与 Angular](guides/integrations/angular_integration.md) 演示
- 新增 [DHTMLX Diagram 与 React](guides/integrations/react_integration.md) 演示
- 新增 [DHTMLX Diagram 与 Vue.js](guides/integrations/vue_integration.md) 演示
- 支持[在编辑器左侧面板中添加具有不同样式和设置的相同项目](guides/diagram_editor/shapebar.md)

### API {#api}

- 新增 [CellManager API](/api/cell_manager/) 方法：[add()](api/cell_manager/add_method.md)、[getCellId()](api/cell_manager/getcellid_method.md)、[getCellIndex()](api/cell_manager/getcellindex_method.md)、[getSubHeaderCellId()](api/cell_manager/getsubheadercellid_method.md)、[getSubHeaderCellIndex()](api/cell_manager/getsubheadercellindex_method.md)、[getSubHeaderType()](api/cell_manager/getsubheadertype_method.md)、[move()](api/cell_manager/move_method.md)、[remove()](api/cell_manager/remove_method.md)、[resetSwimlane()](api/cell_manager/resetswimlane_method.md)、[setSwimlane()](api/cell_manager/setswimlane_method.md)、[validation()](api/cell_manager/validation_method.md)
- 新增 [CellManager API](/api/cell_manager/) 事件：[afterCellsAdd](api/cell_manager/aftercellsadd_event.md)、[afterCellsMove](api/cell_manager/aftercellsmove_event.md)、[afterCellsRemove](api/cell_manager/aftercellsremove_event.md)、[afterCellsValidation](api/cell_manager/aftercellsvalidation_event.md)、[beforeCellsAdd](api/cell_manager/beforecellsadd_event.md)、[beforeCellsMove](api/cell_manager/beforecellsmove_event.md)、[beforeCellsRemove](api/cell_manager/beforecellsremove_event.md)、[beforeCellsValidation](api/cell_manager/beforecellsvalidation_event.md)
- Diagram 对象的新事件：[afterSubmenuOpen](api/diagram/aftersubmenuopen_event.md)、[beforeSubmenuOpen](api/diagram/beforesubmenuopen_event.md)、[groupClick](api/diagram/groupclick_event.md)、[groupDblClick](api/diagram/groupdblclick_event.md)、[groupHeaderClick](api/diagram/groupheaderclick_event.md)、[groupHeaderDblClick](api/diagram/groupheaderdblclick_event.md)、[groupMouseDown](api/diagram/groupmousedown_event.md)、[itemClick](api/diagram/itemclick_event.md)、[itemDblClick](api/diagram/itemdblclick_event.md)、[itemMouseDown](api/diagram/itemmousedown_event.md)、[itemMouseOut](api/diagram/itemmouseout_event.md)、[itemMouseOver](api/diagram/itemmouseover_event.md)、[lineDblClick](api/diagram/linedblclick_event.md)、[lineMouseDown](api/diagram/linemousedown_event.md)
- Editor 对象的新事件：[shapeMoveEnd](api/diagram_editor/editor/events/shapemoveend_event.md)、[beforeItemMove](api/diagram_editor/editor/events/beforeitemmove_event.md)、[afterItemMove](api/diagram_editor/editor/events/afteritemmove_event.md)、[itemMoveEnd](api/diagram_editor/editor/events/itemmoveend_event.md)、[beforeGroupMove](api/diagram_editor/editor/events/beforegroupmove_event.md)、[afterGroupMove](api/diagram_editor/editor/events/aftergroupmove_event.md)、[groupMoveEnd](api/diagram_editor/editor/events/groupmoveend_event.md)
- DataCollection 的新方法：[eachChild()](api/data_collection/eachchild_method.md)、[eachParent()](api/data_collection/eachparent_method.md)、[getRoot()](api/data_collection/getroot_method.md)、[getRoots()](api/data_collection/getroots_method.md)
- InlineEditor 的新事件：[afterEditorClose](api/inline_editor/aftereditorclose_event.md)、[afterEditorEditing](api/inline_editor/aftereditorediting_event.md)、[afterEditorOpen](api/inline_editor/aftereditoropen_event.md)、[beforeEditorClose](api/inline_editor/beforeeditorclose_event.md)、[beforeEditorEditing](api/inline_editor/beforeeditorediting_event.md)、[beforeEditorOpen](api/inline_editor/beforeeditoropen_event.md)
- [形状对象](shapes/configuration_properties.md)新增 "editable" 和 "fixed" 配置属性

### 更新 {#updates}

- 改进了键盘导航
- 重新设计了形状
- 更新了 Editor 对象的事件：[beforeShapeMove](api/diagram_editor/editor/events/beforeshapemove_event.md) 和 [afterShapeMove](api/diagram_editor/editor/events/aftershapemove_event.md)
- 升级了 Shape Collection API 的结构

### 修复 {#fixes}

- 修复了编辑器中 TypeScript 类型定义工作不正确的问题
- 修复了在 HTML 表单内按下编辑器工具栏按钮会触发表单提交的问题
- 现在只有当元素的旋转角度为 0 或 360 度时才能调整其大小。
- 大幅优化了 Diagram 的样式

## 版本 3.1 {#version-31}

2021 年 4 月 15 日发布

### 新功能 {#new-functionality}

- [TypeScript 支持](guides/using_typescript.md)
- DHTMLX Diagram 新增思维导图模式（[type:"mindmap"](/api/diagram/type_property)）
- 支持通过图表对象的 [typeConfig](api/diagram/typeconfig_property.md) 配置属性[配置 Diagram 思维导图模式中子形状相对于根形状的方向](guides/diagram/configuration.md#arranging-shapes-in-the-mindmap-mode-of-diagram)
- 支持通过 [addShape()](api/diagram/addshape_method.md) 方法的 "eventHandlers" 属性[为自定义形状添加自定义事件处理程序](shapes/custom_shape.md#event-handlers-for-custom-shapes)
- 支持通过 Editor 对象的 [shapeToolbar](api/diagram_editor/editor/config/shapetoolbar_property.md) 属性自定义[网格区域](guides/diagram_editor/grid_area.md)中用于编辑项目的个人工具栏
- Editor 对象的新事件：[BeforeShapeIconClick](api/diagram_editor/editor/events/beforeshapeiconclick_event.md) 和 [AfterShapeIconClick](api/diagram_editor/editor/events/aftershapeiconclick_event.md)、[BeforeShapeMove](api/diagram_editor/editor/events/beforeshapemove_event.md) 和 [AfterShapeMove](api/diagram_editor/editor/events/aftershapeiconclick_event.md)
- 支持通过图表对象的 [exportStyles](api/diagram/exportstyles_property.md) 配置选项取消向导出服务发送 CSS 样式

### 更新 {#updates}

- 更新了图表对象的 [type](/api/diagram/type_property) 配置属性：新增了 "default" 和 "mindmap" 取值
- 更新了 [collapseItem()](api/diagram/collapseitem_method.md) 和 [expandItem()](api/diagram/expanditem_method.md) 方法：新增了第二个参数 "dir"
- 更新了 [beforeCollapse](api/diagram/beforecollapse_event.md)、[afterCollapse](api/diagram/aftercollapse_event.md)、[beforeExpand](api/diagram/beforeexpand_event.md) 和 [afterExpand](api/diagram/afterexpand_event.md) 事件：新增了第二个参数 "dir"

### 修复 {#fixes}

- 修复了 DHTMLX Diagram 所有类型的选择模块的问题
- 修复了在默认模式下初始化的图表中，对已缩放的图表应用 "showItem()" 方法时滚动出现的问题
- 修复了 DOM Parser 处理 HTML 模板工作不正确的问题
- 修复了折叠任意子形状后根形状也被折叠的问题
- 修复了形状文本格式设置的问题
- 修复了在编辑器右侧面板的文本域字段中添加长文本后出现的问题
- 修复了向自定义形状文本添加特殊字符的问题
- 修复了自定义形状在控制台中显示警告的问题
- 修复了在编辑器中删除根形状后抛出脚本错误的问题
- 修复了编辑器未配置时，在编辑器中应用 "Auto Layout" 按钮后控制台显示错误的问题
- 修复了在编辑器默认模式下更改形状轮廓类型后未生效的问题
- 修复了在默认模式下初始化的编辑器中，右侧面板跟踪形状参数的问题
- 修复了在编辑器默认模式下移除形状焦点的问题
- 修复了在默认模式下初始化编辑器时，按所需顺序在形状之间设置连接线的问题
- 修复了编辑器组织架构图模式下 <kbd>Ctrl</kbd>+<kbd>A</kbd> 组合键工作不正确的问题
- 修复了复制已连接的形状后，粘贴的形状没有连接线的问题
- 现在，当编辑器以组织架构图模式初始化时，无法再通过键盘导航从编辑器中移除根形状

## 版本 3.0.4 {#version-304}

2021 年 1 月 27 日发布

### 修复 {#fixes}

- 修复了在默认模式下初始化的 Editor 中，处理页面上的输入框时选中形状行为不正确的问题
- 修复了折叠/展开的项目与其父级不同步工作的问题
- 修复了子项目隐藏时 [showItem()](api/diagram/showitem_method.md) 方法工作不正确的问题

## 版本 3.0.3 {#version-303}

2020 年 12 月 23 日发布

### 修复 {#fixes}

- 修复了 Diagram 导出服务的问题

## 版本 3.0.2 {#version-302}

2020 年 7 月 14 日发布

### 修复 {#fixes}

- 修复了在以组织架构图模式初始化的 Editor 中从 JSON 导入数据的问题
- 修复了配置编辑器右侧面板时 [addShape()](api/diagram/addshape_method.md) 方法工作不正确的问题
- 改进了 Editor 工具栏中 historyManager 控件的行为

## 版本 3.0.1 {#version-301}

2020 年 5 月 29 日发布

### 修复 {#fixes}

- 修复了 [autoPlace()](api/diagram/autoplace_method.md) 方法的问题
- 修复了 PNG/PDF 导出模块的问题

## 版本 3.0 {#version-30}

2020 年 5 月 12 日发布

### 重大变更 {#breaking-changes}

新版本引入了一些更改和改进。请查看[迁移](migration.md#22---30)文章以跟上最新版本的步伐。

### 新功能 {#new-functionality}

- 新增 [autoPlace()](api/diagram/autoplace_method.md) 方法和 [autoplacement](api/diagram/autoplacement_property.md) 属性，用于在层级结构中[自动排列已连接的形状](guides/manipulating_items.md#arranging-shapes-automatically)
- 支持在初始化 [Diagram](api/diagram/defaults_property.md) 或 [Diagram Editor](api/diagram_editor/editor/config/defaults_property.md) 时通过 `defaults` 属性[设置形状的默认配置](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape)
- 新增 [addShape()](api/diagram/addshape_method.md) 方法，用于在 Diagram 和 Diagram Editor 中[创建自定义形状](shapes/custom_shape.md)
- Editor 对象的新属性：`controls`、[defaults](api/diagram_editor/editor/config/defaults_property.md)、`shapeSections`、`shapeBarWidth`、`scalePreview`、[scale](api/diagram_editor/editor/config/scale_property.md)、`gapPreview`
- 在 [Editor 右侧面板](guides/diagram_editor/editbar.md)中新增 *Grid Step* 侧边栏选项
- 支持通过 Editor 对象的 `controls` 属性显示/隐藏 Editor 的任意工具栏按钮以及 *Grid Step* 侧边栏选项
- 支持通过 [addShape()](api/diagram/addshape_method.md) 方法的 `properties` 属性[在编辑器右侧面板中配置用于编辑自定义形状属性的侧边栏选项](guides/diagram_editor/editbar.md)
- [支持自定义 Editor 左侧面板中的分区](guides/diagram_editor/shapebar.md#custom-sections)
- 支持通过形状对象的 [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) 属性[自定义 Editor 左侧面板中渲染的形状外观](guides/diagram_editor/shapebar.md)
- 支持[在 Editor 中选择、复制、粘贴、删除、移动多个形状](guides/diagram_editor/grid_area.md#manipulating-multiple-items)
- 支持在以默认模式初始化的编辑器中[选择并删除多条连接线](guides/diagram_editor/grid_area.md#manipulating-multiple-items)
- 支持通过工具栏的 ["Import Data"](guides/diagram_editor/toolbar.md) 按钮从 JSON 文件向 Editor 导入数据
- 新增 [destructor()](api/diagram/destructor_method.md) 方法

### 更新 {#updates}

- 支持在 IE 中使用自定义 HTML 模板
- 更新并改进了 Diagram Editor 的 UI
- 支持从中心到中心连接形状
- 更新了 Editor 的一组热键
- 支持在以默认模式初始化的编辑器中为 *text* 形状设置连接线
- 新增 *text* 形状内容宽度的自动适应

## 版本 2.2.1 {#version-221}

2019 年 12 月 30 日发布

### 修复 {#fixes}

- Diagram Editor 中图片加载器对 IE 的支持问题

## 版本 2.2 {#version-22}

2019 年 11 月 27 日发布

### 新功能 {#new-functionality}

- 支持通过 SVG 和 HTML 模板创建自定义形状
- 支持使用不同类型的形状构建图表
- 支持通过[工具栏](guides/diagram_editor/toolbar.md)的 Export data 按钮将 Diagram Editor 中的数据导出为 JSON 格式
- Diagram Editor 新增 [showExport](migration.md#toolbar-buttons-in-editor) 选项和 `exportData` 事件

### 修复 {#fixes}

- 修复了将图表导出为 PDF 和 PNG 格式的问题
- 修复了鼠标事件工作不正确的问题
- 修复了在以组织架构图模式初始化的图表中删除子形状的问题
- 修复了 Diagram Editor 中左右面板工作不正确的问题
- 修复了自动生成形状和连接线唯一 ID 的问题

## 版本 2.1.1 {#version-211}

2019 年 10 月 11 日发布

### 修复 {#fixes}
- IE 中 img-card 的问题

## 版本 2.1 {#version-21}

2017 年 5 月 22 日发布

### 新功能 {#new-functionality}

- 便捷的 [Diagram 编辑器](guides/diagram_editor/initialization.md)，用于构建清晰明了的图表
- 为[形状](shapes/configuration_properties.md)和[线条](lines/configuration_properties.md)提供丰富的配置选项集
- 提供更多[图表](guides/customization.md)自定义可能性

### 更新 {#updates}

- 新增 [Hotkeys](guides/diagram_editor/hot_keys.md)，用于在编辑器中编辑 Diagram
- 新增 [emptyAreaClick](api/diagram/emptyareaclick_event.md) 事件
- 新增 `lineGap` 配置选项

## 版本 2.0 {#version-20}

2017 年 2 月 15 日发布

### 重大变更 {#breaking-changes}

API 结构进行了全面重组和改进，以简化使用体验。请查看[迁移](migration.md#11---20)文章了解所有更改。

### 新功能 {#new-functionality}

- 支持创建不同类型的图表并对其进行样式设置
- 提供多种[形状](shapes/default_shapes.md)和[线条](/lines/)
- [导出为 PDF 格式](guides/data_export.md)
- [导出为 PNG 格式](guides/data_export.md)

### 更新 {#updates}

- 支持[查找所需形状](guides/manipulating_items.md#finding-the-necessary-item)
- 支持[按指定条件筛选形状](guides/manipulating_items.md#filtering-items)
- 支持[为形状添加带图标的工具栏](guides/diagram/configuration.md#setting-toolbar-for-shapes)，以简化与形状的交互
- 提升了性能
- 支持适应任意 HTML 容器，并内置自动调整大小功能

## 版本 1.1 {#version-11}

2017 年 12 月 5 日发布

### 新功能 {#new-functionality}

- [在组织架构图模式下使用 Editor](api/diagram_editor/editor/config/type_property.md)
- 支持[保存和恢复状态](guides/loading_data.md#saving-and-restoring-state)
- 扩展了[自定义功能](guides/customization.md)

### 更新 {#updates}

- [扩展的 API](api/diagram/api_overview.md)：新增方法、属性和事件

## 版本 1.0 {#version-10}

2017 年 9 月 29 日发布

### 初始功能 {#initial-functionality}

- 组织架构图模式
- 垂直和水平自动布局策略
- 从 JSON 加载数据
- 用于管理数据和分支状态的 API
