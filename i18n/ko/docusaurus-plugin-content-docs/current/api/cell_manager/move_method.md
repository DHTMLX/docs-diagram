---
sidebar_label: move()
title: Cell Manager의 move 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 move 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# move()

:::info
`move()` 메서드는 시스템에 의해 자동으로 검증됩니다. swimlane의 구조에 따라 이동이 불가능한 경우 셀은 이동되지 않습니다.
:::

### 설명 {#description}

@short: swimlane의 셀을 행 또는 열로 이동합니다

### 사용법 {#usage}

~~~jsx
move(
    cellIndex: number, 
    dir: string // "up" | "down" | "left" | "right"
): void;
~~~

### 매개변수 {#parameters}

- `cellIndex` - (필수) 레이아웃에서 셀의 시작 인덱스입니다. 인덱스는 0부터 시작합니다
- `dir` - (필수) 작업의 방향: `"up"` | `"down"` | `"left"` | `"right"`

### 예제 {#example}

~~~jsx
// 다이어그램 초기화
const diagram = new dhx.Diagram("diagram_container", {
    // 구성 옵션
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // 활성 swimlane 설정

diagram.cellManager.move(0, "down"); // 셀을 행으로 이동
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [Swimlane 구성](/swimlanes/)
