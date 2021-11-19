---
sidebar_label: afterSubmenuOpen
title: afterSubmenuOpen Event
description: You can learn about the afterSubmenuOpen event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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

@descr:

@changelog:
Added in v4.0
