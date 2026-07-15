---
sidebar_label: map()-Methode
title: map-Methode von Data Collection
description: Erfahren Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek mehr über die map-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# map()

### Beschreibung {#description}

@short: Durchläuft alle Elemente des Diagramms

### Verwendung {#usage}

~~~jsx
map(callback: function): array;
~~~

### Parameter {#parameters}

- `callback` - (erforderlich) eine Callback-Funktion, die für jedes Element eines Diagramms aufgerufen wird

### Rückgabewert {#returns}

Die Methode gibt ein neues Array von Elementen zurück, wobei jedes Element das Ergebnis der Callback-Funktion ist

### Beispiel {#example}

~~~jsx {7-9}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//Abrufen der IDs aller Elemente des Diagramms (Formen, Verbindungen, Gruppen, Swimlanes)
diagram.data.map((item) => {
    console.log(item.id);
});
~~~
