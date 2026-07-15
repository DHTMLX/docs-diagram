---
sidebar_label: itemResizeEnd
title: Editor의 itemResizeEnd 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 itemResizeEnd 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# itemResizeEnd

### 설명 {#description}

@short: 항목의 크기 조정 작업이 완료된 후(사용자가 마우스 버튼을 놓을 때) 발생합니다

### 사용법 {#usage}

~~~jsx
"itemResizeEnd": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => void;
~~~

### 매개변수 {#parameters}

이 이벤트의 콜백은 다음 매개변수를 포함하는 객체와 함께 호출됩니다:

- `id` - 크기가 조정된 항목의 id
- `width` - 항목의 최종 너비
- `height` - 항목의 최종 높이
- `x` - 항목의 최종 X 좌표
- `y` - 항목의 최종 Y 좌표
- `dir` - 크기 조정 작업의 방향:
	- `"n"` - 북쪽
    - `"ne"` - 북동쪽
    - `"e"` - 동쪽
    - `"se"` - 남동쪽
    - `"s"` - 남쪽
    - `"sw"` - 남서쪽
    - `"w"` - 서쪽
    - `"nw"` - 북서쪽


### 예제 {#example}

~~~jsx
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("itemResizeEnd", ({ id, width, height }) => {
    console.log(`
        The item ${id} finished resizing:
            the final width: ${width}
            the final height: ${height}
    `);
    // Here you can save the new dimensions of the item on the server
});
~~~

**변경 로그**:

- 이 이벤트는 v6.1에서 추가되었습니다

**관련 API**:

- [`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md)
- [`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md)

**관련 샘플**:

- [Diagram Editor. 이벤트를 통한 도형의 이동, 회전, 크기 조정 관리](https://snippet.dhtmlx.com/qldjbbm7)