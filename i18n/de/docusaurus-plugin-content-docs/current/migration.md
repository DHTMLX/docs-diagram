---
sidebar_label: Migration zu neueren Versionen
title: Migration zu neueren Versionen
description: Erfahren Sie mehr über die Migration zu neueren Versionen in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Migration zu neueren Versionen {#migration-to-newer-versions}

## 5.0 -> 6.0

### Diagram-Editor-Struktur {#diagram-editor-structure}

Die Hauptbestandteile des Diagram Editors wurden umbenannt:

- Linkes Panel -> [Shapebar](guides/diagram_editor/shapebar.md)
- Rechtes Panel -> [Editbar](guides/diagram_editor/editbar.md) ist [mit einer flexiblen Konfiguration ausgestattet](whats_new.md#new-functionality)

Die Standardstruktur der [Toolbar](guides/diagram_editor/toolbar.md) wurde geändert. Sie wurde ebenfalls in hohem Maße konfigurierbar, sodass Sie auch benutzerdefinierte Toolbar-Elemente hinzufügen können.

### Diagram-Editor-API {#diagram-editor-api}

Das `view`-Objekt wurde eingeführt, um die Panels des Diagram Editors zu konfigurieren:

~~~jsx
view?: {
    toolbar?: boolean | obj,
    shapebar?: boolean | obj,
    editbar?: boolean | obj
}
~~~

Sehen Sie sich die zugehörigen API-Übersichtsleitfäden an, um die neuen Möglichkeiten der Panel-Verwaltung kennenzulernen:

- [View-API-Übersicht](api/diagram_editor/view/api_overview.md)
- [Toolbar-API-Übersicht](api/diagram_editor/toolbar/api_overview.md)
- [Shapebar-API-Übersicht](api/diagram_editor/shapebar/api_overview.md)
- [Editbar-API-Übersicht](api/diagram_editor/editbar/api_overview.md)

#### Veraltete Methoden {#deprecated-methods}

- Die Methode `setViewMode()` des Diagram Editors ist veraltet und wird nicht mehr unterstützt. Verwenden Sie stattdessen die Methoden [`show()`](api/diagram_editor/view/methods/show_method.md)/[`hide()`](api/diagram_editor/view/methods/hide_method.md) des `view`-Objekts.

~~~jsx {4} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.setViewMode("preview"); // "preview" oder "edit"
~~~

~~~jsx {4-5} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.view.hide("shapebar");
editor.view.hide("editbar");
~~~

#### Veraltete Eigenschaften {#deprecated-properties}

- Die Eigenschaft `reservedWidth` des Diagram Editors ist veraltet und wird nicht mehr unterstützt.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    reservedWidth: 150
});
~~~

Verwenden Sie stattdessen die folgende Syntax:

~~~jsx title="From v6.0"
editor.diagram.config.margin.x = 40;
~~~

- Die Eigenschaft `editMode` des Diagram Editors ist veraltet und wird nicht mehr unterstützt. Verwenden Sie stattdessen die entsprechende Eigenschaft des `view`-Objekts ([toolbar](api/diagram_editor/toolbar/api_overview.md), [shapebar](api/diagram_editor/shapebar/api_overview.md), [editbar](api/diagram_editor/editbar/api_overview.md)).

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    editMode: false
});
~~~

~~~jsx {2-6} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: false,
        shapebar: false, // nur für den Modus "default"
        editbar: false
    }
});
~~~

- Die Eigenschaft `controls` des Diagram Editors ist veraltet und wird nicht mehr unterstützt. Verwenden Sie stattdessen die Eigenschaft [`items`](api/diagram_editor/toolbar/config/items_property.md) der Konfiguration `view.toolbar`.

~~~jsx {2-4} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    controls: {
        // ...
    }
});
~~~

~~~jsx {2-6} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: {
            items: []
        }
    }
});
~~~

- Die Eigenschaft `shapeBarWidth` des Diagram Editors ist veraltet und wird nicht mehr unterstützt. Verwenden Sie stattdessen die Eigenschaft [`width`](api/diagram_editor/shapebar/config/width_property.md) der Konfiguration `view.shapebar`.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeBarWidth: 190
});
~~~

~~~jsx {3-7} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // Standardmäßig 300
        }
    }
});
~~~

- Die Eigenschaft `shapeSections` des Diagram Editors ist veraltet und wird nicht mehr unterstützt. Verwenden Sie stattdessen die Eigenschaft [`sections`](api/diagram_editor/shapebar/config/sections_property.md) der Konfiguration `view.shapebar`.

~~~jsx {2-7} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "Swimlane": [{ swimlane: true }],
        "Groups": [{ group: true }],
        "Flowchart shapes": [{ flowShapes: true }],
        "Org shapes, text, topic": [{ org: true }, "text", "topic"]
    }
});
~~~

~~~jsx {3-12} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

- Die Eigenschaft `gapPreview` des Diagram Editors ist veraltet und wird nicht mehr unterstützt. Verwenden Sie stattdessen die Eigenschaft `gap` des Objekts [`preview`](api/diagram_editor/shapebar/config/preview_property.md) der Konfiguration `view.shapebar`.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

- Die Eigenschaft `scalePreview` des Diagram Editors ist veraltet und wird nicht mehr unterstützt. Verwenden Sie stattdessen die Eigenschaft `scale` des Objekts [`preview`](api/diagram_editor/shapebar/config/preview_property.md) der Konfiguration `view.shapebar`.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

#### Veraltete Events {#deprecated-events}

- Die folgenden Events des Diagram Editors sind veraltet und werden nicht mehr unterstützt, da es keine entsprechenden Schaltflächen in der Toolbar gibt: `resetButton`, `applyButton`, `visibility`, `exportData`, `importData`, `autoLayout`. Stattdessen können Sie das `click`-Event des `toolbar`-Objekts des Diagram Editors abonnieren:

~~~jsx
editor.toolbar.events.on("click", id => console.log(id));
~~~

:::note
Die IDs der [Serviceelemente](guides/diagram_editor/toolbar.md#service-elements) beginnen mit dem Symbol `$`.
:::

- Das Event `changeGridStep` des Diagram Editors ist veraltet und wird nicht mehr unterstützt.

### Diagram-API {#diagram-api}

- Die Eigenschaft `properties` der Methode [`addShape`](api/diagram/addshape_method.md) ist veraltet und wird nicht mehr verwendet. Die Konfiguration eines benutzerdefinierten Shapes in der Editbar des Editors erfolgt über die Eigenschaft [`properties`](api/diagram_editor/editbar/config/properties_property.md) des Editbar-Panels:

~~~jsx {13-16} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);

editor.diagram.addShape("network", {
    template: config => (
        `<section className='template'>
            <h3>${config.title}</h3>
            <ul><li>${config.text.join("</li><li>")}</li></ul>
        </section>`
    ),
    properties:[
        { type:"arrange" },
        { type:"size" }
    ]
});
~~~

~~~jsx {14-27} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Network shapes": [
                    { type: "network", text: "Core", img: src + "core.svg" },
                    { type: "network", text: "Server", img: src + "server.svg" }
                ],
                "Flow shapes": [{ flowShapes: true }]
            }
        },
        editbar: {
            properties: {
                network: [
                    { type: "arrange" },
                    {
                        type: "fieldset",
                        label: "Network information",
                        rows: [
                            { type: "avatar", key: "img", circle: true, readOnly: true },
                            { type: "textarea", key: "text", label: "Description" },
                            { type: "input", key: "ip", label: "IP" }
                        ]
                    }
                ]
            }
        }
    }
});

editor.parse(data);

editor.diagram.addShape("network", {
    template: ({ img, text, ip }) => {
        return `
            <section className="dhx_diagram_template_d">
                <img className="dhx_diagram_template_d__image" src="${img}" alt="${text}"/></img>
                <span className="dhx_diagram_template_d__title">${text}</span>
                <span className="dhx_diagram_template_d__text">${ip}</span>
            </section>
        `;
    },
    defaults: {
        width: 160, height: 160,
        preview: { scale: 0.7 },
        ip: "127.0.0.1"
    }
});
~~~

### Diagram-Selection-API {#diagram-selection-api}

- Die Methode `getId()` des Selection-Objekts von Diagram ist veraltet und wird nicht mehr unterstützt. Stattdessen können Sie die Methoden [`getIds()`](api/selection/getids_method.md) und [`getItem()`](api/selection/getitem_method.md) des Selection-Objekts verwenden. Sehen Sie sich die folgenden Beispiele an:

~~~jsx {7} title="Before v6.0"
// Das Diagramm muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
diagram.data.parse(data);

const id = diagram.selection.getId(); // -> "2"
~~~

~~~jsx {7-11} title="From v6.0"
// Ein Diagramm muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
diagram.data.parse(data);

// Gibt das zuletzt ausgewählte Element zurück
let id = diagram.selection.getIds().at(-1);
id = diagram.selection.getItem().id;
~~~

### Shape-Eigenschaften {#shape-properties}

Die Verwendung der Eigenschaft `text` des [Shape-Konfigurationsobjekts](shapes/configuration_properties.md) ist auf reine String-Werte beschränkt. Die Verwendung als Array von String-Werten bei der Konfiguration eines benutzerdefinierten Shapes ist veraltet und wird nicht mehr unterstützt.

### Linientitel {#line-titles}

Linientitel werden aus den `line`-Objekten in die gemeinsame Datenstruktur auf derselben Ebene wie die Linien verschoben und als [`lineTitles`](/line_titles/)-Objekte definiert.

Vor v6.0 wurden Linientitel innerhalb des `line`-Objekts wie folgt angegeben:

~~~jsx title="Before v6.0"
const data = [
    // Linienobjekt
    {
        // Eigenschaften des Linienobjekts
        title?: {
            fontSize?: number | string, // Standardmäßig 14
            lineHeight?: number | string, // Standardmäßig 14
            textAlign?: "center" | "left" | "right", // Standardmäßig "center"
            textVerticalAlign?: string,
            fontStyle?: "normal" | "italic" | "oblique", // Standardmäßig "normal"
            fontColor?: string, // Standardmäßig "#4C4C4C"
            fontWeight?: string, // Standardmäßig "500"
            fill?: string,
            editable?: boolean, // Standardmäßig true
            hidden?: boolean,
            draggable?: boolean,
            autoPosition?: boolean,
            text?: [
                {
                    id?: string | number,
                    type?: "$linetext",
                    width?: number,
                    height?: number,
                    distance?: number,
                    autoPosition?: boolean,
                    hidden?: boolean,
                    editable?: boolean, // Standardmäßig true
                    draggable?: boolean,
                    fill?: string,
                    text?: string,
                    fontSize?: number | string, // Standardmäßig 14
                    lineHeight?: number | string, // Standardmäßig 14
                    fontStyle?: "normal" | "italic" | "oblique", // Standardmäßig "normal"
                    fontColor?: string, // Standardmäßig "#4C4C4C"
                    fontWeight?: string, // Standardmäßig "500"
                    textAlign?: "center" | "left" | "right", // Standardmäßig "center"
                    textVerticalAlign?: "center" | "top" | "bottom" // Standardmäßig "center"
                },
                // weitere Objekte für Textelemente einer Linie
            ]
        }
    },
    // weitere Linienobjekte
]
~~~

Ab v6.0 werden Linientitel in separaten Objekten mit dem Typ `"lineTitle"` definiert. Das `lineTitle`-Objekt verfügt über die folgenden Konfigurationseigenschaften:

~~~jsx title="From v6.0"
const data = [
    // Linientitelobjekt
    {
        type: "lineTitle",
        id?: string | number,
        text: string,
        parent: string | number,

        distance?: number, // Standardmäßig 50
        autoPosition?: boolean, // Standardmäßig true
        editable?: boolean, // Standardmäßig true
        fixed?: boolean, // Standardmäßig false
        hidden?: boolean, // Standardmäßig false

        fill?: string,
        fontSize?: string | number, // Standardmäßig 14
        lineHeight?: string | number, // Standardmäßig 14
        fontStyle?: "normal" | "italic" | "oblique", // Standardmäßig "normal"
        fontColor?: string, // Standardmäßig "#4C4C4C"
        fontWeight?: string, // Standardmäßig "500"
        textAlign?: "center" | "left" | "right" // Standardmäßig "center"
    },
    // weitere Objekte
];
~~~

Weitere Details finden Sie in der [API](line_titles/configuration_properties.md) und den [Leitfäden](/line_titles/) von LineTitles.

### Lokalisierung {#localization}

Aufgrund der Änderungen an der Oberfläche des Diagram Editors wurden die Spracheinstellungen aktualisiert. Weitere Details finden Sie in den [Leitfäden zur Lokalisierung](guides/localization.md).

## 4.2 -> 5.0

### Diagram-API {#diagram-api-1}

Die Eigenschaft `lineGap` von Diagram ist veraltet und wird nicht mehr unterstützt. Verwenden Sie stattdessen den Parameter `lineGap` der Eigenschaft [lineConfig](api/diagram/lineconfig_property.md).

~~~jsx {3} title="Before v5.0"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="From v5.0"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // weitere Konfigurationsparameter
});
~~~

### Editor-API {#editor-api}

Die Eigenschaft `lineGap` des Diagram Editors ist veraltet und wird nicht mehr unterstützt. Verwenden Sie stattdessen den Parameter `lineGap` innerhalb der Eigenschaft `lineConfig`.

~~~jsx {3} title="Before v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="From v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // weitere Konfigurationsparameter
});
~~~

## 4.1 -> 4.2

### Diagram-API {#diagram-api-2}

In v4.2 ist die Eigenschaft `defaultLinkType` veraltet.

Ab v4.2 müssen Sie die neue Eigenschaft [lineConfig](api/diagram/lineconfig_property.md) verwenden, um den Standardtyp für Verbindungslinien festzulegen.

~~~jsx title="Before v4.2"
const diagram = new dhx.Diagram("diagram_container", {
    defaultLinkType: "dash"
});
~~~

~~~jsx {2-4} title="From v4.2"
const diagram = new dhx.Diagram("diagram_container", {
    lineConfig: {
        lineType: "dash",
    },
    // weitere Konfigurationsparameter
});
~~~

### Editor-API {#editor-api-1}

Die Syntax zum Festlegen grundlegender Sets von Elementen für Abschnitte im linken Panel des Editors wurde geändert.

Vor v4.2 konnten Sie dem Array der Elemente eines Abschnitts den booleschen Wert *true* zuweisen, um alle verfügbaren Flowchart-Shapes im Abschnitt anzuzeigen:

~~~jsx {3} title="Before v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [true],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

Ab v4.2 müssen Sie dafür eine andere Syntax verwenden:

~~~jsx {3} title="From v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [{ flowShapes: true }],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

Außerdem ist es nun möglich, andere grundlegende Sets von Elementen über die entsprechenden *key:value*-Paare festzulegen. Weitere Details finden Sie im Artikel zu `shapeSections`.

## 3.1 -> 4.0

### API {#api}

Das Event `shapeHover` wurde in v4.0 als veraltet markiert. Verwenden Sie ab v4.0 stattdessen das neue Event [itemMouseOver](api/diagram/itemmouseover_event.md).

~~~jsx title="Before v4.0"
diagram.events.on("shapeHover", (id,e) => {
    console.log("An item"+ diagram.data.getItem(id).text +"has been hovered over");
});
~~~

~~~jsx title="From v4.0"
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
// Für den Diagram Editor
editor.diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
~~~

## 3.0 -> 3.1

### Editor-API {#editor-api-2}

Das Event `shapeMove` des Editor-Objekts wurde in v3.1 als veraltet markiert. Verwenden Sie ab v3.1 stattdessen die neuen Events `BeforeShapeMove` und `AfterShapeMove`.

~~~jsx title="Before v3.1"
editor.events.on("shapeMove", () => {
    console.log("The shape is moved");
});
~~~

~~~jsx title="From v3.1"
// BeforeShapeMove-Event
editor.events.on("BeforeShapeMove", (e) => {
    console.log("Before the shape is moved:", e);
    return true;
});

// AfterShapeMove-Event
editor.events.on("AfterShapeMove", (e) => {
    console.log("After the shape is moved:", e);
});
~~~

## 2.2 -> 3.0

### Erstellen benutzerdefinierter Shapes {#creating-custom-shapes}

Die Art und Weise, wie benutzerdefinierte Shapes erstellt werden, wurde geändert, vereinfacht und verbessert.

Ab v3.0 sollten Sie zum Erstellen eigener Shape-Typen die neue Methode `addShape` anstelle des Objekts *diagram.flowShapes* verwenden. Die Methode ermöglicht es Ihnen, HTML-Templates zu erstellen, die in verschiedenen Browsern funktionieren. Außerdem können Sie mit dieser Methode benutzerdefinierte Shapes im Diagram Editor erstellen und bearbeiten.

Obwohl das Objekt *diagram.flowShapes* veraltet ist, funktioniert es weiterhin.

### Toolbar-Schaltflächen im Editor {#toolbar-buttons-in-editor}

Vor Version 3.0 konnten Sie Toolbar-Schaltflächen im Diagram Editor über die zugehörigen Konfigurationseigenschaften *showApply, showReset, showExport* des Editors ein-/ausblenden.

In Version 3.0 sind diese Eigenschaften veraltet und wurden entfernt. Stattdessen wurde die Konfigurationseigenschaft `controls` hinzugefügt, die eine Reihe von *control_name:value*-Paaren enthält. Somit werden die Eigenschaften ersetzt durch:

- showApply -> controls.apply
- showReset -> controls.reset
- showExport -> controls.export

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    controls: {
        apply: false,
        reset: false,
        export: true
    }
});
~~~

Um eine Toolbar-Schaltfläche zu aktivieren/deaktivieren, müssen Sie den Wert des Controls auf *true* (Standard) oder *false* setzen.

Die vollständige Liste der verfügbaren Controls finden Sie im Artikel [Toolbar](guides/diagram_editor/toolbar.md).

## 1.1 -> 2.0

### Entfernte API {#removed-api}

- diagram.eachChild

### Geänderte API {#changed-api}

- diagram.addItem -> [diagram.data.add](api/data_collection/add_method.md)
- diagram.attachEvent -> [diagram.events.on](guides/event_handling.md#attaching-event-listeners)
- diagram.callEvent -> [diagram.events.fire](guides/event_handling.md#calling-events)
- diagram.clearAll -> [diagram.data.removeAll](api/data_collection/removeall_method.md)
- diagram.deleteItem -> [diagram.data.remove](api/data_collection/remove_method.md)
- diagram.detachEvent -> [diagram.events.detach](guides/event_handling.md#detaching-event-listeners)
- diagram.eachItem -> [diagram.data.map](api/data_collection/map_method.md)
- diagram.getItem -> [diagram.data.getItem](api/data_collection/getitem_method.md)
- diagram.getSelectedId -> `diagram.selection.getId`
- diagram.load -> [diagram.data.load](api/data_collection/load_method.md)
- diagram.parse -> [diagram.data.parse](api/data_collection/parse_method.md)
- diagram.selectItem -> [diagram.selection.add](api/selection/add_method.md)
- diagram.serialize -> [diagram.data.serialize](api/data_collection/serialize_method.md)
- diagram.unselectItem -> [diagram.selection.remove](api/selection/remove_method.md)
- diagram.updateItem -> [diagram.data.update](api/data_collection/update_method.md)
