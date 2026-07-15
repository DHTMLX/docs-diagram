---
sidebar_label: Slider
title: Editbar 기본 컨트롤 - Slider
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Slider 컨트롤을 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 직접 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Slider

@short: 고정된 옵션 집합을 따라 핸들을 이동하여 숫자 값을 선택하는 기본 컨트롤입니다.

![Slider 컨트롤](/img/editbar-basic-controls/slider.png)

## 사용법 {#usage}

~~~jsx
{
    type: "slider",
    key?: string | string[],
    wrap?: boolean, // 기본값: false

    disabled?: boolean, // 기본값: false
    hidden?: boolean, // 기본값: false
    css?: string,
    padding?: string | number,
    height?: string | number | "content", // 기본값: "content"
    width?: string | number | "content", // 기본값: "content"

    inverse?: boolean, // 기본값: false
    majorTick?: number,
    max?: number, // 기본값: 100
    min?: number, // 기본값: 0
    mode?: "vertical" | "horizontal", // 기본값: "horizontal"
    range?: boolean, // 기본값: false
    step?: number, // 기본값: 1
    tick?: number,
    tickTemplate?: (position: number) => string,
    tooltip?: boolean, // 기본값: true

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

- `type` - (필수) 컨트롤의 유형입니다. `"slider"`로 설정합니다
- `key` - (선택 사항) 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
- `wrap` - (선택 사항) 외부 래핑(wrapping) 표시 여부를 설정합니다. 기본값은 *false*입니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 지정합니다. 기본값은 *false*입니다
- `hidden` - (선택 사항) 컨트롤의 숨김 여부를 지정합니다. 기본값은 *false*입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 셀과 slider 컨트롤 테두리 사이의 여백(padding)을 설정합니다
- `inverse` - (선택 사항) 반전된(inverse) slider 모드를 활성화/비활성화합니다. 기본값은 *false*입니다
- `majorTick` - (선택 사항) slider 눈금에 숫자 값을 렌더링하는 간격을 설정합니다
- `max` - (선택 사항) slider의 최댓값입니다. 기본값은 *100*입니다
- `min` - (선택 사항) slider의 최솟값입니다. 기본값은 *0*입니다
- `mode` - (선택 사항) slider 눈금의 방향입니다. 기본값은 `"horizontal"`입니다
- `range` - (선택 사항) slider에서 값의 범위 선택 여부를 활성화/비활성화합니다. 기본값은 *false*입니다
- `step` - (선택 사항) slider 핸들이 이동하는 단위(step)입니다. 기본값은 *1*입니다
- `tick` - (선택 사항) slider 눈금을 렌더링하기 위한 단계 간격을 설정합니다
- `tickTemplate` - (선택 사항) 눈금에 값을 렌더링하기 위한 템플릿을 설정합니다
- `tooltip` - (선택 사항) slider 핸들 위에 마우스를 올렸을 때 눈금 값이 포함된 안내 메시지를 활성화합니다. 기본값은 *true*입니다

### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대한 서비스 속성 및 메서드를 재정의하지 않는 것이 좋습니다. 재정의할 경우 기능이 손상될 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 객체는 다음 속성을 가집니다:
    - `eventName`  - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 컨트롤입니다
            - `editor` - Diagram Editor의 객체입니다
            - `id` - Diagram 항목의 id입니다
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-slider-events/)입니다
- `$handler` - (선택 사항) - [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 컨트롤의 `change` 이벤트와 DataCollection의 `change` 이벤트가 발생할 때 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `id` - Diagram 항목의 id입니다
        - `key` - 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트가 기반으로 하는 [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 컨트롤의 객체입니다
        - `value` - [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 컨트롤의 새 값입니다
- `$setValue` - (선택 사항) - 컨트롤 초기화 시 및 DataCollection에서 값이 변경될 때 [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트가 기반으로 하는 [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 컨트롤의 객체입니다
        - `value` - Diagram 항목의 값입니다
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성을 제외한 컨트롤의 구성입니다

## 예제 {#example}

~~~jsx {7-18}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $lineTitle: [
                    {
                        type: "slider",
                        key: "distance",
                        label: "Distance",
                        wrap: true,
                        min: 0,
                        max: 100,
                        step: 1,
                        tick: 5,
                        majorTick: 10,
                        tickTemplate: value => value
                    },
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1", "type": "rectangle", "text": "shape" },
    { "id": "shape_2","type": "rectangle", "text": "shape", "x": 400 },
    { "id": "line", "type": "line", "from": "shape_1", "to": "shape_2" },
    { "type": "lineTitle", "parent": "line", "text": "Title", "distance": 50 }
]);
~~~
