---
sidebar_label: getSubHeaderCellIndex()
title: Cell Manager의 getSubHeaderCellIndex 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 getSubHeaderCellIndex 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getSubHeaderCellIndex()

### 설명 {#description}

@short: 서브헤더 id로 swimlane 셀의 인덱스를 반환합니다

### 사용법 {#usage}

~~~jsx
getSubHeaderCellIndex(subheaderId: string): number;
~~~

### 매개변수 {#parameters}

- `subheaderId` - (필수) swimlane 서브헤더의 id

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
diagram.cellManager.getSubHeaderCellIndex("sub01"); // -> 0
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [Swimlane 구성](/swimlanes/)
