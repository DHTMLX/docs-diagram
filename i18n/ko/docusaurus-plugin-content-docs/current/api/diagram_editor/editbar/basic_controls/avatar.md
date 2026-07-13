---
sidebar_label: Avatar
title: Editbar 기본 컨트롤 - Avatar
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Avatar 컨트롤을 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Avatar

@short: 이미지를 업로드하기 위한 기본 컨트롤입니다.

![Avatar 컨트롤](/img/editbar-basic-controls/avatar.png)

## 사용법 {#usage}

~~~jsx
{
    type: "avatar",
    key?: string, // 기본값은 "img"
    wrap?: boolean, // 기본값은 false
    target?: string,

    hidden?: boolean, // 기본값은 false
    disabled?: boolean, // 기본값은 false
    readOnly?: boolean, // 기본값은 false

    removeIcon?: boolean, // 기본값은 true
    circle?: boolean, // 기본값은 false
    icon?: string,
    placeholder?: string,
    preview?: string,
    alt?: string,
    size?: "small" | "medium" | "large" | number, // 기본값은 "medium"

    css?: string,
    width?: string | number | "content", // 기본값은 "content"
    height?: string | number | "content", // 기본값은 "content"
    padding?: string | number,

    // `wrap:true`인 경우 Fieldset의 label 속성을 확인하세요
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // 기본값은 "top"

    accept?: string, // 기본값은 "image/*"
    fieldName?: string, // 기본값은 "file"
    autosend?: boolean, // 기본값은 false
    params?: { [key: string]: any },
    headerParams?: { [key: string]: any },
    updateFromResponse?: boolean,  // 기본값은 true

    // 서비스 속성 및 메서드
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
~~~

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"avatar"`로 설정하세요
- `key` - (선택 사항) Diagram 항목 객체에서 지정/수정되는 속성의 이름입니다. 기본값은 `"img"`입니다
- `wrap` - (선택 사항) 외부 래핑을 표시할 수 있습니다. 기본값은 *false*입니다
- `target` - (선택 사항) 파일 업로드를 처리할 서버 측 스크립트의 URL을 설정합니다. 이 속성은 컨트롤을 통해 서버로 이미지를 전송할 때 필수입니다
:::note
`target` 속성을 통해 이미지를 로드하고 서버로 전송할 때, [*value* 객체](https://docs.dhtmlx.com/suite/form/api/avatar/api_avatar_properties/#description)가 서버로 전송된다는 점에 유의하세요. 파일 자체는 데이터셋에 *base64* 형식으로 기록됩니다. [서비스 메서드](#service-properties-and-methods)를 사용하여 이 로직을 재정의할 수 있습니다.
:::
- `hidden` - (선택 사항) 컨트롤을 숨길지 여부를 정의합니다. 기본값은 *false*입니다
- `disabled` - (선택 사항) 컨트롤을 활성화(*false*)할지 비활성화(*true*)할지를 정의합니다. 기본값은 *false*입니다
- `readOnly` - (선택 사항) 컨트롤의 읽기 전용 모드를 설정합니다. 기본값은 *false*입니다
- `removeIcon` - (선택 사항) UI를 통해 컨트롤을 지울 수 있도록 합니다. 기본값은 *true*입니다
- `circle` - (선택 사항) 컨트롤을 둥근 모서리로 표시하는 모드를 설정합니다. 기본값은 *false*입니다
- `icon` - (선택 사항) 업로드된 이미지가 없을 때 아이콘의 CSS 클래스를 설정할 수 있습니다. `preview` 속성과 함께 사용할 수 없습니다
- `placeholder` - (선택 사항) 업로드된 이미지가 없을 때 표시할 텍스트를 설정할 수 있습니다. `preview` 속성과 함께 사용할 수 없습니다
- `preview` - (선택 사항) 미리보기 이미지의 절대 경로를 지정합니다. 이미지가 업로드되지 않은 경우 미리보기 이미지가 표시됩니다
- `alt` - (선택 사항) &lt;img&gt; 태그의 속성을 설정합니다. 이미지가 업로드되지 않은 경우 표시되는 대체 텍스트입니다
- `size` - (선택 사항) 컨트롤의 세 가지 기본 크기 중 하나(`"small"` | `"medium"` | `"large"`)를 설정하거나 px 단위로 사용자 지정 크기를 적용할 수 있습니다. 기본값은 `"medium"`입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) Avatar 컨트롤의 셀과 테두리 사이의 여백을 설정합니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelWidth` - (선택 사항) 컨트롤의 레이블 너비를 설정합니다
- `labelPosition` - (선택 사항) 레이블의 위치(`"left"` | `"top"`)를 정의합니다. 기본값은 `"top"`입니다
- `accept` - (선택 사항) 선택한 파일의 유형/확장자를 지정할 수 있습니다. 기본값은 *"image/*"*입니다. [자세히 보기](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept)
- `fieldName` - (선택 사항) 서버로 전송되는 폼 데이터에서 파일 필드 이름을 설정합니다. 기본값은 `"file"`입니다
- `autosend` - (선택 사항) 추가된 파일의 자동 전송을 활성화/비활성화합니다. 기본값은 *false*입니다
- `params` - (선택 사항) XMLHttpRequest 전송을 위한 추가 매개변수를 추가합니다
- `headerParams` - (선택 사항) Request Headers에 대한 추가 매개변수를 제공합니다
- `updateFromResponse` - (선택 사항) 서버 응답의 데이터로 파일 속성을 업데이트합니다. 기본값은 *true*입니다

### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대해 서비스 속성 및 메서드를 재정의하지 않을 것을 강력히 권장합니다. 재정의할 경우 기능이 손상될 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 이 객체는 다음 속성을 가집니다:
    - `eventName`  - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 컨트롤
            - `editor` - Diagram Editor의 객체
            - `id` - Diagram 항목의 id
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-avatar-events/)
- `$handler` - (선택 사항) - [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 컨트롤의 `change` 이벤트 및 DataCollection의 `change` 이벤트가 발생할 때의 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `id` - Diagram 항목의 id
        - `key` - Diagram 항목 객체에서 지정/수정되는 속성의 이름입니다
        - `editor` - Diagram Editor의 객체
        - `control` - 컴포넌트가 빌드된 [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 컨트롤의 객체
        - `value` - [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 컨트롤의 새 값
- `$setValue` - (선택 사항) - 컨트롤 초기화 시점 및 DataCollection에서 값이 변경될 때 [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `editor` - Diagram Editor의 객체
        - `control` - 컴포넌트가 빌드된 [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 컨트롤의 객체
        - `value` - Diagram 항목의 값
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성을 제외한 컨트롤의 구성

## 예제 {#example}

~~~jsx {7-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                "img-card": [
                    {
                        type: "avatar",
                        accept: "image/*",
                        fieldName: "file",
                        target: "https://docs.dhtmlx.com/suite/backend/upload",
                        params: {
                            "firstCustomParam": "customValue"
                        },
                        headerParams: {
                            "firstCustomParam": "customValue"
                        },
                        autosend: true
                    }
                ]
            }
        }
    }
});
~~~
