---
sidebar_label: Timepicker
title: Editbar 기본 컨트롤 - Timepicker
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Timepicker 컨트롤을 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 직접 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Timepicker

@short: 트랙 바를 따라 핸들을 이동하거나 관련 입력란에 시간 및 분 값을 직접 입력하여 시간 값을 선택하는 기본 컨트롤입니다.

![Timepicker 컨트롤](/img/editbar-basic-controls/timepicker.png)

## 사용법 {#usage}

~~~jsx
{
    type: "timepicker",
    key?: string | string[],
    wrap?: boolean, // 기본값: false

    css?: string,
    disabled?: boolean, // 기본값: false
    hidden?: boolean, // 기본값: false
    height?: string | number | "content", // 기본값: "content"
    width?: string | number | "content", // 기본값: "content"
    padding?: string | number,

    controls?: boolean, // 기본값: false
    icon?: string,
    placeholder?: string,
    timeFormat?: 12 | 24, // 기본값: 24
    valueFormat?: "string" | "timeObject", // 기본값: "string"

    // `wrap:true`인 경우 Fieldset의 label 속성을 확인하세요
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

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"timepicker"`로 설정합니다
- `key` - (선택 사항) 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
- `wrap` - (선택 사항) 외부 래핑(wrapping) 표시 여부를 설정합니다. 기본값은 *false*입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `hidden` - (선택 사항) 컨트롤의 숨김 여부를 지정합니다. 기본값은 *false*입니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 지정합니다. 기본값은 *false*입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 셀과 Timepicker 컨트롤 테두리 사이의 여백(padding)을 설정합니다
- `controls` - (선택 사항) timepicker에 Close 및 Save 버튼이 포함되는지 여부를 지정합니다. 기본값은 *false*입니다
- `icon` - (선택 사항) 사용된 아이콘 폰트에서 아이콘의 CSS 클래스입니다
- `placeholder` - (선택 사항) 입력란에 대한 안내 문구입니다
- `timeFormat` - (선택 사항) 활성화할 시계 형식을 지정합니다: 12시간제 또는 24시간제입니다. 각각 속성을 *12* 또는 *24*로 설정합니다. 기본값은 *24*입니다
- `valueFormat` - (선택 사항) timepicker 컨트롤의 이벤트를 처리할 때 적용할 값의 형식을 지정합니다: `"string"` | `"timeObject"`. 기본값은 `"string"`입니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelWidth` - (선택 사항) 컨트롤의 레이블 너비를 설정합니다
- `labelPosition` - (선택 사항) 레이블의 위치를 지정합니다: `"left"` | `"top"`. 기본값은 `"top"`입니다

### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대한 서비스 속성 및 메서드를 재정의하지 않는 것이 좋습니다. 재정의할 경우 기능이 손상될 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 객체는 다음 속성을 가집니다:
    - `eventName`  - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 컨트롤입니다
            - `editor` - Diagram Editor의 객체입니다
            - `id` - Diagram 항목의 id입니다
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-timepicker-events/)입니다
- `$handler` - (선택 사항) - [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 컨트롤의 `change` 및 `input` 이벤트와 DataCollection의 `change` 이벤트가 발생할 때 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `id` - Diagram 항목의 id입니다
        - `key` - 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트가 기반으로 하는 [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 컨트롤의 객체입니다
        - `value` - [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 컨트롤의 새 값입니다
- `$setValue` - (선택 사항) - 컨트롤 초기화 시 및 DataCollection에서 값이 변경될 때 [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트가 기반으로 하는 [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 컨트롤의 객체입니다
        - `value` - Diagram 항목의 값입니다
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성을 제외한 컨트롤의 구성입니다

## 예제 {#example}

~~~jsx {8-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    {
                        type: "timepicker",
                        key: "time",
                        label: "Select time",
                        controls: true
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "time": "14:00" },
    { "id": "shape_3", "parent": "shape_1", "time": "18:30" }
]);
~~~
