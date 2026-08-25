---
sidebar_label: Пользовательская тема
title: Пользовательская тема
description: Из документации библиотеки DHTMLX JavaScript Diagram вы узнаете, как создать пользовательскую тему. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Пользовательская тема {#custom-theme}

Если базовые темы Diagram не подходят для вашего проекта, вы можете настроить собственную цветовую тему.
Ознакомьтесь с темами **пользовательская светлая** и **пользовательская тёмная** в примере ниже:

<iframe src="https://snippet.dhtmlx.com/9twmlfus?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Чтобы создать пользовательскую тему, переопределите значения внутренних CSS-переменных следующим образом:

~~~html
<style>
    [data-dhx-theme='custom-theme-dark'] {
        /* шрифт */
        --dhx-font-color-primary: var(--dhx-color-gray-200);
        --dhx-font-color-secondary: var(--dhx-color-gray-500);
        --dhx-font-color-additional: var(--dhx-color-gray-500);
        --dhx-font-color-disabled: var(--dhx-color-gray-800);
        --dhx-font-color-contrast: var(--dhx-color-black);
        /* конец шрифта */

        /* граница */
        --dhx-border-color: #007a99;
        /* конец границы */

        /* цветовая схема */
        --dhx-h-primary: 45;
        --dhx-s-primary: 100%;
        --dhx-l-primary: 35%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 330;
        --dhx-s-danger: 65%;
        --dhx-l-danger: 50%;

        --dhx-h-success: 175;
        --dhx-s-success: 60%;
        --dhx-l-success: 40%;

        --dhx-h-background: 190;
        --dhx-s-background: 100%;
        --dhx-l-background: 10%;
        /* конец цветовой схемы */

        /* цвета темы */
        --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
        --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
        --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
        /* конец цветов темы */

        /* служебные переменные DHTMLX Grid*/
        --dhx-s-grid-header-background: #002229;
        --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
        /* конец служебных переменных DHTMLX Grid*/

        /* служебные переменные DHTMLX Toolbar*/
        --dhx-s-toolbar-background: #002229;
        /* конец служебных переменных DHTMLX Toolbar */
    }
</style>

<script>
    const diagram = new dhx.Diagram("diagram_container", {
        type: "default",
    });

    dhx.setTheme("custom-theme-dark");
</script>
~~~

**Связанный пример:** [Diagram Editor. Обычный режим. Базовые и пользовательские темы](https://snippet.dhtmlx.com/9twmlfus)

