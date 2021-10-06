---
sidebar_label: lineClick
title: lineClick
description: text
---

# lineClick

@short: fires on clicking a connector line

@signature: {`lineClick: (id: Id, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of a connector line
- `event: MouseEvent` -  a native HTML event object

@example:
diagram.events.on("lineClick", function(id, events) {
    console.log(id);
});

@relatedsample:
**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v3.0
