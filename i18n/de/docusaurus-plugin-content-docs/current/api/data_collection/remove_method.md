---
sidebar_label: remove()-Methode
title: remove-Methode von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die remove()-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# remove()

### Beschreibung {#description}

@short: Löscht das angegebene Element aus dem Diagramm

:::note
Wenn das Diagramm im Org- (`type: "org"`) oder Mindmap-Modus (`type: "mindmap"`) initialisiert wird, werden beim Löschen einer Form auch die Verbindung zu dieser Form sowie alle untergeordneten Formen entfernt
:::

### Verwendung {#usage}

~~~jsx
remove(id: string | number | array): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID(s) der zu löschenden Elemente

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.remove("2");
~~~

**Verwandter Artikel**:  [Elemente löschen](guides/manipulating_items.md#deleting-items)

**Verwandtes Beispiel**: [Diagram. Daten. Element hinzufügen/löschen](https://snippet.dhtmlx.com/8wi20uop)
