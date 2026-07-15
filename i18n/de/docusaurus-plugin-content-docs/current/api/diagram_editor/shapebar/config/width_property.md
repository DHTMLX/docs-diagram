---
sidebar_label: width
title: width-Eigenschaft von Shapebar
description: Sie können mehr über die width-Eigenschaft von Shapebar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# width

### Beschreibung {#description}

@short: Optional. Legt die Breite der Shapebar des Editors fest

### Verwendung {#usage}

~~~jsx
width?: number;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
width: 300
~~~

### Beispiel {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // Anzeige der Standard-Shapebar
        // oder Konfiguration der Shapebar über ein Objekt
        shapebar: {
            width: 400 // standardmäßig 300
        }
    }
});
~~~

**Verwandter Artikel**: [Shapebar](guides/diagram_editor/shapebar.md#setting-the-width-of-shapebar)

**Changelog**: Hinzugefügt in v6.0
