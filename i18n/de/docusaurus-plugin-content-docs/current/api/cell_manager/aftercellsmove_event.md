---
sidebar_label: afterCellsMove
title: afterCellsMove-Event von Cell Manager
description: Erfahren Sie mehr über das afterCellsMove-Event von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterCellsMove

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem Zellen der Swimlane verschoben wurden

### Verwendung {#usage}

~~~jsx
afterCellsMove: (swimlaneId: string | number) => void;
~~~

### Parameter {#parameters}

Der Callback des Events akzeptiert den folgenden Parameter:

- `swimlaneId` - (erforderlich) die ID des Elements

### Beispiel {#example}

~~~jsx {9-11}
// Initialisierung von Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Laden der Daten
diagram.data.parse(data);

// Anhängen eines Handlers an das Event
diagram.events.on("afterCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
