---
sidebar_label: Настройка встроенных тем
title: Настройка встроенных тем
description: Из документации библиотеки DHTMLX JavaScript Diagram вы узнаете, как настраивать темы. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Настройка встроенных тем {#configuring-built-in-themes}

## Настройка всех тем {#configuring-all-themes}

Вы могли заметить, что CSS-переменные темы [по умолчанию](guides/themes.md#light-theme-default) включают переменные цветовой схемы:

~~~css
--dhx-h-primary: 200;
--dhx-s-primary: 98%;
--dhx-l-primary: 40%;

--dhx-h-secondary: 0;
--dhx-s-secondary: 0%;
--dhx-l-secondary: 30%;

--dhx-h-danger: 0;
--dhx-s-danger: 100%;
--dhx-l-danger: 60%;

--dhx-h-success: 154;
--dhx-s-success: 89%;
--dhx-l-success: 37%;

--dhx-h-background: 0;
--dhx-s-background: 0%;
--dhx-l-background: 100%;
--dhx-a-background: 0.5;
~~~

:::tip
Значения цвета указываются в формате [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl), где:

- *тон* — это градус на цветовом круге от 0 до 360. 0 — красный, 120 — зелёный, 240 — синий;
- *насыщенность* — процентное значение; 0% означает полностью ненасыщенный (серый) цвет, а 100% — полностью насыщенный;
- *светлота* — процентное значение; 100% — белый, 0% — чёрный, а 50% соответствует значению `"normal"`.
:::

Благодаря этим CSS-переменным цветовая схема рассчитывается автоматически. Это означает, что при изменении значения переменной цветовой схемы в корне значения для тем `"contrast-light"`, `"dark"` и `"contrast-dark"` будут автоматически пересчитаны в реальном времени.

Например, вы можете переопределить основные цвета для всех тем Diagram сразу следующим образом:

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

Кроме того, значения переменных, которые рассчитываются на основе основного цвета, будут пересчитаны соответствующим образом. Например, значение цвета для состояния фокуса рассчитывается следующим образом:

~~~jsx
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## Настройка отдельной темы {#configuring-a-separate-theme}

Если вы хотите переопределить некоторые значения цвета для отдельной [темы Diagram](guides/themes.md), сделайте это в атрибуте `'data-dhx-theme'`:

~~~html
<style>
    [data-dhx-theme='light'] {
        /* граница */
        --dhx-border-color: #ced4da;
        /* конец границы */

        /* цветовая схема */
        --dhx-h-primary: 210;
        --dhx-s-primary: 30%;
        --dhx-l-primary: 20%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 6;
        --dhx-s-danger: 78%;
        --dhx-l-danger: 57%;

        --dhx-h-success: 168;
        --dhx-s-success: 77%;
        --dhx-l-success: 42%;

        --dhx-l-background: 98%;
        /* конец цветовой схемы */
    }
</style>

<script>
    const diagram = new dhx.Diagram("diagram_container", {
        type: "default",
    });

    dhx.setTheme("light");
</script>
~~~

## Настройка внешнего вида фигур на панели Shapebar {#configuring-the-look-of-shapes-in-shapebar}

### Переопределение цветовых схем по умолчанию {#redefining-default-color-schemes}

Вы можете управлять внешним видом элементов Shapebar, переопределяя CSS-переменные, которые задают цветовую схему:

- `--dhx-shapebar-item-font-color`
- `--dhx-shapebar-item-background`
- `--dhx-shapebar-item-border-color`

Значения этих переменных по умолчанию [зависят от применяемой темы](guides/themes.md).

### Настройка пользовательских CSS-переменных {#setting-custom-css-variables}

Вы также можете настроить внешний вид элементов Shapebar с помощью собственных CSS-переменных. Для этого определите пользовательскую CSS-переменную и укажите её в качестве значения нужного свойства в параметре конфигурации `defaults`.

:::note
Значение переменной будет присвоено элементу Shapebar при его выборе и не будет переопределено при смене темы.
:::

Например:

~~~html {11-12,23-24}
<style>
    :root {
        --rectangle-fill: #428df5;
        --rectangle-font-color: #002229;
    }
    [data-dhx-theme='dark'] {
        --dhx-shapebar-item-font-color: #fff;
        --dhx-shapebar-item-background: #002229;
        --dhx-shapebar-item-border-color: #007a99;

        --rectangle-fill: #f54278;
        --rectangle-font-color: #002229;
    }
</style>

<div id="editor_container" style="height: 100%"></div>

<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        defaults: {
            rectangle: {
                fill: "var(--rectangle-fill)",
                fontColor: "var(--rectangle-font-color)"
            }
        }
    });
    // установка тёмной темы
    const node = document.getElementById("editor_container").childNodes[0];
    dhx.setTheme("dark", node);
</script>
~~~

## Настройка внешнего вида задач в режиме PERT {#adjusting-the-look-of-tasks-in-the-pert-mode}

Внешний вид задач [Diagram в режиме PERT-диаграммы](/#diagram-in-the-pert-mode) определяется CSS-переменной `--dhx-shape-pert-header-background`. Она задаётся в теме [по умолчанию](guides/themes.md#light-theme-default) следующим образом:

~~~jsx
--dhx-shape-pert-header-background: var(--dhx-gantt-base-colors-primary, #537CFA);
~~~

- когда Diagram в режиме PERT-диаграммы используется вместе с DHTMLX Gantt, к задачам Diagram будет применена текущая цветовая схема диаграммы Ганта
- когда Diagram используется отдельно, указанная выше CSS-переменная будет установлена в значение по умолчанию, равное `#537CFA`

