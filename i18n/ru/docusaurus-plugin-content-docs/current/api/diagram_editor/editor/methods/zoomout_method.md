---
sidebar_label: zoomOut()
title: Метод zoomOut редактора
description: Узнайте больше о методе zoomOut редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# zoomOut()

### Описание {#description}

@short: Уменьшает масштаб диаграммы

### Использование {#usage}

~~~jsx
zoomOut(step?: number): void;
~~~

### Параметры {#parameters}

- `step` - (необязательный) шаг уменьшения масштаба диаграммы; *по умолчанию: 0.05*

### Пример {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.zoomOut(0.1);
~~~

**Журнал изменений**: Добавлено в v4.1
