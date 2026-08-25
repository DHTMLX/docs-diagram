---
sidebar_label: show
title: show-Eigenschaft von Shapebar
description: Sie können mehr über die show-Eigenschaft von Shapebar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# show

### Beschreibung {#description}

@short: Optional. Legt fest, ob eine Shapebar mit benutzerdefinierten Einstellungen bei der Initialisierung des Diagram Editor angezeigt wird

### Verwendung {#usage}

~~~jsx
show?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
show: true
~~~

### Beispiel {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // Anzeige der Standard-Shapebar
        // oder Konfiguration der Shapebar über ein Objekt
        shapebar: {
            show: false // standardmäßig true
        }
    }
});
~~~

**Verwandter Artikel**: [Shapebar](guides/diagram_editor/shapebar.md#showinghiding-the-shapebar)

**Changelog**: Hinzugefügt in v6.0
