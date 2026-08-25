---
sidebar_label: redo()
title: redo-Methode von HistoryManager
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die redo-Methode von HistoryManager. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# redo()

### Beschreibung {#description}

@short: Stellt eine Aktion wieder her, die durch die Undo-Aktion rückgängig gemacht wurde

### Verwendung {#usage}

~~~jsx
redo(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.redo();
~~~

**Changelog**: Hinzugefügt in v4.1
