---
sidebar_label: setSwimlane()
title: setSwimlane
description: text
---

# setSwimlane()

@short: sets active swimlane for further actions with it

@signature: {``}

@params:
- id    string|number       the id of the swimlane

@returns:
- param     boolean     true if the swimlane is set, otherwise false

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

@descr:

@relatedapi:
- api/cellmanager/cellmanager_resetswimlane_method.md
- api/cellmanager/cellmanager_validation_method.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
