---
sidebar_label: groupHeaderDblClick-Event
title: groupHeaderDblClick-Event
description: Erfahren Sie mehr über das groupHeaderDblClick-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# groupHeaderDblClick

### Beschreibung {#description}

@short: Wird beim Doppelklicken auf die Kopfzeile einer Gruppe ausgelöst

Wenn ein Doppelklick über der Kopfzeile einer Swimlane erfolgt, wird das Event auf der Unterkopfzeile der Swimlane ausgelöst

### Verwendung {#usage}

~~~jsx
groupHeaderDblClick: (
    id: string | number,
    event: MouseEvent,
    subHeaderId?: string
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events akzeptiert die folgenden Parameter:

- `id` - (erforderlich) die ID einer Gruppe
- `event` - (erforderlich) ein natives HTML-Event-Objekt
- `subHeaderId` - (optional) die ID einer Unterkopfzeile einer Swimlane

### Beispiel {#example}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler für das Event hinzufügen
diagram.events.on("groupHeaderDblClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
