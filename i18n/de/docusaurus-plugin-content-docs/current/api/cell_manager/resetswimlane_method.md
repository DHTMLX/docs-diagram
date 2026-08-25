---
sidebar_label: resetSwimlane()
title: resetSwimlane-Methode von Cell Manager
description: Erfahren Sie mehr über die resetSwimlane-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# resetSwimlane()

### Beschreibung {#description}

@short: Setzt das aktive Swimlane zurück

### Verwendung {#usage}

~~~jsx
resetSwimlane(): void;
~~~

### Beispiel {#example}

~~~jsx
// Initialisierung des Diagramms
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationsoptionen
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // setzt das aktive Swimlane

// Ihre Aktionen mit dem Swimlane

diagram.cellManager.resetSwimlane(); // setzt das aktive Swimlane zurück
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
