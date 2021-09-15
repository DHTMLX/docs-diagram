Toolbar
===========

Default
-------------

- the **_toolbar with buttons_** for controlling the editing process<br><br>
<img src="toolbar_diagrameditor.png"><br><br>
The toolbar can contain the following buttons:
	- the **Reset Changes** button. This button is shown by default and can be hidden via the *reset* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ResetButton](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to reset all the applied changes to the previous state.
	- the **Apply All** button. This button is shown by default and can be hidden via the *apply* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.
The button works in tandem with the [ApplyButton](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to apply changes made in the editor to the diagram;
	- the **Import Data** button. This button is shown by default and can be hidden via the *import* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ImportData](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to import the data from a JSON file to the diagram.
	- the **Export Data** button. This button is shown by default and can be hidden via the *export* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ExportData](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to export the data of the diagram to the JSON format.
	- the **Auto Layout** button. This button is shown by default and can be hidden via the *autoLayout* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property. This button works in tandem with the [AutoLayout](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to arrange diagram shapes and connectors in the hierarchical structure automatically. It does not work if you use groups or swimlanes.
	- the **Undo** and **Redo** buttons for undoing and redoing changes. They can be hidden via the *historyManager* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.
    - the **Edit Mode** button to hide and show the editor mode. The button can be hidden via the *editManager* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.
    - the **Zoom** group of buttons to zoom a diagram in the editor in and out; can be hidden via the *scale* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.


Org chart
----------

    - the **_toolbar with buttons_** for controlling the editing process<br><br>
<img src="toolbar_diagram_editor.png"><br><br>
The toolbar can contain the following buttons:

	- the **Reset Changes** button. This button is shown by default and can be hidden via the *reset* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ResetButton](orgchart_guides/editor_mode.md#editorapi) event and is useful if you want to reset all the applied changes to the previous state. 
	- the **Apply All** button. This button is shown by default and can be hidden via the *apply* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.
The button works in tandem with the [ApplyButton](orgchart_guides/editor_mode.md#editorapi) event and is useful if you
want to apply changes made in the editor to the diagram. 
	- the **Export Data** button. This button is shown by default and can be hidden via the *export* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ExportData](orgchart_guides/editor_mode.md#editorapi) event and is useful if you want to export the data of the org chart to the JSON format. 
	- the **Import Data** button. This button is shown by default and can be hidden via the *import* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ImportData](orgchart_guides/editor_mode.md#editorapi) event and is useful if you want to import the data from a JSON file to the org chart. 
	- the **Undo** and **Redo** buttons for undoing and redoing changes. They can be hidden via the *historyManager* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.
    - the **Edit Mode** button to hide and show the editor mode; can be hidden via the *editManager* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.
    - the **Zoom** group of buttons to zoom a diagram in the editor in and out; can be hidden via the *scale* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.


Mind map mode
------------------

    - the **_toolbar with buttons_** for controlling the editing process<br><br>
<img src="toolbar_diagram_editor.png"><br><br>
The toolbar can contain the following buttons:

	- the **Reset Changes** button. This button is shown by default and can be hidden via the *reset* option of the [controls](mindmap_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ResetButton](mindmap_guides/editor_mode.md#editorapi) event and is useful if you want to reset all the applied changes to the previous state. 
	- the **Apply All** button. This button is shown by default and can be hidden via the *apply* option of the [controls](mindmap_guides/editor_mode.md#configurationproperties) config property.
The button works in tandem with the [ApplyButton](mindmap_guides/editor_mode.md#editorapi) event and is useful if you
want to apply changes made in the editor to the diagram. 
	- the **Export Data** button. This button is shown by default and can be hidden via the *export* option of the [controls](mindmap_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ExportData](mindmap_guides/editor_mode.md#editorapi) event and is useful if you want to export the data of the org chart to the JSON format. 
	- the **Import Data** button. This button is shown by default and can be hidden via the *import* option of the [controls](mindmap_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ImportData](mindmap_guides/editor_mode.md#editorapi) event and is useful if you want to import the data from a JSON file to the org chart. 
	- the **Undo** and **Redo** buttons for undoing and redoing changes. They can be hidden via the *historyManager* option of the [controls](mindmap_guides/editor_mode.md#configurationproperties) config property.
    - the **Edit Mode** button to hide and show the editor mode; can be hidden via the *editManager* option of the [controls](mindmap_guides/editor_mode.md#configurationproperties) config property.
    - the **Zoom** group of buttons to zoom a diagram in the editor in and out; can be hidden via the *scale* option of the [controls](mindmap_guides/editor_mode.md#configurationproperties) config property.


    добавить ссылку на editor/controls_property.md 