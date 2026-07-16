---
sidebar_label: width
title: width-Eigenschaft von Editbar
description: Erfahren Sie mehr über die width-Eigenschaft von Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# width

### Beschreibung {#description}

@short: Optional. Legt die Breite der Editbar fest

### Verwendung {#usage}

~~~jsx
width?: number;
~~~

### Beispiel {#example}

~~~jsx {9}
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
