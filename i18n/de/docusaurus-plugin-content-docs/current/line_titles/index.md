---
sidebar_label: LineTitles
title: LineTitles
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über Linien. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# LineTitles {#linetitles}

## Übersicht {#overview}

LineTitles legen den Text für Linien fest, die Formen verbinden. Sie können einer Linie sowohl im Diagram als auch im Editor Text hinzufügen, indem Sie auf die Linie doppelklicken, oder indem Sie die Symbolleiste der Linie im Editor verwenden (klicken Sie auf eine Linie, um sie zu aktivieren). Sie können LineTitles sowohl im Diagram als auch im Editor auch per Doppelklick bearbeiten.

Eine weitere Möglichkeit, einer Linie Text hinzuzufügen und ihn zu bearbeiten, besteht darin, einen [Datensatz](guides/loading_data.md#preparing-data-to-load) vorzubereiten.

:::note
LineTitles sind nur im Standardmodus von Diagram/Diagram Editor verfügbar (type: `"default"`).
:::

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## LineTitles erstellen {#creating-line-titles}

Um einen LineTitle zu erstellen, müssen Sie `type: "lineTitle"` innerhalb des LineTitle-Objekts angeben, während Sie einen Datensatz zum Laden in das Diagram vorbereiten:

~~~jsx {5-6}
const data = [
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    // LineTitle konfigurieren
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Some text" }
];

// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

### Eigenschaften eines LineTitle-Objekts {#properties-of-a-line-title-object}

Sehen Sie sich die [vollständige Liste der Konfigurationseigenschaften eines LineTitle-Objekts](line_titles/configuration_properties.md) an, um das Erscheinungsbild anzupassen sowie die Positionierung von LineTitles zu konfigurieren.

## Arbeiten mit LineTitles {#working-with-line-titles}

Sie können LineTitles über die [DataCollection-API](/api/data_collection/) bearbeiten.

:::note
Die folgenden Beispiele eignen sich sowohl für Diagram als auch für Diagram Editor.
:::

### LineTitle hinzufügen {#adding-a-line-title}

Sie können einen LineTitle über die Methode [`add`](api/data_collection/add_method.md) von DataCollection hinzufügen:

~~~jsx {5-10}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.add({
    type: "lineTitle",
    parent: "line_1",
    text: "Some text",
    fill: "#BCE4CE"
});
~~~

Übergeben Sie ein Objekt mit der Konfiguration eines neuen LineTitle als Parameter der Methode.

:::note
Sehen Sie sich die [vollständige Liste der Konfigurationseigenschaften eines LineTitle-Objekts](line_titles/configuration_properties.md) an.
:::

### Hinzufügen von LineTitles blockieren {#blocking-line-titles-adding}

Wenn Sie das Hinzufügen von LineTitles verhindern müssen, können Sie das Event [`beforeAdd`](api/data_collection/beforeadd_event.md) von DataCollection verwenden:

~~~jsx {5}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.events.on("beforeAdd", (item) => item.type !== "lineTitle");
~~~

### Über LineTitles iterieren {#iterating-over-line-titles}

Mit Hilfe der Methode [`eachChild()`](api/data_collection/eachchild_method.md) von DataCollection können Sie über LineTitles als untergeordnete Elemente von Linien iterieren:

~~~jsx {7-9,11-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse([
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Text 1", distance: 50 },
    { type: "lineTitle", id: "title_2", parent: "line_1", text: "Text 2", distance: 70 }
]);
editor.diagram.data.eachChild("line_1", (child) => {
    console.log(child.id); // => "title_1", "title_2"
});
~~~

Übergeben Sie die ID der Linie, deren Titel iteriert werden sollen, als ersten Parameter. Im obigen Beispiel wird die Callback-Funktion auf jedes untergeordnete Element der angegebenen Linie angewendet und gibt deren IDs zurück.
