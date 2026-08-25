---
sidebar_label: afterLineTitleMove
title: Editor의 afterLineTitleMove 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 afterLineTitleMove 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# afterLineTitleMove

### 설명 {#description}

@short: 라인의 텍스트 요소가 그리드 한 칸만큼 이동했을 때 발생합니다.

### 사용법 {#usage}

~~~jsx
"afterLineTitleMove": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: object
}) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수가 포함된 객체와 함께 호출됩니다:

  - `event` - 이벤트 객체
  - `lineId` - 라인의 id
  - `titleId` - 라인의 텍스트 요소 id
  - `coords` - 이동 후 텍스트 요소 위치의 `x` 및 `y` 좌표가 포함된 객체이며, 여기서:
    - `x` - 왼쪽에서 오른쪽으로 이동하는 텍스트 요소의 수평 위치
    - `y` - 위에서 아래로 이동하는 텍스트 요소의 수직 위치

:::info
내부 Diagram Editor 이벤트를 처리하려면 `on()` 메서드를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {6-13}
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");
// 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.events.on("afterLineTitleMove", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**변경 로그**: v6.0부터 콜백 함수는 매개변수로 객체를 받습니다
