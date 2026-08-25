---
sidebar_label: zoomOut-Event
title: zoomOut-Event des Editors
description: Sie können mehr über das zoomOut-Event des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# zoomOut

### Beschreibung {#description}

@short: Wird ausgelöst, wenn auf die Schaltfläche zum Verkleinern geklickt oder die Methode `zoomOut()` aufgerufen wird

### Verwendung {#usage}

~~~jsx
"zoomOut": (step) => void;
~~~

### Parameter {#parameters}

Der Callback des `zoomOut`-Events wird mit dem folgenden Parameter aufgerufen:

- `step` - (erforderlich) ein Wert, der den Änderungsschritt der Eigenschaft [`scale`](api/diagram_editor/editor/config/scale_property.md) anzeigt.

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
editor.events.on("zoomOut", (step) => {
    console.log("The diagram in the editor is zoomed out");
});
~~~

**Changelog**: Der Parameter `step` wurde in v6.0 hinzugefügt
