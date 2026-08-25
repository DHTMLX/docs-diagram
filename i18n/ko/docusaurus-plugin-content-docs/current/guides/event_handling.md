---
sidebar_label: 이벤트 처리
title: 이벤트 처리
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 이벤트 처리에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 이벤트 처리

## 이벤트 리스너 연결 {#attaching-event-listeners}

사용 가능한 모든 이벤트에 사용자 정의 핸들러를 추가할 수 있습니다. 이를 위해 다음 매개변수와 함께 `diagram.events.on()` 메서드를 사용하세요.

- `name` - (*string*) 이벤트의 이름
- `handler` - (*function*) 핸들러 함수

~~~jsx
diagram.events.on("ShapeClick", (id) => {
    alert("You've just clicked an item with id="+id);
});
~~~

동일한 이벤트에 여러 핸들러를 연결할 수 있으며, 연결된 모든 핸들러가 실행됩니다. 일부 핸들러가 *false*를 반환하면 관련 작업이 차단됩니다. 이벤트 핸들러는 연결된 순서대로 처리됩니다.

## 이벤트 리스너 분리 {#detaching-event-listeners}

이벤트를 분리하려면 `diagram.events.detach()` 메서드를 사용하세요.

~~~jsx
diagram.events.on("CustomEvent", args);

diagram.events.detach("CustomEvent");
~~~

## 이벤트 호출 {#calling-events}

이벤트를 호출하려면 `diagram.events.fire()` 메서드를 사용하세요.

~~~jsx
diagram.events.fire("CustomEvent", args);
// args는 인수의 배열입니다
~~~

일반적으로 이벤트는 자동으로 호출되므로 이 메서드를 사용할 필요가 없습니다.

## 지원되는 이벤트 목록 {#list-of-supported-events}

### Diagram 이벤트 {#diagram-events}

[API 참조](api/diagram/api_overview.md#diagram-events)에서 Diagram API 이벤트의 전체 목록을 확인하세요.

### 에디터 이벤트 {#editor-events}

Diagram Editor API 이벤트 목록은 [API 섹션](api/diagram_editor/editor/events/overview.md)에서 확인할 수 있습니다.

:::note
Diagram Editor의 이벤트 외에도, 에디터 화면에서 작업하는 동안 [Diagram 객체의 이벤트](api/diagram/api_overview.md#diagram-events)를 적용할 수도 있습니다. 예를 들면 다음과 같습니다.
:::

~~~jsx {6-8}
const editor = new dhx.DiagramEditor("editor_container", {
    controls: { autoLayout: false }
});
editor.parse(data);

editor.diagram.events.on("ShapeClick", (id) => {
    alert("You've just clicked an item with id=" + id);
});
~~~

아래 나열된 이벤트를 적용해야 하는 경우에도 이 방법을 사용할 수 있습니다.

### CellManager 이벤트 {#cellmanager-events}

[API 참조](/api/cell_manager/#events)에서 CellManager API 이벤트의 전체 목록을 확인하세요.

### DataCollection 이벤트 {#datacollection-events}

[API 참조](/api/data_collection/#events)에서 DataCollection API 이벤트의 전체 목록을 확인하세요.

### InlineEditor 이벤트 {#inlineeditor-events}

[API 참조](/api/inline_editor/#events)에서 InlineEditor API 이벤트의 전체 목록을 확인하세요.

### Selection 이벤트 {#selection-events}

[API 참조](/api/selection/#events)에서 Selection API 이벤트의 전체 목록을 확인하세요.
