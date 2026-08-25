---
sidebar_label: paste()
title: Copy Manager의 paste 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 copy manager의 paste 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# paste()

### 설명 {#description}

@short: "copy()" 메서드로 전달된 요소와 동일한 새 요소를 생성합니다

:::note
`paste()` 메서드는 Diagram Editor가 `default` 모드로 초기화된 경우에만 작동합니다.
:::

### 사용법 {#usage}

~~~jsx
paste(): void;
~~~

### 예제 {#example}

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // default 전용
});
// ...
editor.model.copy(); // 선택한 항목을 복사합니다
editor.model.paste() // 새 항목을 붙여넣습니다
~~~

**변경 로그**: v6.0에서 추가
