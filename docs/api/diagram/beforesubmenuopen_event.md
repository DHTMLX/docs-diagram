---
sidebar_label: beforeSubmenuOpen
title: beforeSubmenuOpen
description: text
---

# beforeSubmenuOpen

@short: fires before the menu of the subheader is opened

@signature: {`beforeSubmenuOpen: (id: Id, event: MouseEvent, subHeaderId?: string) => boolean | void;`}

@params:
- `id: string | number` - the id of a swimlane
- `event: MouseEvent` - a native HTML event object
- `subHeaderId: string` - the id of a subheader of a swimlane

@returns:
Return `false` to block opening the subheader; otherwise, `true`.

@example:
diagram.events.on("beforeSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
    return true;
});

@descr:

@changelog:
Added in v4.0
