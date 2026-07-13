---
sidebar_label: beforeCellsAdd
title: Cell Manager의 beforeCellsAdd 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 beforeCellsAdd 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# beforeCellsAdd

### 설명 {#description}

@short: 새로운 셀이 swimlane에 추가되기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
beforeCellsAdd: (swimlaneId: string | number) => boolean | void;
~~~

### 매개변수 {#parameters}

이 이벤트의 콜백은 다음 매개변수를 받습니다:

- `swimlaneId` - (필수) 항목의 ID

### 반환값 {#returns}

새로운 셀 추가를 방지하려면 `false`를 반환하고, 그렇지 않으면 `true`를 반환합니다

### 예제 {#example}

~~~jsx {9-12}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("beforeCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [Swimlane 구성](/swimlanes/)
