---
sidebar_label: import()
title: import-Methode des Editors
description: Erfahren Sie mehr über die import-Methode des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# import()

### Beschreibung {#description}

@short: Importiert Daten aus einem vorhandenen Diagram in den Editor

### Verwendung {#usage}

~~~jsx
import(diagram: object): void;
~~~

### Parameter {#parameters}

- `diagram` - (erforderlich) das Diagram-Objekt

### Beispiel {#example}

~~~jsx
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram", {
    type: "org"
});
// Daten in Diagram laden
diagram.data.parse(data);

// Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");

// Daten aus Diagram in Editor importieren
editor.import(diagram);
~~~

Sie können Daten in jedem unterstützten Datenformat laden. Weitere Details finden Sie im Artikel [`parse()`](api/data_collection/parse_method.md).

**Verwandtes Beispiel**: [Diagram editor. Organigramm-Modus. Live-Editor](https://snippet.dhtmlx.com/bng7ego7)
