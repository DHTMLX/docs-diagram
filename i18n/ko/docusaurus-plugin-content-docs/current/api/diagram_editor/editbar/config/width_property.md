---
sidebar_label: width
title: Editbar의 width 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 width 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# width

### 설명 {#description}

@short: 선택 사항입니다. Editbar의 너비를 정의합니다.

### 사용법 {#usage}

~~~jsx
width?: number;
~~~

### 예제 {#example}

~~~jsx {9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // 기본 Editbar 표시
        // 또는 객체를 통해 Editbar 구성
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            controls: {...},
            properties: {...}
        }
    }
});
~~~

**변경 로그:** v6.0에서 추가
