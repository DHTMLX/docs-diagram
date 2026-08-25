---
sidebar_label: Swimlanes
title: Swimlanes
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über Swimlanes. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Swimlanes {#swimlanes}

## Swimlane-Übersicht {#swimlane-overview}

Eine Swimlane stellt ein rechteckiges Element des Diagram dar, das aus Zellen (oder Spuren) besteht, die vertikal oder horizontal angeordnet sind. Jede Zelle (*type: "$sgroup"*) kann untergeordnete Elemente wie Formen oder Groups enthalten.

:::note
Swimlanes sind nur im Standardmodus von Diagram/Diagram Editor verfügbar (type: `"default"`).
:::

<iframe src="https://snippet.dhtmlx.com/z6x5m3gb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

Swimlanes helfen Ihnen, jeden Prozess (geschäftlich, fertigungsbezogen, dienstleistungsbezogen oder jeden anderen) oder seine einzelnen Teile von Anfang bis Ende zu visualisieren.

## Swimlanes erstellen {#creating-swimlanes}

Um eine Swimlane zu erstellen, müssen Sie `type: "$swimlane"`  und die Struktur des Swimlane-Layouts innerhalb des Swimlane-Objekts definieren, während Sie einen Datensatz zum Laden in das Diagram vorbereiten:

~~~jsx
const data = [
    // Swimlane konfigurieren
    {
        type: "$swimlane",
        height: 500,
        width: 850,
        // das Layout einer Swimlane muss mindestens eine Zelle enthalten
        layout: [
            [1] // die Zelle mit id:"1" und type:"$sgroup"
        ]
    }
];

// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

Das obige Codebeispiel zeigt die einfachste Konfiguration einer Swimlane mit Standardeinstellungen (d. h. ohne Kopfzeile und Zwischenüberschrift).

### Swimlane-Struktur {#swimlane-structure}

Die Struktur einer Swimlane kann sehr unterschiedlich sein. Sie wird über die Konfigurationseigenschaft [layout](swimlanes/configuration_properties.md) des Swimlane-Objekts definiert. Mit dieser Eigenschaft können Sie die Zellen einer Swimlane in Zeilen und Spalten anordnen.

Sie müssen lediglich ein Array mit einer Matrix als Wert der Eigenschaft angeben. Die Matrix kann entweder ein Array sein:

~~~jsx
// eine Swimlane mit 3 Spalten
layout: [
    [1, 2, 3]
]
~~~

oder eine Reihe von durch Kommas getrennten Arrays:

~~~jsx
// eine Swimlane mit 2 Zeilen und 3 Spalten
layout: [
    [1, 2, 3],
    [4, 5, 6]
]
~~~

wobei:

- jede Zelle im Layout eine eindeutige Nummer hat;
- die Anzahl der Arrays die Anzahl der Zeilen bestimmt (wenn es mehrere Arrays gibt, muss die Anzahl der Zellen in allen Arrays gleich sein);
- die Anzahl der Zellen im Array die Anzahl der Spalten bestimmt.

### Eigenschaften eines Swimlane-Objekts {#properties-of-a-swimlane-object}

Sehen Sie sich die [vollständige Liste der Konfigurationseigenschaften eines Swimlane-Objekts](swimlanes/configuration_properties.md) an, um je nach Bedarf verschiedene Swimlanes mit unterschiedlichen Einstellungen erstellen zu können.

## Swimlane-Zelle konfigurieren {#configuring-a-swimlane-cell}

Wenn Sie eine Swimlane auf der Seite initialisieren, werden die ID einer Swimlane-Zelle sowie ihre Konfiguration automatisch generiert. Um die Standardkonfiguration der Zelle zu ändern, erstellen Sie ein Objekt der Zelle, das die Attribute `type: "$sgroup"` und `id` enthalten muss, und geben Sie dort die erforderlichen Konfigurationseinstellungen an:

~~~jsx
const data = [
    // Swimlane konfigurieren
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 850,
        layout: [
            [1, 2, 3]
        ]
    },
    // Swimlane-Zelle konfigurieren
    {
        type: "$sgroup",
        id: 3,
        style: {
            fill: "#D4DAE4"
        }
    }
];
~~~

### Eigenschaften eines Zellenobjekts {#properties-of-a-cell-object}

Sehen Sie sich die [vollständige Liste der Konfigurationseigenschaften einer Swimlane-Zelle](swimlanes/configuration_properties.md#properties-of-a-swimlane-cell) an.

## Zellen gruppieren {#grouping-cells}

Wenn Sie für jede Zelle eine eindeutige Nummer angeben, werden alle Zellen mit Rändern gerendert:

~~~jsx
layout: [
    [1, 2, 3],
    [4, 5, 6]
]
~~~

![](/img/swimlane_cells.png)

Bei Bedarf können Sie einen Bereich von Zellen gruppieren und die Ränder zwischen ihnen entfernen. Wählen Sie dazu eine beliebige Zelle aus dem Bereich aus und ersetzen Sie die eindeutigen Nummern der Zelle(n) aus dem Bereich durch die Nummer dieser Zelle.<br/>
Hier ist ein Beispiel für die Gruppierung der ersten beiden Zellen in der ersten Zeile:

~~~jsx
layout: [
    [1, 1, 3],
    [4, 5, 6]
]
~~~

Das Ergebnis sieht folgendermaßen aus:

![](/img/swimlane_merge_cell_row.png)

Hier ist ein Beispiel für die Gruppierung der Zellen in der zweiten Spalte:

~~~jsx
layout: [
    [1, 2, 3],
    [4, 2, 6]
]
~~~

Das Ergebnis:

![](/img/swimlane_merge_cell_col.png)

**Verwandtes Beispiel**:	[Diagram Editor. Standardmodus. Spalten und Zeilen in Swimlanes konfigurieren](https://snippet.dhtmlx.com/uzx5ulal)

## Größen einer Swimlane und ihrer Zellen {#sizes-of-a-swimlane-and-its-cells}

Die Größe der Swimlane wird durch die Konfigurationsattribute `width` und `height` der Swimlane bestimmt.

~~~jsx
const data = [
    // Swimlane konfigurieren
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 850,
        layout: [
            [1, 2, 3]
        ]
    }
];
~~~

### Zellenbreite {#cell-width}

Die Breite einer Zelle hängt von der Breite der Swimlane, der Anzahl der Spalten und der Höhe der linken/rechten Swimlane-Kopfzeile und -Zwischenüberschrift ab. Zum Beispiel:

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 830,
        layout: [
            // 3 Spalten
            [1, 2, 3]
        ],
        header: {
            position: "left",
            height: 40
        },
        subHeaderRows: {
            enable: true,
            position: "left",
            height: 40
        }
    }
];
~~~

Die Breite jeder Zelle kann als *(830-40-40)/3 = 250* berechnet werden.

### Zellenhöhe {#cell-height}

Die Höhe einer Zelle hängt von der Höhe der Swimlane, der Anzahl der Zeilen und der Höhe der oberen/unteren Swimlane-Kopfzeile und -Zwischenüberschrift ab. Zum Beispiel:

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 830,
        layout: [
            // 2 Zeilen
            [1, 2, 3],
            [4, 5, 6]
        ],
        header: {
            position: "top",
            height: 40
        },
        subHeaderCols: {
            enable: true,
            position: "top",
            height: 40
        }
    }
];
~~~

Die Höhe jeder Zelle kann als *(500-40-40)/2 = 210* berechnet werden.
