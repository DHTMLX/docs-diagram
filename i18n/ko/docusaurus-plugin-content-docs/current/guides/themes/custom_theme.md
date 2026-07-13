---
sidebar_label: 사용자 지정 테마
title: 사용자 지정 테마
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 사용자 지정 테마를 만드는 방법을 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# 사용자 지정 테마 {#custom-theme}

기본 Diagram 테마가 프로젝트에 맞지 않는 경우 직접 색상 테마를 구성할 수 있습니다.
아래 스니펫에서 **사용자 지정 라이트**와 **사용자 지정 다크** 테마를 확인해 보세요.

<iframe src="https://snippet.dhtmlx.com/9twmlfus?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

사용자 지정 테마를 만들려면 다음과 같이 내부 CSS 변수 값을 재정의합니다.

~~~html
<style>
    [data-dhx-theme='custom-theme-dark'] {
        /* 폰트 */
        --dhx-font-color-primary: var(--dhx-color-gray-200);
        --dhx-font-color-secondary: var(--dhx-color-gray-500);
        --dhx-font-color-additional: var(--dhx-color-gray-500);
        --dhx-font-color-disabled: var(--dhx-color-gray-800);
        --dhx-font-color-contrast: var(--dhx-color-black);
        /* 폰트 끝 */

        /* 테두리 */
        --dhx-border-color: #007a99;
        /* 테두리 끝 */

        /* 색상 구성표 */
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
        /* 색상 구성표 끝 */

        /* 테마 색상 */
        --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
        --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
        --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
        /* 테마 색상 끝 */

        /* DHTMLX Grid 서비스 변수*/
        --dhx-s-grid-header-background: #002229;
        --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
        /* DHTMLX Grid 서비스 변수 끝*/

        /* DHTMLX Toolbar 서비스 변수*/
        --dhx-s-toolbar-background: #002229;
        /* DHTMLX Toolbar 서비스 변수 끝 */
    }
</style>

<script>
    const diagram = new dhx.Diagram("diagram_container", {
        type: "default",
    });

    dhx.setTheme("custom-theme-dark");
</script>
~~~

**관련 샘플:** [Diagram Editor. 기본 모드. 기본 테마와 사용자 지정 테마](https://snippet.dhtmlx.com/9twmlfus)

