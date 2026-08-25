---
sidebar_label: Combo
title: Editbar 기본 컨트롤 - Combo
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Combo 컨트롤에 대해 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Combo

@short: 옵션 세트가 있는 고급 편집 가능한 셀렉트 박스를 나타내는 기본 입력 컨트롤입니다.

![Combo control](/img/editbar-basic-controls/combo.png)

## 사용법 {#usage}

~~~jsx
{
    type: "combo",
    options: (object | string)[],
    key?: string | string[],
    wrap?: boolean, // 기본값: false

    css?: string,
    disabled?: boolean, // 기본값: false
    hidden?: boolean, // 기본값: false
    height?: string | number | "content", // 기본값: "content"
    width?: string | number | "content", // 기본값: "content"
    padding?: string | number,

    filter?: (item: any, input: string) => boolean,
    eventHandlers?: {
        [eventName: string]: {
            [className: string]: (event: Event, id: string | number) => void | boolean;
        };
    },
    itemHeight?: number | string, // 기본값: 32
    itemsCount?: boolean | ((count: number) => string),
    listHeight?: number | string, // 기본값: 224
    multiselection?: boolean, // 기본값: false
    placeholder?: string,
    readOnly?: boolean, // 기본값: false
    selectAllButton?: boolean, // 기본값: false
    template?: (item: object) => string,
    virtual?: boolean, // 기본값: false

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

Combo 내부의 옵션 구성 객체:

~~~jsx
{
    id: string | number,
    value: string | number
}
~~~

## 설명 {#description}

### Combo 속성 {#combo-properties}

#### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"combo"`로 설정합니다
- `options` - (필수) Combo 옵션의 배열입니다. 각 옵션은 *string* 또는 `key:value` 쌍으로 구성된 *object*로 설정할 수 있습니다 - [옵션의 속성 및 값](#option-properties)
- `key` - (선택 사항) 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
- `wrap` - (선택 사항) 외부 래핑 표시 여부를 정의합니다. 기본값은 *false*입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. 기본값은 *false*입니다
- `hidden` - (선택 사항) Combo의 숨김 여부를 정의합니다. 기본값은 *false*입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 셀과 Combo 컨트롤 테두리 사이의 여백을 설정합니다
- `filter` - (선택 사항) Combo 옵션을 필터링하기 위한 사용자 지정 함수를 설정합니다. [자세히 확인하세요](https://docs.dhtmlx.com/suite/combobox/customization/#custom-filter-for-options)
- `eventHandlers` - (선택 사항) Combo 항목의 사용자 지정 템플릿에 있는 HTML 요소에 이벤트 핸들러를 추가합니다. [자세히 확인하세요](https://docs.dhtmlx.com/suite/combobox/api/combobox_eventhandlers_config/)
- `itemHeight` - (선택 사항) 옵션 목록에서 셀의 높이를 설정합니다. 기본값은 *32*입니다
- `itemsCount` - (선택 사항) 선택된 옵션의 총 개수를 표시합니다
- `listHeight` - (선택 사항) 옵션 목록의 높이를 설정합니다. 기본값은 *224*입니다
- `multiselection` - (선택 사항) Combo에서 여러 옵션을 선택할 수 있도록 합니다. 기본값은 *false*입니다
- `placeholder` - (선택 사항) Combo 입력 필드에 placeholder를 설정합니다
- `readOnly` - (선택 사항) Combo를 읽기 전용으로 만듭니다(입력 필드에 직접 입력하지 않고 목록에서만 옵션을 선택할 수 있음). 기본값은 *false*입니다
- `selectAllButton` - (선택 사항) "Select All" 버튼의 표시 여부를 정의합니다. 기본값은 *false*입니다
- `template` - (선택 사항) 팝업 목록에서 옵션을 표시하는 템플릿을 설정합니다
- `virtual` - (선택 사항) 옵션 목록을 스크롤할 때 데이터를 동적으로 로드할 수 있도록 합니다. 기본값은 *false*입니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelPosition` - (선택 사항) 레이블의 위치를 정의합니다: `"left"` | `"top"`. 기본값은 `"top"`입니다
- `labelWidth` - (선택 사항) 컨트롤 레이블의 너비를 설정합니다

#### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대한 서비스 속성 및 메서드는 재정의하지 않는 것을 강력히 권장합니다. 재정의할 경우 해당 기능이 손상될 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 해당 객체는 다음 속성을 갖습니다:
    - `eventName` - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form 컨트롤입니다
            - `editor` - Diagram Editor의 객체입니다
            - `id` - Diagram 항목의 id입니다
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-combo-events/)입니다
- `$handler` - (선택 사항) - [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form 컨트롤의 `change` 이벤트 및 DataCollection의 `change` 이벤트 발생 시 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `id` - Diagram 항목의 id입니다
        - `key` - 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트의 기반이 되는 [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form 컨트롤의 객체입니다
        - `value` - [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form 컨트롤의 새 값입니다
- `$setValue` - (선택 사항) - 컨트롤 초기화 시 및 DataCollection에서 값이 변경될 때 [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트의 기반이 되는 [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form 컨트롤의 객체입니다
        - `value` - Diagram 항목의 값입니다
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성이 제외된 컨트롤의 구성입니다

### 옵션 속성 {#option-properties}

- `id` - `id` 속성은 반환되어 폼 데이터에 포함됩니다. 예기치 않은 동작을 방지하려면 이 속성을 항상 지정해야 합니다
- `value` - `value` 속성은 입력 필드에 표시됩니다

## 예제 {#example}

~~~jsx {7-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": undefined },
    { "id": "shape_3", "parent": "shape_1", "responsible": "Henry Bennet" }
]);
~~~

~~~jsx {7-14} title="다중 선택이 활성화된 경우"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        multiselection: true,
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": [] },
    { "id": "shape_3", "parent": "shape_1", "responsible": ["Henry Bennet", "Mike Frebel"] }
]);
~~~

~~~jsx {7-14} title="옵션을 객체로 설정하기"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        multiselection: true,
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", { id: 1, value: "Greg Mash" }]
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": [] },
    { "id": "shape_3", "parent": "shape_1", "responsible": ["Mike Frebel", 1] }
]);
~~~
