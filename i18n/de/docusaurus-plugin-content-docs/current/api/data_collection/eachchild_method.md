---
sidebar_label: eachChild()
title: eachChild-Methode der Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die eachChild-Methode der Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# eachChild()

### Beschreibung {#description}

@short: Durchläuft die Kindelemente des angegebenen Elements

### Verwendung {#usage}

~~~jsx
eachChild(
    id: string | number,
    callback: function,
    isTree?: boolean
): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des Elements
- `callback` - (erforderlich) eine Callback-Funktion, die auf jedes Kindelement des Elements angewendet wird
- `isTree` - (optional) legt fest, ob die Funktion alle Kindelemente (jeder Ebene) des angegebenen Elements durchlaufen soll. Bei *false* durchläuft die Funktion nur die Kindelemente der ersten Ebene des Elements; Standardwert ist *true*.

### Beispiel {#example}

~~~jsx {6-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.eachChild("id_1", (item) => {
    console.log(item);
}, true);
~~~

**Changelog**: Hinzugefügt in v4.0
