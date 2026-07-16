---
sidebar_label: itemTarget
title: Editor의 itemTarget 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 itemTarget 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# itemTarget

### 설명 {#description}

@short: 이동된 항목이 대상 항목 위에서 호버될 때 발생합니다

:::info
이 이벤트는 Diagram의 **org chart** 및 `mindmap` 모드에서만 작동하며, `itemsDraggable` 속성이 `true`로 설정되어 있어야 합니다.

이 이벤트는 *이동된 항목의 부모 항목*과 *`giveItem: false` 속성을 가진 이동된 항목*에는 작동하지 않습니다.
:::

### 사용법 {#usage}

~~~jsx
"itemTarget": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => boolean | void;
~~~

### 매개변수 {#parameters}

이 이벤트의 콜백은 다음 매개변수를 포함하는 객체와 함께 호출됩니다:

  - `id` - 이동된 항목의 id
  - `targetId` - 대상 항목의 id
  - `batch` - 이동된 요소들의 id 배열
  - `event` - 이벤트 객체

### 반환값 {#returns}

콜백은 항목이 대상 항목 위에서 호버되는 것을 방지하려면 `false`를 반환하고, 그렇지 않으면 `true`를 반환합니다

:::info
내부 Diagram Editor 이벤트를 처리하려면 `on()` 메서드를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {6-11}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// loading data
editor.parse(data);

// attaching a handler to the event
editor.events.on("itemTarget", ({ id, targetId }) => {
    console.log(`
          Item ${id} is hovering over the item ${targetId}
      `);
});
~~~

**변경 로그**:

- `batch` 매개변수는 v6.0에서 추가되었습니다
- 콜백 함수는 v6.0부터 매개변수로 객체를 받습니다
