---
sidebar_label: remove()
title: Метод remove объекта Selection
description: Узнайте больше о методе remove объекта selection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, опробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# remove()

### Описание {#description}

@short: Удаляет указанный элемент или все элементы из списка выбранных, если метод вызван без аргументов

### Использование {#usage}

~~~jsx
remove({
    id: string | number
}): boolean;

//или

remove(): boolean;
~~~

### Параметры {#parameters}

Метод может принимать в качестве аргумента объект со следующим параметром:

- `id` - (обязательный) идентификатор элемента, который нужно удалить из списка выбранных

### Возвращаемое значение {#returns}

Метод возвращает `true`, если снятие выделения с элемента или очистка списка прошли успешно

### Пример {#example}

~~~jsx {9}
// диаграмма должна быть создана с опцией "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// загрузка данных
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> возвращает true, если с элемента было снято выделение
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

При вызове без аргументов метод очищает список выбранных элементов:

~~~jsx {9-10}
// диаграмма должна быть создана с опцией "select:true"
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// загрузка данных
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// удаляет все элементы из списка выбранных
diagram.selection.remove();
console.log(diagram.selection.getIds()); // -> []
~~~

**Журнал изменений**: Обновлено в v6.0

**Полезные статьи**:

- [diagram.config.select](api/diagram/select_property.md)
- [Выбор элементов](guides/manipulating_items.md#selecting-items)

**Связанный пример**: [Diagram. Selection. Выбор элемента](https://snippet.dhtmlx.com/jyoxn5h7)
