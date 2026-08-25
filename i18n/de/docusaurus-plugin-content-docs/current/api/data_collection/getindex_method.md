---
sidebar_label: getIndex()
title: getIndex-Methode der Data Collection
description: Sie erfahren mehr über die getIndex-Methode der Data Collection in der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getIndex()

### Beschreibung {#description}

@short: Gibt den Index des Elements anhand seiner ID zurück

### Verwendung {#usage}

~~~jsx
getIndex(id: string | number): number;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des Elements

### Rückgabewert {#returns}

Die Methode gibt den Index des Elements zurück

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const index = diagram.data.getIndex("1"); // -> gibt 0 zurück
~~~
