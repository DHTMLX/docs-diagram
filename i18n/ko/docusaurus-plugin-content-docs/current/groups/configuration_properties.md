---
sidebar_label: Group 속성
title: Group 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Group 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보십시오.
---

# Group 속성 {#group-properties}

:::note
색상 값은 HEX 형식으로 지정합니다.
:::

### 사용법 {#usage}

~~~jsx
const data = [
    // group 객체
    {
        type: "$group",
        id?: string | number,
        x?: number,
        y?: number,
        width: number,
        height: number,
        groupChildren?: array,
        open?: boolean, // 기본값은 true
        fixed?: boolean, // 기본값은 false
        style?: {
            strokeWidth?: number, // 기본값은 1
            stroke?: string, // 기본값은 "#DEDEDE"
            fill?: string,
            overFill?: string,
            partiallyFill?: string
        },
        exitArea?: {
            // 기본값은 "unbound"
            groupBehavior?: "unbound" | "boundNoBorderExtension" | "boundBorderExtension",
            padding?: number
        },
        header?: {
            height?: number, // 기본값은 40
            fill?: string,
            text?: string,
            fontSize?: number, // 기본값은 14
            lineHeight?: number, // 기본값은 14
            textAlign?: "left" | "center" | "right", // 기본값은 "center"
            textVerticalAlign?: "top" | "center" | "bottom", // 기본값은 "center"
            fontStyle?: "normal" | "italic" | "oblique", // 기본값은 "normal"
            fontColor?: string, // 기본값은 "#4C4C4C"
            fontWeight?: string, // 기본값은 "500"
            iconColor?: string, // 기본값은 "#808080"
            position?: "top" | "bottom" | "left" | "right", // 기본값은 "top"
            editable?: boolean, // 기본값은 true
            closable?: boolean, // 기본값은 false
            enable?: boolean // 기본값은 true
        },
        [key: string]?: any
    },
    // 그 밖의 group 객체
];
~~~

### 설명 {#description}

group 객체에는 group의 위치와 모양을 구성할 수 있는 다음과 같은 구성 속성 목록이 포함됩니다:

- `type` - (필수) 요소의 유형, "$group"으로 설정합니다
- `id` - (선택 사항) group의 고유 id
- `x` - (선택 사항) group 위치의 x 좌표
- `y` - (선택 사항) group 위치의 y 좌표
- `width` - (필수) 헤더를 포함한 group의 너비 (*position: left/right*)
- `height` - (필수) 헤더를 포함한 group의 높이 (*position: top/bottom*)
- `groupChildren` - (선택 사항) group의 1단계 하위 항목의 id 배열
- `open` - (선택 사항) group이 펼쳐진(*true*, 기본값) 상태로 초기화되는지 접힌(*false*) 상태로 초기화되는지를 정의합니다
:::tip
`open` 속성은 `header`가 `closable` 속성과 함께 초기화된 경우에 작동합니다
:::
- `fixed` - (선택 사항) group을 이동하고 크기를 조정하는 기능을 활성화/비활성화합니다; 기본값은 *false*입니다
- `style` - (선택 사항) group의 스타일 설정이 포함된 객체입니다. 이 객체에는 다음 속성이 포함될 수 있습니다:
    - `strokeWidth` - (선택 사항) group 테두리의 너비, 기본값은 1입니다
    - `stroke` - (선택 사항) group 테두리의 색상, 기본값은 "#DEDEDE"입니다
    - `fill` - (선택 사항) group의 배경 색상
    - `overFill` - (선택 사항) 사용자가 항목을 잡고 group 안팎으로 이동시킬 때의 group 배경 색상 *(항목 전체가 group 안에 있는 경우에 한함)*
    - `partiallyFill` - (선택 사항) 사용자가 항목을 잡고 group 안팎으로 이동시킬 때의 group 배경 색상 *(항목의 일부가 group 밖에 있고 `exitArea` 속성을 통해 다른 설정이 정의되지 않은 경우에 한함)*
- `exitArea` - (선택 사항) 사용자가 항목을 group 밖으로 드래그할 때 항목에 적용될 설정이 포함된 객체입니다 (*group의 1단계 하위 항목에만 적용됩니다*). 이 객체에는 다음 속성이 포함될 수 있습니다:
    - `groupBehavior` - (선택 사항) 사용자가 group 밖으로 하위 항목을 이동시킬 때의 동작:
        - `"unbound"` (기본값) - 사용자는 항목을 group 안팎으로 이동시킬 수 있습니다
        - `"boundNoBorderExtension"` - 사용자는 항목을 group 안으로 이동시킬 수 있지만, 항목이 group 안에 놓인 경우 group 밖으로 드래그할 수 없습니다. 사용자가 항목을 group 밖으로 드래그하려고 해도 group의 테두리는 확장되지 않습니다
        - `"boundBorderExtension"` - 사용자는 항목을 group 안으로 이동시킬 수 있지만, 항목이 group 안에 놓인 경우 group 밖으로 드래그할 수 없습니다. 사용자가 항목을 group 밖으로 드래그하려고 하면 group의 테두리가 확장됩니다 <br/>**관련 샘플**: [Diagram 에디터. 기본 모드. Group과 도형의 상호작용](https://snippet.dhtmlx.com/4gxy38ek)
    - `padding` - (선택 사항) 항목을 group 안으로 이동시킬 때 group과 항목 가장자리 사이의 여백을 정의합니다
    :::tip
    `padding` 속성은 `groupBehavior`가 `"boundNoBorderExtension"` 또는 `"boundBorderExtension"`으로 설정된 경우에 사용할 수 있습니다
    :::
- `header` - (선택 사항) group 헤더의 구성 속성이 포함된 객체입니다. 속성은 다음과 같습니다:
    - `height` - (선택 사항) 헤더의 높이, 기본값은 40입니다
    - `fill` - (선택 사항) 헤더의 배경 색상
    - `text` - (선택 사항) 헤더에 표시될 텍스트
    - `fontSize` - (선택 사항) 픽셀 단위의 글꼴 크기, 기본값은 14입니다
    - `lineHeight` - (선택 사항) 줄 높이, 기본값은 14입니다
    - `textAlign` - (선택 사항) 헤더 내 텍스트의 정렬: `"left"`, `"center"`(기본값), `"right"`
    - `textVerticalAlign` - (선택 사항) 헤더 내 텍스트의 수직 정렬: `"top"`, `"center"`(기본값), `"bottom"`
    - `fontStyle` - (선택 사항) 텍스트 글꼴의 스타일: `"normal"` (기본값), `"italic"`, `"oblique"`
    - `fontColor` - (선택 사항) 텍스트 글꼴의 색상, 기본값은 "#4C4C4C"입니다
    - `fontWeight` - (선택 사항) 텍스트 글꼴 굵기, 가능한 값은 다음과 같습니다: `"normal"`, `"bold"`, `"bolder"`, `"lighter"`, `"100"`~`"900"` 값이며, `"400"`은 normal과 동일하고, `"600"` 이상은 가장 굵은 글꼴입니다; 기본값은 `"500"`입니다
    - `iconColor` - (선택 사항) 헤더 아이콘의 색상, 기본값은 "#808080"입니다
    - `position` - (선택 사항) group 헤더의 위치 지정: `"top"` (기본값) | `"bottom"` | `"left"` | `"right"`
    - `editable` - (선택 사항) 더블 클릭하여 헤더 텍스트를 편집하는 기능을 활성화/비활성화합니다; 기본값은 *true*입니다
    - `closable` - (선택 사항) group을 펼치거나 접는 아이콘을 표시/숨김 처리합니다; 기본값은 *false*입니다
    - `enable` - (선택 사항) group의 헤더를 표시/숨김 처리합니다; 기본값은 *true*입니다
- `key` - (선택 사항) 내부적으로 구현된 사용자 지정 로직을 가진 커스텀 속성

### 예제 {#example}

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "Top and collapsed header with tеxt alignment",
            editable: true,
            closable: true,
            textAlign: "left", // "left", "center", "right"
            textVerticalAlign: "center", // "top", "center", "bottom"
        },
      	// group의 하위 항목
        groupChildren: [1.1, 1.2],
        open: false
    },
  	// group에 넣을 도형을 구성합니다
    { type: "rectangle", id: 1.1, x: 50, y: 75, text: "Shape 1.1" },
    { type: "rectangle", id: 1.2, x: 200, y: 75, text: "Shape 1.2" }
];
~~~

**관련 문서**: [Group 구성하기](/groups/)

## "project" 객체 전용 속성 {#properties-specific-for-project-object}

`"project"` 객체는 작업과 마일스톤을 위한 컨테이너로 사용되며, [group](/groups/)처럼 작동하여 다양한 중첩 수준의 PERT 차트를 생성할 수 있게 해주고 시각적 그룹화 기능을 제공합니다.

### 사용법 {#usage}

~~~jsx
const data = [
    // project 객체
    {
        type: "project",
        id: string | number,
        parent?: string | number | null,
        text?: string, // header.text 속성을 설정합니다
        open?: boolean,

        // 자동으로 생성됩니다
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        groupChildren?: (string | number)[],
        style?: {
            fill?: string, // 기본값은 "#20B56D08"
            stroke?: string, // 기본값은 "#20B56D33"
            borderStyle?: string, // 기본값은 "dashed"
        },
        header?: {
            height?: number, // 기본값은 40
            text?: string, // text 속성에 의해 자동으로 생성됩니다
            closable?: boolean, // 기본값은 false
            enable?: boolean, // 기본값은 true
            fill?: string // 기본값은 "inherit"
        }
    },
    // 그 밖의 project 객체
]
~~~

### 설명 {#description}

`"project"` 객체를 위한 데이터 세트를 준비할 때 다음 구성 속성을 사용할 수 있습니다:

- `type` - (필수) 요소의 유형, `"project"`로 설정합니다
- `id` - (선택 사항) project의 고유 id
- `parent` - (선택 사항) project 부모의 id
- `text` - (선택 사항) project에 대한 설명
- `open` - (선택 사항) project가 펼쳐진(*true*, 기본값) 상태로 초기화되는지 접힌(*false*) 상태로 초기화되는지를 정의합니다

아래 속성은 자동으로 생성됩니다. 이 속성들은 렌더링 중에 계산되므로 직접 지정해서는 안 됩니다.

- `x` - (선택 사항) project 위치의 x 좌표
- `y` - (선택 사항) project 위치의 y 좌표
- `width` - (필수) 헤더를 포함한 project의 너비 (*position: left/right*)
- `height` - (필수) 헤더를 포함한 project의 높이 (*position: top/bottom*)
- `groupChildren` - (선택 사항) project의 1단계 하위 항목의 id 배열
- `style` - (선택 사항) project의 스타일 설정이 포함된 객체입니다. 이 객체에는 다음 속성이 포함될 수 있습니다:
    - `fill` - (선택 사항) project의 배경 색상
    - `stroke` - (선택 사항) project 테두리의 색상
    - `borderStyle` - (선택 사항) project 테두리의 스타일
- `header` - (선택 사항) project 헤더의 구성 속성이 포함된 객체입니다. 속성은 다음과 같습니다:
    - `height` - (선택 사항) 헤더의 높이, 기본값은 40입니다
    - `text` - (선택 사항) 헤더에 표시될 텍스트 (`text` 속성에 의해 자동으로 생성됨)
    - `closable` - (선택 사항) group을 펼치거나 접는 아이콘을 표시/숨김 처리합니다; 기본값은 *false*입니다
    - `enable` - (선택 사항) project의 헤더를 표시/숨김 처리합니다; 기본값은 *true*입니다
    - `fill` - (선택 사항) 헤더의 배경 색상


### 예제 {#example}

~~~jsx
const data = [
    {
        "id": "4.2",
        "text": "QA Testing",
        "type": "project",
        "parent": "4",
        "start_date": new Date(2026, 1, 18),
        "duration": 3,
        "progress": 0,
        "open": true
    },
    {
        "id": "4.2.1",
        "text": "Functional Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 18),
        "duration": 2
    },
    {
        "id": "4.2.2",
        "text": "Usability Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 20),
        "duration": 1
    }
];
~~~

**관련 문서**: [PERT 모드에서 도형 그룹화하기](/groups/#grouping-shapes-in-the-pert-mode)
