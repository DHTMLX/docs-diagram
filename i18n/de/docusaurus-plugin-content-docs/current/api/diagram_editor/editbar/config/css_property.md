---
sidebar_label: css
title: css-Eigenschaft der Editbar
description: Informationen über die css-Eigenschaft der Editbar finden Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# css {#css}

### Beschreibung {#description}

@short: Optional. Wendet eine benutzerdefinierte CSS-Klasse auf die Editbar an

### Verwendung {#usage}

~~~jsx
css?: string;
~~~

### Beispiel {#example}

~~~jsx {7}
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

**Changelog**: In v6.0 hinzugefügt
