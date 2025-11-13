---
sidebar_label: What's new
title: What's New
description: You can learn a new information about DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# What's new

If you are updating Diagram from an older version, check [Migration to Newer Version](migration.md) for details.

## Version 6.1

Released on November 25, 2025

### New functionality

- The ability to create Diagram PERT charts from Gantt data sets:
    - [a new PERT mode](/diagram/#diagram-in-the-pert-mode) set via the [new type: `"pert"` ](/diagram/api/diagram/type_property/)
    - [new types of shapes: `"task"` and `"milestone"`](/shapes/default_shapes/#shapes-in-the-pert-mode)
    - [a new group type: `"project"`](/groups/#grouping-shapes-in-the-pert-mode) (for grouping tasks and milestones)
- Diagram Editor. The ability to manage keyboard shortcuts (hotkeys) within the editor:
    - a new [`hotkeys`](/api/diagram_editor/editor/config/hotkeys_property/) configuration property allows modifying or switching off the existing hotkeys, as well as adding new ones
- Diagram Editor. The ability to manage shapes resizing and rotating via a set of new events:
[`beforeItemResize`](/api/diagram_editor/editor/events/beforeitemresize_event/),
[`afterItemResize`](/api/diagram_editor/editor/events/afteritemresize_event/),
[`itemResizeEnd`](/api/diagram_editor/editor/events/itemresizeend_event/),
[`beforeItemRotate`](/api/diagram_editor/editor/events/beforeitemrotate_event/),
[`afterItemRotate`](/api/diagram_editor/editor/events/afteritemrotate_event/),
[`itemRotateEnd`](/api/diagram_editor/editor/events/itemrotateend_event/)

### Updates

- DataCollection API. Updates for the PERT mode:
    - the [`parse()`](/api/data_collection/parse_method/) method may take as the first parameter an object with `data` and `links` arrays 
    - the [`serialize()`](/api/data_collection/serialize_method/) method may return an object with `data` and `links` arrays 
- Diagram API. The ability to set the format of rendering dates in the task shapes for the PERT mode:
    - a new `dateFormat` parameter for the [`typeConfig`](/api/diagram/typeconfig_property/) configuration property
- Diagram/Diagram Editor API. The ability to define the connection type of the lines:
    - a new `connectType` parameter for the [`lineConfig`](/api/diagram/lineconfig_property/) configuration property of Diagram 
    - a new `connectType` parameter for the [`lineConfig`](/api/diagram_editor/editor/config/lineconfig_property/) configuration property of Diagram Editor
- Export API. The [`pdf()`](/api/export/pdf_method/) and [`png()`](/api/export/png_method/) export functions return a promise of data export

### Fixes

- Diagram Editor. The script error that occurred after hovering over a shape in the Safari browser
- Diagram Editor. The console warnings that occurred after removing items

### New demo on AI integration

- [DHTMLX Diagram Org Chart AI Builder](https://dhtmlx.com/docs/demo/ai-org-chart-builder/)


### New samples

- [Diagram. PERT chart. Initialization](https://snippet.dhtmlx.com/4h5fi7xd) 
- [Diagram and Gantt. PERT chart. Initialization](https://snippet.dhtmlx.com/409jj9uh)  
- [Diagram and Gantt. PERT chart. Full integration](https://snippet.dhtmlx.com/gcnx4a9h)
- [Diagram and Gantt. PERT chart. Popup window](https://snippet.dhtmlx.com/fvfysbdb)
- [Diagram and Gantt. PERT chart. Custom shapes and styling (custom CSS)](https://snippet.dhtmlx.com/mtk92awx)
- [Diagram. PERT chart. Different datasets](https://snippet.dhtmlx.com/2j2y8vy6)
- [Diagram. PERT chart. Filter/search tasks](https://snippet.dhtmlx.com/1b2bmmxk)
- [Diagram. PERT chart. Custom sidebar for task information](https://snippet.dhtmlx.com/712lsox0)
- [Diagram. PERT chart. Themes](https://snippet.dhtmlx.com/2e5y5u6m)
- [Diagram Editor. Managing moving, rotating and resizing of shapes via events](https://snippet.dhtmlx.com/qldjbbm7)
- [Diagram Editor. Managing adding, modifying and disabling of hotkeys via API](https://snippet.dhtmlx.com/8ads5dq8)
- [Diagram Editor. Fishbone Diagram. Causes and solutions](https://snippet.dhtmlx.com/7vhwtiba)
- [Diagram Editor. Fishbone Diagram. Multiple causes](https://snippet.dhtmlx.com/0dgjwt6u)
- [Diagram. Export. Bottom-left watermark](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. Export. Repeating watermark](https://snippet.dhtmlx.com/emkea55j)

## Version 6.0.11 

Released on June 18, 2025

### Fixes

- Diagram Editor. Incorrect shapes moving while zooming in

## Version 6.0.10 

Released on March 10, 2025

### Fixes

- Diagram. The issue with adjusting the size of the line shape arrow while editing the line width

## Version 6.0.9 

Released on February 4, 2025

### Fixes

- Diagram Editor. An issue with moving a group with items and moving items to/from a group
- Diagram. The `itemMouseOver` and `itemMouseOut` events aren't triggered for a selected shape

## Version 6.0.8

Released on December 5, 2024

- The issue with the local trial package during import to frameworks

## Version 6.0.7

Released on November 27, 2024

- Diagram Editor. An error occurred during the shape editing with the Editbar
- Diagram Editor. An issue with a shape moving during the navigation on inline editing 

## Version 6.0.4

Released on October 1, 2024

### Fixes

- Diagram Editor. Calling the `destructor()` method throws an error

## Version 6.0.3 

Released on August 28, 2024

### Fixes

- Diagram Editor. Applying different locales for `calendar`, `combobox`, `colorpicker`, `form`, `timepicker` of Editbar
- Diagram Editor. Adding Diagram Editor in a Layout cell
- Diagram Editor. The `shapeToolbar` property is not optional for the **default** mode
- Diagram Editor. Incorrect hover behavior when a custom shape has a preview image


## Version 6.0.2

Released on July 16, 2024

### Fixes

- Diagram. Autoplacement. A shape hides under another shape

## Version 6.0.1

Released on June 24, 2024

### Fixes

- Diagram Editor. Memory leak
- Diagram Editor. Script error when clicking on vertical and horizontal distribute via Toolbar
- Diagram. Types issue when calling the [`getSubHeaderCellId()`](api/cell_manager/getsubheadercellid_method.md) method

## Version 6.0

Released on May 16, 2024

### Breaking changes

The new update introduces significant changes in the structure and functionality of Diagram and Diagram Editor. Check the [Migration article](../migration/#50---60) to keep in step with the latest version.

### New functionality

- Restructuring of Diagram Editor: providing the ability to interact with its parts and manage their visibility with the [`view`](../api/diagram_editor/editor/config/view_property/) property that includes the following configurations:
    - [Toolbar](../guides/diagram_editor/toolbar/) - a top part of Diagram Editor that helps users to control the editing process (see [API overview](/api/diagram_editor/toolbar/api_overview/))
    - [Shapebar](../guides/diagram_editor/shapebar/) - (former Left panel) a part of Diagram Editor that renders previews of Diagram items (see [API overview](/api/diagram_editor/shapebar/api_overview/))
    - [Editbar](../guides/diagram_editor/editbar/) - (former Right panel) a part of Diagram Editor that allows users to edit Diagram items (see [API overview](/api/diagram_editor/editbar/api_overview/)). You can perform the following actions:
        - sets of predefined [Basic controls](/api/diagram_editor/editbar/basic_controls_overview/) and [Complex controls](/api/diagram_editor/editbar/complex_controls_overview/)
        - adjustable configuration of [Basic controls](/api/diagram_editor/editbar/basic_controls_overview/) and [Complex controls](/api/diagram_editor/editbar/complex_controls_overview/) depending on the provided conditions
        - dynamic management of the Editbar panel depending on the provided conditions ([Example](https://snippet.dhtmlx.com/ealq0m4l?mode=wide))
        - creation of custom controls ([Example](https://snippet.dhtmlx.com/1p0wemnn?mode=wide))
        - creation of HTML content ([Example](https://snippet.dhtmlx.com/vcnt647v?mode=wide))
- Diagram Editor. The [Copy manager API](/api/diagram_editor/copymanager/api_overview/) added
- Diagram Editor. The ability to show/hide [Shapebar](../api/diagram_editor/shapebar/config/show_property/), [Editbar](../guides/diagram_editor/editbar/) and [Toolbar](../guides/diagram_editor/toolbar/)
- Diagram Editor. The [destructor()](../api/diagram_editor/editor/methods/destructor_method/) method is added
- Diagram Editor. The ability to [hide the connection points](../api/diagram_editor/editor/config/connectionpoints_property/)
- Diagram Editor. The ability to [hide the resize points](../api/diagram_editor/editor/config/resizepoints_property/)
- Diagram Editor. The ability to [hide the grid](../api/diagram_editor/editor/config/grid_property/)
- The upgrade of the [Selection API](../api/selection/) with the ability of multiple selection
- The titles of lines are declared as separate objects defined as [`lineTitles`](../line_titles/) with their own [configuration properties](../line_titles/configuration_properties/)
- [Supporting new themes](../category/themes/): Dark, Light High Contrast and Dark High Contrast ([Example](https://snippet.dhtmlx.com/9twmlfus))
- Diagram Editor. The ability to customize the [Shapebar items' color scheme](../guides/themes/base_themes_configuration/#configuring-the-look-of-shapes-in-shapebar) by redefining the CSS variables and using the custom ones

### Updates

- Diagram Editor. [Locales](../guides/localization/) are updated
- Diagram Editor. The [Hotkeys](../guides/diagram_editor/hot_keys/) list is extended
- Diagram Editor. The behavior of Shapebar items when they are pulled to the grid and their appearance are improved
- Diagram Editor. The callback function of [`zoomIn`](../api/diagram_editor/editor/events/zoomin_event/) / [`zoomOut`](../api/diagram_editor/editor/events/zoomout_event/) events is called with the `step` parameter
- Diagram Editor. The functionality of the [`magnetic`](../api/diagram_editor/editor/config/magnetic_property/) configuration option is extended
- Diagram Editor. The move [events](/api/diagram_editor/editor/events/overview/) of the Editor object are updated:
[`afterGroupMove`](../api/diagram_editor/editor/events/aftergroupmove_event/),
[`afterItemCatch`](../api/diagram_editor/editor/events/afteritemcatch_event/),
[`afterItemMove`](../api/diagram_editor/editor/events/afteritemmove_event),
[`afterLineTitleMove`](../api/diagram_editor/editor/events/afterlinetitlemove_event/),
[`afterShapeMove`](../api/diagram_editor/editor/events/aftershapemove_event/),
[`beforeGroupMove`](../api/diagram_editor/editor/events/beforegroupmove_event/),
[`beforeItemCatch`](../api/diagram_editor/editor/events/beforeitemcatch_event/),
[`beforeItemMove`](../api/diagram_editor/editor/events/beforeitemmove_event/),
[`beforeLineTitleMove`](../api/diagram_editor/editor/events/beforelinetitlemove_event/),
[`beforeShapeMove`](../api/diagram_editor/editor/events/beforeshapemove_event/),
[`groupMoveEnd`](../api/diagram_editor/editor/events/groupmoveend_event/),
[`itemMoveEnd`](../api/diagram_editor/editor/events/itemmoveend_event/),
[`itemTarget`](../api/diagram_editor/editor/events/itemtarget_event/),
[`lineTitleMoveEnd`](../api/diagram_editor/editor/events/linetitlemoveend_event/),
[`shapeMoveEnd`](../api/diagram_editor/editor/events/shapemoveend_event/)
- The ability to [work with line titles via the DataCollection API](../line_titles/#working-with-line-titles)

### Deprecated API

- #### Properties

    - The `controls` property of Diagram Editor is deprecated and no longer supported
    - The `editMode` property of Diagram Editor is deprecated and no longer supported
    - The `gapPreview` property of Diagram Editor is deprecated and no longer supported
    - The `reservedWidth` property of Diagram Editor is deprecated and no longer supported
    - The `scalePreview` property of Diagram Editor is deprecated and no longer supported
    - The `shapeBarWidth` property of Diagram Editor is deprecated and no longer supported
    - The `shapeSections` property of Diagram Editor is deprecated and no longer supported
    - The `title` property of [Line](/diagram/lines/configuration_properties/) data is deprecated and no longer supported

- #### Methods

    - The `getId()` method of the Selection object of Diagram is deprecated and no longer supported
    - The `getSubId()` method of the Selection object of Diagram is deprecated and no longer supported
    - The `setViewMode()` method of Diagram Editor is deprecated and no longer supported

- #### Events

    - The following events of Diagram Editor are deprecated and no longer supported, since there are no corresponding buttons in the toolbar: `resetButton`, `applyButton`, `visibility`, `exportData`, `importData`, `autoLayout`
    - The `changeGridStep` event of Diagram Editor is deprecated and no longer supported

### Fixes

- Diagram Editor. Fix a console error caused by clicking the "Import data" button for a second time after data import and not selecting a file
- Diagram Editor. Fix blocking of a new shape adding
- Diagram Editor. Fix copying of lines while selecting elements manually
- Diagram Editor. Fix dragging when the root shape is close to the child one in the **mindmap/org** modes
- Diagram Editor. Fix incorrect selection behavior that required an additional click for selecting a shape with the Shift key
- Diagram Editor. Fix moving a group and a swimlane together
- Diagram Editor. Fix removing of unused lines/connectors
- Diagram Editor. Fix the ability to move items of different parents to the target item (for the **org/mindmap** modes)
- Diagram Editor. Fix the ability to set default values for the Shapebar elements
- Diagram Editor. Fix the appearance of connectors on hovering moved items above any shape
- Diagram Editor. Fix the impossibility to remove selected items via menu in the **mindmap/org** modes
- Diagram Editor. Fix the issue with data import working just once
- Diagram Editor. Improve performance during the connector movement
- Diagram Editor. Limit the recording of actions during the connector movement in the **historyManager**
- Diagram Editor. Optimize the logic of searching for the nearest connector
- Fix the localization with complex widgets

## Version 5.0.3

Released on July 12, 2023

### Fixes

- Fix the issue when calling of the [autoPlace()](/diagram/api/diagram/autoplace_method/) method after data parsing caused an error

## Version 5.0.2

Released on May 30, 2023

### Fixes

- Diagram Editor. Fix the issue with custom points not moving during a multi select move
- Diagram Editor. Fix the impossibility to link a shape to itself
- Fix the problem with exporting a default diagram without [exportStyles](/diagram/api/diagram/exportstyles_property/)
- Fix the issue with the promiz.js library that caused an error with the setImmediate() method definition on importing the sources 
- Fix path formation of the URL in the Export object 
- Types for export are added

## Version 5.0.1

Released on January 19, 2023

### Fixes
  
- Diagram Editor. Fix the issue which caused lines not always being drawn in their places if data was exported and then loaded again
    - Now it is possible to define the coordinates for lines in the default mode (new [`points`](diagram/lines/configuration_properties.md#properties-specific-for-the-default-mode) property of the line object)
- Diagram Editor. Fix the issue with dragging of shapes in the grid after changing the zoom level
- Fix the error thrown after clicking on the "Auto layout" button in the absence of shapes
- Fix the issue with display of [default settings](diagram/api/diagram/defaults_property.md) after creation of lines via the editor
- Fix the issue with scale of Diagram/Diagram Editor appeared when auto-placing shapes in the "radial" mode

## Version 5.0

Released on September 7, 2022

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-5-0/" target="_blank">Review of release on the blog</a>

### Breaking changes

The new release introduces some changes to the `lineGap` property. Check the [Migration article](migration.md#42---50) to keep in step with the latest version.

### New functionality

#### Diagram

- Radial algorithm of [auto-placement of shapes](guides/diagram/configuration.md#configuring-autoplacement-for-shapes):
    - the `placemode` parameter is added to the [`autoplacement`](api/diagram/autoplacement_property.md) property
    - the `placemode` parameter is added to the [`autoPlace()`](api/diagram/autoplace_method.md) method
- The ability to set tooltips for toolbar icons:
    - the `tooltip` parameter of the icon object is added to the [`toolbar`](api/diagram/toolbar_property.md) property

#### Diagram Editor

- Radial algorithm of auto-placement of shapes:
    - the `placemode` parameter is added to the [`autoplacement`](/api/diagram_editor/editor/config/autoplacement_property/) property
    - the **Auto Layout** button of [Toolbar](guides/diagram_editor/toolbar.md) now provides two options for shapes' auto-placement: *Orthogonal* and *Radial*
- [Snap lines](guides/diagram_editor/grid_area.md#enablingdisabling-snap-lines) for arrangement of shapes in the grid area with greater precision
- The ability to configure snap lines via the new [`magnetic`](api/diagram_editor/editor/config/magnetic_property.md) property
- The ability to copy and paste styles of an item(s) via `Alt (Option) + Ctrl (Cmd) + С` => `Alt (Option) + Ctrl (Cmd) + V` (see the **[example](https://snippet.dhtmlx.com/klgvu3jq)**) 
- The ability to [align and distribute multiple items](guides/diagram_editor/grid_area.md#aligning-multiple-items)
- Now tooltips will appear when you hover over controls in the personal toolbar of items
- Extended list of [locale options](guides/localization.md) for localization of tooltips in the per-item toolbar
- The ability to set tooltips for [custom toolbar icons](guides/diagram_editor/grid_area.md#configuring-the-toolbar-of-an-item):
    - the `tooltip` parameter of the icon object is added to the [`shapeToolbar`](api/diagram_editor/editor/config/shapetoolbar_property.md) property
- Improved design of [Grid area](guides/diagram_editor/grid_area.md). Now the distance between points in the grid area depends on the value of the grid step

### Fixes

- Fix the issue which caused a loading icon not to disappear from the right panel of Editor after loading a file

## Version 4.2

Released on March 3, 2022

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-2-touch-support-default-settings-connector-lines-default-section-sets-editors-left-panel/" target="_blank">Review of release on the blog</a>

### New functionality

- [Touch support](/guides/touch_support/)
- The ability to specify the default setting for lines via the [`lineConfig`](/api/diagram/lineconfig_property/) property of Diagram
- The ability to specify the default settings for new lines created in the editor via the [`lineConfig`](/api/diagram_editor/editor/config/lineconfig_property/) property of Diagram Editor
- The ability to add default sets of org shapes, groups, swimlanes in the necessary order when [configuring sections in the left panel of the editor](/guides/diagram_editor/shapebar/#custom-sections)

### Updates

- The `defaultLinkType` property of Diagram is deprecated. Check the [Migration](/migration/#41---42) article
- The `shapeSections` property of Diagram Editor is updated. Check the [Migration](/migration/#41---42) article
- Now it is possible to define the default configurations not only for shapes of the particular types but also for lines:
    - the [`defaults`](/api/diagram/defaults_property/) property of Diagram is updated
    - the [`defaults`](/api/diagram_editor/editor/config/defaults_property/) property of Diagram Editor is updated
- The documentation for [Modes of connecting shapes](/api/diagram/autoplace_method/#modes-of-connecting-shapes) has been updated

## Version 4.1

Released on December 7, 2021

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-1-partners-assistants-org-charts-moving-shapes-children-connector-titles-much/" target="_blank">Review of release on the blog</a>

### New functionality

- The ability to add [partner shapes](/#assistant-and-partner-shapes) in the org chart  mode
- The ability to add [assistant shapes](/#assistant-and-partner-shapes) in the org chart  mode
- The ability to add [titles to lines](/#line-titles) in the default mode
- The ability to [drag and drop shapes](../editor_overview/#editor-in-the-org-chart-mode) from one parent to another in Editor in org chart and mind map modes. The shapes are dragged with their children items
- The ability to [style target items](/guides/customization/#styling-target-shapes) in Editor in org chart and mindmap modes

### API

- New events of the Diagram object: [`emptyAreaDblClick`](/api/diagram/emptyareadblclick_event/), [`emptyAreaMouseDown`](/api/diagram/emptyareamousedown_event/), [`lineTitleClick`](/api/diagram/linetitleclick_event/), [`lineTitleDblClick`](/api/diagram/linetitledblclick_event/), [`lineTitleMouseDown`](/api/diagram/linetitlemousedown_event/)
- New [Shape properties](/shapes/configuration_properties/#properties-specific-for-the-org-chart-mode) specific for the org chart mode: `assistant`, `partner`, `catchItem`, `giveItem`
- New [Shape properties](/shapes/configuration_properties/#properties-specific-for-the-mindmap-mode) specific for the mindmap mode: `catchItem`, `giveItem`
- New [Line properties](/lines/configuration_properties/#properties-specific-for-the-default-mode) specific for the default mode: `title`
- New methods of the Editor object: `setViewMode()`, `zoomIn()`, `zoomOut()`
- New events of the Editor object: [`beforeLineTitleMove`](/api/diagram_editor/editor/events/beforelinetitlemove_event/), [`afterLineTitleMove`](/api/diagram_editor/editor/events/afterlinetitlemove_event/), [`lineTitleMoveEnd`](/api/diagram_editor/editor/events/linetitlemoveend_event/), [`itemTarget`](/api/diagram_editor/editor/events/itemtarget_event/), [`beforeItemCatch`](/api/diagram_editor/editor/events/beforeitemcatch_event/), [`afterItemCatch`](/api/diagram_editor/editor/events/afteritemcatch_event/)
- New properties of the Editor object: [`itemsDraggable`](/api/diagram_editor/editor/config/itemsdraggable_property/)
- New HistoryManager methods: [`add()`](/api/diagram_editor/historymanager/methods/add_method/), [`disable()`](/api/diagram_editor/historymanager/methods/disable_method/), [`enable()`](/api/diagram_editor/historymanager/methods/enable_method/), [`isRedo()`](/api/diagram_editor/historymanager/methods/isredo_method/), [`redo()`](/api/diagram_editor/historymanager/methods/redo_method/), [`reset()`](/api/diagram_editor/historymanager/methods/reset_method/), [`undo()`](/api/diagram_editor/historymanager/methods/undo_method/)
- New HistoryManager properties: `disabled`, [`saveDelay`](/api/diagram_editor/historymanager/config/savedelay_property/)
- New Selection method: `getSubId()`

### Updates

- Updated events of [InlineEditor](/api/inline_editor/): *subHeaderId* parameter has been changed to *subId*
- Updated events of [Selection API](/api/selection/#events): *subId* parameter has been added
- The default type of the shape in the default mode has been changed to [*"rectangle"*](/shapes/configuration_properties/#common-properties)

### Fixes

- The performance has been improved for all types of diagrams
- Fix of the incorrect work of *undo/redo* buttons in Toolbar of Editor

## Version 4.0.1

Released on September 16, 2021

### Fixes

- Fix the display of connectors when rotating the shape
- Fix the minified styles of the diagram
- Fix the work of the algorithm when adding new items into the diagram editor in the org chart/mindmap modes
- Fix the work of the right panel of the editor when working with styles of the text

## Version 4.0

Released on September 7, 2021

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-0-groups-swimlanes-angular-react-vue-demos/" target="_blank">Review of release on the blog</a>

### New functionality

- New diagram items are added: [Groups](../groups/), [Swimlanes](../swimlanes/)
- New sections in the left panel of the Diagram Editor are added: [Groups, Swimlanes](../guides/diagram_editor/shapebar/#default-sections)
- [New sidebar options are added to the right panel of the editor for Groups, Swimlanes](../guides/diagram_editor/editbar/)
- The ability to edit [Groups](../guides/diagram_editor/grid_area/#managing-groups) and [Swimlanes](../guides/diagram_editor/grid_area/#managing-swimlanes) via UI
- Extended list of [locale options](../guides/localization/)
- The ability to operate the cells of a swimlane via [CellManager API](../api/cell_manager/)
- The ability to edit the text of an item by double-clicking on it
- [DHTMLX Diagram with Angular](/guides/integrations/angular_integration/) demo is added
- [DHTMLX Diagram with React](/guides/integrations/react_integration/) demo is added
- [DHTMLX Diagram with Vue.js](/guides/integrations/vue_integration/) demo is added
- The ability [to add identical items with different styles and settings to the left panel of the editor](../guides/diagram_editor/shapebar/)

### API

- New [CellManager API](../api/cell_manager/) methods: [add()](../api/cell_manager/add_method/), [getCellId()](../api/cell_manager/getcellid_method/), [getCellIndex()](../api/cell_manager/getcellindex_method/), [getSubHeaderCellId()](../api/cell_manager/getsubheadercellid_method/), [getSubHeaderCellIndex()](../api/cell_manager/getsubheadercellindex_method/), [getSubHeaderType()](../api/cell_manager/getsubheadertype_method/), [move()](../api/cell_manager/move_method/), [remove()](../api/cell_manager/remove_method/), [resetSwimlane()](../api/cell_manager/resetswimlane_method/), [setSwimlane()](../api/cell_manager/setswimlane_method/), [validation()](../api/cell_manager/validation_method/)
- New [CellManager API](../api/cell_manager/) events: [afterCellsAdd](../api/cell_manager/aftercellsadd_event/), [afterCellsMove](../api/cell_manager/aftercellsmove_event/), [afterCellsRemove](../api/cell_manager/aftercellsremove_event/), [afterCellsValidation](../api/cell_manager/aftercellsvalidation_event/), [beforeCellsAdd](../api/cell_manager/beforecellsadd_event/), [beforeCellsMove](../api/cell_manager/beforecellsmove_event/), [beforeCellsRemove](../api/cell_manager/beforecellsremove_event/), [beforeCellsValidation](../api/cell_manager/beforecellsvalidation_event/)
- New events of the Diagram object: [afterSubmenuOpen](../api/diagram/aftersubmenuopen_event/), [beforeSubmenuOpen](../api/diagram/beforesubmenuopen_event/), [groupClick](../api/diagram/groupclick_event/), [groupDblClick](../api/diagram/groupdblclick_event/), [groupHeaderClick](../api/diagram/groupheaderclick_event/), [groupHeaderDblClick](../api/diagram/groupheaderdblclick_event/), [groupMouseDown](../api/diagram/groupmousedown_event/), [itemClick](../api/diagram/itemclick_event/), [itemDblClick](../api/diagram/itemdblclick_event/), [itemMouseDown](../api/diagram/itemmousedown_event/), [itemMouseOut](../api/diagram/itemmouseout_event/), [itemMouseOver](../api/diagram/itemmouseover_event/), [lineDblClick](../api/diagram/linedblclick_event/), [lineMouseDown](../api/diagram/linemousedown_event/)
- New events of the Editor object:  [shapeMoveEnd](/api/diagram_editor/editor/events/shapemoveend_event/), [beforeItemMove](/api/diagram_editor/editor/events/beforeitemmove_event/), [afterItemMove](/api/diagram_editor/editor/events/afteritemmove_event/), [itemMoveEnd](/api/diagram_editor/editor/events/itemmoveend_event/), [beforeGroupMove](/api/diagram_editor/editor/events/beforegroupmove_event/), [afterGroupMove](/api/diagram_editor/editor/events/aftergroupmove_event/), [groupMoveEnd](/api/diagram_editor/editor/events/groupmoveend_event/)
- New methods of DataCollection: [eachChild()](../api/data_collection/eachchild_method/), [eachParent()](../api/data_collection/eachparent_method/), [getRoot()](../api/data_collection/getroot_method/), [getRoots()](../api/data_collection/getroots_method/)
- New events of InlineEditor: [afterEditorClose](../api/inline_editor/aftereditorclose_event/), [afterEditorEditing](../api/inline_editor/aftereditorediting_event/), [afterEditorOpen](../api/inline_editor/aftereditoropen_event/), [beforeEditorClose](../api/inline_editor/beforeeditorclose_event/), [beforeEditorEditing](../api/inline_editor/beforeeditorediting_event/), [beforeEditorOpen](../api/inline_editor/beforeeditoropen_event/)
- New "editable" and "fixed" configuration attributes of the [shape object](../shapes/configuration_properties/)

### Updates

- Improved keyboard navigation
- Redesigned shapes
- Updated events of the Editor object: [beforeShapeMove](/api/diagram_editor/editor/events/beforeshapemove_event/) and [afterShapeMove](/api/diagram_editor/editor/events/aftershapemove_event/)
- Upgraded structure of Shape Collection API

### Fixes

- Fix the incorrect work of TypeScript type definitions in the editor
- Fix the issue which caused the toolbar button pressed in the editor, which is placed inside the HTML form, to trigger the form sending
- Now it is possible to resize an element only when the angle of its rotation is equal either to 0 or 360 degrees.
- Significant optimization of Diagram styles

## Version 3.1

Released on April 15, 2021

### New functionality

- [TypeScript Support](../guides/using_typescript/)
- New mindmap mode ([type:"mindmap"](../api/diagram/type_property/)) of DHTMLX Diagram is added
- The ability [to configure the direction of the child shapes relative to the root shape in the mindmap mode of Diagram](../guides/diagram/configuration/#arranging-shapes-in-the-mindmap-mode-of-diagram) via the [typeConfig](../api/diagram/typeconfig_property/) configuration property of the diagram object
- The ability [to add custom event handlers for custom shapes](../shapes/custom_shape/#event-handlers-for-custom-shapes) via the "eventHandlers" attribute of the [addShape()](../api/diagram/addshape_method/) method
- The ability to customize the personal toolbars for editing items in the [grid area](../guides/diagram_editor/grid_area/) via the [shapeToolbar](/api/diagram_editor/editor/config/shapetoolbar_property/) property of the Editor object
- New events of the Editor object: [BeforeShapeIconClick](/api/diagram_editor/editor/events/beforeshapeiconclick_event/) and [AfterShapeIconClick](/api/diagram_editor/editor/events/aftershapeiconclick_event/), [BeforeShapeMove](/api/diagram_editor/editor/events/beforeshapemove_event/) and [AfterShapeMove](/api/diagram_editor/editor/events/aftershapeiconclick_event/)
- The ability to cancel sending CSS styles to the export service via the [exportStyles](../api/diagram/exportstyles_property/) configuration option of the diagram object
  
### Updates

- The [type](../api/diagram/type_property/) configuration property of the diagram object is updated: new "default" and "mindmap" values are added
- The [collapseItem()](../api/diagram/collapseitem_method/) and [expandItem()](../api/diagram/expanditem_method/) methods are updated: the second "dir" parameter is added
- The [beforeCollapse](../api/diagram/beforecollapse_event/), [afterCollapse](../api/diagram/aftercollapse_event/), [beforeExpand](../api/diagram/beforeexpand_event/) and [afterExpand](../api/diagram/afterexpand_event/) events are updated: the second "dir" parameter is added

### Fixes

- Fix the issue with the selection module for all types of DHTMLX Diagram
- Fix the issue with the scroll of the diagram, which is initialized in the default mode, when applying the "showItem()" method to the scaled diagram
- Fix the incorrect work of DOM Parser with HTML templates
- Fix the issue that caused the root shape to be collapsed after collapsing any child shape
- Fix the issue with formatting the shape text
- Fix the issue that appeared after adding long text into the textarea field of the right panel of the editor
- Fix the issue with adding special chars to the text of custom shapes
- Fix the issue with warnings shown in the console for custom shapes
- Fix the script error thrown after deleting the root shape in the editor
- Fix the issue with the error shown in the console after applying the "Auto Layout" button in the editor when the editor is not configured
- Fix the issue that caused the type of the shape outline not to be applied after its changing in the default mode of the editor
- Fix the issue with tracking the shape parameters in the right panel of the editor which is initialized in the default mode
- Fix the issue with removing focus from the shape in the default mode of the editor
- Fix the issue with setting connectors between the shapes in the necessary order when the editor is initialized in the default mode
- Fix the incorrect work of the "Ctrl+A" combination in the org chart mode of the editor
- Fix the issue that caused the shapes to be pasted without connectors when the connected shapes are copied
- Now there is no the ability to remove the root shape from the editor using keyboard navigation when the editor is initialized in the org chart mode

## Version 3.0.4

Released on January 27, 2021

### Fixes

- Fix the incorrect behavior of the shape selected in the Editor, which is initialized in the default mode, when working with the input field on the page
- Fix the issue that caused a collapsed/expanded item not to work with its parent 
- Fix the incorrect work of the [showItem()](../api/diagram/showitem_method/) method when the child item is hidden

## Version 3.0.3

Released on December 23, 2020

### Fixes

- Fix issue with the Diagram export service

## Version 3.0.2

Released on July 14, 2020

### Fixes

- Fix issue with importing data from JSON to the Editor which is initialized in the org chart mode
- Fix the incorrect work of the [addShape()](../api/diagram/addshape_method/) method while configuring the right panel of the editor
- Improved behavior of the historyManager control of the toolbar in the Editor

## Version 3.0.1

Released on May 29, 2020

### Fixes

- Fix issue with the [autoPlace()](../api/diagram/autoplace_method/) method
- Fix issue with PNG/PDF export modules

## Version 3.0

Released on May 12, 2020

### Breaking changes

The new update introduces some changes and improvements. Check the [Migration](../migration/#22---30) article to keep in step with the latest version.

### New functionality

- New [autoPlace()](../api/diagram/autoplace_method/) method and [autoplacement](../api/diagram/autoplacement_property/) property are added for [auto-arranging connected shapes](../guides/manipulating_items/#arranging-shapes-automatically) in the hierarchical structure
- [Ability to set the default configuration of a shape](../guides/diagram/configuration/#setting-the-default-configuration-of-a-shape) via the `defaults` property when initializing [Diagram](../api/diagram/defaults_property/) or [Diagram Editor](/api/diagram_editor/editor/config/defaults_property/)
- The [addShape()](../api/diagram/addshape_method/) method for [creating custom shapes](../shapes/custom_shape/) in Diagram and Diagram Editor is added
- New properties of the Editor object: `controls`, [defaults](/api/diagram_editor/editor/config/defaults_property/), `shapeSections`, `shapeBarWidth`, `scalePreview`, [scale](/api/diagram_editor/editor/config/scale_property/), `gapPreview` 
- The *Grid Step* sidebar option is added to the [right panel of the Editor](../guides/diagram_editor/editbar/)
- Ability to hide/show any toolbar buttons of the Editor as well as the *Grid Step* sidebar option via the `controls` property of the Editor object
- Ability [to configure sidebar options for editing attributes of the custom shapes in the right panel of the editor](../guides/diagram_editor/editbar/) via the `properties` attribute of the [addShape()](../api/diagram/addshape_method/) method
- [Ability to customize sections in the left panel of the Editor](../guides/diagram_editor/shapebar/#custom-sections)
- [Possibility to customize the appearance of shapes rendered in the left panel of the Editor](../guides/diagram_editor/shapebar) via the [preview](../shapes/configuration_properties/#properties-specific-for-the-default-mode) property of the shape object
- Ability [to select, copy, paste, delete, move several shapes in the Editor](../guides/diagram_editor/grid_area/#manipulating-multiple-items)
- Ability [to select and delete several connector lines](../guides/diagram_editor/grid_area/#manipulating-multiple-items) in the editor which is initialized in the default mode
- Ability to import data from a JSON file to the Editor via the ["Import Data"](../guides/diagram_editor/toolbar/) button of the toolbar 
- The [destructor()](../api/diagram/destructor_method/) method is added

### Updates

- Ability to use custom HTML templates in IE
- Diagram Editor UI was updated and improved
- Ability to connect shapes from center to center
- A set of hotkeys is updated for the Editor
- The ability to set a connector line to the *text* shape in the editor which is initialized in the default mode
- Auto-fit of the content width of the *text* shape is added

## Version 2.2.1

Released on December 30, 2019

### Fixes

- Issue with IE support for the image loader in Diagram editor

## Version 2.2

Released on November 27, 2019

### New functionality

- Ability to create custom shapes via using SVG and HTML templates
- Ability to build diagrams with different types of shapes
- The ability to export data from the Diagram Editor to the JSON format via the Export data button of the [toolbar](../guides/diagram_editor/toolbar/)
- The [showExport](../migration/#toolbar-buttons-in-editor) option and `exportData` event are added into Diagram Editor

### Fixes

- Fix the issue with exporting a diagram into the PDF and PNG formats
- Fix incorrect work of the mouse events
- Fix the issue with deleting child shapes from the diagram which is initialized in the org chart mode
- Fix incorrect work of the right and left panels in Diagram Editor
- Fix the issue with auto-generating of the unique id's of shapes and connectors

## Version 2.1.1

Released on October 11, 2019

### Fixes
- Issues with an img-card in IE

## Version 2.1

Released on May 22, 2017

### New functionality

- Handy [Diagram editor](../guides/diagram_editor/initialization/) for building clear-cut diagrams
- Enriched set of configuration options for [shapes](../shapes/configuration_properties/) and [lines](../lines/configuration_properties/)
- Greater possibilities for customizing [Diagrams](../guides/customization/)

### Updates

- [Hotkeys](../guides/diagram_editor/hot_keys/) are added for editing Diagram in the editor
- New event [emptyAreaClick](../api/diagram/emptyareaclick_event/) is added
- The `lineGap` configuration option is added

## Version 2.0

Released on February 15, 2017

### Breaking changes

The API structure was totally reorganized and improved to simplify work with it. Follow the [Migration](../migration/#11---20) article to learn all the changes.

### New functionality

- Ability to create different diagrams and stylize them
- Variety of [shapes](../shapes/default_shapes/) and [lines](../lines/)
- [Export to PDF format](../guides/data_export/)
- [Export to PNG format](../guides/data_export/)

### Updates

- Ability to [find necessary shapes](../guides/manipulating_items/#finding-the-necessary-item)
- Ability to [filter shapes by specified criteria](../guides/manipulating_items/#filtering-items)
- Ability to [add a toolbar with icons for shapes](../guides/diagram/configuration/#setting-toolbar-for-shapes) to simplify interaction with them
- Enhanced performance 
- Ability to adjust to any HTML container and built-in auto-sizing

## Version 1.1 

Released on December 5, 2017

### New functionality

- [Using Editor in the org chart mode](/api/diagram_editor/editor/config/type_property/)
- Ability to [save and restore the state](../guides/loading_data/#saving-and-restoring-state)
- Extended [customization possibilities](../guides/customization/)

### Updates

- [Extended API](../api/diagram/api_overview/): new methods, properties and events

## Version 1.0 

Released on September 29, 2017

### Initial functionality

- Organogram mode
- Vertical and horizontal autoplacement strategies
- Loading data from JSON
- API to manage data and branch state
