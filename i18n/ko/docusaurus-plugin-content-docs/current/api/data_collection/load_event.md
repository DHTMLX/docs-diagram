---
sidebar_label: load
title: Data Collection의 load 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 load 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# load

### 설명 {#description}

@short: 다이어그램에 데이터가 로드될 때 발생합니다

### 사용법 {#usage}

~~~jsx
load: () => void;
~~~

### 예제 {#example}

~~~jsx {9-11}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("load", () => {
    // 여기에 로직 작성
});
~~~
