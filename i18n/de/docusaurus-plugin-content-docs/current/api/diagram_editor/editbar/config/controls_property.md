---
sidebar_label: controls
title: controls-Eigenschaft der Editbar
description: Informationen über die controls-Eigenschaft der Editbar finden Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# controls {#controls}

### Beschreibung {#description}

@short: Optional. Eine Reihe von Konfigurationen, die eine oder mehrere benutzerdefinierte Steuerelemente definiert

:::info
Die Eigenschaft `controls` ermöglicht es Ihnen, benutzerdefinierte `Editbar`-Steuerelemente auf Basis von [**Grundlegenden Steuerelementen**](api/diagram_editor/editbar/basic_controls_overview.md) und/oder [**Komplexen Steuerelementen**](api/diagram_editor/editbar/complex_controls_overview.md) zu erstellen. Verwenden Sie die Eigenschaft [`properties`](api/diagram_editor/editbar/config/properties_property.md), um das/die benutzerdefinierte(n) Steuerelement(e) auf die benötigten Elemente (Formen, Gruppen, Swimlanes usw.) anzuwenden.

Weitere Informationen zur Konfiguration finden Sie in der Anleitung [**Editbar-Konfiguration**](guides/diagram_editor/editbar.md)!
:::

:::important
Wir empfehlen nicht, Standard-Steuerelemente beim Erstellen eines benutzerdefinierten Steuerelements neu zu definieren. Verwenden Sie für jedes benutzerdefinierte Steuerelement einen individuellen Namen!
:::

### Verwendung {#usage}

~~~jsx
controls?: {
    [type: string]: object, // benutzerdefiniertes Steuerelement
};
~~~

### Parameter {#parameters}

- `type` - der Typname eines benutzerdefinierten Steuerelements
    - `object` - das Konfigurationsobjekt eines neuen Steuerelements auf Basis von [**Grundlegenden Steuerelementen**](api/diagram_editor/editbar/basic_controls_overview.md) und/oder [**Komplexen Steuerelementen**](api/diagram_editor/editbar/complex_controls_overview.md)

~~~jsx
controls: {
      estimate: { /*...*/ }, // erstellt ein neues Steuerelement "estimate" mit benutzerdefinierten Konfigurationen
      // weiteres Steuerelement
}
~~~

### Beispiel {#example}

~~~jsx {16-28}
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
                $shape: [
                    { type: "estimate" }, // wendet das benutzerdefinierte Steuerelement "estimate" an
                    { type: "name" } // wendet das benutzerdefinierte Steuerelement "name" an
                ]
            },
            controls: {
                // erstellt das benutzerdefinierte Steuerelement "estimate"
                estimate: {
                    type: "fieldset",
                    label: "Time estimate",
                    rows: [
                        { type: "datepicker", key: "date_start", label: "Date start" },
                        { type: "datepicker", key: "date_end", label: "Date end" }
                    ]
                },
                // erstellt das benutzerdefinierte Steuerelement "name"
                name: { type: "input", label: "Name", key: "name" }
            }
        }
    }
});
~~~

**Changelog**: Die Eigenschaft wurde in v6.0 hinzugefügt

**Verwandter Artikel:** [**Editbar-Konfiguration**](guides/diagram_editor/editbar.md)

**Verwandtes Beispiel:** [Diagram Editor. Standardmodus. PERT-Diagramm mit der Legende](https://snippet.dhtmlx.com/w8mrh3ay?mode=wide)
