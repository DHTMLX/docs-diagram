---
sidebar_label: zoomIn()
title: Метод zoomIn редактора
description: Узнайте больше о методе zoomIn редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# zoomIn()

### Описание {#description}

@short: Увеличивает масштаб диаграммы

### Использование {#usage}

~~~jsx
zoomIn(step?: number): void;
~~~

### Параметры {#parameters}

- `step` - (необязательный) шаг увеличения масштаба диаграммы; *по умолчанию: 0.05*

### Пример {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.zoomIn(0.1);
~~~

**Журнал изменений**: Добавлено в v4.1
