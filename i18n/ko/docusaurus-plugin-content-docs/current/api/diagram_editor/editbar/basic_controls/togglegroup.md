---
sidebar_label: ToggleGroup
title: Editbar 기본 컨트롤 - ToggleGroup
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 ToggleGroup 컨트롤에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고 코드 예제와 라이브 데모를 사용해 보세요. 그리고 DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# ToggleGroup

@short: 토글 버튼 그룹을 생성하기 위한 기본 컨트롤입니다.

![ToggleGroup control](/img/editbar-basic-controls/togglegroup.png)

## 사용법 {#usage}

~~~jsx
{
    type: "toggleGroup",
    options: object[],
    key?: string | string[],

    full?: boolean, // 기본값: false
    gap?: number, // 기본값: 0
    hidden?: boolean, // 기본값: false
    disabled?: boolean, // 기본값: false

    css?: string,
    width?: string | number | "content", // 기본값: "content"
    height?: string | number | "content", // 기본값: "content"
    padding?: string | number,

    // 서비스 속성 및 메서드
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

ToggleGroup 내부의 Toggle 구성 객체:

~~~jsx
{
    id?: string,
    hidden?: boolean,
    disabled?: boolean,
    full?: boolean,
    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number
}
~~~

컨트롤 내부의 `toggle` 구성을 가진 객체는 `value` 속성이 지정된 경우 *boolean* 값과 *string* 값 모두와 함께 사용할 수 있습니다. `value` 속성은 설정된 값을 적용된 속성의 값으로 지정하는 데 필요합니다. 아이디어를 파악하려면 [아래 예제를 확인하세요](#example).

## 설명 {#description}

### ToggleGroup 속성 {#togglegroup-properties}

#### 기본 속성 {#basic-properties}

- `type` - (required) 컨트롤의 유형입니다. `"toggleGroup"`으로 설정하세요
- `key` - (optional) Diagram 항목의 객체에서 지정되거나 수정된 속성의 이름 또는 해당 경로
- `options` - (required) ToggleGroup 옵션의 배열이며, 각 옵션은 `key:value` 쌍의 집합을 가진 *object*로 설정됩니다 - [옵션의 속성 및 값](#toggle-properties)
- `hidden` - (optional) ToggleGroup의 숨김 여부를 정의합니다. 기본값은 *false*
- `disabled` - (optional) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. 기본값은 *false*
- `full` - (optional) ToggleGroup이 `width` 속성에 지정된 너비까지 확장되는지 여부를 정의합니다. 기본값은 *false*
- `gap` - (optional) 옵션의 요소(버튼) 사이의 간격을 설정합니다. 기본값은 *0*
- `css` - (optional) 컨트롤에 스타일 클래스를 추가합니다
- `width` - (optional) 컨트롤의 너비입니다. 기본값은 `"content"`
- `height` - (optional) 컨트롤의 높이입니다. 기본값은 `"content"`
- `padding` - (optional) ToggleGroup 컨트롤의 셀과 테두리 사이의 여백을 설정합니다

#### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대해 서비스 속성 및 메서드를 재정의하지 않는 것을 강력히 권장합니다. 재정의할 경우 해당 기능에 오류가 발생할 수 있습니다.
:::

- `$on` - (optional) - 이벤트 리스너를 설정할 수 있습니다. 객체에는 다음 속성이 있습니다:
    - `eventName` - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체:
            - `control` - [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 컨트롤
            - `editor` - Diagram Editor의 객체
            - `id` - Diagram 항목의 id
        - `arguments` - (optional) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-togglegroup-events/)
- `$handler` - (optional) - [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 컨트롤의 `change` 이벤트 및 DataCollection의 `change` 이벤트가 발생할 때 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체:
        - `id` - Diagram 항목의 id
        - `key` - Diagram 항목의 객체에서 지정되거나 수정된 속성의 이름 또는 해당 경로
        - `editor` - Diagram Editor의 객체
        - `control` - 컴포넌트가 기반으로 하는 [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 컨트롤의 객체
        - `value` - [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 컨트롤의 새로운 값
- `$setValue` - (optional) - 컨트롤 초기화 시 및 DataCollection에서 값이 변경될 때 [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체:
        - `editor` - Diagram Editor의 객체
        - `control` - 컴포넌트가 기반으로 하는 [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 컨트롤의 객체
        - `value` - Diagram 항목의 값
- `$layout` - (optional) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성을 제외한 컨트롤의 구성

### Toggle 속성 {#toggle-properties}

- `id` - (optional) 컨트롤의 id, 설정하지 않으면 자동 생성됨
- `hidden` - (optional) 옵션의 숨김 여부를 정의합니다. 기본값은 *false*
- `disabled` - (optional) 옵션의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. 기본값은 *false*
- `full` - (optional) 옵션이 `width` 속성에 지정된 너비까지 확장되는지 여부를 정의합니다. 기본값은 *false*
- `text` - (optional) 옵션 내부의 텍스트를 설정합니다. `offText` 속성과 함께 초기화되면 지정된 텍스트는 선택(눌림) 상태에서 표시됩니다
- `icon` - (optional) 옵션 내부에 표시되는 아이콘의 CSS 클래스를 설정합니다. `offIcon` 속성과 함께 초기화되면 지정된 아이콘의 CSS 클래스는 옵션의 선택(눌림) 상태에서 표시됩니다
- `offText` - (optional) 옵션의 선택 해제(눌리지 않은) 상태에서 표시될 텍스트를 설정합니다
- `offIcon` - (optional) 옵션의 선택 해제(눌리지 않은) 상태에서 표시될 아이콘의 CSS 클래스를 설정합니다
- `value` - (optional) 선택(눌림) 상태의 값을 지정합니다. 정의하지 않으면 옵션은 *boolean* 값으로 사용됩니다

## 예제 {#example}

~~~jsx {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggleGroup",
                        key: "textAlign",
                        gap: 4,
                        $on: {
                            beforeChange: (spec, values) => !Object.values(values).every(i => !i),
                        },
                        options: [
                            {
                                icon: "dxi dxi-format-align-left",
                                value: "left"
                            },
                            {
                                icon: "dxi dxi-format-align-center",
                                value: "center"
                            },
                            {
                                icon: "dxi dxi-format-align-right",
                                value: "right"
                            }
                        ]
                    }
                ]
            }
        }
    }
});
~~~
