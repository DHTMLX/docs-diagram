---
sidebar_label: add()-Methode
title: add-Methode von Data Collection
description: In der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram erfahren Sie mehr über die add-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# add()

### Beschreibung {#description}

@short: Fügt dem Diagramm ein neues Element hinzu

### Verwendung {#usage}

~~~jsx
add(new_item: object | array): string | number | array;
~~~

### Parameter {#parameters}

- `new_item` - (erforderlich) das Objekt eines neuen Elements oder ein Array von Elementobjekten

### Rückgabewert {#returns}

Die Methode gibt die ID des Elements oder ein Array mit IDs von Elementen zurück

### Beispiel {#example}

Es gibt zwei Möglichkeiten, Shapes zu verknüpfen. Sie können ein Shape mit einer definierten übergeordneten ID hinzufügen:

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "org"
});
diagram.data.parse(data);

diagram.data.add({ id: "3.2", text: "New Item", type: "card", parent: "3" });
~~~

oder Sie können ein Shape- und ein Connector-Line-Objekt hinzufügen:

~~~jsx {2,6-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.add({ type: "card", id: "3.2", text: "New Item" });
diagram.data.add({ type: "line",  from: "3", to: "3.2" });
~~~

**Verwandter Artikel**:  [Ein Element hinzufügen](guides/manipulating_items.md#adding-an-item)

**Verwandtes Beispiel**: [Diagram. Daten. Element hinzufügen/löschen](https://snippet.dhtmlx.com/8wi20uop)
