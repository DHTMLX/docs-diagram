---
sidebar_label: Event handling
title: Event Handling
description: text
---

# Event Handling

## Attaching event listeners

You can add any user-defined handler to any of the available events. To do this, use the **diagram.events.on()** method with the following parameters:

- **name** - (*string*) the name of the event
- **handler** - (*function*) the handler function
 
~~~js
diagram.events.on("ShapeClick", function(id) {
    alert("You've just clicked an item with id="+id);
});
~~~

You can attach several handlers to the same event and all of them will be executed. If some of handlers return *false*, the related operations will be blocked. Event handlers are processed in the same order that they are attached.

## Detaching event listeners

To detach events, use **diagram.events.detach()** method:

~~~js
diagram.events.on("ShapeClick", function(id) {
    alert("You've just clicked an item with id=" + id);
});
 
diagram.events.detach("ShapeClick");
~~~

## Calling events

To call events, use the **diagram.events.fire()**.

For a diagram:

~~~js
diagram.events.fire("CustomEvent", args);
// where args is an array of arguments
~~~

Normally, events are called automatically and you don't need to use this method.

## List of supported events

### Diagram events

Check the full list of Diagram events in the [API Reference](../../api/diagram/api_overview/#diagram-events). 


### Editor events

The list of events of the Diagram Editor object is given in the [API section](../../api/editor/api_overview/#editor-events).

In addition to the events of the Diagram editor, you may also apply [events of the diagram object](../../api/diagram/api_overview/#diagram-events) while working in the editor view. For example:

~~~js
editor.diagram.events.on("ShapeClick", function(id) {
    alert("You've just clicked an item with id=" + id);
});
~~~