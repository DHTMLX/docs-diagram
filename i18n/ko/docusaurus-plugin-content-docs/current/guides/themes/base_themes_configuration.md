---
sidebar_label: 기본 제공 테마 구성
title: 기본 제공 테마 구성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 테마를 구성하는 방법을 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# 기본 제공 테마 구성 {#configuring-built-in-themes}

## 모든 테마 구성 {#configuring-all-themes}

[기본](themes.md#light-theme-default) 테마의 CSS 변수에는 색상 구성표(color scheme) 변수가 포함되어 있음을 확인할 수 있습니다.

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
색상 값은 [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) 형식으로 지정되며, 각 값의 의미는 다음과 같습니다.

- *hue*는 색상환에서 0부터 360까지의 각도 값입니다. 0은 빨강, 120은 초록, 240은 파랑입니다.
- *saturation*은 백분율 값입니다. 0%는 완전히 무채색(회색)을 의미하고, 100%는 완전히 채도가 높은 상태를 의미합니다.
- *lightness*는 백분율 값입니다. 100%는 흰색, 0%는 검은색이며, 50%는 `"normal"`입니다.
:::

이러한 CSS 변수 덕분에 색상 구성표가 자동으로 계산됩니다. 즉, 루트에서 색상 구성표 변수의 값을 변경하면 `"contrast-light"`, `"dark"`, `"contrast-dark"` 테마의 값이 실시간으로 자동 재계산됩니다.

예를 들어, 다음과 같은 방법으로 모든 Diagram 테마의 primary 색상을 한 번에 재정의할 수 있습니다.

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

또한 primary 색상을 기준으로 계산되는 변수 값도 그에 따라 재계산됩니다. 예를 들어 focused 색상 값은 다음과 같이 계산됩니다.

~~~jsx
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## 개별 테마 구성 {#configuring-a-separate-theme}

특정 [Diagram 테마](themes.md)의 색상 값을 재정의하려면 `'data-dhx-theme'` 속성에서 이를 수행해야 합니다.

~~~html
<style>
    [data-dhx-theme='light'] {
        /* 테두리 */
        --dhx-border-color: #ced4da;
        /* 테두리 끝 */

        /* 색상 구성표 */
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
        /* 색상 구성표 끝 */
    }
</style>

<script>
    const diagram = new dhx.Diagram("diagram_container", {
        type: "default",
    });

    dhx.setTheme("light");
</script>
~~~

## Shapebar 도형 모양 구성 {#configuring-the-look-of-shapes-in-shapebar}

### 기본 색상 구성표 재정의 {#redefining-default-color-schemes}

색상 구성표를 지정하는 CSS 변수를 재정의하여 Shapebar 항목의 모양을 관리할 수 있습니다.

- `--dhx-shapebar-item-font-color`
- `--dhx-shapebar-item-background`
- `--dhx-shapebar-item-border-color`

이러한 변수의 기본값은 [적용된 테마에 따라 달라집니다](themes.md).

### 사용자 지정 CSS 변수 설정 {#setting-custom-css-variables}

자체 CSS 변수를 사용하여 Shapebar 항목의 모양과 느낌을 조정할 수도 있습니다. 이를 위해 사용자 지정 CSS 변수를 정의하고, 이를 `defaults` 구성 옵션에서 필요한 속성의 값으로 지정해야 합니다.

:::note
이 변수 값은 Shapebar 항목이 선택될 때 할당되며, 테마가 변경되어도 재정의되지 않습니다.
:::

예를 들어 다음과 같습니다.

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
    // dark 테마를 설정합니다
    const node = document.getElementById("editor_container").childNodes[0];
    dhx.setTheme("dark", node);
</script>
~~~

## PERT 모드에서 작업 모양 조정 {#adjusting-the-look-of-tasks-in-the-pert-mode}

[PERT 차트 모드의 Diagram](/#diagram-in-the-pert-mode)에서 작업의 모양은 `--dhx-shape-pert-header-background` CSS 변수로 정의됩니다. 이 변수는 [기본](themes.md#light-theme-default) 테마에서 다음과 같이 지정됩니다.

~~~jsx
--dhx-shape-pert-header-background: var(--dhx-gantt-base-colors-primary, #537CFA);
~~~

- PERT 차트 모드의 Diagram이 DHTMLX Gantt와 함께 사용되는 경우, Gantt 차트의 현재 색상 구성표가 Diagram 작업에 적용됩니다
- Diagram이 단독으로 사용되는 경우, 위에서 언급한 CSS 변수는 기본값인 `#537CFA`로 설정됩니다

