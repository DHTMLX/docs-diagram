---
sidebar_label: Datepicker
title: Editbar 기본 컨트롤 - Datepicker
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Datepicker 컨트롤에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Datepicker

@short: 날짜를 선택하기 위한 기본 컨트롤입니다.

![Datepicker 컨트롤](/img/editbar-basic-controls/datepicker.png)

## 사용법 {#usage}

~~~jsx
{
    type: "datepicker",
    key?: string | string[],
    wrap?: boolean, // 기본값은 false

    css?: string,
    disabled?: boolean, // 기본값은 false
    hidden?: boolean, // 기본값은 false
    height?: string | number | "content", // 기본값은 "content"
    width?: string | number | "content", // 기본값은 "content"
    padding?: string | number,

    date?: Date | string,
    dateFormat?: string, // 기본값은 "%d/%m/%y"
    disabledDates?: (date: Date) => boolean,
    icon?: string,
    mark?: (date: Date) => string,
    mode?: "calendar" | "month" | "year", // 기본값은 "calendar"
    placeholder?: string,
    thisMonthOnly?: boolean, // 기본값은 false
    timeFormat?: 24 | 12, // 기본값은 24
    timePicker?: boolean, // 기본값은 false
    valueFormat?: "string" | "Date", // 기본값은 "string"
    weekNumbers?: boolean, // 기본값은 false
    weekStart?: "saturday" | "sunday" | "monday", // 기본값은 "sunday"

    // `wrap:true`인 경우 Fieldset의 label 속성을 확인하세요
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // 기본값은 "top"

    // 서비스 속성 및 메서드
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"datepicker"`로 설정합니다
- `key` - (선택 사항) 지정되거나 수정되는 속성의 이름 또는 Diagram 항목 객체 내에서 해당 속성에 대한 경로입니다
- `wrap` - (선택 사항) 외부 래핑 표시 여부를 지정합니다. 기본값은 *false*입니다
- `css` - (선택 사항) 컨트롤 문자열에 스타일 클래스를 추가합니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. 기본값은 *false*입니다
- `hidden` - (선택 사항) 컨트롤의 숨김 여부를 정의합니다. 기본값은 *false*입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. `"content"`가 기본값입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. `"content"`가 기본값입니다
- `padding` - (선택 사항) Datepicker 컨트롤의 셀과 테두리 사이의 여백을 설정합니다
- `date` - (선택 사항) 캘린더가 생성될 때 열리는 날짜를 정의합니다
- `dateFormat` - (선택 사항) 캘린더에 표시되는 날짜의 형식을 정의합니다. *"%d/%m/%y"*가 기본값입니다. 날짜 형식에는 구분 기호(공백 또는 기호)가 반드시 포함되어야 하며, 그렇지 않으면 오류가 발생합니다
- `disabledDates` - (선택 사항) 특정 날짜 구간을 비활성화할 수 있으며, 해당 요일 레이블은 흐리게 표시됩니다
- `icon` - (선택 사항) 사용 중인 아이콘 폰트에서 가져온 아이콘의 CSS 클래스입니다
- `mark` - (선택 사항) 특정 날짜에 CSS 클래스를 추가할 수 있습니다
- `mode` - (선택 사항) 캘린더 표시 모드를 지정합니다: `"calendar"` | `"month"` | `"year"`. `"calendar"`가 기본값입니다
- `placeholder` - (선택 사항) 입력을 위한 힌트입니다
- `thisMonthOnly` - (선택 사항) 현재 표시된 달을 기준으로 이전/다음 달의 날짜를 숨깁니다
- `timeFormat` - (선택 사항) timepicker의 시간 형식을 12시간제 또는 24시간제로 정의합니다: *12* | *24*. *24*가 기본값입니다
- `timePicker` - (선택 사항) 캘린더에 timepicker를 추가합니다. 기본값은 *false*입니다
- `valueFormat` - (선택 사항) 컨트롤의 현재 값을 가져올 때 반환되는 값의 형식을 정의합니다: `"string"` | `"Date"`. `"string"`이 기본값입니다
- `weekNumbers` - (선택 사항) 주 번호 표시 여부를 정의합니다. *false*가 기본값입니다
- `weekStart` - (선택 사항) 한 주의 시작 요일을 설정합니다: `"saturday"` | `"monday"` | `"sunday"`. `"sunday"`가 기본값입니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelWidth` - (선택 사항) 컨트롤의 레이블 너비를 설정합니다
- `labelPosition` - (선택 사항) 레이블의 위치를 정의합니다: `"left"` | `"top"`. `"top"`이 기본값입니다

### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대해서는 서비스 속성 및 메서드를 재정의하지 않는 것을 강력히 권장합니다. 재정의할 경우 기능에 오류가 발생할 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 해당 객체는 다음 속성을 가집니다:
    - `eventName`  - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 컨트롤
            - `editor` - Diagram Editor의 객체
            - `id` - Diagram 항목의 id
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-datepicker-events/)
- `$handler` - (선택 사항) - 폼 컨트롤의 `change` 및 `input` 이벤트, 그리고 DataCollection의 `change` 이벤트 발생 시 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `id` - Diagram 항목의 id
        - `key` - 지정되거나 수정되는 속성의 이름 또는 Diagram 항목 객체 내에서 해당 속성에 대한 경로
        - `editor` - Diagram Editor의 객체
        - `control` - 컴포넌트가 빌드된 [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 컨트롤의 객체
        - `value` - [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 컨트롤의 새로운 값
- `$setValue` - (선택 사항) - 컨트롤 초기화 시 및 DataCollection의 값 변경 시 [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `editor` - Diagram Editor의 객체
        - `control` - 컴포넌트가 빌드된 [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 컨트롤의 객체
        - `value` - Diagram 항목의 값
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 컨트롤의 설정을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성을 제외한 컨트롤의 설정

## 예제 {#example}

~~~jsx {7-21}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "datepicker",
                        key: "date_start",
                        label: "Date start",
                        wrap: true,
                    },
                    {
                        type: "datepicker",
                        key: "date_end",
                        label: "Date end",
                        wrap: true,
                        valueFormat: "Date",
                        timePicker: true,
                        weekStart: "monday"
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "date_start": "25/03/24", "date_end": new Date },
    { "id": "shape_3", "parent": "shape_1", "date_start": "25/03/24", "date_end": new Date }
]);
~~~
