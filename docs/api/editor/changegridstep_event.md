---
sidebar_label: changeGridStep
title: changeGridStep Event of Editor
description: You can learn about the changeGridStep event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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
