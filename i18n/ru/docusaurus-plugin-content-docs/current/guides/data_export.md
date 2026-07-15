---
sidebar_label: Экспорт Diagram
title: Экспорт Diagram
description: Вы можете узнать об экспорте Diagram в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Экспорт Diagram {#exporting-diagram}

Вы можете экспортировать диаграмму в формат PDF или PNG с помощью соответствующих методов [pdf()](api/export/pdf_method.md)/[png()](api/export/png_method.md) объекта Export:

<iframe src="https://snippet.dhtmlx.com/ybpmz0zk?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Чтобы настроить параметры экспорта, передайте нужному методу объект с конфигурационными опциями.

Посмотрите список доступных настроек:

- для метода [pdf()](api/export/pdf_method.md)
- для метода [png()](api/export/png_method.md)

## Экспорт стилей {#exporting-styles}

По умолчанию все CSS-стили, подключённые на странице Diagram, отправляются в сервис экспорта. Из-за этого размер запроса увеличивается, что может привести к сбою.

Библиотека позволяет:

- запретить отправку всех стилей в сервис экспорта, установив
конфигурационное свойство [`exportStyles`](api/diagram/exportstyles_property.md) объекта Diagram в значение *false*:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles: false
});
~~~

- определить набор стилей, которые нужно экспортировать, указав абсолютные пути к нужным стилям в массиве [`exportStyles`](api/diagram/exportstyles_property.md):

<iframe src="https://snippet.dhtmlx.com/jm8if6nh?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

:::note
Используйте только абсолютные пути, а не относительные.
:::
