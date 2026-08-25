---
sidebar_label: afterCellsAdd
title: afterCellsAdd-Event von Cell Manager
description: Erfahren Sie mehr über das afterCellsAdd-Event von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterCellsAdd

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem neue Zellen zu einer Swimlane hinzugefügt wurden

### Verwendung {#usage}

~~~jsx
afterCellsAdd: (swimlaneId: string | number) => void;
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
diagram.events.on("afterCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
