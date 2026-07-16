---
sidebar_label: beforeItemRotate
title: Editor의 beforeItemRotate 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 beforeItemRotate 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# beforeItemRotate

### 설명 {#description}

@short: 항목이 회전되기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
"beforeItemRotate": ({
    id: string | number,
    angle: number
}) => boolean | void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수가 있는 객체와 함께 호출됩니다:

- `id` - 회전되는 항목의 id
- `angle` - 항목의 새로운 회전 각도(도 단위)

### 반환값 {#returns}

콜백은 항목이 회전되지 않도록 하려면 `false`를 반환하고, 그렇지 않으면 `true`를 반환합니다.

### 예제 {#example}

~~~jsx
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");
// 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.events.on("beforeItemRotate", ({ id, angle }) => {
    if (angle > 90 && angle < 270) {
        console.log(`Preventing rotation of the item ${id} by this angle.`);
        return false; // Prevent rotation
    }
    console.log(`Rotating the item ${id} by the angle: ${angle}`);
});
~~~

**변경 로그**:

- 이 이벤트는 v6.1에서 추가되었습니다

**관련 API**:

- [`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md)
- [`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

**관련 샘플**:

- [Diagram Editor. 이벤트를 통한 도형의 이동, 회전, 크기 조정 관리](https://snippet.dhtmlx.com/qldjbbm7)