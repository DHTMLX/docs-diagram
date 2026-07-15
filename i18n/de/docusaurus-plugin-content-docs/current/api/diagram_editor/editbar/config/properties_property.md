---
sidebar_label: properties
title: properties-Eigenschaft von Editbar
description: Erfahren Sie mehr über die properties-Eigenschaft von Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# properties

### Beschreibung {#description}

@short: Optional. Eine Reihe von Konfigurationen, die Steuerelemente für Diagram-Elemente (Formen, Gruppen, Swimlanes usw.) verändern

:::info
Die Konfiguration `properties` ermöglicht Folgendes:
- Ändern der Editbar-Steuerelemente für alle oder einzelne Diagram-Elemente basierend auf den [**Basis-Steuerelementen**](api/diagram_editor/editbar/basic_controls_overview.md) und/oder [**Komplexen Steuerelementen**](api/diagram_editor/editbar/complex_controls_overview.md)
- Anwenden benutzerdefinierter Editbar-Steuerelemente, die über die Eigenschaft [`controls`](api/diagram_editor/editbar/config/controls_property.md) definiert wurden, auf Diagram-Elemente
- Festlegen von Bedingungen für die Anwendung eines Editbar-Steuerelements (benutzerdefiniert oder Standard) auf Diagram-Elemente

Weitere Informationen zur Konfiguration finden Sie im Leitfaden [**Editbar-Konfiguration**](guides/diagram_editor/editbar.md)!
:::

### Verwendung {#usage}

~~~jsx
properties?: {
    [type: string]: object[] | function, // benutzerdefinierte Konfigurationen für Steuerelemente, die auf Diagram-Elemente angewendet werden
};
~~~

### Parameter {#parameters}

- `type` - der Name eines Diagram-Elements oder einer Gruppe von Elementen
    - `object` - das Konfigurationsobjekt eines Diagram-Elements

    oder

    - `function` - eine Callback-Funktion, die ein Array von Objekten mit der Konfiguration der Steuerelemente eines Diagram-Elements zurückgeben soll. Die Funktion wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:
        - `item` - (optional) das Objekt des ausgewählten Elements
        - `editor` - (erforderlich) das Objekt des Diagram Editors

Sie können Editbar-Steuerelemente für ein einzelnes Diagram-Element konfigurieren, zum Beispiel `rectangle`, `circle`, `card` usw.:

~~~jsx
properties: {
    // Editbar-Steuerelemente für einzelne Elemente (Formen) ändern
    rectangle: [], // Steuerelemente für den Typ "rectangle" konfigurieren
    circle: [], // Steuerelemente für den Typ "circle" konfigurieren
    card: [], // Steuerelemente für den Typ "card" konfigurieren
    estimate: [], // Steuerelemente für den benutzerdefinierten Typ "estimate" konfigurieren
    // weitere Elemente
}
~~~

Sie können Editbar-Steuerelemente auch für eine bestimmte Gruppe von Diagram-Elementen konfigurieren. Zur Konfiguration von Gruppen stehen die folgenden Diensteigenschaften zur Verfügung:

- [`$default`](guides/diagram_editor/editbar.md#configure-editbar-for-the-grid-area) - ermöglicht die Konfiguration von Editbar-Steuerelementen, wenn keine Elemente ausgewählt sind oder mehr als ein Element ausgewählt ist
- [`$shape`](guides/diagram_editor/editbar.md#configure-editbar-for-shapes) - ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Formen, einschließlich benutzerdefinierter Formen
- [`$group`](guides/diagram_editor/editbar.md#configure-editbar-for-group-elements) - ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ "group"
- [`$swimlane`](guides/diagram_editor/editbar.md#configure-editbar-for-swimlanes) - ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ "swimlane"
- [`$line`](guides/diagram_editor/editbar.md#configure-editbar-for-lines) - ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ "line"
- [`$lineTitle`](guides/diagram_editor/editbar.md#configure-editbar-for-line-titles) - ermöglicht die Konfiguration von Editbar-Steuerelementen für alle Elemente vom Typ "lineTitle"

~~~jsx
properties: {
    $default: [],
    $shape: [],
    $group: [],
    $swimlane: [],
    $line: [],
    $lineTitle: [],
    // ... weitere Parameter
}
~~~

### Beispiel {#example}

~~~jsx {10-44}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // zeigt die Standard-Editbar an
        // oder Editbar über ein Objekt konfigurieren
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            properties: {
                $shape: ({ item, editor }) => {
                    const controls = [
                        { type: "position" },
                        { type: "size" }
                    ];
                    if (item.hasOwnProperty("title")) {
                        controls.push({ type: "input", key: "title", label: "Title", wrap: true });
                    }
                    if (item.hasOwnProperty("text")) {
                        controls.push({ type: "textarea", key: "text", height: 200, label: "Text", wrap: true });
                    }
                    if (item.hasOwnProperty("img")) {
                        controls.push({ type: "avatar", key: "img", label: "Image", wrap: true });
                    }
                    return controls;
                },
                $group: [
                    {
                        type: "arrange",
                        $properties: {
                            angle: { hidden: true }
                        }
                    },
                    { type: "header" },
                    {
                        type: "border",
                        $properties: {
                            stroke: { key: ["style", "stroke"] },
                            strokeType: { hidden: true },
                            strokeWidth: { key: ["style", "strokeWidth"], width: "85%" }
                        }
                    }
                ]
            }
        }
    }
});
~~~

**Changelog**: Die Eigenschaft wurde in v6.0 hinzugefügt

**Verwandter Artikel:** [**Editbar-Konfiguration**](guides/diagram_editor/editbar.md)

**Verwandtes Beispiel:** [Diagram Editor. Standardmodus. Anpassung der Editbar. Formzähler hinzugefügt](https://snippet.dhtmlx.com/ealq0m4l?mode=wide)
