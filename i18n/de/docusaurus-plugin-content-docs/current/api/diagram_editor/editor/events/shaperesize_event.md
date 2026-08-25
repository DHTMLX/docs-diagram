---
sidebar_label: shapeResize-Event
title: shapeResize-Event des Editors
description: Sie können mehr über das shapeResize-Event des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# shapeResize

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem die Größe einer Form geändert wurde

### Verwendung {#usage}

~~~jsx
"shapeResize": () => void;
~~~

:::info
Um die internen Diagram-Editor-Events zu verarbeiten, können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-9}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler an das Event anhängen
editor.events.on("shapeResize", () => {
    console.log("The shape has been resized");
});
~~~
