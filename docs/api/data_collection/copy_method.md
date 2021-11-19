---
sidebar_label: copy()
title: copy Method of Data Collection
description: You can learn about the copy method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# copy()

@short: creates a copy of an item at the defined position

@signature: {`id: Id | Id[], index: number, target?: IDataCollection): Id | Id[];`}

@params:
- `id: string | number | array` - the id(s) of an item(s) to copy
- `index: number` - the index to create a copy at
- `target: object` - optional, the target data collection object

@returns:
The item's id or an array with ids of items.

@example:
diagram.data.copy("4",5); // copies the shape with id=4 to the position with index 5

@descr:
