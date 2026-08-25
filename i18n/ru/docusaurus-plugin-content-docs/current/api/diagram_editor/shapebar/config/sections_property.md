---
sidebar_label: sections
title: Свойство sections Shapebar
description: Вы можете узнать о свойстве sections объекта Shapebar в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# sections

[Разделы shapebar по умолчанию](guides/diagram_editor/shapebar.md#default-sections): *Фигуры*, *Группы*, *Дорожки*.

С помощью свойства `sections` вы можете изменить структуру shapebar и отобразить нужные элементы.

### Описание {#description}

@short: Необязательно. Объект, который определяет разделы элементов, отображаемых в shapebar редактора

### Использование {#usage}

~~~jsx
sections?: {
    [name: string]: (obj | string)[]
};
~~~

### Параметры {#parameters}

Объект `sections` может содержать набор пар *ключ:значение*, где:
- `key` — имя раздела, заданное пользователем
- `value` — массив, который может включать:
  - объект с одной парой *ключ:значение* для отображения <span id="basic">базового набора фигур</span>. Список доступных пар приведён ниже:
    - `{flowShapes: true}` — (необязательно) отображает все доступные типы фигур [блок-схемы](shapes/default_shapes.md#shapes-in-the-default-mode)
    - `{org: true}` — (необязательно) отображает организационные фигуры: типы `"card"` и `"img-card"`
    - `{group: true}` — (необязательно) отображает базовый набор групп
    - `{swimlane: true}` — (необязательно) отображает базовый набор дорожек
  - строковое значение с конкретным типом элемента, который будет отображён в разделе (например, `"text"`, `"topic"` и т. д.)
  - объект с несколькими парами *ключ:значение* для переопределения свойств по умолчанию любой фигуры

### Пример {#example}

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // отображает Shapebar по умолчанию
        // или настройка Shapebar через объект
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

### Подробнее {#details}

В зависимости от выбранных элементов конфигурация элементов конкретного раздела может быть следующей:

1. Отображение базовых разделов

Вы можете отобразить базовый набор фигур с помощью конфигурационного объекта `sections`. Например:

~~~jsx {5-10}
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

Вы можете отобразить элементы Shapebar, указав типы фигур с помощью строковых литералов. Смотрите пример ниже:

~~~jsx {5-8}
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

3. Переопределение базовых конфигураций

Другой вариант — переопределить базовые свойства любой фигуры и отобразить её с нужными параметрами. В примере ниже показано отображение фигуры типа `circle` с различными настройками текста и цвета:

~~~jsx {5-23}
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

Таким образом можно переопределить любой тип фигур.

4. Объединение элементов разных типов в одном разделе

Если ваш проект предполагает использование различных элементов, вы можете создавать в Shapebar разделы со смешанными типами элементов. Смотрите следующий пример:

~~~jsx {7-27}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // отображает Shapebar по умолчанию
        // или настройка Shapebar через объект
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

**Полезная статья**:  [Shapebar](guides/diagram_editor/shapebar.md#custom-sections)

**Журнал изменений**: Добавлено в v6.0
