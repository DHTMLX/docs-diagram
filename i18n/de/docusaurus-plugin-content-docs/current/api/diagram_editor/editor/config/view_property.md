---
sidebar_label: view-Eigenschaft
title: view-Eigenschaft des Editors
description: Erfahren Sie mehr über die view-Eigenschaft des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# view

### Beschreibung {#description}

@short: Ein Objekt, das die Toolbar-, Shapebar- und Editbar-Ansichten des Diagram Editors konfiguriert

### Verwendung {#usage}

~~~jsx
view: {
    toolbar?: boolean | object,
    shapebar?: boolean | object,
    editbar?: boolean | object
};
~~~

### Parameter {#parameters}

- `toolbar` - (optional) ermöglicht es Ihnen, `Toolbar` anzuzeigen/auszublenden (wenn *boolean*) oder ihr Erscheinungsbild zu konfigurieren (wenn *object*). Weitere Informationen zur Konfiguration der Toolbar finden Sie im Abschnitt [Toolbar-API](api/diagram_editor/toolbar/api_overview.md)
- `shapebar` - (optional) ermöglicht es Ihnen, `Shapebar` anzuzeigen/auszublenden (wenn *boolean*) oder ihr Erscheinungsbild zu konfigurieren (wenn *object*). Weitere Informationen zur Konfiguration der Shapebar finden Sie im Abschnitt [Shapebar-API](api/diagram_editor/shapebar/api_overview.md)
- `editbar` - (optional) ermöglicht es Ihnen, `Editbar` anzuzeigen/auszublenden (wenn *boolean*) oder ihr Erscheinungsbild zu konfigurieren (wenn *object*). Weitere Informationen zur Konfiguration der Editbar finden Sie im Abschnitt [Editbar-API](api/diagram_editor/editbar/api_overview.md)

### Standardkonfiguration {#default-config}

~~~jsx
view: {
    toolbar: true,
    shapebar: true,
    editbar: true
}
~~~

### Beispiel {#example}

~~~jsx {3-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "toolbar_custom",
            data: ["file", "separator", "scale"]
        },
        shapebar: {
            width: 400
        },
        editbar: false
    }
    // weitere Konfigurationen
});
~~~

**Changelog**: Hinzugefügt in v6.0
