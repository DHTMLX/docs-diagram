---
sidebar_label: afterSubmenuOpen
title: afterSubmenuOpen
description: text
---

# afterSubmenuOpen

@short: fires after the menu of the subheader is opened

@signature: {`afterSubmenuOpen: (id: Id, event: MouseEvent, subHeaderId?: string) => void;`}

@params:
- `id: string | number` - the id of a swimlane
- `event: MouseEvent` - a native HTML event object
- `subHeaderId: string` - the id of a subheader of a swimlane

@example:
diagram.events.on("afterSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
// For diagram editor
editor.diagram.events.on("afterSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});

@descr:

@changelog:
Added in v4.0
