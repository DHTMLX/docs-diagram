---
sidebar_label: enable()
title: Метод enable класса HistoryManager
description: Вы можете узнать о методе enable класса HistoryManager в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# enable()

### Описание {#description}

@short: Перезапускает работу HistoryManager, сохраняя текущее состояние как исходное

### Использование {#usage}

~~~jsx
enable(): void;
~~~

### Пример {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.enable();
~~~

**Журнал изменений**: Добавлено в v4.1
