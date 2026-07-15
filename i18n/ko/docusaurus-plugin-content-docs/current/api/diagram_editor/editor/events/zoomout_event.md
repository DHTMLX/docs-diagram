---
sidebar_label: zoomOut
title: 에디터의 zoomOut 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 zoomOut 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# zoomOut

### 설명 {#description}

@short: 축소 버튼을 클릭하거나 `zoomOut()` 메서드를 호출하면 발생합니다

### 사용법 {#usage}

~~~jsx
"zoomOut": (step) => void;
~~~

### 매개변수 {#parameters}

`zoomOut` 이벤트의 콜백은 다음 매개변수와 함께 호출됩니다:

- `step` - (필수) [`scale`](api/diagram_editor/editor/config/scale_property.md) 속성의 변경 단계를 나타내는 값입니다.

:::info
내부 Diagram Editor 이벤트를 처리하려면 `on()` 메서드를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {7-9}
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");
// 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.events.on("zoomOut", (step) => {
    console.log("The diagram in the editor is zoomed out");
});
~~~

**변경 로그**: `step` 매개변수는 v6.0에서 추가되었습니다
