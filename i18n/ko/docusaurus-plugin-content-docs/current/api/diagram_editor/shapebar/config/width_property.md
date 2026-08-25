---
sidebar_label: width
title: Shapebar의 width 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Shapebar의 width 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# width

### 설명 {#description}

@short: 선택 사항입니다. 에디터의 shapebar 너비를 설정합니다.

### 사용법 {#usage}

~~~jsx
width?: number;
~~~

### 기본 설정 {#default-config}

~~~jsx
width: 300
~~~

### 예제 {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 기본 Shapebar를 표시합니다
        // 또는 객체를 통해 Shapebar 구성
        shapebar: {
            width: 400 // 기본값은 300입니다
        }
    }
});
~~~

**관련 문서:** [Shapebar](guides/diagram_editor/shapebar.md#setting-the-width-of-shapebar)

**변경 로그:** v6.0에서 추가
