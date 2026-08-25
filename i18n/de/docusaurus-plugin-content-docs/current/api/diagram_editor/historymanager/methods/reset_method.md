---
sidebar_label: reset()-Methode
title: reset()-Methode von HistoryManager
description: Erfahren Sie mehr über die reset-Methode von HistoryManager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# reset()

### Beschreibung {#description}

@short: Setzt vorherige Änderungen zurück und speichert den aktuellen Zustand

### Verwendung {#usage}

~~~jsx
reset(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.reset();
~~~

**Changelog**: Hinzugefügt in v4.1
