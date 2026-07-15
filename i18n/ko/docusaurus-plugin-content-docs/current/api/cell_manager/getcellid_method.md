---
sidebar_label: getCellId()
title: Cell Manager의 getCellId 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 getCellId 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# getCellId()

### 설명 {#description}

@short: 인덱스로 swimlane의 셀 ID를 반환합니다

### 사용법 {#usage}

~~~jsx
getCellId(
    cellIndex: number, 
    type: string // "row" | "col"
): string | number | undefined;
~~~

### 매개변수 {#parameters}

- `cellIndex` - (필수) 레이아웃에서 셀의 시작 인덱스입니다. 인덱스는 0부터 시작합니다
- `type` - (필수) 인덱스를 계산할 방향의 유형: `"row"` | `"col"`

### 반환값 {#returns}

이 메서드는 셀의 ID를 반환합니다

### 예제 {#example}

~~~jsx
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    // 구성 옵션
});
diagram.data.parse(data);

// 활성 swimlane 설정
diagram.cellManager.setSwimlane("main"); 

// 셀의 ID 가져오기
diagram.cellManager.getCellId(0, "row"); // -> "r01"
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [Swimlane 구성](/swimlanes/)
