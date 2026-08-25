---
sidebar_label: Swimlane-Eigenschaften
title: Swimlane- und Swimlane-Zellen-Eigenschaften
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die Swimlane- und Swimlane-Zellen-Eigenschaften. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Swimlane- und Swimlane-Zellen-Eigenschaften {#swimlane-and-swimlane-cell-properties}

:::note
Geben Sie Farbwerte im HEX-Format an.
:::

## Eigenschaften einer Swimlane {#properties-of-a-swimlane}

### Verwendung {#usage}

~~~jsx
const data = [
    // Swimlane-Objekt
    {
        type: "$swimlane",
        id?: string | number,
        width: number,
        height: number,
        x?: number,
        y?: number,
        layout: array,
        fixed?: boolean,
        open?: boolean, // standardmäßig true
        style?: {
            strokeWidth?: number, // standardmäßig 1
            stroke?: string,
            fill?: string
        },
        header?: {
            height?: number, // standardmäßig 40
            fill?: string,
            text?: string,
            fontSize?: number, // standardmäßig 14
            lineHeight?: number, // standardmäßig 14
            textAlign?: "left" | "center" | "right", // standardmäßig "center"
            textVerticalAlign?: "top" | "center" | "bottom", // standardmäßig "center"
            fontStyle?: "normal" | "italic" | "oblique", // standardmäßig "normal"
            fontColor?: string, // standardmäßig "#4C4C4C"
            fontWeight?: string, // standardmäßig "500"
            iconColor?: string, // standardmäßig "#808080"
            position?: "top" | "bottom" | "left" | "right",
            editable?: boolean, // standardmäßig true
            closable?: boolean, // standardmäßig false
            enable?: boolean // standardmäßig true
        },
        subHeaderRows?: {
            height?: number | string, // standardmäßig 40
            position?: "left" | "right",
            enable?: boolean, // standardmäßig true
            fill?: string,
            fontSize?: number, // standardmäßig 14
            lineHeight?: number, // standardmäßig 14
            textAlign?: "left" | "center" | "right", // standardmäßig "center"
            textVerticalAlign?: "top" | "center" | "bottom", // standardmäßig "center"
            fontStyle?: "normal" | "italic" | "oblique", // standardmäßig "normal"
            fontColor?: string, // standardmäßig "#4C4C4C"
            fontWeight?: string, // standardmäßig "500"
            iconColor?: string, // standardmäßig "#808080"
            editable?: boolean, // standardmäßig true
            headers?: [
                // Kopfzeilenobjekt
                {
                    id?: string,
                    text: string,
                    fill?: string,
                    fontSize?: number, // standardmäßig 14
                    lineHeight?: number, // standardmäßig 14
                    textAlign?: "left" | "center" | "right", // standardmäßig "center"
                    textVerticalAlign?: "top" | "center" | "bottom", // standardmäßig "center"
                    fontStyle?: "normal" | "italic" | "oblique", // standardmäßig "normal"
                    fontColor?: string, // standardmäßig "#4C4C4C"
                    fontWeight?: string, // standardmäßig "500"
                    iconColor?: string, // standardmäßig "#808080"
                    editable?: boolean // standardmäßig true
                },
                // weitere Kopfzeilenobjekte
            ]
        },
        subHeaderCols?: {
            position?: "top" | "bottom",
            // ... die übrigen Attribute entsprechen denen von subHeaderRows
        },
        [key: string]?: any
    }
    // weitere Swimlane-Objekte
];
~~~

### Beschreibung {#description}

Jedes Swimlane-Objekt kann die folgenden Konfigurationseigenschaften enthalten:

- `type` - (erforderlich) der Typ eines Elements, setzen Sie ihn auf "$swimlane"
- `id` - (optional) die eindeutige ID einer Swimlane
- `width` - (erforderlich) die Breite der Swimlane, einschließlich ihrer Kopfzeile (*position: left/right*)
- `height` - (erforderlich) die Höhe der Swimlane, einschließlich ihrer Kopfzeile (*position: top/bottom*)
- `x` - (optional) die x-Koordinate der Swimlane-Position
- `y` - (optional) die y-Koordinate der Swimlane-Position
- `layout` - (erforderlich) ein Array mit der Matrixdarstellung der Zellen der Swimlane
- `fixed` - (optional) aktiviert/deaktiviert die Möglichkeit, die Swimlane zu verschieben und ihre Größe zu ändern; standardmäßig *false*
- `open` - (optional) legt fest, ob die Swimlane im erweiterten (*true*, Standard) oder eingeklappten (*false*) Zustand initialisiert wird
:::tip
Die Eigenschaft `open` funktioniert, wenn ein `header` mit dem Attribut `closable` initialisiert wurde
:::
- `style` - (optional) ein Objekt mit den Stileinstellungen der Swimlane. Das Objekt kann die folgenden Attribute enthalten:
    - `strokeWidth` - (optional) die Breite des Swimlane-Rahmens, standardmäßig 1
    - `stroke` - (optional) die Farbe des Rahmens der Swimlane, standardmäßig "#DEDEDE"
    - `fill` - (optional) die Hintergrundfarbe für alle Zellen der Swimlane
- `header` - (optional) ein Objekt mit den Konfigurationsattributen der Kopfzeile der Swimlane. Die Attribute sind:
    - `height` - (optional) die Höhe der Kopfzeile, standardmäßig 40
    - `fill` - (optional) die Hintergrundfarbe der Kopfzeile
    - `text` - (optional) der in der Kopfzeile anzuzeigende Text
    - `fontSize` - (optional) die Schriftgröße in Pixeln, standardmäßig 14
    - `lineHeight` - (optional) die Höhe einer Zeile, standardmäßig 14
    - `textAlign` - (optional) die Ausrichtung des Textes in der Kopfzeile: `"left"`, `"center"` (Standard), `"right"`
    - `textVerticalAlign` - (optional) die vertikale Ausrichtung des Textes in der Kopfzeile: `"top"`, `"center"` (Standard), `"bottom"`
    - `fontStyle` - (optional) der Stil der Textschrift: `"normal"` (Standard), `"italic"`, `"oblique"`
    - `fontColor` - (optional) die Farbe der Textschrift, standardmäßig "#4C4C4C"
    - `fontWeight` - (optional) die Schriftstärke des Textes, mögliche Werte sind: `"normal"`, `"bold"`, `"bolder"`, `"lighter"`, Werte `"100"`-`"900"`, wobei `"400"` normal entspricht und `"600"`+ die fetteste Schrift ist; standardmäßig `"500"`
    - `iconColor` - (optional) die Farbe des Symbols der Kopfzeile, standardmäßig "#808080"
    - `position` - (optional) die Positionierung der Swimlane-Kopfzeile: `"top"` (Standard) | `"bottom"` | `"left"` | `"right"`
    - `editable` - (optional) aktiviert/deaktiviert die Möglichkeit, den Text der Kopfzeile durch Doppelklick zu bearbeiten; standardmäßig *true*
    - `closable` - (optional) zeigt/verbirgt ein Symbol zum Erweitern/Einklappen einer Swimlane; standardmäßig *false*
    - `enable` - (optional) zeigt/verbirgt die Kopfzeile der Swimlane; standardmäßig *true*
- `subHeaderRows` - (optional) ein Objekt mit den Konfigurationseinstellungen der linken/rechten Zwischenüberschriften der Swimlane. Das Objekt hat die folgenden Attribute:
    - `height` - (optional) die Höhe der Zwischenüberschriften, standardmäßig 40
    - `position` - (optional) die Positionierung der Zwischenüberschriften: `"left"` | `"right"`
    - `enable` - (optional) zeigt/verbirgt die Zwischenüberschriften der Swimlane; standardmäßig *true*
    - `fill` - (optional) die Hintergrundfarbe der Zwischenüberschriften
    - `fontSize` - (optional) die Schriftgröße in Pixeln, standardmäßig 14
    - `lineHeight` - (optional) die Höhe einer Zeile, standardmäßig 14
    - `textAlign` - (optional) die Ausrichtung des Textes in den Zwischenüberschriften: `"left"`, `"center"` (Standard), `"right"`
    - `textVerticalAlign` - (optional) die vertikale Ausrichtung des Textes in den Zwischenüberschriften: `"top"`, `"center"` (Standard), `"bottom"`
    - `fontStyle` - (optional) der Stil der Textschrift: `"normal"` (Standard), `"italic"`, `"oblique"`
    - `fontColor` - (optional) die Farbe der Textschrift, standardmäßig "#4C4C4C"
    - `fontWeight` - (optional) die Schriftstärke des Textes, mögliche Werte sind: `"normal"`, `"bold"`, `"bolder"`, `"lighter"`, Werte `"100"`-`"900"`, wobei `"400"` normal entspricht und `"600"`+ die fetteste Schrift ist; standardmäßig `"500"`
    - `iconColor` - (optional) die Farbe des Symbols der Zwischenüberschriften, standardmäßig "#808080"
    - `editable` - (optional) aktiviert/deaktiviert die Möglichkeit, den Text der Zwischenüberschriften durch Doppelklick zu bearbeiten; standardmäßig *true*
    - `headers` - (optional) ein Array von Objekten der Zwischenüberschriften. Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `id` - (optional) die ID der Zwischenüberschrift
        - `text` - (erforderlich) der in der Zwischenüberschrift anzuzeigende Text
        - `fill` - (optional) die Hintergrundfarbe der Zwischenüberschrift
        - `fontSize` - (optional) die Schriftgröße in Pixeln, standardmäßig 14
        - `lineHeight` - (optional) die Höhe einer Zeile, standardmäßig 14
        - `textAlign` - (optional) die Ausrichtung des Textes in der Zwischenüberschrift: `"left"`, `"center"` (Standard), `"right"`
        - `textVerticalAlign` - (optional) die vertikale Ausrichtung des Textes in der Zwischenüberschrift: `"top"`, `"center"` (Standard), `"bottom"`
        - `fontStyle` - (optional) der Stil der Textschrift: `"normal"` (Standard), `"italic"`, `"oblique"`
        - `fontColor` - (optional) die Farbe der Textschrift, standardmäßig "#4C4C4C"
        - `fontWeight` - (optional) die Schriftstärke des Textes, mögliche Werte sind: `"normal"`, `"bold"`, `"bolder"`, `"lighter"`, Werte `"100"`-`"900"`, wobei `"400"` normal entspricht und `"600"`+ die fetteste Schrift ist; standardmäßig `"500"`
        - `iconColor` - (optional) die Farbe des Symbols der Zwischenüberschrift, standardmäßig "#808080"
        - `editable` - (optional) aktiviert/deaktiviert die Möglichkeit, den Text der Zwischenüberschrift durch Doppelklick zu bearbeiten; standardmäßig *true*
- `subHeaderCols` - (optional) ein Objekt mit den Konfigurationseinstellungen der oberen/unteren Zwischenüberschriften der Swimlane. Das Objekt hat das folgende Attribut:
    - `position` - (optional) die Positionierung der Zwischenüberschriften: `"top"` | `"bottom"`
    - die übrigen Attribute von `subHeaderCols` entsprechen denen von `subHeaderRows` (siehe Details oben)
- `key` - (optional) eine benutzerdefinierte Eigenschaft mit Ihrer eigenen Logik, die intern implementiert wird

### Beispiel {#example}

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
    }
];
~~~

## Eigenschaften einer Swimlane-Zelle {#properties-of-a-swimlane-cell}

### Verwendung {#usage-1}

~~~jsx
const data = [
    // Swimlane-Zellen-Objekt
    {
        type: "$sgroup",
        id?: string | number,
        groupChildren?: array,
        style?: {
            fill?: string,
            overFill?: string,
            partiallyFill?: string
        },
        exitArea?: {
            groupBehavior?: "unbound" | "boundNoBorderExtension", // standardmäßig "unbound"
            padding?: number
        }
    },
    // weitere Objekte von Swimlane-Zellen
];
~~~

### Beschreibung {#description-1}

Die Konfigurationseigenschaften einer Swimlane-Zelle sind im Folgenden aufgeführt:

- `type` - (erforderlich) der Typ einer Swimlane-Zelle, setzen Sie ihn auf "$sgroup"
- `id` - (optional) die eindeutige ID einer Swimlane-Zelle
- `groupChildren` - (optional) ein Array mit den IDs der untergeordneten Elemente der ersten Ebene einer Zelle
- `style` - (optional) ein Objekt mit den Stileinstellungen der Zelle. Das Objekt kann die folgenden Eigenschaften enthalten:
    - `fill` - (optional) die Hintergrundfarbe der Zelle
    - `overFill` - (optional) die Hintergrundfarbe der Zelle, wenn der Benutzer das Element hält und es in die Zelle hinein bzw. aus ihr heraus bewegt, *vorausgesetzt, dass sich mindestens 75 % der Fläche des Elements innerhalb der Zelle befinden*
    - `partiallyFill` - (optional) die Hintergrundfarbe der Zelle, wenn der Benutzer das Element hält und es in die Zelle hinein bzw. aus ihr heraus bewegt, *vorausgesetzt, dass sich 75 % oder mehr der Fläche des Elements außerhalb der Zelle befinden und keine anderen Einstellungen über das Attribut `exitArea` definiert sind*
- `exitArea` - (optional) ein Objekt mit den Einstellungen, die auf das Element angewendet werden, wenn der Benutzer es aus der Zelle herauszieht (*wird nur auf die untergeordneten Elemente der ersten Ebene der Zelle angewendet*). Das Objekt kann die folgenden Attribute enthalten:
    - `groupBehavior` - (optional) das Verhalten des untergeordneten Elements der Zelle, wenn der Benutzer es aus der Zelle herausbewegt:
        - `"unbound"` (Standard) - der Benutzer kann ein Element in die Zelle hinein oder aus ihr heraus bewegen
        - `"boundNoBorderExtension"` - der Benutzer kann ein Element in die Zelle hineinbewegen, kann es jedoch nicht aus der Zelle herausziehen, wenn es bereits innerhalb der Zelle abgelegt wurde. Das Element erweitert die Ränder der Zelle nicht, wenn der Benutzer versucht, es aus der Zelle herauszuziehen
    - `padding` - (optional) definiert den Abstand zwischen der Zelle und dem Rand des Elements, wenn das Element innerhalb der Zelle verschoben wird. <br/>
    :::tip
    Das Attribut `padding` ist verfügbar, wenn `groupBehavior` auf `"boundNoBorderExtension"` gesetzt ist
    :::

### Beispiel {#example-1}

~~~jsx
const data = [
  // Swimlane konfigurieren
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "layout": [
            [1, 2, 3, 4]
        ]
    },
    // Zelle der Swimlane konfigurieren
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
    // Form konfigurieren, die in die Zelle eingefügt werden soll
    {
        "id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
    }
];
~~~

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)

**Verwandte Beispiele**:

- [Diagram. Standardmodus. Spiellevel und -orte](https://snippet.dhtmlx.com/1h4j9gb3?tag=diagram&mode=wide)
- [Diagram. Standardmodus. Swimlane-Vorlage](https://snippet.dhtmlx.com/z6x5m3gb?tag=diagram&mode=wide)
- [Diagram. Standardmodus. Wasserfalldiagramm-Vorlage](https://snippet.dhtmlx.com/k5vlvj8i?tag=diagram&mode=wide)
- [Diagram. Standardmodus. Eisenhower-Matrix-Beispiel](https://snippet.dhtmlx.com/yfvccvc4?mode=wide)<br/>Lesen Sie die Details im Artikel [How to Build a JavaScript Eisenhower Matrix with DHTMLX](https://dhtmlx.com/blog/build-javascript-eisenhower-matrix-dhtmlx/)
