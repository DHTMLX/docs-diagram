---
sidebar_label: find()-Methode
title: find()-Methode von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die find()-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# find()

### Beschreibung {#description}

@short: Findet das Element, das den angegebenen Parametern entspricht

### Verwendung {#usage}

~~~jsx
find(rule: object): object;

// or

find(rule: function): object;
~~~

### Parameter {#parameters}

- `rule` - (erforderlich) das Suchkriterium, das angegeben werden kann:
  - als Objekt mit folgenden Parametern:
    - `by: string | function` - das Suchkriterium (entweder der Schlüssel des Elementattributs oder eine Suchfunktion)
    - `match: string` - der Wert des Elementattributs
  - als Funktion: `DataCallback(item: T, index?: number, array?: T[])`

### Rückgabewert {#returns}

Die Methode gibt das erste Objekt des Elements zurück, das den angegebenen Kriterien entspricht

### Beispiel {#example}

~~~jsx {7,10-12}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//Suche nach einem Shape anhand des Attributschlüssels
const shape = diagram.data.find({ by: "text", match: "Manager" });

//Suche nach einem Shape anhand der in der Funktion festgelegten Regel
const shape = diagram.data.find((shape) => {
    if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});
~~~

**Verwandter Artikel**:  [Das benötigte Element finden](guides/manipulating_items.md#finding-the-necessary-item)

**Verwandtes Beispiel**: [Diagram. Daten. Benötigtes Shape finden](https://snippet.dhtmlx.com/sete9z73)
