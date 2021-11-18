---
sidebar_label: importData
title: importData Event of Editor
description: text
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
