---
sidebar_label: isUndo()
title: Метод isUndo класса HistoryManager
description: Вы можете узнать о методе isUndo класса HistoryManager в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# isUndo()

### Описание {#description}

@short: Проверяет, было ли отменено действие

### Использование {#usage}

~~~jsx
isUndo(): boolean;
~~~

### Пример {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.isUndo();
~~~

### Возвращаемое значение {#returns}

Метод возвращает `true`, если действие было отменено; в противном случае — `false`

**Журнал изменений**: Добавлено в v4.1
