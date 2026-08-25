---
sidebar_label: Управление элементами
title: Управление элементами
description: Вы можете узнать больше об управлении элементами в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---
# Управление элементами {#manipulating-items}

Вы можете управлять элементами Diagram с помощью [Diagram Editor](guides/diagram_editor/initialization.md). В этой статье рассматривается, как управлять элементами DHTMLX Diagram через API компонента.

## Обзор {#overview}

Эта статья содержит разделы, посвящённые следующим темам:

- [как автоматически располагать фигуры в иерархическом порядке](#arranging-shapes-automatically);
- как выполнять ряд операций с элементами, в частности:
    - [добавлять](#adding-an-item)/[обновлять](#updating-an-item)/[удалять](#deleting-items) элементы;
    - [проверять существование элемента](#checking-existence-of-the-item) в диаграмме и [получать его](#getting-an-item);
    - [выбирать элемент](#selecting-items);
    - [прокручивать к нужному элементу](#showing-the-necessary-item), чтобы сделать его видимым на экране, если в диаграмме много элементов;
    - [разворачивать/сворачивать элементы](#expandingcollapsing-items);
    - [находить элементы](#finding-the-necessary-item), соответствующие определённым критериям;
    - [фильтровать диаграмму](#filtering-items), чтобы отображать определённые элементы;
- [как управлять перетаскиванием дочерних элементов группы](#drag-n-drop-of-group-items);
- [как работать с дорожкой и её ячейками](#working-with-swimlane-cells), а именно:
    - [устанавливать/сбрасывать активную дорожку](#settingresetting-the-active-swimlane);
    - [получать тип подзаголовка дорожки](#getting-the-type-of-the-subheader);
    - [добавлять](#adding-a-columnrow)/[удалять](#removing-a-columnrow)/[перемещать](#moving-a-columnrow) столбец/строку;
    - получать [id](#getting-the-id-of-a-cell)/[индекс](#getting-the-index-of-a-cell) ячейки и [проверять, какие действия можно выполнить над ячейкой](#validating-cells).

## Автоматическая расстановка фигур {#arranging-shapes-automatically}

Библиотека предоставляет возможность реализовать автоматическое размещение для фигур и соединителей диаграммы, инициализированной в режиме по умолчанию. Автоматическое размещение позволяет:

- сразу располагать связанные фигуры в симметричном порядке;
- располагать данные, загруженные в формате JSON или полученные с сервера, в иерархической структуре.

Чтобы выполнить автоматическое размещение, используйте метод [`autoPlace()`](api/diagram/autoplace_method.md). Метод может принимать один параметр:

- `config` — (*object*) необязательный, объект с настройками конфигурации автоматического размещения. Объект может содержать следующие свойства:
    - `mode` — (*string*) необязательный, режим соединения фигур, `"direct"` (по умолчанию) или `"edges"`
    - `graphPadding` — (*number*) необязательный, задаёт расстояние между несвязанными диаграммами, по умолчанию *200*
    - `placeMode` — (*string*) необязательный, задаёт режим размещения фигур, `"orthogonal"` (по умолчанию) или `"radial"`
    - `itemPadding` — (*number*) необязательный, минимальный отступ между элементами (минимальное значение — *1*), по умолчанию *20*
    - `levelPadding` — (*number*) необязательный, минимальный отступ между уровнями иерархии (минимальное значение — *1*), по умолчанию *20*

:::note
Метод `autoPlace()` работает только в режиме диаграммы по умолчанию и только для фигур. Автоматическое размещение не работает, если вы используете группы или дорожки.
:::

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
    mode: "edges",
    graphPadding: 100,
    placeMode: "radial",
    itemPadding: 10,
    levelPadding: 10
});
~~~

**Связанный пример**: [Diagram. Режим по умолчанию. Автоматическое размещение](https://snippet.dhtmlx.com/f3uekgjw)

Если не передать параметр в метод, будут применены настройки по умолчанию.

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace();
~~~

Также есть возможность настроить параметры автоматического размещения с помощью конфигурационной опции [`autoplacement`](api/diagram/autoplacement_property.md) компонента Diagram и применения метода `autoPlace()`. В приведённом ниже примере показано, как сгенерировать и расположить радиальный набор данных с помощью автоматического размещения.

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    scale: 0.3,
    autoplacement: {
        placeMode: "radial",
        mode: "direct"
    }
});

diagram.data.parse(getNodes(120, 5));

diagram.autoPlace({
    itemPadding: 10,
    levelPadding: 10,
    graphPadding: 100,
});
~~~

![Автоматическое размещение со сгенерированным радиальным набором данных](/img/radial_datasets_generator.png)

**Связанный пример:** [Diagram. Режим по умолчанию. Расположение сгенерированного радиального набора данных с помощью автоматического размещения](https://snippet.dhtmlx.com/rwsime82)

## Добавление элемента {#adding-an-item}

Чтобы добавить новый элемент в диаграмму, примените метод [`add()`](api/data_collection/add_method.md) объекта `data`.

~~~jsx
diagram.data.add({ id: "3.2", text: "New Item", parent: "3" });
~~~

Например, мы добавили новый объект фигуры со следующими атрибутами:

- `id` — (*string|number*) уникальный id фигуры
- `text` — (*string*) текст, который будет отображаться в фигуре
- `parent` — (*string|number*) id родительской фигуры

Вы можете просмотреть все доступные свойства объектов фигур в [разделе API](shapes/configuration_properties.md).

**Связанный пример**: [Diagram. Данные. Добавление/удаление элемента](https://snippet.dhtmlx.com/8wi20uop)

## Получение элемента {#getting-an-item}

Вы можете получить объект элемента, передав его id в метод [`getItem()`](api/data_collection/getitem_method.md) объекта `data`. Например:

~~~jsx
const shape = diagram.data.getItem(1);
~~~

После получения элемента вы можете обращаться к его исходным свойствам следующим образом:

~~~jsx
const shape = diagram.data.getItem(1);
const text = shape.text;
~~~

## Получение id элемента {#getting-the-id-of-an-item}

Если id элемента неизвестен, вы можете использовать метод [`getId()`](api/data_collection/getid_method.md), чтобы получить его. Метод принимает индекс элемента в качестве параметра:

~~~jsx
const id = diagram.data.getId(0); // -> возвращает "1"
~~~

## Получение индекса элемента {#getting-the-index-of-an-item}

Вы можете получить индекс элемента, передав его id в метод [`getIndex()`](api/data_collection/getindex_method.md):

~~~jsx
const id = diagram.data.getIndex("1"); // -> возвращает 0
~~~

## Удаление элементов {#deleting-items}

### Удаление одного элемента {#deleting-a-single-item}

Чтобы удалить ненужный элемент, используйте метод [`remove()`](api/data_collection/remove_method.md) объекта `data` и передайте id нужного элемента в качестве параметра:

~~~jsx
diagram.data.remove("3.2");
~~~

:::note
Если диаграмма инициализирована в режиме org или mindmap, удаление фигуры также приведёт к удалению её соединителей и всех дочерних фигур.
:::

### Удаление всех элементов {#deleting-all-the-items}

При необходимости вы можете очистить диаграмму, удалив сразу все элементы. Для этого примените метод [`removeAll()`](api/data_collection/removeall_method.md) объекта `data`:

~~~jsx
diagram.data.removeAll();
~~~

**Связанный пример**: [Diagram. Данные. Добавление/удаление элемента](https://snippet.dhtmlx.com/8wi20uop)

## Обновление элемента {#updating-an-item}

Вы можете обновить внешний вид и содержимое элемента с помощью метода [`update()`](api/data_collection/update_method.md) объекта `data`:

~~~jsx
diagram.data.update("1", { text: "Some new text" });
~~~

В качестве параметров нужно передать два значения:

- `id` — (*string|number*) id элемента
- `config` — (*object*) объект с обновлёнными свойствами конфигурации

**Связанный пример**: [Diagram. Данные. Обновление элемента](https://snippet.dhtmlx.com/y8uk4sbj)

## Проверка существования элемента {#checking-existence-of-the-item}

Вы можете проверить, существует ли элемент в диаграмме, с помощью метода [`exists()`](api/data_collection/exists_method.md) коллекции `data`. Метод принимает id элемента в качестве параметра и возвращает *true*, если элемент существует:

~~~jsx
const shapeExists = diagram.data.exists("1");
~~~

## Выбор элементов {#selecting-items}

### Выбор элемента {#selecting-an-item}

Чтобы выбрать элементы, сначала нужно [включить выбор](guides/diagram/configuration.md#enabling-items-selection) для диаграммы, а затем вызвать метод [add()](api/selection/add_method.md) объекта `selection`, чтобы выбрать нужный элемент.

~~~jsx {8,11-12,15-16}
// диаграмма должна быть создана с параметром "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// загрузка данных
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> возвращает true, если элемент был выбран
console.log(diagram.selection.getIds()); // -> ["1"]

// добавляет элемент с id:"2" к уже выбранным элементам
diagram.selection.add({ id: "2", join: true });
console.log(diagram.selection.getIds()); // -> ["1", "2"]

// удаляет ранее выбранные элементы и добавляет элемент с id:"3"
diagram.selection.add({ id: "3" });
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

Метод принимает в качестве аргумента объект со следующими параметрами:

- `id` — (обязательный) id элемента, который нужно добавить в список выбора
- `join` — (необязательный) режим добавления выбранного элемента в список выбора. Если параметр установлен в *false* или не передан, ранее добавленные в список выбора элементы будут сброшены
- `batch` — (необязательный) список элементов для выбора (если известен заранее)

Метод возвращает:

- `true`, если элемента не было в списке и он был успешно добавлен в него
- `false`, если элемент не был добавлен в список по какой-либо причине, например, элемент уже был добавлен в список

### Отмена выбора элемента {#unselecting-an-item}

Чтобы удалить элемент из списка выбора, используйте метод [`remove()`](api/selection/remove_method.md) объекта `selection`:

~~~jsx {2}
console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> возвращает true, если выбор элемента был отменён
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

Метод может принимать объект с *id элемента, выбор которого нужно отменить*, в качестве параметра. Он возвращает *true*, если элемент был успешно удалён из списка выбора.

Вы также можете вызвать метод без аргументов, чтобы очистить список выбора, как показано ниже:

~~~jsx {2-3}
console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// удаляет все элементы из списка выбора
diagram.selection.remove();
console.log(diagram.selection.getIds()); // -> []
~~~

### Получение id выбранных элементов {#getting-the-ids-of-selected-items}

Вы можете получить список id выбранных на данный момент элементов с помощью метода [`getIds()`](api/selection/getids_method.md) объекта `selection`:

~~~jsx
const ids = diagram.selection.getIds(); // -> ["1", "1.1" ...] или []
~~~

Метод возвращает массив id выбранных элементов и подэлементов или пустой массив, если в данный момент нет выбранных элементов.

### Получение объекта выбранного элемента {#getting-the-object-of-a-selected-item}

Вы можете получить объект выбранного элемента с помощью метода [`getItem()`](api/selection/getitem_method.md) объекта `selection`. Метод может принимать в качестве аргумента объект со следующим параметром:

- `id` — (обязательный) — id нужного элемента

Вы также можете вызвать метод без параметра, чтобы получить объект последнего выбранного элемента. Ознакомьтесь с примерами ниже, чтобы изучить возможности метода:

~~~jsx {9-11,13-15,17-19}
// диаграмма должна быть создана с параметром "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// загрузка данных
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// получение последнего выбранного элемента
const item = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner"}

// получение выбранного элемента по id
const item = diagram.selection.getItem({ id: "1" });
// -> {id: "1", text: "Chairman & CEO", title: "Henry Bennett"}

// попытка получить элемент, которого нет в списке выбора
const item = diagram.selection.getItem({ id: "4" });
// -> возвращает undefined, так как элемента с указанным id нет в списке выбора
~~~

### Очистка списка выбора {#clearing-the-selection-list}

Когда нужно очистить список выбора без вызова событий, используйте метод [`clear()`](api/selection/clear_method.md):

~~~jsx
diagram.selection.clear();
~~~

### Проверка, выбран ли элемент {#checking-whether-an-item-is-selected}

Есть способ проверить наличие элемента в списке выбранных элементов Diagram через API. Для этого используйте метод [`includes()`](api/selection/includes_method.md) объекта `selection`:

~~~jsx {2-3}
diagram.selection.getIds(); // -> ["1", "2", "3"]
diagram.selection.includes({ id: "1" }) // возвращает true
diagram.selection.includes({ id: "4" }) // возвращает false
~~~

Метод принимает в качестве аргумента объект со следующими параметрами:

- `id` — (*string|number*) обязательный, id проверяемого элемента

**Связанный пример**: [Diagram. Выбор. Выбор элемента](https://snippet.dhtmlx.com/jyoxn5h7)

## Разворачивание/сворачивание элементов {#expandingcollapsing-items}

Вы можете разворачивать и сворачивать как фигуру с дочерними фигурами, так и группу/дорожку с помощью соответствующих методов API: [expandItem()](api/diagram/expanditem_method.md) и [collapseItem()](api/diagram/collapseitem_method.md).

Оба метода принимают два параметра:

- `id` — (*string|number*) id элемента
- `dir` — (*string*) необязательный, определяет сторону, с которой дочерние элементы будут скрываться/показываться относительно родительской фигуры: `"left"`, `"right"`

~~~jsx
// разворачивание элемента с id "3"
diagram.expandItem("3");

// сворачивание элемента с id "3"
diagram.collapseItem("3");
~~~

:::note
Атрибут `dir` можно использовать только в режиме mindmap Diagram (type:`"mindmap"`).
:::

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.data.parse(data);

diagram.collapseItem("main", "left");
//или
diagram.expandItem("main", "left");
~~~

## Отображение нужного элемента {#showing-the-necessary-item}

Если у вас большая диаграмма со множеством элементов, вы можете сделать нужный элемент видимым.
Для этого примените метод [`showItem()`](api/diagram/showitem_method.md), который принимает id элемента в качестве параметра:

~~~jsx
diagram.showItem("2.1");
~~~

**Связанный пример**: [Diagram. Прокрутка содержимого](https://snippet.dhtmlx.com/f970hbym)

Вы можете [подробнее узнать о прокрутке в DHTMLX Diagram](guides/diagram/scrolling_diagram.md).

## Поиск нужного элемента {#finding-the-necessary-item}

Вы можете использовать API компонента Diagram, чтобы найти нужный элемент в диаграмме. Метод [`find()`](api/data_collection/find_method.md) коллекции `data` поможет вам решить эту задачу.
Метод принимает критерии поиска в качестве параметра и возвращает первый объект фигуры, соответствующий указанным критериям:

~~~jsx
// поиск фигуры по ключу атрибута
const shape = diagram.data.find({by:"text",match:"Manager"});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}

// поиск фигуры с помощью функции
const shape = diagram.data.find((shape) => {
    if(shape.text==="Manager"||shape.text==="Marketer"){
        return true;
    }
});
~~~

**Связанный пример**: [Diagram. Данные. Поиск нужной фигуры](https://snippet.dhtmlx.com/sete9z73)

### Поиск всех элементов, соответствующих критериям поиска {#finding-all-the-items-that-meet-the-search-criteria}

Вы также можете найти все элементы, соответствующие заданным критериям, с помощью метода [`findAll()`](api/data_collection/findall_method.md) коллекции `data`. Метод принимает те же параметры, что и метод `find()`, и возвращает массив объектов элементов:

~~~jsx
// поиск фигур по ключу атрибута
const shapes = diagram.data.findAll({by:"text",match:"Manager"});

// поиск фигур с помощью функции
const shapes = diagram.data.findAll((shapes) => {
    if(shapes.text==="Manager"||shapes.text==="Marketer"){
        return true;
    }
});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
// ->{id:"2.1",text:"Marketer",title:"Charles Little", img: "../avatar-4.png", …}
~~~

## Фильтрация элементов {#filtering-items}

Вы можете отфильтровать диаграмму и отображать только элементы, соответствующие критериям фильтрации, с помощью метода [`filter()`](api/data_collection/filter_method.md) коллекции `data`. Метод показывает только отфильтрованные элементы и скрывает остальные.

<iframe src="https://snippet.dhtmlx.com/tm43bsgn?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Перетаскивание элементов группы {#drag-n-drop-of-group-items}

Настройки группы по умолчанию позволяют изменять порядок дочерних элементов в группе и перетаскивать элементы между группами.

При необходимости вы можете отключить перетаскивание дочерних элементов в другие группы и сделать возможным перетаскивание элементов только в пределах родительской группы. Кроме того, вы можете настроить поведение границ родительской группы и определить, должны ли они расширяться, когда пользователь перетаскивает дочерний элемент за пределы группы.

Подробнее о том, как настроить поведение элементов группы, читайте в [соответствующей статье](/groups/#configuring-the-behavior-of-group-items).

## Работа с ячейками дорожки {#working-with-swimlane-cells}

Вы можете управлять ячейками дорожки с помощью [CellManager API](/api/cell_manager/). Например, вы можете добавлять, перемещать, удалять ячейки в виде строк или столбцов, проверять ячейки и многое другое.

Рассмотрим дорожку со следующей конфигурацией:

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 600,
        layout: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        header: {
            text: "Swimlane",
            position: "top"
        },
        subHeaderRows: {
            headers:[
                { text: "Subheader 1", id: "s1" },
                { text: "Subheader 2", id: "s2" },
                { text: "Subheader 3", id: "s3" }
            ]
        }
    }
];
~~~

и рассмотрим, как работать с ячейками дорожки с помощью доступных методов API.

### Установка/сброс активной дорожки {#settingresetting-the-active-swimlane}

Чтобы иметь возможность управлять ячейками дорожки, нужно установить активную дорожку. Это можно сделать либо с помощью метода [`setSwimlane()`](api/cell_manager/setswimlane_method.md) объекта cellManager:

~~~jsx
diagram.cellManager.setSwimlane("main");
~~~

либо с помощью метода [`add()`](api/selection/add_method.md) объекта selection:

~~~jsx
diagram.selection.add("main");
~~~

После завершения работы с дорожкой или её ячейками вы можете применить метод [`resetSwimlane()`](api/cell_manager/resetswimlane_method.md) объекта cellManager, чтобы снять выбор с дорожки:

~~~jsx
diagram.cellManager.resetSwimlane();
~~~

### Добавление столбца/строки {#adding-a-columnrow}

Вы можете добавить набор ячеек в дорожку либо в виде строки, либо в виде столбца. Для этого примените метод [`add()`](api/cell_manager/add_method.md) объекта cellManager и передайте методу два параметра:
- начальный индекс позиции ячейки, куда нужно добавить новый столбец/строку;
- направление добавления: *`"up"` | `"down"`* для добавления строки, *`"left"` | `"right"`* для добавления столбца.

~~~jsx
// добавление новой строки под указанной строкой
diagram.cellManager.add(0, "down");

// добавление нового столбца слева от указанного столбца
diagram.cellManager.add(0, "left");
~~~

### Удаление столбца/строки {#removing-a-columnrow}

Чтобы удалить набор ячеек в виде строки или столбца из дорожки, используйте метод [`remove()`](api/cell_manager/remove_method.md) объекта cellManager. Метод принимает два параметра:

- индекс позиции, из которой нужно удалить столбец/строку;
- тип удаляемого элемента: *`"col"` | `"row"`*

~~~jsx
// удаляет первую строку из дорожки
diagram.cellManager.remove(0, "row");

// удаляет второй столбец из дорожки
diagram.cellManager.remove(1, "col");
~~~

### Перемещение столбца/строки {#moving-a-columnrow}

Вы можете изменить позицию столбца или строки в дорожке, применив метод [`move()`](api/cell_manager/move_method.md) объекта cellManager. Метод позволяет переместить столбец на одну позицию вправо или влево либо переместить строку на одну позицию вверх или вниз. Метод принимает два параметра:

- индекс текущей позиции столбца/строки, которую нужно переместить
- направление перемещения элемента: *`"up"` | `"down"`* для перемещения строки, *`"left"` | `"right"`* для перемещения столбца

~~~jsx
// перемещает первую строку на одну позицию вниз
diagram.cellManager.move(0, "down");

// перемещает третий столбец на одну позицию влево
diagram.cellManager.move(2, "left");
~~~

### Проверка ячеек {#validating-cells}

Вы можете проверить, можно ли выполнить такие действия, как добавление, удаление или перемещение ячеек, над указанной ячейкой, с помощью метода [`validation()`](api/cell_manager/validation_method.md) объекта cellManager:

~~~jsx
// проверяет, можно ли переместить ячейку с индексом 0 вниз
diagram.cellManager.validation(0, "down", "move"); // true
~~~

### Получение типа подзаголовка {#getting-the-type-of-the-subheader}

Чтобы вернуть тип подзаголовка дорожки, используйте метод [`getSubHeaderType()`](api/cell_manager/getsubheadertype_method.md) объекта cellManager. Метод принимает id подзаголовка в качестве параметра:

~~~jsx
diagram.cellManager.getSubHeaderType("s1"); // возвращает "row"
~~~

### Получение id ячейки {#getting-the-id-of-a-cell}

Вы можете получить id первой ячейки столбца/строки, к которой принадлежит ячейка. Это можно сделать с помощью метода [`getCellId()`](api/cell_manager/getcellid_method.md) объекта cellManager. Метод принимает два параметра:

- индекс первой ячейки строки/столбца;
- тип элемента: *`"col"` | `"row"`*.

~~~jsx
// возвращает id первой ячейки первой строки
diagram.cellManager.getCellId(0, "row"); // возвращает 1

// возвращает id первой ячейки третьего столбца
diagram.cellManager.getCellId(2, "col"); // возвращает 3
~~~

Вы также можете получить id ячейки, которой принадлежит подзаголовок, с помощью метода [`getSubHeaderCellId()`](api/cell_manager/getsubheadercellid_method.md) объекта cellManager. Метод принимает id подзаголовка дорожки в качестве параметра:

~~~jsx
// возвращает id ячейки, которой принадлежит подзаголовок
diagram.cellManager.getSubHeaderCellId("s2"); // возвращает 4
~~~

### Получение индекса ячейки {#getting-the-index-of-a-cell}

Когда нужно получить индекс ячейки дорожки, используйте метод [`getCellIndex()`](api/cell_manager/getcellindex_method.md) объекта cellManager. Метод принимает два параметра:

- id ячейки;
- тип элемента: *`"col"` | `"row"`*.

:::note
Все ячейки, принадлежащие одной строке (или столбцу), будут иметь одинаковый индекс.
:::

~~~js
layout: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
],
~~~

~~~jsx
// возвращает индекс ячейки с id=2, если ячейка принадлежит столбцу
diagram.cellManager.getCellIndex(2, "col"); // возвращает 1

// возвращает индекс ячейки с id=5, если ячейка принадлежит столбцу
diagram.cellManager.getCellIndex(8, "col"); // возвращает 1

// возвращает индекс ячейки с id=2, если ячейка принадлежит строке
diagram.cellManager.getCellIndex(2, "row"); // возвращает 0

// возвращает индекс ячейки с id=5, если ячейка принадлежит строке
diagram.cellManager.getCellIndex(8, "row"); // возвращает 2
~~~

Вы также можете получить индекс ячейки, которой принадлежит подзаголовок, с помощью метода [`getSubHeaderCellIndex()`](api/cell_manager/getsubheadercellindex_method.md) объекта cellManager. Метод принимает id подзаголовка дорожки в качестве параметра:

~~~jsx
// возвращает индекс ячейки, которой принадлежит подзаголовок
diagram.cellManager.getSubHeaderCellIndex("s2"); // возвращает 1
~~~
