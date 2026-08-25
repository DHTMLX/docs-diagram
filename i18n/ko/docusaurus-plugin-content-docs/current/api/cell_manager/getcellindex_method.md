---
sidebar_label: getCellIndex()
title: Cell Manager의 getCellIndex 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 getCellIndex 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getCellIndex()

### 설명 {#description}

@short: id로 swimlane 셀의 인덱스를 반환합니다

### 사용법 {#usage}

~~~jsx
getCellIndex(
    cellId: string | number, 
    type: string // "row" | "col"
): number | undefined;
~~~

### 매개변수 {#parameters}

- `cellId` - (필수) 셀의 id
- `type` - (필수) 인덱스를 계산할 방향의 유형: `"row"` | `"col"`

### 반환값 {#returns}

이 메서드는 셀의 인덱스를 반환합니다. 인덱스는 0부터 시작합니다

### 예제 {#example}

~~~jsx
// 다이어그램 초기화
const diagram = new dhx.Diagram("diagram_container", {
    // 설정 옵션
});
diagram.data.parse(data);

// 활성 swimlane 설정
diagram.cellManager.setSwimlane("main"); 

// 셀의 인덱스 가져오기
diagram.cellManager.getCellIndex("r01", "row"); // -> 0
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [Swimlane 구성](/swimlanes/)
