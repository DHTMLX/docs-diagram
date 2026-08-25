---
sidebar_label: Formeigenschaften
title: Formeigenschaften
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die Formeigenschaften. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Formeigenschaften

:::note
Geben Sie Farbwerte im HEX-Format an.
:::

## Allgemeine Eigenschaften {#common-properties}

### Verwendung {#usage}

~~~jsx
const data = [
    // Formobjekt
    {
        type: string,
        id?: string | number,
        x?: number, // im Standardmodus von Diagram erforderlich
        y?: number, // im Standardmodus von Diagram erforderlich
        text?: string,
        editable?: boolean, // standardmäßig true
        height?: number,
        width?: number,
        fixed?: boolean, // standardmäßig false
        hidden?: boolean
    },
    // weitere Formobjekte
]
~~~

### Beschreibung {#description}

Jedes Formobjekt kann die folgenden Eigenschaften enthalten:

- `type` - (erforderlich) der Typ der Form (standardmäßig: `"rectangle"` im Standardmodus, `"card"` im Organigramm-Modus, `"topic"` im Mindmap-Modus, `"task"` im PERT-Modus)
- `id` - (optional) die eindeutige ID einer Form
- `x` - (optional) die x-Koordinate der Formposition. Die Eigenschaft ist im Standardmodus von Diagram **erforderlich**
- `y` - (optional) die y-Koordinate der Formposition. Die Eigenschaft ist im Standardmodus von Diagram **erforderlich**
- `text` - (optional) der Text, der in einer Form angezeigt wird
- `editable` - (optional) aktiviert/deaktiviert die Möglichkeit, den Text der Form per Doppelklick zu bearbeiten; standardmäßig *true*. <br/>*Die Eigenschaft ist für eine benutzerdefinierte Form nicht verfügbar.*
- `height` - (optional) die Höhe einer Form
- `width` - (optional) die Breite einer Form
- `fixed` - (optional) aktiviert/deaktiviert das Verschieben und die Größenänderung einer Form, standardmäßig *false*
- `hidden` - (optional) legt fest, ob eine Form ausgeblendet wird

:::note
Die Werte von `height` und `width` werden für eine `"text"`/`"topic"`-Form automatisch abhängig vom Inhalt der Form berechnet.
:::

## Benutzerdefinierte Eigenschaften {#custom-properties}

### Verwendung {#usage-1}

~~~jsx
const data = [
    // Formobjekt
    {
        // ... allgemeine Eigenschaften
        [key: string]?: any, // benutzerdefinierte Eigenschaft
        // ... weitere benutzerdefinierte Eigenschaften
    },
    // weitere Formobjekte
]
~~~

### Beschreibung {#description-1}

Bei der Vorbereitung eines Datensatzes für eine benutzerdefinierte Form können Sie dem Konfigurationsobjekt einer Form beliebige benutzerdefinierte Eigenschaften hinzufügen:

- `key` - (optional) eine benutzerdefinierte Eigenschaft für eine benutzerdefinierte Form. Weitere Details finden Sie im Artikel [Benutzerdefinierte Form](shapes/custom_shape.md). <br/>*Verwenden Sie eindeutige Namen für benutzerdefinierte Eigenschaften. Das Überschreiben der internen Eigenschaften des Diagram-Formobjekts ist untersagt, da dies zu einer fehlerhaften Funktion des Diagramms und seines Editors führt.*

### Beispiel {#example}

~~~jsx
const data = [
    {
        "id": "main",
        "name": "Kristin Mccoy",
        "post": "Medical director",
        "phone": "(405) 555-0128",
        "mail": "kmccoy@gmail.com",
        "photo": "../img/avatar-01.jpg"
    }
];
~~~

## Eigenschaften speziell für den Standardmodus {#properties-specific-for-the-default-mode}

### Verwendung {#usage-2}

~~~jsx
const data = [
    // Formobjekt
    {
        // ... allgemeine Eigenschaften
        angle?: number,

        //entweder
        preview?: string,
        // oder
        preview?: {
            img?: string,
            width?: number | string,
            height?: number | string,
            gap?: number | string,
            scale?: number
        }
    },
    // weitere Formobjekte
]
~~~

### Beschreibung {#description-2}

Bei der Vorbereitung eines Datensatzes für Formen, die im Standardmodus in das Diagramm geladen werden, können Sie dem Konfigurationsobjekt einer Form die folgenden Eigenschaften hinzufügen:

- `angle` - (optional) der Rotationswinkel der Form
- `preview` - (optional) entweder ein Pfad zu einem Bild/ein Base64-Bild oder ein Objekt mit Einstellungen, [mit denen sich die in der Shapebar des Editors angezeigte Formvorschau konfigurieren lässt](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes). Als Objekt kann die Eigenschaft eine Reihe optionaler Eigenschaften enthalten:
  - `img` - (optional) ein Pfad zu einem Bild oder ein Base64-Bild
  - `width` - (optional) die Breite des Bildes
  - `height` - (optional) die Höhe des Bildes
  - `gap` - (optional) legt den Wert des Attributs `gap` der Eigenschaft [preview](api/diagram_editor/shapebar/config/preview_property.md) für den angegebenen Formtyp fest
  - `scale` - (optional) legt den Wert des Attributs `scale` der Eigenschaft [preview](api/diagram_editor/shapebar/config/preview_property.md) für den angegebenen Formtyp fest
   :::info
   Die Eigenschaft `scale` kann nicht zusammen mit den Eigenschaften `img`, `width`, `height` verwendet werden
   :::

### Beispiel {#example-1}

~~~jsx
const data = [
    { id: 1, x: 280, y: 0, text: "Start", type: "start", angle: 10 }
];
~~~

## Eigenschaften speziell für den Organigramm-Modus {#properties-specific-for-the-org-chart-mode}

### Verwendung {#usage-3}

~~~jsx
const data = [
    // Formobjekt
    {
        // ... allgemeine Eigenschaften
        parent?: string | number,
        dx?: number,
        dy?: number,
        dir?: string,
        open?: boolean, // standardmäßig true
        assistant?: boolean,
        partner?: boolean,
        catchItem?: boolean,
        giveItem?: boolean

    },
    // weitere Formobjekte
]
~~~

### Beschreibung {#description-3}

Bei der Vorbereitung eines Datensatzes für Formen, die im Organigramm-Modus in das Diagramm geladen werden, können Sie dem Konfigurationsobjekt einer Form die folgenden Eigenschaften hinzufügen:

- `parent` - (optional) die ID der übergeordneten Form
- `dx` - (optional) der linke Versatz der Form
- `dy` - (optional) der obere Versatz der Form
- `dir` - (optional) die Richtung der Formverbindung. Um Formen vertikal zu verbinden, setzen Sie das Attribut auf den Wert `"vertical"`
- `open` - (optional) legt fest, ob die untergeordneten Elemente der aktuellen Form angezeigt werden; standardmäßig *true*
- `assistant` - (optional) legt fest, ob die Form ein Assistenzelement für die übergeordnete Form ist
- `partner` - (optional) legt fest, ob die Form ein Partnerelement für die übergeordnete Form ist
- `catchItem` - (optional) legt fest, ob das Element ein sich bewegendes Element aufnehmen kann
- `giveItem` - (optional) legt fest, ob das Element verschoben werden kann

### Beispiel {#example-2}

~~~jsx
const data = [
    {
        "id": "1",
        "text": "item 1",
    },
    {
        "id": "2",
        "text": "item 2",
        "parent": "1",
        "dir": "vertical"
    },
    {
        "id": "1.1",
        "text": "assistant for 1",
        "parent": "1",
        "assistant": true
    },
    {
        "id": "1.2",
        "text": "partner for 1",
        "parent": "1",
        "partner": true
    }
];
~~~

**Verwandtes Beispiel**: [Diagram. Organigramm-Modus. Verschachtelte vertikale Listen](https://snippet.dhtmlx.com/98tzmzpg)

## Eigenschaften speziell für den Mindmap-Modus {#properties-specific-for-the-mindmap-mode}

### Verwendung {#usage-4}

~~~jsx
const data = [
    // Formobjekt
    {
        // ... allgemeine Eigenschaften
        parent?: string | number,
        dx?: number,
        dy?: number,
        open?: boolean, // standardmäßig true
        openDir?:{
            left?: boolean,
            right?: boolean
        },
        catchItem?: boolean,
        giveItem?: boolean
    },
    // weitere Formobjekte
]
~~~

### Beschreibung {#description-4}

Bei der Vorbereitung eines Datensatzes für Formen, die im Mindmap-Modus in das Diagramm geladen werden, können Sie dem Konfigurationsobjekt einer Form die folgenden Eigenschaften hinzufügen:

- `parent` - (optional) die ID der übergeordneten Form
- `dx` - (optional) der linke Versatz der Form
- `dy` - (optional) der obere Versatz der Form
- `open` - (optional) legt fest, ob die untergeordneten Elemente der aktuellen Form angezeigt werden; standardmäßig *true*
- `openDir` - (optional) blendet die untergeordneten Elemente der Wurzelform ein/aus. Das Objekt akzeptiert zwei Attribute:
    - `left` - (optional) blendet die untergeordneten Elemente links von der Wurzelform ein/aus
    - `right` - (optional) blendet die untergeordneten Elemente rechts von der Wurzelform ein/aus
- `catchItem` - (optional) legt fest, ob das Element ein sich bewegendes Element aufnehmen kann
- `giveItem` - (optional) legt fest, ob das Element verschoben werden kann

**Verwandtes Beispiel**: [Diagram Editor. Mindmap-Modus. Mindmap der Emotionen](https://snippet.dhtmlx.com/lo1vm0e8)

:::info
Weitere Details finden Sie im Artikel [Wie man mit der DHTMLX-Bibliothek ein JavaScript-Mindmap-Diagramm erstellt](https://dhtmlx.com/blog/create-javascript-mindmap-diagram-dhtmlx-library/)
:::

### Beispiel {#example-3}

~~~jsx
const data = [
    {
        id: "1",
        text: "main",
        openDir: {
            left: true,
            right: false
        }
    },
    {
        id: "2",
        text: "2",
        parent: "1",
        giveItem: false
    },
    {
        id: "3",
        text: "3",
        parent: "1",
        catchItem: false
    },
    {
        id: "4",
        text: "4",
        parent: "1"
    }
];
~~~

## Eigenschaften speziell für "text"-, "topic"- und Flussdiagramm-Formen {#properties-specific-for-text-topic-and-flow-chart-shapes}

### Verwendung {#usage-5}

~~~jsx
const data = [
    // Formobjekt
    {
        // ... allgemeine Eigenschaften
        fill?: string,
        stroke?: string,
        strokeWidth?: number, // standardmäßig 1
        strokeType?: "line" | "dash", // standardmäßig "line"
        strokeDash?: string,
        fontColor?: string,
        fontStyle?: "normal" | "italic" | "oblique", // standardmäßig "normal"
        fontWeight?: string, // standardmäßig "normal"
        fontSize?: number, // standardmäßig 14
        textAlign?: "left" | "center" | "right", // standardmäßig "center"
        textVerticalAlign?: "top" | "center" | "bottom", // standardmäßig "center"
        lineHeight?: number // standardmäßig 14
    },
    // weitere Formobjekte
]
~~~

### Beschreibung {#description-5}

Bei der Vorbereitung eines Datensatzes für `"text"`-, `"topic"`- und Flussdiagramm-Formen können Sie dem Konfigurationsobjekt einer Form die folgenden Eigenschaften hinzufügen:

- `fill` - (optional) die Farbe der Form
- `stroke` - (optional) die Farbe der Formumrandung
- `strokeWidth` - (optional) die Breite der Formumrandung, standardmäßig 1
- `strokeType` - (optional) der Typ der Umrandungslinie, `"line"` (Standard), `"dash"` für eine gestrichelte Linie
- `strokeDash` - (optional) das Muster aus Strichen und Abständen für eine gestrichelte Umrandung
- `fontColor` - (optional) die Farbe der Textschrift
- `fontStyle` - (optional) der Stil der Textschrift, möglich sind `"normal"` (Standard), `"italic"` oder `"oblique"`
- `fontWeight` - (optional) die Schriftstärke des Textes, mögliche Werte sind: `"normal"` (Standard), `"bold"`, `"bolder"`, `"lighter"`, Werte `"100"`-`"900"`, wobei `"400"` normal entspricht und `"600"`+ die fetteste Schrift ist
- `fontSize` - (optional) die Schriftgröße in Pixel, standardmäßig 14
- `textAlign` - (optional) die Textausrichtung in einer Form: `"left"`, `"center"` (Standard), `"right"`
- `textVerticalAlign` - (optional) die vertikale Textausrichtung in einer Form: `"top"`, `"center"` (Standard), `"bottom"`
- `lineHeight` - (optional) die Zeilenhöhe, standardmäßig 14

### Beispiel {#example-4}

~~~jsx
const data = [
    {
        "id": "u1585139915192",
        "type": "text",
        "x": 25,
        "y": 280,
        "text": "Investment decision",
        "width": 150,
        "height": 16,
        "lineHeight": 14,
        "fontSize": "16",
        "fontColor": "rgba(0,0,0,0.70)"
    }
];
~~~

## Eigenschaften speziell für "card"-Formen {#properties-specific-for-card-shapes}

### Verwendung {#usage-6}

~~~jsx
const data = [
    // Formobjekt
    {
        // ... allgemeine Eigenschaften
        headerColor?: string
    },
    // weitere Formobjekte
]
~~~

### Beschreibung {#description-6}

Bei der Vorbereitung eines Datensatzes für `"card"`-Formen können Sie dem Konfigurationsobjekt einer Form die folgenden Eigenschaften hinzufügen:

- `headerColor` - (optional) die Farbe des Kopfbereichs der Form

### Beispiel {#example-5}

~~~jsx
const data = [
    {
        "id": 1,
        "type": "card",
        "text": "item: 1",
    },
    {
        "id": 2,
        "type": "card",
        "text": "item: 2",
        "parent": 1,
        "headerColor": "#5874CD"
    },
];
~~~

## Eigenschaften speziell für "img-card"-Formen {#properties-specific-for-img-card-shapes}

### Verwendung {#usage-7}

~~~jsx
const data = [
    // Formobjekt
    {
        // ... allgemeine Eigenschaften
        img?: string,
        title?: string,
        headerColor?: string
    },
    // weitere Formobjekte
]
~~~

### Beschreibung {#description-7}

Bei der Vorbereitung eines Datensatzes für `"img-card"`-Formen können Sie dem Konfigurationsobjekt einer Form die folgenden Eigenschaften hinzufügen:

- `img` - (optional) das Bild einer Form
- `title` - (optional) der Titel einer Form
- `headerColor` - (optional) die Farbe des Kopfbereichs der Form

### Beispiel {#example-6}

~~~jsx
const data = [
    {
        "id": "1",
        "type": "img-card",
        "text": "Chairman & CEO",
        "title": "Henry Bennett",
        "img": "../img/avatar-01.png",
        "headerColor": ""
    },
    {
        "id": "2",
        "type": "img-card",
        "text": "QA Lead",
        "title": "Emma Lynch",
        "img": "../img/avatar-02.png",
        "parent": "1",
        "headerColor": "#5874CD"
    }
];
~~~

## Eigenschaften speziell für "task"-Formen {#properties-specific-for-task-shapes}

### Verwendung {#usage-8}

~~~jsx
const data = [
    // Formobjekt
    {
        type: "task",
        duration: number,
        start_date: string | Date,
        end_date?: string | Date,
        text?: string,
        parent?: string | number | null
        //... allgemeine Eigenschaften
    },
    // weitere Formobjekte
]
~~~

### Beschreibung {#description-8}

Bei der Vorbereitung eines Datensatzes für `"task"`-Formen können Sie dem Konfigurationsobjekt einer Form die folgenden Eigenschaften hinzufügen:

- `text` - (optional) die Beschreibung einer Aufgabe
- `start_date` - (erforderlich) das Startdatum einer Aufgabe
- `end_date` - (optional) das Enddatum einer Aufgabe
- `duration` - (erforderlich) die Dauer einer Aufgabe
- `parent` - (optional) die ID des übergeordneten Projekts einer Aufgabe

### Beispiel {#example-7}

~~~jsx
const data = [
    {
        "id": "4.2.1",
        "text": "Functional Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 18),
        "duration": 2
    }
];
~~~

## Eigenschaften speziell für "milestone"-Formen {#properties-specific-for-milestone-shapes}

### Verwendung {#usage-9}

~~~jsx
const data = [
    // Formobjekt
    {
        type: "milestone",
        text?: string,
        parent?: string | number | null
        //... allgemeine Eigenschaften
    }
    // weitere Formobjekte
]
~~~

### Beschreibung {#description-9}

Bei der Vorbereitung eines Datensatzes für `"milestone"`-Formen können Sie dem Konfigurationsobjekt einer Form die folgenden Eigenschaften hinzufügen:

- `text` - (optional) die Beschreibung einer Aufgabe
- `parent` - (optional) die ID des übergeordneten Projekts einer Aufgabe

### Beispiel {#example-8}

~~~jsx
const data = [
     {
        "id": "5.2",
        "text": "Product Launch",
        "type": "milestone",
        "parent": "5",
        "start_date": new Date(2026, 2, 1),
        "duration": 1
    }
];
~~~


**Verwandte Artikel**:

- [Standardformen](shapes/default_shapes.md)
- [Benutzerdefinierte Form](shapes/custom_shape.md)
