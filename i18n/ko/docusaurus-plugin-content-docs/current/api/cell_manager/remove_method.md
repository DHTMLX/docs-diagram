---
sidebar_label: remove()
title: Cell Manager의 remove 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 remove 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# remove()

:::info
`remove()` 메서드는 시스템에 의해 자동으로 검증됩니다. swimlane의 구조에 따라 제거가 불가능한 경우 셀은 제거되지 않습니다.
:::

### 설명 {#description}

@short: swimlane의 셀을 행 또는 열로 제거합니다

### 사용법 {#usage}

~~~jsx
remove(
    cellIndex: number, 
    type: string // "row" | "col"
): void;
~~~

### 매개변수 {#parameters}

- `cellIndex` - (필수) 레이아웃에서 셀의 시작 인덱스입니다. 인덱스는 0부터 시작합니다
- `type` - (필수) 인덱스를 계산할 방향의 유형

### 예제 {#example}

~~~jsx
// 다이어그램 초기화
const diagram = new dhx.Diagram("diagram_container", {
    // 구성 옵션
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // 활성 swimlane 설정

diagram.cellManager.remove(0, "row"); // 셀을 행으로 제거
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [Swimlane 구성](/swimlanes/)
