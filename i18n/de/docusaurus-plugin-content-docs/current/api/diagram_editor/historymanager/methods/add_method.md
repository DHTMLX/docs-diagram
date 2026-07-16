---
sidebar_label: add()
title: add-Methode von HistoryManager
description: Informationen zur add-Methode von HistoryManager finden Sie in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# add() {#add}

### Beschreibung {#description}

@short: Fügt einen neuen Zustand hinzu

:::info
Das Hinzufügen des neuen Zustands erfolgt automatisch. Daher wird diese Methode nicht für die manuelle Verwendung empfohlen.
:::

### Verwendung {#usage}

~~~jsx
add(newState: array): void;
~~~

### Parameter {#parameters}

- `newState` - (erforderlich) ein Array von JSON-Objekten des aktuellen Zustands des Diagramms

### Beispiel {#example}

~~~jsx {5-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.add([
    { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
    { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call the client" },
    { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" }
]);
~~~

**Changelog**: Hinzugefügt in v4.1
