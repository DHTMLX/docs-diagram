---
sidebar_label: resetSwimlane()
title: Метод resetSwimlane класса Cell Manager
description: Вы можете узнать о методе resetSwimlane класса Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# resetSwimlane()

### Описание {#description}

@short: Сбрасывает активный swimlane

### Использование {#usage}

~~~jsx
resetSwimlane(): void;
~~~

### Пример {#example}

~~~jsx
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // устанавливает активный swimlane

// ваши действия со swimlane

diagram.cellManager.resetSwimlane(); // сбрасывает активный swimlane
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlane](/swimlanes/)
