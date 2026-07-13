---
sidebar_label: preview
title: Свойство preview Shapebar
description: Вы можете узнать о свойстве preview объекта Shapebar в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# preview

### Описание {#description}

@short: Необязательно. Объект, который настраивает предпросмотр элементов

### Использование {#usage}

~~~jsx
preview?: {
    scale?: number,
    gap?: string | number
}
~~~

### Параметры {#parameters}

- `scale` — (необязательно) определяет масштаб элементов, отображаемых в shapebar редактора
- `gap` — (необязательно) задаёт расстояние между элементами, отображаемыми в shapebar

### Конфигурация по умолчанию {#default-config}

~~~jsx
preview: {
    scale: 0.5,
    gap: "6px 8px"
    // задаёт отступ 6px сверху и снизу и 8px справа и слева
};
~~~

### Пример {#example}

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // отображает Shapebar по умолчанию
        // или настройка Shapebar через объект
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

### Подробнее {#details}

Значения свойств `gap` и `scale` можно переопределить для отдельной фигуры с помощью атрибутов `gap` и `scale` свойства [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) объекта фигуры:

~~~jsx {14-17}
const defaults = {
    rectangle: {
        preview: {
            scale: 0.72,
            gap: 8
        }
    }
}

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
           preview: {
               scale: 0.65,
               gap: 2
            }
        }
    },
    defaults
});
~~~

**Полезная статья**: [Shapebar](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)

**Журнал изменений**: Добавлено в v6.0
