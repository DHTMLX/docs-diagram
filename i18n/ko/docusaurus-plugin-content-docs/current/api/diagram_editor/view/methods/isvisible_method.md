---
sidebar_label: isVisible()
title: View의 isVisible 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 view의 isVisible 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# isVisible()

### 설명 {#description}

@short: Diagram Editor의 Toolbar, Editbar, Shapebar view가 표시되는지 확인합니다.

### 사용법 {#usage}

~~~jsx
isVisible(view: "toolbar" | "shapebar" | "editbar"): boolean;
~~~

### 매개변수 {#parameters}

- `toolbar` - (필수) Toolbar가 표시되는지 확인합니다
- `shapebar` - (필수) Shapebar가 표시되는지 확인합니다
- `editbar` - (필수) Editbar가 표시되는지 확인합니다

### 예제 {#example}

~~~jsx {9-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: false,
        toolbar: true
    }
});

// Toolbar와 Shapebar의 가시성을 확인합니다
editor.view.isVisible("shapebar"); // false 반환
editor.view.isVisible("toolbar"); // true 반환
~~~

**변경 로그**: v6.0에서 추가
