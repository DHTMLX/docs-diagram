---
sidebar_label: gridStep-Eigenschaft
title: gridStep-Eigenschaft des Editors
description: Sie können mehr über die gridStep-Eigenschaft des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# gridStep

### Beschreibung {#description}

@short: Optional. Legt die Größe eines Rasterschritts fest, der den Schritt der Bewegung eines Elements definiert

Wenn Sie den Wert des Rasterschritts ändern, ändert sich auch der Abstand zwischen den Punkten im Rasterbereich

### Verwendung {#usage}

~~~jsx
gridStep?: number;
~~~

:::info
Die angegebene Zahl muss größer oder gleich 1 sein
:::

### Standardkonfiguration {#default-config}

~~~jsx
gridStep: 10
~~~

### Beispiel {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    gridStep:20
});
~~~

:::note
Wir empfehlen, beim Verschieben eines Elements im Editor die Pfeiltasten zu verwenden. Auf diese Weise bewegt sich das Element um genau einen Rasterschritt, während die Verwendung der Maus dazu führen kann, dass es sich um mehrere Rasterschritte verschiebt.
:::

**Verwandter Artikel:** [Rasterbereich](guides/diagram_editor/grid_area.md)
