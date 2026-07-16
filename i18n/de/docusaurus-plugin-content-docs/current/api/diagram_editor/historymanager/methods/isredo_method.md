---
sidebar_label: isRedo()
title: isRedo-Methode von HistoryManager
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die isRedo-Methode von HistoryManager. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# isRedo()

### Beschreibung {#description}

@short: Prüft, ob eine durch die Undo-Aktion rückgängig gemachte Aktion wiederhergestellt wurde

### Verwendung {#usage}

~~~jsx
isRedo(): boolean;
~~~

### Beispiel {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
...
editor.history.isRedo();
~~~

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn eine durch die Undo-Aktion rückgängig gemachte Aktion wiederhergestellt wurde, andernfalls `false`

**Changelog**: Hinzugefügt in v4.1
