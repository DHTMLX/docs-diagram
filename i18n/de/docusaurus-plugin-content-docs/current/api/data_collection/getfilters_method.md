---
sidebar_label: getFilters()-Methode
title: getFilters()-Methode von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die getFilters()-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getFilters()

### Beschreibung {#description}

@short: Gibt ein Objekt mit den angewendeten Filtern zurück

### Verwendung {#usage}

~~~jsx
getFilters({ permanent?: boolean }): object;
~~~

### Parameter {#parameters}

- `permanent` - (optional) standardmäßig *false*. Ermöglicht das Abrufen der Liste dauerhafter Filter

### Rückgabewert {#returns}

Die Methode gibt ein Objekt mit den angewendeten Filtern zurück, wobei:
- `key` - die ID eines Filters ist
- `value` - ein Objekt mit den [`rule`- und `config`-Eigenschaften](api/data_collection/filter_method.md#parameters) ist

### Beispiel {#example}

~~~jsx {6-7}
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationseinstellungen
});
diagram.data.parse(data);

const filters = diagram.data.getFilters(); // ruft alle angewendeten Filter ab
console.log(filters);
~~~

**Changelog**: Hinzugefügt in v6.0
