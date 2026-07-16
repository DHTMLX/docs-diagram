---
sidebar_label: lineTitleMoveEnd
title: Editor의 lineTitleMoveEnd 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 lineTitleMoveEnd 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# lineTitleMoveEnd

### 설명 {#description}

@short: 라인의 텍스트 요소가 이동된 후에 발생합니다

### 사용법 {#usage}

~~~jsx
"lineTitleMoveEnd": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: obj
}) => void;
~~~

### 매개변수 {#parameters}

이 이벤트의 콜백은 다음 매개변수를 포함하는 객체와 함께 호출됩니다:

  - `event` - 이벤트 객체
  - `lineId` - 라인의 id
  - `titleId` - 라인의 텍스트 요소의 id
  - `coords` - 이동 후 텍스트 요소 위치의 `x` 및 `y` 좌표를 포함하는 객체이며, 다음과 같습니다:
    - `x` - 텍스트 요소의 가로 위치(왼쪽에서 오른쪽으로 이동)
    - `y` - 텍스트 요소의 세로 위치(위에서 아래로 이동)

:::info
내부 Diagram Editor 이벤트를 처리하려면 `on()` 메서드를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {6-13}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("lineTitleMoveEnd", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**변경 로그**: 콜백 함수는 v6.0부터 매개변수로 객체를 받습니다
