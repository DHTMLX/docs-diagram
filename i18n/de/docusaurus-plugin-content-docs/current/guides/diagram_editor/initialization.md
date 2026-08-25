---
sidebar_label: Initialisierung
title: Initialisierung des Diagram Editor
description: Erfahren Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek, wie Sie mit dem Diagram Editor starten. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Initialisierung des Diagram Editor

Dieser Artikel behandelt den Prozess der Anzeige eines Diagram Editor auf einer Seite. Um den Editor zu initialisieren, müssen Sie die für den Editor spezifischen Quelldateien einbinden und die Instanz `DiagramEditor` verwenden. In allen anderen Aspekten entspricht die Initialisierungsphase der der Diagram-Komponente:

- [Laden Sie das DHTMLX-Diagram-Paket herunter](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) und entpacken Sie es in einen Ordner Ihres Projekts
- [Binden Sie die Quelldateien auf einer Seite ein](#including-required-code-files)
- [Initialisieren Sie den Diagram Editor mit dem Objektkonstruktor](#initializing-diagram-editor)
- [Laden Sie Daten in den Diagram Editor](#loading-data-into-diagram-editor)

~~~html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
    <link rel="stylesheet" href="../codebase/diagramWithEditor.css">
</head>

<body>
    <div id="editor_container"></div>
    <script>
        // Daten vorbereiten
        const data = [
            { id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
            { id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
            { id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
            { from: 1, to: 2 },
            { from: 2, to: 3 }
            // weitere Objekte
        ];

        // Diagram Editor erstellen
        const editor = new dhx.DiagramEditor("editor_container", {
            // Konfigurationsoptionen
        });

        // Daten in den Editor laden
        editor.parse(data);
    </script>
</body>
</html>
~~~

## Erforderliche Codedateien einbinden {#including-required-code-files}

Um einen Diagram Editor zu erstellen, müssen Sie 2 Quelldateien in Ihre Seite einbinden:

- **diagramWithEditor.js**
- **diagramWithEditor.css**

Stellen Sie sicher, dass Sie korrekte relative Pfade zu diesen Dateien angeben:

~~~html
<script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
<link rel="stylesheet" href="../codebase/diagramWithEditor.css">
~~~

### Diagram Editor über npm oder yarn installieren {#installing-diagram-editor-via-npm-or-yarn}

Sie können den JavaScript Diagram Editor mithilfe des Paketmanagers `yarn` oder `npm` in Ihr Projekt importieren.

#### Trial-Diagram-Editor über npm oder yarn installieren {#installing-trial-diagram-editor-via-npm-or-yarn}

:::info
Wenn Sie die Testversion des Diagram Editor verwenden möchten, laden Sie das [**Test-Diagram-Paket**](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) herunter und folgen Sie den in der *README*-Datei beschriebenen Schritten. Beachten Sie, dass der Test-Diagram-Editor nur 30 Tage lang verfügbar ist.
:::

#### PRO-Diagram-Editor über npm oder yarn installieren {#installing-pro-diagram-editor-via-npm-or-yarn}

:::info
Sie können direkt im [Kundenbereich](https://dhtmlx.com/clients/) auf das private **npm** von DHTMLX zugreifen, indem Sie Ihren Login und Ihr Passwort für **npm** generieren. Dort finden Sie auch eine ausführliche Installationsanleitung. Bitte beachten Sie, dass der Zugriff auf das private **npm** nur besteht, solange Ihre proprietäre Diagram-Lizenz aktiv ist.
:::

## Diagram Editor initialisieren {#initializing-diagram-editor}

Sie können einen Diagram Editor in einem Container, im Dokument-Body oder in einer Layout-Zelle initialisieren.

### Initialisierung in einem Container {#initialization-in-a-container}

Um einen Diagram Editor in einem Container zu initialisieren, verwenden Sie den Konstruktor `dhx.DiagramEditor` und übergeben Sie der Konstruktorfunktion die folgenden zwei Parameter:

- einen Container, in den der Diagram Editor eingefügt wird - geben wir ihm die ID `"editor_container"`:

~~~html title="index.html"
<div id="editor_container"></div>
~~~

- ein Objekt mit [Konfigurationseigenschaften](#configuration-properties). Wird dieses Argument nicht an den Konstruktor übergeben, werden die Standardeinstellungen angewendet

~~~jsx title="index.js"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Initialisierung im Dokument-Body {#initialization-in-the-document-body}

Sie können das Festlegen eines Containers für den Diagram Editor auch überspringen und ihn direkt in den Dokument-Body einfügen:

~~~jsx
const editor = new dhx.DiagramEditor(document.body, {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Initialisierung in einer Layout-Zelle {#initialization-in-a-layout-cell}

Sie können einen Editor auch innerhalb [einer Layout-Zelle](https://docs.dhtmlx.com/suite/layout/) initialisieren. Verwenden Sie in diesem Fall *null* anstelle eines Containers:

~~~jsx
const editor = new dhx.DiagramEditor(null, {
    type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram_editor"
        }
    ]
});

layout.getCell("diagram_editor").attach(editor);
~~~

### Konfigurationseigenschaften {#configuration-properties}

Um die Konfiguration des Editors zu ändern, können Sie die gewünschte Eigenschaft im Konfigurationsobjekt angeben, das als zweiter Parameter der Konstruktorfunktion übergeben wird.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "default" | "org" | "mindmap"
    shapeBarWidth: 320,
    lineGap: 20
});
~~~

### Eigenschaften {#properties}

Prüfen Sie [die vollständige Liste der Konfigurationseigenschaften des Editors](api/diagram_editor/editor/config/overview.md).

## Daten in den Diagram Editor laden {#loading-data-into-diagram-editor}

Sie können über die Methode [parse()](api/diagram_editor/editor/methods/parse_method.md) des Editors einen [passenden Datensatz](guides/loading_data.md#preparing-data-to-load) in den Editor laden.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
