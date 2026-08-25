---
sidebar_label: afterCellsValidation
title: afterCellsValidation-Event von Cell Manager
description: Erfahren Sie mehr über das afterCellsValidation-Event von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterCellsValidation

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem Zellen der Swimlane validiert wurden

### Verwendung {#usage}

~~~jsx
afterCellsValidation: (
    swimlaneId: string | number, 
    validate: boolean, 
    action: "move" | "remove" | "add"
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events akzeptiert die folgenden Parameter:

- `swimlaneId` - (erforderlich) die ID des Elements
- `validate` - (erforderlich) validiert oder nicht validiert
- `action` - (erforderlich) der Typ der Aktion

### Beispiel {#example}

~~~jsx {9-11}
// Initialisierung von Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Laden der Daten
diagram.data.parse(data);

// Anhängen eines Handlers an das Event
diagram.events.on("afterCellsValidation", (swimlaneId, validate, action) => {
    console.log(swimlaneId, validate, action);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
