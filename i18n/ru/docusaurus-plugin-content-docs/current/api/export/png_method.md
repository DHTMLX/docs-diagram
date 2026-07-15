---
sidebar_label: png()
title: Метод png
description: Узнайте больше о методе png в документации библиотеки DHTMLX JavaScript Diagram. Изучите гайды для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# png()

### Описание {#description}

@short: Экспортирует диаграмму в файл PNG

:::note
Чтобы избежать проблем при экспорте, все изображения для фигур Diagram должны быть заданы либо в формате base64, либо через абсолютный URL.
:::

### Использование {#usage}

~~~jsx
png(config?: object): Promise<void>;
~~~

### Возвращаемое значение {#returns}

Promise экспорта данных

### Параметры {#parameters}

- `config` - (необязательный) объект с настройками экспорта. Вы можете указать следующие настройки для экспорта в PNG:
  - `url?: string` - (необязательный) url-адрес сервиса, который выполняет экспорт и возвращает экспортированный файл. Эта настройка необязательна, используйте её только если нужно указать путь к собственному сервису экспорта. Значение по умолчанию - `https://export.dhtmlx.com/diagram/png/6.1.0`
  - `name?: string` - (необязательный) имя экспортированного файла
  - `header?: string` - (необязательный) HTML-шаблон для верхнего колонтитула в экспортированном файле
  - `footer?: string` - (необязательный) HTML-шаблон для нижнего колонтитула в экспортированном файле

### Пример {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

// экспорт по умолчанию
diagram.export.png()
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

// экспорт с настройками конфигурации
diagram.export.png({
    name: "result_png"
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

**Полезная статья**:  [Экспорт диаграммы](guides/data_export.md)

**Связанные примеры**:

- [Diagram. Экспорт. Экспорт диаграммы](https://snippet.dhtmlx.com/ybpmz0zk)
- [Diagram. Экспорт. Водяной знак в левом нижнем углу](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. Экспорт. Повторяющийся водяной знак](https://snippet.dhtmlx.com/emkea55j)
