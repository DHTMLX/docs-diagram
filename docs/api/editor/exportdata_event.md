---
sidebar_label: exportData
title: exportData
description: text
---

# exportData

@short: fires after the Export Data button has been clicked

@signature: {`exportData: () => void;`}

@example:
editor.events.on("exportData", function() {
    console.log("The data are exported to the JSON format");
});

@descr:
