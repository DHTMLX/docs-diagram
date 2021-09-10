---
sidebar_label: getSubHeaderType()
title: getSubHeaderType
description: text
---

# getSubHeaderType()

@short: returns the type of direction to count the index by the subheader id of the swimlane

@params:
- subheaderId     string      the id of the subheader of a swimlane

@returns:
- type    "row"|"col"|undefined   the type of direction to count the index

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getSubHeaderType("sub01"); // gets the type of direction

// -> "row"

@descr:

The count of the index starts from 0.

@relatedapi:
- api/cellmanager/cellmanager_getcellid_method.md
- api/cellmanager/cellmanager_getcellindex_method.md
- api/cellmanager/cellmanager_getsubheadercellid_method.md
- api/cellmanager/cellmanager_getsubheadercellindex_method.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

@template: api_method
