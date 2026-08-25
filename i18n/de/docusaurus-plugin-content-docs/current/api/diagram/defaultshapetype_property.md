---
sidebar_label: defaultShapeType-Eigenschaft
title: defaultShapeType-Eigenschaft
description: Erfahren Sie mehr über die defaultShapeType-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# defaultShapeType

### Beschreibung {#description}

@short: Optional. Der Standardtyp einer Form

Der Wert wird angewendet, wenn das Formobjekt die Eigenschaft `"type"` nicht enthält

### Verwendung {#usage}

~~~jsx
defaultShapeType?: string;
~~~

### Standardkonfiguration {#default-config}

- Im `default`-Modus von Diagram (type: `"default"`)

~~~jsx
defaultShapeType: "rectangle"
~~~

- Im **Org Chart**-Modus von Diagram (type: `"org"`)

~~~jsx
defaultShapeType: "card"
~~~

- Im `mindmap`-Modus von Diagram (type: `"mindmap"`)

~~~jsx
defaultShapeType: "topic"
~~~

- Im **PERT**-Modus von Diagram (type: `"pert"`)

~~~jsx
defaultShapeType: "task"
~~~

### Beispiel {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    defaultShapeType: "img-card"
});
~~~

**Verwandter Artikel**: [Typ einer Form festlegen](shapes/default_shapes.md#setting-the-type-of-a-shape)
