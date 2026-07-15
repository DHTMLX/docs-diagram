---
sidebar_label: getItem()
title: getItem-Methode der Data Collection
description: Sie erfahren mehr über die getItem-Methode der Data Collection in der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getItem()

### Beschreibung {#description}

@short: Gibt das Objekt eines Elements anhand seiner ID zurück

### Verwendung {#usage}

~~~jsx
getItem(id: string | number): object;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID eines ausgewählten Elements

### Rückgabewert {#returns}

Die Methode gibt das Objekt eines Elements zurück

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const shape = diagram.data.getItem(123);
~~~

Sie können auf die ursprünglichen Eigenschaften eines Elements wie folgt zugreifen:

~~~jsx
// Zugriff auf die Eigenschaften der Form
const shape = diagram.data.getItem(123);
const text = shape.text;
~~~

**Verwandter Artikel**:  [Ein Element abrufen](guides/manipulating_items.md#getting-an-item)
