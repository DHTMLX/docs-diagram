---
sidebar_label: resetSwimlane()
title: Cell Manager의 resetSwimlane 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 resetSwimlane 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# resetSwimlane()

### 설명 {#description}

@short: 활성 swimlane을 재설정합니다

### 사용법 {#usage}

~~~jsx
resetSwimlane(): void;
~~~

### 예제 {#example}

~~~jsx
// 다이어그램 초기화
const diagram = new dhx.Diagram("diagram_container", {
    // 구성 옵션
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // 활성 swimlane 설정

// swimlane에 대한 작업 수행

diagram.cellManager.resetSwimlane(); // 활성 swimlane 재설정
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [Swimlane 구성](/swimlanes/)
