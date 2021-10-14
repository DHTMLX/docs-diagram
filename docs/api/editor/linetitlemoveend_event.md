---
sidebar_label: lineTitleMoveEnd
title: lineTitleMoveEnd
description: text
---

# lineTitleMoveEnd

@short: fires after a text element of a line is moved

@signature: {`lineTitleMoveEnd: (events: MouseEvent, lineId: Id, titleId: Id, coord: IBaseCoords) => void;`}

@params:
- `events: MouseEvent` - a native HTML event object
- `lineId: string | number` - the id of a line
- `titleId: string | number` - the id of a text element of a line
- `coord: object` - an object with the x and y coordinates of the text element position after movement

@example:
editor.events.on("lineTitleMoveEnd", (event, lineId, titleId, coordinates) => {
    console.log(`
        LineTitle ${id} is position:
            x: ${coordinates.x}
            y: ${coordinates.y}
    `);
});

@descr:

@changelog:
Added in v4.1.
