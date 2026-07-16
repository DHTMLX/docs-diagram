---
sidebar_label: beforeExpand-Event
title: beforeExpand-Event
description: Erfahren Sie mehr über das beforeExpand-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeExpand

### Beschreibung {#description}

@short: Wird ausgelöst, bevor ein Element ausgeklappt wird

### Verwendung {#usage}

~~~jsx
beforeExpand: (
    id: string | number,
    dir?: string
) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events verwendet die folgenden Parameter:

- `id` - (erforderlich) die ID eines Elements
- `dir` - (optional) die Seite, auf der die untergeordneten Elemente relativ zur übergeordneten Form angezeigt werden (`"left"` oder `"right"` für *type:`"topic"`*, andernfalls undefined)

### Rückgabewert {#returns}

Geben Sie `false` zurück, um das Ausklappen eines Elements zu blockieren; andernfalls `true`

### Beispiel {#example}

~~~jsx {9-12}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// Daten laden
diagram.data.parse(data);

// einen Handler an das Event anhängen
diagram.events.on("beforeExpand", (id, dir) => {
    console.log("Expanding " + diagram.data.getItem(id).text, dir);
    return true;
});
~~~

**Changelog**: Der Parameter `dir` wurde in v3.1 hinzugefügt

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
