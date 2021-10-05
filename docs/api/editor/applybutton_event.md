---
sidebar_label: applyButton
title: applyButton
description: text
---

# applyButton

@short: fires after the Apply All button has been clicked

@signature: {`applyButton: () => void;`}

@example:
editor.events.on("applyButton", function(){
    console.log("The changes are applied");
});

@descr:
