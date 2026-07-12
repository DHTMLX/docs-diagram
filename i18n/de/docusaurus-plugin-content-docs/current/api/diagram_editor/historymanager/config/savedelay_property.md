---
sidebar_label: saveDelay
title: saveDelay-Eigenschaft von HistoryManager
description: Informationen zur disabled-Eigenschaft von HistoryManager finden Sie in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# saveDelay {#savedelay}

### Beschreibung {#description}

@short: Legt das Zeitintervall (in ms) für das Speichern des aktuellen Zustands fest

### Verwendung {#usage}

~~~jsx
saveDelay: number;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
saveDelay: 500
~~~

### Beispiel {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

editor.history.saveDelay = 1000;
~~~

**Changelog**: Hinzugefügt in v4.1
