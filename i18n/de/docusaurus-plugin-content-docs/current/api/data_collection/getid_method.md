---
sidebar_label: getId()
title: getId-Methode der Data Collection
description: Sie erfahren mehr über die getId-Methode der Data Collection in der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getId()

### Beschreibung {#description}

@short: Gibt die ID des Elements anhand seines Index zurück

### Verwendung {#usage}

~~~jsx
getId(index: number): string | number;
~~~

### Parameter {#parameters}

- `index` - (erforderlich) der Index des Elements

### Rückgabewert {#returns}

Die Methode gibt die ID des Elements zurück

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const id = diagram.data.getId(0); // -> gibt "1" zurück
~~~
