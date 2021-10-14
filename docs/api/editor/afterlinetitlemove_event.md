---
sidebar_label: afterLineTitleMove
title: afterLineTitleMove
description: text
---

# afterLineTitleMove

@short: fires when a text element of a line is moved one grid step

@signature: {`afterLineTitleMove: (events: MouseEvent, lineId: Id, titleId: Id, coord: IBaseCoords) => void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `lineId: string | number` - the id of a line
- `titleId: string | number` - the id of a text element of a line
- `coord: object` - an object with the x and y coordinates of the text element position after movement

@example:
editor.events.on("afterLineTitleMove", (event, id, coordinates) => {
    console.log(`
        LineTitle ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
});

@descr:

@changelog:

Added in v4.1.
