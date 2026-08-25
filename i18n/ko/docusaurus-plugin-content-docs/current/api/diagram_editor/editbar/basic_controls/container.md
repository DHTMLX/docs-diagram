---
sidebar_label: Container
title: Editbar 기본 컨트롤 - Container
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Container 컨트롤에 대해 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Container

@short: HTML 코드를 첨부하기 위한 기본 컨트롤입니다.

![Container control](/img/editbar-basic-controls/container.png)

## 사용법 {#usage}

~~~jsx
{
    type: "container",
    html: HTMLElement | string,
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

    // 서비스 메서드
    $layout?: function
}
~~~

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"container"`로 설정합니다
- `html` - (필수) 컨트롤의 HTML 콘텐츠입니다
- `wrap` - (선택 사항) 외부 래핑 표시 여부를 정의합니다. 기본값은 *false*입니다
- `css` - (선택 사항) 컨트롤 문자열에 스타일 클래스를 추가합니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. 기본값은 *false*입니다
- `hidden` - (선택 사항) 컨트롤의 숨김 여부를 정의합니다. 기본값은 *false*입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 셀과 컨트롤 테두리 사이의 여백을 설정합니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelWidth` - (선택 사항) 컨트롤 레이블의 너비를 설정합니다
- `labelPosition` - (선택 사항) 레이블의 위치를 정의합니다: `"left"` | `"top"`. 기본값은 `"top"`입니다

#### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대한 서비스 속성 및 메서드는 재정의하지 않는 것을 강력히 권장합니다. 재정의할 경우 해당 기능이 손상될 수 있습니다.
:::

- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Container](https://docs.dhtmlx.com/suite/form/container/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성이 제외된 컨트롤의 구성입니다

## 예제 {#example}

~~~jsx {7-18}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "container",
                        html: `
                            <h3>DHTMLX Diagram</h3>
                            <p>This is an example of simple customization of the editing panel using the container control.</p>
                            <p>You can also use this control to create your own controls.</p>
                            <img
                                style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto'
                                src='https://snippet.dhtmlx.com/codebase/data/common/img/01/developer-01.svg'
                            >
                        `
                    }
                ]
            }
        }
    }
});
~~~
