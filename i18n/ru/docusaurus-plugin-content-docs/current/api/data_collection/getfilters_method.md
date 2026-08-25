---
sidebar_label: getFilters()
title: Метод getFilters объекта Data Collection
description: Вы можете узнать больше о методе getFilters объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# getFilters()

### Описание {#description}

@short: Возвращает объект с применёнными фильтрами

### Использование {#usage}

~~~jsx
getFilters({ permanent?: boolean }): object;
~~~

### Параметры {#parameters}

- `permanent` - (необязательный) *false* по умолчанию. Позволяет получить список постоянных фильтров

### Возвращаемое значение {#returns}

Метод возвращает объект с применёнными фильтрами, где:
- `key` - id фильтра
- `value` - объект со свойствами [`rule` и `config`](api/data_collection/filter_method.md#parameters)

### Пример {#example}

~~~jsx {6-7}
const diagram = new dhx.Diagram("diagram_container", {
    // настройки конфигурации
});
diagram.data.parse(data);

const filters = diagram.data.getFilters(); // получает все применённые фильтры
console.log(filters);
~~~

**Журнал изменений**: Добавлено в v6.0
