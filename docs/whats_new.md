---
sidebar_label: What's new
title: What's New
description: You can learn a new information about DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# What's New

If you are updating Diagram from an older version, check [Migration to Newer Version](migration.md) for details.

Version 4.0.1
-------------------
Released on September 16, 2021

### Fixes

- Fix the display of connectors when rotating the shape
- Fix the minified styles of the diagram
- Fix the work of the algorithm when adding new items into the diagram editor in the org chart/mindmap modes
- Fix the work of the right panel of the editor when working with styles of the text

Version 4.0
------------------
Released on September 7, 2021

### New functionality

- New diagram items are added: [Groups](../groups/index/), [Swimlanes](../swimlanes/index/)
- New sections in the left panel of the Diagram Editor are added: [Groups, Swimlanes](../guides/diagram_editor/left_panel/#default-sections)
- [New sidebar options are added to the right panel of the editor for Groups, Swimlanes](../guides/diagram_editor/right_panel/#sidebar-options-for-editing-groups-swimlanes)
- The ability to edit [Groups](../guides/diagram_editor/grid_area/#managing-groups) and [Swimlanes](../guides/diagram_editor/grid_area/#managing-swimlanes) via UI
- Extended list of [locale options](../guides/localization/)
- The ability to operate the cells of a swimlane via [CellManager API](../api/cell_manager/index/)
- The ability to edit the text of an item by double-clicking on it
- [DHTMLX Diagram with Angular](../guides/angular_integration/) demo is added
- [DHTMLX Diagram with React](../guides/react_integration/) demo is added
- [DHTMLX Diagram with Vue.js](../guides/vue_integration/) demo is added
- The ability [to add identical items with different styles and settings to the left panel of the editor](../guides/diagram_editor/left_panel/#adding-identical-items-with-different-settings-into-the-left-panel)

### API

- New [CellManager API](../api/cell_manager/index/) methods: [add()](../api/cell_manager/add_method/), [getCellId()](../api/cell_manager/getcellid_method/), [getCellIndex()](../api/cell_manager/getcellindex_method/), [getSubHeaderCellId()](../api/cell_manager/getsubheadercellid_method/), [getSubHeaderCellIndex()](../api/cell_manager/getsubheadercellindex_method/), [getSubHeaderType()](../api/cell_manager/getsubheadertype_method/), [move()](../api/cell_manager/move_method/), [remove()](../api/cell_manager/remove_method/), [resetSwimlane()](../api/cell_manager/resetswimlane_method/), [setSwimlane()](../api/cell_manager/setswimlane_method/), [validation()](../api/cell_manager/validation_method/)
- New [CellManager API](../api/cell_manager/index/) events: [afterCellsAdd](../api/cell_manager/aftercellsadd_event/), [afterCellsMove](../api/cell_manager/aftercellsmove_event/), [afterCellsRemove](../api/cell_manager/aftercellsremove_event/), [afterCellsValidation](../api/cell_manager/aftercellsvalidation_event/), [beforeCellsAdd](../api/cell_manager/beforecellsadd_event/), [beforeCellsMove](../api/cell_manager/beforecellsmove_event/), [beforeCellsRemove](../api/cell_manager/beforecellsremove_event/), [beforeCellsValidation](../api/cell_manager/beforecellsvalidation_event/)
- New events of the Diagram object: [afterSubmenuOpen](../api/diagram/aftersubmenuopen_event/), [beforeSubmenuOpen](../api/diagram/beforesubmenuopen_event/), [groupClick](../api/diagram/groupclick_event/), [groupDblClick](../api/diagram/groupdblclick_event/), [groupHeaderClick](../api/diagram/groupheaderclick_event/), [groupHeaderDblClick](../api/diagram/groupheaderdblclick_event/), [groupMouseDown](../api/diagram/groupmousedown_event/), [itemClick](../api/diagram/itemclick_event/), [itemDblClick](../api/diagram/itemdblclick_event/), [itemMouseDown](../api/diagram/itemmousedown_event/), [itemMouseOut](../api/diagram/itemmouseout_event/), [itemMouseOver](../api/diagram/itemmouseover_event/), [lineDblClick](../api/diagram/linedblclick_event/), [lineMouseDown](../api/diagram/linemousedown_event/)
- New events of the Editor object:  [shapeMoveEnd](../api/editor/shapemoveend_event/), [beforeItemMove](../api/editor/beforeitemmove_event/), [afterItemMove](../api/editor/afteritemmove_event/), [itemMoveEnd](../api/editor/itemmoveend_event/), [beforeGroupMove](../api/editor/beforegroupmove_event/), [afterGroupMove](../api/editor/aftergroupmove_event/), [groupMoveEnd](../api/editor/groupmoveend_event/)
- New methods of DataCollection: [eachChild()](../api/data_collection/eachchild_method/), [eachParent()](../api/data_collection/eachparent_method/), [getRoot()](../api/data_collection/getroot_method/), [getRoots()](../api/data_collection/getroots_method/)
- New events of InlineEditor: [afterEditorClose](../api/inline_editor/aftereditorclose_event/), [afterEditorEditing](../api/inline_editor/aftereditorediting_event/), [afterEditorOpen](../api/inline_editor/aftereditoropen_event/), [beforeEditorClose](../api/inline_editor/beforeeditorclose_event/), [beforeEditorEditing](../api/inline_editor/beforeeditorediting_event/), [beforeEditorOpen](../api/inline_editor/beforeeditoropen_event/)
- New "editable" and "fixed" configuration attributes of the [shape object](../shapes/configuration_properties/)

### Updates

- Improved keyboard navigation
- Redesigned shapes
- Updated events of the Editor object: [beforeShapeMove](../api/editor/beforeshapemove_event/) and [afterShapeMove](../api/editor/aftershapemove_event/)
- Upgraded structure of Shape Collection API

### Fixes

- Fix the incorrect work of TypeScript type definitions in the editor
- Fix the issue which caused the toolbar button pressed in the editor, which is placed inside the HTML form, to trigger the form sending
- Now it is possible to resize an element only when the angle of its rotation is equal either to 0 or 360 degrees.
- Significant optimization of Diagram styles

Version 3.1
------------------

Released on April 15, 2021

### New functionality

- [TypeScript Support](../guides/using_typescript/)
- New mindmap mode ([type:"mindmap"](../api/diagram/type_property/)) of DHTMLX Diagram is added
- [New CSS template for DHTMLX Diagram](https://snippet.dhtmlx.com/diagram_template_b)
- The ability [to configure the direction of the child shapes relative to the root shape in the mindmap mode of Diagram](../guides/diagram/configuration/#arranging-shapes-in-the-mindmap-mode-of-diagram) via the [typeConfig](../api/diagram/typeconfig_property/) configuration property of the diagram object
- The ability [to add custom event handlers for custom shapes](../shapes/custom_shape/#event-handlers-for-custom-shapes) via the "eventHandlers" attribute of the [addShape()](../api/diagram/addshape_method/) method
- The ability to customize the personal toolbars for editing items in the [grid area](../guides/diagram_editor/grid_area/) via the [shapeToolbar](../api/editor/shapetoolbar_property/) property of the Editor object
- New events of the Editor object: [BeforeShapeIconClick](../api/editor/beforeshapeiconclick_event/) and [AfterShapeIconClick](../api/editor/aftershapeiconclick_event/), [BeforeShapeMove](../api/editor/beforeshapemove_event/) and [AfterShapeMove](../api/editor/aftershapeiconclick_event/)
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

Version 3.0.4
------------------

Released on January 27, 2021


### Fixes

- Fix the incorrect behavior of the shape selected in the Editor, which is initialized in the default mode, when working with the input field on the page
- Fix the issue that caused a collapsed/expanded item not to work with its parent 
- Fix the incorrect work of the [showItem()](../api/diagram/showitem_method/) method when the child item is hidden

Version 3.0.3
------------------

Released on December 23, 2020


### Fixes

- Fix issue with the Diagram export service

Version 3.0.2
------------------

Released on July 14, 2020

### Fixes

- Fix issue with importing data from JSON to the Editor which is initialized in the org chart mode
- Fix the incorrect work of the [addShape()](../api/diagram/addshape_method/) method while configuring the right panel of the editor
- Improved behavior of the historyManager control of the toolbar in the Editor

Version 3.0.1
------------------

Released on May 29, 2020

### Fixes

- Fix issue with the [autoPlace()](../api/diagram/autoplace_method/) method
- Fix issue with PNG/PDF export modules

Version 3.0
--------------------

Released on May 12, 2020

### Breaking changes

The new update introduces some changes and improvements. Check the [Migration](../migration/#22---30) article to keep in step with the latest version.

### New functionality

- New [autoPlace()](../api/diagram/autoplace_method/) method and [autoplacement](../api/diagram/autoplacement_property/) property are added for [auto-arranging connected shapes](../guides/manipulating_items/#arranging-shapes-automatically) in the hierarchical structure
- [Ability to set the default configuration of a shape](../guides/diagram/configuration/#setting-the-default-configuration-of-a-shape) via the `defaults` property when initializing [Diagram](../api/diagram/defaults_property/) or [Diagram Editor](../api/editor/defaults_property/)
- The [addShape()](../api/diagram/addshape_method/) method for [creating custom shapes](../shapes/custom_shape/) in Diagram and Diagram Editor is added
- New properties of the Editor object: [controls](../api/editor/controls_property/), [defaults](../api/editor/defaults_property/), [shapeSections](../api/editor/shapesections_property/), [shapeBarWidth](../api/editor/shapebarwidth_property/), [scalePreview](../api/editor/scalepreview_property/), [scale](../api/editor/scale_property/), [gapPreview](../api/editor/gappreview_property/) 
- The *Grid Step* sidebar option is added to the [right panel of the Editor](../guides/diagram_editor/right_panel/)
- Ability to hide/show any toolbar buttons of the Editor as well as the *Grid Step* sidebar option via the [controls](../api/editor/controls_property/) property of the Editor object
- Ability [to configure sidebar options for editing attributes of the custom shapes in the right panel of the editor](../guides/diagram_editor/right_panel/#configuring-options-for-editing-custom-shapes) via the `properties` attribute of the [addShape()](../api/diagram/addshape_method/) method
- [Ability to customize sections in the left panel of the Editor](../guides/diagram_editor/left_panel/#custom-sections)
- [Possibility to customize the appearance of shapes rendered in the left panel of the Editor](../guides/diagram_editor/left_panel/#setting-shape-preview) via the [preview](../shapes/configuration_properties/#properties-specific-for-the-default-mode) property of the shape object
- Ability [to select, copy, paste, delete, move several shapes in the Editor]((../guides/diagram_editor/grid_area/#manipulating-multiple-items))
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



Version 2.2.1
------------------

Released on December 30, 2019

### Fixes

- Issue with IE support for the image loader in Diagram editor

Version 2.2
------------------
Released on November 27, 2019

### New functionality

- Ability to create custom shapes via using SVG and HTML templates
- Ability to build diagrams with different types of shapes
- The ability to export data from the Diagram Editor to the JSON format via the Export data button of the [toolbar](../guides/diagram_editor/toolbar/)
- The [showExport](../migration/#toolbar-buttons-in-editors) option and [exportData](../api/editor/exportdata_event/) event are added into Diagram Editor

### Fixes

- Fix the issue with exporting a diagram into the PDF and PNG formats
- Fix incorrect work of the mouse events
- Fix the issue with deleting child shapes from the diagram which is initialized in the org chart mode
- Fix incorrect work of the right and left panels in Diagram Editor
- Fix the issue with auto-generating of the unique id's of shapes and connectors


Version 2.1.1
------------------
Released on October 11, 2019

### Fixes
- Issues with an img-card in IE

Version 2.1
------------------
Released on May 22, 2017

### New functionality

- Handy [Diagram editor](../guides/diagram_editor/initialization/) for building clear-cut diagrams
- Enriched set of configuration options for [shapes](../shapes/configuration_properties/) and [lines](../lines/configuration_properties/)
- Greater possibilities for customizing [Diagrams](../guides/customization/)

### Updates

- [Hotkeys](../guides/diagram_editor/grid_area/#using-hotkeys) are added for editing Diagram in the editor
- New event [emptyAreaClick](../api/diagram/emptyareaclick_event/) is added
- The [lineGap](../api/diagram/linegap_property/) configuration option is added

Version 2.0
-------------
Released on February 15, 2017

### Breaking Change

The API structure was totally reorganized and improved to simplify work with it. Follow the [Migration](../migration/#11---20) article to learn all the changes.


### New functionality

- Ability to create different diagrams and stylize them
- Variety of [shapes](../shapes/default_shapes/) and [lines](../lines/index/)
- [Export to PDF format](../guides/data_export/)
- [Export to PNG format](../guides/data_export/)

### Updates

- Ability to [find necessary shapes](../guides/manipulating_items/#finding-the-necessary-item)
- Ability to [filter shapes by specified criteria](../guides/manipulating_items/#filtering-items)
- Ability to [add a toolbar with icons for shapes](../guides/diagram/configuration/#setting-toolbar-for-items) to simplify interaction with them
- Enhanced performance 
- Ability to adjust to any HTML container and built-in auto-sizing


Version 1.1 
-------------------
Released on December 5, 2017

### New functionality

- [Using Editor in the org chart mode](../api/editor/type_property/)
- Ability to [save and restore the state](../guides/loading_data/#saving-and-restoring-state)
- Extended [customization possibilities](../guides/customization/)

### Updates

- [Extended API](../api/diagram/api_overview/): new methods, properties and events

Version 1.0 
-------------------------

Released on September 29, 2017

### Initial functionality

- Organogram mode
- Vertical and horizontal autoplacement strategies
- Loading data from JSON
- API to manage data and branch state








