---
sidebar_label: isUndo()
title: isUndo-Methode von HistoryManager
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die isUndo-Methode von HistoryManager. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# isUndo()

### Beschreibung {#description}

@short: Prüft, ob eine Aktion rückgängig gemacht wurde

### Verwendung {#usage}

~~~jsx
isUndo(): boolean;
~~~

### Beispiel {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.isUndo();
~~~

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn eine Aktion rückgängig gemacht wurde, andernfalls `false`

**Changelog**: Hinzugefügt in v4.1
