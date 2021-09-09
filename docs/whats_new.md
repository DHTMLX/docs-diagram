What's New
=============
```todo
<style>
.rel_date_pivot{
	color: #a0a0a0;
    font-size: 13px;
    margin-left: 20px;
}
</style>
```todo
If you are updating Diagram from an older version, check [Migration to Newer Version](migration.md) for details.

Version 4.0
------------------
Released on September 7, 2021

### New functionality


- New diagram items are added: [Groups](diagram_guides/shapes_arrows_list.md#groupsconfiguration), [Swimlanes](diagram_guides/shapes_arrows_list.md#swimlaneconfiguration)
- New sections in the left panel of the Diagram Editor are added: Groups, Swimlanes
- New sidebar options are added in the right panel of the editor for Groups, Swimlanes
- The ability to edit [Groups](diagram_guides/editor_mode.md#editinggroups) and [Swimlanes](diagram_guides/editor_mode.md#editingswimlanes) via UI
- Extended list of [locale options](diagram_guides/editor_mode.md#localization)
- The ability to operate the cells of a swimlane via [CellManager API](api/cellmanager/cellmanager.md)
- The ability to edit the text of an item by double-clicking on it
- [DHTMLX Diagram with Angular](common_guides/angular_integration.md) demo is added
- [DHTMLX Diagram with React](common_guides/react_integration.md) demo is added
- [DHTMLX Diagram with Vue.js](common_guides/vue_integration.md) demo is added
- The ability [to add identical items with different styles and settings to the left panel of the editor](diagram_guides/editor_mode.md#multiple_customized_items)

### API

- New [CellManager API](api/cellmanager/cellmanager.md) methods: [add()](api/cellmanager/cellmanager_add_method.md), [getCellId()](api/cellmanager/cellmanager_getcellid_method.md), [getCellIndex()](api/cellmanager/cellmanager_getcellindex_method.md), [getSubHeaderCellId()](api/cellmanager/cellmanager_getsubheadercellid_method.md), [getSubHeaderCellIndex()](api/cellmanager/cellmanager_getsubheadercellindex_method.md), [getSubHeaderType()](api/cellmanager/cellmanager_getsubheadertype_method.md), [move()](api/cellmanager/cellmanager_move_method.md), [remove()](api/cellmanager/cellmanager_remove_method.md), [resetSwimlane()](api/cellmanager/cellmanager_resetswimlane_method.md), [setSwimlane()](api/cellmanager/cellmanager_setswimlane_method.md), [validation()](api/cellmanager/cellmanager_validation_method.md)
- New [CellManager API](api/cellmanager/cellmanager.md) events: [afterCellsAdd](api/cellmanager/cellmanager_aftercellsadd_event.md), [afterCellsMove](api/cellmanager/cellmanager_aftercellsmove_event.md), [afterCellsRemove](api/cellmanager/cellmanager_aftercellsremove_event.md), [afterCellsValidation](api/cellmanager/cellmanager_aftercellsvalidation_event.md), [beforeCellsAdd](api/cellmanager/cellmanager_beforecellsadd_event.md), [beforeCellsMove](api/cellmanager/cellmanager_beforecellsmove_event.md), [beforeCellsRemove](api/cellmanager/cellmanager_beforecellsremove_event.md), [beforeCellsValidation](api/cellmanager/cellmanager_beforecellsvalidation_event.md)
- New events of the diagram object: [afterSubmenuOpen](api/diagram_aftersubmenuopen_event.md), [beforeSubmenuOpen](api/diagram_beforesubmenuopen_event.md), [groupClick](api/diagram_groupclick_event.md), [groupDblClick](api/diagram_groupdblclick_event.md), [groupHeaderClick](api/diagram_groupheaderclick_event.md), [groupHeaderDblClick](api/diagram_groupheaderdblclick_event.md), [groupMouseDown](api/diagram_groupmousedown_event.md), [itemClick](api/diagram_itemclick_event.md), [itemDblClick](api/diagram_itemdblclick_event.md), [itemMouseDown](api/diagram_itemmousedown_event.md), [itemMouseOut](api/diagram_itemmouseout_event.md), [itemMouseOver](api/diagram_itemmouseover_event.md), [lineDblClick](api/diagram_linedblclick_event.md), [lineMouseDown](api/diagram_linemousedown_event.md)
- New events of the editor object:  [shapeMoveEnd](diagram_guides/editor_mode.md#shapemoveend), [beforeItemMove](diagram_guides/editor_mode.md#beforeitemmove), [afterItemMove](diagram_guides/editor_mode.md#afteritemmove), [itemMoveEnd](diagram_guides/editor_mode.md#itemmoveend), [beforeGroupMove](diagram_guides/editor_mode.md#beforegroupmove), [afterGroupMove](diagram_guides/editor_mode.md#aftergroupmove), [groupMoveEnd](diagram_guides/editor_mode.md#groupmoveend)
- New methods of the shape collection: [eachChild()](api/data/methods/eachchild.md), [eachParent()](api/data/methods/eachparent.md), [getRoot()](api/data/methods/getroot.md), [getRoots()](api/data/methods/getroots.md)
- New inline editing events: [afterEditorClose](api/diagram_aftereditorclose_event.md), [afterEditorEditing](api/diagram_aftereditorediting_event.md), [afterEditorOpen](api/diagram_aftereditoropen_event.md), [beforeEditorClose](api/diagram_beforeeditorclose_event.md), [beforeEditorEditing](api/diagram_beforeeditorediting_event.md), [beforeEditorOpen](api/diagram_beforeeditoropen_event.md)
- New "editable" and "fixed" configuration attributes of the shape object

### Updates

- Improved keyboard navigation
- Redesigned shapes
- Updated events of the editor object: [beforeShapeMove](diagram_guides/editor_mode.md#beforeshapemove) and [afterShapeMove](diagram_guides/editor_mode.md#aftershapemove)
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

- [TypeScript Support](common_guides/using_typescript.md)
- New type of dhtmlxDiagram is added: [Mind Map](mindmap_guides.md)
- [New CSS template for DHTMLX Diagram](https://snippet.dhtmlx.com/diagram_template_b)
- The ability [to configure the direction of the child shapes relative to the root shape in Mind Map](mindmap_guides/mindmap_shapes_connectors.md#arrangementofshapes) via the [typeConfig](api/diagram_typeconfig_config.md) configuration property of the diagram object
- The ability [to add custom event handlers for custom shapes](common_guides/configuration.md#addingeventhandlersforthecustomshape) via the "eventHandlers" attribute of the [addShape()](api/diagram_addshape.md) method
- The ability to customize the toolbar for editing shapes in [Diagram](diagram_guides/editor_mode.md#configuringtoolbarforshapes), [Org Chart](orgchart_guides/editor_mode.md#configuringtoolbarforshapes), and [Mind Map](mindmap_guides/editor_mode.md#configuringtoolbarforshapes) Editors 
- New events for all Editor objects: [BeforeShapeIconClick](diagram_guides/editor_mode.md#beforeshapeiconclick) and [AfterShapeIconClick](diagram_guides/editor_mode.md#aftershapeiconclick), [BeforeShapeMove](diagram_guides/editor_mode.md#beforeshapemove) and [AfterShapeMove](diagram_guides/editor_mode.md#aftershapemove)
- The ability to cancel sending CSS styles to the export service via the [exportStyles](api/diagram_exportstyles_config.md) configuration option of the diagram object
  
### Updates

- The [type](api/diagram_type_config.md) configuration property of the diagram object is updated: new "default" and "mindmap" values are added
- The [collapseItem](api/diagram_collapseitem.md) and [expandItem](api/diagram_expanditem.md) methods are updated: the second "dir" parameter is added
- The [BeforeCollapse](api/diagram_onbeforecollapse_event.md), [AfterCollapse](api/diagram_onaftercollapse_event.md), [BeforeExpand](api/diagram_onbeforeexpand_event.md) and [AfterExpand](api/diagram_onafterexpand_event.md) events are updated: the second "dir" parameter is added

### Fixes

- Fix the issue with the selection module for all types of dhtmlxDiagram
- Fix the issue with the scroll of the diagram when applying the "showItem()" method to the scaled diagram
- Fix the incorrect work of DOM Parser with HTML templates
- Fix the issue that caused the root shape to be collapsed after collapsing any child shape
- Fix the issue with formatting of the shape text
- Fix the issue that appeared after adding long text into the textarea field of the right panel of the editor
- Fix the issue with adding of special chars to the text of custom shapes
- Fix the issue with warnings shown in the console for custom shapes
- Fix the script error thrown after deleting the root shape in the editor
- Fix the issue with the error shown in the console after applying the "Auto Layout" button in Diagram Editor when the editor is not configured
- Fix the issue that caused the type of the shape outline not to be applied after its changing in Diagram Editor
- Fix the issue with tracking of the shape parameters in the right panel of Diagram Editor
- Fix the issue with removing focus from the shape in Diagram Editor
- Fix the issue with setting connectors between the shapes in the necessary order in Diagram Editor
- Fix the incorrect work of the "Ctrl+A" combination in Org Chart Editor
- Fix the issue that caused the shapes to be pasted without connectors when the connected shapes are copied
- Now there is no the ability to remove the root shape from Org Chart Editor using keyboard navigation

Version 3.0.4
------------------

Released on January 27, 2021


### Fixes

- Fix the incorrect behavior of the shape selected in Diagram Editor when working with the input field on the page
- Fix the issue that caused a collapsed/expanded item not to work with its parent 
- Fix the incorrect work of the [showItem()](api/diagram_showitem.md) method when the child item is hidden

Version 3.0.3
------------------

Released on December 23, 2020


### Fixes

- Fix issue with the Diagram export service

Version 3.0.2
------------------

Released on July 14, 2020

### Fixes

- Fix issue with import data from JSON to Org Chart Editor
- Fix the incorrect work of the addShape() method while configuring Right Panel
- Improved behavior of historyManager in Editors (Undo/Redo buttons)

Version 3.0.1
------------------

Released on May 29, 2020

### Fixes

- Fix issue with the [autoPlace()](api/diagram_autoplace.md) method
- Fix issue with PNG/PDF export modules

Version 3.0
--------------------

Released on May 12, 2020

### Breaking changes

The new update introduces some changes and improvements. Check the [Migration](migration.md) article to keep in step with the latest version.

###New functionality

- New api/diagram_autoplace.md method and api/diagram_autoplacement_config.md property are added for [auto-arranging connected diagram shapes](common_guides/manipulating_shapes.md#arrangingshapesautomatically) in the hierarchical structure
- [Ability to set the default configuration of a shape](common_guides/configuration.md#settingthedefaultconfigurationofashape)
- The [addShape](api/diagram_addshape.md) method for [creating custom shapes](common_guides/configuration.md#creatingcustomshapes) in Diagram and Org Chart is added
- Ability to create custom shapes in [Diagram Editor](diagram_guides/editor_mode.md#rightpanelcustomization) and [Org Chart Editor](orgchart_guides/editor_mode.md#rightpanelcustomization) via the [addShape](api/diagram_addshape.md) method of Diagram
- New configuration properties of [Diagram Editor](diagram_guides/editor_mode.md#configurationproperties): defaults, shapeSections, shapeBarWidth, scalePreview, scale, gapPreview, controls
- New configuration properties of [Org Chart Editor](orgchart_guides/editor_mode.md#configurationproperties): defaults, scale, controls
- The *Grid Step* sidebar option is added to [Diagram](diagram_guides/editor_mode.md) and [Org Chart](orgchart_guides/editor_mode.md) editors
- Ability to hide/show any toolbar button of Editors as well as the *Grid Step* sidebar option via the `controls` configuration property
- Ability to specify sidebar options for editing custom properties in the right panel of [Diagram Editor](diagram_guides/editor_mode.md#rightpanelcustomization) and [Org Chart Editor](orgchart_guides/editor_mode.md#rightpanelcustomization) via the `properties` attribute of the [addShape](api/diagram_addshape.md) method
- [Ability to create sections for structuring shapes in the left panel of the diagram editor](diagram_guides/editor_mode.md#leftpanelcustomization)
- [Possibility to customize the appearance of shapes rendered in the left panel of Diagram Editor](diagram_guides__editor_mode.html#leftpanelcustomization) via the `preview` property of the [defaults](diagram_guides/editor_mode.md#configurationproperties) attribute 
- Ability to select, copy, paste, delete, move several shapes in [Diagram Editor](diagram_guides/editor_mode.md#manipulatingmultipleshapes) and [Org Chart Editor](orgchart_guides/editor_mode.md#manipulatingmultipleshapes)
- Ability to select and delete several connectors in [Diagram Editor](diagram_guides/editor_mode.md#manipulatingmultipleshapes)
- Ability to import data from a JSON file to a [diagram](diagram_guides/editor_mode.md) or [org chart](orgchart_guides/editor_mode.md) editor via the "Import Data" button 
- The api/diagram_destructor.md method is added

###Updates

- Ability to use custom HTML templates in IE
- Diagram and Org Chart Editor UI was updated and improved
- Ability to connect shapes from center to center
- A set of hotkeys for the editor mode is updated
- The ability to set a connector line to the *text* shape of Diagram Editor
- Auto-fit of the content width of the *text* shape is added



Version 2.2.1
------------------

Released on December 30, 2019

###Fixes

- Issue with IE support for the image loader in Diagram editor

Version 2.2
------------------
Released on November 27, 2019

###New functionality

- Ability to create custom types of shapes for [Diagram](diagram_guides/shapes_arrows_list.md#templatesforshapes) and [Org Chart](orgchart_guides/orgchart_shapes_types.md#templatesforshapes) via using SVG and HTML templates
- Ability [to build mixed diagrams](diagram_guides/shapes_arrows_list.md#creatingmixeddiagram) and [org charts](orgchart_guides/orgchart_shapes_types.md#creatingmixedorgchart)
- Ability to export data from the [Diagram Editor](diagram_guides/editor_mode.md#configurationproperties) and [Org Chart Editor](orgchart_guides/editor_mode.md#configurationproperties) to the JSON format
- The showExport option and ExportData event are added in [Diagram Editor](diagram_guides/editor_mode.md) and [Org Chart Editor](orgchart_guides/editor_mode.md)

###Fixes

- Fix the issue with exporting a diagram into the PDF and PNG formats
- Fix incorrect work of the mouse events
- Fix the issue with deleting child shapes in org charts
- Fix incorrect work of the right and left panels in Diagram Editor
- Fix the issue with auto-generating of the unique id's of shapes and connectors


Version 2.1.1
------------------
Released on October 11, 2019

###Fixes
- Issues with an img-card in IE

Version 2.1
------------------
Released on May 22, 2017

###New functionality

- Handy [Diagram editor](diagram_guides/editor_mode.md) for building clear-cut diagrams
- Enriched set of configuration options for shapes and connectors of [Diagram](diagram_guides/shapes_arrows_list.md) and [Org Chart](orgchart_guides/orgchart_shapes_types.md)
- Greater possibilities for customizing [Diagrams](diagram_guides/customization.md) and [Org Charts](orgchart_guides/customization.md)

###Updates

- [Hotkeys](diagram_guides/editor_mode.md#hotkeys) are added for the editor mode
- New events api/diagram_shapehover_event.md and api/diagram_emptyareaclick_event.md are added
- The api/diagram_linegap_config.md config option is added

Version 2.0
-------------
Released on February 15, 2017

###Breaking Change

The API structure was totally reorganized and improved to simplify work with it. Follow the [Migration](migration.md) article to learn all the changes.


###New functionality

- Ability to [create diagrams of any type](overview.md) and stylize them
- [Variety of shapes and connectors](diagram_guides/shapes_arrows_list.md)
- [Export to PDF format](common_guides/data_export.md#exportingdiagramtopdf)
- [Export to PNG format](common_guides/data_export.md#exportingdiagramtopng)

###Updates

- Ability to [find necessary shapes](common_guides/manipulating_shapes.md#findingnecessaryshape)
- Ability to [filter shapes by specified criteria](common_guides/manipulating_shapes.md#filteringshapes)
- Ability to [add a toolbar with icons for shapes](common_guides/configuration.md#settingtoolbarforshapes) to simplify interaction with them
- Enhanced performance 
- Ability to adjust to any HTML container and built-in auto-sizing


Version 1.1 
-------------------
Released on December 5, 2017

###New functionality

- [Using Organization Chart in the editor mode](orgchart_guides/editor_mode.md)
- Ability to [save and restore the state](common_guides/configuration.md#savingandrestoringstate)
- Extended [customization possibilities](diagram_guides/customization.md)

###Updates

- [Extended API](api/refs/diagram.md): new methods, properties and events

Version 1.0 
-------------------------

Released on September 29, 2017

###Initial functionality

- Organogram mode
- Vertical and horizontal autoplacement strategies
- Loading data from JSON
- API to manage data and branch state








