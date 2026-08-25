---
sidebar_label: afterSubmenuOpen
title: afterSubmenuOpen-Event
description: Erfahren Sie mehr über das afterSubmenuOpen-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterSubmenuOpen

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem das Menü des Subheaders geöffnet wurde

### Verwendung {#usage}

~~~jsx
afterSubmenuOpen: (
    id: string | number,
    event: MouseEvent,
    subHeaderId?: string
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events erhält die folgenden Parameter:

- `id` - (erforderlich) die ID einer Swimlane
- `event` - (erforderlich) ein natives HTML-Event-Objekt
- `subHeaderId` - (erforderlich) die ID eines Subheaders einer Swimlane

### Beispiel {#example}

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
