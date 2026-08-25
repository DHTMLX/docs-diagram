---
sidebar_label: getNearId()
title: getNearId-Methode der Data Collection
description: Sie erfahren mehr über die getNearId-Methode der Data Collection in der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getNearId()

### Beschreibung {#description}

@short: Sucht nach dem nächstgelegenen Element relativ zum angegebenen Element

### Verwendung {#usage}

~~~jsx
getNearId(id: string | number): string | number;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID eines Elements

### Rückgabewert {#returns}

Die Methode gibt die ID des nächstgelegenen Elements zurück

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const nearId = diagram.data.getNearId(id);
~~~
