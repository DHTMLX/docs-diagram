---
sidebar_label: Group-Eigenschaften
title: Group-Eigenschaften
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die Group-Eigenschaften. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Group-Eigenschaften {#group-properties}

:::note
Geben Sie Farbwerte im HEX-Format an.
:::

### Verwendung {#usage}

~~~jsx
const data = [
    // Group-Objekt
    {
        type: "$group",
        id?: string | number,
        x?: number,
        y?: number,
        width: number,
        height: number,
        groupChildren?: array,
        open?: boolean, // standardmäßig true
        fixed?: boolean, // standardmäßig false
        style?: {
            strokeWidth?: number, // standardmäßig 1
            stroke?: string, // standardmäßig "#DEDEDE"
            fill?: string,
            overFill?: string,
            partiallyFill?: string
        },
        exitArea?: {
            // standardmäßig "unbound"
            groupBehavior?: "unbound" | "boundNoBorderExtension" | "boundBorderExtension",
            padding?: number
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
            position?: "top" | "bottom" | "left" | "right", // standardmäßig "top"
            editable?: boolean, // standardmäßig true
            closable?: boolean, // standardmäßig false
            enable?: boolean // standardmäßig true
        },
        [key: string]?: any
    },
    // weitere Group-Objekte
];
~~~

### Beschreibung {#description}

Ein Group-Objekt enthält eine Liste von Konfigurationseigenschaften, mit denen Sie die Positionierung und das Erscheinungsbild der Group konfigurieren können:

- `type` - (erforderlich) der Typ eines Elements, setzen Sie ihn auf "$group"
- `id` - (optional) die eindeutige ID einer Group
- `x` - (optional) die x-Koordinate der Group-Position
- `y` - (optional) die y-Koordinate der Group-Position
- `width` - (erforderlich) die Breite der Group, einschließlich ihrer Kopfzeile (*position: left/right*)
- `height` - (erforderlich) die Höhe der Group, einschließlich ihrer Kopfzeile (*position: top/bottom*)
- `groupChildren` - (optional) ein Array mit den IDs der untergeordneten Elemente der ersten Ebene der Group
- `open` - (optional) legt fest, ob die Group im erweiterten (*true*, Standard) oder eingeklappten (*false*) Zustand initialisiert wird
:::tip
Die Eigenschaft `open` funktioniert, wenn ein `header` mit dem Attribut `closable` initialisiert wurde
:::
- `fixed` - (optional) aktiviert/deaktiviert die Möglichkeit, die Group zu verschieben und ihre Größe zu ändern; standardmäßig *false*
- `style` - (optional) ein Objekt mit den Stileinstellungen der Group. Das Objekt kann die folgenden Attribute enthalten:
    - `strokeWidth` - (optional) die Breite des Group-Rahmens, standardmäßig 1
    - `stroke` - (optional) die Farbe des Rahmens der Group, standardmäßig "#DEDEDE"
    - `fill` - (optional) die Hintergrundfarbe der Group
    - `overFill` - (optional) die Hintergrundfarbe der Group, wenn der Benutzer das Element hält und es in die Group hinein bzw. aus ihr heraus bewegt, *vorausgesetzt, dass sich das gesamte Element innerhalb der Group befindet*
    - `partiallyFill` - (optional) die Hintergrundfarbe der Group, wenn der Benutzer das Element hält und es in die Group hinein bzw. aus ihr heraus bewegt, *vorausgesetzt, dass sich ein Teil des Elements außerhalb der Group befindet und keine anderen Einstellungen über das Attribut `exitArea` definiert sind*
- `exitArea` - (optional) ein Objekt mit den Einstellungen, die auf das Element angewendet werden, wenn der Benutzer es aus der Group herauszieht (*wird nur auf die untergeordneten Elemente der ersten Ebene der Group angewendet*). Das Objekt kann die folgenden Attribute enthalten:
    - `groupBehavior` - (optional) das Verhalten des untergeordneten Elements der Group, wenn der Benutzer es aus der Group herausbewegt:
        - `"unbound"` (Standard) - der Benutzer kann ein Element in die Group hinein oder aus ihr heraus bewegen
        - `"boundNoBorderExtension"` - der Benutzer kann ein Element in die Group hineinbewegen, kann es jedoch nicht aus der Group herausziehen, wenn es bereits innerhalb der Group abgelegt wurde. Das Element erweitert die Ränder der Group nicht, wenn der Benutzer versucht, es aus der Group herauszuziehen
        - `"boundBorderExtension"` - der Benutzer kann ein Element in die Group hineinbewegen, kann es jedoch nicht aus der Group herausziehen, wenn es bereits innerhalb der Group abgelegt wurde. Das Element erweitert die Ränder der Group, wenn der Benutzer versucht, es aus der Group herauszuziehen <br/>**Verwandtes Beispiel**: [Diagram Editor. Standardmodus. Interaktion zwischen Groups und Formen](https://snippet.dhtmlx.com/4gxy38ek)
    - `padding` - (optional) definiert den Abstand zwischen der Group und dem Rand des Elements, wenn das Element innerhalb der Group verschoben wird
    :::tip
    Das Attribut `padding` ist verfügbar, wenn `groupBehavior` auf `"boundNoBorderExtension"` oder `"boundBorderExtension"` gesetzt ist
    :::
- `header` - (optional) ein Objekt mit den Konfigurationsattributen der Kopfzeile der Group. Die Attribute sind:
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
    - `position` - (optional) die Positionierung der Group-Kopfzeile: `"top"` (Standard) | `"bottom"` | `"left"` | `"right"`
    - `editable` - (optional) aktiviert/deaktiviert die Möglichkeit, den Text der Kopfzeile durch Doppelklick zu bearbeiten; standardmäßig *true*
    - `closable` - (optional) zeigt/verbirgt ein Symbol zum Erweitern/Einklappen einer Group; standardmäßig *false*
    - `enable` - (optional) zeigt/verbirgt die Kopfzeile der Group; standardmäßig *true*
- `key` - (optional) eine benutzerdefinierte Eigenschaft mit Ihrer eigenen Logik, die intern implementiert wird

### Beispiel {#example}

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "Top and collapsed header with tеxt alignment",
            editable: true,
            closable: true,
            textAlign: "left", // "left", "center", "right"
            textVerticalAlign: "center", // "top", "center", "bottom"
        },
      	// die untergeordneten Elemente der Group
        groupChildren: [1.1, 1.2],
        open: false
    },
  	// Formen konfigurieren, die in die Group eingefügt werden sollen
    { type: "rectangle", id: 1.1, x: 50, y: 75, text: "Shape 1.1" },
    { type: "rectangle", id: 1.2, x: 200, y: 75, text: "Shape 1.2" }
];
~~~

**Verwandter Artikel**: [Groups konfigurieren](/groups/)

## Spezifische Eigenschaften des "project"-Objekts {#properties-specific-for-project-object}

Das "project"-Objekt wird als Container für Aufgaben und Meilensteine verwendet. Es funktioniert wie eine [Group](/groups/), ermöglicht die Erstellung von PERT-Diagrammen mit verschiedenen Verschachtelungsebenen und bietet eine visuelle Gruppierung.

### Verwendung {#usage-1}

~~~jsx
const data = [
    // project-Objekt
    {
        type: "project",
        id: string | number,
        parent?: string | number | null,
        text?: string, // setzt die Eigenschaft header.text
        open?: boolean,

        // wird automatisch generiert
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        groupChildren?: (string | number)[],
        style?: {
            fill?: string, // standardmäßig "#20B56D08"
            stroke?: string, // standardmäßig "#20B56D33"
            borderStyle?: string, // standardmäßig "dashed"
        },
        header?: {
            height?: number, // standardmäßig 40
            text?: string, // wird automatisch durch die Eigenschaft text generiert
            closable?: boolean, // standardmäßig false
            enable?: boolean, // standardmäßig true
            fill?: string // standardmäßig "inherit"
        }
    },
    // weitere project-Objekte
]
~~~

### Beschreibung {#description-1}

Wenn Sie einen Datensatz für ein `"project"`-Objekt vorbereiten, können Sie die folgenden Konfigurationseigenschaften verwenden:

- `type` - (erforderlich) der Typ eines Elements, setzen Sie ihn auf `"project"`
- `id` - (optional) die eindeutige ID eines Projekts
- `parent` - (optional) die ID des übergeordneten Projekts
- `text` - (optional) die Beschreibung eines Projekts
- `open` - (optional) legt fest, ob das Projekt im erweiterten (*true*, Standard) oder eingeklappten (*false*) Zustand initialisiert wird

Die folgenden Eigenschaften werden automatisch generiert. Sie werden während des Renderings berechnet und sollten nicht manuell angegeben werden.

- `x` - (optional) die x-Koordinate der Projektposition
- `y` - (optional) die y-Koordinate der Projektposition
- `width` - (erforderlich) die Breite des Projekts, einschließlich seiner Kopfzeile (*position: left/right*)
- `height` - (erforderlich) die Höhe des Projekts, einschließlich seiner Kopfzeile (*position: top/bottom*)
- `groupChildren` - (optional) ein Array mit den IDs der untergeordneten Elemente der ersten Ebene des Projekts
- `style` - (optional) ein Objekt mit den Stileinstellungen des Projekts. Das Objekt kann die folgenden Attribute enthalten:
    - `fill` - (optional) die Hintergrundfarbe des Projekts
    - `stroke` - (optional) die Farbe des Rahmens des Projekts
    - `borderStyle` - (optional) der Stil des Projektrahmens
- `header` - (optional) ein Objekt mit den Konfigurationsattributen der Kopfzeile des Projekts. Die Attribute sind:
    - `height` - (optional) die Höhe der Kopfzeile, standardmäßig 40
    - `text` - (optional) der in der Kopfzeile anzuzeigende Text (wird automatisch durch die Eigenschaft `text` generiert)
    - `closable` - (optional) zeigt/verbirgt ein Symbol zum Erweitern/Einklappen einer Group; standardmäßig *false*
    - `enable` - (optional) zeigt/verbirgt die Kopfzeile des Projekts; standardmäßig *true*
    - `fill` - (optional) die Hintergrundfarbe der Kopfzeile

### Beispiel {#example-1}

~~~jsx
const data = [
    {
        "id": "4.2",
        "text": "QA Testing",
        "type": "project",
        "parent": "4",
        "start_date": new Date(2026, 1, 18),
        "duration": 3,
        "progress": 0,
        "open": true
    },
    {
        "id": "4.2.1",
        "text": "Functional Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 18),
        "duration": 2
    },
    {
        "id": "4.2.2",
        "text": "Usability Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 20),
        "duration": 1
    }
];
~~~

**Verwandter Artikel**: [Formen im PERT-Modus gruppieren](/groups/#grouping-shapes-in-the-pert-mode)
