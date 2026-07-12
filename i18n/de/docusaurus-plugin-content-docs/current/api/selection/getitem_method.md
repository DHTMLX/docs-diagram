---
sidebar_label: getItem()
title: getItem-Methode von Selection
description: Erfahren Sie mehr über die getItem-Methode von Selection in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getItem()

### Beschreibung {#description}

@short: Gibt das Objekt des angegebenen ausgewählten Elements zurück oder, wenn die Methode ohne Argumente aufgerufen wird, das Objekt des zuletzt ausgewählten Elements

### Verwendung {#usage}

~~~jsx
getItem({
    id: string | number
}): object;

//oder

getItem(): object;
~~~

### Parameter {#parameters}

Die Methode akzeptiert als Argument ein Objekt mit dem folgenden Parameter:

- `id` - (erforderlich) die ID des betreffenden Elements

### Rückgabewert {#returns}

Die Methode gibt das Objekt des angegebenen Elements zurück, wenn es sich in der Auswahlliste befindet, oder das Objekt des zuletzt ausgewählten Elements, wenn sie ohne Argumente aufgerufen wird

### Beispiel {#example}

~~~jsx {9-11,13-15,17-19}
// Ein Diagram muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// Daten werden geladen
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// Abrufen des zuletzt ausgewählten Elements
const item = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner"}

// Abrufen des ausgewählten Elements anhand der ID
const item = diagram.selection.getItem({ id: "1" });
// -> {id: "1", text: "Chairman & CEO", title: "Henry Bennett"}

// Versuch, ein Element abzurufen, das nicht in der Auswahlliste enthalten ist
const item = diagram.selection.getItem({ id: "4" });
// -> gibt undefined zurück, da kein Element mit der angegebenen ID in der Auswahlliste vorhanden ist
~~~

**Changelog**: Aktualisiert in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)

**Verwandtes Beispiel**: [Diagram. Selection. Elementauswahl](https://snippet.dhtmlx.com/jyoxn5h7)
