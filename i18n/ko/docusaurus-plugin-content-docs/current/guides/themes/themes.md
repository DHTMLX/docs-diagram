---
sidebar_label: 기본 제공 테마
title: 기본 제공 테마
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 기본 제공 테마에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# 기본 제공 테마 {#built-in-themes}

DHTMLX Diagram 라이브러리는 4개의 사전 정의된 테마를 제공합니다.

- [라이트 테마](#light-theme-default) (`"light"`) - 기본적으로 사용됨
- [다크 테마](#dark-theme) (`"dark"`)
- [라이트 고대비 테마](#light-high-contrast-theme) (`"contrast-light"`)
- [다크 고대비 테마](#dark-high-contrast-theme) (`"contrast-dark"`)

Diagram 테마는 국제 표준에 따라 개발되었습니다. 고대비 테마는 시각 장애가 있는 사용자에게 도움이 됩니다. 자세한 내용은 [접근성 지원](https://docs.dhtmlx.com/suite/common_features/accessibility_support/) 문서를 참고하세요.

아래 예제에서 모든 테마를 사용해 볼 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/9twmlfus?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 라이트 테마 (기본값) {#light-theme-default}

![](/img/light_theme.png)

기본 `"light"` 테마는 아래 나열된 CSS 변수를 기반으로 구성됩니다.

~~~css
:root, [data-dhx-theme] {
	/* 기본 색상 */
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
	/* 기본 색상 끝 */

	/* 폰트 */
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
	/* 폰트 끝 */

	/* 아이콘 */
	--dhx-icon-size-small: 16px;
	--dhx-icon-size-normal: 20px;
	--dhx-icon-size-large: 24px;
	/* 아이콘 끝 */

	/* 테두리 */
	--dhx-border-width: 1px;
	--dhx-border-radius: 2px;
	--dhx-border-color: rgba(0, 0, 0, .1);
	--dhx-border-color-focused: rgba(0, 0, 0, .3);
	--dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
	/* 테두리 끝 */

	/* 테두리 그림자 */
	--dhx-border-shadow-small: 0 2px 4px rgba(0, 0, 0, .15);
	--dhx-border-shadow-normal: 0 2px 5px rgba(0, 0, 0, .3);
	--dhx-border-shadow-large: 0px 1px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);

	--dhx-shadow-input-size: inset 0px 0px 0px var(--dhx-border-width);
	/* 테두리 그림자 끝 */

	/* 전환 */
	--dhx-transition-time: 0.2s;
	--dhx-transition-in: ease-in;
	--dhx-transition-out: ease-out;
	/* 전환 끝 */

	/* z-index */
	--dhx-z-index-up: 1;
	--dhx-z-index-force-up: 10;
	--dhx-z-index-overlay: 999;
	--dhx-z-index-overlay-total: 10000000;
	/* z-index 끝 */

	/* 서비스 전용 색상 구성 */
	--dhx-l-contrast-offset: 0%; /* 명도 대비 테마 오프셋 */
	--dhx-l-h-offset: 10%; /* 명도 호버 오프셋 */
	--dhx-s-d-offset: 30%; /* 채도 비활성화 오프셋 */
	--dhx-l-d: 70%; /* 명도 비활성화 값 */
	--dhx-a-l-h: .15; /* 라이트 호버 알파 값 */
	--dhx-a-l-a: .3; /* 라이트 활성 알파 값 */
	/* 서비스 전용 */

	/* 색상 구성표 */
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
	/* 색상 구성표 끝 */

	/* 테마 색상 */
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
	/* 테마 색상 끝 */

	/* DHTMLX Toolbar 서비스 변수*/
	--dhx-s-toolbar-background: var(--dhx-background-primary);
	--dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
	--dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
	/* DHTMLX Toolbar 서비스 변수 끝 */

	/* DHTMLX Grid 서비스 변수*/
	--dhx-s-grid-header-background: var(--dhx-background-secondary);
	--dhx-s-grid-selection-background: var(--dhx-color-gray-700);
	/* DHTMLX Grid 서비스 변수 끝*/

	/* DHTMLX Calendar 서비스 변수*/
	--dhx-s-calendar-muffled: .6;
	/* DHTMLX Calendar 서비스 변수 끝*/

	/* DHTMLX Slider 서비스 변수*/
	--dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
	/* DHTMLX Slider 서비스 변수 끝*/

	/* DHTMLX Diagram 변수*/
	--dhx-selected-border: 1px solid var(--dhx-color-primary);
	--dhx-selected-border-dashed: 1px dashed var(--dhx-color-primary);
	--dhx-shape-pert-header-background: var(--dhx-gantt-base-colors-primary, #537CFA);

	--dhx-shapebar-item-font-color: #4C4C4C;
	--dhx-shapebar-item-background: #EEF1F6;
	--dhx-shapebar-item-border-color: #B8C6D6;
	/* DHTMLX Diagram 변수 끝*/
}
~~~

## 라이트 고대비 테마 {#light-high-contrast-theme}

![](/img/light_high_contrast_theme.png)

`"contrast-light"` 테마는 [루트 CSS 변수](#light-theme-default)와 아래 나열된 변수를 기반으로 구성됩니다.

~~~css
[data-dhx-theme='contrast-light'] {
	/* 폰트 */
	--dhx-font-size-normal: 16px;
	--dhx-font-size-small: var(--dhx-font-size-normal);

	--dhx-font-color-secondary: rgba(0, 0, 0, .66);
	--dhx-font-color-additional: var(--dhx-font-color-secondary);
	/* 폰트 끝 */

	/* 테두리 */
	--dhx-border-color: rgba(0, 0, 0, .4);
	/* 테두리 끝 */

	/* 색상 구성표 */
	--dhx-l-contrast-offset: 14%;
	/* 색상 구성표 끝 */

	/* DHTMLX Toolbar 서비스 변수*/
	--dhx-s-toolbar-background: var(--dhx-background-primary);
	--dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
	--dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
	/* DHTMLX Toolbar 서비스 변수 끝 */

	/* DHTMLX Grid 서비스 변수*/
	--dhx-s-grid-header-background: var(--dhx-background-secondary);
	--dhx-s-grid-selection-background: var(--dhx-color-gray-700);
	/* DHTMLX Grid 서비스 변수 끝*/

	/* DHTMLX Calendar 서비스 변수*/
	--dhx-s-calendar-muffled: .8;
	/* DHTMLX Calendar 서비스 변수 끝*/

	/* DHTMLX Slider 서비스 변수*/
	--dhx-s-tick-font-size: var(--dhx-font-size-small);
	/* DHTMLX Slider 서비스 변수 끝*/
}
~~~

## 다크 테마 {#dark-theme}

![](/img/dark_theme.png)

`"dark"` 테마는 [루트 CSS 변수](#light-theme-default)와 아래 나열된 변수를 기반으로 구성됩니다.

~~~css
[data-dhx-theme='dark'] {
	/* 폰트 */
	--dhx-font-color-primary: var(--dhx-color-white);
	--dhx-font-color-secondary: rgba(255, 255, 255, .7);
	--dhx-font-color-additional: rgba(255, 255, 255, .5);
	--dhx-font-color-disabled: rgba(255, 255, 255, .5);
	--dhx-font-color-contrast: var(--dhx-color-white);
	--dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
	/* 폰트 끝 */

	/* 테두리 */
	--dhx-border-color: rgba(255, 255, 255, 0.3);
	--dhx-border-color-focused: rgba(255, 255, 255, 0.5);
	/* 테두리 끝 */

	/* 색상 구성표 */
	--dhx-l-secondary: 60%; /* 명도 대비 테마 오프셋 */

	--dhx-h-background: 226;
	--dhx-s-background: 12%;
	--dhx-l-background: 20%;
	/* 색상 구성표 끝 */

	/* 테마 색상 */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
	/* 테마 색상 끝 */

	/* DHTMLX Toolbar 서비스 변수*/
	--dhx-s-toolbar-background: var(--dhx-color-black);
	--dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
	--dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
	/* DHTMLX Toolbar 서비스 변수 끝 */

	/* DHTMLX Grid 서비스 변수*/
	--dhx-s-grid-header-background: #212329;
	--dhx-s-grid-selection-background: var(--dhx-color-gray-100);
	/* DHTMLX Grid 서비스 변수 끝*/

	/* DHTMLX Calendar 서비스 변수*/
	--dhx-s-calendar-muffled: .6;
	/* DHTMLX Calendar 서비스 변수 끝*/

	/* DHTMLX Slider 서비스 변수*/
	--dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
	/* DHTMLX Slider 서비스 변수 끝*/

	/* DHTMLX Diagram 변수*/
	--dhx-shapebar-item-font-color: var(--dhx-font-color-primary);
	--dhx-shapebar-item-background: #212329;
	--dhx-shapebar-item-border-color: #6c6e74;
	/* DHTMLX Diagram 변수 끝*/
}
~~~

## 다크 고대비 테마 {#dark-high-contrast-theme}

![](/img/dark_high_contrast_theme.png)

`"contrast-dark"` 테마는 [루트 CSS 변수](#light-theme-default)와 아래 나열된 변수를 기반으로 구성됩니다.

~~~css
[data-dhx-theme='contrast-dark'] {
	/* 폰트 */
	--dhx-font-size-normal: 16px;
	--dhx-font-size-small: var(--dhx-font-size-normal);

	--dhx-font-color-primary: var(--dhx-color-white);
	--dhx-font-color-secondary: rgba(255, 255, 255, 0.86);
	--dhx-font-color-additional: var(--dhx-font-color-secondary);
	--dhx-font-color-disabled: rgba(255, 255, 255, .5);
	--dhx-font-color-contrast: var(--dhx-color-black);
	--dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
	/* 폰트 끝 */

	/* 테두리 */
	--dhx-border-color: rgba(255, 255, 255, 0.5);
	--dhx-border-color-focused: rgba(255, 255, 255, 0.7);
	/* 테두리 끝 */

	/* 색상 구성표 */
	--dhx-l-contrast-offset: -12%; /* 명도 대비 테마 오프셋 */

	--dhx-l-secondary: 60%;

	--dhx-h-background: 226;
	--dhx-s-background: 12%;
	--dhx-l-background: 20%;
	/* 색상 구성표 끝 */

	/* 테마 색상 */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
	/* 테마 색상 끝 */

	/* DHTMLX Toolbar 서비스 변수*/
	--dhx-s-toolbar-background: var(--dhx-color-black);
	--dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
	--dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
	/* DHTMLX Toolbar 서비스 변수 끝 */

	/* DHTMLX Grid 서비스 변수*/
	--dhx-s-grid-header-background: #212329;
	--dhx-s-grid-selection-background: var(--dhx-color-gray-100);
	/* DHTMLX Grid 서비스 변수 끝*/

	/* DHTMLX Calendar 서비스 변수*/
	--dhx-s-calendar-muffled: .8;
	/* DHTMLX Calendar 서비스 변수 끝*/

	/* DHTMLX Slider 서비스 변수*/
	--dhx-s-tick-font-size: var(--dhx-font-size-small);
	/* DHTMLX Slider 서비스 변수 끝*/

	/* DHTMLX Diagram 변수*/
	--dhx-shapebar-item-font-color: var(--dhx-font-color-primary);
	--dhx-shapebar-item-background: #212329;
	--dhx-shapebar-item-border-color: #6c6e74;
	/* DHTMLX Diagram 변수 끝*/
}
~~~

## 테마 설정 {#setting-themes}

필요한 테마를 설정하려면, [기본 제공 Diagram 테마](themes.md)든 [사용자 지정 테마](guides/themes/custom_theme.md)든 아래 설명된 방법 중 하나를 사용하세요.

### data-dhx-theme 속성 사용 {#using-the-data-dhx-theme-attribute}

다음 방법 중에서 선택할 수 있습니다.

- *선택한 컨테이너*에 `data-dhx-theme` 속성을 설정합니다.

~~~html title="index.html"
<!-- 컴포넌트 컨테이너 -->
<div data-dhx-theme="dark" style="height: 100%" id="diagram"></div>
~~~

- *HTML 요소*(예: *documentElement*)에 `data-dhx-theme` 속성을 설정합니다.

~~~jsx title="index.js"
document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### dhx.setTheme() 메서드 사용 {#using-the-dhxsettheme-method}

`dhx.setTheme()` 메서드는 다음 매개변수를 사용합니다.

- `theme: string` - (필수) 테마 이름입니다. 다음 중 하나일 수 있습니다.
    - Diagram 테마 이름: *`"light"` | `"contrast-light"` | `"dark"` | `"contrast-dark"`*
    - [사용자 지정 테마](guides/themes/custom_theme.md)의 이름
    - `"light"` - 기본값
- `container: string | HTMLElement` - (선택 사항) 테마를 적용할 컨테이너입니다. 다음 중 하나일 수 있습니다.
    - HTMLElement
    - 컨테이너의 ID 또는 Layout 셀의 ID를 나타내는 문자열 값
    - *document.documentElement* - 기본값

아래에서 `dhx.setTheme()` 메서드 사용 예제를 확인할 수 있습니다.

- body 또는 컨테이너에 테마 적용하기

~~~html {8-11}
<div id="editor_container"></div>
<div>Other content</div>

<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default"
    });
    dhx.setTheme("dark"); // "dark" 테마를 body에 적용합니다
    // 또는
    // "dark" 테마를 "editor_container" ID를 가진 컨테이너에 적용합니다
    dhx.setTheme("dark", "editor_container");
</script>
~~~

- 임의의 HTML 요소(예: Toolbar 컨트롤)에 테마 설정하기

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

**관련 샘플:** [Diagram Editor. 기본 모드. 기본 테마와 사용자 지정 테마](https://snippet.dhtmlx.com/9twmlfus)
