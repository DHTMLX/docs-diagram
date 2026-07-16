---
sidebar_label: shapeToolbar-Eigenschaft
title: shapeToolbar-Eigenschaft des Editors
description: Erfahren Sie mehr über die shapeToolbar-Eigenschaft des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwickler-Handbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# shapeToolbar

### Beschreibung {#description}

@short: Optional. Legt fest, welche Steuerelemente in der persönlichen Symbolleiste von Diagrammelementen angezeigt werden sollen

### Verwendung {#usage}

~~~jsx
shapeToolbar?: boolean | array;
~~~

### Parameter {#parameters}

Als Array kann die Eigenschaft `shapeToolbar` Folgendes enthalten:

- einen *boolean*-Wert - zum Ein-/Ausblenden der Standard-Symbolleiste
- String-Werte mit den Namen der Symbolleisten-Steuerelemente. Die Reihenfolge, in der die Werte im Array angeordnet sind, bestimmt die Reihenfolge, in der die Steuerelemente in der Symbolleiste angezeigt werden. Die verfügbaren Werte sind:
    - im Standardmodus: `"copy"` | `"connect"` | `"remove"` | `"addRowLast"` | `"addColumnLast"`
    - im Org-Chart-Modus: `"add"` | `"horizontal"` | `"vertical"` | `"remove"`
    - im Mindmap-Modus: `"add"` | `"addLeft"` | `"addRight"` | `"remove"`
- eine Reihe von Icon-Objekten. Jedes Icon-Objekt kann die folgenden Eigenschaften haben:
    - `id: string` -  (erforderlich) die ID eines Icons. Beachten Sie, dass die Verwendung der Standardnamen der Symbolleisten-Steuerelemente als IDs neuer Steuerelemente nicht zulässig ist
    - `content: string` - (erforderlich) der Inhalt des Icons. Er kann ein HTML-Element mit dem Namen der Icon-Klasse enthalten
    - `check: function` - (optional) prüft, ob das Icon auf die Form angewendet werden soll. Die Funktion nimmt ein Formobjekt entgegen und gibt *true* zurück, wenn das Icon für diese Form gerendert wird
    - `css: function` - (optional) die Funktion, die den/die Namen der CSS-Klasse(n) zurückgibt, die auf die Form angewendet werden sollen
    - `tooltip: string` - (optional) ein Tooltip, der beim Überfahren des Icons mit der Maus angezeigt wird

### Beispiel {#example}

~~~jsx title="Festlegen der Eigenschaft als boolescher Wert"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    shapeToolbar: false, // standardmäßig true
});
~~~

~~~jsx title="Festlegen der Eigenschaft als Array von Icon-Namen oder Icon-Objekten"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    shapeToolbar: [
        "add",
        // Hinzufügen eines benutzerdefinierten "download"-Steuerelements
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
            tooltip: "Download to PDF"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>",
            check: item => item.parent,
            css: () => "dhx_diagram_toolbar__icon--remove",
            tooltip: "Remove"
        }
    ]
});
~~~

### Neudefinition der Standard-Toolbar für bestimmte Elemente {#redefining-the-default-toolbar-for-certain-items}

Sie müssen möglicherweise einige Elemente mit spezifischen Symbolleisten-Steuerelementen ausstatten, während andere Elemente die Standard-Steuerelemente behalten. In diesem Fall sollten Sie die Standard-Symbolleiste aktivieren, indem Sie den Wert *true* im Array der `shapeToolbar`-Eigenschaft angeben, und das erforderliche Icon-Objekt hinzufügen, das eine Check-Funktion enthält, die festlegt, für welche Form das Icon angewendet wird.

~~~jsx title="Festlegen des Download-Icons für Elemente vom Typ „start""
const editor = new dhx.DiagramEditor("editor_container", {
    shapeToolbar:
    [
        true,
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
            tooltip: "Download to PDF",
            check: item => item.type === "start"
        }
    ]
});
~~~

**Changelog:** Der Parameter `tooltip` des Icon-Objekts wurde in v5.0 hinzugefügt

**Verwandter Artikel**: [Rasterbereich](guides/diagram_editor/grid_area.md#configuring-the-toolbar-of-an-item)

**Verwandtes Beispiel**: [Diagram Editor. Org-Chart-Modus. Konfiguration der Formen-Symbolleiste](https://snippet.dhtmlx.com/b2agwets)
