---
sidebar_label: add()
title: HistoryManager의 add 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 HistoryManager의 add 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# add()

### 설명 {#description}

@short: 새로운 상태를 추가합니다

:::info
새로운 상태 추가는 자동으로 이루어집니다. 따라서 이 메서드는 수동 사용에는 권장되지 않습니다.
:::

### 사용법 {#usage}

~~~jsx
add(newState: array): void;
~~~

### 매개변수 {#parameters}

- `newState` - (필수) 다이어그램의 현재 상태에 대한 JSON 객체 배열

### 예제 {#example}

~~~jsx {5-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.add([
    { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
    { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call the client" },
    { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" }
]);
~~~

**변경 로그**: v4.1에서 추가
