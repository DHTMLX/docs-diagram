---
sidebar_label: copy()
title: copy
description: text
---

# copy()

@short: creates a copy of an item at the defined position

@signature: {`id: Id | Id[], index: number, target?: IDataCollection): Id | Id[];`}

@params:
- `id: string | number` - the id of an item to copy
- `index: number` - the index to create a copy at
- `target: object` - optional, the target data collection object

@returns:
The item's id or an array with ids of items. `todo: check`

@example:
diagram.data.copy("4",5); // copies the shape with id=4 to the position with index 5

@descr:
