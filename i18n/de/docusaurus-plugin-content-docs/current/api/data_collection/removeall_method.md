---
sidebar_label: removeAll()-Methode
title: removeAll-Methode von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die removeAll()-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# removeAll()

### Beschreibung {#description}

@short: Löscht alle Elemente aus dem Diagramm

### Verwendung {#usage}

~~~jsx
removeAll(): void;
~~~

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.removeAll();
~~~

**Verwandter Artikel**:  [Elemente löschen](guides/manipulating_items.md#deleting-items)

**Verwandtes Beispiel**: [Diagram. Daten. Element hinzufügen/löschen](https://snippet.dhtmlx.com/8wi20uop)
