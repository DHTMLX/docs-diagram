---
sidebar_label: add()
title: add
description: text
---

# add()


@short: adds a new shape to the diagram

@params:
- new_item		object		the object of a new item 

@example:
diagram.data.add({ id: "3.2", text: "New Item", parent: "3" });


@template:	api_method
@descr:
There are two ways to link shapes, you can add a shape with a parent ID defined:

~~~js
diagram.data.add({ id: "3.2", text: "New Item", type: "card", parent: "3" });
~~~

or you can add a shape and a connector:

~~~js
diagram.data.add({ type: "card", id: "3.2", text: "New Item" });
diagram.data.add({ type: "line",  from: "3", to: "3.2" });
~~~


####Data properties

- **id** - optional, the id of a shape, auto-generated by default
- **type** - optional, the type of a shape, "card" by default

The data object can contain any other custom properties. Such custom properties can be retrieved through API or used inside of templates.


#### Type

The "type" in the above code is the type of a shape or a connector, it can have one of the predefined values:


###Shape types for diagram

- *circle*
- *document*
- *offline*
- etc.

[See the full list of types for diagram shapes](diagram_guides/shapes_arrows_list.md#shapestypes).

###Shape types for Org Chart

- *card*
- *img-card*

###Connector types

- *line*
- *dash*

[Read about connectors configuration options](diagram_guides/shapes_arrows_list.md#connectorstypes).

@relatedsample:	https://snippet.dhtmlx.com/8wi20uop	Diagram. Org chart add/delete item

@related:
	common_guides/manipulating_shapes.md#addingshape
	
@relatedapi:
	api/data/methods/getitem.md
	api/data/methods/parse.md
	api/data/methods/removeall.md
	api/data/methods/remove.md