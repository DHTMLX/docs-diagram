---
sidebar_label: copy()
title: Copy Manager의 copy 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 copy manager의 copy 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# copy()

### 설명 {#description}

@short: 선택한 요소 또는 id로 지정된 요소를 복사합니다

:::note
`copy()` 메서드는 Diagram Editor가 `default` 모드로 초기화된 경우에만 작동합니다.
:::

### 사용법 {#usage}

~~~jsx
copy(ids?: (string | number)[]): void;
~~~

### 매개변수 {#parameters}

- `ids` - (선택 사항) 복사할 요소의 id 배열(목록)

### 예제 {#example}

- 인수 없이 메서드를 호출하여 선택 목록의 요소를 복사합니다

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // default 전용
});
// ...
editor.model.copy(); // 선택한 항목을 복사합니다
~~~

- 메서드에 일부 id를 전달하여 해당 요소를 복사합니다

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // default 전용
});
// ...
editor.model.copy(["1", "2"]); // 지정된 항목을 복사합니다
~~~

**변경 로그**: v6.0에서 추가
