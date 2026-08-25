---
sidebar_label: move()-Methode
title: move-Methode von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die move()-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# move()

### Beschreibung {#description}

@short: Verschiebt ein Element an die angegebene Position

### Verwendung {#usage}

~~~jsx
move(
    id: string | number | array,
    index: number,
    target?: object
): string | number | array;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID(s) des/der zu verschiebenden Elements/Elemente
- `index` - (erforderlich) der Index, an den das/die Element(e) verschoben werden soll(en)
- `target` - (optional) das Zielobjekt von Data Collection

### Rückgabewert {#returns}

Die Methode gibt entweder eine Zeichenfolge mit der ID des Elements oder ein Array mit Zeichenfolgenwerten der IDs der Elemente zurück

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.move("4",5); // verschiebt die Form mit id=4 an die Position mit Index 5
~~~
