---
sidebar_label: afterExpand
title: afterExpand-Event
description: Erfahren Sie mehr über das afterExpand-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterExpand

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem ein Element ausgeklappt wurde

### Verwendung {#usage}

~~~jsx
afterExpand: (
    id: string | number,
    dir?: string
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events erhält die folgenden Parameter:

- `id` - (erforderlich) die ID des Elements, das ausgeklappt wurde
- `dir` - (optional) die Seite, auf der die untergeordneten Elemente relativ zur übergeordneten Form angezeigt wurden (`"left"` oder `"right"` für *type:`"topic"`*, andernfalls undefined)

### Beispiel {#example}

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterExpand", (id, dir) => {
    console.log(diagram.data.getItem(id).text + " was expanded", dir);
});
~~~

**Changelog**: Der Parameter `dir` wurde in v3.1 hinzugefügt.
