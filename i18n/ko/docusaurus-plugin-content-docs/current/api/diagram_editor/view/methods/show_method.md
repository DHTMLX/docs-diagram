---
sidebar_label: show()
title: View의 show 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 view의 show 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# show()

### 설명 {#description}

@short: Diagram Editor의 Toolbar, Editbar, Shapebar view를 표시합니다

:::info
`Toolbar`, `Editbar`, `Shapebar` view를 개별적으로 표시하려면 해당 매개변수와 함께 `show()` 메서드를 호출합니다. 이 요소를 모두 표시하려면 매개변수 없이 `show()` 메서드를 호출합니다.
:::

### 사용법 {#usage}

~~~jsx
show(view?: "toolbar" | "shapebar" | "editbar"): void;
~~~

### 매개변수 {#parameters}

- `toolbar` - (선택 사항) Toolbar를 표시합니다
- `shapebar` - (선택 사항) Shapebar를 표시합니다
- `editbar` - (선택 사항) Editbar를 표시합니다

### 예제 {#example}

~~~jsx {5-6,8-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

// Shapebar view를 표시합니다
editor.view.show("shapebar");

// Shapebar, Editbar, Toolbar를 표시합니다
editor.view.show();
~~~

**변경 로그**: v6.0에서 추가
