---
sidebar_label: setSwimlane()
title: setSwimlane-Methode von Cell Manager
description: Erfahren Sie mehr über die setSwimlane-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# setSwimlane()

### Beschreibung {#description}

@short: Legt das aktive Swimlane für weitere Aktionen damit fest

### Verwendung {#usage}

~~~jsx
setSwimlane(id: string | number): boolean;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des Swimlanes

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn das Swimlane festgelegt wurde, andernfalls `false`.

### Beispiel {#example}

~~~jsx
// Initialisierung des Diagramms
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationsoptionen
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // setzt das aktive Swimlane
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
