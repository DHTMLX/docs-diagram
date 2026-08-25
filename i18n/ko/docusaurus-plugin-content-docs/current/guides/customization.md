---
sidebar_label: 항목 사용자 지정
title: 항목 사용자 지정
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 항목 사용자 지정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 항목 사용자 지정

객체 내부의 다양한 [구성 속성](/category/items-api/)을 사용하여 Diagram 항목의 모양을 수정할 수 있습니다. 또한 사용자 지정 도형을 만들어 Diagram의 룩앤필을 변경할 수도 있습니다.

## 구성 속성을 통한 도형 및 선 스타일 지정 {#styling-shapes-and-lines-via-the-configuration-properties}

### 도형 스타일 지정 {#styling-shapes}

도형 객체는 도형의 룩앤필을 수정하는 데 사용할 수 있는 다양한 속성을 제공합니다.

<iframe src="https://snippet.dhtmlx.com/a9t2z2dt?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

동일한 유형의 모든 도형을 한 번에 스타일링하는 좋은 방법은 Diagram의 [`defaults`](api/diagram/defaults_property.md) 속성을 통해 도형의 스타일 설정을 지정하는 것입니다.

~~~jsx
const defaults = {
  start: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  end: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  // ...
};
~~~

[도형 객체 속성의 전체 목록 보기](shapes/configuration_properties.md).

### 선 스타일 지정 {#styling-lines}

커넥터 선의 모양을 변경하려면 선 객체 내부의 필요한 구성 속성을 사용하세요.

~~~jsx
const data = [
    {
      id: "1-2",
      from: "1",
      to: "2",
      type: "line",
      strokeType: "dash", // 대시 선
      stroke: "#fa55d1" // 선 색상
    }
];
~~~

[선 객체 속성의 전체 목록 보기](lines/configuration_properties.md).

예제를 확인하세요.

<iframe src="https://snippet.dhtmlx.com/um7gy2tb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 도형 템플릿 정의 {#defining-the-shapes-template}

Diagram에 새로운 유형의 도형을 추가하고 이에 대한 템플릿을 정의하여 사용자 지정된 Diagram을 만들 수 있습니다. 이를 위해 Diagram 객체의 [`addShape()`](api/diagram/addshape_method.md) 메서드를 사용하세요.

### 기본 모드에서의 예제 {#example-in-the-default-mode}

<iframe src="https://snippet.dhtmlx.com/2tzyfois?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 조직도 모드에서의 예제 {#example-in-the-org-chart-mode}

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 마인드맵 모드에서의 예제 {#example-in-the-mindmap-mode}

<iframe src="https://snippet.dhtmlx.com/do1jwmw1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### PERT 모드에서의 예제 {#example-in-the-pert-mode}

<iframe src="https://snippet.dhtmlx.com/mtk92awx?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 대상 도형 스타일 지정 {#styling-target-shapes}

Diagram Editor에서 조직도 및 마인드맵 차트를 사용하는 동안, 대상 항목에 사용자 지정 스타일을 추가할 수 있습니다.

:::note
스타일 지정은 이동된 항목의 부모 또는 `giveItem: false`가 설정된 이동된 항목에는 적용되지 않습니다.
:::

~~~jsx
<style>
    .dhx_diagram_item.dhx_action__target--take {
        // 다른 항목을 붙잡을 수 있는 대상 항목의 스타일
    }
    .dhx_diagram_item.dhx_action__target--doesnt_take {
        // 다른 항목을 붙잡을 수 없는 대상 항목의 스타일
    }
</style>
~~~

## 구성 속성을 통한 그룹 스타일 지정 {#styling-groups-via-the-configuration-properties}

### 그룹 스타일 지정 {#styling-the-group}

그룹에 사용자 지정 스타일을 지정하려면 [그룹 객체](groups/configuration_properties.md)의 `style` 속성을 사용할 수 있습니다. 예를 들면 다음과 같습니다.

<iframe src="https://snippet.dhtmlx.com/pdkgis8g?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 그룹 헤더 스타일 지정 {#styling-the-group-header}

[그룹 객체](groups/configuration_properties.md)의 `header` 속성에 있는 속성을 통해 그룹 헤더의 기본 스타일을 변경할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## 구성 속성을 통한 스윔레인 스타일 지정 {#styling-swimlanes-via-the-configuration-properties}

### 스윔레인 스타일 지정 {#styling-the-swimlane}

[스윔레인 객체](swimlanes/configuration_properties.md#properties-of-a-swimlane)의 `style` 속성을 통해 스윔레인의 `strokeWidth`, `stroke`, `fill` 설정을 사용자 지정할 수 있습니다.

~~~jsx
const data = [
    {
        "type": "$swimlane",
        "width": 970,
        "height": 790,
        "header": {
            "text": "Game levels and locations",
            "closable": true
        },
        "layout": [
            ["1"],
            ["2"],
            ["3"],
            ["4"],
            ["5"]
        ],
        "style": {
            "strokeWidth": 5,
            "stroke": "#083796",
            "fill": "#D4DAE4"
        }
    }
];
~~~

### 스윔레인 헤더/서브헤더 스타일 지정 {#styling-the-swimlane-headerssub-headers}

[스윔레인 객체](swimlanes/configuration_properties.md#properties-of-a-swimlane)의 `header`, `subHeaderRows`, `subHeaderCols` 속성에는 스윔레인의 헤더와 서브헤더를 사용자 지정하기 위한 추가 속성 세트가 포함되어 있습니다.

예를 들어, `subHeaderCols` 속성을 통해 스윔레인 상단 서브헤더의 배경 색상을 변경할 수 있습니다.

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

전체 예제를 확인하세요.

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 스윔레인 셀 스타일 지정 {#styling-swimlane-cells}

스윔레인의 개별 셀을 사용자 지정해야 하는 경우, [스윔레인 셀 객체](swimlanes/configuration_properties.md#properties-of-a-swimlane-cell) (`type:"$sgroup"`)의 `style` 속성을 사용하세요.

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "layout": [
            [1, 2, 3, 4]
        ],
        // ...
    },
    {
        "id": 1,
        "type": "$sgroup",
        "style": {
            "fill": "#D4DAE4"
        },
        "x": 0,
        "y": 80
    }
];
~~~

**관련 샘플**: [Diagram. 기본 모드. Waterfall Diagram 템플릿](https://snippet.dhtmlx.com/k5vlvj8i)
