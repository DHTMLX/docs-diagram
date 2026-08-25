---
sidebar_label: css
title: Shapebar의 css 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Shapebar의 css 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# css

### 설명 {#description}

@short: 선택 사항입니다. Shapebar의 모양을 조정하기 위해 사용자 지정 CSS 클래스를 적용할 수 있습니다.

### 사용법 {#usage}

~~~jsx
css?: string;
~~~

### 예제 {#example}

~~~html {8}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            // shapebar: true, // 기본 Shapebar를 표시합니다
            // 또는 객체를 통해 Shapebar 구성
            shapebar: {
                css: "custom_style"
            }
        }
    });
</script>

<style>
    .custom_style {
        background-color: var(--dhx-background-primary);
        font-size: var(--dhx-font-size-large);
    }
</style>
~~~

**관련 문서:**

- [Shapebar 및 도형 모양](guides/diagram_editor/shapebar.md#shapebar-and-shapes-appearance)
- [Shapebar에서 도형의 모양 구성하기](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar)

**변경 로그:** v6.0에서 추가
