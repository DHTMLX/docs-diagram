---
sidebar_label: beforeCellsValidation
title: beforeCellsValidation-Event von Cell Manager
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeCellsValidation-Event von Cell Manager. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeCellsValidation

### Beschreibung {#description}

@short: Wird ausgelöst, bevor Zellen der Swimlane validiert werden

### Verwendung {#usage}

~~~jsx
beforeCellsValidation: (
    swimlaneId: string | number, 
    action: "move" | "remove" | "add"
) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events verwendet die folgenden Parameter:

- `swimlaneId` - (erforderlich) die ID des Elements
- `action` - (erforderlich) der Typ der Aktion

### Rückgabewert {#returns}

Geben Sie `false` zurück, um die Validierung neuer Zellen zu verhindern, andernfalls `true`

### Beispiel {#example}

~~~jsx {9-12}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// einen Handler an das Event anhängen
diagram.events.on("beforeCellsValidation", (swimlaneId, action) => {
    console.log(swimlaneId, action);
    return true;
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
