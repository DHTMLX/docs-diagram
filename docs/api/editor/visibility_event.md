---
sidebar_label: visibility
title: visibility
description: text
---

# visibility

@short: fires after the Visibility button has been clicked

@signature: {`visibility: () => void;`}

@example:
editor.events.on("visibility", function() {
    console.log("The side panels are hidden");
});

@descr: