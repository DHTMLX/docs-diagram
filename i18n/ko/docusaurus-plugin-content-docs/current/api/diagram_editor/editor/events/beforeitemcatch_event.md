---
sidebar_label: beforeItemCatch
title: Editor의 beforeItemCatch 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editor의 beforeItemCatch 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# beforeItemCatch

### 설명 {#description}

@short: 항목이 캐치되기 전에 발생합니다

:::info
이 이벤트는 Diagram의 **org chart** 및 `mindmap` 모드에서만 작동하며, `itemsDraggable` 속성이 `true`로 설정되어 있어야 합니다.
:::

### 사용법 {#usage}

~~~jsx
"beforeItemCatch": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => boolean | void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수가 포함된 객체와 함께 호출됩니다:

  - `id` - 이동된 항목의 id
  - `targetId` - 대상 항목의 id
  - `batch` - 이동된 요소들의 id 배열
  - `event` - 이벤트 객체

### 반환값 {#returns}

콜백은 항목이 캐치되지 않도록 하려면 `false`를 반환하고, 그렇지 않으면 `true`를 반환합니다

:::info
내부 Diagram Editor 이벤트를 처리하려면 `on()` 메서드를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {6-20}
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");
// 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.events.on("beforeItemCatch", ({ id, targetId }) => {
  if (targetId === "2.1"){
    console.log(`
      Item ${id} won't be be caught by the item "2.1"
    `);
    return false;
  }
  else{
    console.log(`
      Item ${id} will be caught by the item ${targetId}
    `);
    return true;
  }
});
~~~

**변경 로그**:

- `batch` 매개변수는 v6.0에서 추가되었습니다.
- 콜백 함수는 v6.0부터 매개변수로 객체를 받습니다.
