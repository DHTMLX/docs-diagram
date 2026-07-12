---
sidebar_label: copy()
title: copy-Methode der Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die copy-Methode der Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# copy()

### Beschreibung {#description}

@short: Erstellt eine Kopie eines Elements an der angegebenen Position

### Verwendung {#usage}

~~~jsx
copy(
    id: string | number | array,
    index: number,
    target?: object
): string | number | array;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID(s) des zu kopierenden Elements bzw. der Elemente
- `index` - (erforderlich) der Index, an dem die Kopie erstellt werden soll
- `target` - (optional) das Zielobjekt der Data Collection

### Rückgabewert {#returns}

Die Methode gibt die ID des Elements oder ein Array mit IDs von Elementen zurück

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.copy("4",5); // kopiert das Shape mit id=4 an die Position mit dem Index 5
~~~
