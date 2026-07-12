---
sidebar_label: getIds()
title: getIds-Methode von Selection
description: Erfahren Sie mehr über die getIds-Methode von Selection in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getIds()

### Beschreibung {#description}

@short: Gibt die Liste der IDs der ausgewählten Elemente zurück

### Verwendung {#usage}

~~~jsx
getIds(): (string | number)[]
~~~

### Rückgabewert {#returns}

Die Methode gibt die Liste der IDs der ausgewählten Elemente als Array zurück

### Beispiel {#example}

~~~jsx {8}
// Ein Diagram muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// Daten werden geladen
diagram.data.parse(data);

const ids = diagram.selection.getIds(); // -> ["1", "1.1", ...] oder []
~~~

**Changelog**: Hinzugefügt in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)

**Verwandtes Beispiel**: [Diagram. Selection. Elementauswahl](https://snippet.dhtmlx.com/jyoxn5h7)
