API 
=============

<div class='h2' id="methods">Methods</div>

{{api
- api/diagram_addshape.md - creates a custom shape; sets options for its editing in the right panel of the editor
- api/diagram_autoplace.md - automatically arranges connected diagram shapes
- api/diagram_collapseitem.md - hides all children of the target shape or collapses the group/swimlane
- api/diagram_destructor.md - removes a diagram instance and releases occupied resources
- api/diagram_expanditem.md - shows all children of the target shape or expands the group/swimlane
- api/diagram_getscrollstate.md - returns the position of the diagram inner scroll
- api/diagram_locate.md - gets the id of an item from the specified HTML event or tag
- api/diagram_paint.md - repaints the diagram
- api/diagram_scrollto.md - sets the inner scroll of the diagram to the specified position
- api/diagram_showitem.md - adjusts scroll to make the target item visible
}}

<div class='h2' id="events">Events</div>

{{api
- api/diagram_onaftercollapse_event.md - fires after an item has been collapsed
- api/diagram_aftereditorclose_event.md - fires after the inline editor of an item is closed
- api/diagram_aftereditorediting_event.md - fires after the text value of an item is edited via the inline editor
- api/diagram_aftereditoropen_event.md - fires after the inline editor of an item is opened
- api/diagram_onafterexpand_event.md - fires after an item has been expanded
- api/diagram_aftersubmenuopen_event.md - fires after the menu of the subheader is opened
- api/diagram_onbeforecollapse_event.md - fires before collapsing an item
- api/diagram_beforeeditorclose_event.md - fires before the inline editor of an item is closed
- api/diagram_beforeeditorediting_event.md - fires before the text value of an item is edited via the inline editor
- api/diagram_beforeeditoropen_event.md - fires before the inline editor of an item is opened
- api/diagram_onbeforeexpand_event.md - fires before expanding an item
- api/diagram_beforesubmenuopen_event.md - fires before the menu of the subheader is opened
- api/diagram_emptyareaclick_event.md - fires on clicking an empty space in the editor
- api/diagram_groupclick_event.md - fires on clicking a group
- api/diagram_groupdblclick_event.md - fires on double-clicking a group
- api/diagram_groupheaderclick_event.md - fires on clicking a header of a group
- api/diagram_groupheaderdblclick_event.md - fires on double-clicking a header of a group
- api/diagram_groupmousedown_event.md - fires when a pointing device button is pressed while the pointer is over a group
- api/diagram_itemclick_event.md - fires on clicking an item
- api/diagram_itemdblclick_event.md - fires on double-clicking an item
- api/diagram_itemmousedown_event.md - fires when a pointing device button is pressed while the pointer is over an item
- api/diagram_itemmouseout_event.md - fires when a pointing device is out of an item
- api/diagram_itemmouseover_event.md - fires when a pointing device is onto an item
- api/diagram_lineclick_event.md - fires on clicking a connector line
- api/diagram_linedblclick_event.md - fires on double-clicking a connector line
- api/diagram_linemousedown_event.md - fires when a pointing device button is pressed while the pointer is over a connector line
- api/diagram_onscroll_event.md - fires when a diagram is being scrolled
- api/diagram_onshapeclick_event.md - fires on clicking a shape
- api/diagram_onshapedblclick_event.md - fires on double-clicking a shape
- api/diagram_shapehover_event.md - fires on hovering over a shape in the editor
- api/diagram_shapeiconclick_event.md - fires on clicking a toolbar icon 
- api/diagram_shapemousedown_event.md - fires when the left mouse button is pressed while the pointer is over a shape 
}}

<div class='h2' id="config">Properties</div>

{{api
- api/diagram_autoplacement_config.md - sets configuration for autoplacement
- api/diagram_defaultlinktype_config.md - the default type of a connector
- api/diagram_defaults_config.md - the default configuration of a shape
- api/diagram_defaultshapetype_config.md - the default type of a shape
- api/diagram_exportstyles_config.md - defines the styles that will be sent to the export service when exporting the diagram
- api/diagram_gridstep_config.md - defines the size of a grid step that defines the step of moving a shape/group/swimlane
- api/diagram_linegap_config.md - adds an offset for two connected shapes, and fills the gap with an additional line
- api/diagram_margin_config.md - margins for autoplacement in the diagram
- api/diagram_scale_config.md - defines the diagram scale
- api/diagram_select_config.md - enables selection in the diagram
- api/diagram_toolbar_config.md - sets a toolbar with buttons for shapes
- api/diagram_type_config.md - defines the type of a diagram
- api/diagram_typeconfig_config.md - optional, defines the direction of the shapes in the mind map
}}

<div class='h2' id="datacollection">DataCollection</div>

{{block Methods }}
{{api
	- api/data/methods/add.md - adds a new shape/connector line to the diagram
    - api/data/methods/copy.md - creates a copy of a shape at the defined position
	- api/data/methods/eachchild.md - iterates through the children of the specified item
	- api/data/methods/eachparent.md - iterates through all parents of the specified item
	- api/data/methods/exists.md - checks whether the specified item exists in the diagram
	- api/data/methods/filter.md - filters the items in the diagram by the specified key
	- api/data/methods/find.md - finds the item that corresponds to the specified parameters
	- api/data/methods/findall.md - finds all the items that correspond to the specified parameters
	- api/data/methods/getid.md - returns the id of the item by its index
	- api/data/methods/getindex.md - returns the index of the item by its id
	- api/data/methods/getitem.md - returns the object of an item by its id
    - api/data/methods/getnearid.md - returns the id of an item which is nearest to the specified one
	- api/data/methods/getroot.md - returns the id of the root item by the id of its child
	- api/data/methods/getroots.md - returns an array with ids of all root items of the diagram
	- api/data/methods/load.md - loads data from an external file
	- api/data/methods/map.md - iterates through all items of the diagram
    - api/data/methods/move.md - moves an item to the defined position
	- api/data/methods/parse.md - loads data from a local data source
	- api/data/methods/remove.md - deletes the specified item from the diagram
	- api/data/methods/removeall.md - deletes all items from the diagram
	- api/data/methods/serialize.md - serializes the diagram data into an array of JSON objects
	- api/data/methods/update.md - updates properties of the item
}}
{{end}}

{{block Events }}
{{api
	- api/data/events/diagram_onafteradd_event.md - fires after adding a shape
    - api/data/events/diagram_onbeforeadd_event.md - fires before adding a shape
    - api/data/events/diagram_change_event.md - fires on changes in the diagram 
	- api/data/events/diagram_load_event.md - fires on loading data into the diagram  
}}
{{end}}

<div class='h2' id="selection">Selection</div>

{{block Methods }}
{{api
- api/selection/methods/add.md - selects the specified item
- api/selection/methods/getid.md -  returns the id of a selected item
- api/selection/methods/getitem.md -  returns the object of a selected item
- api/selection/methods/remove.md - unselects a previously selected item
}}
{{end}}

{{block Events }}
{{api
- api/selection/events/diagram_onafterselect_event.md - fires after selecting an item
- api/selection/events/diagram_onafterunselect_event.md - fires after unselecting an item
- api/selection/events/diagram_onbeforeselect_event.md - fires on selecting an item, but before the item is really selected
- api/selection/events/diagram_onbeforeunselect_event.md - fires on unselecting an item, but before the item is really unselected
}}
{{end}}

<div class='h2' id="cellmanager">CellManager</div>

{{block Methods }}
{{api
- api/cellmanager/cellmanager_add_method.md - adds cells as rows or columns to a swimlane
- api/cellmanager/cellmanager_getcellid_method.md - returns the id of the cell of the swimlane by the index
- api/cellmanager/cellmanager_getcellindex_method.md - returns the index of the cell of the swimlane by the id
- api/cellmanager/cellmanager_getsubheadercellid_method.md - returns the id of the cell of the swimlane by the subheader id
- api/cellmanager/cellmanager_getsubheadercellindex_method.md - returns the index of the cell of the swimlane by the subheader id
- api/cellmanager/cellmanager_getsubheadertype_method.md - returns the type of direction to count the index by the subheader id
- api/cellmanager/cellmanager_move_method.md - moves cells of the swimlane as rows or columns
- api/cellmanager/cellmanager_remove_method.md  - removes cells of the swimlane as rows or columns
- api/cellmanager/cellmanager_resetswimlane_method.md - resets active swimlane
- api/cellmanager/cellmanager_setswimlane_method.md - sets active swimlane for further actions with it
- api/cellmanager/cellmanager_validation_method.md - validates cells of the swimlane by the direction and action type
}}
{{end}}

{{block Events }}
{{api
- api/cellmanager/cellmanager_aftercellsadd_event.md - fires after new cells are added to a swimlane
- api/cellmanager/cellmanager_aftercellsmove_event.md - fires after cells of the swimlane are moved
- api/cellmanager/cellmanager_aftercellsremove_event.md - fires after cells of the swimlane are removed
- api/cellmanager/cellmanager_aftercellsvalidation_event.md - fires after cells of the swimlane are validated
- api/cellmanager/cellmanager_beforecellsadd_event.md - fires before new cells are added to a swimlane
- api/cellmanager/cellmanager_beforecellsmove_event.md - fires before cells of the swimlane are moved
- api/cellmanager/cellmanager_beforecellsremove_event.md - fires before cells of the swimlane are removed
- api/cellmanager/cellmanager_beforecellsvalidation_event.md - fires before cells of the swimlane are validated
}}
{{end}}

<div class='h2' id="export">Export Methods</div>

{{api
- api/export/pdf.md - exports a diagram to a PDF file
- api/export/png.md - exports a diagram to a PNG file
}}

<div class='h2' id="events_bus">Events Bus Methods</div>

{{api
- api/events/detach.md - detaches a handler from an event (which was attached before by the on() method)
- api/events/fire.md - triggers an inner event
- api/events/on.md - attaches a handler to an inner event of Diagram
}}


@index:
- api/refs/diagram_methods.md
- api/refs/diagram_events.md
- api/refs/diagram_props.md

- api/data/datacollection.md
- api/selection/selection.md
- api/cellmanager/cellmanager.md

- api/refs/export_methods.md
- api/refs/events_methods.md
