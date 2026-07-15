---
sidebar_label: 구성
title: Diagram 구성
description: Diagram 구성에 대해 DHTMLX JavaScript Diagram 라이브러리 문서에서 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, 무료 30일 평가판 DHTMLX Diagram을 다운로드하세요.
---

# Diagram 구성 {#diagram-configuration}

DHTMLX Diagram은 다양한 구성 옵션을 제공합니다. Diagram의 배율을 변경하고, 도형과 선의 기본 유형을 설정하고, 도형 간의 여백을 설정하고, 선택 기능을 적용하고, 도형용 아이콘이 있는 툴바를 설정할 수 있습니다.

### Diagram 모드 설정 {#setting-the-diagram-mode}

다음 Diagram 모드 중에서 선택할 수 있습니다: `"default"`, `"org"`, `"mindmap"`, `"pert"`. 각 모드에 대한 자세한 설명은 [Diagram 개요](/) 문서를 참고하세요. 필요한 유형은 [type](api/diagram/type_property.md) 구성 옵션을 통해 다음과 같이 지정할 수 있습니다:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // `type: "org"` | `type: "mindmap"` | `type: "pert"`
});
diagram.data.parse(data);
~~~

### 기본 도형 유형 설정 {#setting-the-default-shape-type}

Diagram 구성 객체의 [`defaultShapeType`](api/diagram/defaultshapetype_property.md) 속성을 통해 모든 도형의 기본 유형을 설정할 수 있습니다:

~~~jsx {3}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // or type: "org", or type: "mindmap"
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

도형의 구성 객체에 `type` 속성이 없는 경우 이 값이 적용됩니다.

도형의 기본 유형은 다음과 같습니다:

- `"rectangle"` - 기본 모드의 Diagram에 사용
- `"card"`  - 기본 모드 또는 조직도 모드의 Diagram에 사용
- `"topic"` - 마인드맵 모드의 Diagram에 사용
- `"task"` - PERT 모드의 Diagram에 사용

## 기본 선 유형 설정 {#setting-the-default-line-type}

Diagram 구성 객체의 [`lineConfig`](api/diagram/lineconfig_property.md) 속성에 있는 `lineType` 매개변수를 통해 Diagram의 모든 커넥터 라인에 공통 유형을 설정할 수 있습니다:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash" // "dash" | "line"
    }
});
diagram.data.parse(data);
~~~

선 객체에 `type` 속성이 없는 경우 이 값이 적용됩니다.

## 도형의 기본 구성 설정 {#setting-the-default-configuration-of-a-shape}

Diagram에 로드할 데이터를 준비할 때 대량의 데이터 세트를 다루지 않아도 됩니다. 필요한 유형의 모든 도형과 선에 대한 기본 구성을 지정하여 코드의 레코드 수를 줄일 수 있습니다.

이를 위해 Diagram 구성 객체의 [`defaults`](api/diagram/defaults_property.md) 속성을 사용하세요:

<iframe src="https://snippet.dhtmlx.com/7bn52dl1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

`defaults` 객체에는 여러 개의 `key:value` 쌍이 포함되어 있으며, *key*는 도형 또는 선의 유형이고 *value*는 해당 도형 또는 선의 기본 구성입니다.

:::note
도형/선의 기본 구성에서는 `type` 및 `id` 속성을 정의할 수 없습니다
:::

[도형](shapes/configuration_properties.md) 및 [선](lines/configuration_properties.md)의 전체 구성 속성 목록을 확인하세요.

## Diagram의 마인드맵 모드에서 도형 배치하기 {#arranging-shapes-in-the-mindmap-mode-of-diagram}

Diagram의 마인드맵 모드에서는 루트 도형을 기준으로 한 하위 도형의 배치가 기본 알고리즘에 의해 자동으로 결정됩니다.
Diagram을 초기화할 때 하위 도형의 기본 방향을 변경하려면 [`typeConfig`](api/diagram/typeconfig_property.md) 구성 속성을 사용하세요.

:::note
`typeConfig` 구성 속성은 Diagram Editor에서 사용할 수 없습니다
:::

이 속성을 사용하면 다음을 수행할 수 있습니다:

- [모든 하위 도형의 방향을 한 번에 설정](#setting-direction-for-all-child-shapes)
- [특정 하위 도형에 개별 방향 지정](#setting-direction-for-individual-child-shape)

### 모든 하위 도형의 방향 설정 {#setting-direction-for-all-child-shapes}

하위 도형을 루트 도형의 오른쪽/왼쪽에 배치하려면 [`typeConfig`](api/diagram/typeconfig_property.md) 속성의 `direction` 속성을 사용하세요:

<iframe src="https://snippet.dhtmlx.com/pzllujx3?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 개별 하위 도형의 방향 설정 {#setting-direction-for-individual-child-shape}

[`typeConfig`](api/diagram/typeconfig_property.md) 속성의 `side` 속성을 통해 특정 하위 도형에 대한 필수 방향을 설정할 수 있습니다. 이 속성은 `key:value` 쌍의 집합을 포함하는 객체로, *key*는 도형의 방향(left, right)이고 *value*는 도형의 id가 담긴 배열입니다.

<iframe src="https://snippet.dhtmlx.com/atto9ckg?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

side 옵션에서 설정되지 않은 다른 하위 도형은 기본 알고리즘에 따라 자동으로 배치됩니다.

## Diagram의 PERT 모드에서 날짜 형식 설정 {#setting-date-format-in-the-pert-mode-of-diagram}

Diagram의 PERT 모드에서는 `task` 유형의 도형에 날짜를 표시하는 데 필요한 형식을 지정할 수 있습니다. 이를 위해 [`typeConfig`](api/diagram/typeconfig_property.md) 속성의 `dateFormat` 속성을 사용하세요:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

## Diagram 및 도형 배치 {#positioning-diagram-and-shapes}

Diagram 구성 객체의 [`margin`](api/diagram/margin_property.md) 속성을 사용하여 페이지에서 Diagram의 위치를 지정하고 도형 내부의 여백을 설정할 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/bwe9vm6i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 도형의 자동 배치 구성 {#configuring-autoplacement-for-shapes}

DHTMLX Diagram 라이브러리를 사용하면 Diagram에서 연결된 도형을 계층 구조로 자동 배치하도록 설정을 구성할 수 있습니다. Diagram의 구성 객체에서 [`autoplacement`](api/diagram/autoplacement_property.md) 속성을 지정하여 도형 연결 모드와 연결되지 않은 Diagram 간의 거리를 구성할 수 있습니다:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        mode: "edges",
        graphPadding: 100,
        placeMode: "radial",
        itemPadding: 10,
        levelPadding: 10
    }
});

diagram.data.parse(data);

diagram.autoPlace();
~~~

이 속성은 다음 옵션을 포함할 수 있습니다:

- `mode` - (*string*) 선택 사항, 도형 연결 모드, 기본값은 `"direct"`이며 `"edges"`로 설정 가능
- `graphPadding` - (*number*) 선택 사항, 연결되지 않은 Diagram 간의 거리를 설정, 기본값은 *200*
- `placeMode` - (*string*) 선택 사항, 도형 배치 모드를 설정, 기본값은 `"orthogonal"`이며 `"radial"`로 설정 가능
- `itemPadding` - (*number*) 선택 사항, 항목 간 최소 여백(최소값은 *1*), 기본값은 *20*
- `levelPadding` - (*number*) 선택 사항, 계층 레벨 간 최소 여백(최소값은 *1*), 기본값은 *20*

:::note
자동 배치는 [`autoPlace()`](api/diagram/autoplace_method.md) 메서드가 적용된 후에만 적용됩니다. 이 기능은 Diagram의 기본 모드에서 도형에 대해서만 작동합니다. 그룹 또는 스윔레인을 사용하는 경우 자동 배치는 작동하지 않습니다.
:::

![패딩 옵션을 사용한 방사형 자동 배치](/img/radial_autoplacement.png)

**Related sample**: [Diagram. 기본 모드. 패딩 옵션이 있는 방사형 자동 배치](https://snippet.dhtmlx.com/huut0l1s)

## Diagram 배율 조정 {#adjusting-the-diagram-scale}

필요한 경우 애플리케이션에 맞게 Diagram의 배율을 조정할 수 있습니다. 이는 [`scale`](api/diagram/scale_property.md) 옵션을 통해 수행할 수 있습니다.
기본값은 1로 설정되어 있습니다. 따라서 Diagram을 확대하려면 옵션 값을 1보다 크게 설정하고, 축소하려면 1보다 작게 설정하면 됩니다.

<iframe src="https://snippet.dhtmlx.com/9h89c3gl?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 도형의 툴바 설정 {#setting-toolbar-for-shapes}

DHTMLX Diagram을 사용하면 Diagram 도형과의 상호작용을 간편하게 하기 위해 아이콘이 있는 툴바를 지정할 수 있습니다. Diagram 구성 객체의 [`toolbar`](api/diagram/toolbar_property.md) 옵션을 통해 도형 툴바를 활성화할 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/4if395hd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 항목 선택 활성화 {#enabling-items-selection}

Diagram 구성 객체의 [`select`](api/diagram/select_property.md) 속성을 통해 Diagram에서 항목 선택을 활성화할 수 있습니다. Diagram에서 선택 기능을 활성화한 후에는 Selection 객체 API를 사용하여 [항목 선택 작업](guides/manipulating_items.md#selecting-items)을 수행할 수 있습니다.

:::note
선택 객체의 [사전 정의된 이벤트 세트](/api/selection/#events)를 사용하면 항목을 선택/선택 해제하는 동안 Diagram의 동작을 처리하는 방식을 정의하는 데 도움이 됩니다
:::

<iframe src="https://snippet.dhtmlx.com/jyoxn5h7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
