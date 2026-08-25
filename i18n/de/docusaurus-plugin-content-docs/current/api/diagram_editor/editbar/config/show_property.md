---
sidebar_label: show
title: show-Eigenschaft von Editbar
description: Erfahren Sie mehr über die show-Eigenschaft von Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# show

### Beschreibung {#description}

@short: Optional. Legt fest, ob die Editbar bei der Initialisierung angezeigt wird

### Verwendung {#usage}

~~~jsx
show?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
show: true
~~~

### Beispiel {#example}

~~~jsx {8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // zeigt die Standard-Editbar an
        // oder Editbar über ein Objekt konfigurieren
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            controls: {...},
            properties: {...}
        }
    }
});
~~~

**Changelog**: Hinzugefügt in v6.0
