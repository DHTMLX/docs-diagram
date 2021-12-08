---
sidebar_label: setViewMode()
title: setViewMode Method of Editor
description: You can learn about the setViewMode method of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# setViewMode()

@short: sets the mode of Diagram Editor

@signature: {`setViewMode(mode: ViewMode): void;`}

@params:
`mode: string` - the mode of Editor: "preview" or "edit"

@example:
editor.setViewMode("preview"); // "preview" or "edit"

@descr:

**Preview** mode is used to show the diagram. Most of the editing functions of Editor are not available. The left and right panels are hidden.

**Edit** mode is used to edit the diagram. All the functions of Editor are available. The left and right panels are shown.

@changelog:
Added in v4.1.
