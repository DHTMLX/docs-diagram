---
sidebar_label: getRoots()-Methode
title: getRoots-Methode von Data Collection
description: Erfahren Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek mehr über die getRoots-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getRoots()

### Beschreibung {#description}

@short: Gibt ein Array mit den IDs aller Root-Elemente des Diagramms zurück

### Verwendung {#usage}

~~~jsx
getRoots(): array
~~~

### Rückgabewert {#returns}

Die Methode gibt ein Array mit den IDs der Root-Elemente zurück

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoots();
~~~

**Changelog**: Hinzugefügt in v4.0
