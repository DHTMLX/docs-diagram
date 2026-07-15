---
sidebar_label: zoomIn-Event
title: zoomIn-Event des Editors
description: Sie können mehr über das zoomIn-Event des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# zoomIn

### Beschreibung {#description}

@short: Wird ausgelöst, wenn auf die Schaltfläche zum Vergrößern geklickt oder die Methode zoomIn() aufgerufen wird

### Verwendung {#usage}

~~~jsx
"zoomIn": (step: number) => void;
~~~

### Parameter {#parameters}

Der Callback des `zoomIn`-Events wird mit dem folgenden Parameter aufgerufen:

- `step` - (erforderlich) ein Wert, der den Schritt der Eigenschaft [`scale`](api/diagram_editor/editor/config/scale_property.md) anzeigt.

:::info
Um die internen Events von Diagram Editor zu verarbeiten, können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {7-9}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler an das Event anhängen
editor.events.on("zoomIn", (step) => {
    console.log("The diagram in the editor is zoomed in. The step is" + step);
});
~~~

**Changelog**: Der Parameter `step` wurde in v6.0 hinzugefügt
