---
sidebar_label: beforeCellsMove
title: beforeCellsMove 
description: text
---

# beforeCellsMove

@short: fires before cells of the swimlane are moved

@params:
- swimlaneId    string|number	the id of the item

@returns:
- param     boolean     false - to prevent moving of the cells, otherwise true

@example:
diagram.events.on("beforeCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});

@descr:

@relatedapi:
- api/cellmanager/cellmanager_aftercellsmove_event.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

@template: api_event
