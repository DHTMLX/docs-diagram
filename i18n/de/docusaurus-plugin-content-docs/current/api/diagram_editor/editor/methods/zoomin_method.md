---
sidebar_label: zoomIn()
title: zoomIn-Methode des Editors
description: Erfahren Sie mehr über die zoomIn-Methode des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# zoomIn()

### Beschreibung {#description}

@short: Vergrößert die Ansicht des Diagramms

### Verwendung {#usage}

~~~jsx
zoomIn(step?: number): void;
~~~

### Parameter {#parameters}

- `step` - (optional) die Schrittweite für das Vergrößern des Diagramms; *Standardmäßig: 0.05*

### Beispiel {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.zoomIn(0.1);
~~~

**Changelog:** Hinzugefügt in v4.1
