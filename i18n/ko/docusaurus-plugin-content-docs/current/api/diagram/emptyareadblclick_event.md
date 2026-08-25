---
sidebar_label: emptyAreaDblClick
title: emptyAreaDblClick 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 emptyAreaDblClick 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# emptyAreaDblClick

### 설명 {#description}

@short: 현재 다이어그램 영역의 빈 공간을 더블클릭하면 발생합니다

### 사용법 {#usage}

~~~jsx
emptyAreaDblClick: (event: MouseEvent) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수를 받습니다:

- `event` - (필수) 네이티브 HTML 이벤트 객체

### 예제 {#example}

~~~jsx {9-11}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("emptyAreaDblClick", (e) => {
    console.log("emptyAreaDblClick");
});
~~~

**변경 로그**: v4.1에서 추가

**관련 문서**: [이벤트 처리](guides/event_handling.md)
