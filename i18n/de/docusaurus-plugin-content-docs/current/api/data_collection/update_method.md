---
sidebar_label: update()-Methode
title: update-Methode von Data Collection
description: Erfahren Sie mehr über die update-Methode von Data Collection in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# update()

### Beschreibung {#description}

@short: Aktualisiert die Eigenschaften des Elements

:::note
Die Methode kann nicht verwendet werden, um die *id* oder den *type* des Elements zu ändern
:::

### Verwendung {#usage}

~~~jsx
update(
    id: string | number,
    newItem: object
): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des Elements, das aktualisiert werden muss
- `newItem` - (erforderlich) ein Hash von Eigenschaften, die aktualisiert werden müssen

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.update(123, { text:"New text" });
~~~

**Verwandter Artikel**:  [Aktualisieren eines Elements](guides/manipulating_items.md#updating-an-item)
