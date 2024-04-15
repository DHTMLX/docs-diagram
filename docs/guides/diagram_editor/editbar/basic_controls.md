---
sidebar_label: Basic controls!!
title: Editbar Guides - Basic controls
description: You can learn about the Basic controls of Editbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Basic controls

You can use basic controls of Editbar standalone or create complex controls on their base. Below you'll find the list of basic controls. Check the corresponding section to view the detailed description of configuration properties for each control. 

:::info
Refer to the [Editbar configuration](guides/diagram_editor/editbar/configuration.md) guide for more information about configuring!
:::

## Overview of Editbar basic controls

| Name                                 							  | Description                                 					  |
| :-------------------------------------------------------------- | :---------------------------------------------------------------- |
| [](guides/diagram_editor/editbar/basic_controls/avatar.md)      | @getshort(guides/diagram_editor/editbar/basic_controls/avatar.md) |
| [](guides/diagram_editor/editbar/basic_controls/button.md)      | @getshort(guides/diagram_editor/editbar/basic_controls/button.md) |
| [](guides/diagram_editor/editbar/basic_controls/checkbox.md)     | @getshort(guides/diagram_editor/editbar/basic_controls/checkbox.md) |
| [](guides/diagram_editor/editbar/basic_controls/checkboxgroup.md)| @getshort(guides/diagram_editor/editbar/basic_controls/checkboxgroup.md)|
| [](guides/diagram_editor/editbar/basic_controls/colorpicker.md)| @getshort(guides/diagram_editor/editbar/basic_controls/colorpicker.md)|
| [](guides/diagram_editor/editbar/basic_controls/combo.md)| @getshort(guides/diagram_editor/editbar/basic_controls/combo.md)|
| [](guides/diagram_editor/editbar/basic_controls/container.md)| @getshort(guides/diagram_editor/editbar/basic_controls/container.md)|
| [](guides/diagram_editor/editbar/basic_controls/datepicker.md)| @getshort(guides/diagram_editor/editbar/basic_controls/datepicker.md)|
| [](guides/diagram_editor/editbar/basic_controls/fieldset.md)| @getshort(guides/diagram_editor/editbar/basic_controls/fieldset.md)|
| [](guides/diagram_editor/editbar/basic_controls/input.md)| @getshort(guides/diagram_editor/editbar/basic_controls/input.md)|
| [](guides/diagram_editor/editbar/basic_controls/radiogroup.md)| @getshort(guides/diagram_editor/editbar/basic_controls/radiogroup.md)|
| [](guides/diagram_editor/editbar/basic_controls/select.md)| @getshort(guides/diagram_editor/editbar/basic_controls/select.md)|
| [](guides/diagram_editor/editbar/basic_controls/slider.md)| @getshort(guides/diagram_editor/editbar/basic_controls/slider.md)|
| [](guides/diagram_editor/editbar/basic_controls/spacer.md)| @getshort(guides/diagram_editor/editbar/basic_controls/spacer.md)|
| [](guides/diagram_editor/editbar/basic_controls/textarea.md)| @getshort(guides/diagram_editor/editbar/basic_controls/textarea.md)|

## Common properties

- `type` - (required) the type of a control
- `key` - (optional) the name of the specified/modified property or the path to it in the object of a Diagram item (shape, line, group, swimlane)
- `wrap` - (optional) allows displaying the external wrapping (used for all controls, except for the fieldset), *false* by default

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in the code. If you need to modify the default controls, you should [create a new control type]. **TODO - add link**
:::

- `$on` - (optional) - allows setting an event listener. The object has the following properties:
	- `eventName`  - the event listener function which takes the following parameter:
		- `object` - (required) an object with the following properties:
			- `control` - (required) the form control
			- `editor` - (required) the object of the Diagram Editor
			- `id` - (required) - the id of a Diagram item (shape, line, group, swimlane)
		- `arguments` - (optional) - the original event arguments
- `$handler` - (optional) - a function that allows handling actions on firing the `change` and `input` events of a form control and the `change` event of DataCollection. Takes the following parameter:
	- `object` - (required) an object with the following properties:
		- `id` - (required) - the id of a Diagram item (shape, line, group, swimlane)
		- `key` - (required) the name of the specified/modified property or the path to it in the object of a Diagram item (shape, line, group, swimlane)
		- `editor` - (required) the object of the Diagram Editor
		- `control` - (required) the object of a Form control the component is built on
		- `value` - (required) the new value of a Form control
- `$setValue` - (optional) - a function that allows setting the value of a Form control on initialization of a control and on changing the value in DataCollection. Takes the following parameter:
	- `object` - (required) an object with the following properties:
		- `editor` - (required) the object of the Diagram Editor
		- `control` - (required) the object of a Form control the component is built on
		- `value` - (required) - the value of a Diagram item (shape, line, group, swimlane)
- `$layout` - (optional) - a function that allows setting the structure of a control. Returns the configuration of a Form control as an object:
	- `object` - the configuration a control without service properties


