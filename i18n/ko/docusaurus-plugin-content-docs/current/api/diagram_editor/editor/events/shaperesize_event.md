---
sidebar_label: shapeResize
title: 에디터의 shapeResize 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 shapeResize 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# shapeResize

### 설명 {#description}

@short: 도형 크기가 조정된 후 발생합니다

### 사용법 {#usage}

~~~jsx
"shapeResize": () => void;
~~~

:::info
내부 Diagram Editor 이벤트를 처리하려면 `on()` 메서드를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {6-9}
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");
// 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.events.on("shapeResize", () => {
    console.log("The shape has been resized");
});
~~~
