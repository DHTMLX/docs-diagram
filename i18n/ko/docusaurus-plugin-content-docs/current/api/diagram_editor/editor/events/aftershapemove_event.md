---
sidebar_label: afterShapeMove
title: Editor의 afterShapeMove 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editor의 afterShapeMove 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# afterShapeMove

### 설명 {#description}

@short: 도형이 그리드 한 칸만큼 이동할 때 발생합니다

:::note
선택한 요소의 개수와 상관없이 이벤트는 대상 요소에 대해서만 발생합니다. 드래그된 요소의 id는 콜백 함수의 `batch` 매개변수에 제공됩니다.
:::

### 사용법 {#usage}

~~~jsx
"afterShapeMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent,
}) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수가 포함된 객체와 함께 호출됩니다:

  - `id` - 도형의 id
  - `batch` - 이동된 요소들의 id 배열
  - `coords` - 이동 후 도형 위치의 `x` 및 `y` 좌표가 포함된 객체이며, 여기서:
    - `x` - 도형의 수평 위치(왼쪽에서 오른쪽으로 이동)
    - `y` - 도형의 수직 위치(위에서 아래로 이동)
  - `event` - 이벤트 객체

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
editor.events.on("afterShapeMove", ({ id, coords }) => {
    console.log(`
        Shape ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**변경 로그**:

- `batch` 매개변수는 v6.0에서 추가되었습니다.
- 콜백 함수는 v6.0부터 매개변수로 객체를 받습니다.
- `id` 및 `coords` 매개변수는 v4.0에서 추가되었습니다.
