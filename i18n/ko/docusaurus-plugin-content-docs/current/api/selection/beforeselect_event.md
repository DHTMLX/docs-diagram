---
sidebar_label: beforeSelect
title: Selection의 beforeSelect 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 beforeSelect 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# beforeSelect

### 설명 {#description}

@short: 항목을 선택할 때, 실제로 선택되기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
"beforeSelect": ({
    id: string | number,
    join: boolean,
    batch: (string | number)[]
}) => boolean | void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수를 가진 객체와 함께 호출됩니다:

- `id` - 선택할 항목의 id
- `join` - 적용된 [selection 모드](api/selection/add_method.md#parameters)
- `batch` - 선택할 항목의 목록

### 반환값 {#returns}

항목이 선택되지 않도록 하려면 `false`를 반환하고, 그렇지 않으면 `true`를 반환합니다

### 예제 {#example}

~~~jsx {9-13}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("beforeSelect", ({ id }) => {
    console.log(id + " will be selected");
    return true;
});
~~~

다음은 Diagram Editor에 대한 이벤트에 이벤트 핸들러를 연결하는 예제입니다:

~~~jsx {8-12}
// Diagram 에디터 초기화
const editor = new dhx.DiagramEditor("editor_container", {
    // 설정 옵션
});
// 에디터에 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.diagram.events.on("beforeSelect", ({ id }) => {
    console.log(id + " will be selected");
    return true;
});
~~~

**변경 로그**: v6.0에서 업데이트

**관련 문서**:

- [diagram.config.select](api/diagram/select_property.md)
- [항목 선택](guides/manipulating_items.md#selecting-items)
