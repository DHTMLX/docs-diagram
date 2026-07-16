---
sidebar_label: properties
title: Editbar의 properties 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 properties 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# properties

### 설명 {#description}

@short: 선택 사항입니다. Diagram 요소(도형, 그룹, 스윔레인 등)의 컨트롤을 수정하는 구성 집합입니다.

:::info
`properties` 구성을 사용하면 다음을 수행할 수 있습니다:
- [**기본 컨트롤**](api/diagram_editor/editbar/basic_controls_overview.md) 및/또는 [**복합 컨트롤**](api/diagram_editor/editbar/complex_controls_overview.md)을 기반으로 모든 또는 개별 Diagram 요소에 대해 Editbar 컨트롤을 수정합니다
- [`controls`](api/diagram_editor/editbar/config/controls_property.md) 속성을 통해 정의된 사용자 지정 Editbar 컨트롤을 Diagram 요소에 적용합니다
- Diagram 요소에 Editbar 컨트롤(사용자 지정 또는 기본)을 적용하기 위한 조건을 지정합니다

구성에 대한 자세한 내용은 [**Editbar 구성**](guides/diagram_editor/editbar.md) 가이드를 참조하세요!
:::

### 사용법 {#usage}

~~~jsx
properties?: {
    [type: string]: object[] | function, // Diagram 요소에 적용되는 컨트롤의 사용자 지정 구성
};
~~~

### 매개변수 {#parameters}

- `type` - Diagram 요소 또는 요소 그룹의 이름
    - `object` - Diagram 요소의 구성 객체

    또는

    - `function` - Diagram 요소 컨트롤의 구성을 담은 객체 배열을 반환해야 하는 콜백 함수입니다. 이 함수는 다음 매개변수를 포함하는 객체와 함께 호출됩니다:
        - `item` - (선택 사항) 선택한 요소의 객체
        - `editor` - (필수) Diagram Editor의 객체

예를 들어 `rectangle`, `circle`, `card` 등과 같이 개별 Diagram 요소에 대해 Editbar 컨트롤을 구성할 수 있습니다:

~~~jsx
properties: {
    // 개별 요소(도형)에 대한 Editbar 컨트롤 수정
    rectangle: [], // "rectangle" 유형의 컨트롤 구성
    circle: [], // "circle" 유형의 컨트롤 구성
    card: [], // "card" 유형의 컨트롤 구성
    estimate: [], // 사용자 지정 "estimate" 유형의 컨트롤 구성
    // 기타 요소
}
~~~

개별 Diagram 요소 그룹에 대해 Editbar 컨트롤을 구성할 수도 있습니다. 그룹을 구성하기 위한 서비스 속성은 다음과 같습니다:

- [`$default`](guides/diagram_editor/editbar.md#configure-editbar-for-the-grid-area) - 요소가 선택되지 않았거나 둘 이상의 요소가 선택된 경우 Editbar 컨트롤을 구성할 수 있습니다
- [`$shape`](guides/diagram_editor/editbar.md#configure-editbar-for-shapes) - 사용자 지정 도형을 포함한 모든 도형에 대해 Editbar 컨트롤을 구성할 수 있습니다
- [`$group`](guides/diagram_editor/editbar.md#configure-editbar-for-group-elements) - "group" 유형을 가진 모든 요소에 대해 Editbar 컨트롤을 구성할 수 있습니다
- [`$swimlane`](guides/diagram_editor/editbar.md#configure-editbar-for-swimlanes) - "swimlane" 유형을 가진 모든 요소에 대해 Editbar 컨트롤을 구성할 수 있습니다
- [`$line`](guides/diagram_editor/editbar.md#configure-editbar-for-lines) - "line" 유형을 가진 모든 요소에 대해 Editbar 컨트롤을 구성할 수 있습니다
- [`$lineTitle`](guides/diagram_editor/editbar.md#configure-editbar-for-line-titles) - "lineTitle" 유형을 가진 모든 요소에 대해 Editbar 컨트롤을 구성할 수 있습니다

~~~jsx
properties: {
    $default: [],
    $shape: [],
    $group: [],
    $swimlane: [],
    $line: [],
    $lineTitle: [],
    // ... 기타 매개변수
}
~~~

### 예제 {#example}

~~~jsx {10-44}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // 기본 Editbar 표시
        // 또는 객체를 통해 Editbar 구성
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            properties: {
                $shape: ({ item, editor }) => {
                    const controls = [
                        { type: "position" },
                        { type: "size" }
                    ];
                    if (item.hasOwnProperty("title")) {
                        controls.push({ type: "input", key: "title", label: "Title", wrap: true });
                    }
                    if (item.hasOwnProperty("text")) {
                        controls.push({ type: "textarea", key: "text", height: 200, label: "Text", wrap: true });
                    }
                    if (item.hasOwnProperty("img")) {
                        controls.push({ type: "avatar", key: "img", label: "Image", wrap: true });
                    }
                    return controls;
                },
                $group: [
                    {
                        type: "arrange",
                        $properties: {
                            angle: { hidden: true }
                        }
                    },
                    { type: "header" },
                    {
                        type: "border",
                        $properties: {
                            stroke: { key: ["style", "stroke"] },
                            strokeType: { hidden: true },
                            strokeWidth: { key: ["style", "strokeWidth"], width: "85%" }
                        }
                    }
                ]
            }
        }
    }
});
~~~

**변경 로그:** 이 속성은 v6.0에서 추가되었습니다.

**관련 문서:** [**Editbar 구성**](guides/diagram_editor/editbar.md)

**관련 샘플:** [Diagram Editor. 기본 모드. Editbar 사용자 지정. 도형 카운터 추가](https://snippet.dhtmlx.com/ealq0m4l?mode=wide)
