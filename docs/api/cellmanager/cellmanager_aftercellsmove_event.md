---
sidebar_label: afterCellsMove
title: afterCellsMove 
description: text
---

# afterCellsMove

@short: fires after cells of the swimlane are moved

@params:
- swimlaneId    string|number	the id of the item

@example:
diagram.events.on("afterCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
});

@descr:

@relatedapi:
- api/cellmanager/cellmanager_beforecellsmove_event.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

@template: api_event
