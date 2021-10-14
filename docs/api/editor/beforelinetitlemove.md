---
sidebar_label: beforeLineTitleMove
title: beforeLineTitleMove
description: text
---

# beforeLineTitleMove

@short: fires before a text element of a line is moved

@signature: {`beforeLineTitleMove: (events: MouseEvent, lineId: Id, titleId: Id, coord: IBaseCoords) => boolean | void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `lineId: string | number` - the id of a line
- `titleId: string | number` - the id of a text element of a line
- `coord: object` - an object with the x and y coordinates of the text element of a line position before movement

@returns:
Return `false` to prevent the text element of a line from being moved; otherwise, `true`.

@example:
editor.events.on("beforeLineTitleMove", (event, id, coordinates) => {
    console.log(`
        LineTitle ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
    return true;
});

@descr:

@changelog:

Added in v4.1.
