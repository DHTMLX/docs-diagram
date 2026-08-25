---
sidebar_label: resetFilter()
title: Метод resetFilter для Data Collection
description: Вы можете изучить метод resetFilter объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# resetFilter()

### Описание {#description}

@short: Сбрасывает активные фильтры

### Использование {#usage}

~~~jsx
resetFilter({
    id?: string,
    permanent?: boolean
}): boolean;
~~~

### Параметры {#parameters}

- `config` - (опциональный) задаёт параметры сброса активных фильтров. Если конфигурация не указана или пуста, будут сброшены все фильтры, кроме тех, у которых в конфигурационном объекте задано свойство `permanent`. Может содержать следующие свойства:
    - `id` - (опциональный) идентификатор фильтра, который нужно сбросить
    - `permanent` - (опциональный) *true* — сбросить все активные фильтры, включая те, у которых в конфигурации задана настройка `permanent:true`

### Возвращаемое значение {#returns}

Метод возвращает *true*, если сброшены все фильтры, включая те, что помечены как `permanent`; в противном случае — *false*

### Пример {#example}

~~~jsx {6-7,9-10,12-13}
const diagram = new dhx.Diagram("diagram_container", {
    // configuration settings
});
diagram.data.parse(data);

// сбрасывает все фильтры, кроме тех, у которых в конфигурации задано свойство "permanent"
diagram.data.resetFilter();

// сбрасывает все фильтры, включая те, у которых в конфигурации задано свойство "permanent"
diagram.data.resetFilter({ permanent: true });

// сбрасывает фильтр с указанным идентификатором
diagram.data.resetFilter({ id: "filter_id" });
~~~

**Change log**: Добавлено в v6.0
