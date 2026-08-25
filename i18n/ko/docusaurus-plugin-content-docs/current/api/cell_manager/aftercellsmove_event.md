---
sidebar_label: afterCellsMove
title: Cell Manager의 afterCellsMove 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 afterCellsMove 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# afterCellsMove

### 설명 {#description}

@short: Swimlane의 셀이 이동된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterCellsMove: (swimlaneId: string | number) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수를 받습니다:

- `swimlaneId` - (필수) 항목의 id입니다

### 예제 {#example}

~~~jsx {9-11}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("afterCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

**Change log**: v4.0에서 추가

**Related article**: [Swimlane 구성](/swimlanes/)
