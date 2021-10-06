---
sidebar_label: changeGridStep
title: changeGridStep
description: text
---

# changeGridStep

@short: fires after the value of the grid step has been changed

@signature: {`changeGridStep: (step: number) => void;`}

@params:
`step: number` - the current value of the grid step

@example:
editor.events.on("changeGridStep", function(step) {
    console.log("The grid step is changed to:", step);
});

@descr:
