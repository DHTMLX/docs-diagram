---
sidebar_label: Swimlanes
title: Swimlanes
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Swimlane에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보십시오.
---

# Swimlanes {#swimlanes}

## Swimlane 개요 {#swimlane-overview}

Swimlane은 세로 또는 가로로 배열된 셀(또는 레인)로 구성된 Diagram의 직사각형 요소를 나타냅니다. 각 셀(*type: "$sgroup"*)에는 도형이나 group과 같은 하위 항목이 포함될 수 있습니다.

:::note
Swimlane은 Diagram/Diagram Editor의 기본 모드(type: `"default"`)에서만 사용할 수 있습니다.
:::

<iframe src="https://snippet.dhtmlx.com/z6x5m3gb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

Swimlane은 모든 프로세스(비즈니스, 제조, 서비스 등 어떤 프로세스든)나 그 개별 부분을 처음부터 끝까지 시각화하는 데 도움이 됩니다.

## Swimlane 생성하기 {#creating-swimlanes}

swimlane을 생성하려면, 다이어그램에 로드할 데이터 세트를 준비하는 동안 swimlane 객체 안에서 `type: "$swimlane"`을 지정하고 swimlane 레이아웃의 구조를 정의해야 합니다:

~~~jsx
const data = [
    // swimlane 구성하기
    {
        type: "$swimlane",
        height: 500,
        width: 850,
        // swimlane의 레이아웃에는 최소 하나의 셀이 포함되어야 합니다
        layout: [
            [1] // id가 "1"이고 type이 "$sgroup"인 셀
        ]
    }
];

// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

위의 코드 예제는 기본 설정을 사용하는 가장 단순한 swimlane 구성(즉, 헤더와 서브헤더가 없는 구성)을 보여줍니다.

### Swimlane 구조 {#swimlane-structure}

swimlane의 구조는 상당히 다양할 수 있습니다. 이 구조는 swimlane 객체의 [layout](swimlanes/configuration_properties.md) 구성 속성을 통해 정의됩니다. 이 속성을 사용하면 swimlane의 셀을 행과 열로 배열할 수 있습니다.

이 속성의 값으로 행렬을 나타내는 배열을 지정하기만 하면 됩니다. 행렬은 다음과 같이 하나의 배열이거나:

~~~jsx
// 열이 3개인 swimlane
layout: [
    [1, 2, 3]
]
~~~

또는 쉼표로 구분된 여러 배열의 집합일 수도 있습니다:

~~~jsx
// 행이 2개, 열이 3개인 swimlane
layout: [
    [1, 2, 3],
    [4, 5, 6]
]
~~~

여기서:

- 레이아웃의 각 셀은 고유한 번호를 가집니다;
- 배열의 개수는 행의 개수를 정의합니다(배열이 여러 개인 경우, 모든 배열의 셀 개수가 동일해야 합니다);
- 배열 내 셀의 개수는 열의 개수를 정의합니다.

### Swimlane 객체의 속성 {#properties-of-a-swimlane-object}

필요에 따라 다양한 설정으로 다양한 swimlane을 생성할 수 있도록 [swimlane 객체의 전체 구성 속성 목록](swimlanes/configuration_properties.md)을 확인하십시오.

## Swimlane 셀 구성하기 {#configuring-a-swimlane-cell}

페이지에서 swimlane을 초기화하면 swimlane 셀의 id와 그 구성이 자동으로 생성됩니다. 셀의 기본 구성을 변경하려면 `type: "$sgroup"` 및 `id` 속성을 반드시 포함하는 셀 객체를 생성하고, 그 안에 필요한 구성 설정을 지정하십시오:

~~~jsx
const data = [
    // swimlane 구성하기
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 850,
        layout: [
            [1, 2, 3]
        ]
    },
    // swimlane 셀 구성하기
    {
        type: "$sgroup",
        id: 3,
        style: {
            fill: "#D4DAE4"
        }
    }
];
~~~

### 셀 객체의 속성 {#properties-of-a-cell-object}

[swimlane 셀의 전체 구성 속성 목록](swimlanes/configuration_properties.md#properties-of-a-swimlane-cell)을 확인하십시오.

## 셀 그룹화하기 {#grouping-cells}

각 셀에 고유한 번호를 지정하면, 모든 셀이 테두리와 함께 렌더링됩니다:

~~~jsx
layout: [
    [1, 2, 3],
    [4, 5, 6]
]
~~~

![](/img/swimlane_cells.png)

필요한 경우, 셀의 범위를 그룹화하고 그 사이의 테두리를 제거할 수 있습니다. 이를 위해 범위에서 임의의 셀을 선택하고, 범위에 속한 셀(들)의 고유 번호를 이 셀의 번호로 바꾸십시오.<br/>
다음은 첫 번째 행에 배치된 처음 두 셀을 그룹화하는 예입니다:

~~~jsx
layout: [
    [1, 1, 3],
    [4, 5, 6]
]
~~~

결과는 다음과 같이 표시됩니다:

![](/img/swimlane_merge_cell_row.png)

다음은 두 번째 열에 배치된 셀을 그룹화하는 예입니다:

~~~jsx
layout: [
    [1, 2, 3],
    [4, 2, 6]
]
~~~

결과:

![](/img/swimlane_merge_cell_col.png)

**관련 샘플**: [Diagram 에디터. 기본 모드. Swimlane에서 열과 행 구성하기](https://snippet.dhtmlx.com/uzx5ulal)

## Swimlane과 셀의 크기 {#sizes-of-a-swimlane-and-its-cells}

swimlane의 크기는 swimlane의 `width` 및 `height` 구성 속성에 의해 정의됩니다.

~~~jsx
const data = [
    // swimlane 구성하기
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 850,
        layout: [
            [1, 2, 3]
        ]
    }
];
~~~

### 셀 너비 {#cell-width}

셀의 너비는 swimlane의 너비, 열의 개수, 왼쪽/오른쪽 swimlane 헤더와 서브헤더의 높이에 따라 달라집니다. 예를 들면:

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 830,
        layout: [
            // 열 3개
            [1, 2, 3]
        ],
        header: {
            position: "left",
            height: 40
        },
        subHeaderRows: {
            enable: true,
            position: "left",
            height: 40
        }
    }
];
~~~

각 셀의 너비는 *(830-40-40)/3 = 250*으로 계산할 수 있습니다.

### 셀 높이 {#cell-height}

셀의 높이는 swimlane의 높이, 행의 개수, 위쪽/아래쪽 swimlane 헤더와 서브헤더의 높이에 따라 달라집니다. 예를 들면:

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 830,
        layout: [
            // 행 2개
            [1, 2, 3],
            [4, 5, 6]
        ],
        header: {
            position: "top",
            height: 40
        },
        subHeaderCols: {
            enable: true,
            position: "top",
            height: 40
        }
    }
];
~~~

각 셀의 높이는 *(500-40-40)/2 = 210*으로 계산할 수 있습니다.
