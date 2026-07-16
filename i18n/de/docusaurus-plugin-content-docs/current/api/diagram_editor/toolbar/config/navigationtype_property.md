---
sidebar_label: "navigationType-Eigenschaft"
title: "navigationType-Eigenschaft von Toolbar"
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die css-Eigenschaft von Toolbar. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# navigationType

### Beschreibung {#description}

@short: Optional. Legt die Aktion fest, die Menüoptionen öffnet

### Verwendung {#usage}

~~~jsx
navigationType?: "click" | "pointer";
~~~

:::info
- `"click"` - zeigt das Menü an, wenn ein Nutzer darauf klickt
- `"pointer"` - zeigt das Menü an, wenn ein Nutzer mit dem Mauszeiger darüber fährt
:::

### Standardkonfiguration {#default-config}

~~~jsx
navigationType: "click"
~~~

### Beispiel {#example}

~~~jsx {9}
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
