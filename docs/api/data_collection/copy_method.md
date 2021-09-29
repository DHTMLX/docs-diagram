---
sidebar_label: copy()
title: copy
description: text
---

# copy()

@short: creates a copy of a shape at the defined position

@signature: {`copy(id: Id, index: number, target?: IDataCollection | ITreeCollection, targetId?: Id): Id;`}

@params:
- `id: string | number` -the id of a shape to copy
- `index: number` -the index to create a copy at
- `target: object` -optional, the target data collection object

@example:
diagram.data.copy("4",5); // copies the shape with id=4 to the position with index 5

@descr:

@relatedapi:
api/data/methods/move.md
