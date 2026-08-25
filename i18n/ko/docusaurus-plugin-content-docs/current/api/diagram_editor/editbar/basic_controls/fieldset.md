---
sidebar_label: Fieldset
title: Editbar 기본 컨트롤 - Fieldset
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Fieldset 컨트롤에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Fieldset

@short: [`controls`](api/diagram_editor/editbar/config/controls_property.md) 또는 [`properties`](api/diagram_editor/editbar/config/properties_property.md) Editbar 설정 옵션을 사용하여 복잡한 컨트롤을 생성하기 위한 기본 컨트롤입니다.

![Fieldset 컨트롤](/img/editbar-basic-controls/fieldset.png)

## 사용법 {#usage}

~~~jsx
{
    type: "fieldset",

    compact?: boolean,
    hidden?: boolean, // 기본값은 false
    disabled?: boolean, // 기본값은 false

    css?: string,
    width?: string | number | "content", // 기본값은 "content"
    height?: string | number | "content", // 기본값은 "content"
    padding?: string | number,
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // 기본값은 "start"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // 기본값은 "left"

    rows?: object[],
    cols?: object[],

    $layout?: function
}
~~~

`rows` 및 `cols` 속성에는 지정된 컨트롤의 객체 배열 또는 아래에 제시된 중첩 구조가 포함될 수 있습니다:

~~~jsx
{
    css?: string,
    width?: string | number | "content", // 기본값은 "content"
    height?: string | number | "content", // 기본값은 "content"
    padding?: string | number,
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // 기본값은 "start"
    rows?: object[],
    cols?: object[]
}
~~~

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"fieldset"`으로 설정합니다
- `compact` - (선택 사항) 컴팩트 모드를 지정하여 여백과 프레임을 제거합니다. *false*가 기본값입니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. *false*가 기본값입니다
- `hidden` - (선택 사항) 컨트롤의 숨김 여부를 정의합니다. *false*가 기본값입니다
- `css` - (선택 사항) 컨트롤 그룹에 적용되는 CSS 클래스의 이름입니다
- `width` - (선택 사항) 컨트롤 그룹의 너비를 설정합니다. `"content"`가 기본값입니다
- `height` - (선택 사항) 컨트롤 그룹의 높이를 설정합니다. `"content"`가 기본값입니다
- `padding` - (선택 사항) 컨트롤 그룹 내부 콘텐츠의 여백을 설정합니다
- `align` - (선택 사항) 컨트롤 그룹 내부 컨트롤의 정렬을 설정합니다. `"start"`가 기본값입니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelAlignment` - (선택 사항) 레이블의 위치를 정의합니다: `"left"` | `"right"` | `"center"`. `"left"`가 기본값입니다
- `rows` - (선택 사항) 컨트롤 그룹 내부의 컨트롤을 세로로 배치합니다
- `cols` - (선택 사항) 컨트롤 그룹 내부의 컨트롤을 가로로 배치합니다

#### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대해서는 서비스 속성 및 메서드를 재정의하지 않는 것을 강력히 권장합니다. 재정의할 경우 기능에 오류가 발생할 수 있습니다.
:::

- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Fieldset](https://docs.dhtmlx.com/suite/form/fieldset/) Form 컨트롤의 설정을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성을 제외한 컨트롤의 설정

## 예제 {#example}

~~~jsx {7-28} title="properties 속성을 통해 Fieldset 생성하기"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "fieldset",
                        label: "Task details",
                        rows: [
                            { type: "input", key: "name", label: "Task name" },
                            { type: "input", key: "id", label: "ID", readOnly: true },
                            {
                                align: "between",
                                cols: [
                                    { type: "datepicker", key: "date_start", label: "Date start", width: "48%" },
                                    { type: "datepicker", key: "date_end", label: "Date end", width: "48%" },
                                ]
                            },
                            {
                                type: "combo",
                                key: "responsible",
                                label: "Responsible",
                                placeholder: "Select responsible",
                                options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                            }
                        ]
                    }
                ]
            }
        }
    }
});
~~~

~~~jsx {10-33} title="controls 속성을 통해 복잡한 컨트롤 생성하기"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "details" }
                ]
            },
            controls: {
                details: {
                    type: "fieldset",
                    label: "Task details",
                    rows: [
                        { type: "input", key: "name", label: "Task name" },
                        { type: "input", key: "id", label: "ID", readOnly: true },
                        {
                            align: "between",
                            cols: [
                                { type: "datepicker", key: "date_start", label: "Date start", width: "48%" },
                                { type: "datepicker", key: "date_end", label: "Date end", width: "48%" }
                            ]
                        },
                        {
                            type: "combo",
                            key: "responsible",
                            label: "Responsible",
                            placeholder: "Select responsible",
                            options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                        }
                    ]
                }
            }
        }
    }
});
~~~
