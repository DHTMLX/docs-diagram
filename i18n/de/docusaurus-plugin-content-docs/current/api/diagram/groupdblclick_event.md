---
sidebar_label: groupDblClick-Event
title: groupDblClick-Event
description: Erfahren Sie mehr über das groupDblClick-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# groupDblClick

### Beschreibung {#description}

@short: Wird beim Doppelklicken auf eine Gruppe ausgelöst

Wenn ein Doppelklick über einer Swimlane erfolgt, wird das Event auf der Zelle der Swimlane ausgelöst

### Verwendung {#usage}

~~~jsx
groupDblClick: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events akzeptiert die folgenden Parameter:

- `id` - (erforderlich) die ID einer Gruppe
- `event` - (erforderlich) ein natives HTML-Event-Objekt

### Beispiel {#example}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler für das Event hinzufügen
diagram.events.on("groupDblClick", (id, event) => {
    console.log(id, event);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
