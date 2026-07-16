---
sidebar_label: Spacer
title: Основные элементы управления Editbar - Spacer
description: Изучите элемент управления Spacer панели Editbar в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Suite.
---

# Spacer

@short: Базовый элемент управления для расположения и выравнивания элементов управления на панели Editbar за счёт занимаемого пространства.

## Использование {#usage}

~~~jsx
{
    type: "spacer"
}
~~~

## Описание {#description}

- `type` - (обязательный) тип элемента управления. Установите значение `"spacer"`

## Пример {#example}

~~~jsx {10,12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    { type: "input", key: "name", label: "Task name" },
                    { type: "input", key: "id", label: "ID", readOnly: true },
                    { type: "spacer" },
                    { type: "button", text: "Send", full: true },
                    { type: "spacer" }
                ]
            }
        }
    }
});
~~~
