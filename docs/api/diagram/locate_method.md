---
sidebar_label: locate()
title: locate
description: text
---

# locate()

@short: gets the id of an item from the specified HTML event or tag

@signature: {`locate(event: Event): IBaseShape;`}

@params:
`event: Event` - a native event object

@returns:

The id of the shape that the event/tag relates to.

@example:
var id = diagram.locate(e);

@descr:
