---
sidebar_label: collapseItem()-Methode
title: collapseItem-Methode
description: Erfahren Sie mehr über die collapseItem-Methode in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# collapseItem()

### Beschreibung {#description}

@short: Blendet alle untergeordneten Elemente der Zielform aus oder reduziert die Gruppe/Swimlane

### Verwendung {#usage}

~~~jsx
collapseItem(
    id: string | number,
    dir?: string
): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die **ID** des Elements
- `dir` - (optional) legt die Seite fest, auf der die untergeordneten Elemente relativ zur Wurzelform ausgeblendet werden: `"left"` oder `"right"`.
  :::note
  Der Parameter `dir` kann nur verwendet werden, wenn das Diagram im Mindmap-Modus initialisiert wird (*type:`"mindmap"`*)
  :::

### Beispiel {#example}

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.collapseItem(123);
~~~

oder

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type:"mindmap"
});
diagram.data.parse(data);

diagram.collapseItem("main", "left");
~~~

**Changelog**: Der Parameter `dir` wurde in v3.1 hinzugefügt

**Verwandter Artikel**: [Erweitern/Reduzieren von Elementen](guides/manipulating_items.md#expandingcollapsing-items)
