---
sidebar_label: zoomOut()
title: zoomOut-Methode des Editors
description: Erfahren Sie mehr über die zoomOut-Methode des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# zoomOut()

### Beschreibung {#description}

@short: Verkleinert die Ansicht des Diagramms

### Verwendung {#usage}

~~~jsx
zoomOut(step?: number): void;
~~~

### Parameter {#parameters}

- `step` - (optional) die Schrittweite für das Verkleinern des Diagramms; *Standardmäßig: 0.05*

### Beispiel {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.zoomOut(0.1);
~~~

**Changelog:** Hinzugefügt in v4.1
