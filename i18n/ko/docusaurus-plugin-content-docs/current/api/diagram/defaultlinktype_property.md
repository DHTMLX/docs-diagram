---
sidebar_label: defaultLinkType
title: defaultLinkType 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 defaultLinkType 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# defaultLinkType

### 설명 {#description}

@short: 선택 사항입니다. 커넥터 라인의 기본 유형입니다

라인 객체에 `"type"` 속성이 없으면 이 값이 적용됩니다

### 사용법 {#usage}

~~~jsx
defaultLinkType?: "line" | "dash";
~~~

### 기본 설정 {#default-config}

~~~jsx
defaultLinkType: "line"
~~~

### 예제 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    defaultLinkType: "dash"
});
~~~

**관련 문서**: [도형 간 연결 설정](/lines/#setting-connections-between-shapes)
