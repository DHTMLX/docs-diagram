---
sidebar_label: Editbar
title: Editor-Anleitungen - Editbar
description: Erfahren Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek mehr über die Editbar des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Editbar

Sie können Editbar-Steuerelemente für jedes Diagram-Element einzeln sowie für eine [Gruppe von Elementen](guides/items_index.md) unter Berücksichtigung verschiedener Bedingungen konfigurieren. Verwenden Sie dazu die Editbar-Konfiguration [`properties`](api/diagram_editor/editbar/config/properties_property.md).

Wenn Sie Editbar-Steuerelemente für eine einzelne [Form](/category/shapes) konfigurieren möchten, müssen Sie den entsprechenden **Formtyp** innerhalb der Konfiguration [`properties`](api/diagram_editor/editbar/config/properties_property.md) angeben, wie im folgenden Beispiel gezeigt:

~~~jsx {6-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [ // Editbar-Steuerelemente für die Form „pert“ konfigurieren
                    { type: "arrange", $properties: { angle: { hidden: true } }},
                    // ... weitere Editbar-Steuerelemente konfigurieren
                ],
                // ... weitere Formen konfigurieren
            }
        }
    }
});
~~~

Um eine [Gruppe von Elementen](guides/items_index.md) zu konfigurieren, müssen Sie die folgenden Service-Eigenschaften innerhalb der Konfiguration [`properties`](api/diagram_editor/editbar/config/properties_property.md) verwenden:

- [`$default`](#configure-editbar-for-the-grid-area) - ermöglicht die Konfiguration von Editbar-Steuerelementen, wenn keine Elemente oder mehr als ein Element ausgewählt sind
- [`$shape`](#configure-editbar-for-shapes) - ermöglicht die Konfiguration von Editbar-Steuerelementen für [alle Formen, einschließlich benutzerdefinierter Formen](/category/shapes)
- [`$group`](#configure-editbar-for-group-elements) - ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ [`group`](/groups/)
- [`$swimlane`](#configure-editbar-for-swimlanes) - ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ [`swimlane`](/swimlanes/)
- [`$line`](#configure-editbar-for-lines) - ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ [`line`](/lines/)
- [`$lineTitle`](#configure-editbar-for-line-titles) - ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ [`lineTitle`](/line_titles/)

<iframe src="https://snippet.dhtmlx.com/ealq0m4l?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Editbar für den Rasterbereich konfigurieren {#configure-editbar-for-the-grid-area}

Die Service-Eigenschaft `$default` ermöglicht die Konfiguration von Editbar-Steuerelementen, wenn keine Elemente oder mehr als ein Element ausgewählt sind.

~~~jsx
properties: {
    $default: [
        {
            type: "gridStep",
            readOnly: true,
            // ...
        }
    ]
}
~~~

**Verwandte komplexe Steuerelemente:** [Rasterschritt](api/diagram_editor/editbar/complex_controls/gridstep.md), [Rahmen](api/diagram_editor/editbar/complex_controls/border.md), [Anordnen](api/diagram_editor/editbar/complex_controls/arrange.md)

## Editbar für Formen konfigurieren {#configure-editbar-for-shapes}

Die Service-Eigenschaft `$shape` ermöglicht die Konfiguration von Editbar-Steuerelementen für [alle Formen, einschließlich benutzerdefinierter Formen](/category/shapes).

~~~jsx
properties: {
    $shape: [
        {
            type: "position",
            $properties: {
                dx: { disabled: true },
                // ...
            },
            // ...
        }
    ]
}
~~~

**Verwandte komplexe Steuerelemente:** [Rahmen](api/diagram_editor/editbar/complex_controls/border.md), [Anordnen](api/diagram_editor/editbar/complex_controls/arrange.md), [Position](api/diagram_editor/editbar/complex_controls/position.md), [Größe](api/diagram_editor/editbar/complex_controls/size.md), [Textausrichtung](api/diagram_editor/editbar/complex_controls/textalign.md), [Textstil](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Editbar für Gruppenelemente konfigurieren {#configure-editbar-for-group-elements}

Die Service-Eigenschaft `$group` ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ [`group`](/groups/).

~~~jsx
properties: {
    $group: [
        {
            type: "header",
            label: "Group header style",
            // ...
        }
    ]
}
~~~

**Verwandte komplexe Steuerelemente:** [Rahmen](api/diagram_editor/editbar/complex_controls/border.md), [Anordnen](api/diagram_editor/editbar/complex_controls/arrange.md), [Kopfzeile](api/diagram_editor/editbar/complex_controls/header.md), [Allgemeine Kopfzeile](api/diagram_editor/editbar/complex_controls/headercommon.md), [Kopfzeilenposition](api/diagram_editor/editbar/complex_controls/headerposition.md), [Größe](api/diagram_editor/editbar/complex_controls/size.md), [Textausrichtung](api/diagram_editor/editbar/complex_controls/textalign.md), [Textstil](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Editbar für Swimlanes konfigurieren {#configure-editbar-for-swimlanes}

Die Service-Eigenschaft `$swimlane` ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ [`swimlane`](/swimlanes/).

~~~jsx
properties: {
    $swimlane: [
        {
            type: "header",
            label: "Swimlane header style",
            // ...
        }
    ]
}
~~~

**Verwandte komplexe Steuerelemente:** [Rahmen](api/diagram_editor/editbar/complex_controls/border.md), [Anordnen](api/diagram_editor/editbar/complex_controls/arrange.md), [Kopfzeile](api/diagram_editor/editbar/complex_controls/header.md), [Allgemeine Kopfzeile](api/diagram_editor/editbar/complex_controls/headercommon.md), [Kopfzeilenposition](api/diagram_editor/editbar/complex_controls/headerposition.md), [Größe](api/diagram_editor/editbar/complex_controls/size.md), [Textausrichtung](api/diagram_editor/editbar/complex_controls/textalign.md), [Textstil](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Editbar für Linien konfigurieren {#configure-editbar-for-lines}

Die Service-Eigenschaft `$line` ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ [`line`](/lines/).

~~~jsx
properties: {
    $line: [
        {
            type: "lineShape",
            label: "Line connection type",
            // ...
        }
    ]
}
~~~

**Verwandte komplexe Steuerelemente:** [Rahmen](api/diagram_editor/editbar/complex_controls/border.md), [Linienform](api/diagram_editor/editbar/complex_controls/lineshape.md), [Zeigeransicht](api/diagram_editor/editbar/complex_controls/pointerview.md)

## Editbar für Linientitel konfigurieren {#configure-editbar-for-line-titles}

Die Service-Eigenschaft `$lineTitle` ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ [`lineTitle`](/line_titles/).

~~~jsx
properties: {
    $lineTitles: [
        {
            type: "textAlign",
            label: "Text align",
            // ...
        },
        // ...
    ]
}
~~~

**Verwandte komplexe Steuerelemente:**  [Textausrichtung](api/diagram_editor/editbar/complex_controls/textalign.md), [Textstil](api/diagram_editor/editbar/complex_controls/textstyle.md)

## Benutzerdefinierte Editbar-Steuerelemente erstellen und konfigurieren {#create-and-configure-custom-editbar-controls}

Sie können die Eigenschaft [`controls`](api/diagram_editor/editbar/config/controls_property.md) der Editbar-Ansicht verwenden, um ein benutzerdefiniertes Steuerelement auf Grundlage der [**Basissteuerelemente**](api/diagram_editor/editbar/basic_controls_overview.md) und/oder [**komplexen Steuerelemente**](api/diagram_editor/editbar/complex_controls_overview.md) zu erstellen.

:::warning
Wir empfehlen nicht, einen Standard-Steuerelementtyp (siehe [***Basissteuerelemente***](api/diagram_editor/editbar/basic_controls_overview.md) und/oder [***Komplexe Steuerelemente***](api/diagram_editor/editbar/complex_controls_overview.md)) als Namen für ein benutzerdefiniertes Steuerelement zu verwenden. Verwenden Sie für jedes benutzerdefinierte Steuerelement einen eindeutigen Namen, um Fehler zu vermeiden!
:::

Nachdem Sie ein benutzerdefiniertes Steuerelement erstellt haben, müssen Sie es über die Eigenschaft [`properties`](api/diagram_editor/editbar/config/properties_property.md) auf das gewünschte Diagram-Element anwenden.

<iframe src="https://snippet.dhtmlx.com/w8mrh3ay?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
