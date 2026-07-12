---
sidebar_label: exists()
title: exists-Methode der Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die exists-Methode der Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# exists()

### Beschreibung {#description}

@short: Prüft, ob das angegebene Element im Diagramm vorhanden ist

### Verwendung {#usage}

~~~jsx
exists(id: string | number): boolean;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des betreffenden Elements

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn das Element vorhanden ist, andernfalls `false`

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const shape = diagram.data.exists("1");
~~~
