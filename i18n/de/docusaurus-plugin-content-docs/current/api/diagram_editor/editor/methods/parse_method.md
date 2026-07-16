---
sidebar_label: parse()
title: parse-Methode des Editors
description: Erfahren Sie mehr über die parse-Methode des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# parse()

### Beschreibung {#description}

@short: Lädt Daten aus einer lokalen Datenquelle in den Editor

### Verwendung {#usage}

~~~jsx
parse(data: array): void;
~~~

### Parameter {#parameters}

- `data` - (erforderlich) die Daten, die in den Editor geparst werden sollen

Sie können Daten in jedem unterstützten Datenformat laden. Weitere Details finden Sie im Artikel [`parse()`](api/data_collection/parse_method.md).

### Beispiel {#example}

~~~jsx
const data = [
    // Formen
    {
        "id": "a",
        "x": 50,
        "y": 53,
        "type": "triangle",
        "text": "Shape 1",
        "height": 50,
        "width": 50
    },
    {
        "id": "b",
        "x": 367,
        "y": 158,
        "type": "rectangle",
        "text": "Shape 2"
    },

    // Verbindungslinie
    {
        "id": "ab",
        "from":"a",
        "to":"b",
        "type": "line"
    },
];

const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);
~~~

**Verwandte Beispiele**:

- [Diagram editor. Standardmodus. Einfache Initialisierung](https://snippet.dhtmlx.com/xshe9ut7)
- [Diagram editor. Organigramm-Modus. Einfache Initialisierung](https://snippet.dhtmlx.com/og4qm3ja)
- [Diagram editor. Mindmap-Modus. Mindmap der Emotionen](https://snippet.dhtmlx.com/lo1vm0e8)
