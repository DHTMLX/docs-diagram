---
sidebar_label: Integrierte Themes
title: Integrierte Themes
description: Sie können in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek mehr über die integrierten Themes erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Integrierte Themes

Die DHTMLX Diagram-Bibliothek bietet 4 vordefinierte Themes:

- [Light-Theme](#light-theme-default) (`"light"`) - wird standardmäßig verwendet
- [Dark-Theme](#dark-theme) (`"dark"`)
- [Light-High-Contrast-Theme](#light-high-contrast-theme) (`"contrast-light"`)
- [Dark-High-Contrast-Theme](#dark-high-contrast-theme) (`"contrast-dark"`)

Die Diagram-Themes wurden in Übereinstimmung mit internationalen Standards entwickelt. Die High-Contrast-Themes sind hilfreich für Benutzer mit Sehbehinderung. Weitere Details finden Sie im Artikel [Unterstützung der Barrierefreiheit](https://docs.dhtmlx.com/suite/common_features/accessibility_support/).

Sie können alle Themes im folgenden Beispiel ausprobieren:

<iframe src="https://snippet.dhtmlx.com/9twmlfus?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Light-Theme (Standard) {#light-theme-default}

![](/img/light_theme.png)

Das Standard-Theme `"light"` wird auf Basis der unten aufgeführten CSS-Variablen konfiguriert:

~~~css
:root, [data-dhx-theme] {
	/* Basisfarben */
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
	/* Ende Basisfarben */

	/* Schrift */
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
	/* Ende Schrift */

	/* Symbol */
	--dhx-icon-size-small: 16px;
	--dhx-icon-size-normal: 20px;
	--dhx-icon-size-large: 24px;
	/* Ende Symbol */

	/* Rahmen */
	--dhx-border-width: 1px;
	--dhx-border-radius: 2px;
	--dhx-border-color: rgba(0, 0, 0, .1);
	--dhx-border-color-focused: rgba(0, 0, 0, .3);
	--dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
	/* Ende Rahmen */

	/* Rahmenschatten */
	--dhx-border-shadow-small: 0 2px 4px rgba(0, 0, 0, .15);
	--dhx-border-shadow-normal: 0 2px 5px rgba(0, 0, 0, .3);
	--dhx-border-shadow-large: 0px 1px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);

	--dhx-shadow-input-size: inset 0px 0px 0px var(--dhx-border-width);
	/* Ende Rahmenschatten */

	/* Übergänge */
	--dhx-transition-time: 0.2s;
	--dhx-transition-in: ease-in;
	--dhx-transition-out: ease-out;
	/* Ende Übergänge */

	/* Z-Index */
	--dhx-z-index-up: 1;
	--dhx-z-index-force-up: 10;
	--dhx-z-index-overlay: 999;
	--dhx-z-index-overlay-total: 10000000;
	/* Ende Z-Index */

	/* nur Service-Farbschema */
	--dhx-l-contrast-offset: 0%; /* Helligkeits-Offset für Kontrast-Theme */
	--dhx-l-h-offset: 10%; /* Helligkeits-Offset für Hover */
	--dhx-s-d-offset: 30%; /* Sättigungs-Offset für deaktiviert */
	--dhx-l-d: 70%; /* Helligkeitswert für deaktiviert */
	--dhx-a-l-h: .15; /* Alphawert für helles Hover */
	--dhx-a-l-a: .3; /* Alphawert für helles Aktiv */
	/* nur Service */

	/* Farbschema */
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
	/* Ende Farbschema */

	/* Theme-Farben */
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
	/* Ende Theme-Farben */

	/* DHTMLX Toolbar-Servicevariablen*/
	--dhx-s-toolbar-background: var(--dhx-background-primary);
	--dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
	--dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
	/* Ende DHTMLX Toolbar-Servicevariablen */

	/* DHTMLX Grid-Servicevariablen*/
	--dhx-s-grid-header-background: var(--dhx-background-secondary);
	--dhx-s-grid-selection-background: var(--dhx-color-gray-700);
	/* Ende DHTMLX Grid-Servicevariablen*/

	/* DHTMLX Calendar-Servicevariablen*/
	--dhx-s-calendar-muffled: .6;
	/* Ende DHTMLX Calendar-Servicevariablen*/

	/* DHTMLX Slider-Servicevariablen*/
	--dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
	/* Ende DHTMLX Slider-Servicevariablen*/

	/* DHTMLX Diagram-Variablen*/
	--dhx-selected-border: 1px solid var(--dhx-color-primary);
	--dhx-selected-border-dashed: 1px dashed var(--dhx-color-primary);
	--dhx-shape-pert-header-background: var(--dhx-gantt-base-colors-primary, #537CFA);

	--dhx-shapebar-item-font-color: #4C4C4C;
	--dhx-shapebar-item-background: #EEF1F6;
	--dhx-shapebar-item-border-color: #B8C6D6;
	/* Ende DHTMLX Diagram-Variablen*/
}
~~~

## Light-High-Contrast-Theme {#light-high-contrast-theme}

![](/img/light_high_contrast_theme.png)

Das Theme `"contrast-light"` wird sowohl auf Basis der [CSS-Root-Variablen](#light-theme-default) als auch der unten aufgeführten Variablen konfiguriert:

~~~css
[data-dhx-theme='contrast-light'] {
	/* Schrift */
	--dhx-font-size-normal: 16px;
	--dhx-font-size-small: var(--dhx-font-size-normal);

	--dhx-font-color-secondary: rgba(0, 0, 0, .66);
	--dhx-font-color-additional: var(--dhx-font-color-secondary);
	/* Ende Schrift */

	/* Rahmen */
	--dhx-border-color: rgba(0, 0, 0, .4);
	/* Ende Rahmen */

	/* Farbschema */
	--dhx-l-contrast-offset: 14%;
	/* Ende Farbschema */

	/* DHTMLX Toolbar-Servicevariablen*/
	--dhx-s-toolbar-background: var(--dhx-background-primary);
	--dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
	--dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
	/* Ende DHTMLX Toolbar-Servicevariablen */

	/* DHTMLX Grid-Servicevariablen*/
	--dhx-s-grid-header-background: var(--dhx-background-secondary);
	--dhx-s-grid-selection-background: var(--dhx-color-gray-700);
	/* Ende DHTMLX Grid-Servicevariablen*/

	/* DHTMLX Calendar-Servicevariablen*/
	--dhx-s-calendar-muffled: .8;
	/* Ende DHTMLX Calendar-Servicevariablen*/

	/* DHTMLX Slider-Servicevariablen*/
	--dhx-s-tick-font-size: var(--dhx-font-size-small);
	/* Ende DHTMLX Slider-Servicevariablen*/
}
~~~

## Dark-Theme {#dark-theme}

![](/img/dark_theme.png)

Das Theme `"dark"` wird sowohl auf Basis der [CSS-Root-Variablen](#light-theme-default) als auch der unten aufgeführten Variablen konfiguriert:

~~~css
[data-dhx-theme='dark'] {
	/* Schrift */
	--dhx-font-color-primary: var(--dhx-color-white);
	--dhx-font-color-secondary: rgba(255, 255, 255, .7);
	--dhx-font-color-additional: rgba(255, 255, 255, .5);
	--dhx-font-color-disabled: rgba(255, 255, 255, .5);
	--dhx-font-color-contrast: var(--dhx-color-white);
	--dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
	/* Ende Schrift */

	/* Rahmen */
	--dhx-border-color: rgba(255, 255, 255, 0.3);
	--dhx-border-color-focused: rgba(255, 255, 255, 0.5);
	/* Ende Rahmen */

	/* Farbschema */
	--dhx-l-secondary: 60%; /* Helligkeits-Offset für Kontrast-Theme */

	--dhx-h-background: 226;
	--dhx-s-background: 12%;
	--dhx-l-background: 20%;
	/* Ende Farbschema */

	/* Theme-Farben */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
	/* Ende Theme-Farben */

	/* DHTMLX Toolbar-Servicevariablen*/
	--dhx-s-toolbar-background: var(--dhx-color-black);
	--dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
	--dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
	/* Ende DHTMLX Toolbar-Servicevariablen */

	/* DHTMLX Grid-Servicevariablen*/
	--dhx-s-grid-header-background: #212329;
	--dhx-s-grid-selection-background: var(--dhx-color-gray-100);
	/* Ende DHTMLX Grid-Servicevariablen*/

	/* DHTMLX Calendar-Servicevariablen*/
	--dhx-s-calendar-muffled: .6;
	/* Ende DHTMLX Calendar-Servicevariablen*/

	/* DHTMLX Slider-Servicevariablen*/
	--dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
	/* Ende DHTMLX Slider-Servicevariablen*/

	/* DHTMLX Diagram-Variablen*/
	--dhx-shapebar-item-font-color: var(--dhx-font-color-primary);
	--dhx-shapebar-item-background: #212329;
	--dhx-shapebar-item-border-color: #6c6e74;
	/* Ende DHTMLX Diagram-Variablen*/
}
~~~

## Dark-High-Contrast-Theme {#dark-high-contrast-theme}

![](/img/dark_high_contrast_theme.png)

Das Theme `"contrast-dark"` wird sowohl auf Basis der [CSS-Root-Variablen](#light-theme-default) als auch der unten aufgeführten Variablen konfiguriert:

~~~css
[data-dhx-theme='contrast-dark'] {
	/* Schrift */
	--dhx-font-size-normal: 16px;
	--dhx-font-size-small: var(--dhx-font-size-normal);

	--dhx-font-color-primary: var(--dhx-color-white);
	--dhx-font-color-secondary: rgba(255, 255, 255, 0.86);
	--dhx-font-color-additional: var(--dhx-font-color-secondary);
	--dhx-font-color-disabled: rgba(255, 255, 255, .5);
	--dhx-font-color-contrast: var(--dhx-color-black);
	--dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
	/* Ende Schrift */

	/* Rahmen */
	--dhx-border-color: rgba(255, 255, 255, 0.5);
	--dhx-border-color-focused: rgba(255, 255, 255, 0.7);
	/* Ende Rahmen */

	/* Farbschema */
	--dhx-l-contrast-offset: -12%; /* Helligkeits-Offset für Kontrast-Theme */

	--dhx-l-secondary: 60%;

	--dhx-h-background: 226;
	--dhx-s-background: 12%;
	--dhx-l-background: 20%;
	/* Ende Farbschema */

	/* Theme-Farben */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
	/* Ende Theme-Farben */

	/* DHTMLX Toolbar-Servicevariablen*/
	--dhx-s-toolbar-background: var(--dhx-color-black);
	--dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
	--dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
	/* Ende DHTMLX Toolbar-Servicevariablen */

	/* DHTMLX Grid-Servicevariablen*/
	--dhx-s-grid-header-background: #212329;
	--dhx-s-grid-selection-background: var(--dhx-color-gray-100);
	/* Ende DHTMLX Grid-Servicevariablen*/

	/* DHTMLX Calendar-Servicevariablen*/
	--dhx-s-calendar-muffled: .8;
	/* Ende DHTMLX Calendar-Servicevariablen*/

	/* DHTMLX Slider-Servicevariablen*/
	--dhx-s-tick-font-size: var(--dhx-font-size-small);
	/* Ende DHTMLX Slider-Servicevariablen*/

	/* DHTMLX Diagram-Variablen*/
	--dhx-shapebar-item-font-color: var(--dhx-font-color-primary);
	--dhx-shapebar-item-background: #212329;
	--dhx-shapebar-item-border-color: #6c6e74;
	/* Ende DHTMLX Diagram-Variablen*/
}
~~~

## Themes festlegen {#setting-themes}

Um das gewünschte Theme festzulegen – sei es ein [integriertes Diagram-Theme](guides/themes.md) oder ein [benutzerdefiniertes](guides/themes/custom_theme.md) – verwenden Sie eine der unten beschriebenen Methoden:

### Verwendung des Attributs data-dhx-theme {#using-the-data-dhx-theme-attribute}

Sie können aus den folgenden Varianten wählen:

- Legen Sie das Attribut `data-dhx-theme` für den *ausgewählten Container* fest:

~~~html title="index.html"
<!-- Komponenten-Container -->
<div data-dhx-theme="dark" style="height: 100%" id="diagram"></div>
~~~

- Legen Sie das Attribut `data-dhx-theme` für ein *HTML-Element* fest, z. B. für *documentElement*:

~~~jsx title="index.js"
document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### Verwendung der Methode dhx.setTheme() {#using-the-dhxsettheme-method}

Die Methode `dhx.setTheme()` akzeptiert die folgenden Parameter:

- `theme: string` - (erforderlich) der Name des Themes. Er kann sein:
    - der Name des Diagram-Themes: *`"light"` | `"contrast-light"` | `"dark"` | `"contrast-dark"`*
    - der Name eines [benutzerdefinierten Themes](guides/themes/custom_theme.md)
    - `"light"` - standardmäßig
- `container: string | HTMLElement` - (optional) der Container, auf den das Theme angewendet werden muss. Er kann sein:
    - ein HTMLElement
    - ein String-Wert mit der ID des Containers oder der ID einer Layout-Zelle
    - *document.documentElement* - standardmäßig

Nachfolgend finden Sie Beispiele für die Verwendung der Methode `dhx.setTheme()`:

- Anwenden eines Themes entweder auf den Body oder auf den Container

~~~html {8-11}
<div id="editor_container"></div>
<div>Other content</div>

<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default"
    });
    dhx.setTheme("dark"); //wendet das Theme "dark" auf den Body an
    //oder
    //wendet das Theme "dark" auf den Container mit der ID "editor_container" an
    dhx.setTheme("dark", "editor_container");
</script>
~~~

- Festlegen eines Themes für ein beliebiges HTML-Element, z. B. für das Toolbar-Steuerelement

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

**Verwandtes Beispiel:** [Diagram Editor. Standardmodus. Basis- und benutzerdefinierte Themes](https://snippet.dhtmlx.com/9twmlfus)
