---
sidebar_label: afterItemCatch
title: Editor의 afterItemCatch 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 afterItemCatch 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 확인해 보세요. DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# afterItemCatch

### 설명 {#description}

@short: 항목이 캡처된 후 발생합니다

:::info
이 이벤트는 Diagram의 **조직도** 및 `mindmap` 모드에서만 작동하며, `itemsDraggable` 속성이 `true`로 설정되어 있어야 합니다.
:::

### 사용법 {#usage}

~~~jsx
"afterItemCatch": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => void;
~~~

### 매개변수 {#parameters}

이벤트 콜백은 다음 매개변수를 포함하는 객체와 함께 호출됩니다:

  - `id` - 이동된 항목의 id
  - `targetId` - 대상 항목의 id
  - `batch` - 이동된 요소들의 id 배열
  - `event` - 이벤트 객체

### 예제 {#example}

~~~jsx {6-11}
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");
// 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.events.on("afterItemCatch", ({ id, targetId }) => {
    console.log(`
        item ${id} is caught by the item ${targetId}
    `);
});
~~~

**변경 로그**:

- `batch` 매개변수는 v6.0에서 추가되었습니다
- 콜백 함수는 v6.0부터 매개변수로 객체를 받습니다
