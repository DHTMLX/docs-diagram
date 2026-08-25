---
sidebar_label: css
title: Свойство css Shapebar
description: Вы можете узнать о свойстве css объекта Shapebar в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# css

### Описание {#description}

@short: Необязательно. Позволяет применять пользовательские классы CSS для настройки внешнего вида shapebar

### Использование {#usage}

~~~jsx
css?: string;
~~~

### Пример {#example}

~~~html {8}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            // shapebar: true, // отображает Shapebar по умолчанию
            // или настройка Shapebar через объект
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

**Полезные статьи**:

- [Внешний вид Shapebar и фигур](guides/diagram_editor/shapebar.md#shapebar-and-shapes-appearance)
- [Настройка внешнего вида фигур в Shapebar](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar)

**Журнал изменений**: Добавлено в v6.0
