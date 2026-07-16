---
sidebar_label: filter-Event
title: filter-Event von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das filter-Event von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# filter

### Beschreibung {#description}

@short: wird nach dem Filtern einer Data Collection ausgelöst

### Verwendung {#usage}

~~~jsx
filter: (filter?: object) => void;
~~~

### Parameter {#parameters}

Der Callback des `filter`-Events wird mit folgendem Parameter aufgerufen:

- `object: {key: object }` - ein Objekt mit allen aktiven Filtern, wobei
    - `key` - die ID eines aktiven Filters ist
    - `object` - ein Objekt mit den [`rule`- und `config`-Eigenschaften](api/data_collection/filter_method.md#parameters) ist

:::info
Zur Verarbeitung der internen Events der Diagram Data Collection können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {7-9}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.events.on("filter", (filter) => {
    console.log("Items were filtered");
});
~~~
