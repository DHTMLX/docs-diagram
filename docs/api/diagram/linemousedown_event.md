---
sidebar_label: lineMouseDown
title: lineMouseDown
description: text
---

# lineMouseDown

@short: fires when a pointing device button is pressed while the pointer is over a connector line

@signature: {`lineMouseDown: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of a connector line
- `event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("lineMouseDown", (id, event) => {
    console.log(id, event);
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
