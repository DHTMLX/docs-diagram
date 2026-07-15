---
sidebar_label: beforeUnSelect
title: beforeUnSelect-Event von Selection
description: Erfahren Sie mehr über das beforeUnSelect-Event in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# beforeUnSelect

### Beschreibung {#description}

@short: Wird beim Abwählen eines Elements ausgelöst, jedoch bevor das Element tatsächlich abgewählt wird

### Verwendung {#usage}

~~~jsx
"beforeUnSelect": ({
    id: string | number,
    batch: (string | number)[]
}) => void | boolean;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit einem Objekt mit den folgenden Parametern aufgerufen:

- `id` - die ID eines abzuwählenden Elements
- `batch` - die Liste der abzuwählenden Elemente

### Rückgabewert {#returns}

Geben Sie `false` zurück, um zu verhindern, dass ein Element abgewählt wird, andernfalls `true`

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
diagram.events.on("beforeUnSelect", ({ id }) => {
    console.log(id + " will be unselected");
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
editor.diagram.events.on("beforeUnSelect", ({ id }) => {
    console.log(id + " will be unselected");
    return true;
});
~~~

**Changelog**: Aktualisiert in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)
