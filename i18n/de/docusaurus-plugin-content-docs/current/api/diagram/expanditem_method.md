---
sidebar_label: expandItem()-Methode
title: expandItem-Methode
description: Erfahren Sie mehr über die expandItem-Methode in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# expandItem()

### Beschreibung {#description}

@short: Zeigt alle untergeordneten Elemente der Zielform an oder erweitert die Gruppe/Swimlane

### Verwendung {#usage}

~~~jsx
expandItem(
    id: string | number,
    dir?: string
): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des Elements
- `dir` - (optional) legt fest, auf welcher Seite die untergeordneten Elemente in Bezug auf die Wurzelform angezeigt werden: `"left"`, `"right"`
  :::note
  Der Parameter `dir` kann nur verwendet werden, wenn das Diagram im Mindmap-Modus initialisiert wird (*type:`"mindmap"`*)
  :::

### Beispiel {#example}

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.expandItem(123);
~~~

oder

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type:"mindmap"
});
diagram.data.parse(data);

diagram.expandItem("main", "left");
~~~

**Changelog:** Der Parameter `dir` wurde in v3.1 hinzugefügt

**Verwandter Artikel:** [Elemente erweitern/einklappen](guides/manipulating_items.md#expandingcollapsing-items)
