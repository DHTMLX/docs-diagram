---
sidebar_label: shapeType-Eigenschaft
title: shapeType-Eigenschaft des Editors
description: Erfahren Sie mehr über die shapeType-Eigenschaft des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# shapeType

### Beschreibung {#description}

@short: Optional. Der Typ der Elemente

Dieser Wert wird angewendet, wenn das Shape-Objekt die Eigenschaft `"type"` nicht enthält

### Verwendung {#usage}

~~~jsx
shapeType?: string;
~~~

### Standardkonfiguration {#default-config}

Im Standardmodus des Editors (type: `"default"`):

~~~jsx
shapeType: "rectangle"
~~~

Im Organigramm-Modus des Editors (type: `"card"`):

~~~jsx
shapeType: "card"
~~~

Im Mindmap-Modus des Editors (type: `"topic"`):

~~~jsx
shapeType: "topic"
~~~

### Beispiel {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    shapeType: "circle"
});
~~~

**Verwandter Artikel**:  [Standard-Shapes](shapes/default_shapes.md)
