---
sidebar_label: pasteStyles()
title: Copy Manager의 pasteStyles 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 copy manager의 pasteStyles 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# pasteStyles()

### 설명 {#description}

@short: 복사된 스타일을 선택된 요소 목록 또는 id로 지정된 요소에 적용합니다

### 사용법 {#usage}

~~~jsx
pasteStyles(ids?: (string | number)[]): void;
~~~

### 매개변수 {#parameters}

- `ids` - (선택 사항) 복사된 스타일을 적용할 요소의 id 배열

### 예제 {#example}

- 인수 없이 메서드를 호출하여 선택 목록의 요소에 스타일을 적용합니다

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.model.copyStyles(); // 선택 목록의 첫 번째 요소 스타일을 복사합니다
editor.model.pasteStyles(); // 선택 목록의 요소에 복사된 스타일을 적용합니다
~~~

- 특정 요소의 id를 메서드에 전달하여 해당 요소에 복사된 스타일을 적용합니다

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.model.copyStyles("2"); // 지정된 요소의 스타일을 복사합니다
editor.model.pasteStyles(["1", "2", "3"]); // 지정된 요소에 복사된 스타일을 적용합니다
~~~

**변경 로그**: v6.0에서 추가
