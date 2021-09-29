---
sidebar_label: resetSwimlane()
title: resetSwimlane
description: text
---

# resetSwimlane()

@short: resets active swimlane

@signature: {`resetSwimlane(): void;`}

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

**Related articles**

diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
