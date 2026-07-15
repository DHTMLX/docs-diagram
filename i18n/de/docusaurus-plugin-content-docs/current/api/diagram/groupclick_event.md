---
sidebar_label: groupClick-Event
title: groupClick-Event
description: Erfahren Sie mehr über das groupClick-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# groupClick

### Beschreibung {#description}

@short: Wird beim Klicken auf eine Gruppe ausgelöst

Wenn über einer Swimlane geklickt wird, wird das Event auf der Zelle der Swimlane ausgelöst

### Verwendung {#usage}

~~~jsx
groupClick: (
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
diagram.events.on("groupClick", (id, event) => {
    console.log(id, event);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
