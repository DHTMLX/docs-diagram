---
sidebar_label: Переход на новые версии
title: Переход на новые версии
description: Узнайте о переходе на новые версии в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Переход на новые версии {#migration-to-newer-versions}

## 5.0 -> 6.0

### Структура Diagram Editor {#diagram-editor-structure}

Основные части Diagram Editor переименованы:

- Левая панель -> [Shapebar](guides/diagram_editor/shapebar.md)
- Правая панель -> [Editbar](guides/diagram_editor/editbar.md) [снабжён гибкой конфигурацией](whats_new.md#new-functionality)

Структура [Toolbar](guides/diagram_editor/toolbar.md) по умолчанию была изменена. Она также стала гибко настраиваемой, поэтому вы можете добавлять собственные элементы Toolbar.

### API Diagram Editor {#diagram-editor-api}

Для настройки панелей Diagram Editor введён объект `view`:

~~~jsx
view?: {
    toolbar?: boolean | obj,
    shapebar?: boolean | obj,
    editbar?: boolean | obj
}
~~~

Изучите соответствующие обзорные руководства по API, чтобы узнать о новых возможностях управления панелями:

- [Обзор API View](api/diagram_editor/view/api_overview.md)
- [Обзор API Toolbar](api/diagram_editor/toolbar/api_overview.md)
- [Обзор API Shapebar](api/diagram_editor/shapebar/api_overview.md)
- [Обзор API Editbar](api/diagram_editor/editbar/api_overview.md)

#### Устаревшие методы {#deprecated-methods}

- Метод `setViewMode()` компонента Diagram Editor устарел и больше не поддерживается. Вместо него используйте методы [`show()`](api/diagram_editor/view/methods/show_method.md)/[`hide()`](api/diagram_editor/view/methods/hide_method.md) объекта `view`.

~~~jsx {4} title="До v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.setViewMode("preview"); // "preview" или "edit"
~~~

~~~jsx {4-5} title="С v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.view.hide("shapebar");
editor.view.hide("editbar");
~~~

#### Устаревшие свойства {#deprecated-properties}

- Свойство `reservedWidth` компонента Diagram Editor устарело и больше не поддерживается.

~~~jsx {2} title="До v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    reservedWidth: 150
});
~~~

Вместо него используйте следующий синтаксис:

~~~jsx title="С v6.0"
editor.diagram.config.margin.x = 40;
~~~

- Свойство `editMode` компонента Diagram Editor устарело и больше не поддерживается. Вместо него используйте соответствующее свойство объекта `view` ([toolbar](api/diagram_editor/toolbar/api_overview.md), [shapebar](api/diagram_editor/shapebar/api_overview.md), [editbar](api/diagram_editor/editbar/api_overview.md)).

~~~jsx {2} title="До v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    editMode: false
});
~~~

~~~jsx {2-6} title="С v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: false,
        shapebar: false, // только для режима "default"
        editbar: false
    }
});
~~~

- Свойство `controls` компонента Diagram Editor устарело и больше не поддерживается. Вместо него используйте свойство [`items`](api/diagram_editor/toolbar/config/items_property.md) конфигурации `view.toolbar`.

~~~jsx {2-4} title="До v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    controls: {
        // ...
    }
});
~~~

~~~jsx {2-6} title="С v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: {
            items: []
        }
    }
});
~~~

- Свойство `shapeBarWidth` компонента Diagram Editor устарело и больше не поддерживается. Вместо него используйте свойство [`width`](api/diagram_editor/shapebar/config/width_property.md) конфигурации `view.shapebar`.

~~~jsx {2} title="До v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeBarWidth: 190
});
~~~

~~~jsx {3-7} title="С v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // 300 по умолчанию
        }
    }
});
~~~

- Свойство `shapeSections` компонента Diagram Editor устарело и больше не поддерживается. Вместо него используйте свойство [`sections`](api/diagram_editor/shapebar/config/sections_property.md) конфигурации `view.shapebar`.

~~~jsx {2-7} title="До v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "Swimlane": [{ swimlane: true }],
        "Groups": [{ group: true }],
        "Flowchart shapes": [{ flowShapes: true }],
        "Org shapes, text, topic": [{ org: true }, "text", "topic"]
    }
});
~~~

~~~jsx {3-12} title="С v6.0"
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

- Свойство `gapPreview` компонента Diagram Editor устарело и больше не поддерживается. Вместо него используйте свойство `gap` объекта [`preview`](api/diagram_editor/shapebar/config/preview_property.md) конфигурации `view.shapebar`.

~~~jsx {2} title="До v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="С v6.0"
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

- Свойство `scalePreview` компонента Diagram Editor устарело и больше не поддерживается. Вместо него используйте свойство `scale` объекта [`preview`](api/diagram_editor/shapebar/config/preview_property.md) конфигурации `view.shapebar`.

~~~jsx {2} title="До v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="С v6.0"
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

#### Устаревшие события {#deprecated-events}

- Следующие события компонента Diagram Editor устарели и больше не поддерживаются, так как в toolbar отсутствуют соответствующие кнопки: `resetButton`, `applyButton`, `visibility`, `exportData`, `importData`, `autoLayout`. Вместо них вы можете отслеживать событие `click` объекта `toolbar` компонента Diagram Editor:

~~~jsx
editor.toolbar.events.on("click", id => console.log(id));
~~~

:::note
Идентификаторы [служебных элементов](guides/diagram_editor/toolbar.md#service-elements) начинаются с символа `$`.
:::

- Событие `changeGridStep` компонента Diagram Editor устарело и больше не поддерживается.

### API Diagram {#diagram-api}

- Свойство `properties` метода [`addShape`](api/diagram/addshape_method.md) устарело и больше не используется. Настройка пользовательской фигуры в editbar компонента Editor выполняется через свойство [`properties`](api/diagram_editor/editbar/config/properties_property.md) панели Editbar:

~~~jsx {13-16} title="До v6.0"
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

~~~jsx {14-27} title="С v6.0"
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

### API Diagram Selection {#diagram-selection-api}

- Метод `getId()` объекта Selection компонента Diagram устарел и больше не поддерживается. Вместо него используйте методы [`getIds()`](api/selection/getids_method.md) и [`getItem()`](api/selection/getitem_method.md) объекта Selection. Ознакомьтесь с примерами ниже:

~~~jsx {7} title="До v6.0"
// diagram должен быть создан с опцией "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
diagram.data.parse(data);

const id = diagram.selection.getId(); // -> "2"
~~~

~~~jsx {7-11} title="С v6.0"
// diagram должен быть создан с опцией "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
diagram.data.parse(data);

// возвращает последний выбранный элемент
let id = diagram.selection.getIds().at(-1);
id = diagram.selection.getItem().id;
~~~

### Свойства фигур {#shape-properties}

Использование свойства `text` [объекта конфигурации фигуры](shapes/configuration_properties.md) теперь ограничено только строковым значением. Использование его в виде массива строковых значений при настройке пользовательской фигуры устарело и больше не поддерживается.

### Заголовки линий {#line-titles}

Заголовки линий перенесены из объектов `line` в общую структуру данных на том же уровне, что и линии, и определяются как объекты [`lineTitles`](/line_titles/).

До v6.0 заголовки линий указывались внутри объекта `line` следующим образом:

~~~jsx title="До v6.0"
const data = [
    // объект линии
    {
        // свойства объекта линии
        title?: {
            fontSize?: number | string, // по умолчанию 14
            lineHeight?: number | string, // по умолчанию 14
            textAlign?: "center" | "left" | "right", // по умолчанию "center"
            textVerticalAlign?: string,
            fontStyle?: "normal" | "italic" | "oblique", // по умолчанию "normal"
            fontColor?: string, // по умолчанию "#4C4C4C"
            fontWeight?: string, // по умолчанию "500"
            fill?: string,
            editable?: boolean, // по умолчанию true
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
                    editable?: boolean, // по умолчанию true
                    draggable?: boolean,
                    fill?: string,
                    text?: string,
                    fontSize?: number | string, // по умолчанию 14
                    lineHeight?: number | string, // по умолчанию 14
                    fontStyle?: "normal" | "italic" | "oblique", // по умолчанию "normal"
                    fontColor?: string, // по умолчанию "#4C4C4C"
                    fontWeight?: string, // по умолчанию "500"
                    textAlign?: "center" | "left" | "right", // по умолчанию "center"
                    textVerticalAlign?: "center" | "top" | "bottom" // по умолчанию "center"
                },
                // другие объекты для текстовых элементов линии
            ]
        }
    },
    // другие объекты линий
]
~~~

Начиная с v6.0 заголовки линий определяются в отдельных объектах с типом `"lineTitle"`. Объект `lineTitle` имеет следующие свойства конфигурации:

~~~jsx title="С v6.0"
const data = [
    // объект заголовка линии
    {
        type: "lineTitle",
        id?: string | number,
        text: string,
        parent: string | number,

        distance?: number, // по умолчанию 50
        autoPosition?: boolean, // по умолчанию true
        editable?: boolean, // по умолчанию true
        fixed?: boolean, // по умолчанию false
        hidden?: boolean, // по умолчанию false

        fill?: string,
        fontSize?: string | number, // по умолчанию 14
        lineHeight?: string | number, // по умолчанию 14
        fontStyle?: "normal" | "italic" | "oblique", // по умолчанию "normal"
        fontColor?: string, // по умолчанию "#4C4C4C"
        fontWeight?: string, // по умолчанию "500"
        textAlign?: "center" | "left" | "right" // по умолчанию "center"
    },
    // другие объекты
];
~~~

Подробнее см. в [API](line_titles/configuration_properties.md) и [руководствах](/line_titles/) по LineTitles.

### Локализация {#localization}

В связи с изменениями в интерфейсе Diagram Editor настройки локализации были обновлены. Подробности см. в [руководствах по локализации](guides/localization.md).

## 4.2 -> 5.0

### API Diagram {#diagram-api-1}

Свойство `lineGap` компонента Diagram устарело и больше не поддерживается. Вместо него используйте параметр `lineGap` свойства [lineConfig](api/diagram/lineconfig_property.md).

~~~jsx {3} title="До v5.0"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="С v5.0"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // другие параметры конфигурации
});
~~~

### API Editor {#editor-api}

Свойство `lineGap` компонента Diagram Editor устарело и больше не поддерживается. Вместо него используйте параметр `lineGap` внутри свойства `lineConfig`.

~~~jsx {3} title="До v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="С v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // другие параметры конфигурации
});
~~~

## 4.1 -> 4.2

### API Diagram {#diagram-api-2}

В v4.2 свойство `defaultLinkType` было объявлено устаревшим.

Начиная с v4.2, для указания типа соединительных линий по умолчанию необходимо использовать новое свойство [lineConfig](api/diagram/lineconfig_property.md).

~~~jsx title="До v4.2"
const diagram = new dhx.Diagram("diagram_container", {
    defaultLinkType: "dash"
});
~~~

~~~jsx {2-4} title="С v4.2"
const diagram = new dhx.Diagram("diagram_container", {
    lineConfig: {
        lineType: "dash",
    },
    // другие параметры конфигурации
});
~~~

### API Editor {#editor-api-1}

Синтаксис указания базовых наборов элементов для секций левой панели редактора был изменён.

До v4.2 можно было указать логическое значение *true* в массиве элементов секции, чтобы отобразить все доступные фигуры блок-схемы в этой секции:

~~~jsx {3} title="До v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [true],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

Начиная с v4.2, для этого необходимо использовать другой синтаксис:

~~~jsx {3} title="С v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [{ flowShapes: true }],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

Кроме того, появилась возможность указывать другие базовые наборы элементов с помощью соответствующих пар *key:value*. Подробнее см. в статье о `shapeSections`.

## 3.1 -> 4.0

### API

Событие `shapeHover` объявлено устаревшим в v4.0. Начиная с v4.0, вместо него используйте новое событие [itemMouseOver](api/diagram/itemmouseover_event.md).

~~~jsx title="До v4.0"
diagram.events.on("shapeHover", (id,e) => {
    console.log("An item"+ diagram.data.getItem(id).text +"has been hovered over");
});
~~~

~~~jsx title="С v4.0"
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
// Для Diagram Editor
editor.diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
~~~

## 3.0 -> 3.1

### API Editor {#editor-api-2}

Событие `shapeMove` объекта editor объявлено устаревшим в v3.1. Начиная с v3.1, вместо него используйте новые события `BeforeShapeMove` и `AfterShapeMove`.

~~~jsx title="До v3.1"
editor.events.on("shapeMove", () => {
    console.log("The shape is moved");
});
~~~

~~~jsx title="С v3.1"
// событие BeforeShapeMove
editor.events.on("BeforeShapeMove", (e) => {
    console.log("Before the shape is moved:", e);
    return true;
});

// событие AfterShapeMove
editor.events.on("AfterShapeMove", (e) => {
    console.log("After the shape is moved:", e);
});
~~~

## 2.2 -> 3.0

### Создание пользовательских фигур {#creating-custom-shapes}

Способ создания пользовательских фигур был изменён, упрощён и улучшен.

Начиная с v3.0, для создания собственных типов фигур вместо объекта *diagram.flowShapes* следует использовать новый метод `addShape`. Этот метод позволяет создавать HTML-шаблоны, которые будут работать в разных браузерах. Кроме того, он позволяет создавать и редактировать пользовательские фигуры в Diagram Editor.

Хотя объект *diagram.flowShapes* объявлен устаревшим, он продолжит работать.

### Кнопки Toolbar в Editor {#toolbar-buttons-in-editor}

До версии 3.0 вы могли показывать/скрывать кнопки toolbar в Diagram Editor с помощью соответствующих свойств конфигурации *showApply, showReset, showExport* компонента Editor.

В версии 3.0 эти свойства объявлены устаревшими и удалены. Вместо них добавлено свойство конфигурации `controls`, содержащее набор пар *control_name:value*. Таким образом, свойства заменены следующим образом:

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

Чтобы включить/отключить кнопку toolbar, необходимо задать значению элемента управления *true* (по умолчанию) или *false*.

Полный список доступных элементов управления см. в статье [Toolbar](guides/diagram_editor/toolbar.md).

## 1.1 -> 2.0

### Удалённое API {#removed-api}

- diagram.eachChild

### Изменённое API {#changed-api}

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
