---
sidebar_label: enable()
title: enable-Methode von HistoryManager
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die enable-Methode von HistoryManager. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# enable()

### Beschreibung {#description}

@short: Startet die Arbeit von HistoryManager neu und speichert den aktuellen Zustand als Ausgangszustand

### Verwendung {#usage}

~~~jsx
enable(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.enable();
~~~

**Changelog**: Hinzugefügt in v4.1
