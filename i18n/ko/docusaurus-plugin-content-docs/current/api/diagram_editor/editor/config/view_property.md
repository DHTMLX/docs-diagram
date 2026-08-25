---
sidebar_label: view
title: Editor의 view 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 view 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 확인해 보세요. DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# view

### 설명 {#description}

@short: Diagram Editor의 Toolbar, Shapebar, Editbar 뷰를 구성하는 객체입니다

### 사용법 {#usage}

~~~jsx
view: {
    toolbar?: boolean | object,
    shapebar?: boolean | object,
    editbar?: boolean | object
};
~~~

### 매개변수 {#parameters}

- `toolbar` - (선택 사항) `Toolbar`를 표시/숨기거나(*boolean*인 경우), 모양을 구성합니다(*object*인 경우). Toolbar 구성에 대한 자세한 내용은 [Toolbar API](api/diagram_editor/toolbar/api_overview.md) 섹션을 참고하세요
- `shapebar` - (선택 사항) `Shapebar`를 표시/숨기거나(*boolean*인 경우), 모양을 구성합니다(*object*인 경우). Shapebar 구성에 대한 자세한 내용은 [Shapebar API](api/diagram_editor/shapebar/api_overview.md) 섹션을 참고하세요
- `editbar` - (선택 사항) `Editbar`를 표시/숨기거나(*boolean*인 경우), 모양을 구성합니다(*object*인 경우). Editbar 구성에 대한 자세한 내용은 [Editbar API](api/diagram_editor/editbar/api_overview.md) 섹션을 참고하세요

### 기본 설정 {#default-config}

~~~jsx
view: {
    toolbar: true,
    shapebar: true,
    editbar: true
}
~~~

### 예제 {#example}

~~~jsx {3-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "toolbar_custom",
            data: ["file", "separator", "scale"]
        },
        shapebar: {
            width: 400
        },
        editbar: false
    }
    // 기타 설정
});
~~~

**변경 로그**: v6.0에서 추가
