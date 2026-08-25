---
sidebar_label: Integration mit React
title: Integration mit React
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die Integration mit React. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# Integration mit React

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von [**React**](https://react.dev) vertraut sein, um diese Dokumentation zu nutzen. Um Ihr Wissen aufzufrischen, lesen Sie bitte die [**React-Dokumentation**](https://react.dev/learn).
:::

Der DHTMLX Diagram Editor ist mit **React** kompatibel. Wir haben Codebeispiele vorbereitet, die zeigen, wie Sie den DHTMLX Diagram Editor mit **React** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/react-diagram-demo).

## Erstellen eines Projekts {#creating-a-project}

:::info
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/).
:::

Sie können ein einfaches **React**-Projekt erstellen (dieses Projekt) oder **React mit Vite** verwenden. Nennen wir das Projekt **my-react-diagram-app**:

~~~json
npx create-react-app my-react-diagram-app
~~~

### Installation der Abhängigkeiten {#installation-of-dependencies}

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~json
cd my-react-diagram-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Dev-Server. Verwenden Sie dazu einen Paketmanager:

- wenn Sie [**yarn**](https://yarnpkg.com/) verwenden, führen Sie die folgenden Befehle aus:

~~~json
yarn
yarn start
~~~

- wenn Sie [**npm**](https://www.npmjs.com/) verwenden, führen Sie die folgenden Befehle aus:

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

Jetzt müssen Sie eine React-Komponente erstellen, um den Diagram Editor in die Anwendung einzubinden. Erstellen Sie eine neue Datei im Verzeichnis ***src/*** und benennen Sie sie ***DiagramEditor.jsx***.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie die Datei ***DiagramEditor.jsx*** und importieren Sie die Quelldateien des Diagram Editors. Beachten Sie Folgendes:

- wenn Sie die PRO-Version verwenden und das Diagram-Editor-Paket aus einem lokalen Ordner installieren, sehen die Importpfade folgendermaßen aus:

~~~jsx title="DiagramEditor.jsx"
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
~~~

Beachten Sie, dass die Quelldateien je nach verwendetem Paket minifiziert sein können. Stellen Sie in diesem Fall sicher, dass Sie die CSS-Datei als **diagram.min.css** importieren.

- wenn Sie die Testversion von Diagram verwenden, geben Sie die folgenden Pfade an:

~~~jsx title="DiagramEditor.jsx"
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
~~~

In diesem Tutorial erfahren Sie, wie Sie die **Testversion** von Diagram konfigurieren.

#### Container festlegen und Diagram Editor initialisieren {#set-the-container-and-initialize-diagram-editor}

Um den Diagram Editor auf der Seite anzuzeigen, müssen Sie den Container für den Diagram Editor erstellen und diese Komponente mit dem entsprechenden Konstruktor initialisieren:

~~~jsx {2,6,9-10} title="DiagramEditor.jsx"
import { useEffect, useRef } from "react";
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css"; // Diagram-Editor-Styles einbinden

export default function DiagramEditorComponent(props) {
    let container = useRef(); // Container für den Diagram Editor initialisieren

    useEffect(() => {
        // die Diagram-Editor-Komponente initialisieren
        const diagram_editor = new DiagramEditor(container.current, {});

        return () => {
            diagram_editor.destructor(); // Diagram Editor zerstören
        }
    });

    return <div ref={container} className="widget"></div>;
}
~~~

#### Styles hinzufügen {#adding-styles}

Um den Diagram Editor korrekt anzuzeigen, müssen Sie in der CSS-Datei des Projekts wichtige Styles für den Diagram Editor und seinen Container festlegen:

~~~css title="index.css"
/* Styles für die Startseite festlegen */
html,
body,
#root {
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

Um Daten in den Diagram Editor einzufügen, müssen Sie einen [**Datensatz**](https://github.com/DHTMLX/react-diagram-demo/blob/master/src/data.js) bereitstellen. Erstellen wir die Datei ***data.js*** im Verzeichnis ***src/*** und fügen wir einige Daten hinzu:

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

Öffnen Sie anschließend die Datei ***App.js*** und importieren Sie die Daten. Danach können Sie die Daten als `props` an die neu erstellte Komponente `<DiagramEditor/>` übergeben:

~~~jsx {2,5-6} title="App.js"
import DiagramEditor from "./DiagramEditor";
import { getData } from "./data";

function App() {
    let data = getData();
    return <DiagramEditor data={data} />;
}

export default App;
~~~

Öffnen Sie die Datei ***DiagramEditor.jsx*** und wenden Sie die übergebenen `props` mithilfe der Methode [`parse()`](api/diagram_editor/editor/methods/parse_method.md) auf den Diagram Editor an:

~~~jsx {5,11} title="DiagramEditor.jsx"
import { useEffect, useRef } from "react";
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default function DiagramEditorComponent(props) {
    let container = useRef();

    useEffect(() => {
        const diagram_editor = new DiagramEditor(container.current, {});

        diagram_editor.parse(props.data);

        return () => {
            diagram_editor.destructor();
        }
    });

    return <div ref={container} className="widget"></div>;
}
~~~

Die Diagram-Editor-Komponente ist nun einsatzbereit. Sobald das Element zur Seite hinzugefügt wird, initialisiert es den Diagram Editor mit den Daten. Sie können außerdem die erforderlichen Konfigurationseinstellungen angeben. Besuchen Sie unsere [Diagram Editor API-Dokumentation](/category/diagram-editor-api/), um die vollständige Liste der verfügbaren Eigenschaften einzusehen.

#### Events verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion im Diagram Editor ausführt, löst dies ein Event aus. Sie können diese Events nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Siehe die [vollständige Liste der Events](api/diagram_editor/editor/events/overview.md).

Öffnen Sie ***DiagramEditor.jsx*** und ergänzen Sie die Methode `useEffect()` wie folgt:

~~~jsx {5-7} title="DiagramEditor.jsx"
// ...
useEffect(() => {
    const diagram_editor = new DiagramEditor(container.current, {});

    diagram_editor.events.on("zoomIn", (step) => {
        console.log("The diagram in the editor is zoomed in. The step is" + step);
    });

    return () => {
        diagram_editor.destructor();
    }
}, []);
// ...
~~~

Danach können Sie die App starten, um den mit Daten geladenen Diagram Editor auf einer Seite zu sehen.

![Diagram-Editor-Initialisierung](/img/trial_diagram.png)

Jetzt wissen Sie, wie Sie den DHTMLX Diagram Editor mit React integrieren. Sie können den Code an Ihre spezifischen Anforderungen anpassen. Das vollständige Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/react-diagram-demo).
