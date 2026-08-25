---
sidebar_label: beforeSelect
title: beforeSelect-Event von Selection
description: Erfahren Sie mehr über das beforeSelect-Event in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# beforeSelect

### Beschreibung {#description}

@short: Wird beim Auswählen eines Elements ausgelöst, jedoch bevor das Element tatsächlich ausgewählt wird

### Verwendung {#usage}

~~~jsx
"beforeSelect": ({
    id: string | number,
    join: boolean,
    batch: (string | number)[]
}) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit einem Objekt mit den folgenden Parametern aufgerufen:

- `id` - die ID des auszuwählenden Elements
- `join` - der angewendete [Auswahlmodus](api/selection/add_method.md#parameters)
- `batch` - die Liste der auszuwählenden Elemente

### Rückgabewert {#returns}

Geben Sie `false` zurück, um zu verhindern, dass ein Element ausgewählt wird, andernfalls `true`

### Beispiel {#example}

~~~jsx {9-13}
// Diagram wird initialisiert
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true
});
// Daten werden geladen
diagram.data.parse(data);

// ein Handler wird an das Event angehängt
diagram.events.on("beforeSelect", ({ id }) => {
    console.log(id + " will be selected");
    return true;
});
~~~

Hier ist ein Beispiel für das Anhängen eines Event-Handlers an das Event für den Diagram Editor:

~~~jsx {8-12}
// Diagram-Editor wird initialisiert
const editor = new dhx.DiagramEditor("editor_container", {
    // Konfigurationsoptionen
});
// Daten werden in den Editor geladen
editor.parse(data);

// ein Handler wird an das Event angehängt
editor.diagram.events.on("beforeSelect", ({ id }) => {
    console.log(id + " will be selected");
    return true;
});
~~~

**Changelog**: Aktualisiert in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)
