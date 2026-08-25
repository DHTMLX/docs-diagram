---
sidebar_label: clear()
title: clear-Methode von Selection
description: Erfahren Sie mehr über die clear-Methode von Selection in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# clear()

### Beschreibung {#description}

@short: Leert die Auswahlliste, ohne Events auszulösen

### Verwendung {#usage}

~~~jsx
clear(): void;
~~~

### Beispiel {#example}

~~~jsx {8}
// ein Diagram muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// Daten werden geladen
diagram.data.parse(data);

diagram.selection.clear();
// die Selection-Events werden nicht ausgelöst
~~~

**Changelog**: Hinzugefügt in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)

**Verwandtes Beispiel**: [Diagram. Selection. Elementauswahl](https://snippet.dhtmlx.com/jyoxn5h7)
