---
sidebar_label: change
title: change Event of Data Collection
description: text
---

# change

@short: fires on changes in the dataset of the diagram

@signature: {`change: (id?: string, status?: Statuses, updatedItem?: any) => void;`}

@params:
- `id: string | number` - the id of the changed item
- `status: string` - the status of the change: "add", "update", "delete"
- `updatedItem: object` - the object of the changed item

@example:
diagram.events.on("change", function (id, status, shape) {
	console.log("The " + id + " has been " + status);
});

@descr:
There are cases when the handler function doesn't take any parameters, e.g. while a data set is parsed into the diagram if all shapes are removed.
