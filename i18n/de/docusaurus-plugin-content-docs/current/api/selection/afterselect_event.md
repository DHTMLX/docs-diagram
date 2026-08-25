---
sidebar_label: afterSelect
title: afterSelect-Event von Selection
description: Erfahren Sie mehr über das afterSelect-Event in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# afterSelect

### Beschreibung {#description}

@short: Wird nach der Auswahl eines Elements ausgelöst

### Verwendung {#usage}

~~~jsx
"afterSelect": ({
    id: string | number,
    join: boolean,
    batch: (string | number)[]
}) => void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit einem Objekt mit den folgenden Parametern aufgerufen:

- `id` - die ID des ausgewählten Elements
- `join` - der angewendete [Auswahlmodus](api/selection/add_method.md#parameters)
- `batch` - die Liste der ausgewählten Elemente

### Beispiel {#example}

~~~jsx {9-12}
// Diagram wird initialisiert
const diagram = new dhx.Diagram("diagram_container", {
    select: true,
    // weitere Konfigurationsoptionen
});
// Daten werden geladen
diagram.data.parse(data);

// ein Handler wird an das Event angehängt
diagram.events.on("afterSelect", ({ id }) => {
    console.log(id + " was selected");
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
editor.diagram.events.on("afterSelect", ({ id }) => {
    console.log(id + " was selected");
});
~~~

**Changelog**: Aktualisiert in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)
