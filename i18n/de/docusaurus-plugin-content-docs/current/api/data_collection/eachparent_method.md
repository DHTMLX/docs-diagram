---
sidebar_label: eachParent()
title: eachParent-Methode der Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die eachParent-Methode der Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# eachParent()

### Beschreibung {#description}

@short: Durchläuft alle Elternelemente des angegebenen Elements

### Verwendung {#usage}

~~~jsx
eachParent(
    id: string | number,
    callback: function,
    self?: boolean
): void
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des Elements
- `callback` - (erforderlich) eine Callback-Funktion, die auf jedes Elternelement des Elements angewendet wird
- `self` - (optional) legt fest, ob die Callback-Funktion auch über das angegebene Element selbst iterieren soll; Standardwert ist *false*

### Beispiel {#example}

~~~jsx {6-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.eachParent("id_1.1.1", (item) => {
    console.log(item);
}, false);
~~~

**Changelog**: Hinzugefügt in v4.0
