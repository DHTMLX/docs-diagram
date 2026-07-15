---
sidebar_label: addShape()
title: Метод addShape
description: Подробнее о методе addShape вы можете узнать в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# addShape()

### Описание {#description}

@short: Создает пользовательскую фигуру

Метод `addShape()` можно использовать как в диаграмме, так и в редакторе. [Смотрите примеры ниже](#example)

### Использование {#usage}

~~~jsx
addShape(
    type: string,
    parameters: object
): void;
~~~

### Параметры {#parameters}

- `type` - (обязательный) уникальное имя для типа пользовательской фигуры. Имя должно отличаться от имён фигур по умолчанию
- `parameters` - (обязательный) объект с дополнительными параметрами метода `addShape()`. Здесь можно указать следующие атрибуты:
    - `template: function` - (обязательный) функция, которая принимает объект конфигурации фигуры в качестве параметра и возвращает HTML- или SVG-шаблон
    - [`defaults: object`](shapes/custom_shape.md) - (необязательный) конфигурация по умолчанию для создаваемой фигуры. См. [полный список свойств конфигурации фигуры](shapes/configuration_properties.md)
    - [`eventHandlers: object`](shapes/custom_shape.md#event-handlers-for-custom-shapes) - (необязательный) добавляет пользовательские обработчики событий к HTML-элементам шаблона фигуры. Объект `eventHandlers` включает набор пар `key:value`, где:
        - `key: string` - имя события. Обратите внимание, что в начале имени события используется префикс 'on' (onclick, onmouseover)
        - `value: object` - объект, содержащий пару `key:value`, где
          - `key` — имя CSS-класса, к которому будет применён обработчик
          - `value` — функция, принимающая два параметра:
            - `event: object` - (обязательный) объект события
            - `shape: object` - (обязательный) объект фигуры

        :::tip
        Рекомендуем использовать разные CSS-классы для разных пользовательских фигур при инициализации пользовательских обработчиков событий.
        :::

### Пример {#example}

~~~jsx {8-37} title="Добавление фигуры в Diagram"
const diagram = new dhx.Diagram("diagram_container", {
    type: "org", //  или type: "default", или type: "mindmap"
    defaultShapeType: "personal",
});

diagram.data.parse(data);

diagram.addShape("personal", {
    template: ({ name, photo, post }) => (`
        <div class="dhx_diagram_template_a_box dhx_diagram_template_a">
            <div class="dhx_diagram_template_a__inside">
                <div class="dhx_diagram_template_a__picture" style="background-image: url(${photo});"></div>
                <div class="dhx_diagram_template_a__body">
                    <div class="dhx_diagram_template_a__title">${name}</div>
                    <div class="dhx_diagram_template_a__row">
                        <span class="dhx_diagram_template_a__text">${post}</span>
                    </div>
                </div>
                <div class="toggle--open-menu">
                    <span class="dhx_diagram_template_a__icon mdi mdi-dots-vertical"></span>
                </div>
            </div>
        </div>
    `),
    defaults: {
        height: 115, width: 330,
        name: "Name and First name",
        post: "Resident",
        photo: "",
    },
    eventHandlers: {
        onclick: {
            "toggle--open-menu": () => console.log("open menu")
        }
    }
});
~~~

**Связанный пример**: [Diagram с редактором. Режим организационной диаграммы. Настройка карточек, editbar и панели инструментов](https://snippet.dhtmlx.com/vcnt647v)

В примере ниже показано, как добавить пользовательскую фигуру в Diagram Editor, а также настроить панели [Shapebar](guides/diagram_editor/shapebar.md) и [Editbar](guides/diagram_editor/editbar.md) редактора. Настройка пользовательской фигуры в editbar редактора реализована через свойство [`properties`](api/diagram_editor/editbar/config/properties_property.md) панели Editbar.

~~~jsx {34-49} title="Добавление фигуры в Diagram Editor"
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
            <section class="dhx_diagram_template_d">
                <img class="dhx_diagram_template_d__image" src="${img}" alt="${text}"></img>
                <span class="dhx_diagram_template_d__title">${text}</span>
                <span class="dhx_diagram_template_d__text">${ip}</span>
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

**Журнал изменений**: атрибут `properties` удалён в v6.0.

**Полезная статья**: [Пользовательская фигура](shapes/custom_shape.md)

**Связанные примеры**:

- [Diagram. Режим интеллект-карты. Пример карты сайта и пользовательского сценария (пользовательский шаблон)](https://snippet.dhtmlx.com/do1jwmw1)
- [Diagram с редактором. Режим организационной диаграммы. Настройка карточек, editbar и панели инструментов](https://snippet.dhtmlx.com/vcnt647v)
- **Связанный пример**: [Diagram Editor. Режим по умолчанию. Базовые и пользовательские темы](https://snippet.dhtmlx.com/9twmlfus)
