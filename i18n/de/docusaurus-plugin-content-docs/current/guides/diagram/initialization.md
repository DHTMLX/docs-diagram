---
sidebar_label: Initialisierung
title: Initialisierung
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie, wie Sie mit Diagram beginnen. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Diagram-Initialisierung {#diagram-initialization}

In diesem Artikel besprechen wir die Schritte zum Hinzufügen von DHTMLX Diagram zu einer Seite. Dieser Prozess umfasst mehrere einfache Schritte:

- [Laden Sie das DHTMLX Diagram-Paket herunter](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) und entpacken Sie es in einen Ordner Ihres Projekts
- [Binden Sie die DHTMLX Diagram-Quelldateien auf einer Seite ein](#including-required-code-files)
- [Initialisieren Sie Diagram mit dem Objektkonstruktor](#initializing-diagram)
- [Laden Sie Daten in Diagram](#loading-data-into-diagram)

~~~html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="codebase/diagram.js"></script>
    <link rel="stylesheet" href="codebase/diagram.css">
</head>

<body>
    <div id="diagram_container"></div>
    <script>
        // Vorbereiten der Diagram-Daten
        const data = [
            { id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
            { id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
            { id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
            { from: 1, to: 2 },
            { from: 2, to: 3 }
            // weitere Objekte
        ];

        // Erstellen von DHTMLX Diagram
        const diagram = new dhx.Diagram("diagram_container", {
            // Konfigurationsoptionen
        });

        // Laden der Daten in Diagram
        diagram.data.parse(data);
    </script>
</body>
</html>
~~~

## Einbinden der erforderlichen Codedateien {#including-required-code-files}

Um Diagram zu erstellen, müssen Sie 2 Quelldateien auf Ihrer Seite einbinden:

- **diagram.js**
- **diagram.css**

Stellen Sie sicher, dass Sie korrekte relative Pfade zu diesen Dateien angeben:

~~~html
<script type="text/javascript" src="../codebase/diagram.js"></script>
<link rel="stylesheet" href="../codebase/diagram.css">
~~~

Die Struktur des DHTMLX Diagram-Pakets sieht folgendermaßen aus:

- **sources** - die Quellcodedateien der Bibliothek. Die Dateien sind nicht minifiziert und leicht lesbar. Das Paket ist hauptsächlich für das Debugging der Komponente vorgesehen

:::note
Beachten Sie, dass die **Trial**-Version der Diagram-Bibliothek keinen sources-Ordner enthält.
:::

- **samples** - die Code-Beispiele
- **codebase** - die gepackten Codedateien der Bibliothek. Diese Dateien sind deutlich kleiner und für den Einsatz in der Produktion vorgesehen
:::info
In Ihren Anwendungen müssen Sie Dateien aus dem Ordner **codebase** verwenden
:::

## Initialisieren von Diagram {#initializing-diagram}

Sie können Diagram in einem Container, im Dokument-Body oder in einer Layout-Zelle initialisieren.

### Initialisierung in einem Container {#initialization-in-a-container}

Um Diagram in einem Container zu initialisieren, verwenden Sie den Konstruktor `dhx.Diagram` und übergeben Sie der Konstruktorfunktion die folgenden zwei Parameter:

- einen Container, in den Diagram platziert wird – geben wir ihm die ID `"diagram_container"`:

~~~html title="index.html"
<div id="diagram_container"></div>
~~~

- ein Objekt mit den [Konfigurationseigenschaften](#configuration-properties). Wird dieses Argument nicht an den Konstruktor übergeben, werden die Standardeinstellungen angewendet

~~~jsx title="index.js"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Initialisierung im Dokument-Body {#initialization-in-the-document-body}

Sie können das Festlegen eines Containers für Diagram überspringen und es direkt in den Dokument-Body einfügen:

~~~jsx
const diagram = new dhx.Diagram(document.body, {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Initialisierung in einer Layout-Zelle {#initialization-in-a-layout-cell}

Sie können Diagram auch innerhalb [einer Layout-Zelle](https://docs.dhtmlx.com/suite/layout/) initialisieren. Verwenden Sie in diesem Fall *null* anstelle eines Containers:

~~~jsx
const diagram = new dhx.Diagram(null, {
    type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram"
        }
    ]
});

layout.getCell("diagram").attach(diagram);
~~~

### Konfigurationseigenschaften {#configuration-properties}

Um die [Konfiguration von Diagram](guides/diagram/configuration.md) zu ändern, können Sie die gewünschte Eigenschaft im Konfigurationsobjekt angeben, das als zweiter Parameter an die Konstruktorfunktion übergeben wird.

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    scale: 0.7,
    // weitere Konfigurationsoptionen
});
~~~

Die [vollständige Liste der Konfigurationseigenschaften von Diagram](api/diagram/api_overview.md#diagram-properties) finden Sie hier.

**Verwandtes Beispiel**:	[Diagram Editor. Standardmodus. Breites Flussdiagramm](https://snippet.dhtmlx.com/4d4k3o8p)

Alternativ können Sie auf eine Option zugreifen und ihren Wert über das `config`-Objekt von Diagram setzen/ändern. Vergessen Sie nicht, die Methode [`paint()`](api/diagram/paint_method.md) aufzurufen, um Diagram mit der neuen Konfiguration neu zu rendern:

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.config.scale = 0.7;
diagram.paint();
~~~

## Laden von Daten in Diagram {#loading-data-into-diagram}

Ausführliche Informationen zum Laden von Daten in DHTMLX Diagram finden Sie im Artikel [Laden und Speichern von Daten](guides/loading_data.md).
