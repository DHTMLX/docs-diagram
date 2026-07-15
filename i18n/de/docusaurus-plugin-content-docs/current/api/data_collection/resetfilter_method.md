---
sidebar_label: resetFilter()-Methode
title: resetFilter-Methode von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek können Sie die resetFilter()-Methode von Data Collection erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# resetFilter()

### Beschreibung {#description}

@short: Setzt die aktiven Filter zurück

### Verwendung {#usage}

~~~jsx
resetFilter({
    id?: string,
    permanent?: boolean
}): boolean;
~~~

### Parameter {#parameters}

- `config` - (optional) gibt die Parameter zum Zurücksetzen der aktiven Filter an. Wenn die Konfiguration nicht angegeben oder leer ist, werden alle Filter zurückgesetzt, außer denen, die im Konfigurationsobjekt die Eigenschaft `permanent` besitzen. Kann die folgenden Eigenschaften enthalten:
    - `id` - (optional) die ID des zurückzusetzenden Filters
    - `permanent` - (optional) *true*, um alle aktiven Filter zurückzusetzen, einschließlich derer, die in ihrer Konfiguration die Einstellung `permanent:true` haben

### Rückgabewert {#returns}

Die Methode gibt *true* zurück, wenn alle Filter, einschließlich der permanenten, zurückgesetzt wurden; andernfalls *false*

### Beispiel {#example}

~~~jsx {6-7,9-10,12-13}
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationseinstellungen
});
diagram.data.parse(data);

// setzt alle Filter zurück, außer denen, die im Konfigurationsobjekt die Eigenschaft "permanent" besitzen
diagram.data.resetFilter();

// setzt alle Filter zurück, einschließlich derer, die im Konfigurationsobjekt die Eigenschaft "permanent" besitzen
diagram.data.resetFilter({ permanent: true });

// setzt den Filter mit der angegebenen ID zurück
diagram.data.resetFilter({ id: "filter_id" });
~~~

**Changelog**: Hinzugefügt in v6.0
