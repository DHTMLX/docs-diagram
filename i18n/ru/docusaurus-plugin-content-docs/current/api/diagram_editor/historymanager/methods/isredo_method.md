---
sidebar_label: isRedo()
title: Метод isRedo класса HistoryManager
description: Вы можете узнать о методе isRedo класса HistoryManager в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# isRedo()

### Описание {#description}

@short: Проверяет, было ли восстановлено действие, отменённое действием Undo

### Использование {#usage}

~~~jsx
isRedo(): boolean;
~~~

### Пример {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
...
editor.history.isRedo();
~~~

### Возвращаемое значение {#returns}

Метод возвращает `true`, если действие, отменённое действием Undo, было восстановлено; в противном случае — `false`

**Журнал изменений**: Добавлено в v4.1
