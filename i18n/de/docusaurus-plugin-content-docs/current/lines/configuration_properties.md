---
sidebar_label: Linieneigenschaften
title: Linieneigenschaften
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die Linieneigenschaften. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Linieneigenschaften

:::note
Geben Sie Farbwerte im HEX-Format an.
:::

## Allgemeine Eigenschaften {#common-properties}

### Verwendung {#usage}

~~~jsx
const data = [
    // Linienobjekt
    {
        type: "line" | "dash",
        id?: string | number,
        from?: string | number,
        to?: string | number,
        connectType?: "straight" | "elbow" | "curved",
        strokeWidth?: number, // standardmäßig 2
        stroke?: string
    },
    // weitere Linienobjekte
]
~~~

### Beschreibung {#description}

Jedes Linienobjekt kann die folgenden Eigenschaften enthalten:

- `type` - (erforderlich) der Typ der Verbindungslinie: "*line*" oder "*dash*"
- `id` - (optional) die ID eines Verbinders
- `from` - (optional) die ID der übergeordneten Form
- `to` - (optional) die ID der untergeordneten Form
- `connectType` - (optional) der Verbindungstyp der Linie: ["straight"](/lines/#lines-in-the-default-mode), ["elbow"](/lines/#lines-in-the-org-chart-mode) (der Standardtyp im Standard-/Organigramm-Modus), ["curved"](/lines/#lines-in-the-mindmap-mode) (der Standardtyp im Mindmap-Modus)
- `strokeWidth` - (optional) die Breite der Linie, standardmäßig 2
- `stroke` - (optional) die Farbe der Linie; standardmäßig "#2198F3" im Standardmodus und "#CCC" im Organigramm-/Mindmap-Modus

## Eigenschaften speziell für den Standardmodus {#properties-specific-for-the-default-mode}

### Verwendung {#usage-1}

~~~jsx
const data = [
    // Linienobjekt
    {
        // ... allgemeine Eigenschaften
        forwardArrow?: string, // standardmäßig "filled"
        backArrow?: string, // standardmäßig "filled"
        fromSide?: "top" | "bottom" | "left" | "right" | "center",
        toSide?: "top" | "bottom" | "left" | "right" | "center",
        cornersRadius?: number,
        customGap?: number,
        points?: [
            { x: number, y: number, custom?: boolean },
            // weitere Punktobjekte
        ]
    },
    // weitere Linienobjekte
]
~~~

### Beschreibung {#description-1}

Bei der Vorbereitung eines Datensatzes für Linien, die im Standardmodus in das Diagramm geladen werden, können Sie dem Konfigurationsobjekt einer Linie die folgenden Eigenschaften hinzufügen:

- `forwardArrow` - (optional) legt einen Vorwärtspfeil-Verbinder fest und definiert den Pfeiltyp (standardmäßig `"filled"`)
- `backArrow` - (optional) legt einen Rückwärtspfeil-Verbinder fest und definiert den Pfeiltyp (standardmäßig `"filled"`)
- `fromSide` - (optional) die Seite der Form, von der die Verbindung ausgeht ("*top*", "*bottom*", "*left*","*right*", "*center*")
- `toSide` - (optional) die Seite der Form, an der eine andere Form angebunden wird ("*top*", "*bottom*", "*left*", "*right*", "*center*")
- `cornersRadius` - (optional) der Radius der abgerundeten Ecken eines Verbinders
- `customGap` - (optional) legt den Abstand von der Form zur rechtwinkligen Biegung einer Verbindungslinie fest
- `points` - (optional) legt ein Array mit Punktobjekten für eine Linie fest. Jedes Objekt enthält die folgenden Eigenschaften:
    - `x` - (erforderlich) die x-Koordinate des Punkts
    - `y` - (erforderlich) die y-Koordinate des Punkts
    - `custom` - (optional) legt fest, ob der Punkt fixiert ist. Wenn *true*, kann die Position des Punkts nur nach einer Interaktion mit ihm geändert werden

### Beispiel {#example}

~~~jsx
const data = [
    // Formen konfigurieren
    { "id": 1, "x": 200, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 200, "y": 320, "text": "Call Client and \n set-up Appointment", "type": "process" },
    // Linien konfigurieren
    {
        "type": "line",
        "stroke": "#0AB169",
        "connectType": "straight",
        "from": 1,
        "to": 2,
        "fromSide": "bottom",
        "toSide": "top",
        "forwardArrow": "filled"
    }
];
~~~

## Eigenschaften speziell für Links im PERT-Modus {#properties-specific-for-links-in-the-pert-mode}

### Verwendung {#usage-2}

~~~jsx
const dataset = {
    data: [...], // ein Array von Formen (Aufgaben, Meilensteine, Projekte)
    links: [
        // Linkobjekt
        {
            id?: string | number,
            source: string | number,
            target: string | number
        },
        // weitere Linkobjekte
    ]
}
~~~

### Beschreibung {#description-2}

Bei der Vorbereitung eines Datensatzes für Links, die im PERT-Modus in das Diagramm geladen werden, können Sie dem Konfigurationsobjekt eines Links die folgenden Eigenschaften hinzufügen:

- `id` - (optional) die ID eines Linkverbinders
- `source` - (erforderlich) die ID einer Aufgabe, von der der Link ausgeht
- `target` - (erforderlich) die ID einer Aufgabe, bei der der Link endet

:::info Wichtig
Beachten Sie, dass im PERT-Diagramm nur Links vom `type: "0"` ("finish" -> "start") unterstützt werden. Alle anderen [im DHTMLX-Gantt-Diagramm verwendeten Linktypen](https://docs.dhtmlx.com/gantt/desktop__link_properties.html) werden ebenfalls als `type: "0"` verarbeitet.
:::

:::tip
Beachten Sie, dass, da die IDs der Elemente in der Datensammlung von Diagram eindeutig sein müssen, beim Laden von Daten oder beim Hinzufügen eines neuen Links das Präfix `$link` an die vorhandene ID eines Links angehängt wird.

Zum Beispiel:

~~~jsx
{
    data: [...],
    links: [
        { id: "1" }, // wird im Diagramm als "$link:1" verfügbar sein
    ]
}

// diagram.data.getItem("$link:1");
~~~
:::

### Beispiel {#example-1}

~~~jsx {11-16}
const dataset = {
    data: [
        // Projektform konfigurieren
        { id: "1", text: "Project #1", type: "project", parent: null },
        // Aufgabenformen konfigurieren
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // Linkobjekte konfigurieren
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
};
~~~

**Changelog**:

- Der Verbindertyp `links`, der im PERT-Modus von Diagram verwendet wird, wurde in v6.1 hinzugefügt
- Die Eigenschaft `title` des `line`-Objekts ist seit v6.0 veraltet

**Verwandter Artikel**: [Konfigurieren von Linien](/lines/)
