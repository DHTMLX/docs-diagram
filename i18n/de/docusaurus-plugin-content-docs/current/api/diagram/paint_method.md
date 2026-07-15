---
sidebar_label: paint()-Methode
title: paint-Methode
description: Erfahren Sie mehr über die paint-Methode in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# paint()

### Beschreibung {#description}

@short: Zeichnet das Diagramm neu

### Verwendung {#usage}

~~~jsx
paint(): void;
~~~

### Beispiel {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.paint();
~~~
