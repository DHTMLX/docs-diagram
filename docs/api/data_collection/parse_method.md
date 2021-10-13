---
sidebar_label: parse()
title: parse
description: text
---

# parse()

@short: loads data from a local data source

@signature: {`parse(data: T[] | string, driver?: IDataDriver | DataDriver): void;`}

@params:

- `data: array | string` - the data to load
- `driver: object | string` - optional, DataDriver or type of data ("json", "csv", "xml"), "json" by default

@example:
const data = [
	{
		id: "1",
		text: "Chairman & CEO",
		title: "Henry Bennett",
		img: "../common/img/avatar-1.png"
	},
	{
		id: "2",
		text: "Manager",
		title: "Mildred Kim",
		img: "../common/img/avatar-2.png"
	},
	{
		id: "3",
		text: "Technical Director",
		title: "Jerry Wagner",
		img: "../common/img/avatar-3.png"
	},
	{ id: "1-2", from: "1", to: "2", type: "line" },
	{ id: "1-3", from: "1", to: "3", type: "line" }
];

const diagram = new dhx.Diagram("diagram_container", { type: "org" });
diagram.data.parse(data);

@relatedsample:
**Related sample**: [Diagram. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/5ign6fyy)

@descr:

You can load data in any supported data format.

#### Related articles

[Loading and storing data](../../../guides/loading_data/)
