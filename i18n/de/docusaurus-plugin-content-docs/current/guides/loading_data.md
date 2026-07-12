---
sidebar_label: Daten laden und speichern
title: Daten laden und speichern
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über das Laden und Speichern von Daten im Editor. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Daten laden und speichern {#loading-and-storing-data}

Sie können DHTMLX Diagram auf folgende Weise mit Daten befüllen:

- [Daten aus einer externen Datei laden](#external-data-loading)
- [Daten aus einer lokalen Datenquelle laden](#loading-from-a-local-source)

## Daten für das Laden vorbereiten {#preparing-data-to-load}

DHTMLX Diagram nimmt Daten im JSON-Format entgegen. Für die Modi Default, Org Chart und Mindmap von Diagram handelt es sich dabei um ein Array, das eine Reihe von Datenobjekten enthält. Es gibt 5 Objekttypen:

- **Formobjekte**

~~~jsx {2-5}
const data = [
   // Formen konfigurieren
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // Linien konfigurieren
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // Linientitel konfigurieren
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

Die Bibliothek bietet Ihnen [verschiedene Typen von Standardformen](shapes/default_shapes.md) mit sowohl allgemeinen als auch spezifischen Optionen. Die vollständige Liste der verfügbaren Eigenschaften eines `shape`-Objekts finden Sie in der [API-Referenz](shapes/configuration_properties.md).

Sie können auch [einen eigenen Formtyp](shapes/custom_shape.md) erstellen und Formobjekten beliebige benutzerdefinierte Eigenschaften hinzufügen.

- **Linienobjekte**

~~~jsx {6-8}
const data = [
   // Formen konfigurieren
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // Linien konfigurieren
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // Linientitel konfigurieren
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

Ob Linienobjekte im Datensatz vorhanden sind, hängt von der gewählten [Art der Verbindung von Formen](/lines/#setting-connections-between-shapes) ab. Die vollständige Liste der verfügbaren Eigenschaften des `line`-Objekts finden Sie in der [API-Referenz](lines/configuration_properties.md).

- **Linientitelobjekte**

~~~jsx {9-10}
const data = [
   // Formen konfigurieren
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // Linien konfigurieren
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // Linientitel konfigurieren
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

Die vollständige Liste der verfügbaren Eigenschaften des Objekts **Linientitel** finden Sie in der [API-Referenz](line_titles/configuration_properties.md).

- **Gruppenobjekte**

~~~jsx
const data = [
    {
        "type": "$group",
        "id": 1,
        "width": 400,
        "height": 200,
        "x": 0,
        "y": 0,
        "header": {
            "text": "Top and collapsed header with tеxt alignment",
            "editable": true,
            "closable": true,
            "textAlign": "left", // "left", "center", "right"
            "textVerticalAlign": "center", // "top", "center", "bottom"
        },
        // die untergeordneten Elemente der Gruppe
        "groupChildren": [1.1, 1.2],
        "open": false,
    },
    // Formen konfigurieren, die in die Gruppe eingefügt werden sollen
    { "type": "rectangle", "id": 1.1, "x": 50, "y": 75, "text": "Shape 1.1" },
    { "type": "rectangle", "id": 1.2, "x": 200, "y": 75, "text": "Shape 1.2" }
];
~~~

Die vollständige Liste der verfügbaren Eigenschaften eines `group`-Objekts finden Sie in der [API-Referenz](groups/configuration_properties.md).

- **Objekte einer Swimlane und ihrer Zelle**

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template"
        },
        "layout": [
            [1, 2, 3, 4]
        ],
        "subHeaderCols": {
            "headers": [
                {
                    "text": "September",
                    "fill": "#f35c4f66"
                },
                {
                    "text": "October",
                    "fill": "#9b60f866"
                },
                {
                    "text": "November",
                    "fill": "#ffae1266"
                },
                {
                    "text": "December",
                    "fill": "#3cc97a66"
                }
            ]
        }
    },
   // Konfiguration einer Zelle der Swimlane
    {
        "id": 1,
        "type": "$sgroup",
        "groupChildren": ["s1"],
        "style": {
            "fill": "#D4DAE4"
        },
        "x": 0,
        "y": 80
    },
   // Konfiguration einer Form, die in die Zelle eingefügt werden soll
    {
        "id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
    }
];
~~~

Die vollständige Liste der verfügbaren Konfigurationseigenschaften der Objekte einer `swimlane` und ihrer Zellen finden Sie in der [API-Referenz](swimlanes/configuration_properties.md).

## Arbeiten mit Diagram-Daten im PERT-Modus {#working-with-diagram-data-in-the-pert-mode}

Die Arbeit mit Diagram im PERT-Modus weist folgende Besonderheiten auf:

- die [in Diagram geladenen Daten](#data-structure-of-diagram-in-the-pert-mode) haben die Struktur von DHTMLX-Gantt-Daten
- bei der Arbeit mit Daten in Diagram werden diese über [Data Collection](/api/data_collection/) verarbeitet, genau wie Daten in anderen Diagram-Modi
- die [exportierten Diagram-Daten](#saving-and-restoring-state) haben die Struktur von DHTMLX-Gantt-Daten

### Datenstruktur von Diagram im PERT-Modus {#data-structure-of-diagram-in-the-pert-mode}

Die Struktur der Diagram-Daten im PERT-Modus entspricht der [Datenstruktur von DHTMLX Gantt](https://docs.dhtmlx.com/gantt/desktop__supported_data_formats.html#json), um die Integration und den Datenaustausch zwischen den Komponenten zu vereinfachen. Wenn ein Gantt-Datensatz in ein PERT-Diagram geladen wird, ordnet dieses Aufgaben und Projekte automatisch anhand der Verbindungen zwischen ihnen an. Es gibt die Arrays `data` (für Formen: "task", "milestone", "project") und `links` (für Verbindungen zwischen Formen):

~~~jsx
{
    data: object[]; // ein Array von Formen (Aufgaben, Meilensteine, Projekte)
    links: object[] // ein Array von Verbindungen zwischen den Formen
};
~~~

Diese Struktur ermöglicht es, die Formen und ihre Verbindungen unabhängig voneinander zu verarbeiten. [Beachten Sie die wichtigen Hinweise zur Arbeit mit Verknüpfungen](#processing-links).

Diagram unterstützt im PERT-Modus die folgenden Typen von Formen und Verbindungen:

- **Projektobjekte**

~~~jsx {3-4}
const dataset = {
    data: [
        // Konfiguration einer Projektform
        { id: "1", text: "Project #1", type: "project", parent: null },
        // Konfiguration von Aufgabenformen
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // Konfiguration eines Verknüpfungsobjekts
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

Die vollständige Liste der verfügbaren Konfigurationseigenschaften des `project`-Objekts finden Sie in der [API-Referenz](groups/configuration_properties.md#properties-specific-for-project-object).

- **Aufgabenobjekte**

~~~jsx {5-9}
const dataset = {
    data: [
        // Konfiguration einer Projektform
        { id: "1", text: "Project #1", type: "project", parent: null },
        // Konfiguration von Aufgabenformen
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // Konfiguration von Verknüpfungsobjekten
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

Die vollständige Liste der verfügbaren Konfigurationseigenschaften des `task`-Objekts finden Sie in der [API-Referenz](shapes/configuration_properties.md#properties-specific-for-task-shapes).

- **Meilensteinobjekte**

~~~jsx {7-8}
const dataset = {
    data: [
        // Konfiguration einer Projektform
        { id: "1", text: "Project #1", type: "project", parent: null },
        // Konfiguration von Aufgabenformen
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        // Konfiguration einer Meilensteinform
        { id: "1.2", text: "Task #2", parent: "1", type: "milestone", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        //  Konfiguration eines Verknüpfungsobjekts
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

Die vollständige Liste der verfügbaren Konfigurationseigenschaften des `milestone`-Objekts finden Sie in der [API-Referenz](shapes/configuration_properties.md#properties-specific-for-milestone-shapes).

- **Verknüpfungsobjekte**

~~~jsx {11-16}
const dataset = {
    data: [
        // Konfiguration einer Projektform
        { id: "1", text: "Project #1", type: "project", parent: null },
        // Konfiguration von Aufgabenformen
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // Konfiguration von Verknüpfungsobjekten
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

Die vollständige Liste der verfügbaren Konfigurationseigenschaften des `link`-Objekts finden Sie in der [API-Referenz](lines/configuration_properties.md#properties-specific-for-links-in-the-pert-mode).

#### Verarbeitung von Verknüpfungen {#processing-links}

:::info important
Beachten Sie, dass Diagram im PERT-Modus nur Verknüpfungen vom `type: "0"` ("finish" -> "start") unterstützt. Alle anderen [im DHTMLX-Gantt-Diagramm verwendeten Verknüpfungstypen](https://docs.dhtmlx.com/gantt/desktop__link_properties.html) werden ebenfalls als `type: "0"` verarbeitet.
:::

:::tip
Beachten Sie, dass beim Laden von Daten oder beim Hinzufügen einer neuen Verknüpfung das Präfix `$link` an die vorhandene ID einer Verknüpfung angehängt wird, da die IDs von Elementen in der Datensammlung von Diagram eindeutig sein müssen.

Zum Beispiel:

~~~jsx
{
    data: [...],
    links: [
        { id: "1" }, // ist im Diagram als "$link:1" verfügbar
    ]
}

// diagram.data.getItem("$link:1");
~~~
:::

### Besonderheiten des Datenladens im PERT-Modus {#specificity-of-data-loading-in-the-pert-mode}

Befolgen Sie die nachstehenden Empfehlungen, um Fehler zu vermeiden und Diagram korrekt darzustellen:

- **Keine zyklischen Abhängigkeiten**. Zyklen zwischen Aufgaben, Projekten, Verknüpfungen und gemischten Elementen werden nicht unterstützt. Wird eine zyklische Abhängigkeit erkannt, tritt eine Ausnahme auf.
- **Verknüpfungen zwischen übergeordnetem und untergeordneten Elementen sind nicht zulässig**. Direkte Verbindungen zwischen dem übergeordneten Element (z. B. einem Projekt) und seinen untergeordneten Elementen sind nicht erlaubt. Solche Verbindungen werden bei der Datenverarbeitung automatisch gelöscht.
- **Überschneidende Verbindungen vermeiden**. Reduzieren Sie die Anzahl sich überschneidender Verknüpfungen auf ein Minimum, da sie das Diagramm komplexer machen und seine Lesbarkeit verringern können.
- **Sukzessive Datenverarbeitung**. Die Daten werden in der Reihenfolge verarbeitet, in der sie eintreffen, was die Anordnung der Elemente beeinflussen kann. Um das beste Ergebnis zu erzielen, sollten Sie die Daten in einer logischen Reihenfolge angeben.
- **Aufgabenreihenfolge**. Verwenden Sie lineare oder sequenzielle Verbindungen zwischen Aufgaben und Projekten, um das Diagramm übersichtlich zu halten und visuelle Unordnung zu vermeiden.

Die obigen Regeln dienen der Erstellung sauberer, azyklischer Graphen, die für die PERT-Analyse geeignet sind. Verstoßen die Daten gegen diese Regeln, kann Diagram sie automatisch korrigieren (zum Beispiel durch das Entfernen unzulässiger Verbindungen). Es ist jedoch besser, die Eingabedaten vorher zu überprüfen.

### Darstellung von Gantt-Aufgaben mit nicht verbundenen untergeordneten Elementen in Diagram {#rendering-gantt-tasks-with-not-connected-children-in-the-diagram}

Beachten Sie, dass Gantt-Elemente mit `type: "task"` untergeordnete Elemente haben können, die visuell nicht mit der übergeordneten Aufgabe verbunden sind. Solche Beziehungen werden in Diagram nicht dargestellt. Damit solche Elemente visuell im selben Projekt dargestellt werden, können Sie:

- beim Laden der Daten in Diagram dem übergeordneten Element entweder `type:"project"` zuweisen
- oder den untergeordneten Elementen einer solchen Aufgabe die ID des *übergeordneten Projekts* zuweisen

Zum Beispiel:

~~~jsx
{
    data: [
        { id: "1", type: "project" },
        { id: "1.1", type: "task", parent: "1" },
        { id: "1.1.1", type: "task", parent: "1.1" }
    ]
}
~~~

Im obigen Beispiel:

- Das Element "1.1" ist kein Projekt und wird als Aufgabe dargestellt.
- Da das Element "1.1.1" mit dem übergeordneten Element "1.1" verknüpft ist, das kein Projekt ist, wird es an der falschen Stelle dargestellt.
- Damit die Elemente "1.1" und "1.1.1" visuell im selben Projekt dargestellt werden:
    - weisen Sie dem Element "1.1.1" entweder die ID des übergeordneten Projekts des Elements "1.1" zu (mit der Option `parent: "1"`):
    ~~~jsx
    { id: "1.1.1", type: "task", parent: "1" }
    ~~~
    - oder verwenden Sie für das übergeordnete Element "1.1" den Typ `"project"` anstelle des Typs `"task"`:
    ~~~jsx
     { id: "1.1", type: "project", parent: "1" }
    ~~~

## Externes Laden von Daten {#external-data-loading}

Um Daten aus einer externen Datei zu laden, verwenden Sie die Methode [`load()`](api/data_collection/load_method.md). Sie nimmt die URL der Datendatei als Parameter entgegen:

~~~jsx
diagram.data.load("../common/data.json");
~~~

Die Komponente führt einen AJAX-Aufruf aus und erwartet, dass die Remote-URL gültige JSON-Daten liefert.

Das Laden der Daten erfolgt asynchron. Daher müssen Sie jeglichen Code, der nach dem Laden ausgeführt werden soll, in ein Promise einbetten:

~~~jsx
diagram.data.load("/some/data").then(() => {
   diagram.selection.add("123");
});
~~~

**Verwandtes Beispiel**: [Diagram. Daten. Datenladen](https://snippet.dhtmlx.com/09isp2d8)

## Laden aus einer lokalen Quelle {#loading-from-a-local-source}

Um Daten aus einer lokalen Datenquelle zu laden, verwenden Sie die Methode [`parse()`](api/data_collection/parse_method.md). Als Parameter übergeben Sie einen [vordefinierten Datensatz](#preparing-data-to-load) und optional den DataDriver oder den Datentyp ("json" (Standard), "csv", "xml"):

~~~jsx
diagram.data.parse(data, driver);
~~~

**Verwandtes Beispiel**: [Diagram. Standardmodus. Breites Flussdiagramm](https://snippet.dhtmlx.com/4d4k3o8p)

### Daten in den Editor laden {#loading-data-into-the-editor}

Um einen Datensatz in den Editor zu laden, verwenden Sie die Methode [parse()](api/diagram_editor/editor/methods/parse_method.md) des Editors.

~~~jsx
editor.parse(data);
~~~

**Verwandtes Beispiel**: [Diagram Editor. Standardmodus. Grundlegende Initialisierung](https://snippet.dhtmlx.com/xshe9ut7)

## Zustand speichern und wiederherstellen {#saving-and-restoring-state}

Um den aktuellen Zustand eines Diagrams zu speichern, verwenden Sie die Methode [`serialize()`](api/data_collection/serialize_method.md). Je nach Diagram-Modus wandelt sie die Daten des Diagrams um:

- für die Modi Default, Org Chart und Mindmap von Diagram - in ein Array von Objekten, wobei jedes Objekt die Konfiguration einer einzelnen Form enthält
- für den PERT-Diagram-Modus - in ein Objekt mit dem Array `data` aus Objekten (für Formen: `"task"`, `"milestone"`, `"project"`) und dem Array `links` aus Objekten (für Verbindungen zwischen Formen).

~~~jsx
const state = diagram1.data.serialize();
~~~

Beachten Sie, dass für den PERT-Diagram-Modus die *links*-Objekte im exportierten Datenobjekt [dieselben Typen wie im DHTMLX-Gantt-Diagramm](https://docs.dhtmlx.com/gantt/desktop__link_properties.html) haben. Das bedeutet: Stimmt der Typ einer Verknüpfung in den Diagram-Daten mit einem der Gantt-Verknüpfungstypen überein, bleibt er bei der Serialisierung unverändert. Ist der Verknüpfungstyp nicht angegeben oder abweichend festgelegt (zum Beispiel `type: "line"`), wird er in `type: "0"` umgewandelt.

Anschließend können Sie die im gespeicherten Zustand abgelegten Daten in ein anderes Diagram parsen. Zum Beispiel:

~~~jsx
// Erstellen eines neuen Diagrams
const diagram2 = new dhx.Diagram("diagram_container");
// Parsen des Zustands von diagram1 in diagram2
diagram2.data.parse(state);
~~~

## Daten in den Editor importieren {#importing-data-into-the-editor}

Wenn Sie ein Diagram zusammen mit einem Editor verwenden, können Sie Daten aus dem Diagram über die Methode [import()](api/diagram_editor/editor/methods/import_method.md) des Editor-Objekts in den Editor importieren:

~~~jsx
function runEditor() {
    expand();
    editor.import(diagram);
}
~~~

**Verwandtes Beispiel**: [Diagram. Standardmodus. Breites Flussdiagramm](https://snippet.dhtmlx.com/4d4k3o8p)

Der Zustand des Diagrams wird beim Ausführen des Editors in den Editor importiert.
