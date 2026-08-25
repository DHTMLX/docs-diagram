---
sidebar_label: itemMouseOut
title: itemMouseOut-Event
description: Erfahren Sie mehr über das itemMouseOut-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwickler-Guides und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# itemMouseOut

### Beschreibung {#description}

@short: Wird ausgelöst, wenn sich ein Zeigegerät außerhalb eines Items befindet

### Verwendung {#usage}

~~~jsx
itemMouseOut: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events akzeptiert die folgenden Parameter:

- `id` - (erforderlich) die ID eines Items
- `event` - (erforderlich) ein natives HTML-Event-Objekt

### Beispiel {#example}

~~~jsx {9-11}
// Initialisierung von Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Laden der Daten
diagram.data.parse(data);

// Anhängen eines Handlers an das Event
diagram.events.on("itemMouseOut", (id, event) => {
    console.log(id, event);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
