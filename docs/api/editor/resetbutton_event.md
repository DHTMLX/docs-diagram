---
sidebar_label: resetButton
title: resetButton
description: text
---

# resetButton

@short: fires after the Reset Changes button has been clicked

@signature: {`resetButton: () => void;`}

@example:
editor.events.on("resetButton",function(){
    console.log("The changes are reset");
});

@descr: