---
sidebar_label: Integration mit Svelte
title: Integration mit Svelte
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die Integration mit Svelte. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# Integration mit Svelte

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von **Svelte** vertraut sein, bevor Sie diese Dokumentation lesen. Um Ihr Wissen aufzufrischen, lesen Sie bitte die [**Svelte-Dokumentation**](https://svelte.dev/).
:::

Der DHTMLX Diagram Editor ist mit **Svelte** kompatibel. Wir haben Codebeispiele vorbereitet, die zeigen, wie Sie den DHTMLX Diagram Editor mit **Svelte** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/svelte-diagram-demo).

## Erstellen eines Projekts {#creating-a-project}

:::info
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/).
:::

Um ein **Svelte**-JS-Projekt zu erstellen, führen Sie den folgenden Befehl aus:

~~~json
npm create vite@latest
~~~

Wählen Sie beim Erstellen des Projekts die Optionen Svelte und JavaScript aus. Nennen wir das Projekt **my-svelte-diagram-app**.

### Installation der Abhängigkeiten {#installation-of-dependencies}

Wechseln Sie in das App-Verzeichnis:

~~~json
cd my-svelte-diagram-app
~~~

Anschließend müssen Sie die Abhängigkeiten installieren und die App ausführen. Verwenden Sie dazu einen Paketmanager:

- wenn Sie [**yarn**](https://yarnpkg.com/) verwenden, müssen Sie die folgenden Befehle aufrufen:

~~~jsx
yarn
yarn start // oder yarn dev
~~~

- wenn Sie [**npm**](https://www.npmjs.com/) verwenden, müssen Sie die folgenden Befehle aufrufen:

~~~json
npm install
npm run dev
~~~

Die App sollte nun auf einem localhost laufen (zum Beispiel unter `http://localhost:3000`).

## Erstellen des Diagram Editors {#creating-diagram-editor}

Jetzt sollten Sie sich den Quellcode des DHTMLX Diagram Editors besorgen. Stoppen Sie zunächst die App und fahren Sie mit der Installation des Diagram-Editor-Pakets fort.

### Schritt 1. Paketinstallation {#step-1-package-installation}

Laden Sie das [**Diagram-Editor-Testpaket**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn) herunter und befolgen Sie die in der README-Datei beschriebenen Schritte. Beachten Sie, dass der Diagram Editor in der Testversion nur 30 Tage lang verfügbar ist.

### Schritt 2. Erstellung der Komponente {#step-2-component-creation}

Jetzt müssen Sie eine Svelte-Komponente erstellen, um den Diagram Editor in die Anwendung einzubinden. Erstellen wir eine neue Datei im Verzeichnis ***src/*** und nennen wir sie ***DiagramEditor.svelte***.

#### Quelldateien importieren {#importing-source-files}

Öffnen Sie die Datei ***DiagramEditor.svelte*** und importieren Sie die Quelldateien des Diagram Editors. Beachten Sie Folgendes:

- wenn Sie die PRO-Version verwenden und das Diagram-Editor-Paket aus einem lokalen Ordner installieren, sehen die Importpfade folgendermaßen aus:

~~~html title="DiagramEditor.svelte"
<script>
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
</script>
~~~

Beachten Sie, dass die Quelldateien je nach verwendetem Paket minifiziert sein können. Stellen Sie in diesem Fall sicher, dass Sie die CSS-Datei als **diagram.min.css** importieren.

- wenn Sie die Testversion des Diagram Editors verwenden, geben Sie die folgenden Pfade an:

~~~html title="DiagramEditor.svelte"
<script>
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
</script>
~~~

In diesem Tutorial erfahren Sie, wie Sie die **Testversion** des Diagram Editors konfigurieren.

#### Container festlegen und Diagram Editor initialisieren {#set-the-container-and-initialize-diagram-editor}

Um den Diagram Editor auf der Seite anzuzeigen, müssen Sie den Container für den Diagram Editor erstellen und diese Komponente mit dem entsprechenden Konstruktor initialisieren:

~~~html {3,6,10-11,19} title="DiagramEditor.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { DiagramEditor } from "@dhx/trial-diagram";
    import "@dhx/trial-diagram/codebase/diagram.min.css"

    let container; // Container für den Diagram Editor initialisieren
    let diagram_editor;

    onMount(() => {
        // die Diagram-Editor-Komponente initialisieren
        diagram_editor = new DiagramEditor(container, {});
    });

    onDestroy(() => {
        diagram_editor.destructor(); // Diagram Editor zerstören
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

#### Styles hinzufügen {#adding-styles}

Um den Diagram Editor korrekt anzuzeigen, müssen Sie in der CSS-Datei des Projekts wichtige Styles für den Diagram Editor und seinen Container festlegen:

~~~css title="app.css"
/* Styles für die Startseite festlegen */
html,
body,
#app { /* stellen Sie sicher, dass Sie den Root-Container #app verwenden */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Styles für den Diagram-Editor-Container festlegen */
.widget {
    height: 100%;
    width: 100%;
}
~~~

#### Daten laden {#loading-data}

Um Daten in den Diagram Editor einzufügen, müssen wir einen [**Datensatz**](https://github.com/DHTMLX/svelte-diagram-demo/blob/main/src/data.js) bereitstellen. Erstellen wir die Datei ***data.js*** im Verzeichnis ***src/*** und fügen wir einige Daten hinzu:

~~~jsx title="data.js"
export function getData() {
    return [
        { id: 1, x: 880, y: 105, text: "Does user remember his password?", type: "process", lineHeight: 18, fontColor: "#fff", fill: "#3DA0E3", stroke: "#3DA0E3" },
        { id: 2, x: 1080, y: 125, width: 50, "height": 50, text: "XOR", type: "circle", lineHeight: 18, fontColor: "#fff", fill: "#7D8495", stroke: "#7D8495" },
        { id: 3, x: 1160, y: 40, text: "User forgets his password", type: "preparation", lineHeight: 18, fontColor: "#fff", fill: "#33B579", stroke: "#33B579" },
        { id: 3.1, x: 1340, y: 40, text: "Send an E-mail with new password", type: "process", lineHeight: 18, fontColor: "#fff", fill: "#3DA0E3", stroke: "#3DA0E3" },
        { id: 3.2, x: 1520, y: 40, text: "E-mail sent", type: "preparation", fontColor: "#fff", lineHeight: 18, fill: "#33B579", stroke: "#33B579" },
        { id: 4, x: 1160, y: 180, text: "User remembers his password", type: "preparation", lineHeight: 18, fontColor: "#fff", fill: "#33B579", stroke: "#33B579" },
        { id: 5, x: 1340, y: 180, text: "User types in login and password", type: "process", lineHeight: 18, fontColor: "#fff", fill: "#3DA0E3", stroke: "#3DA0E3" },
        // weitere Daten

        { from: 1, to: 2, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3, type: "dash", toSide: "bottom", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 7.5, type: "dash", fromSide: "bottom", toSide: "top", backArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3.2, type: "dash", fromSide: "top", toSide: "top", stroke: "#7D8495" },
        { from: 3, to: 3.1, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 3.1, to: 3.2, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 4, type: "dash", toSide: "top", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 4, to: 5, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 5, to: 6, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        // weitere Daten
    ]
}
~~~

Öffnen Sie anschließend die Datei ***App.svelte***, importieren Sie die Daten und übergeben Sie sie als `props` an die neu erstellte Komponente `<DiagramEditor/>`:

~~~html {3,5,8} title="App.svelte"
<script>
    import DiagramEditor from "./DiagramEditor.svelte";
    import { getData } from "./data.js";

    const data = getData();
</script>

<DiagramEditor data={data} />
~~~

Öffnen Sie die Datei ***DiagramEditor.svelte*** und wenden Sie die übergebenen `props` mithilfe der Methode [`parse()`](api/diagram_editor/editor/methods/parse_method.md) auf den Diagram Editor an:

~~~html {6,13} title="DiagramEditor.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { DiagramEditor } from "@dhx/trial-diagram";
    import "@dhx/trial-diagram/codebase/diagram.min.css"

    export let data;

    let container;
    let diagram_editor;

    onMount(() => {
        diagram_editor = new DiagramEditor(container, {});
        diagram_editor.parse(data);
    });

    onDestroy(() => {
        diagram_editor.destructor();
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

Die Diagram-Editor-Komponente ist nun einsatzbereit. Sobald das Element zur Seite hinzugefügt wird, initialisiert es den Diagram Editor mit den Daten. Sie können außerdem die erforderlichen Konfigurationseinstellungen angeben. Besuchen Sie unsere [Diagram Editor API-Dokumentation](/category/diagram-editor-api/), um die vollständige Liste der verfügbaren Eigenschaften einzusehen.

#### Events verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion im Diagram Editor ausführt, löst dies ein Event aus. Sie können diese Events nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Siehe die [vollständige Liste der Events](api/diagram_editor/editor/events/overview.md).

Öffnen Sie ***DiagramEditor.svelte*** und ergänzen Sie die Methode `onMount()` wie folgt:

~~~html {8-11} title="DiagramEditor.svelte"
<script>
// ...
let diagram_editor;

onMount(() => {
    diagram_editor = new DiagramEditor(container, {})

    diagram_editor.events.on("afterFocusSet", function(cell){
        console.log("Focus is set on a cell " + diagram_editor.selection.getSelectedCell());
        console.log(cell);
    });
});

onDestroy(() => {
    diagram_editor.destructor();
});
</script>

// ...
~~~

Wenn wir die App danach starten, sollten wir den mit Daten geladenen Diagram Editor auf einer Seite sehen.

![Diagram-Editor-Initialisierung](/img/trial_diagram.png)

Jetzt sollten Sie über eine grundlegende Einrichtung für die Integration von DHTMLX Diagram Editor mit Svelte verfügen. Sie können den Code an Ihre spezifischen Anforderungen anpassen. Das vollständige Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/svelte-diagram-demo).
