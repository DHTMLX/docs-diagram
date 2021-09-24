---
sidebar_label: getSubHeaderCellIndex()
title: getSubHeaderCellIndex
description: text
---

# getSubHeaderCellIndex()

@short: returns the index of the cell of the swimlane by the subheader id

@params:
- subheaderId     string      the id of the subheader of a swimlane

@returns:
- index    number    the index of the cell

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getSubHeaderCellIndex("sub01"); // gets the index of the cell

// -> 0

@descr:

The count of the index starts from 0.

@relatedapi:
- api/cellmanager/cellmanager_getcellid_method.md
- api/cellmanager/cellmanager_getcellindex_method.md
- api/cellmanager/cellmanager_getsubheadercellid_method.md
- api/cellmanager/cellmanager_getsubheadercellindex_method.md
- api/cellmanager/cellmanager_getsubheadertype_method.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

@template: api_method