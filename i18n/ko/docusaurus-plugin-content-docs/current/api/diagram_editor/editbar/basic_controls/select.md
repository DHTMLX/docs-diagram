---
sidebar_label: Select
title: Editbar 기본 컨트롤 - Select
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Select 컨트롤에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Select

@short: 선택할 수 있는 여러 옵션을 제공하는 고급 선택 상자를 나타내는 기본 컨트롤입니다.

![Select 컨트롤](/img/editbar-basic-controls/select.png)

## 사용법 {#usage}

~~~jsx
{
    type: "select",
    options: (object | string)[],
    key?: string | string[],
    wrap?: boolean, // 기본값은 false

    css?: string,
    disabled?: boolean, // 기본값은 false
    hidden?: boolean, // 기본값은 false
    height?: string | number | "content", // 기본값은 "content"
    width?: string | number | "content", // 기본값은 "content"
    padding?: string | number,
    icon?: string,

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

Select 내부의 옵션 설정 객체입니다:

~~~jsx
{
    value: string | number,
    content: string,
    disabled?: boolean
}
~~~

## 설명 {#description}

### Select 속성 {#select-properties}

#### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"select"`로 설정합니다
- `options` - (필수) Select 옵션의 배열입니다. 각 옵션은 *문자열* 또는 `key:value` 쌍의 집합을 가진 *객체*로 설정할 수 있습니다 - [옵션의 속성과 값](#option-properties)
- `key` - (선택 사항) 지정되거나 수정되는 속성의 이름 또는 Diagram 항목 객체 내에서 해당 속성에 대한 경로입니다
- `wrap` - (선택 사항) 외부 래핑 표시 여부를 지정합니다. *false*가 기본값입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. *false*가 기본값입니다
- `hidden` - (boolean) Select의 숨김 여부를 정의합니다. *false*가 기본값입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. `"content"`가 기본값입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. `"content"`가 기본값입니다
- `padding` - (선택 사항) Select 컨트롤의 셀과 테두리 사이의 여백을 설정합니다
- `icon` - (선택 사항) 사용 중인 아이콘 폰트에서 가져온 [아이콘](https://docs.dhtmlx.com/suite/helpers/icon/)의 CSS 클래스입니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelWidth` - (선택 사항) 컨트롤의 레이블 너비를 설정합니다
- `labelPosition` - (선택 사항) 레이블의 위치를 정의합니다: `"left"` | `"top"`. `"top"`이 기본값입니다

#### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대해서는 서비스 속성 및 메서드를 재정의하지 않는 것을 강력히 권장합니다. 재정의할 경우 기능에 오류가 발생할 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 해당 객체는 다음 속성을 가집니다:
    - `eventName`  - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [Select](https://docs.dhtmlx.com/suite/form/select/) Form 컨트롤
            - `editor` - Diagram Editor의 객체
            - `id` - Diagram 항목의 id
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-select-events/)
- `$handler` - (선택 사항) - [Select](https://docs.dhtmlx.com/suite/form/select/) Form 컨트롤의 `change` 이벤트 및 DataCollection의 `change` 이벤트 발생 시 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `id` - Diagram 항목의 id
        - `key` - 지정되거나 수정되는 속성의 이름 또는 Diagram 항목 객체 내에서 해당 속성에 대한 경로
        - `editor` - Diagram Editor의 객체
        - `control` - 컴포넌트가 빌드된 [Select](https://docs.dhtmlx.com/suite/form/select/) Form 컨트롤의 객체
        - `value` - [Select](https://docs.dhtmlx.com/suite/form/select/) Form 컨트롤의 새로운 값
- `$setValue` - (선택 사항) - 컨트롤 초기화 시 및 DataCollection의 값 변경 시 [Select](https://docs.dhtmlx.com/suite/form/select/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `editor` - Diagram Editor의 객체
        - `control` - 컴포넌트가 빌드된 [Select](https://docs.dhtmlx.com/suite/form/select/) Form 컨트롤의 객체
        - `value` - Diagram 항목의 값
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Select](https://docs.dhtmlx.com/suite/form/select/) Form 컨트롤의 설정을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성을 제외한 컨트롤의 설정

### 옵션 속성 {#option-properties}

- `value` - (필수) select 옵션의 값을 설정합니다
- `content` - (필수) select 옵션에 표시되는 콘텐츠입니다
- `disabled` - (선택 사항) 옵션의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. *false*가 기본값입니다

## 예제 {#example}

~~~jsx {7-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "select",
                        label: "Position",
                        key: "position",
                        wrap: true,
                        options: [
                            "",
                            "Technical Director",
                            "Manager",
                            "QA Lead",
                            { value: 4, content: "Team Lead", disabled: true },
                            { value: 5, content: "Programmer" }
                        ]
                    }
                ]
            }
        }
    }
});
~~~
