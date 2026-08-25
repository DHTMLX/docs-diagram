---
sidebar_label: navigationType
title: Toolbar의 navigationType 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Toolbar의 css 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# navigationType

### 설명 {#description}

@short: 선택 사항. 메뉴 옵션을 여는 작업을 설정합니다.

### 사용법 {#usage}

~~~jsx
navigationType?: "click" | "pointer";
~~~

:::info
- `"click"` - 사용자가 클릭하면 메뉴를 표시합니다
- `"pointer"` - 사용자가 마우스 포인터를 위에 올리면 메뉴를 표시합니다
:::

### 기본 설정 {#default-config}

~~~jsx
navigationType: "click"
~~~

### 예제 {#example}

~~~jsx {9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // 기본 Toolbar 표시
        // 또는 객체를 통해 Toolbar 구성
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

**변경 로그**: v6.0에서 추가

**관련 문서**:  [Toolbar 구성](guides/diagram_editor/toolbar.md)
