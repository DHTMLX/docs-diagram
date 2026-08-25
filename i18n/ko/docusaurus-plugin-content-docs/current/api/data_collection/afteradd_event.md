---
sidebar_label: afterAdd
title: Data Collection의 afterAdd 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 afterAdd 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# afterAdd

### 설명 {#description}

@short: 항목을 추가한 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterAdd: (newItem: object) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수를 받습니다:

- `newItem` - (필수) 추가된 항목의 객체

### 예제 {#example}

~~~jsx {9-11}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("afterAdd", (newItem) => {
    console.log("A new item is added");
});
~~~

이 이벤트는 항목 데이터에 대한 기본값 또는 기본 형식을 제공하는 데 사용할 수 있습니다
