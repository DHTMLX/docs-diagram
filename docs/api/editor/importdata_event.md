---
sidebar_label: importData
title: importData Event of Editor
description: You can learn about the importData event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# importData

@short: fires after the Import Data button has been clicked

@signature: {`importData: (data) => void;`}

@params:
`data: any` - the imported data

@example:
editor.events.on("importData", function(data) {
    console.log("The data are imported from the JSON file");
});

@descr:
