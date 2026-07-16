---
sidebar_label: destructor()
title: Метод destructor класса Editor
description: Вы можете узнать больше о методе destructor в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# destructor()

### Описание {#description}

@short: Удаляет экземпляр редактора диаграмм и освобождает занятые ресурсы

### Использование {#usage}

~~~jsx
destructor(): void;
~~~

### Пример {#example}

~~~jsx {6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);

editor.destructor();
~~~

**Журнал изменений**: Добавлено в v6.0
