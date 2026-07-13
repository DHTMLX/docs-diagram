---
sidebar_label: beforeShow
title: View의 beforeShow 이벤트
description: DHTMLX JavaScript Diagram 라이브러리의 Diagram Editor 문서에서 View의 beforeShow 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# beforeShow

### 설명 {#description}

@short: Toolbar, Editbar 또는 Shapebar 뷰가 표시되기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
"beforeShow": (view: "toolbar" | "shapebar" | "editbar") => boolean | void;
~~~

### 매개변수 {#parameters}

`beforeShow` 이벤트의 콜백은 다음 매개변수와 함께 호출됩니다:

- `view` - (필수) 표시될 뷰입니다. 자세한 내용은 [`view`](api/diagram_editor/editor/config/view_property.md) 속성을 참조하십시오.

:::info
Diagram Editor의 내부 이벤트를 처리하려면 `on()` 메서드를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {9-12}
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: false
    }
});

// 이벤트에 핸들러 연결
editor.view.events.on("beforeShow", (view) => {
    console.log("The " + view + " view of Diagram Editor will be displayed");
});
~~~

**변경 로그**: v6.0에서 추가
