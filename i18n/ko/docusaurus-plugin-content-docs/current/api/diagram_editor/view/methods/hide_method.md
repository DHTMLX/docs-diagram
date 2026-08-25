---
sidebar_label: hide()
title: View의 hide 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 view의 hide 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# hide()

### 설명 {#description}

@short: Diagram Editor의 Toolbar, Editbar, Shapebar view를 숨깁니다.

:::info
`Toolbar`, `Editbar`, `Shapebar` view를 개별적으로 숨기려면 해당 매개변수와 함께 `hide()` 메서드를 호출합니다. 이 요소를 모두 숨기려면 매개변수 없이 `hide()` 메서드를 호출합니다.
:::

### 사용법 {#usage}

~~~jsx
hide(view?: "toolbar" | "shapebar" | "editbar"): void;
~~~

### 매개변수 {#parameters}

- `toolbar` - (선택 사항) Toolbar를 숨깁니다
- `shapebar` - (선택 사항) Shapebar를 숨깁니다
- `editbar` - (선택 사항) Editbar를 숨깁니다

### 예제 {#example}

~~~jsx {5-6,8-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

// Shapebar view를 숨깁니다
editor.view.hide("shapebar");

// Shapebar, Editbar, Toolbar를 숨깁니다
editor.view.hide();
~~~

**변경 로그**: v6.0에서 추가
