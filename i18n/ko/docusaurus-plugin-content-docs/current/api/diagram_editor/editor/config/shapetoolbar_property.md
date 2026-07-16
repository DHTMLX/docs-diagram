---
sidebar_label: shapeToolbar
title: Editor의 shapeToolbar 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 shapeToolbar 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# shapeToolbar

### 설명 {#description}

@short: 선택 사항입니다. diagram 항목의 개인 툴바에 표시할 컨트롤을 정의합니다

### 사용법 {#usage}

~~~jsx
shapeToolbar?: boolean | array;
~~~

### 매개변수 {#parameters}

배열인 경우 `shapeToolbar` 속성에는 다음이 포함될 수 있습니다:

- *boolean* 값 - 기본 툴바를 표시하거나 숨깁니다
- 툴바 컨트롤의 이름을 나타내는 문자열 값입니다. 배열에 값이 배치된 순서에 따라 툴바에 표시되는 컨트롤의 순서가 결정됩니다. 사용 가능한 값은 다음과 같습니다:
    - default 모드: `"copy"` | `"connect"` | `"remove"` | `"addRowLast"` | `"addColumnLast"`
    - org chart 모드: `"add"` | `"horizontal"` | `"vertical"` | `"remove"`
    - mindmap 모드: `"add"` | `"addLeft"` | `"addRight"` | `"remove"`
- 아이콘 객체 집합입니다. 각 아이콘 객체는 다음 속성을 가질 수 있습니다:
    - `id: string` -  (필수) 아이콘의 id입니다. 새 컨트롤의 id로 기본 툴바 컨트롤 이름을 사용하는 것은 금지되어 있습니다
    - `content: string` - (필수) 아이콘의 콘텐츠입니다. 아이콘 클래스 이름을 가진 HTML 요소를 포함할 수 있습니다
    - `check: function` - (선택 사항) 아이콘을 도형에 적용해야 하는지 확인합니다. 이 함수는 도형 객체를 인수로 받으며, 아이콘이 해당 도형에 렌더링될 경우 *true*를 반환합니다
    - `css: function` - (선택 사항) 도형에 적용해야 하는 CSS 클래스 이름을 반환하는 함수입니다
    - `tooltip: string` - (선택 사항) 아이콘 위에 마우스를 올렸을 때 나타나는 툴팁입니다

### 예제 {#example}

~~~jsx title="속성을 boolean 값으로 설정하기"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    shapeToolbar: false, // 기본값: true
});
~~~

~~~jsx title="속성을 아이콘 이름 또는 아이콘 객체의 배열로 설정하기"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    shapeToolbar: [
        "add",
        // 사용자 지정 "download" 컨트롤 추가
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
            tooltip: "Download to PDF"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>",
            check: item => item.parent,
            css: () => "dhx_diagram_toolbar__icon--remove",
            tooltip: "Remove"
        }
    ]
});
~~~

### 특정 항목에 대한 기본 툴바 재정의 {#redefining-the-default-toolbar-for-certain-items}

일부 항목에는 특정 툴바 컨트롤을 제공하고 다른 항목에는 기본 컨트롤을 사용해야 할 수도 있습니다. 이 경우 `shapeToolbar` 배열에 *true* 값을 지정하여 기본 툴바를 활성화하고, 아이콘이 적용될 도형을 정의하는 check 함수가 포함된 필요한 아이콘 객체를 추가해야 합니다.

~~~jsx title="start 유형 항목에 download 아이콘 설정하기"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeToolbar:
    [
        true,
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
            tooltip: "Download to PDF",
            check: item => item.type === "start"
        }
    ]
});
~~~

**변경 로그:** 아이콘 객체의 `tooltip` 매개변수는 v5.0에서 추가되었습니다

**관련 문서**: [그리드 영역](guides/diagram_editor/grid_area.md#configuring-the-toolbar-of-an-item)

**관련 샘플**: [Diagram Editor. 조직도 모드. 도형 툴바 구성](https://snippet.dhtmlx.com/b2agwets)
