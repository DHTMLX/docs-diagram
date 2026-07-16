---
sidebar_label: Панель фигур
title: Руководства редактора - Панель фигур
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о панели фигур редактора. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Панель фигур {#shapebar}

Панель фигур — это часть редактора, которая отображает превью элементов Diagram. Вы можете выбрать нужные элементы и перетащить их из панели фигур в область сетки.

:::note
Панель фигур доступна только в редакторе, инициализированном в режиме по умолчанию (type: `"default"`).
:::

## Разделы по умолчанию {#default-sections}

По умолчанию панель фигур разделена на три раздела: *Shapes*, *Groups* и *Swimlanes*. Раздел *Shapes* включает все фигуры по умолчанию, а также пользовательские фигуры.
Разделы *Groups* и *Swimlanes* содержат базовые наборы элементов.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Пользовательские разделы {#custom-sections}

Чтобы настроить структуру панели фигур, используйте свойство [`sections`](api/diagram_editor/shapebar/config/sections_property.md). Оно позволяет задавать собственные разделы в нужном порядке и распределять элементы по соответствующим разделам.

Свойство `sections` представляет собой объект с набором пар *key:value*, где `key` — это имя раздела, а `value` — массив со списком элементов, которые должны отображаться в этом разделе.

В зависимости от выбранных элементов конфигурация элементов конкретного раздела может выглядеть следующим образом:

1. Отображение базовых разделов

Вы можете отобразить базовый набор фигур с помощью объекта конфигурации `sections`. Например:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }],
                "Base org cards": [{ org: true }],
                "Base groups": [{ group: true }],
                "Base swimlane": [{ swimlane: true }]
            }
        }
    }
});
~~~

2. Указание элементов с помощью строковых литералов

Вы можете отображать элементы панели фигур, указывая типы фигур с помощью строковых литералов. Ознакомьтесь с примером ниже:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom section": ["custom_shape"],
                "Other shapes": ["text", "topic", "circle"]
            }
        }
    }
});
~~~

3. <p id="customization">Переопределение базовых конфигураций</p>

Другой вариант — переопределить базовые свойства любой фигуры и отобразить её с нужными параметрами. В примере ниже показано отображение фигуры типа `circle` с различными настройками текста и цвета:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Circles": [
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

Таким образом вы можете переопределить конфигурацию любого типа фигур.

4. Комбинирование элементов разных типов в одном разделе

Если в вашем проекте используются различные элементы, вы можете создавать в панели фигур разделы со смешанными типами элементов. Ознакомьтесь со следующим примером:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }, "text", "topic"],
                "Circles": [
                     "circle",
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

## Добавление элементов одного типа с разными настройками {#adding-items-of-the-same-type-with-different-settings}

Библиотека позволяет добавлять в панель фигур редактора несколько идентичных элементов (то есть элементов одного типа) с разными настройками.
Для этого необходимо:

- создать отдельные объекты с разными конфигурациями для элементов нужного типа. Вы можете создать столько объектов, сколько потребуется
- использовать *имена* созданных объектов в качестве *типов* элементов и добавить их в разделы панели фигур с помощью свойства [`sections`](api/diagram_editor/shapebar/config/sections_property.md)

## Настройка предпросмотра фигур {#setting-the-preview-of-shapes}

Чтобы настроить предпросмотр элементов, отображаемых на панели фигур редактора, используйте свойство [`preview`](api/diagram_editor/shapebar/config/preview_property.md). Это объект, содержащий два атрибута:

- `scale` - (необязательный) определяет масштаб элементов, отображаемых на панели фигур редактора, по умолчанию 0.5
- `gap` - (необязательный) задаёт расстояние между элементами, отображаемыми на панели фигур, по умолчанию "6px 8px"
(задаёт отступ 6px сверху и снизу и отступ 8px справа и слева)

~~~jsx
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

### Настройка предпросмотра фигуры {#customizing-a-shape-preview}

Чтобы настроить внешний вид конкретной фигуры, можно применить свойство конфигурации [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) объекта фигуры.

Это свойство можно применять в двух случаях:

- при настройке конфигурации по умолчанию для стандартной фигуры с помощью свойства [`defaults`](api/diagram_editor/editor/config/defaults_property.md) объекта редактора
- при настройке конфигурации по умолчанию для пользовательской фигуры с помощью атрибута `defaults` метода [`addShape()`](api/diagram/addshape_method.md)

Рассмотрим три примера настройки предпросмотра фигуры:

1\. Вы можете указать изображение, которое будет отображаться на панели фигур для пользовательской фигуры. Для этого нужно передать в свойство `preview` либо URL-адрес для загрузки изображения, либо изображение в формате base64 в виде строки:

~~~jsx {6}
const defaults = {
    title: "Name and First name",
    img: "../avatar-1.jpg",
    height: 115,
    width: 330,
    preview: "../shape_preview.png"
};

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

2\. Если нужно указать изображение и задать его ширину и высоту, передайте свойство `preview` в виде объекта с атрибутами `img`, `height` и `width`:

~~~jsx {4-8}
const defaults = {
    title: "Name and First name", email: "some@mail.com",
    img: "../avatar-1.jpg", height: 115, width: 330,
    preview: {
        img: "../shape_preview.png",
        height: 58,
        width: 165
    }
}

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

:::note
Вы можете задать точную ширину и высоту изображения, но нет возможности задать его масштаб.
:::

3\. Вы можете переопределить масштаб конкретной фигуры, отображаемой на панели фигур, с помощью свойства `scale`:

~~~jsx {2-4}
const defaults = {
    preview: {
        scale: 0.72
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom shapes": ["personalCard"],
                "OrgChart shapes": ["card", "img-card"]
            },
            preview: {
                scale: 0.65
            }
        }
    }
});

editor.diagram.addShape("personalCard", {
    defaults,
    // ...
});
~~~

:::note
Свойство `preview` будет опущено при экспорте данных в формат JSON.
:::

## Настройка ширины панели фигур {#setting-the-width-of-shapebar}

Ширина панели фигур по умолчанию равна 300. Вы можете изменить её и задать любую другую ширину с помощью свойства [`width`](api/diagram_editor/shapebar/config/width_property.md), например:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // 300 по умолчанию
        }
    }
});
~~~

## Отображение/скрытие панели фигур {#showinghiding-the-shapebar}

Когда нужно управлять видимостью панели фигур, используйте свойство [`show`](api/diagram_editor/shapebar/config/show_property.md). Оно позволяет скрыть панель фигур с определёнными настройками при инициализации Diagram Editor и показать её позже, когда потребуется. По умолчанию панель фигур отображается.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            show: false // true по умолчанию
        }
    }
});
~~~

## Внешний вид панели фигур и фигур {#shapebar-and-shapes-appearance}

Вы можете задать желаемый внешний вид панели фигур с помощью свойства [`css`](api/diagram_editor/shapebar/config/css_property.md). Оно позволяет указывать собственные классы CSS для стилизации отображения элементов на панели фигур по вашему усмотрению.

~~~html {6}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            shapebar: {
                css: "custom_style"
            }
        }
    });
</script>

<style>
    .custom_style {
        background-color: var(--dhx-background-primary);
        font-size: var(--dhx-font-size-large);
    }
</style>
~~~

Вы также можете [настроить внешний вид фигур](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar), переопределив цветовую схему по умолчанию для конкретной темы, или использовать собственные CSS-переменные для управления цветовой схемой элементов панели фигур.
