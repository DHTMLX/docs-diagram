---
sidebar_label: afterCollapse
title: afterCollapse-Event
description: Erfahren Sie mehr über das afterCollapse-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterCollapse

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem ein Element eingeklappt wurde

### Verwendung {#usage}

~~~jsx
afterCollapse: (
    id: string | number,
    dir?: string
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events erhält die folgenden Parameter:

- `id` - (erforderlich) die ID des Elements, das eingeklappt wurde
- `dir` - (optional) die Seite, auf der die untergeordneten Elemente relativ zur übergeordneten Form ausgeblendet wurden (`"left"` oder `"right"` für *type:`"topic"`*, andernfalls undefined)

### Beispiel {#example}

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterCollapse", (id, dir) => {
    console.log(diagram.data.getItem(id).text + " was collapsed", dir);
});
~~~

**Changelog**: Der Parameter `dir` wurde in v3.1 hinzugefügt.

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
