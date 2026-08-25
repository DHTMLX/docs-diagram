---
sidebar_label: Inline-Bearbeitung
title: Inline-Bearbeitung
description: Sie können mehr über die Inline-Bearbeitung in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Inline-Bearbeitung

Mit der Inline-Bearbeitung können Sie den Textinhalt eines Diagrammelements durch Doppelklicken bearbeiten. Sie können die Elemente sowohl im Diagramm als auch im Editor bearbeiten.

Die Inline-Bearbeitung für Lines ist nur im Standardmodus von Diagram aktiviert.

![](/img/inline_editing.gif)

:::note
Die Inline-Bearbeitung funktioniert nicht für benutzerdefinierte Shapes.
:::

Die Funktion ist standardmäßig aktiviert. Um die Inline-Bearbeitung zu deaktivieren, setzen Sie die Eigenschaft `editable` des Elements, das Sie schreibgeschützt machen möchten, auf *false*.

Nachfolgend finden Sie Beispiele für das Deaktivieren der Inline-Bearbeitung für Diagrammelemente:

#### Line-Titel {#line-titles}

~~~jsx title="Deaktivieren der Möglichkeit, den Textinhalt einer Line zu bearbeiten" {18}
const data = [
    // Konfigurieren der Shapes
    { "id": "shape_1", "type": "start", "x": 0, "text": "Start" },
    { "id": "shape_2", "type": "process", "x": 400, "text": "Step 1" },
    // Konfigurieren einer Line
    {
        "id": "line_1",
        "type": "line",
        "from": "shape_1",
        "to": "shape_2"
    },
    // Konfigurieren eines Line-Titels
    {
        "id": "title_1",
        "type": "lineTitle",
        "parent": "line_1",
        "text": "Some text",
        "editable": false // deaktiviert die Inline-Bearbeitung des Textelements einer Line
    }
];
~~~

#### Shapes

~~~jsx title="Deaktivieren der Möglichkeit, den Textinhalt eines Shapes zu bearbeiten"
const data = [
    { "id": 1, "x": 280, "y": 0, "text": "Start", "type": "start", "editable": false}
];
~~~

#### Groups

~~~jsx title="Deaktivieren der Möglichkeit, den Textinhalt des Headers einer Group zu bearbeiten"
const data = [
    {
        "type": "$group",
        "id": 1,
        "width": 400,
        "height": 200,
        "x": 0,
        "y": 0,
        "header": {
            "text": "Group 1",
            "editable": false
        }
    }
];
~~~

#### Swimlanes

~~~jsx title="Konfigurieren der Möglichkeit, den Textinhalt des Headers und der Subheader einer Swimlane zu bearbeiten"
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template",
            // deaktiviert die Inline-Bearbeitung für den Header
            "editable": false
        },
        "layout": [
            [1, 2, 3]
        ],
        "subHeaderCols": {
            "headers": [
                { "text": "September", "fill": "rgba(243, 92, 79, 0.4)" },
                // aktiviert die Inline-Bearbeitung für den Subheader
                { "text": "October", "fill": "rgba(155, 96, 248, 0.4)", "editable": true },
                { "text": "November", "fill": "rgba(255, 174, 18, 0.4)" }
            ],
            // deaktiviert die Inline-Bearbeitung für alle Subheader
            "editable": false
        }
    }
];
~~~

## Tastenkombinationen {#keyboard-shortcuts}

Der Inline-Text-Editor unterstützt die folgenden Tastenkombinationen:

| Hotkey | Beschreibung |
|--------|-------------|
| `Ctrl+Enter` (Win), `CMD+Enter` (macOS) | Öffnet den Inline-Text-Editor für das ausgewählte Element. Funktioniert als Alternative zum Doppelklicken. Gilt nur für Shapes mit einer bearbeitbaren Eigenschaft `text`. |
| `Shift+Enter` | Fügt einen Zeilenumbruch (`\n`) ein, während der Editor geöffnet bleibt. |
| `Delete` (`Del`), `Backspace` | Löscht das Zeichen an der Cursorposition. Löscht nicht das Element selbst. |
| `Enter` | Bestätigt den aktuellen Text und schließt den Editor. Da der Editor Änderungen dynamisch während der Eingabe übernimmt, markiert das Drücken von Enter den erfolgreichen Abschluss der Bearbeitung. |
| `Escape` | Verwirft alle nicht gespeicherten Änderungen und schließt den Editor, wobei der Text des Elements auf den Wert vor Beginn der Bearbeitung zurückgesetzt wird. |

## API-Events

Die Bibliothek enthält eine Reihe hilfreicher [API-Events](/api/inline_editor/), mit denen Sie das Verhalten des Editors beim Öffnen/Schließen steuern sowie den Bearbeitungsprozess des Textes der Elemente kontrollieren können.
