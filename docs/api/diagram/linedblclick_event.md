---
sidebar_label: lineDblClick
title: lineDblClick
description: text
---

# lineDblClick

@short: fires on double-clicking a connector line

@signature: {`lineDblClick: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of a connector line
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("lineDblClick", (id, event) => {
    console.log(id, event);
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
