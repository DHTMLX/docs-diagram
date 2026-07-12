---
sidebar_label: Elemente anpassen
title: Elemente anpassen
description: Sie können mehr über das Anpassen von Elementen in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Elemente anpassen

Sie können das Erscheinungsbild von Diagrammelementen mithilfe verschiedener [Konfigurationseigenschaften](/category/items-api/) innerhalb ihrer Objekte ändern. Sie können außerdem das Look-and-Feel des Diagramms durch das Erstellen benutzerdefinierter Shapes anpassen.

## Styling von Shapes und Lines über die Konfigurationseigenschaften {#styling-shapes-and-lines-via-the-configuration-properties}

### Styling der Shapes {#styling-shapes}

Ein Shape-Objekt bietet eine breite Palette an Eigenschaften, mit denen Sie das Look-and-Feel von Shapes anpassen können.

<iframe src="https://snippet.dhtmlx.com/a9t2z2dt?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

Eine gute Möglichkeit, alle Shapes desselben Typs gleichzeitig zu stylen, besteht darin, die Styling-Einstellungen für die Shapes über die Eigenschaft [`defaults`](api/diagram/defaults_property.md) des Diagramms festzulegen:

~~~jsx
const defaults = {
  start: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  end: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  // ...
};
~~~

[Sehen Sie sich die vollständige Liste der Shape-Objekteigenschaften an](shapes/configuration_properties.md).

### Styling der Lines {#styling-lines}

Um das Aussehen der Lines zu ändern, verwenden Sie die erforderlichen Konfigurationseigenschaften innerhalb des Line-Objekts.

~~~jsx
const data = [
    {
      id: "1-2",
      from: "1",
      to: "2",
      type: "line",
      strokeType: "dash", // gestrichelte Linie
      stroke: "#fa55d1" // Linienfarbe
    }
];
~~~

[Sehen Sie sich die vollständige Liste der Line-Objekteigenschaften an](lines/configuration_properties.md).

Sehen Sie sich das Beispiel an:

<iframe src="https://snippet.dhtmlx.com/um7gy2tb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Definieren der Shape-Vorlage {#defining-the-shapes-template}

Sie können ein angepasstes Diagramm erstellen, indem Sie neue Shape-Typen zum Diagramm hinzufügen und Vorlagen für sie definieren. Verwenden Sie dazu die Methode [`addShape()`](api/diagram/addshape_method.md) des Diagrammobjekts.

### Beispiel im Standardmodus {#example-in-the-default-mode}

<iframe src="https://snippet.dhtmlx.com/2tzyfois?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Beispiel im Org-Chart-Modus {#example-in-the-org-chart-mode}

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Beispiel im Mindmap-Modus {#example-in-the-mindmap-mode}

<iframe src="https://snippet.dhtmlx.com/do1jwmw1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Beispiel im PERT-Modus {#example-in-the-pert-mode}

<iframe src="https://snippet.dhtmlx.com/mtk92awx?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Styling der Ziel-Shapes {#styling-target-shapes}

Bei Verwendung der Org-Chart- und Mindmap-Diagramme im Diagram Editor können Sie einen benutzerdefinierten Stil für Zielelemente hinzufügen.

:::note
Die Stylisierung gilt nicht für das übergeordnete Element des verschobenen Elements oder für ein verschobenes Element mit `giveItem: false`
:::

~~~jsx
<style>
    .dhx_diagram_item.dhx_action__target--take {
        // Styles für das Zielelement, das ein anderes Element aufnehmen kann
    }
    .dhx_diagram_item.dhx_action__target--doesnt_take {
        // Styles für das Zielelement, das kein anderes Element aufnehmen kann
    }
</style>
~~~

## Styling von Groups über die Konfigurationseigenschaften {#styling-groups-via-the-configuration-properties}

### Styling der Group {#styling-the-group}

Um einen benutzerdefinierten Stil für eine Group festzulegen, können Sie die Eigenschaft `style` des [Group-Objekts](groups/configuration_properties.md) verwenden. Zum Beispiel:

<iframe src="https://snippet.dhtmlx.com/pdkgis8g?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Styling des Group-Headers {#styling-the-group-header}

Sie können den Standardstil des Group-Headers über die Attribute der Eigenschaft `header` des [Group-Objekts](groups/configuration_properties.md) ändern.

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## Styling von Swimlanes über die Konfigurationseigenschaften {#styling-swimlanes-via-the-configuration-properties}

### Styling der Swimlane {#styling-the-swimlane}

Sie können die Einstellungen `strokeWidth`, `stroke` und `fill` einer Swimlane über die Eigenschaft `style` des [Swimlane-Objekts](swimlanes/configuration_properties.md#properties-of-a-swimlane) anpassen:

~~~jsx
const data = [
    {
        "type": "$swimlane",
        "width": 970,
        "height": 790,
        "header": {
            "text": "Game levels and locations",
            "closable": true
        },
        "layout": [
            ["1"],
            ["2"],
            ["3"],
            ["4"],
            ["5"]
        ],
        "style": {
            "strokeWidth": 5,
            "stroke": "#083796",
            "fill": "#D4DAE4"
        }
    }
];
~~~

### Styling der Swimlane-Header/Sub-Header {#styling-the-swimlane-headerssub-headers}

Die Eigenschaften `header`, `subHeaderRows` und `subHeaderCols` eines [Swimlane-Objekts](swimlanes/configuration_properties.md#properties-of-a-swimlane) enthalten zusätzliche Attributsätze zum Anpassen des Headers und der Subheader der Swimlane.

Sie können beispielsweise die Hintergrundfarben der oberen Subheader der Swimlane über die Eigenschaft `subHeaderCols` ändern:

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template"
         },
        "layout": [
            [1, 2, 3, 4]
        ],
        "subHeaderCols": {
            "headers": [
                {
                    "text": "September",
                    "fill": "#f35c4f66"
                },
                {
                    "text": "October",
                    "fill": "#9b60f866"
                },
                {
                    "text": "November",
                    "fill": "#ffae1266"
                },
                {
                    "text": "December",
                    "fill": "#3cc97a66"
                }
            ]
        }
    }
];
~~~

Sehen Sie sich das vollständige Beispiel an:

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Styling von Swimlane-Zellen {#styling-swimlane-cells}

Wenn Sie eine einzelne Zelle der Swimlane anpassen möchten, verwenden Sie die Eigenschaft `style` des [Swimlane-Zellobjekts](swimlanes/configuration_properties.md#properties-of-a-swimlane-cell) (`type:"$sgroup"`).

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "layout": [
            [1, 2, 3, 4]
        ],
        // ...
    },
    {
        "id": 1,
        "type": "$sgroup",
        "style": {
            "fill": "#D4DAE4"
        },
        "x": 0,
        "y": 80
    }
];
~~~

**Verwandtes Beispiel:** [Diagram. Standardmodus. Wasserfall-Diagrammvorlage](https://snippet.dhtmlx.com/k5vlvj8i)
