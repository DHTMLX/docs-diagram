---
sidebar_label: itemMoveEnd
title: Editor의 itemMoveEnd 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 itemMoveEnd 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# itemMoveEnd

### 설명 {#description}

@short: 항목이 이동된 후에 발생합니다

:::note
이 이벤트는 `line` 객체에서는 작동하지 않습니다.

선택된 요소의 개수와 관계없이 이 이벤트는 대상 요소에 대해서만 발생합니다. 드래그된 요소의 id는 콜백 함수의 `batch` 매개변수에 제공됩니다.
:::

### 사용법 {#usage}

~~~jsx
"itemMoveEnd": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### 매개변수 {#parameters}

이 이벤트의 콜백은 다음 매개변수를 포함하는 객체와 함께 호출됩니다:

  - `id` - 항목의 id
  - `batch` - 이동된 요소들의 id 배열
  - `coords` - 이동 후 항목 위치의 `x` 및 `y` 좌표를 포함하는 객체이며, 다음과 같습니다:
    - `x` - 항목의 가로 위치(왼쪽에서 오른쪽으로 이동)
    - `y` - 항목의 세로 위치(위에서 아래로 이동)
  - `event` - 이벤트 객체

### 예제 {#example}

~~~jsx {6-13}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("itemMoveEnd", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**변경 로그**:

- `batch` 매개변수는 v6.0에서 추가되었습니다
- 콜백 함수는 v6.0부터 매개변수로 객체를 받습니다

**관련 API**:

- [`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md)
- [`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md)

**관련 샘플**:

- [Diagram Editor. 이벤트를 통한 도형의 이동, 회전, 크기 조정 관리](https://snippet.dhtmlx.com/qldjbbm7)
