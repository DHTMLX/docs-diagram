---
sidebar_label: Button
title: Editbar 기본 컨트롤 - Button
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Button 컨트롤을 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Button

@short: 아이콘을 가질 수 있는 기본 버튼 컨트롤입니다.

![Button 컨트롤](/img/editbar-basic-controls/button.png)

## 사용법 {#usage}

~~~jsx
{
    type: "button",
    text?: string,

    css?: string,
    disabled?: boolean, // 기본값은 false
    hidden?: boolean, // 기본값은 false
    height?: string | number | "content", // 기본값은 "content"
    width?: string | number | "content", // 기본값은 "content"
    padding?: string | number,

    // 버튼 모양
    circle?: boolean, // 기본값은 false
    color?: "danger" | "secondary" | "primary" | "success", // 기본값은 "primary"
    full?: boolean, // 기본값은 false
    icon?: string,
    size?: "small" | "medium", // 기본값은 "medium"
    view?: "flat" | "link", // 기본값은 "flat"

    // 서비스 속성 및 메서드
    $on?: { [eventName: string]: function },
    $layout?: function
}
~~~

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"button"`으로 설정하세요
- `text` - (선택 사항) 버튼의 텍스트 레이블입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `disabled` - (선택 사항) 컨트롤을 활성화(*false*)할지 비활성화(*true*)할지를 정의합니다. 기본값은 *false*입니다
- `hidden` - (선택 사항) 컨트롤을 숨길지 여부를 정의합니다. 기본값은 *false*입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 버튼 컨트롤의 셀과 테두리 사이의 여백을 설정합니다
- `circle` - (선택 사항) 버튼의 모서리를 둥글게 만듭니다. 기본값은 *false*입니다
- `color` - (선택 사항) 버튼의 색상 구성(`"danger"` | `"secondary"` | `"primary"` | `"success"`)을 정의합니다. 기본값은 `"primary"`입니다
- `full` - (선택 사항) 버튼을 Editbar의 전체 너비로 확장합니다. 기본값은 *false*입니다
- `icon` - (선택 사항) 버튼 내부에 표시되는 아이콘의 CSS 클래스를 설정합니다
- `size` - (선택 사항) 버튼의 크기(`"small"` | `"medium"`)를 정의합니다. 기본값은 `"medium"`입니다
- `view` - (선택 사항) 버튼의 모양(`"flat"` | `"link"`)을 정의합니다. 기본값은 `"flat"`입니다

### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대해 서비스 속성 및 메서드를 재정의하지 않을 것을 강력히 권장합니다. 재정의할 경우 기능이 손상될 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 이 객체는 다음 속성을 가집니다:
    - `eventName`  - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [Button](https://docs.dhtmlx.com/suite/form/button/) Form 컨트롤
            - `editor` - Diagram Editor의 객체
            - `id` - Diagram 항목의 id
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-button-events/)
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Button](https://docs.dhtmlx.com/suite/form/button/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성을 제외한 컨트롤의 구성

## 예제 {#example}

~~~jsx {8-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "input", label: "Text", placeholder: "Push the button", key: "text" },
                    {
                        type: "button",
                        full: true,
                        text: "Change shape text",
                        color: "danger",
                        $on: {
                            click: ({ id, editor }) => {
                                editor.diagram.data.update(id, {
                                    text: "New text"
                                });
                            }
                        }
                    }
                ]
            }
        }
    }
});
~~~
