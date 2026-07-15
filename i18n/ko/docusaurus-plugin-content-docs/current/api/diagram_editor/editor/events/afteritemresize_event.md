---
sidebar_label: afterItemResize
title: Editor의 afterItemResize 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 afterItemResize 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# afterItemResize

### 설명 {#description}

@short: 항목의 크기가 변경된 후 발생합니다.

### 사용법 {#usage}

~~~jsx
"afterItemResize": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수가 포함된 객체와 함께 호출됩니다:

- `id` - 크기가 조정된 항목의 id
- `width` - 항목의 새 너비
- `height` - 항목의 새 높이
- `x` - 항목의 새 X좌표
- `y` - 항목의 새 Y좌표
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
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");
// 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.events.on("afterItemResize", ({ id, width, height }) => {
    console.log(`
        The item ${id} has been resized:
            width: ${width}
            height: ${height}
    `);
});
~~~

**변경 로그**:

- 이 이벤트는 v6.1에서 추가되었습니다

**관련 API**:

- [`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md)
- [`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md)

**관련 샘플**:

- [Diagram Editor. 이벤트를 통한 도형 이동, 회전 및 크기 조정 관리](https://snippet.dhtmlx.com/qldjbbm7)