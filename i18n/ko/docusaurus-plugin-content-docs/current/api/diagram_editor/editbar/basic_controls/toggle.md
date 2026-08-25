---
sidebar_label: Toggle
title: Editbar 기본 컨트롤 - Toggle
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Toggle 컨트롤을 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 직접 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Toggle

@short: 클릭 시 눌림 상태와 눌리지 않은 상태를 전환할 수 있는 특수 버튼을 나타내는 기본 컨트롤입니다.

![Toggle 컨트롤](/img/editbar-basic-controls/toggle.png)

## 사용법 {#usage}

~~~jsx
{
    type: "toggle",
    key?: string | string[],

    hidden?: boolean, // 기본값: false
    disabled?: boolean, // 기본값: false
    full?: boolean, // 기본값: false

    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number,

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

`value` 속성이 지정되면, 컨트롤은 *boolean* 값과 *string* 값을 모두 사용할 수 있습니다. `value` 속성은 설정된 값을 적용된 속성의 값으로 지정하는 데 필요합니다. 자세한 내용은 [아래 예제를 확인하세요](#example).

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"toggle"`로 설정합니다
- `key` - (선택 사항) 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
- `hidden` - (선택 사항) 컨트롤의 숨김 여부를 지정합니다. 기본값은 *false*입니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 지정합니다. 기본값은 *false*입니다
- `full` - (선택 사항) toggle을 `width` 속성으로 지정된 너비까지 확장할지 여부를 지정합니다. 기본값은 *false*입니다
- `text` - (선택 사항) toggle 내부에 텍스트를 설정합니다. `offText` 속성과 함께 초기화되면, 지정된 텍스트는 선택된(눌린) 상태에서 렌더링됩니다
- `offText` - (선택 사항) toggle의 선택되지 않은(눌리지 않은) 상태에서 렌더링될 텍스트를 설정합니다
- `icon` - (선택 사항) toggle 내부에 표시되는 아이콘의 CSS 클래스를 설정합니다. `offIcon` 속성과 함께 초기화되면, 지정된 아이콘의 CSS 클래스는 toggle의 선택된(눌린) 상태에서 렌더링됩니다
- `offIcon` - (선택 사항) toggle의 선택되지 않은(눌리지 않은) 상태에서 렌더링될 아이콘의 CSS 클래스를 설정합니다
- `value` - (선택 사항) 선택된(눌린) 상태의 값을 지정합니다. 정의되지 않으면 컨트롤은 *boolean* 값과 함께 사용됩니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 셀과 Toggle 컨트롤 테두리 사이의 여백(padding)을 설정합니다

### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대한 서비스 속성 및 메서드를 재정의하지 않는 것이 좋습니다. 재정의할 경우 기능이 손상될 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 객체는 다음 속성을 가집니다:
    - `eventName`  - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 컨트롤입니다
            - `editor` - Diagram Editor의 객체입니다
            - `id` - Diagram 항목의 id입니다
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-toggle-events/)입니다
- `$handler` - (선택 사항) - [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 컨트롤의 `change` 이벤트와 DataCollection의 `change` 이벤트가 발생할 때 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `id` - Diagram 항목의 id입니다
        - `key` - 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트가 기반으로 하는 [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 컨트롤의 객체입니다
        - `value` - [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 컨트롤의 새 값입니다
- `$setValue` - (선택 사항) - 컨트롤 초기화 시 및 DataCollection에서 값이 변경될 때 [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트가 기반으로 하는 [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 컨트롤의 객체입니다
        - `value` - Diagram 항목의 값입니다
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성을 제외한 컨트롤의 구성입니다

## 예제 {#example}

~~~jsx {7-14} title="toggle에 boolean 값 적용하기"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "toggle",
                        key: ["header", "enable"],
                        icon: "dxi dxi-eye",
                        offIcon: "dxi dxi-eye-off",
                        text: "Visible",
                        offText: "Invisible"
                    }
                ]
            }
        }
    }
});
~~~

~~~jsx {7-12} title="설정된 값을 적용된 속성의 값으로 지정하기"
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggle",
                        key: "fontStyle",
                        value: "italic",
                        icon: "dxi dxi-format-italic"
                    }
                ]
            }
        }
    }
});
~~~
