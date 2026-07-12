---
sidebar_label: parse()-Methode
title: parse-Methode von Toolbar
description: Hier erfahren Sie mehr über die parse-Methode von Toolbar in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# parse()

### Beschreibung {#description}

@short: Lädt Elemente in Toolbar von Diagram Editor

### Verwendung {#usage}

~~~jsx
parse(items: (object | string)[]): void;
~~~

### Parameter {#parameters}

- `items` - (erforderlich) ein Array von Elementen, das in Toolbar geparst wird. Die vollständige Liste der verfügbaren Elemente finden Sie [hier](api/diagram_editor/toolbar/config/items_property.md)

### Beispiel {#example}

~~~jsx {7-8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        toolbar: true
    }
});
// zeigt die Toolbar mit den angegebenen Elementen an
editor.toolbar.parse([{ type: "file", disabled: false }, "spacer", "scale"]);
~~~

**Changelog**: Hinzugefügt in v6.0
