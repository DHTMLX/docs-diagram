---
sidebar_label: move()
title: move
description: text
---

# move()

@short: moves an item to the defined position

@signature: {`move(id: Id | Id[], index: number, target?: DataCollection): Id | Id[];`}

@params:
- `id: string | string[]` - the ids of an item to move
- `index: number` - the index to move items to
- `target: object` - optional, the target data collection object

@returns:
A new array of items where each item is the result of the callback function.

@example:
diagram.data.move("4",5); // moves the shape with id=4 to the position with index 5

@descr:
