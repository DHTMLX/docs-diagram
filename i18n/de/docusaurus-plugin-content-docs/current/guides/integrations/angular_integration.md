---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die Integration mit Angular. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# Integration mit Angular

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von **Angular** vertraut sein, um diese Dokumentation zu nutzen. Um Ihr Wissen aufzufrischen, lesen Sie bitte die [**Angular-Dokumentation**](https://angular.dev/overview).
:::

Der DHTMLX Diagram Editor ist mit **Angular** kompatibel. Wir haben Codebeispiele vorbereitet, die zeigen, wie Sie den DHTMLX Diagram Editor mit **Angular** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/angular-diagram-demo).

## Erstellen eines Projekts {#creating-a-project}

:::info
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Angular CLI**](https://angular.dev/tools/cli) und [**Node.js**](https://nodejs.org/en/).
:::

Erstellen Sie mit der Angular CLI ein neues Projekt **my-angular-diagram-app**. Führen Sie dazu den folgenden Befehl aus:

~~~json
ng new my-angular-diagram-app
~~~

:::note
Wenn Sie dieser Anleitung folgen möchten, deaktivieren Sie beim Erstellen einer neuen Angular-App das serverseitige Rendering (SSR) und die statische Website-Generierung (SSG/Prerendering)!
:::

Der obige Befehl installiert alle erforderlichen Tools, sodass Sie keine weiteren Befehle ausführen müssen.

### Installation der Abhängigkeiten {#installation-of-dependencies}

Wechseln Sie anschließend in das App-Verzeichnis:

~~~json
cd my-angular-diagram-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Dev-Server. Verwenden Sie dazu den Paketmanager [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Die App sollte nun auf einem localhost laufen (zum Beispiel unter `http://localhost:3000`).

## Erstellen des Diagram Editors {#creating-diagram-editor}

Jetzt sollten Sie sich den Quellcode des DHTMLX Diagram Editors besorgen. Stoppen Sie zunächst die App und fahren Sie mit der Installation des Diagram-Editor-Pakets fort.

### Schritt 1. Paketinstallation {#step-1-package-installation}

Laden Sie das [**Diagram-Testpaket**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn) herunter und befolgen Sie die in der README-Datei beschriebenen Schritte. Beachten Sie, dass der Diagram Editor in der Testversion nur 30 Tage lang verfügbar ist.

### Schritt 2. Erstellung der Komponente {#step-2-component-creation}

Jetzt müssen Sie eine Angular-Komponente erstellen, um den Diagram Editor in die Anwendung einzubinden. Erstellen Sie den Ordner **diagram-editor** im Verzeichnis **src/app/**, fügen Sie darin eine neue Datei hinzu und benennen Sie sie **diagram-editor.component.ts**. Führen Sie anschließend die unten beschriebenen Schritte aus.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie die Datei und importieren Sie die Quelldateien des Diagram Editors. Beachten Sie Folgendes:

- wenn Sie die PRO-Version verwenden und das Diagram-Editor-Paket aus einem lokalen Ordner installieren, sieht der importierte Pfad folgendermaßen aus:

~~~jsx
import { DiagramEditor } from 'dhx-diagram-package';
~~~

- wenn Sie die Testversion von Diagram verwenden, geben Sie den folgenden Pfad an:

~~~jsx
import { DiagramEditor } from '@dhx/trial-diagram';
~~~

In diesem Tutorial erfahren Sie, wie Sie die **Testversion** von Diagram konfigurieren.

#### Container festlegen und Diagram Editor initialisieren {#set-the-container-and-initialize-diagram-editor}

Um den Diagram Editor auf der Seite anzuzeigen, müssen Sie den Container festlegen, in dem die Komponente gerendert wird, und den Diagram Editor mit dem entsprechenden Konstruktor initialisieren:

~~~jsx {1,9,13-14,19-20} title="diagram-editor.component.ts"
import { DiagramEditor } from "@dhx/trial-diagram";
import { IDefaultEditorConfig } from "@dhx/trial-diagram/codebase/types/ts-diagram-editor";
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'diagram-editor', // ein Vorlagenname, der in der Datei "app.component.ts" als <diagram-editor/> verwendet wird
    styleUrls: ['./diagram-editor.component.css'], // eine CSS-Datei einbinden
    template: `<div #container class = "widget"></div>`
})

export class DiagramEditorComponent implements OnInit, OnDestroy {
    // Container für den Diagram Editor initialisieren
    @ViewChild('container', { static: true }) editor_container!: ElementRef;

    private _diagram_editor!: DiagramEditor;

    ngOnInit() {
        // die Diagram-Editor-Komponente initialisieren
        this._diagram_editor = new DiagramEditor( this.editor_container.nativeElement, { type: "default" } as IDefaultEditorConfig);
    }

    ngOnDestroy() {
        this._diagram_editor.destructor(); // Diagram Editor zerstören
    }
}
~~~

#### Styles hinzufügen {#adding-styles}

Um den Diagram Editor korrekt anzuzeigen, müssen Sie die entsprechenden Styles bereitstellen. Erstellen Sie dazu die Datei **diagram-editor.component.css** im Verzeichnis **src/app/diagram-editor/** und legen Sie die wichtigen Styles für den Diagram Editor und seinen Container fest:

~~~css title="diagram-editor.component.css"
/* Diagram-Editor-Styles importieren */
@import "@dhx/trial-diagram/codebase/diagram.min.css";

/* Styles für die Startseite festlegen */
html,
body {
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

Um Daten in den Diagram Editor einzufügen, müssen Sie einen [**Datensatz**](https://github.com/DHTMLX/angular-diagram-demo/blob/master/src/app/diagram-editor/data.ts) bereitstellen. Sie können die Datei **data.ts** im Verzeichnis **src/app/diagram-editor/** erstellen und einige Daten hinzufügen:

~~~jsx title="data.ts"
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

Öffnen Sie anschließend die Datei ***diagram-editor.component.ts***. Importieren Sie die Datei mit den Daten und wenden Sie sie mithilfe der Methode [`parse()`](api/diagram_editor/editor/methods/parse_method.md) innerhalb der Methode `ngOnInit()` an, wie unten gezeigt.

~~~jsx {3,19,22} title="diagram-editor.component.ts"
import { DiagramEditor } from "@dhx/trial-diagram";
import { IDefaultEditorConfig } from "@dhx/trial-diagram/codebase/types/ts-diagram-editor";
import { getData } from "./data"; // Daten importieren
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'diagram-editor',
    styleUrls: ['./diagram-editor.component.css'],
    template: `<div #container class = "widget"></div>`
})

export class DiagramEditorComponent implements OnInit, OnDestroy {
    @ViewChild('container', { static: true }) editor_container!: ElementRef;

    private _diagram_editor!: DiagramEditor;

    ngOnInit() {
        const data = getData(); // Dateneigenschaft initialisieren
        this._diagram_editor = new DiagramEditor( this.editor_container.nativeElement, { type: "default" } as IDefaultEditorConfig);

        this._diagram_editor.parse(data);
    }

    ngOnDestroy() {
        this._diagram_editor.destructor();
    }
}
~~~

Die Diagram-Editor-Komponente ist nun einsatzbereit. Sobald das Element zur Seite hinzugefügt wird, initialisiert es den Diagram Editor mit den Daten. Sie können außerdem die erforderlichen Konfigurationseinstellungen angeben. Besuchen Sie unsere [Diagram Editor API-Dokumentation](/category/diagram-editor-api/), um die vollständige Liste der verfügbaren Eigenschaften einzusehen.

#### Events verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion im Diagram Editor ausführt, löst dies ein Event aus. Sie können diese Events nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Siehe die [vollständige Liste der Events](api/diagram_editor/editor/events/overview.md).

Öffnen Sie die Datei **diagram-editor.component.ts** und ergänzen Sie die Methode `ngOnInit()` wie folgt:

~~~jsx {5-7} title="diagram-editor.component.ts"
// ...
ngOnInit() {
    this._diagram_editor = new DiagramEditor(this.editor_container.nativeElement, { type: "default" } as IDefaultEditorConfig);

    this._diagram_editor.events.on("zoomIn", (step) => {
        console.log("The diagram in the editor is zoomed in. The step is" + step);
    });
}

ngOnDestroy() {
    this._diagram_editor.destructor();
}
~~~

### Schritt 3. Diagram Editor in die App einbinden {#step-3-adding-diagram-editor-into-the-app}

Um die ***DiagramEditorComponent*** in die App einzubinden, öffnen Sie die Datei ***src/app/app.component.ts*** und ersetzen Sie den Standardcode durch den folgenden:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<diagram-editor/>` // eine Vorlage, die in der Datei "diagram-editor.component.ts" erstellt wurde
})
export class AppComponent {
    name = "";
}
~~~

Erstellen Sie anschließend die Datei ***app.module.ts*** im Verzeichnis ***src/app/*** und geben Sie die *DiagramEditorComponent* wie unten gezeigt an:

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DiagramEditorComponent } from "./diagram-editor/diagram-editor.component";

@NgModule({
    declarations: [AppComponent, DiagramEditorComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

Der letzte Schritt besteht darin, die Datei ***src/main.ts*** zu öffnen und den vorhandenen Code durch den folgenden zu ersetzen:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Danach können Sie die App starten, um den mit Daten geladenen Diagram Editor auf einer Seite zu sehen.

![Diagram-Editor-Initialisierung](/img/trial_diagram.png)

Jetzt wissen Sie, wie Sie den DHTMLX Diagram Editor mit Angular integrieren. Sie können den Code an Ihre spezifischen Anforderungen anpassen. Das vollständige Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/angular-diagram-demo).
