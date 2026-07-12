---
sidebar_label: LineTitle-Eigenschaften
title: LineTitle-Eigenschaften
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die LineTitle-Eigenschaften. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# LineTitle-Eigenschaften {#linetitle-properties}

:::note
Geben Sie Farbwerte im HEX-Format an.
:::

### Verwendung {#usage}

~~~jsx
const data = [
    // LineTitle-Objekt
    {
        type: "lineTitle",
        id?: string | number,
        text: string,
        parent: string | number,

        distance?: number, // standardmäßig 50
        autoPosition?: boolean, // standardmäßig true
        editable?: boolean, // standardmäßig true
        fixed?: boolean, // standardmäßig false
        hidden?: boolean, // standardmäßig false

        fill?: string,
        fontSize?: string | number, // standardmäßig 14
        lineHeight?: string | number, // standardmäßig 14
        fontStyle?: "normal" | "italic" | "oblique", // standardmäßig "normal"
        fontColor?: string, // standardmäßig "#4C4C4C"
        fontWeight?: string, // standardmäßig "500"
        textAlign?: "center" | "left" | "right" // standardmäßig "center"
    },
    // weitere Linienobjekte
];
~~~

### Beschreibung {#description}

Jedes LineTitle-Objekt kann die folgenden Eigenschaften enthalten:

- `type` - (erforderlich) der Typ des Elements, setzen Sie ihn auf `"lineTitle"`
- `id` - (optional) die ID des LineTitle, standardmäßig automatisch generiert
- `parent` - (erforderlich) die ID der Linie, für die der Titel angezeigt werden soll
- `text` - (erforderlich) der Text des LineTitle
- `distance` - (optional) legt den Abstand zum Anzeigepunkt des Titels auf der Linie im Bereich von 0 bis 100 fest, standardmäßig 50
- `autoPosition` - (optional) legt die Richtung des Textes fest: bei *true* entspricht die Richtung des Textes der Richtung der Linie, bei *false* ist die Richtung des Textes immer horizontal; standardmäßig *true*
- `editable` - (optional) aktiviert/deaktiviert die Möglichkeit, den Text des Elements durch Doppelklick zu bearbeiten, standardmäßig *true*
- `fixed` - (optional) aktiviert/deaktiviert die Möglichkeit, den Text des Elements mit dem angegebenen Wert von `distance` zu fixieren, standardmäßig *false*
- `hidden` - (optional) legt fest, ob der Text ausgeblendet wird, standardmäßig *false*
- `fill` - (optional) die Hintergrundfarbe des LineTitle-Elements
- `fontSize` - (optional) die Schriftgröße, standardmäßig 14
- `lineHeight` - (optional) die Höhe der Textzeile, standardmäßig 14
- `fontStyle` - (optional) der Stil der Textschrift: `"normal"` (Standard), `"italic"`, `"oblique"`
- `fontColor` - (optional) die Farbe der Textschrift, standardmäßig "#4C4C4C"
- `fontWeight` - (optional) die Schriftstärke des Textes, mögliche Werte sind: `"normal"`, `"bold"`, `"bolder"`, `"lighter"`; Werte `"100"`-`"900"`, wobei `"400"` normal entspricht und `"600"`+ die fetteste Schrift ist; standardmäßig `"500"`
- `textAlign` - (optional) die Ausrichtung des Textes: `"center"` (Standard), `"left"`, `"right"`

### Beispiel {#example}

~~~jsx
const data = [
    // Formen konfigurieren
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },

    // Linien konfigurieren
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },

    // LineTitles konfigurieren
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Some text" }
];
~~~

**Verwandter Artikel**: [LineTitles konfigurieren](/line_titles/)
