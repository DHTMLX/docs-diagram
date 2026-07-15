---
sidebar_label: "css-Eigenschaft"
title: "css-Eigenschaft von Toolbar"
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die css-Eigenschaft von Toolbar. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# css

### Beschreibung {#description}

@short: Optional. Wendet eine benutzerdefinierte CSS-Klasse an

:::info
Die benutzerdefinierte CSS-Klasse gilt auch für erweiterte Elemente. Solchen Elementen wird das Präfix `--popup-menu` vorangestellt.
:::

### Verwendung {#usage}

~~~jsx
css?: string;
~~~

### Beispiel {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // zeigt die Standard-Toolbar an
        // oder Toolbar über ein Objekt konfigurieren
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

**Changelog**: Hinzugefügt in v6.0

**Verwandter Artikel**:  [Toolbar-Konfiguration](guides/diagram_editor/toolbar.md)
