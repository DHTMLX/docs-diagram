---
sidebar_label: blur
title: JavaScript Form - blur Input Event 
description: You can explore the blur Input event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# blur

@short: fires when an Input control has lost focus

@signature: blur: (value: string | number) => void;

@params:
`value: string | number` - the current value of the control

@example:
form.getItem("input").events.on("blur", (value) => {
    console.log("blur", value);
});
@examplestop:

@changelog: added in v7.2