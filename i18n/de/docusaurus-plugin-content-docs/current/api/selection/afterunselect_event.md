---
sidebar_label: afterUnSelect
title: afterUnSelect-Event von Selection
description: Erfahren Sie mehr über das afterUnSelect-Event in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# afterUnSelect

### Beschreibung {#description}

@short: Wird nach dem Abwählen eines Elements ausgelöst

### Verwendung {#usage}

~~~jsx
"afterUnSelect": ({
    id: string | number,
    batch: (string | number)[]
}) => void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit einem Objekt mit den folgenden Parametern aufgerufen:

- `id` - die ID des abgewählten Elements
- `batch` - die Liste der abgewählten Elemente

### Beispiel {#example}

~~~jsx {9-12}
// Diagram wird initialisiert
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true
});
// Daten werden geladen
diagram.data.parse(data);

// ein Handler wird an das Event angehängt
diagram.events.on("afterUnSelect", ({ id }) => {
    console.log(id + " was unselected");
});
~~~

Hier ist ein Beispiel für das Anhängen eines Event-Handlers an das Event für den Diagram Editor:

~~~jsx {8-11}
// Diagram-Editor wird initialisiert
const editor = new dhx.DiagramEditor("editor_container", {
    // Konfigurationsoptionen
});
// Daten werden in den Editor geladen
editor.parse(data);

// ein Handler wird an das Event angehängt
editor.diagram.events.on("afterUnSelect", ({ id }) => {
    console.log(id + " was unselected");
});
~~~

**Changelog**: Aktualisiert in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)
