---
sidebar_label: resetSwimlane()
title: resetSwimlane
description: text
---

# resetSwimlane()

@short: resets active swimlane

@signature: {``}

@params:

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

// your actions with swimlane

diagram.cellManager.resetSwimlane(); // resets active swimlane

@descr:

@relatedapi:
- api/cellmanager/cellmanager_setswimlane_method.md
- api/cellmanager/cellmanager_validation_method.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
