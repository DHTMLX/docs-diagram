---
sidebar_label: scroll
title: scroll 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 scroll 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보세요.
---

# scroll

### 설명 {#description}

@short: 다이어그램이 스크롤될 때 발생합니다

### 사용법 {#usage}

~~~jsx
scroll: (position: object) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수를 받습니다:

- `position` - (필수) 스크롤 위치입니다. 이 객체는 현재 스크롤 위치의 x, y 좌표를 포함합니다. 예: `{x: 67, y: 130}`

### 예제 {#example}

~~~jsx {10-12}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    scroll: true
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("scroll", () => {
    console.log("The diagram has been scrolled")
});
~~~

**관련 문서**:

- [다이어그램 스크롤하기](guides/diagram/scrolling_diagram.md)
- [이벤트 처리](guides/event_handling.md)
