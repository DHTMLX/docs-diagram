---
sidebar_label: move()
title: move Method of Data Collection
description: You can learn about the move method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# move()

### Description

@short: moves an item to the defined position

### Usage

~~~js
move(id: Id | Id[], index: number, target?: DataCollection): Id | Id[];
~~~

### Parameters

- `id: string | number | string[]` - the id(s) of an item(s) to move
- `index: number` - the index to move an item(s) to
- `target: object` - optional, the target data collection object

### Returns

Either a string with the item's id or an array of string values with ids of items.

### Example

~~~js
diagram.data.move("4",5); // moves the shape with id=4 to the position with index 5
~~~
