---
sidebar_label: parse()-Methode
title: parse-Methode von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die parse()-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# parse()

### Beschreibung {#description}

@short: Lädt Daten aus einer lokalen Datenquelle in ein Diagramm und verarbeitet sie

### Verwendung {#usage}

~~~jsx
parse(
    data: object[] | { data: object[]; links: object[] } | string,
    driver?: object | string
): void;
~~~

### Parameter {#parameters}

- `data: object[] | { data: object[]; links: object[] } | string` - (erforderlich) die zu ladenden Daten. Sie können Daten in jedem unterstützten Datenformat laden. Die Datenstruktur hängt vom Diagrammmodus ab:
    - für die Diagrammmodi default, org chart und mindmap wird sie als Array festgelegt, das eine Reihe von Datenobjekten enthält
    ~~~jsx
    data: object[]; // ein Array aller Formen und Verbindungen
    ~~~
    - für den PERT-Diagrammmodus handelt es sich um ein Objekt mit:
      -  dem Array `data` (für Formen: `"task"`, `"milestone"`, `"project"`)
      -  dem Array `links` (für Verbindungen zwischen Formen)
    ~~~jsx
    {
        data: object[]; // ein Array von Formen (Aufgaben, Meilensteine, Projekte)
        links: object[] // ein Array von Verbindungen zwischen den Formen
    };
    ~~~
- `driver` - (optional) `DataDriver` oder Datentyp (`"json"`, `"csv"`, `"xml"`), standardmäßig `"json"`

### Beispiel {#example}

- für den Org-Chart-Modus des Diagramms:

~~~jsx
const data = [
    {
        id: "1",
        text: "Chairman & CEO",
        title: "Henry Bennett",
        img: "../common/img/avatar-1.png"
    },
    {
        id: "2",
        text: "Manager",
        title: "Mildred Kim",
        img: "../common/img/avatar-2.png"
    },
    {
        id: "3",
        text: "Technical Director",
        title: "Jerry Wagner",
        img: "../common/img/avatar-3.png"
    },
    { id: "1-2", from: "1", to: "2", type: "line" },
    { id: "1-3", from: "1", to: "3", type: "line" }
];

const diagram = new dhx.Diagram("diagram_container", {
    type: "org"
});

diagram.data.parse(data);
~~~

- für den PERT-Modus des Diagramms:

~~~jsx
const dataset = {
    data: [
        { id: "1", text: "Project #1", type: "project", parent: null },
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
    ],
    links: [
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" },
    ]
};

const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});

diagram.data.parse(dataset);
~~~

**Verwandter Artikel**:  [Daten laden und speichern](guides/loading_data.md)

**Verwandte Beispiele**:
- [Diagram. Org-Chart-Modus. Basisinitialisierung](https://snippet.dhtmlx.com/5ign6fyy)
- [Diagram. PERT-Diagramm. Initialisierung](https://snippet.dhtmlx.com/4h5fi7xd)
