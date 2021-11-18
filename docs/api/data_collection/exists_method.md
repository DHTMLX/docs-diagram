---
sidebar_label: exists()
title: exists Method of Data Collection
description: text
---

# exists()

@short: checks whether the specified item exists in the diagram

@signature: {`exists(id: Id): boolean;`}

@params:
`id: string | number` - the id of the item in question

@returns:
`True` if the item exists, otherwise `false`.

@example:
const shape = diagram.data.exists("1"); 

@descr:

