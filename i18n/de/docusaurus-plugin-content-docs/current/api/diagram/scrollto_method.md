---
sidebar_label: scrollTo()-Methode
title: scrollTo-Methode
description: Erfahren Sie mehr über die scrollTo-Methode in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# scrollTo()

### Beschreibung {#description}

@short: Setzt den internen Scroll des Diagramms auf die angegebene Position

### Verwendung {#usage}

~~~jsx
scrollTo(x: number, y: number): void;
~~~

### Parameter {#parameters}

- `x` - (erforderlich) horizontale Scroll-Position
- `y` - (erforderlich) vertikale Scroll-Position

### Beispiel {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.scrollTo(100, 80);
~~~

**Verwandter Artikel**: [Diagram scrollen](guides/diagram/scrolling_diagram.md)
