---
sidebar_label: controls
title: Editbar의 controls 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 controls 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# controls

### 설명 {#description}

@short: 선택 사항. 하나 이상의 사용자 지정 컨트롤을 정의하는 구성 집합입니다.

:::info
`controls` 속성을 사용하면 [**기본 컨트롤**](api/diagram_editor/editbar/basic_controls_overview.md) 및/또는 [**복합 컨트롤**](api/diagram_editor/editbar/complex_controls_overview.md)을 기반으로 사용자 지정 `Editbar` 컨트롤을 생성할 수 있습니다. 사용자 지정 컨트롤을 필요한 요소(도형, 그룹, 스윔레인 등)에 적용하려면 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 속성을 사용하세요.

구성에 대한 자세한 내용은 [**Editbar 구성**](guides/diagram_editor/editbar.md) 가이드를 참조하세요!
:::

:::important
사용자 지정 컨트롤을 생성할 때 기본 컨트롤을 재정의하지 않는 것이 좋습니다. 각 사용자 지정 컨트롤에 개별 이름을 사용하세요!
:::

### 사용법 {#usage}

~~~jsx
controls?: {
    [type: string]: object, // 사용자 지정 컨트롤
};
~~~

### 매개변수 {#parameters}

- `type` - 사용자 지정 컨트롤의 유형 이름
    - `object` - [**기본 컨트롤**](api/diagram_editor/editbar/basic_controls_overview.md) 및/또는 [**복합 컨트롤**](api/diagram_editor/editbar/complex_controls_overview.md)을 기반으로 하는 새 컨트롤의 구성 객체

~~~jsx
controls: {
      estimate: { /*...*/ }, // 사용자 지정 구성으로 새 "estimate" 컨트롤 생성
      // 다른 컨트롤
}
~~~

### 예제 {#example}

~~~jsx {16-28}
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
                $shape: [
                    { type: "estimate" }, // "estimate" 사용자 지정 컨트롤 적용
                    { type: "name" } // "name" 사용자 지정 컨트롤 적용
                ]
            },
            controls: {
                // "estimate" 사용자 지정 컨트롤 생성
                estimate: {
                    type: "fieldset",
                    label: "Time estimate",
                    rows: [
                        { type: "datepicker", key: "date_start", label: "Date start" },
                        { type: "datepicker", key: "date_end", label: "Date end" }
                    ]
                },
                // "name" 사용자 지정 컨트롤 생성
                name: { type: "input", label: "Name", key: "name" }
            }
        }
    }
});
~~~

**변경 로그**: 이 속성은 v6.0에서 추가되었습니다.

**관련 문서:** [**Editbar 구성**](guides/diagram_editor/editbar.md)

**관련 샘플:** [Diagram Editor. 기본 모드. 범례가 있는 PERT 차트](https://snippet.dhtmlx.com/w8mrh3ay?mode=wide)
