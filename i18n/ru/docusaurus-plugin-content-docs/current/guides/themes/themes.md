---
sidebar_label: Встроенные темы
title: Встроенные темы
description: Из документации библиотеки DHTMLX JavaScript Diagram вы узнаете о встроенных темах. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Встроенные темы {#built-in-themes}

Библиотека DHTMLX Diagram предоставляет 4 предустановленные темы:

- [светлая тема](#light-theme-default) (`"light"`) — используется по умолчанию
- [тёмная тема](#dark-theme) (`"dark"`)
- [светлая высококонтрастная тема](#light-high-contrast-theme) (`"contrast-light"`)
- [тёмная высококонтрастная тема](#dark-high-contrast-theme) (`"contrast-dark"`)

Темы Diagram разработаны в соответствии с международными стандартами. Высококонтрастные темы будут полезны пользователям с нарушениями зрения. Подробнее читайте в статье [Поддержка специальных возможностей](https://docs.dhtmlx.com/suite/common_features/accessibility_support/).

Вы можете опробовать все темы в примере ниже:

<iframe src="https://snippet.dhtmlx.com/9twmlfus?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Светлая тема (по умолчанию) {#light-theme-default}

![](/img/light_theme.png)

Тема `"light"`, используемая по умолчанию, настраивается на основе CSS-переменных, перечисленных ниже:

~~~css
:root, [data-dhx-theme] {
	/* базовые цвета */
	--dhx-color-white: #fff;
	--dhx-color-gray-100: #e6e6e6;
	--dhx-color-gray-200: #ccc;
	--dhx-color-gray-300: #b3b3b3;
	--dhx-color-gray-400: #999;
	--dhx-color-gray-500: #808080;
	--dhx-color-gray-600: #666;
	--dhx-color-gray-700: #4d4d4d;
	--dhx-color-gray-800: #333;
	--dhx-color-gray-900: #1a1a1a;
	--dhx-color-black: #000;
	/* конец базовых цветов */

	/* шрифт */
	--dhx-font-family: "Roboto", Arial, Tahoma, Verdana, sans-serif;

	--dhx-font-weight-regular: 400;
	--dhx-font-weight-medium: 500;
	--dhx-font-weight-bold: 700;

	--dhx-font-size-small: 12px;
	--dhx-font-size-normal: 14px;
	--dhx-font-size-large: 16px;

	--dhx-line-height-small: 16px;
	--dhx-line-height-normal: 20px;
	--dhx-line-height-large: 24px;

	--dhx-font-color-primary: rgba(0, 0, 0, .7);
	--dhx-font-color-secondary: rgba(0, 0, 0, .5);
	--dhx-font-color-additional: rgba(0, 0, 0, .3);
	--dhx-font-color-disabled: rgba(0, 0, 0, .3);

	--dhx-font-color-contrast: var(--dhx-color-white);
	--dhx-font-color-contrast-disabled: var(--dhx-color-white);
	/* конец шрифта */

	/* иконка */
	--dhx-icon-size-small: 16px;
	--dhx-icon-size-normal: 20px;
	--dhx-icon-size-large: 24px;
	/* конец иконки */

	/* граница */
	--dhx-border-width: 1px;
	--dhx-border-radius: 2px;
	--dhx-border-color: rgba(0, 0, 0, .1);
	--dhx-border-color-focused: rgba(0, 0, 0, .3);
	--dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
	/* конец границы */

	/* тень границы */
	--dhx-border-shadow-small: 0 2px 4px rgba(0, 0, 0, .15);
	--dhx-border-shadow-normal: 0 2px 5px rgba(0, 0, 0, .3);
	--dhx-border-shadow-large: 0px 1px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);

	--dhx-shadow-input-size: inset 0px 0px 0px var(--dhx-border-width);
	/* конец тени границы */

	/* переходы */
	--dhx-transition-time: 0.2s;
	--dhx-transition-in: ease-in;
	--dhx-transition-out: ease-out;
	/* конец переходов */

	/* z-index */
	--dhx-z-index-up: 1;
	--dhx-z-index-force-up: 10;
	--dhx-z-index-overlay: 999;
	--dhx-z-index-overlay-total: 10000000;
	/* конец z-index */

	/* только служебная цветовая схема */
	--dhx-l-contrast-offset: 0%; /* смещение светлоты для контрастной темы */
	--dhx-l-h-offset: 10%; /* смещение светлоты при наведении */
	--dhx-s-d-offset: 30%; /* смещение насыщенности для отключённого состояния */
	--dhx-l-d: 70%; /* значение светлоты для отключённого состояния */
	--dhx-a-l-h: .15; /* значение прозрачности при наведении (светлая версия) */
	--dhx-a-l-a: .3; /* значение прозрачности в активном состоянии (светлая версия) */
	/* только служебное */

	/* цветовая схема */
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
	/* конец цветовой схемы */

	/* цвета темы */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 3%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 10%));
	--dhx-background-overlay: hsla(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) * -1), var(--dhx-a-background));
	--dhx-background-overlay-light: rgba(255, 255, 255, .5);

	--dhx-tooltip-background-dark: var(--dhx-color-gray-800);
	--dhx-tooltip-background-light: var(--dhx-color-white);

	--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));

	--dhx-color-primary: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)));
	--dhx-color-primary-hover: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-primary-active: var(--dhx-color-primary);
	--dhx-color-primary-disabled: hsl(var(--dhx-h-primary), calc(var(--dhx-s-primary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-primary-light-hover: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-primary-light-active: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

	--dhx-color-secondary: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)));
	--dhx-color-secondary-hover: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-secondary-active: var(--dhx-color-secondary);
	--dhx-color-secondary-disabled: hsl(var(--dhx-h-secondary), calc(var(--dhx-s-secondary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-secondary-light-hover: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-secondary-light-active: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

	--dhx-color-danger: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)));
	--dhx-color-danger-hover: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-danger-active: var(--dhx-color-danger);
	--dhx-color-danger-disabled: hsl(var(--dhx-h-danger), calc(var(--dhx-s-danger) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-danger-light-hover: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-danger-light-active: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

	--dhx-color-success: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)));
	--dhx-color-success-hover: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-success-active: var(--dhx-color-success);
	--dhx-color-success-disabled: hsl(var(--dhx-h-success), calc(var(--dhx-s-success) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-success-light-hover: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-success-light-active: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));
	/* конец цветов темы */

	/* служебные переменные DHTMLX Toolbar*/
	--dhx-s-toolbar-background: var(--dhx-background-primary);
	--dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
	--dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
	/* конец служебных переменных DHTMLX Toolbar */

	/* служебные переменные DHTMLX Grid*/
	--dhx-s-grid-header-background: var(--dhx-background-secondary);
	--dhx-s-grid-selection-background: var(--dhx-color-gray-700);
	/* конец служебных переменных DHTMLX Grid*/

	/* служебные переменные DHTMLX Calendar*/
	--dhx-s-calendar-muffled: .6;
	/* конец служебных переменных DHTMLX Calendar*/

	/* служебные переменные DHTMLX Slider*/
	--dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
	/* конец служебных переменных DHTMLX Slider*/

	/* переменные DHTMLX Diagram*/
	--dhx-selected-border: 1px solid var(--dhx-color-primary);
	--dhx-selected-border-dashed: 1px dashed var(--dhx-color-primary);
	--dhx-shape-pert-header-background: var(--dhx-gantt-base-colors-primary, #537CFA);

	--dhx-shapebar-item-font-color: #4C4C4C;
	--dhx-shapebar-item-background: #EEF1F6;
	--dhx-shapebar-item-border-color: #B8C6D6;
	/* конец переменных DHTMLX Diagram*/
}
~~~

## Светлая высококонтрастная тема {#light-high-contrast-theme}

![](/img/light_high_contrast_theme.png)

Тема `"contrast-light"` настраивается на основе как [корневых CSS-переменных](#light-theme-default), так и переменных, перечисленных ниже:

~~~css
[data-dhx-theme='contrast-light'] {
	/* шрифт */
	--dhx-font-size-normal: 16px;
	--dhx-font-size-small: var(--dhx-font-size-normal);

	--dhx-font-color-secondary: rgba(0, 0, 0, .66);
	--dhx-font-color-additional: var(--dhx-font-color-secondary);
	/* конец шрифта */

	/* граница */
	--dhx-border-color: rgba(0, 0, 0, .4);
	/* конец границы */

	/* цветовая схема */
	--dhx-l-contrast-offset: 14%;
	/* конец цветовой схемы */

	/* служебные переменные DHTMLX Toolbar*/
	--dhx-s-toolbar-background: var(--dhx-background-primary);
	--dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
	--dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
	/* конец служебных переменных DHTMLX Toolbar */

	/* служебные переменные DHTMLX Grid*/
	--dhx-s-grid-header-background: var(--dhx-background-secondary);
	--dhx-s-grid-selection-background: var(--dhx-color-gray-700);
	/* конец служебных переменных DHTMLX Grid*/

	/* служебные переменные DHTMLX Calendar*/
	--dhx-s-calendar-muffled: .8;
	/* конец служебных переменных DHTMLX Calendar*/

	/* служебные переменные DHTMLX Slider*/
	--dhx-s-tick-font-size: var(--dhx-font-size-small);
	/* конец служебных переменных DHTMLX Slider*/
}
~~~

## Тёмная тема {#dark-theme}

![](/img/dark_theme.png)

Тема `"dark"` настраивается на основе как [корневых CSS-переменных](#light-theme-default), так и переменных, перечисленных ниже:

~~~css
[data-dhx-theme='dark'] {
	/* шрифт */
	--dhx-font-color-primary: var(--dhx-color-white);
	--dhx-font-color-secondary: rgba(255, 255, 255, .7);
	--dhx-font-color-additional: rgba(255, 255, 255, .5);
	--dhx-font-color-disabled: rgba(255, 255, 255, .5);
	--dhx-font-color-contrast: var(--dhx-color-white);
	--dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
	/* конец шрифта */

	/* граница */
	--dhx-border-color: rgba(255, 255, 255, 0.3);
	--dhx-border-color-focused: rgba(255, 255, 255, 0.5);
	/* конец границы */

	/* цветовая схема */
	--dhx-l-secondary: 60%; /* смещение светлоты для контрастной темы */

	--dhx-h-background: 226;
	--dhx-s-background: 12%;
	--dhx-l-background: 20%;
	/* конец цветовой схемы */

	/* цвета темы */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
	/* конец цветов темы */

	/* служебные переменные DHTMLX Toolbar*/
	--dhx-s-toolbar-background: var(--dhx-color-black);
	--dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
	--dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
	/* конец служебных переменных DHTMLX Toolbar */

	/* служебные переменные DHTMLX Grid*/
	--dhx-s-grid-header-background: #212329;
	--dhx-s-grid-selection-background: var(--dhx-color-gray-100);
	/* конец служебных переменных DHTMLX Grid*/

	/* служебные переменные DHTMLX Calendar*/
	--dhx-s-calendar-muffled: .6;
	/* конец служебных переменных DHTMLX Calendar*/

	/* служебные переменные DHTMLX Slider*/
	--dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
	/* конец служебных переменных DHTMLX Slider*/

	/* переменные DHTMLX Diagram*/
	--dhx-shapebar-item-font-color: var(--dhx-font-color-primary);
	--dhx-shapebar-item-background: #212329;
	--dhx-shapebar-item-border-color: #6c6e74;
	/* конец переменных DHTMLX Diagram*/
}
~~~

## Тёмная высококонтрастная тема {#dark-high-contrast-theme}

![](/img/dark_high_contrast_theme.png)

Тема `"contrast-dark"` настраивается на основе как [корневых CSS-переменных](#light-theme-default), так и переменных, перечисленных ниже:

~~~css
[data-dhx-theme='contrast-dark'] {
	/* шрифт */
	--dhx-font-size-normal: 16px;
	--dhx-font-size-small: var(--dhx-font-size-normal);

	--dhx-font-color-primary: var(--dhx-color-white);
	--dhx-font-color-secondary: rgba(255, 255, 255, 0.86);
	--dhx-font-color-additional: var(--dhx-font-color-secondary);
	--dhx-font-color-disabled: rgba(255, 255, 255, .5);
	--dhx-font-color-contrast: var(--dhx-color-black);
	--dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
	/* конец шрифта */

	/* граница */
	--dhx-border-color: rgba(255, 255, 255, 0.5);
	--dhx-border-color-focused: rgba(255, 255, 255, 0.7);
	/* конец границы */

	/* цветовая схема */
	--dhx-l-contrast-offset: -12%; /* смещение светлоты для контрастной темы */

	--dhx-l-secondary: 60%;

	--dhx-h-background: 226;
	--dhx-s-background: 12%;
	--dhx-l-background: 20%;
	/* конец цветовой схемы */

	/* цвета темы */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
	/* конец цветов темы */

	/* служебные переменные DHTMLX Toolbar*/
	--dhx-s-toolbar-background: var(--dhx-color-black);
	--dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
	--dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
	/* конец служебных переменных DHTMLX Toolbar */

	/* служебные переменные DHTMLX Grid*/
	--dhx-s-grid-header-background: #212329;
	--dhx-s-grid-selection-background: var(--dhx-color-gray-100);
	/* конец служебных переменных DHTMLX Grid*/

	/* служебные переменные DHTMLX Calendar*/
	--dhx-s-calendar-muffled: .8;
	/* конец служебных переменных DHTMLX Calendar*/

	/* служебные переменные DHTMLX Slider*/
	--dhx-s-tick-font-size: var(--dhx-font-size-small);
	/* конец служебных переменных DHTMLX Slider*/

	/* переменные DHTMLX Diagram*/
	--dhx-shapebar-item-font-color: var(--dhx-font-color-primary);
	--dhx-shapebar-item-background: #212329;
	--dhx-shapebar-item-border-color: #6c6e74;
	/* конец переменных DHTMLX Diagram*/
}
~~~

## Настройка тем {#setting-themes}

Чтобы задать нужную тему — [встроенную тему Diagram](guides/themes.md) или [пользовательскую](guides/themes/custom_theme.md), — используйте один из способов, описанных ниже:

### Использование атрибута data-dhx-theme {#using-the-data-dhx-theme-attribute}

Вы можете выбрать один из следующих вариантов:

- задайте атрибут `data-dhx-theme` для *выбранного контейнера*:

~~~html title="index.html"
<!-- контейнер компонента -->
<div data-dhx-theme="dark" style="height: 100%" id="diagram"></div>
~~~

- задайте атрибут `data-dhx-theme` для *HTML-элемента*, например для *documentElement*:

~~~jsx title="index.js"
document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### Использование метода dhx.setTheme() {#using-the-dhxsettheme-method}

Метод `dhx.setTheme()` принимает следующие параметры:

- `theme: string` — (обязательный) имя темы. Это может быть:
    - имя темы Diagram: *`"light"` | `"contrast-light"` | `"dark"` | `"contrast-dark"`*
    - имя [пользовательской темы](guides/themes/custom_theme.md)
    - `"light"` — по умолчанию
- `container: string | HTMLElement` — (необязательный) контейнер, к которому должна быть применена тема. Это может быть:
    - HTMLElement
    - строковое значение с ID контейнера или ID ячейки Layout
    - *document.documentElement* — по умолчанию

Ниже приведены примеры использования метода `dhx.setTheme()`:

- применение темы к body или к контейнеру

~~~html {8-11}
<div id="editor_container"></div>
<div>Другое содержимое</div>

<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default"
    });
    dhx.setTheme("dark"); //применяет тему "dark" к body
    //или
    //применяет тему "dark" к контейнеру с ID "editor_container"
    dhx.setTheme("dark", "editor_container");
</script>
~~~

- задание темы для любого HTML-элемента, например для панели инструментов Toolbar

~~~jsx {10-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "toolbar"
        }
    }
});

const toolbarEl = document.querySelector(".toolbar");
dhx.setTheme("dark", toolbarEl);
~~~

**Связанный пример:** [Diagram Editor. Обычный режим. Базовые и пользовательские темы](https://snippet.dhtmlx.com/9twmlfus)
