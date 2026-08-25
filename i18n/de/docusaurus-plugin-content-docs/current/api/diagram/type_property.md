---
sidebar_label: type
title: type-Eigenschaft
description: Erfahren Sie mehr über die type-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# type

### Beschreibung {#description}

@short: Erforderlich. Legt den Modus der Diagram-Initialisierung fest

### Verwendung {#usage}

~~~jsx
type: "default" | "org" | "mindmap" | "pert";
~~~

### Beispiel {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // "org" | "mindmap" | "pert"
});
~~~

### Diagram-Modi {#diagram-modes}

DHTMLX Diagram kann in einem der folgenden Modi initialisiert werden: `"default"`, `"org"`, `"mindmap"` oder `"pert"`. Um den gewünschten Modus anzuwenden, geben Sie den entsprechenden Wert der Eigenschaft `type` an:

- `type:"default"` wird verwendet, um Beziehungen zwischen bestimmten Entitäten zu visualisieren

<iframe src="https://snippet.dhtmlx.com/f3uekgjw?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"org"` wird verwendet, um die Struktur einer Gruppe von Personen darzustellen, indem ihre Beziehungen in einer hierarchischen Reihenfolge präsentiert werden

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"mindmap"` wird verwendet, um Informationen zu einem Thema anzuordnen, indem das Hauptkonzept umgeben von zugehörigen Ideen dargestellt wird

<iframe src="https://snippet.dhtmlx.com/twd25ww1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"pert"` wird verwendet, um die Abfolgen von Aufgaben und Projekten darzustellen und die Verbindungen zwischen ihnen zu visualisieren. Diese Art von Diagramm ist auch nützlich, um den kritischen Pfad zu schätzen und die Projektplanung durchzuführen

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Changelog:**

- Der Typ `"pert"` wurde in v6.1 hinzugefügt

**Verwandte Artikel:**

- [Übersicht](/)
- [Erste Schritte mit Diagram](guides/diagram/initialization.md)
