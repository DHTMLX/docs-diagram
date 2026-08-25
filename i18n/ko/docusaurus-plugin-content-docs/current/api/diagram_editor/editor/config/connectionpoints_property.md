---
sidebar_label: connectionPoints
title: Editor의 connectionPoints 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editor의 connectionPoints 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# connectionPoints

### 설명 {#description}

@short: 선택 사항입니다. 연결 컨트롤을 사용하여 도형을 연결하는 기능을 활성화/비활성화합니다.

:::info
`connectionPoints` 속성은 `default` 모드에서만 작동합니다.
:::

### 사용법 {#usage}

~~~jsx
connectionPoints?: boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx
connectionPoints: true
~~~

### 예제 {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "default"만 가능
    connectionPoints: false, // 기본값은 true
    // 기타 설정
});
~~~

**변경 로그:** v6.0에서 추가
