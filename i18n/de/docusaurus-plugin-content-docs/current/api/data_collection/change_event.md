---
sidebar_label: change
title: change-Event der Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das change-Event der Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# change

### Beschreibung {#description}

@short: Wird bei Änderungen im Datensatz des Diagramms ausgelöst

### Verwendung {#usage}

~~~jsx
change: (
    id?: string,
    status?: "add" | "update" | "delete" | "load"
    updatedItem?: object
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events akzeptiert die folgenden Parameter:

- `id` - (optional) die ID des geänderten Elements
- `status` - (optional) der Status der Änderung: `"add"`, `"update"`, `"delete"`, `"load"`
- `updatedItem` - (optional) das Objekt des geänderten Elements

:::info
Es gibt Fälle, in denen die Handler-Funktion keine Parameter erhält, z. B. wenn ein Datensatz in das Diagramm geparst wird, wobei alle Shapes entfernt werden
:::

### Beispiel {#example}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler für das Event anfügen
diagram.events.on("change", function (id, status, shape) {
    console.log("The " + id + " has been " + status);
});
~~~
