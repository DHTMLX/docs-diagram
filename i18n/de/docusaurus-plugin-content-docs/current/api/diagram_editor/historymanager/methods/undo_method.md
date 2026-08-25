---
sidebar_label: undo()-Methode
title: undo()-Methode von HistoryManager
description: Erfahren Sie mehr über die undo-Methode von HistoryManager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# undo()

### Beschreibung {#description}

@short: Macht die letzte Aktion im Diagram Editor rückgängig

### Verwendung {#usage}

~~~jsx
undo(first?: boolean): void;
~~~

### Parameter {#parameters}

- `first` - (optional) *true*, um den gesamten Änderungsverlauf rückgängig zu machen

### Beispiel {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.undo();
~~~

**Changelog**: Hinzugefügt in v4.1
