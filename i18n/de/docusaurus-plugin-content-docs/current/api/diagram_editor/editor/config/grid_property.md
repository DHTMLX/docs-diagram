---
sidebar_label: grid-Eigenschaft
title: grid-Eigenschaft des Editors
description: Sie können mehr über die grid-Eigenschaft des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# grid

### Beschreibung {#description}

@short: Optional. Aktiviert/deaktiviert ein Raster, das auf der Editor-Zeichenfläche angezeigt wird

### Verwendung {#usage}

~~~jsx
grid?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
grid: true
~~~

### Beispiel {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "org" | "mindmap" | "default"
    grid: false, // standardmäßig true
    // weitere Konfigurationen
});
~~~

**Changelog:** Hinzugefügt in v6.0
