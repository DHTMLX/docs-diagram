---
sidebar_label: Что нового
title: Что нового
description: Узнайте о новых возможностях библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Что нового {#whats-new}

Если вы обновляете Diagram с более старой версии, ознакомьтесь со статьей [Переход на новую версию](migration.md) для получения подробной информации.

## Версия 6.1.6 {#version-616}

Выпущено 1 июля 2026 г.

### Исправления {#fixes}

- Diagram. Исправлена ошибка, возникавшая при загрузке данных в Diagram через `ShapeCollection` (`DataCollection`) в режиме `mindmap`

## Версия 6.1.5 {#version-615}

Выпущено 17 июня 2026 г.

### Обновления {#updates}

- Diagram Editor. Улучшен процесс редактирования текста благодаря новым сочетаниям клавиш: <kbd>Ctrl</kbd>+<kbd>Enter</kbd> — начать редактирование, <kbd>Shift</kbd>+<kbd>Enter</kbd> — новая строка, <kbd>Enter</kbd> — подтвердить, <kbd>Escape</kbd> — отменить изменения

### Исправления {#fixes}

- Diagram Editor. Исправлена проблема, из-за которой линии, проходящие через группы дорожек, не выделялись
- Diagram Editor. Добавлена функция автопрокрутки при перетаскивании соединительных линий к фигурам за пределами текущей области просмотра.
- Diagram Editor. Исправлена ошибка, из-за которой фигура удалялась при редактировании ее текста
- Diagram. Исправлена ошибка, характерная для Safari, из-за которой линии со свойством `backArrow: "filled"` отображались некорректно

## Версия 6.1.3 {#version-613}

Выпущено 21 мая 2026 г.

### Обновления {#updates}

- Diagram / Diagram Editor. Улучшена логика автоматического размещения. Добавлена возможность управлять отступами между фигурами и уровнями с помощью новых свойств `itemPadding` и `levelPadding` в методе Diagram [`autoPlace()`](api/diagram/autoplace_method.md) и в объекте конфигурации [`autoplacement`](api/diagram/autoplacement_property.md)

### Исправления {#fixes}

- Diagram. Исправлена проблема, из-за которой применение автоматического размещения приводило к некорректным расстояниям между фигурами
- Diagram. Исправлена проблема, из-за которой вызов метода [`autoPlace()`](api/diagram/autoplace_method.md) игнорировал значения [`fromSide` и `toSide`](lines/configuration_properties.md) линий, что обеспечивает стабильность структуры диаграммы
- Diagram. Алгоритм автоматического размещения `Radial` был переработан для исправления проблемы с критически большими расстояниями между фигурами, что обеспечивает более компактную компоновку

## Версия 6.1.2 {#version-612}

Выпущено 2 апреля 2026 г.

### Исправления {#fixes}

- Diagram Editor. Исправлена проблема с созданием соединителей для фигур с отрицательными координатами
- Diagram Editor. Исправлена проблема, из-за которой нажатие клавиши <kbd>Backspace</kbd> во время встроенного редактирования текста приводило к удалению фигуры или заголовка линии
- Export. Устранена уязвимость безопасности при экспорте в PDF/PNG, которая позволяла получить произвольный доступ к локальным файлам через HTML-инъекцию, за счет улучшенной санитизации и усиления защиты окружения

## Версия 6.1.1 {#version-611}

Выпущено 5 февраля 2026 г.

### Исправления {#fixes}

- Diagram Editor. Невозможность автоматической прокрутки холста при перемещении элементов вниз и вправо

## Версия 6.1 {#version-61}

Выпущено 25 ноября 2025 г.

### Новый функционал {#new-functionality}

- Возможность создания PERT-диаграмм Diagram на основе наборов данных Gantt:
    - [новый режим PERT](/#diagram-in-the-pert-mode), задаваемый через [новый тип: `"pert"`](api/diagram/type_property.md)
    - [новые типы фигур: `"task"` и `"milestone"`](shapes/default_shapes.md#shapes-in-the-pert-mode)
    - [новый тип группы: `"project"`](/groups/#grouping-shapes-in-the-pert-mode) (для группировки задач и вех)
- Diagram Editor. Возможность управления сочетаниями клавиш (горячими клавишами) в редакторе:
    - новое свойство конфигурации [`hotkeys`](api/diagram_editor/editor/config/hotkeys_property.md) позволяет изменять или отключать существующие горячие клавиши, а также добавлять новые
- Diagram Editor. Возможность управления изменением размера и поворотом фигур с помощью набора новых событий:
[`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md),
[`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md),
[`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md),
[`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md),
[`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md),
[`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

### Обновления {#updates}

- DataCollection API. Обновления для режима PERT:
    - метод [`parse()`](api/data_collection/parse_method.md) может принимать в качестве первого параметра объект с массивами `data` и `links`
    - метод [`serialize()`](api/data_collection/serialize_method.md) может возвращать объект с массивами `data` и `links`
- Diagram API. Возможность задавать формат отображения дат в фигурах задач для режима PERT:
    - новый параметр `dateFormat` для свойства конфигурации [`typeConfig`](api/diagram/typeconfig_property.md)
- Diagram/Diagram Editor API. Возможность задавать тип соединения линий:
    - новый параметр `connectType` для свойства конфигурации [`lineConfig`](api/diagram/lineconfig_property.md) Diagram
    - новый параметр `connectType` для свойства конфигурации [`lineConfig`](api/diagram_editor/editor/config/lineconfig_property.md) Diagram Editor
- Export API. Функции экспорта [`pdf()`](api/export/pdf_method.md) и [`png()`](api/export/png_method.md) возвращают промис экспорта данных

### Исправления {#fixes}

- Diagram Editor. Ошибка скрипта, возникавшая при наведении курсора на фигуру в браузере Safari
- Diagram Editor. Предупреждения в консоли, возникавшие после удаления элементов

### Новая демонстрация на тему [интеграции с ИИ](guides/ai-integrations/ai-demo.md) {#new-demo-on-ai-integration}

- [Конструктор организационных диаграмм DHTMLX Diagram на основе ИИ](https://dhtmlx.com/docs/demo/ai-org-chart-builder/)


### Новые примеры {#new-samples}

- [Diagram. PERT-диаграмма. Инициализация](https://snippet.dhtmlx.com/4h5fi7xd)
- [Diagram и Gantt. PERT-диаграмма. Инициализация](https://snippet.dhtmlx.com/409jj9uh)
- [Diagram и Gantt. PERT-диаграмма. Полная интеграция](https://snippet.dhtmlx.com/gcnx4a9h)
- [Diagram и Gantt. PERT-диаграмма. Всплывающее окно](https://snippet.dhtmlx.com/fvfysbdb)
- [Diagram и Gantt. PERT-диаграмма. Пользовательские фигуры и стилизация (собственный CSS)](https://snippet.dhtmlx.com/mtk92awx)
- [Diagram. PERT-диаграмма. Разные наборы данных](https://snippet.dhtmlx.com/2j2y8vy6)
- [Diagram. PERT-диаграмма. Фильтрация/поиск задач](https://snippet.dhtmlx.com/1b2bmmxk)
- [Diagram. PERT-диаграмма. Пользовательская боковая панель для информации о задачах](https://snippet.dhtmlx.com/712lsox0)
- [Diagram. PERT-диаграмма. Темы](https://snippet.dhtmlx.com/2e5y5u6m)
- [Diagram. Экспорт. Водяной знак внизу слева](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. Экспорт. Повторяющийся водяной знак](https://snippet.dhtmlx.com/emkea55j)
- [Diagram. Интерактивная электрическая принципиальная схема](https://snippet.dhtmlx.com/cisyixkq)
- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур с помощью событий](https://snippet.dhtmlx.com/qldjbbm7)
- [Diagram Editor. Управление добавлением, изменением и отключением горячих клавиш через API](https://snippet.dhtmlx.com/8ads5dq8)
- [Diagram Editor. Диаграмма Исикавы. Причины и решения](https://snippet.dhtmlx.com/7vhwtiba)
- [Diagram Editor. Диаграмма Исикавы. Множественные причины](https://snippet.dhtmlx.com/0dgjwt6u)


## Версия 6.0.11 {#version-6011}

Выпущено 18 июня 2025 г.

### Исправления {#fixes}

- Diagram Editor. Некорректное перемещение фигур при увеличении масштаба

## Версия 6.0.10 {#version-6010}

Выпущено 10 марта 2025 г.

### Исправления {#fixes}

- Diagram. Проблема с изменением размера стрелки линии при редактировании ширины линии

## Версия 6.0.9 {#version-609}

Выпущено 4 февраля 2025 г.

### Исправления {#fixes}

- Diagram Editor. Проблема с перемещением группы вместе с элементами и перемещением элементов в группу/из группы
- Diagram. События `itemMouseOver` и `itemMouseOut` не срабатывают для выбранной фигуры

## Версия 6.0.8 {#version-608}

Выпущено 5 декабря 2024 г.

- Проблема с локальным пробным пакетом при импорте во фреймворки

## Версия 6.0.7 {#version-607}

Выпущено 27 ноября 2024 г.

- Diagram Editor. Возникала ошибка при редактировании фигуры с помощью Editbar
- Diagram Editor. Проблема с перемещением фигуры при навигации во время встроенного редактирования

## Версия 6.0.4 {#version-604}

Выпущено 1 октября 2024 г.

### Исправления {#fixes}

- Diagram Editor. Вызов метода `destructor()` вызывает ошибку

## Версия 6.0.3 {#version-603}

Выпущено 28 августа 2024 г.

### Исправления {#fixes}

- Diagram Editor. Применение разных локалей для `calendar`, `combobox`, `colorpicker`, `form`, `timepicker` в Editbar
- Diagram Editor. Добавление Diagram Editor в ячейку Layout
- Diagram Editor. Свойство `shapeToolbar` не является необязательным для режима `default`
- Diagram Editor. Некорректное поведение при наведении курсора, если пользовательская фигура имеет изображение предпросмотра


## Версия 6.0.2 {#version-602}

Выпущено 16 июля 2024 г.

### Исправления {#fixes}

- Diagram. Автоматическое размещение. Фигура скрывается под другой фигурой

## Версия 6.0.1 {#version-601}

Выпущено 24 июня 2024 г.

### Исправления {#fixes}

- Diagram Editor. Утечка памяти
- Diagram Editor. Ошибка скрипта при нажатии на вертикальное и горизонтальное распределение через Toolbar
- Diagram. Проблема с типами при вызове метода [`getSubHeaderCellId()`](api/cell_manager/getsubheadercellid_method.md)

## Версия 6.0 {#version-60}

Выпущено 16 мая 2024 г.

### Критические изменения {#breaking-changes}

Новое обновление вносит значительные изменения в структуру и функциональность Diagram и Diagram Editor. Ознакомьтесь со статьей [о миграции](migration.md#50---60), чтобы быть в курсе последней версии.

### Новый функционал {#new-functionality}

- Реструктуризация Diagram Editor: возможность взаимодействовать с его частями и управлять их видимостью с помощью свойства [`view`](api/diagram_editor/editor/config/view_property.md), которое включает следующие настройки:
    - [Toolbar](guides/diagram_editor/toolbar.md) — верхняя часть Diagram Editor, которая помогает пользователям управлять процессом редактирования (см. [обзор API](api/diagram_editor/toolbar/api_overview.md))
    - [Shapebar](guides/diagram_editor/shapebar.md) — (бывшая левая панель) часть Diagram Editor, отображающая предпросмотр элементов Diagram (см. [обзор API](api/diagram_editor/shapebar/api_overview.md))
    - [Editbar](guides/diagram_editor/editbar.md) — (бывшая правая панель) часть Diagram Editor, позволяющая пользователям редактировать элементы Diagram (см. [обзор API](api/diagram_editor/editbar/api_overview.md)). Доступны следующие действия:
        - наборы предопределенных [базовых элементов управления](api/diagram_editor/editbar/basic_controls_overview.md) и [сложных элементов управления](api/diagram_editor/editbar/complex_controls_overview.md)
        - настраиваемая конфигурация [базовых элементов управления](api/diagram_editor/editbar/basic_controls_overview.md) и [сложных элементов управления](api/diagram_editor/editbar/complex_controls_overview.md) в зависимости от заданных условий
        - динамическое управление панелью Editbar в зависимости от заданных условий ([пример](https://snippet.dhtmlx.com/ealq0m4l?mode=wide))
        - создание пользовательских элементов управления ([пример](https://snippet.dhtmlx.com/1p0wemnn?mode=wide))
        - создание HTML-контента ([пример](https://snippet.dhtmlx.com/vcnt647v?mode=wide))
- Diagram Editor. Добавлен [Copy manager API](api/diagram_editor/copymanager/api_overview.md)
- Diagram Editor. Возможность показывать/скрывать [Shapebar](api/diagram_editor/shapebar/config/show_property.md), [Editbar](guides/diagram_editor/editbar.md) и [Toolbar](guides/diagram_editor/toolbar.md)
- Diagram Editor. Добавлен метод [destructor()](api/diagram_editor/editor/methods/destructor_method.md)
- Diagram Editor. Возможность [скрывать точки соединения](api/diagram_editor/editor/config/connectionpoints_property.md)
- Diagram Editor. Возможность [скрывать точки изменения размера](api/diagram_editor/editor/config/resizepoints_property.md)
- Diagram Editor. Возможность [скрывать сетку](api/diagram_editor/editor/config/grid_property.md)
- Обновление [Selection API](/api/selection/) с возможностью множественного выделения
- Заголовки линий определяются как отдельные объекты в виде [`lineTitles`](/line_titles/) с собственными [свойствами конфигурации](line_titles/configuration_properties.md)
- [Поддержка новых тем](../category/themes/): Dark, Light High Contrast и Dark High Contrast ([пример](https://snippet.dhtmlx.com/9twmlfus))
- Diagram Editor. Возможность настраивать [цветовую схему элементов Shapebar](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar) путем переопределения переменных CSS и использования собственных

### Обновления {#updates}

- Diagram Editor. Обновлены [локали](guides/localization.md)
- Diagram Editor. Расширен список [горячих клавиш](guides/diagram_editor/hot_keys.md)
- Diagram Editor. Улучшено поведение элементов Shapebar при перетаскивании их на сетку, а также их внешний вид
- Diagram Editor. Функция обратного вызова событий [`zoomIn`](api/diagram_editor/editor/events/zoomin_event.md) / [`zoomOut`](api/diagram_editor/editor/events/zoomout_event.md) вызывается с параметром `step`
- Diagram Editor. Расширена функциональность параметра конфигурации [`magnetic`](api/diagram_editor/editor/config/magnetic_property.md)
- Diagram Editor. Обновлены [события](api/diagram_editor/editor/events/overview.md) перемещения объекта Editor:
[`afterGroupMove`](api/diagram_editor/editor/events/aftergroupmove_event.md),
[`afterItemCatch`](api/diagram_editor/editor/events/afteritemcatch_event.md),
[`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md),
[`afterLineTitleMove`](api/diagram_editor/editor/events/afterlinetitlemove_event.md),
[`afterShapeMove`](api/diagram_editor/editor/events/aftershapemove_event.md),
[`beforeGroupMove`](api/diagram_editor/editor/events/beforegroupmove_event.md),
[`beforeItemCatch`](api/diagram_editor/editor/events/beforeitemcatch_event.md),
[`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md),
[`beforeLineTitleMove`](api/diagram_editor/editor/events/beforelinetitlemove_event.md),
[`beforeShapeMove`](api/diagram_editor/editor/events/beforeshapemove_event.md),
[`groupMoveEnd`](api/diagram_editor/editor/events/groupmoveend_event.md),
[`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md),
[`itemTarget`](api/diagram_editor/editor/events/itemtarget_event.md),
[`lineTitleMoveEnd`](api/diagram_editor/editor/events/linetitlemoveend_event.md),
[`shapeMoveEnd`](api/diagram_editor/editor/events/shapemoveend_event.md)
- Возможность [работать с заголовками линий через DataCollection API](/line_titles/#working-with-line-titles)

### Устаревший API {#deprecated-api}

- #### Свойства

    - Свойство `controls` Diagram Editor устарело и больше не поддерживается
    - Свойство `editMode` Diagram Editor устарело и больше не поддерживается
    - Свойство `gapPreview` Diagram Editor устарело и больше не поддерживается
    - Свойство `reservedWidth` Diagram Editor устарело и больше не поддерживается
    - Свойство `scalePreview` Diagram Editor устарело и больше не поддерживается
    - Свойство `shapeBarWidth` Diagram Editor устарело и больше не поддерживается
    - Свойство `shapeSections` Diagram Editor устарело и больше не поддерживается
    - Свойство `title` данных [Line](lines/configuration_properties.md) устарело и больше не поддерживается

- #### Методы

    - Метод `getId()` объекта Selection Diagram устарел и больше не поддерживается
    - Метод `getSubId()` объекта Selection Diagram устарел и больше не поддерживается
    - Метод `setViewMode()` Diagram Editor устарел и больше не поддерживается

- #### События

    - Следующие события Diagram Editor устарели и больше не поддерживаются, так как в панели инструментов отсутствуют соответствующие кнопки: `resetButton`, `applyButton`, `visibility`, `exportData`, `importData`, `autoLayout`
    - Событие `changeGridStep` Diagram Editor устарело и больше не поддерживается

### Исправления {#fixes}

- Diagram Editor. Исправлена ошибка в консоли, возникавшая при повторном нажатии кнопки «Импорт данных» после импорта данных, если файл не был выбран
- Diagram Editor. Исправлена блокировка добавления новой фигуры
- Diagram Editor. Исправлено копирование линий при ручном выделении элементов
- Diagram Editor. Исправлено перетаскивание, когда корневая фигура находится рядом с дочерней, в режимах `mindmap`/`org`
- Diagram Editor. Исправлено некорректное поведение выделения, требовавшее дополнительного щелчка для выбора фигуры с помощью клавиши <kbd>Shift</kbd>
- Diagram Editor. Исправлено совместное перемещение группы и дорожки
- Diagram Editor. Исправлено удаление неиспользуемых линий/соединителей
- Diagram Editor. Исправлена возможность перемещения элементов с разными родителями к целевому элементу (для режимов `org`/`mindmap`)
- Diagram Editor. Исправлена возможность задавать значения по умолчанию для элементов Shapebar
- Diagram Editor. Исправлено отображение соединителей при наведении перемещаемых элементов на любую фигуру
- Diagram Editor. Исправлена невозможность удаления выбранных элементов через меню в режимах `mindmap`/`org`
- Diagram Editor. Исправлена проблема, из-за которой импорт данных работал только один раз
- Diagram Editor. Улучшена производительность при перемещении соединителя
- Diagram Editor. Ограничена запись действий при перемещении соединителя в `historyManager`
- Diagram Editor. Оптимизирована логика поиска ближайшего соединителя
- Исправлена локализация для сложных виджетов

## Версия 5.0.3 {#version-503}

Выпущено 12 июля 2023 г.

### Исправления {#fixes}

- Исправлена проблема, из-за которой вызов метода [autoPlace()](api/diagram/autoplace_method.md) после парсинга данных вызывал ошибку

## Версия 5.0.2 {#version-502}

Выпущено 30 мая 2023 г.

### Исправления {#fixes}

- Diagram Editor. Исправлена проблема, из-за которой пользовательские точки не перемещались при множественном выделении
- Diagram Editor. Исправлена невозможность соединения фигуры с самой собой
- Исправлена проблема с экспортом диаграммы по умолчанию без [exportStyles](api/diagram/exportstyles_property.md)
- Исправлена проблема с библиотекой promiz.js, вызывавшая ошибку определения метода setImmediate() при импорте исходников
- Исправлено формирование пути URL в объекте Export
- Добавлены типы для экспорта

## Версия 5.0.1 {#version-501}

Выпущено 19 января 2023 г.

### Исправления {#fixes}

- Diagram Editor. Исправлена проблема, из-за которой линии не всегда отображались на своих местах при экспорте данных и последующей загрузке
    - Теперь можно задавать координаты линий в режиме по умолчанию (новое свойство [`points`](lines/configuration_properties.md#properties-specific-for-the-default-mode) объекта линии)
- Diagram Editor. Исправлена проблема с перетаскиванием фигур в сетке после изменения уровня масштабирования
- Исправлена ошибка, возникавшая при нажатии кнопки «Автоматическая раскладка» при отсутствии фигур
- Исправлена проблема с отображением [настроек по умолчанию](api/diagram/defaults_property.md) после создания линий через редактор
- Исправлена проблема с масштабом Diagram/Diagram Editor, возникавшая при автоматическом размещении фигур в режиме `"radial"`

## Версия 5.0 {#version-50}

Выпущено 7 сентября 2022 г.

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-5-0/" target="_blank">Обзор релиза в блоге</a>

### Критические изменения {#breaking-changes}

Новый релиз вносит некоторые изменения в свойство `lineGap`. Ознакомьтесь со статьей [о миграции](migration.md#42---50), чтобы быть в курсе последней версии.

### Новый функционал {#new-functionality}

#### Diagram {#diagram}

- Алгоритм Radial для [автоматического размещения фигур](guides/diagram/configuration.md#configuring-autoplacement-for-shapes):
    - параметр `placemode` добавлен в свойство [`autoplacement`](api/diagram/autoplacement_property.md)
    - параметр `placemode` добавлен в метод [`autoPlace()`](api/diagram/autoplace_method.md)
- Возможность задавать подсказки для значков панели инструментов:
    - параметр `tooltip` объекта значка добавлен в свойство [`toolbar`](api/diagram/toolbar_property.md)

#### Diagram Editor {#diagram-editor}

- Алгоритм Radial для автоматического размещения фигур:
    - параметр `placemode` добавлен в свойство [`autoplacement`](api/diagram_editor/editor/config/autoplacement_property.md)
    - кнопка **Автоматическая раскладка** [Toolbar](guides/diagram_editor/toolbar.md) теперь предоставляет два варианта автоматического размещения фигур: *Orthogonal* и *Radial*
- [Линии привязки](guides/diagram_editor/grid_area.md#enablingdisabling-snap-lines) для более точного размещения фигур в рабочей области
- Возможность настраивать линии привязки с помощью нового свойства [`magnetic`](api/diagram_editor/editor/config/magnetic_property.md)
- Возможность копировать и вставлять стили элемента(ов) с помощью <kbd>Alt</kbd> (<kbd>Option</kbd>) + <kbd>Ctrl</kbd> (<kbd>Cmd</kbd>) + <kbd>С</kbd> => <kbd>Alt</kbd> (<kbd>Option</kbd>) + <kbd>Ctrl</kbd> (<kbd>Cmd</kbd>) + <kbd>V</kbd> (см. **[пример](https://snippet.dhtmlx.com/klgvu3jq)**)
- Возможность [выравнивать и распределять несколько элементов](guides/diagram_editor/grid_area.md#aligning-multiple-items)
- Теперь при наведении курсора на элементы управления в персональной панели инструментов элементов появляются подсказки
- Расширен список [параметров локали](guides/localization.md) для локализации подсказок в панели инструментов элемента
- Возможность задавать подсказки для [пользовательских значков панели инструментов](guides/diagram_editor/grid_area.md#configuring-the-toolbar-of-an-item):
    - параметр `tooltip` объекта значка добавлен в свойство [`shapeToolbar`](api/diagram_editor/editor/config/shapetoolbar_property.md)
- Улучшен дизайн [рабочей области](guides/diagram_editor/grid_area.md). Теперь расстояние между точками в рабочей области зависит от значения шага сетки

### Исправления {#fixes}

- Исправлена проблема, из-за которой значок загрузки не исчезал из правой панели редактора после загрузки файла

## Версия 4.2 {#version-42}

Выпущено 3 марта 2022 г.

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-2-touch-support-default-settings-connector-lines-default-section-sets-editors-left-panel/" target="_blank">Обзор релиза в блоге</a>

### Новый функционал {#new-functionality}

- [Поддержка сенсорного управления](guides/touch_support.md)
- Возможность задавать настройки по умолчанию для линий с помощью свойства [`lineConfig`](api/diagram/lineconfig_property.md) Diagram
- Возможность задавать настройки по умолчанию для новых линий, создаваемых в редакторе, с помощью свойства [`lineConfig`](api/diagram_editor/editor/config/lineconfig_property.md) Diagram Editor
- Возможность добавлять стандартные наборы фигур org, групп, дорожек в нужном порядке при [настройке разделов в левой панели редактора](guides/diagram_editor/shapebar.md#custom-sections)

### Обновления {#updates}

- Свойство `defaultLinkType` Diagram устарело. Ознакомьтесь со статьей [о миграции](migration.md#41---42)
- Обновлено свойство `shapeSections` Diagram Editor. Ознакомьтесь со статьей [о миграции](migration.md#41---42)
- Теперь можно задавать конфигурации по умолчанию не только для фигур определенных типов, но и для линий:
    - обновлено свойство [`defaults`](api/diagram/defaults_property.md) Diagram
    - обновлено свойство [`defaults`](api/diagram_editor/editor/config/defaults_property.md) Diagram Editor
- Обновлена документация по разделу [Режимы соединения фигур](api/diagram/autoplace_method.md#modes-of-connecting-shapes)

## Версия 4.1 {#version-41}

Выпущено 7 декабря 2021 г.

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-1-partners-assistants-org-charts-moving-shapes-children-connector-titles-much/" target="_blank">Обзор релиза в блоге</a>

### Новый функционал {#new-functionality}

- Возможность добавлять [фигуры-партнеры](/#assistant-and-partner-shapes) в режиме организационной диаграммы
- Возможность добавлять [фигуры-помощники](/#assistant-and-partner-shapes) в режиме организационной диаграммы
- Возможность добавлять [заголовки к линиям](/#line-titles) в режиме по умолчанию
- Возможность [перетаскивать фигуры](editor_overview.md#editor-in-the-org-chart-mode) от одного родителя к другому в редакторе в режимах организационной диаграммы и ментальной карты. Фигуры перетаскиваются вместе с дочерними элементами
- Возможность [стилизовать целевые элементы](guides/customization.md#styling-target-shapes) в редакторе в режимах организационной диаграммы и ментальной карты

### API {#api}

- Новые события объекта Diagram: [`emptyAreaDblClick`](api/diagram/emptyareadblclick_event.md), [`emptyAreaMouseDown`](api/diagram/emptyareamousedown_event.md), [`lineTitleClick`](api/diagram/linetitleclick_event.md), [`lineTitleDblClick`](api/diagram/linetitledblclick_event.md), [`lineTitleMouseDown`](api/diagram/linetitlemousedown_event.md)
- Новые [свойства фигур](shapes/configuration_properties.md#properties-specific-for-the-org-chart-mode), специфичные для режима организационной диаграммы: `assistant`, `partner`, `catchItem`, `giveItem`
- Новые [свойства фигур](shapes/configuration_properties.md#properties-specific-for-the-mindmap-mode), специфичные для режима mindmap: `catchItem`, `giveItem`
- Новые [свойства линий](lines/configuration_properties.md#properties-specific-for-the-default-mode), специфичные для режима по умолчанию: `title`
- Новые методы объекта Editor: `setViewMode()`, `zoomIn()`, `zoomOut()`
- Новые события объекта Editor: [`beforeLineTitleMove`](api/diagram_editor/editor/events/beforelinetitlemove_event.md), [`afterLineTitleMove`](api/diagram_editor/editor/events/afterlinetitlemove_event.md), [`lineTitleMoveEnd`](api/diagram_editor/editor/events/linetitlemoveend_event.md), [`itemTarget`](api/diagram_editor/editor/events/itemtarget_event.md), [`beforeItemCatch`](api/diagram_editor/editor/events/beforeitemcatch_event.md), [`afterItemCatch`](api/diagram_editor/editor/events/afteritemcatch_event.md)
- Новые свойства объекта Editor: [`itemsDraggable`](api/diagram_editor/editor/config/itemsdraggable_property.md)
- Новые методы HistoryManager: [`add()`](api/diagram_editor/historymanager/methods/add_method.md), [`disable()`](api/diagram_editor/historymanager/methods/disable_method.md), [`enable()`](api/diagram_editor/historymanager/methods/enable_method.md), [`isRedo()`](api/diagram_editor/historymanager/methods/isredo_method.md), [`redo()`](api/diagram_editor/historymanager/methods/redo_method.md), [`reset()`](api/diagram_editor/historymanager/methods/reset_method.md), [`undo()`](api/diagram_editor/historymanager/methods/undo_method.md)
- Новые свойства HistoryManager: `disabled`, [`saveDelay`](api/diagram_editor/historymanager/config/savedelay_property.md)
- Новый метод Selection: `getSubId()`

### Обновления {#updates}

- Обновлены события [InlineEditor](/api/inline_editor/): параметр *subHeaderId* изменен на *subId*
- Обновлены события [Selection API](/api/selection/#events): добавлен параметр *subId*
- Тип фигуры по умолчанию в режиме по умолчанию изменен на [*"rectangle"*](shapes/configuration_properties.md#common-properties)

### Исправления {#fixes}

- Улучшена производительность для всех типов диаграмм
- Исправлена некорректная работа кнопок *undo/redo* в Toolbar редактора

## Версия 4.0.1 {#version-401}

Выпущено 16 сентября 2021 г.

### Исправления {#fixes}

- Исправлено отображение соединителей при повороте фигуры
- Исправлены минифицированные стили диаграммы
- Исправлена работа алгоритма при добавлении новых элементов в редактор диаграмм в режимах организационной диаграммы/mindmap
- Исправлена работа правой панели редактора при работе со стилями текста

## Версия 4.0 {#version-40}

Выпущено 7 сентября 2021 г.

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-0-groups-swimlanes-angular-react-vue-demos/" target="_blank">Обзор релиза в блоге</a>

### Новый функционал {#new-functionality}

- Добавлены новые элементы диаграммы: [Группы](/groups/), [Дорожки](/swimlanes/)
- Добавлены новые разделы в левой панели Diagram Editor: [Группы, Дорожки](guides/diagram_editor/shapebar.md#default-sections)
- [В правую панель редактора добавлены новые параметры боковой панели для групп и дорожек](guides/diagram_editor/editbar.md)
- Возможность редактировать [группы](guides/diagram_editor/grid_area.md#managing-groups) и [дорожки](guides/diagram_editor/grid_area.md#managing-swimlanes) через пользовательский интерфейс
- Расширен список [параметров локали](guides/localization.md)
- Возможность управлять ячейками дорожки через [CellManager API](/api/cell_manager/)
- Возможность редактировать текст элемента двойным щелчком по нему
- Добавлена демонстрация [DHTMLX Diagram с Angular](guides/integrations/angular_integration.md)
- Добавлена демонстрация [DHTMLX Diagram с React](guides/integrations/react_integration.md)
- Добавлена демонстрация [DHTMLX Diagram с Vue.js](guides/integrations/vue_integration.md)
- Возможность [добавлять одинаковые элементы с разными стилями и настройками в левую панель редактора](guides/diagram_editor/shapebar.md)

### API {#api}

- Новые методы [CellManager API](/api/cell_manager/): [add()](api/cell_manager/add_method.md), [getCellId()](api/cell_manager/getcellid_method.md), [getCellIndex()](api/cell_manager/getcellindex_method.md), [getSubHeaderCellId()](api/cell_manager/getsubheadercellid_method.md), [getSubHeaderCellIndex()](api/cell_manager/getsubheadercellindex_method.md), [getSubHeaderType()](api/cell_manager/getsubheadertype_method.md), [move()](api/cell_manager/move_method.md), [remove()](api/cell_manager/remove_method.md), [resetSwimlane()](api/cell_manager/resetswimlane_method.md), [setSwimlane()](api/cell_manager/setswimlane_method.md), [validation()](api/cell_manager/validation_method.md)
- Новые события [CellManager API](/api/cell_manager/): [afterCellsAdd](api/cell_manager/aftercellsadd_event.md), [afterCellsMove](api/cell_manager/aftercellsmove_event.md), [afterCellsRemove](api/cell_manager/aftercellsremove_event.md), [afterCellsValidation](api/cell_manager/aftercellsvalidation_event.md), [beforeCellsAdd](api/cell_manager/beforecellsadd_event.md), [beforeCellsMove](api/cell_manager/beforecellsmove_event.md), [beforeCellsRemove](api/cell_manager/beforecellsremove_event.md), [beforeCellsValidation](api/cell_manager/beforecellsvalidation_event.md)
- Новые события объекта Diagram: [afterSubmenuOpen](api/diagram/aftersubmenuopen_event.md), [beforeSubmenuOpen](api/diagram/beforesubmenuopen_event.md), [groupClick](api/diagram/groupclick_event.md), [groupDblClick](api/diagram/groupdblclick_event.md), [groupHeaderClick](api/diagram/groupheaderclick_event.md), [groupHeaderDblClick](api/diagram/groupheaderdblclick_event.md), [groupMouseDown](api/diagram/groupmousedown_event.md), [itemClick](api/diagram/itemclick_event.md), [itemDblClick](api/diagram/itemdblclick_event.md), [itemMouseDown](api/diagram/itemmousedown_event.md), [itemMouseOut](api/diagram/itemmouseout_event.md), [itemMouseOver](api/diagram/itemmouseover_event.md), [lineDblClick](api/diagram/linedblclick_event.md), [lineMouseDown](api/diagram/linemousedown_event.md)
- Новые события объекта Editor:  [shapeMoveEnd](api/diagram_editor/editor/events/shapemoveend_event.md), [beforeItemMove](api/diagram_editor/editor/events/beforeitemmove_event.md), [afterItemMove](api/diagram_editor/editor/events/afteritemmove_event.md), [itemMoveEnd](api/diagram_editor/editor/events/itemmoveend_event.md), [beforeGroupMove](api/diagram_editor/editor/events/beforegroupmove_event.md), [afterGroupMove](api/diagram_editor/editor/events/aftergroupmove_event.md), [groupMoveEnd](api/diagram_editor/editor/events/groupmoveend_event.md)
- Новые методы DataCollection: [eachChild()](api/data_collection/eachchild_method.md), [eachParent()](api/data_collection/eachparent_method.md), [getRoot()](api/data_collection/getroot_method.md), [getRoots()](api/data_collection/getroots_method.md)
- Новые события InlineEditor: [afterEditorClose](api/inline_editor/aftereditorclose_event.md), [afterEditorEditing](api/inline_editor/aftereditorediting_event.md), [afterEditorOpen](api/inline_editor/aftereditoropen_event.md), [beforeEditorClose](api/inline_editor/beforeeditorclose_event.md), [beforeEditorEditing](api/inline_editor/beforeeditorediting_event.md), [beforeEditorOpen](api/inline_editor/beforeeditoropen_event.md)
- Новые атрибуты конфигурации "editable" и "fixed" [объекта фигуры](shapes/configuration_properties.md)

### Обновления {#updates}

- Улучшена навигация с клавиатуры
- Изменен дизайн фигур
- Обновлены события объекта Editor: [beforeShapeMove](api/diagram_editor/editor/events/beforeshapemove_event.md) и [afterShapeMove](api/diagram_editor/editor/events/aftershapemove_event.md)
- Улучшена структура Shape Collection API

### Исправления {#fixes}

- Исправлена некорректная работа определений типов TypeScript в редакторе
- Исправлена проблема, из-за которой нажатие кнопки панели инструментов в редакторе, размещенном внутри HTML-формы, вызывало отправку формы
- Теперь изменение размера элемента возможно только в том случае, если угол его поворота равен 0 или 360 градусам.
- Значительная оптимизация стилей Diagram

## Версия 3.1 {#version-31}

Выпущено 15 апреля 2021 г.

### Новый функционал {#new-functionality}

- [Поддержка TypeScript](guides/using_typescript.md)
- Добавлен новый режим mindmap ([type:"mindmap"](api/diagram/type_property.md)) DHTMLX Diagram
- Возможность [настраивать направление дочерних фигур относительно корневой фигуры в режиме mindmap Diagram](guides/diagram/configuration.md#arranging-shapes-in-the-mindmap-mode-of-diagram) с помощью свойства конфигурации [typeConfig](api/diagram/typeconfig_property.md) объекта диаграммы
- Возможность [добавлять пользовательские обработчики событий для пользовательских фигур](shapes/custom_shape.md#event-handlers-for-custom-shapes) с помощью атрибута "eventHandlers" метода [addShape()](api/diagram/addshape_method.md)
- Возможность настраивать персональные панели инструментов для редактирования элементов в [рабочей области](guides/diagram_editor/grid_area.md) с помощью свойства [shapeToolbar](api/diagram_editor/editor/config/shapetoolbar_property.md) объекта Editor
- Новые события объекта Editor: [BeforeShapeIconClick](api/diagram_editor/editor/events/beforeshapeiconclick_event.md) и [AfterShapeIconClick](api/diagram_editor/editor/events/aftershapeiconclick_event.md), [BeforeShapeMove](api/diagram_editor/editor/events/beforeshapemove_event.md) и [AfterShapeMove](api/diagram_editor/editor/events/aftershapeiconclick_event.md)
- Возможность отменить отправку стилей CSS в сервис экспорта с помощью параметра конфигурации [exportStyles](api/diagram/exportstyles_property.md) объекта диаграммы

### Обновления {#updates}

- Обновлено свойство конфигурации [type](api/diagram/type_property.md) объекта диаграммы: добавлены новые значения "default" и "mindmap"
- Обновлены методы [collapseItem()](api/diagram/collapseitem_method.md) и [expandItem()](api/diagram/expanditem_method.md): добавлен второй параметр "dir"
- Обновлены события [beforeCollapse](api/diagram/beforecollapse_event.md), [afterCollapse](api/diagram/aftercollapse_event.md), [beforeExpand](api/diagram/beforeexpand_event.md) и [afterExpand](api/diagram/afterexpand_event.md): добавлен второй параметр "dir"

### Исправления {#fixes}

- Исправлена проблема с модулем выделения для всех типов DHTMLX Diagram
- Исправлена проблема с прокруткой диаграммы, инициализированной в режиме по умолчанию, при применении метода "showItem()" к масштабированной диаграмме
- Исправлена некорректная работа DOM Parser с HTML-шаблонами
- Исправлена проблема, из-за которой корневая фигура сворачивалась после сворачивания любой дочерней фигуры
- Исправлена проблема с форматированием текста фигуры
- Исправлена проблема, возникавшая после добавления длинного текста в поле textarea правой панели редактора
- Исправлена проблема с добавлением специальных символов в текст пользовательских фигур
- Исправлена проблема с предупреждениями, отображаемыми в консоли для пользовательских фигур
- Исправлена ошибка скрипта, возникавшая после удаления корневой фигуры в редакторе
- Исправлена проблема с ошибкой, отображаемой в консоли после нажатия кнопки «Автоматическая раскладка» в редакторе, если редактор не настроен
- Исправлена проблема, из-за которой тип контура фигуры не применялся после его изменения в режиме по умолчанию редактора
- Исправлена проблема с отслеживанием параметров фигуры в правой панели редактора, инициализированного в режиме по умолчанию
- Исправлена проблема со снятием фокуса с фигуры в режиме по умолчанию редактора
- Исправлена проблема с установкой соединителей между фигурами в нужном порядке, если редактор инициализирован в режиме по умолчанию
- Исправлена некорректная работа комбинации <kbd>Ctrl</kbd>+<kbd>A</kbd> в режиме организационной диаграммы редактора
- Исправлена проблема, из-за которой фигуры вставлялись без соединителей при копировании связанных фигур
- Теперь невозможно удалить корневую фигуру из редактора с помощью навигации клавиатурой, если редактор инициализирован в режиме организационной диаграммы

## Версия 3.0.4 {#version-304}

Выпущено 27 января 2021 г.

### Исправления {#fixes}

- Исправлено некорректное поведение фигуры, выбранной в редакторе, инициализированном в режиме по умолчанию, при работе с полем ввода на странице
- Исправлена проблема, из-за которой свернутый/развернутый элемент не работал со своим родителем
- Исправлена некорректная работа метода [showItem()](api/diagram/showitem_method.md), если дочерний элемент скрыт

## Версия 3.0.3 {#version-303}

Выпущено 23 декабря 2020 г.

### Исправления {#fixes}

- Исправлена проблема со службой экспорта Diagram

## Версия 3.0.2 {#version-302}

Выпущено 14 июля 2020 г.

### Исправления {#fixes}

- Исправлена проблема с импортом данных из JSON в редактор, инициализированный в режиме организационной диаграммы
- Исправлена некорректная работа метода [addShape()](api/diagram/addshape_method.md) при настройке правой панели редактора
- Улучшено поведение элемента управления historyManager панели инструментов в редакторе

## Версия 3.0.1 {#version-301}

Выпущено 29 мая 2020 г.

### Исправления {#fixes}

- Исправлена проблема с методом [autoPlace()](api/diagram/autoplace_method.md)
- Исправлена проблема с модулями экспорта PNG/PDF

## Версия 3.0 {#version-30}

Выпущено 12 мая 2020 г.

### Критические изменения {#breaking-changes}

Новое обновление вносит некоторые изменения и улучшения. Ознакомьтесь со статьей [о миграции](migration.md#22---30), чтобы быть в курсе последней версии.

### Новый функционал {#new-functionality}

- Добавлены новый метод [autoPlace()](api/diagram/autoplace_method.md) и свойство [autoplacement](api/diagram/autoplacement_property.md) для [автоматического упорядочивания связанных фигур](guides/manipulating_items.md#arranging-shapes-automatically) в иерархической структуре
- [Возможность задавать конфигурацию фигуры по умолчанию](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape) с помощью свойства `defaults` при инициализации [Diagram](api/diagram/defaults_property.md) или [Diagram Editor](api/diagram_editor/editor/config/defaults_property.md)
- Добавлен метод [addShape()](api/diagram/addshape_method.md) для [создания пользовательских фигур](shapes/custom_shape.md) в Diagram и Diagram Editor
- Новые свойства объекта Editor: `controls`, [defaults](api/diagram_editor/editor/config/defaults_property.md), `shapeSections`, `shapeBarWidth`, `scalePreview`, [scale](api/diagram_editor/editor/config/scale_property.md), `gapPreview`
- Параметр боковой панели *Шаг сетки* добавлен в [правую панель редактора](guides/diagram_editor/editbar.md)
- Возможность скрывать/показывать любые кнопки панели инструментов редактора, а также параметр боковой панели *Шаг сетки*, с помощью свойства `controls` объекта Editor
- Возможность [настраивать параметры боковой панели для редактирования атрибутов пользовательских фигур в правой панели редактора](guides/diagram_editor/editbar.md) с помощью атрибута `properties` метода [addShape()](api/diagram/addshape_method.md)
- [Возможность настраивать разделы в левой панели редактора](guides/diagram_editor/shapebar.md#custom-sections)
- [Возможность настраивать внешний вид фигур, отображаемых в левой панели редактора](guides/diagram_editor/shapebar.md), с помощью свойства [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) объекта фигуры
- Возможность [выбирать, копировать, вставлять, удалять и перемещать несколько фигур в редакторе](guides/diagram_editor/grid_area.md#manipulating-multiple-items)
- Возможность [выбирать и удалять несколько соединительных линий](guides/diagram_editor/grid_area.md#manipulating-multiple-items) в редакторе, инициализированном в режиме по умолчанию
- Возможность импортировать данные из файла JSON в редактор с помощью кнопки [«Импорт данных»](guides/diagram_editor/toolbar.md) панели инструментов
- Добавлен метод [destructor()](api/diagram/destructor_method.md)

### Обновления {#updates}

- Возможность использовать пользовательские HTML-шаблоны в IE
- Обновлен и улучшен пользовательский интерфейс Diagram Editor
- Возможность соединять фигуры от центра к центру
- Обновлен набор горячих клавиш для редактора
- Возможность подключать соединительную линию к фигуре *text* в редакторе, инициализированном в режиме по умолчанию
- Добавлена автоподгонка ширины содержимого фигуры *text*

## Версия 2.2.1 {#version-221}

Выпущено 30 декабря 2019 г.

### Исправления {#fixes}

- Проблема с поддержкой IE для загрузчика изображений в редакторе Diagram

## Версия 2.2 {#version-22}

Выпущено 27 ноября 2019 г.

### Новый функционал {#new-functionality}

- Возможность создавать пользовательские фигуры с помощью SVG- и HTML-шаблонов
- Возможность создавать диаграммы с фигурами разных типов
- Возможность экспортировать данные из Diagram Editor в формат JSON с помощью кнопки «Export data» [панели инструментов](guides/diagram_editor/toolbar.md)
- В Diagram Editor добавлены параметр [showExport](migration.md#toolbar-buttons-in-editor) и событие `exportData`

### Исправления {#fixes}

- Исправлена проблема с экспортом диаграммы в форматы PDF и PNG
- Исправлена некорректная работа событий мыши
- Исправлена проблема с удалением дочерних фигур из диаграммы, инициализированной в режиме организационной диаграммы
- Исправлена некорректная работа правой и левой панелей в Diagram Editor
- Исправлена проблема с автоматической генерацией уникальных id фигур и соединителей

## Версия 2.1.1 {#version-211}

Выпущено 11 октября 2019 г.

### Исправления {#fixes}
- Проблемы с img-card в IE

## Версия 2.1 {#version-21}

Выпущено 22 мая 2017 г.

### Новый функционал {#new-functionality}

- Удобный [редактор Diagram](guides/diagram_editor/initialization.md) для создания четких диаграмм
- Расширенный набор параметров конфигурации для [фигур](shapes/configuration_properties.md) и [линий](lines/configuration_properties.md)
- Более широкие возможности настройки [диаграмм](guides/customization.md)

### Обновления {#updates}

- Добавлены [горячие клавиши](guides/diagram_editor/hot_keys.md) для редактирования Diagram в редакторе
- Добавлено новое событие [emptyAreaClick](api/diagram/emptyareaclick_event.md)
- Добавлен параметр конфигурации `lineGap`

## Версия 2.0 {#version-20}

Выпущено 15 февраля 2017 г.

### Критические изменения {#breaking-changes}

Структура API была полностью реорганизована и улучшена для упрощения работы с ней. Ознакомьтесь со статьей [о миграции](migration.md#11---20), чтобы узнать обо всех изменениях.

### Новый функционал {#new-functionality}

- Возможность создавать разные диаграммы и стилизовать их
- Разнообразие [фигур](shapes/default_shapes.md) и [линий](/lines/)
- [Экспорт в формат PDF](guides/data_export.md)
- [Экспорт в формат PNG](guides/data_export.md)

### Обновления {#updates}

- Возможность [находить нужные фигуры](guides/manipulating_items.md#finding-the-necessary-item)
- Возможность [фильтровать фигуры по заданным критериям](guides/manipulating_items.md#filtering-items)
- Возможность [добавлять панель инструментов со значками для фигур](guides/diagram/configuration.md#setting-toolbar-for-shapes) для упрощения взаимодействия с ними
- Повышена производительность
- Возможность адаптироваться к любому HTML-контейнеру и встроенное автоматическое изменение размера

## Версия 1.1 {#version-11}

Выпущено 5 декабря 2017 г.

### Новый функционал {#new-functionality}

- [Использование редактора в режиме организационной диаграммы](api/diagram_editor/editor/config/type_property.md)
- Возможность [сохранять и восстанавливать состояние](guides/loading_data.md#saving-and-restoring-state)
- Расширены [возможности настройки](guides/customization.md)

### Обновления {#updates}

- [Расширенный API](api/diagram/api_overview.md): новые методы, свойства и события

## Версия 1.0 {#version-10}

Выпущено 29 сентября 2017 г.

### Начальный функционал {#initial-functionality}

- Режим организационной диаграммы
- Вертикальная и горизонтальная стратегии автоматического размещения
- Загрузка данных из JSON
- API для управления данными и состоянием ветвей
