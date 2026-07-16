---
sidebar_label: margin
title: margin-Eigenschaft
description: Erfahren Sie mehr über die Eigenschaft margin in der Dokumentation der JavaScript-Diagram-Bibliothek von DHTMLX. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# margin

### Beschreibung {#description}

@short: Optional. Ein Objekt mit Einstellungen für die Ränder zur Positionierung von Elementen im Diagramm

### Verwendung {#usage}

~~~jsx
margin?: {
    itemX?: number,
    itemY?: number,
    x?: number,
    y?: number
};
~~~

### Parameter {#parameters}

Das Objekt `margin` kann folgende Parameter enthalten:

- `itemX` - (optional) horizontaler Abstand zwischen zwei Formen (nur für [type: "org" | "mindmap"](api/diagram/type_property.md))
- `itemY` - (optional) vertikaler Abstand zwischen zwei Formen (nur für [type: "org" | "mindmap"](api/diagram/type_property.md))
- `x` - (optional) horizontaler Abstand zwischen dem Anfang eines Diagramms und dem ersten Element
- `y` - (optional) vertikaler Abstand zwischen dem Anfang eines Diagramms und dem ersten Element

### Standardkonfiguration {#default-config}

~~~jsx
margin: {
    x: 40, y: 40,
    itemX: 40, itemY: 40
}
~~~

### Beispiel {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    margin: {
        x: 20, y: 20,
        itemX: 50, itemY: 50
    }
});
~~~

**Verwandte Beispiele**:

- [Diagram. Org-Chart-Modus. Abstand zwischen Formen](https://snippet.dhtmlx.com/bwe9vm6i)
- [Diagram. Standardmodus. Benutzerdefinierte Flowchart-Stile](https://snippet.dhtmlx.com/3wyut2mn)
