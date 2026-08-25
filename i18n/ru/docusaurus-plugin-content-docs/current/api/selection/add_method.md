---
sidebar_label: add()
title: Метод add объекта Selection
description: Узнайте о методе add объекта Selection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# add()

### Описание {#description}

@short: Добавляет указанный элемент в список выделения

### Использование {#usage}

~~~jsx
add({
    id: string | number,
    join?: boolean,
    batch?: (string | number)[]
}): boolean;
~~~

### Параметры {#parameters}

Метод принимает в качестве аргумента объект со следующими параметрами:

- `id` - (обязательный) id элемента
- `join` - (необязательный) режим добавления выделенного элемента в список выделения. Если параметр установлен в *false* или не передан, ранее добавленные в список выделения элементы будут сброшены
- `batch` - (необязательный) список элементов для выделения (если известен заранее)

### Возвращаемое значение {#returns}

Метод возвращает:

- `true`, если элемент не находился в списке выделения и был успешно добавлен в него
- `false`, если элемент не был добавлен в список выделения по какой-либо причине, например элемент уже был добавлен в список выделения

### Пример {#example}

~~~jsx {8,11-12,15-16}
// диаграмма должна быть создана с параметром "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// загрузка данных
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> вернет true, если элемент был выделен
console.log(diagram.selection.getIds()); // -> ["1"]

// добавляет элемент с id:"2" к уже выделенным элементам
diagram.selection.add({ id: "2", join: true });
console.log(diagram.selection.getIds()); // -> ["1", "2"]

// снимает выделение с ранее выделенных элементов и добавляет элемент с id:"3"
diagram.selection.add({ id: "3" });
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

**Журнал изменений**: Обновлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выделение элементов](guides/manipulating_items.md#selecting-items)

**Связанный пример**: [Diagram. Selection. Выделение элемента](https://snippet.dhtmlx.com/jyoxn5h7)
