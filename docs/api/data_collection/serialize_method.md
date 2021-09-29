---
sidebar_label: serialize()
title: serialize
description: text
---

# serialize()

@short: serializes the diagram data into an array of JSON objects

@signature: {`serialize(driver?: DataDriver): T[];`}

@params:

@returns:
- data		array		an array of JSON objects for each item and link from Diagram

@example:
var data = diagram.data.serialize();

@descr:


@related:
common_guides/loading_data.md#savingandrestoringstate

@relatedapi:
api/data/methods/parse.md