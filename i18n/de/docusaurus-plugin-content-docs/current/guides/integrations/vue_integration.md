---
sidebar_label: Integration mit Vue.js
title: Integration mit Vue.js
description: Sie können sich in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek über die Integration mit Vue.js informieren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Integration mit Vue

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von [**Vue**](https://vuejs.org/) vertraut sein, bevor Sie diese Dokumentation lesen. Um Ihr Wissen aufzufrischen, lesen Sie bitte die [**Vue 3-Dokumentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Diagram Editor ist mit **Vue** kompatibel. Wir haben Codebeispiele vorbereitet, die zeigen, wie Sie DHTMLX Diagram Editor mit **Vue 3** verwenden. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/vue-diagram-demo).

## Erstellen eines Projekts {#creating-a-project}

:::info
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Node.js**](https://nodejs.org/en/).
:::

Um ein **Vue**-Projekt zu erstellen, führen Sie den folgenden Befehl aus:

~~~json
npm create vue@latest
~~~

Dieser Befehl installiert und führt `create-vue` aus, das offizielle Scaffolding-Tool für **Vue**-Projekte. Weitere Details finden Sie im [Vue.js-Schnellstart](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Nennen wir das Projekt **my-vue-diagram-app**.

### Installation der Abhängigkeiten {#installation-of-dependencies}

Wechseln Sie in das App-Verzeichnis:

~~~json
cd my-vue-diagram-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver. Verwenden Sie dafür einen Paketmanager:

- wenn Sie [**yarn**](https://yarnpkg.com/) verwenden, führen Sie die folgenden Befehle aus:

~~~jsx
yarn
yarn start // or yarn dev
~~~

- wenn Sie [**npm**](https://www.npmjs.com/) verwenden, führen Sie die folgenden Befehle aus:

~~~json
npm install
npm run dev
~~~

Die App sollte nun auf einem localhost laufen (zum Beispiel `http://localhost:3000`).

## Erstellen des Diagram Editors {#creating-diagram-editor}

Jetzt müssen Sie den DHTMLX Diagram Editor-Quellcode beziehen. Stoppen Sie zunächst die App und fahren Sie mit der Installation des Diagram Editor-Pakets fort.

### Schritt 1. Paketinstallation {#step-1-package-installation}

Laden Sie das [**Trial-Paket des Diagram Editor**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn) herunter und befolgen Sie die in der README-Datei beschriebenen Schritte. Beachten Sie, dass der Diagram Editor als Trial-Version nur 30 Tage lang verfügbar ist.

### Schritt 2. Erstellen der Komponente {#step-2-component-creation}

Jetzt müssen Sie eine Vue-Komponente erstellen, um den Diagram Editor in die Anwendung einzufügen. Erstellen Sie eine neue Datei im Verzeichnis ***src/components/*** und nennen Sie sie ***DiagramEditor.vue***.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie die Datei ***DiagramEditor.vue*** und importieren Sie die Quelldateien des Diagram Editor. Beachten Sie:

- wenn Sie die PRO-Version verwenden und das Diagram Editor-Paket aus einem lokalen Ordner installieren, sehen die Importpfade wie folgt aus:

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
</script>
~~~

Beachten Sie, dass die Quelldateien je nach verwendetem Paket minifiziert sein können. Stellen Sie in diesem Fall sicher, dass Sie die CSS-Datei als **diagram.min.css** importieren.

- wenn Sie die Trial-Version des Diagram Editor verwenden, geben Sie die folgenden Pfade an:

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
</script>
~~~

In diesem Tutorial erfahren Sie, wie Sie die **Trial**-Version des Diagram Editor konfigurieren.

#### Container festlegen und Diagram Editor initialisieren {#set-the-container-and-initialize-diagram-editor}

Um den Diagram Editor auf der Seite anzuzeigen, müssen Sie den Container für den Diagram Editor erstellen und diese Komponente über den entsprechenden Konstruktor initialisieren:

~~~html {2,7-8,18} title="DiagramEditor.vue"
<script>
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default {
    mounted() {
        // Diagram Editor-Komponente initialisieren
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });
    },

    unmounted() {
        this.diagram_editor.destructor(); // Diagram Editor zerstören
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### Stile hinzufügen {#adding-styles}

Damit der Diagram Editor korrekt angezeigt wird, müssen Sie wichtige Stile für den Diagram Editor und seinen Container in der CSS-Datei des Projekts festlegen:

~~~css title="style.css"
/* Stile für die Startseite festlegen */
html,
body,
#root { /* stellen Sie sicher, dass Sie den #root-Container verwenden */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Stile für den Diagram Editor-Container festlegen */
.widget {
    height: 100%;
    width: 100%;
}
~~~

#### Daten laden {#loading-data}

Um Daten in den Diagram Editor einzufügen, müssen Sie einen [**Datensatz**](https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/data.js) bereitstellen. Sie können die Datei ***data.js*** im Verzeichnis ***src/*** erstellen und einige Daten darin hinzufügen:

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

Öffnen Sie anschließend die Datei ***App.vue***, importieren Sie die Daten und initialisieren Sie sie über die interne Methode `data()`. Danach können Sie die Daten als `props` an die neu erstellte Komponente `<DiagramEditor/>` übergeben:

~~~html {3,7-9,14} title="App.vue"
<script>
import DiagramEditor from "./components/DiagramEditor.vue";
import { getData } from "./data";

export default {
    components: { DiagramEditor },
    data() {
        return { data: getData() };
    }
};
</script>

<template>
    <DiagramEditor :data="data" />
</template>

~~~

Öffnen Sie die Datei ***DiagramEditor.vue*** und wenden Sie die übergebenen `props` über die Methode [`parse()`](api/diagram_editor/editor/methods/parse_method.md) auf den Diagram Editor an:

~~~html {6,10} title="DiagramEditor.vue"
<script>
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default {
    props: ["data"],

    mounted() {
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });
        this.diagram_editor.parse(this.data);
    },

    unmounted() {
        this.diagram_editor.destructor();
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

Jetzt ist die Diagram Editor-Komponente einsatzbereit. Sobald das Element zur Seite hinzugefügt wird, initialisiert es den Diagram Editor mit Daten. Sie können auch die erforderlichen Konfigurationseinstellungen angeben. Besuchen Sie unsere [Diagram Editor-API-Dokumentation](/category/diagram-editor-api/), um die vollständige Liste der verfügbaren Eigenschaften einzusehen.

#### Events verarbeiten {#handling-events}

Wenn ein Benutzer im Diagram Editor eine Aktion ausführt, löst dies ein Event aus. Sie können diese Events nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Siehe die [vollständige Liste der Events](api/diagram_editor/editor/events/overview.md).

Öffnen Sie ***DiagramEditor.vue*** und vervollständigen Sie die Methode `mounted()`:

~~~html {8-10} title="DiagramEditor.vue"
<script>
// ...
export default {
    // ...
    mounted: function() {
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });

        this.diagram_editor.events.on("zoomIn", (step) => {
            console.log("The diagram in the editor is zoomed in. The step is" + step);
        });
    }
    //...
}
</script>

//...
~~~

Danach können Sie die App starten, um den Diagram Editor mit geladenen Daten auf einer Seite zu sehen.

![Initialisierung des Diagram Editor](/img/trial_diagram.png)

Jetzt wissen Sie, wie Sie DHTMLX Diagram Editor mit Vue integrieren. Sie können den Code entsprechend Ihren spezifischen Anforderungen anpassen. Das vollständige Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/vue-diagram-demo).
