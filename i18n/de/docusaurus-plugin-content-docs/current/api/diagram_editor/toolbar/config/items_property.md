---
sidebar_label: "items-Eigenschaft"
title: "items-Eigenschaft von Toolbar"
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die items-Eigenschaft von Toolbar. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# items

### Beschreibung {#description}

@short: Optional. Ein Array mit Steuerelementen, die auf der Toolbar des Diagram Editor angezeigt werden

### Verwendung {#usage}

~~~jsx
items?: (object | string)[];
~~~

### Elemente über Strings konfigurieren {#configuring-items-via-strings}

Die Eigenschaft `items` ermöglicht es Ihnen, [**Service-Elemente**](guides/diagram_editor/toolbar.md#service-elements) als Array von Strings anzugeben:

~~~jsx
items: [ "file", "edit", "view", "arrange", "spacer", "scale" ];
~~~

Die vollständige Liste der Service-Elemente finden Sie [hier](guides/diagram_editor/toolbar.md#service-elements).

### Elemente über Objekte konfigurieren {#configuring-items-via-objects}

Die Eigenschaft `items` ermöglicht es Ihnen, [**Service-Elemente**](guides/diagram_editor/toolbar.md#service-elements) und [**Basiselemente**](guides/diagram_editor/toolbar.md#base-elements) als Array von Objekten anzugeben:

~~~jsx
items: [
    {
        type: string,
        id?: string,
        value?: string,
        hotkey?: string,
        icon?: string,
        hidden?: boolean,
        disabled?: boolean,
        css?: string | string[],
        items?: (string | object)[],
        checkIcon?: (editor: object) => string,
        handler?: (editor: object, event: Event) => void
    }, {...}
];
~~~

#### Parameter {#parameters}

Für alle [**Service-Elemente**](guides/diagram_editor/toolbar.md#service-elements), mit Ausnahme von `separator` / `spacer` / `scale`, können Sie ein Objekt mit den folgenden Parametern angeben:

- `type` - (erforderlich) - der Typ eines Service-Elements. Die vollständige Liste der Service-Elementtypen finden Sie [hier](guides/diagram_editor/toolbar.md)
- `id` - (optional) - die ID eines Service-Elements. Standardmäßig enthält die ID eines Service-Elements `$` und den `type` des Service-Elements: `$file`
- `value` - (optional) - die Beschriftung eines Service-Elements
- `hotkey` - (optional) - die Bezeichnung der Tastenkombination eines Service-Elements
- `icon` - (optional) - die CSS-Klasse des Symbols eines Service-Elements
- `hidden` - (optional) - blendet ein Service-Element aus
- `disabled` - (optional) - deaktiviert ein Service-Element
- `css` - (optional) - wendet eine benutzerdefinierte CSS-Klasse auf ein Service-Element an
- `items` - (optional) - definiert die Struktur der untergeordneten Elemente
- `checkIcon` - (optional) - der Handler, der die CSS-Klasse des Symbols zurückgibt. Er wird mit dem folgenden Argument aufgerufen:
    - `editor` - das Diagram-Editor-Objekt
- `handler` - (optional) - der Handler, der ausgeführt wird, wenn die Events `click` oder `inputChange` auftreten. Er wird mit den folgenden Argumenten aufgerufen:
    - `editor` - das Diagram-Editor-Objekt
    - `event` - ein [natives Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

### Beispiel 1 {#example-1}

Das folgende Beispiel zeigt, wie Sie Toolbar-Elemente über Strings konfigurieren:

~~~jsx {10-14}
// Elemente über Strings konfigurieren
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // zeigt die Standard-Toolbar an
        // oder Toolbar über ein Objekt konfigurieren
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                "file",
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

### Beispiel 2 {#example-2}

Das folgende Beispiel zeigt, wie Sie Toolbar-Elemente über Objekte konfigurieren:

~~~jsx {7-38}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                {
                    type: "file",
                    items: [
                        "importJson",
                        {
                            type: "exportJson",
                            value: "Export to JSON"
                        },
                        {
                            id: "custom_id_1",
                            type: "menuItem",
                            value: "Server export",
                            icon: "dxi dxi-vault",
                            items: [
                                "exportPdf",
                                {
                                    id: "custom_id_2",
                                    type: "menuItem",
                                    value: "PNG",
                                    handler: editor => {
                                        editor.diagram.export.png();
                                        // eigene Logik hier
                                    }
                                }
                            ]
                        }
                    ]
                },
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

**Changelog**: Hinzugefügt in v6.0

**Verwandter Artikel**:  [Toolbar-Konfiguration](guides/diagram_editor/toolbar.md)

**Verwandtes Beispiel**: [Diagram Editor. Standardmodus. Anpassung der Toolbar. Suche nach Formen hinzugefügt ](https://snippet.dhtmlx.com/846cz71r)
