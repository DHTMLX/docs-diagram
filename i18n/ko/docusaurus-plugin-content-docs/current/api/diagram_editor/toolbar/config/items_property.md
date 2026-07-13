---
sidebar_label: items
title: Toolbar의 items 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Toolbar의 items 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# items

### 설명 {#description}

@short: 선택 사항. Diagram Editor의 Toolbar에 표시되는 컨트롤이 포함된 배열입니다.

### 사용법 {#usage}

~~~jsx
items?: (object | string)[];
~~~

### 문자열을 통한 items 구성 {#configuring-items-via-strings}

`items` 속성을 사용하면 [**서비스 요소**](guides/diagram_editor/toolbar.md#service-elements)를 문자열 배열로 지정할 수 있습니다:

~~~jsx
items: [ "file", "edit", "view", "arrange", "spacer", "scale" ];
~~~

서비스 요소의 전체 목록은 [여기](guides/diagram_editor/toolbar.md#service-elements)에서 확인할 수 있습니다.

### 객체를 통한 items 구성 {#configuring-items-via-objects}

`items` 속성을 사용하면 [**서비스 요소**](guides/diagram_editor/toolbar.md#service-elements)와 [**기본 요소**](guides/diagram_editor/toolbar.md#base-elements)를 객체 배열로 지정할 수 있습니다:

~~~jsx
items: [
    {
        type: string,
        id?: string,
        value?: string,
        hotkey?: string,
        icon?: string,
        hidden?: boolean,
        disabled?: boolean,
        css?: string | string[],
        items?: (string | object)[],
        checkIcon?: (editor: object) => string,
        handler?: (editor: object, event: Event) => void
    }, {...}
];
~~~

#### 매개변수 {#parameters}

`separator`/`spacer`/`scale`를 제외한 모든 [**서비스 요소**](guides/diagram_editor/toolbar.md#service-elements)에 대해 다음 매개변수가 포함된 객체를 지정할 수 있습니다:

- `type` - (필수) - 서비스 요소의 유형입니다. 서비스 요소 유형의 전체 목록은 [여기](guides/diagram_editor/toolbar.md)에서 확인할 수 있습니다
- `id` - (선택 사항) - 서비스 요소의 ID입니다. 기본적으로 서비스 요소의 ID에는 `$`와 서비스 요소의 `type`이 포함됩니다: `$file`
- `value` - (선택 사항) - 서비스 요소의 레이블입니다
- `hotkey` - (선택 사항) - 서비스 요소의 단축키 조합 레이블입니다
- `icon` - (선택 사항) - 서비스 요소 아이콘의 css 클래스입니다
- `hidden` - (선택 사항) - 서비스 요소를 숨깁니다
- `disabled` - (선택 사항) - 서비스 요소를 비활성화합니다
- `css` - (선택 사항) - 서비스 요소에 사용자 지정 css 클래스를 적용합니다
- `items` - (선택 사항) - 하위 요소의 구조를 정의합니다
- `checkIcon` - (선택 사항) - 아이콘 css 클래스를 반환하는 핸들러입니다. 다음 인수와 함께 호출됩니다:
    - `editor` - Diagram Editor 객체
- `handler` - (선택 사항) - `click` 또는 `inputChange` 이벤트가 발생할 때 실행되는 핸들러입니다. 다음 인수와 함께 호출됩니다:
    - `editor` - Diagram Editor 객체
    - `event` - [네이티브 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/Event)

### 예제 1 {#example-1}

아래 예제는 문자열을 통해 Toolbar items를 구성하는 방법을 보여줍니다:

~~~jsx {10-14}
// 문자열을 통해 items 구성
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // 기본 Toolbar 표시
        // 또는 객체를 통해 Toolbar 구성
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                "file",
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

### 예제 2 {#example-2}

아래 예제는 객체를 통해 Toolbar items를 구성하는 방법을 보여줍니다:

~~~jsx {7-38}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                {
                    type: "file",
                    items: [
                        "importJson",
                        {
                            type: "exportJson",
                            value: "Export to JSON"
                        },
                        {
                            id: "custom_id_1",
                            type: "menuItem",
                            value: "Server export",
                            icon: "dxi dxi-vault",
                            items: [
                                "exportPdf",
                                {
                                    id: "custom_id_2",
                                    type: "menuItem",
                                    value: "PNG",
                                    handler: editor => {
                                        editor.diagram.export.png();
                                        // 여기에 사용자 지정 로직 작성
                                    }
                                }
                            ]
                        }
                    ]
                },
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

**변경 로그**: v6.0에서 추가

**관련 문서**:  [Toolbar 구성](guides/diagram_editor/toolbar.md)

**관련 샘플**: [Diagram Editor. 기본 모드. Toolbar 사용자 지정. 도형별 검색 추가 ](https://snippet.dhtmlx.com/846cz71r)
