---
sidebar_label: destructor()
title: Метод destructor
description: Вы можете изучить метод destructor в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и интерактивные демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---
# destructor()

### Описание {#description}

@short: Удаляет экземпляр диаграммы и освобождает занятые ресурсы

### Использование {#usage}

~~~jsx
destructor(): void;
~~~

### Пример {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.destructor();
~~~

**Журнал изменений**: Добавлено в v3.0
