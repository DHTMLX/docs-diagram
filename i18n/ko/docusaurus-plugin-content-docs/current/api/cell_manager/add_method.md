---
sidebar_label: add()
title: Cell Manager의 add 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 add 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# add()

:::info
`add()` 메서드는 시스템에 의해 자동으로 검증됩니다. Swimlane의 구조상 불가능한 경우 셀이 추가되지 않습니다.
:::

### 설명 {#description}

@short: Swimlane에 행이나 열로 셀을 추가합니다

### 사용법 {#usage}

~~~jsx
add(
    cellIndex: number, 
    dir: string // "up" | "down" | "left" | "right"
): void;
~~~

### 매개변수 {#parameters}

- `cellIndex` - (필수) 레이아웃에서 셀의 시작 인덱스입니다. 인덱스는 0부터 시작합니다
- `dir` - (필수) 작업의 방향입니다: `"up"` | `"down"` | `"left"` | `"right"`

### 예제 {#example}

~~~jsx
// 다이어그램 초기화
const diagram = new dhx.Diagram("diagram_container", {
    // 구성 옵션
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // 활성 Swimlane 설정

diagram.cellManager.add(0, "down"); // 셀을 행으로 추가
~~~

**Change log**: v4.0에서 추가

**Related article**: [Swimlane 구성](/swimlanes/)
