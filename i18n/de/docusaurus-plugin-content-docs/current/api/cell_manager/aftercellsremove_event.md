---
sidebar_label: afterCellsRemove
title: afterCellsRemove-Event von Cell Manager
description: Erfahren Sie mehr über das afterCellsRemove-Event von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterCellsRemove

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem Zellen der Swimlane entfernt wurden

### Verwendung {#usage}

~~~jsx
afterCellsRemove: (swimlaneId: string | number) => void;
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
diagram.events.on("afterCellsRemove", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
