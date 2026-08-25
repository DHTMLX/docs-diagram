---
sidebar_label: getScrollState()-Methode
title: getScrollState-Methode
description: Erfahren Sie mehr über die getScrollState-Methode in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getScrollState()

### Beschreibung {#description}

@short: Gibt die Position des inneren Scrollbereichs des Diagramms zurück

### Verwendung {#usage}

~~~jsx
getScrollState(): object;
~~~

### Rückgabewert {#returns}

Die Methode gibt ein Objekt zurück, das die Scroll-Positionen speichert. Es enthält zwei Eigenschaften:

- `x` - horizontale Scroll-Position
- `y` - vertikale Scroll-Position

### Beispiel {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

const state = diagram.getScrollState();
// diagram.scrollTo( state.x, state.y );
~~~

**Verwandter Artikel**: [Scrollen im Diagramm](guides/diagram/scrolling_diagram.md)

**Verwandtes Beispiel**: [Diagram. Inhalt scrollen](https://snippet.dhtmlx.com/f970hbym)
