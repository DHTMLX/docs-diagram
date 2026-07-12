---
sidebar_label: serialize()-Methode
title: serialize-Methode von Data Collection
description: Erfahren Sie mehr über die serialize-Methode von Data Collection in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# serialize()

### Beschreibung {#description}

@short: Exportiert die aktuellen Diagrammdaten

### Verwendung {#usage}

~~~jsx
serialize(): object[] | { data: object[]; links: object[] };
~~~

### Rückgabewert {#returns}

Abhängig vom Diagrammmodus gibt die Methode Folgendes zurück:

- `object[]` - (für die Standard-, Organigramm- und Mindmap-Diagrammmodi) ein Array von Objekten für jedes Element und jede Verbindung aus Diagram
- `{ data: object[]; links: object[] }` - (für den PERT-Diagrammmodus) ein Objekt mit:
  - dem Array `data` mit Objekten (für Formen: `"task"`, `"milestone"`, `"project"`)
  - dem Array `links` mit Objekten (für Verbindungen zwischen Formen)

### Beispiel {#example}

- für den Standard-Diagrammmodus

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const data = diagram.data.serialize(); // -> [{...}, {...}, {...}, {...}]
~~~

- für den PERT-Diagrammmodus

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});
diagram.data.parse(dataset);

const dataset = diagram.data.serialize(); // -> { data: [...], links: [...] };
~~~

Beachten Sie, dass die `links`-Objekte im exportierten Datenobjekt für den PERT-Diagrammmodus [die gleichen Typen wie im DHTMLX-Gantt-Diagramm](https://docs.dhtmlx.com/gantt/desktop__link_properties.html) haben. Das bedeutet, wenn der Typ eines Links in den Diagrammdaten mit einem der Gantt-Linktypen übereinstimmt, bleibt er bei der Serialisierung unverändert. Ist der Linktyp nicht angegeben oder anders festgelegt (zum Beispiel `type: "line"`), wird er in `type: "0"` umgewandelt.

**Verwandter Artikel**:  [Speichern und Wiederherstellen des Zustands](guides/loading_data.md#saving-and-restoring-state)
