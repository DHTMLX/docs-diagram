---
sidebar_label: load()-Methode
title: load-Methode von Data Collection
description: Erfahren Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek mehr über die load-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# load()

### Beschreibung {#description}

@short: Lädt Daten aus einer externen Datei

### Verwendung {#usage}

~~~jsx
load(
    url: string | object,
    driver?: object | string
): promise;
~~~

### Parameter {#parameters}

- `url` - (erforderlich) die URL einer externen Datei oder `DataProxy` mit konfigurierter URL
- `driver` - (optional) `DataDriver` oder Datentyp (`"json"`, `"csv"`, `"xml"`), standardmäßig `"json"`

### Rückgabewert {#returns}

Die Methode gibt ein Promise für das Laden der Daten zurück

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.load("../common/data.json");
~~~

### Details

Die Komponente führt einen AJAX-Aufruf aus und erwartet, dass die Remote-URL gültige JSON-Daten liefert.

Das Laden der Daten erfolgt asynchron. Daher müssen Sie den Code, der nach dem Laden ausgeführt werden soll, in ein Promise einbetten:

~~~jsx
diagram.data.load("../some/data").then(() => {
    diagram.selection.add(123);
});
~~~

**Verwandter Artikel**:  [Laden und Speichern von Daten](guides/loading_data.md)

**Verwandtes Beispiel**: [Diagram. Daten. Datenladen](https://snippet.dhtmlx.com/09isp2d8)
