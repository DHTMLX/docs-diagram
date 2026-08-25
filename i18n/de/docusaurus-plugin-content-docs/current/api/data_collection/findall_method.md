---
sidebar_label: findAll()-Methode
title: findAll()-Methode von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die findAll()-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# findAll()

### Beschreibung {#description}

@short: Findet alle Elemente, die den angegebenen Parametern entsprechen

### Verwendung {#usage}

~~~jsx
findAll(rule: object): array;

// or

findAll(rule: function): array;
~~~

### Parameter {#parameters}

- `rule` - (erforderlich) das Suchkriterium, das angegeben werden kann:
  - als Objekt mit folgenden Parametern:
    - `by: string | function` - das Suchkriterium (entweder der Schlüssel des Elementattributs oder eine Suchfunktion)
    - `match: string` - der Wert des Elementattributs
  - als Funktion: `DataCallback(item: T, index?: number, array?: T[])`

### Rückgabewert {#returns}

Die Methode gibt ein Array der übereinstimmenden Elementobjekte zurück

### Beispiel {#example}

~~~jsx {7,10-14}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//Suche nach Shapes anhand des Attributschlüssels
const shapes = diagram.data.findAll({ by: "text", match: "Manager" });

//Suche nach Shapes anhand der Funktion
const shapes = diagram.data.findAll(function (shapes) {
    if( shapes.text === "Manager" || shapes.text === "Marketer" ){
        return true;
    }
});
~~~

**Verwandter Artikel**:  [Das benötigte Element finden](guides/manipulating_items.md#finding-the-necessary-item)
