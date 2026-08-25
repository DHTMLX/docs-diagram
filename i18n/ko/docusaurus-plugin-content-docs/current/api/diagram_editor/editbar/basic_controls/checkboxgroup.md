---
sidebar_label: CheckboxGroup
title: Editbar 기본 컨트롤 - CheckboxGroup
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 CheckboxGroup 컨트롤에 대해 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# CheckboxGroup

@short: Checkbox 그룹을 생성하기 위한 기본 컨트롤입니다.

![CheckboxGroup control](/img/editbar-basic-controls/checkboxgroup.png)

## 사용법 {#usage}

~~~jsx
{
    type: "checkboxGroup",
    options: {
        rows?: object[],
        cols?: object[],
        css?: string,
        height?: string | number | "content", // 기본값: "content"
        width?: string | number | "content", // 기본값: "content"
        padding?: string | number,
    },
    key?: string | string[],
    wrap?: boolean, // 기본값: false

    css?: string,
    disabled?: boolean, // 기본값: false
    hidden?: boolean, // 기본값: false
    height?: string | number | "content", // 기본값: "content"
    width?: string | number | "content", // 기본값: "content"
    padding?: string | number,

    // `wrap:true`인 경우 Fieldset의 레이블 속성을 확인하세요
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // 기본값: "top"

    // 서비스 속성 및 메서드
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

CheckboxGroup 내부의 Checkbox 구성 객체:

~~~jsx
{
    id: string,
    text: string,
    value?: string,

    css?: string,
    disabled?: boolean, // 기본값: false
    hidden?: boolean, // 기본값: false
    height?: string | number | "content", // 기본값: "content"
    width?: string | number | "content", // 기본값: "content"
    padding?: string | number
}
~~~

컨트롤 내부에서 `checkbox` 구성을 가진 객체는 `value` 속성이 지정된 경우 *boolean* 값과 *string* 값을 모두 사용할 수 있습니다. 자세한 내용은 [아래 예제를 확인하세요](#example).

## 설명 {#description}

### CheckboxGroup 속성 {#checkboxgroup-properties}

#### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"checkboxGroup"`로 설정합니다
- `key` - (선택 사항) 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
- `wrap` - (선택 사항) 외부 래핑 표시 여부를 정의합니다. 기본값은 *false*입니다
- `options` - (필수) CheckboxGroup의 옵션이 담긴 객체입니다. 이 객체는 다음 속성을 포함할 수 있습니다:
    - `rows` - (선택 사항) CheckboxGroup 컨트롤 내부의 [Checkbox](#checkbox-properties)를 세로로 배치합니다
    - `cols` - (선택 사항) CheckboxGroup 컨트롤 내부의 [Checkbox](#checkbox-properties)를 가로로 배치합니다
    - `css` - (선택 사항) CheckboxGroup에 스타일 클래스를 추가합니다
    - `height` - (선택 사항) CheckboxGroup의 높이입니다
    - `padding` - (선택 사항) 셀과 CheckboxGroup 테두리 사이의 여백을 설정합니다
    - `width` - (선택 사항) CheckboxGroup의 너비입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. 기본값은 *false*입니다
- `hidden` - (boolean) CheckboxGroup의 숨김 여부를 정의합니다. 기본값은 *false*입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 셀과 CheckboxGroup 컨트롤 테두리 사이의 여백을 설정합니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelWidth` - (선택 사항) 컨트롤 레이블의 너비를 설정합니다
- `labelPosition` - (선택 사항) 레이블의 위치를 정의합니다: `"left"` | `"top"`. 기본값은 `"top"`입니다

#### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대한 서비스 속성 및 메서드는 재정의하지 않는 것을 강력히 권장합니다. 재정의할 경우 해당 기능이 손상될 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 해당 객체는 다음 속성을 갖습니다:
    - `eventName` - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 컨트롤입니다
            - `editor` - Diagram Editor의 객체입니다
            - `id` - Diagram 항목의 id입니다
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-checkboxgroup-events/)입니다
- `$handler` - (선택 사항) - [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 컨트롤의 `change` 이벤트 및 DataCollection의 `change` 이벤트 발생 시 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `id` - Diagram 항목의 id입니다
        - `key` - 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트의 기반이 되는 [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 컨트롤의 객체입니다
        - `value` - [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 컨트롤의 새 값입니다
- `$setValue` - (선택 사항) - 컨트롤 초기화 시 및 DataCollection에서 값이 변경될 때 [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트의 기반이 되는 [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 컨트롤의 객체입니다
        - `value` - Diagram 항목의 값입니다
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성이 제외된 컨트롤의 구성입니다

### Checkbox 속성 {#checkbox-properties}

- `id` - (선택 사항) 컨트롤의 id입니다. 설정하지 않으면 자동으로 생성됩니다
- `text` - (선택 사항) Checkbox의 텍스트 레이블입니다
- `value` - (선택 사항) Checkbox의 값입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. 기본값은 *false*입니다
- `hidden` - (선택 사항) Checkbox의 숨김 여부를 정의합니다. 기본값은 *false*입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 셀과 Checkbox 컨트롤 테두리 사이의 여백을 설정합니다

## 예제 {#example}

~~~jsx {7-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "checkboxGroup",
                        label: "Select products",
                        key: "products",
                        options: {
                            rows: [
                                { id: "diagram", text: "DHTMLX Diagram", value: "diagram" },
                                { id: "suite", text: "DHTMLX Suite", value: "suite" },
                                { id: "gantt", text: "DHTMLX Gantt" },
                                { id: "spreadsheet", text: "DHTMLX Spreadsheet", disabled: true }
                            ]
                        }
                    }
                ]
            }
        }
    }
});
editor.parse([
    {
        "type": "rectangle",
        "products": {
            "diagram": "diagram",
            "suite": "",
            "gantt": true,
            "spreadsheet": false
        }
    }
]);
~~~
