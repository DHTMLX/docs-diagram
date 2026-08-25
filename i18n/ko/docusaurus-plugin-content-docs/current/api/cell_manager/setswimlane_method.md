---
sidebar_label: setSwimlane()
title: Cell Manager의 setSwimlane 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Cell Manager의 setSwimlane 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# setSwimlane()

### 설명 {#description}

@short: 이후 작업을 위해 활성 swimlane을 설정합니다

### 사용법 {#usage}

~~~jsx
setSwimlane(id: string | number): boolean;
~~~

### 매개변수 {#parameters}

- `id` - (필수) swimlane의 id

### 반환값 {#returns}

메서드는 swimlane이 설정되면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

### 예제 {#example}

~~~jsx
// 다이어그램 초기화
const diagram = new dhx.Diagram("diagram_container", {
    // 구성 옵션
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // 활성 swimlane 설정
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [Swimlane 구성](/swimlanes/)
