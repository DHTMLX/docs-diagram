---
sidebar_label: resizePoints-Eigenschaft
title: resizePoints-Eigenschaft des Editors
description: Erfahren Sie mehr über die resizePoints-Eigenschaft des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwickler-Handbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# resizePoints

### Beschreibung {#description}

@short: Optional. Aktiviert/deaktiviert die Möglichkeit, die Größe von Formen über Größenänderungspunkte zu ändern

### Verwendung {#usage}

~~~jsx
resizePoints?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
resizePoints: true
~~~

### Beispiel {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "org" | "mindmap" | "default"
    resizePoints: false, // standardmäßig true
    // weitere Konfigurationen
});
~~~

**Changelog**: Hinzugefügt in v6.0
