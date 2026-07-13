---
sidebar_label: show
title: Shapebar의 show 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Shapebar의 show 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# show

### 설명 {#description}

@short: 선택 사항입니다. Diagram Editor 초기화 시 사용자 지정 설정이 적용된 shapebar가 표시되는지 여부를 정의합니다.

### 사용법 {#usage}

~~~jsx
show?: boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx
show: true
~~~

### 예제 {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 기본 Shapebar를 표시합니다
        // 또는 객체를 통해 Shapebar 구성
        shapebar: {
            show: false // 기본값은 true입니다
        }
    }
});
~~~

**관련 문서:** [Shapebar](guides/diagram_editor/shapebar.md#showinghiding-the-shapebar)

**변경 로그:** v6.0에서 추가
