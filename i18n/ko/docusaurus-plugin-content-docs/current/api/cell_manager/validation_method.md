---
sidebar_label: validation()
title: Cell Manager의 validation 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 validation 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# validation()

### 설명 {#description}

@short: 방향 및 작업 유형에 따라 swimlane의 셀을 검증합니다

### 사용법 {#usage}

~~~jsx
validation(
    cellIndex: number, 
    dir: string, // "up" | "down" | "left" | "right"
    action: string // "move" | "remove" | "add"
): boolean;
~~~

### 매개변수 {#parameters}

- `cellIndex` - (필수) 레이아웃에서 셀의 시작 인덱스입니다. 인덱스는 0부터 시작합니다
- `dir` - (필수) 작업의 방향: `"up"` | `"down"` | `"left"` | `"right"`
- `action` - (필수) 작업의 유형: `"move"` | `"remove"` | `"add"`

### 반환값 {#returns}

메서드는 셀이 검증되면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다

### 예제 {#example}

~~~jsx
// 다이어그램 초기화
const diagram = new dhx.Diagram("diagram_container", {
    // 구성 옵션
});
diagram.data.parse(data);

// 활성 swimlane 설정
diagram.cellManager.setSwimlane("main");

// 인덱스 0인 셀을 아래로 이동할 수 있는지 검증
diagram.cellManager.validation(0, "down", "move"); // -> true
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [Swimlane 구성](/swimlanes/)
