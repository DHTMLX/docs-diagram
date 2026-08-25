---
sidebar_label: copyStyles()
title: Copy Manager의 copyStyles 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 copy manager의 copyStyles 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# copyStyles()

### 설명 {#description}

@short: 지정된 요소 또는 선택 목록의 첫 번째 요소의 스타일을 복사합니다

### 사용법 {#usage}

~~~jsx
copyStyles(id?: string | number): void;
~~~

### 매개변수 {#parameters}

- `id`- (선택 사항) 스타일 복사를 위해 선택된 요소의 id

### 예제 {#example}

-  인수 없이 메서드를 호출하여 *선택 목록의 첫 번째 요소*의 스타일을 복사합니다

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
});
// ...
editor.model.copyStyles(); // 선택 목록의 첫 번째 요소 스타일을 복사합니다
~~~

- 메서드에 일부 요소의 id를 전달하여 해당 요소의 스타일을 복사합니다

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
});
// ...
editor.model.copyStyles("1"); // 지정된 요소의 스타일을 복사합니다
~~~

**변경 로그**: v6.0에서 추가
