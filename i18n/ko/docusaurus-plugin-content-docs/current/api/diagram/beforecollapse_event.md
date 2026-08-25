---
sidebar_label: beforeCollapse
title: beforeCollapse 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 beforeCollapse 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# beforeCollapse

### 설명 {#description}

@short: 항목을 축소하기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
beforeCollapse: (
    id: string | number,
    dir?: string
) => boolean | void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수를 사용합니다:

- `id` - (필수) 항목의 id
- `dir` - (선택 사항) 부모 도형을 기준으로 하위 항목이 숨겨질 방향(*type:`"topic"`*의 경우 `"left"` 또는 `"right"`, 그 외에는 undefined)

### 반환값 {#returns}

항목의 축소를 차단하려면 `false`를 반환하고, 그렇지 않으면 `true`를 반환합니다

### 예제 {#example}

~~~jsx {9-12}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("beforeCollapse", (id, dir) => {
    console.log("Collapsing " + diagram.data.getItem(id).text, dir);
    return true;
});
~~~

**변경 로그**: `dir` 매개변수는 v3.1에서 추가되었습니다

**관련 문서**: [이벤트 처리](guides/event_handling.md)
