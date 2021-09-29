---
sidebar_label: move()
title: move
description: text
---

# move()

@short: moves an item to the defined position

@signature: {`move(id: Id | Id[], index: number, target?: DataCollection | TreeCollection, targetId?: Id): Id | Id[];`}

@params:
- id 			string,number		the id of an item to move
- index			number				the index to move an item to
- target		object				optional, the target data collection object



@example:
diagram.data.move("4",5); // moves the shape with id=4 to the position with index 5


@descr:

@relatedapi:
api/data/methods/copy.md