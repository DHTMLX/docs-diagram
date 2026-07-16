---
sidebar_label: Swimlane 속성
title: Swimlane 및 Swimlane 셀 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Swimlane 및 Swimlane 셀 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보십시오.
---

# Swimlane 및 Swimlane 셀 속성 {#swimlane-and-swimlane-cell-properties}

:::note
색상 값은 HEX 형식으로 지정합니다.
:::

## Swimlane의 속성 {#properties-of-a-swimlane}

### 사용법 {#usage}

~~~jsx
const data = [
    // swimlane 객체
    {
        type: "$swimlane",
        id?: string | number,
        width: number,
        height: number,
        x?: number,
        y?: number,
        layout: array,
        fixed?: boolean,
        open?: boolean, // 기본값은 true
        style?: {
            strokeWidth?: number, // 기본값은 1
            stroke?: string,
            fill?: string
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
            position?: "top" | "bottom" | "left" | "right",
            editable?: boolean, // 기본값은 true
            closable?: boolean, // 기본값은 false
            enable?: boolean // 기본값은 true
        },
        subHeaderRows?: {
            height?: number | string, // 기본값은 40
            position?: "left" | "right",
            enable?: boolean, // 기본값은 true
            fill?: string,
            fontSize?: number, // 기본값은 14
            lineHeight?: number, // 기본값은 14
            textAlign?: "left" | "center" | "right", // 기본값은 "center"
            textVerticalAlign?: "top" | "center" | "bottom", // 기본값은 "center"
            fontStyle?: "normal" | "italic" | "oblique", // 기본값은 "normal"
            fontColor?: string, // 기본값은 "#4C4C4C"
            fontWeight?: string, // 기본값은 "500"
            iconColor?: string, // 기본값은 "#808080"
            editable?: boolean, // 기본값은 true
            headers?: [
                // header 객체
                {
                    id?: string,
                    text: string,
                    fill?: string,
                    fontSize?: number, // 기본값은 14
                    lineHeight?: number, // 기본값은 14
                    textAlign?: "left" | "center" | "right", // 기본값은 "center"
                    textVerticalAlign?: "top" | "center" | "bottom", // 기본값은 "center"
                    fontStyle?: "normal" | "italic" | "oblique", // 기본값은 "normal"
                    fontColor?: string, // 기본값은 "#4C4C4C"
                    fontWeight?: string, // 기본값은 "500"
                    iconColor?: string, // 기본값은 "#808080"
                    editable?: boolean // 기본값은 true
                },
                // 그 밖의 header 객체
            ]
        },
        subHeaderCols?: {
            position?: "top" | "bottom",
            // ... 그 밖의 속성은 subHeaderRows의 속성과 동일합니다
        },
        [key: string]?: any
    }
    // 그 밖의 swimlane 객체
];
~~~

### 설명 {#description}

각 swimlane 객체에는 다음 구성 속성이 포함될 수 있습니다:

- `type` - (필수) 요소의 유형, "$swimlane"으로 설정합니다
- `id` - (선택 사항) swimlane의 고유 id
- `width` - (필수) 헤더를 포함한 swimlane의 너비 (*position: left/right*)
- `height` - (필수) 헤더를 포함한 swimlane의 높이 (*position: top/bottom*)
- `x` - (선택 사항) swimlane 위치의 x 좌표
- `y` - (선택 사항) swimlane 위치의 y 좌표
- `layout` - (필수) swimlane 셀의 행렬 표현이 담긴 배열
- `fixed` - (선택 사항) swimlane을 이동하고 크기를 조정하는 기능을 활성화/비활성화합니다; 기본값은 *false*입니다
- `open` - (선택 사항) swimlane이 펼쳐진(*true*, 기본값) 상태로 초기화되는지 접힌(*false*) 상태로 초기화되는지를 정의합니다
:::tip
`open` 속성은 `header`가 `closable` 속성과 함께 초기화된 경우에 작동합니다
:::
- `style` - (선택 사항) swimlane의 스타일 설정이 포함된 객체입니다. 이 객체에는 다음 속성이 포함될 수 있습니다:
    - `strokeWidth` - (선택 사항) swimlane 테두리의 너비, 기본값은 1입니다
    - `stroke` - (선택 사항) swimlane 테두리의 색상, 기본값은 "#DEDEDE"입니다
    - `fill` - (선택 사항) swimlane의 모든 셀에 대한 배경 색상
- `header` - (선택 사항) swimlane 헤더의 구성 속성이 포함된 객체입니다. 속성은 다음과 같습니다:
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
    - `position` - (선택 사항) swimlane 헤더의 위치 지정: `"top"` (기본값) | `"bottom"` | `"left"` | `"right"`
    - `editable` - (선택 사항) 더블 클릭하여 헤더 텍스트를 편집하는 기능을 활성화/비활성화합니다; 기본값은 *true*입니다
    - `closable` - (선택 사항) swimlane을 펼치거나 접는 아이콘을 표시/숨김 처리합니다; 기본값은 *false*입니다
    - `enable` - (선택 사항) swimlane의 헤더를 표시/숨김 처리합니다; 기본값은 *true*입니다
- `subHeaderRows` - (선택 사항) swimlane의 왼쪽/오른쪽 서브헤더 구성 설정이 포함된 객체입니다. 이 객체에는 다음 속성이 포함됩니다:
    - `height` - (선택 사항) 서브헤더의 높이, 기본값은 40입니다
    - `position` - (선택 사항) 서브헤더의 위치 지정: `"left"` | `"right"`
    - `enable` - (선택 사항) swimlane의 서브헤더를 표시/숨김 처리합니다; 기본값은 *true*입니다
    - `fill` - (선택 사항) 서브헤더의 배경 색상
    - `fontSize` - (선택 사항) 픽셀 단위의 글꼴 크기, 기본값은 14입니다
    - `lineHeight` - (선택 사항) 줄 높이, 기본값은 14입니다
    - `textAlign` - (선택 사항) 서브헤더 내 텍스트의 정렬: `"left"`, `"center"`(기본값), `"right"`
    - `textVerticalAlign` - (선택 사항) 서브헤더 내 텍스트의 수직 정렬: `"top"`, `"center"`(기본값), `"bottom"`
    - `fontStyle` - (선택 사항) 텍스트 글꼴의 스타일: `"normal"` (기본값), `"italic"`, `"oblique"`
    - `fontColor` - (선택 사항) 텍스트 글꼴의 색상, 기본값은 "#4C4C4C"입니다
    - `fontWeight` - (선택 사항) 텍스트 글꼴 굵기, 가능한 값은 다음과 같습니다: `"normal"`, `"bold"`, `"bolder"`, `"lighter"`, `"100"`~`"900"` 값이며, `"400"`은 normal과 동일하고, `"600"` 이상은 가장 굵은 글꼴입니다; 기본값은 `"500"`입니다
    - `iconColor` - (선택 사항) 서브헤더 아이콘의 색상, 기본값은 "#808080"입니다
    - `editable` - (선택 사항) 더블 클릭하여 서브헤더 텍스트를 편집하는 기능을 활성화/비활성화합니다; 기본값은 *true*입니다
    - `headers` - (선택 사항) 서브헤더 객체의 배열입니다. 각 객체에는 다음 속성이 포함될 수 있습니다:
        - `id` - (선택 사항) 서브헤더의 id
        - `text` - (필수) 서브헤더에 표시될 텍스트
        - `fill` - (선택 사항) 서브헤더의 배경 색상
        - `fontSize` - (선택 사항) 픽셀 단위의 글꼴 크기, 기본값은 14입니다
        - `lineHeight` - (선택 사항) 줄 높이, 기본값은 14입니다
        - `textAlign` - (선택 사항) 서브헤더 내 텍스트의 정렬: `"left"`, `"center"`(기본값), `"right"`
        - `textVerticalAlign` - (선택 사항) 서브헤더 내 텍스트의 수직 정렬: `"top"`, `"center"`(기본값), `"bottom"`
        - `fontStyle` - (선택 사항) 텍스트 글꼴의 스타일: `"normal"` (기본값), `"italic"`, `"oblique"`
        - `fontColor` - (선택 사항) 텍스트 글꼴의 색상, 기본값은 "#4C4C4C"입니다
        - `fontWeight` - (선택 사항) 텍스트 글꼴 굵기, 가능한 값은 다음과 같습니다: `"normal"`, `"bold"`, `"bolder"`, `"lighter"`, `"100"`~`"900"` 값이며, `"400"`은 normal과 동일하고, `"600"` 이상은 가장 굵은 글꼴입니다; 기본값은 `"500"`입니다
        - `iconColor` - (선택 사항) 서브헤더 아이콘의 색상, 기본값은 "#808080"입니다
        - `editable` - (선택 사항) 더블 클릭하여 서브헤더 텍스트를 편집하는 기능을 활성화/비활성화합니다; 기본값은 *true*입니다
- `subHeaderCols` - (선택 사항) swimlane의 위쪽/아래쪽 서브헤더 구성 설정이 포함된 객체입니다. 이 객체에는 다음 속성이 포함됩니다:
    - `position` - (선택 사항) 서브헤더의 위치 지정: `"top"` | `"bottom"`
    - `subHeaderCols`의 그 밖의 속성은 `subHeaderRows`의 속성과 동일합니다 (위의 상세 내용을 확인하십시오)
- `key` - (선택 사항) 내부적으로 구현된 사용자 지정 로직을 가진 커스텀 속성

### 예제 {#example}

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template"
        },
        "layout": [
           [1, 2, 3, 4]
        ],
        "subHeaderCols": {
            "headers": [
                {
                    "text": "September",
                    "fill": "#f35c4f66"
                },
                {
                    "text": "October",
                    "fill": "#9b60f866"
                },
                {
                    "text": "November",
                    "fill": "#ffae1266"
                },
                {
                    "text": "December",
                    "fill": "#3cc97a66"
                }
            ]
        }
    }
];
~~~

## Swimlane 셀의 속성 {#properties-of-a-swimlane-cell}

### 사용법 {#usage}

~~~jsx
const data = [
    // swimlane 셀 객체
    {
        type: "$sgroup",
        id?: string | number,
        groupChildren?: array,
        style?: {
            fill?: string,
            overFill?: string,
            partiallyFill?: string
        },
        exitArea?: {
            groupBehavior?: "unbound" | "boundNoBorderExtension", // 기본값은 "unbound"
            padding?: number
        }
    },
    // 그 밖의 swimlane 셀 객체
];
~~~

### 설명 {#description}

swimlane 셀의 구성 속성은 아래와 같습니다:

- `type` - (필수) swimlane 셀의 유형, "$sgroup"으로 설정합니다
- `id` - (선택 사항) swimlane 셀의 고유 id
- `groupChildren` - (선택 사항) 셀의 1단계 하위 항목의 id 배열
- `style` - (선택 사항) 셀의 스타일 설정이 포함된 객체입니다. 이 객체에는 다음 속성이 포함될 수 있습니다:
    - `fill` - (선택 사항) 셀의 배경 색상
    - `overFill` - (선택 사항) 사용자가 항목을 잡고 셀 안팎으로 이동시킬 때의 셀 배경 색상 *(항목 영역의 75% 이상이 셀 안에 있는 경우에 한함)*
    - `partiallyFill` - (선택 사항) 사용자가 항목을 잡고 셀 안팎으로 이동시킬 때의 셀 배경 색상 *(항목 영역의 75% 이상이 셀 밖에 있고 `exitArea` 속성을 통해 다른 설정이 정의되지 않은 경우에 한함)*
- `exitArea` - (선택 사항) 사용자가 항목을 셀 밖으로 드래그할 때 항목에 적용될 설정이 포함된 객체입니다 (*셀의 1단계 하위 항목에만 적용됩니다*). 이 객체에는 다음 속성이 포함될 수 있습니다:
    - `groupBehavior` - (선택 사항) 사용자가 셀 밖으로 하위 항목을 이동시킬 때의 동작:
        - `"unbound"` (기본값) - 사용자는 항목을 셀 안팎으로 이동시킬 수 있습니다
        - `"boundNoBorderExtension"` - 사용자는 항목을 셀 안으로 이동시킬 수 있지만, 항목이 셀 안에 놓인 경우 셀 밖으로 드래그할 수 없습니다. 사용자가 항목을 셀 밖으로 드래그하려고 해도 셀의 테두리는 확장되지 않습니다
    - `padding` - (선택 사항) 항목을 셀 안으로 이동시킬 때 셀과 항목 가장자리 사이의 여백을 정의합니다. <br/>
    :::tip
    `padding` 속성은 `groupBehavior`가 `"boundNoBorderExtension"`으로 설정된 경우에 사용할 수 있습니다
    :::

### 예제 {#example}

~~~jsx
const data = [
  // swimlane 구성하기
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "layout": [
            [1, 2, 3, 4]
        ]
    },
    // swimlane 셀 구성하기
    {
        "id": 1,
        "type": "$sgroup",
        "groupChildren": ["s1"],
        "style": {
            "fill": "#D4DAE4"
        },
        "x": 0,
        "y": 80
    },
    // 셀에 넣을 도형을 구성합니다
    {
        "id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
    }
];
~~~

**관련 문서**: [Swimlane 구성하기](/swimlanes/)

**관련 예제**:

- [Diagram. 기본 모드. 게임 레벨과 위치](https://snippet.dhtmlx.com/1h4j9gb3?tag=diagram&mode=wide)
- [Diagram. 기본 모드. Swimlane 템플릿](https://snippet.dhtmlx.com/z6x5m3gb?tag=diagram&mode=wide)
- [Diagram. 기본 모드. Waterfall 다이어그램 템플릿](https://snippet.dhtmlx.com/k5vlvj8i?tag=diagram&mode=wide)
- [Diagram. 기본 모드. 아이젠하워 매트릭스 예제](https://snippet.dhtmlx.com/yfvccvc4?mode=wide)<br/>[DHTMLX로 JavaScript 아이젠하워 매트릭스를 만드는 방법](https://dhtmlx.com/blog/build-javascript-eisenhower-matrix-dhtmlx/) 문서에서 자세한 내용을 확인하십시오
