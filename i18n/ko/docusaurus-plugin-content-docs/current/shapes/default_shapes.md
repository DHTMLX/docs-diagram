---
sidebar_label: 기본 도형 세트
title: 기본 도형 세트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 기본 도형 세트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 기본 도형 세트

DHTMLX Diagram 라이브러리는 다이어그램을 구축하는 데 사용할 수 있는 도형 세트를 제공합니다. 각 Diagram 모드([기본](#shapes-in-the-default-mode), [조직도](#shapes-in-the-org-chart-mode), [마인드맵](#shapes-in-the-mindmap-mode), [PERT](#shapes-in-the-pert-mode))에는 도형 유형의 *기본 세트*가 있습니다.

:::tip
어떤 모드로 초기화된 다이어그램에도 임의의 유형의 도형을 추가할 수 있습니다. [다이어그램에 로드할 데이터 세트를 준비](guides/loading_data.md#preparing-data-to-load)할 때 도형 객체 내 `type` 어트리뷰트의 값으로 필요한 도형의 이름을 사용하세요.
:::

[도형 객체의 전체 구성 속성 목록](shapes/configuration_properties.md)을 참조하세요.

## 기본 모드의 도형 {#shapes-in-the-default-mode}

Diagram의 `default` 모드에서 기본 세트에는 **플로우차트** 도형이 포함됩니다. 사용 가능한 플로우차트 도형 유형을 확인하세요:

![](/img/flowshapes_types.png)

또한 다이어그램에서 도형으로 사용되고 다른 도형에 연결될 수 있는 단순 텍스트를 나타내는 `"text"` 항목도 있습니다.

![](/img/text_item.png)

**관련 샘플**: [Diagram Editor. 기본 모드. 와이드 플로우차트](https://snippet.dhtmlx.com/4d4k3o8p)

:::note
기본 모드에서 Diagram의 도형을 그룹화할 수 있습니다. [관련 가이드를 확인하세요](/groups/).
:::

### 속성 {#properties}

[`default` Diagram 모드의 도형](shapes/configuration_properties.md#properties-specific-for-the-default-mode) 전용 구성 속성과 [**플로우 도형**과 `"text"` 항목](shapes/configuration_properties.md#properties-specific-for-text-topic-and-flow-chart-shapes) 전용 구성 속성을 확인하세요.

## 조직도 모드의 도형 {#shapes-in-the-org-chart-mode}

Diagram의 **조직도** 모드에서 기본 세트에는 `"card"`와 `"img-card"`의 두 가지 도형 유형이 포함됩니다.

`"card"` 유형의 각 도형에는 텍스트와 색상이 있는 헤더 라인이 있습니다. 동일한 레벨에 위치한 도형은 동일한 색상의 헤더를 가집니다. 아래의 조직도 유형 다이어그램에 `"card"` 도형의 예가 표시되어 있습니다:

![](/img/orgchart_card_shapes.png)

**관련 샘플**: [Diagram. 조직도 모드. 기본 초기화](https://snippet.dhtmlx.com/5ign6fyy?mode=result)

`"img-card"` 유형은 이미지가 있는 도형을 추가하는 데 사용할 수 있습니다. 도형 객체의 `img` 어트리뷰트를 통해 카드에 이미지를 반드시 제공하세요. 다음 조직도 다이어그램은 `"img-card"` 유형의 도형으로 구성되어 있습니다:

![](/img/orgchart_imgcard_shapes.png)

**관련 샘플**: [Diagram editor. 조직도 모드. 기본 초기화](https://snippet.dhtmlx.com/og4qm3ja?mode=result)

### 속성 {#properties-1}

[**조직도** Diagram 모드의 도형](shapes/configuration_properties.md#properties-specific-for-the-org-chart-mode), [`"card"` 도형](shapes/configuration_properties.md#properties-specific-for-card-shapes)
및 [`"img-card"` 도형](shapes/configuration_properties.md#properties-specific-for-img-card-shapes) 전용 구성 속성을 확인하세요.

## 마인드맵 모드의 도형 {#shapes-in-the-mindmap-mode}

Diagram의 `mindmap` 모드에서는 `"topic"` 유형의 도형이 기본 도형입니다. 각 도형에는 텍스트와 색상이 있는 테두리가 있습니다. 외곽선의 색상은 도형이 속한 레벨에 따라 달라집니다. 다음 마인드맵 유형 다이어그램에 `"topic"` 도형의 예가 나와 있습니다:

![](/img/mindmap_basic.png)

**관련 샘플**: [Diagram. 마인드맵 모드. 기본 초기화](https://snippet.dhtmlx.com/3igf1gd5)

### 속성 {#properties-2}

[`mindmap` Diagram 모드의 도형](shapes/configuration_properties.md#properties-specific-for-the-mindmap-mode)과 [`"topic"` 도형](shapes/configuration_properties.md#properties-specific-for-text-topic-and-flow-chart-shapes) 전용 구성 속성을 확인하세요.

## PERT 모드의 도형 {#shapes-in-the-pert-mode}

Diagram의 **PERT** 모드에서 기본 도형 유형은 다음과 같습니다:

- `"task"` 유형 - 헤더가 있고 날짜와 기간을 표시하는 도형입니다:

![](/img/pert_task_shape.png)

- `"milestone"` 유형 - 기간이 없으며 프로젝트의 주요 시점을 나타내는 도형입니다:

![](/img/pert_milestone_shape.png)

- `"project"` 유형 - [`"task"` 및 `"milestone"` 유형의 도형을 그룹화](/groups/#grouping-shapes-in-the-pert-mode)하는 데 사용되는 컨테이너입니다:

![](/img/pert_project_group.png)


**관련 샘플**: [Diagram. PERT 차트. 초기화 ](https://snippet.dhtmlx.com/4h5fi7xd)

### 속성 {#properties-3}

[`"task"` 도형](shapes/configuration_properties.md#properties-specific-for-task-shapes), [`"milestone"` 도형](shapes/configuration_properties.md#properties-specific-for-milestone-shapes) 및 [`"project"` 그룹](groups/configuration_properties.md#properties-specific-for-project-object) 전용 구성 속성을 확인하세요.

## 도형 유형 설정 {#setting-the-type-of-a-shape}

도형의 유형을 설정하려면, 다이어그램에 로드할 관련 JSON 구조를 준비할 때 도형 객체 내에서 [`type`](shapes/configuration_properties.md) 속성을 사용하세요:

~~~jsx
const data = [
    { "id": 1, "x": 280, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 280, "y": 120, "text": "Read N", "type": "output" },
    { "id": 3, "x": 280, "y": 240, "text": "M=1\nF=2", "type": "process" },
    { "id": 4, "x": 280, "y": 360, "text": "F=F*M", "type": "process" },
    { "id": 5, "x": 280, "y": 480, "text": "Is M=N?", "type": "decision" }
];
~~~

:::note
[도형 객체의 전체 구성 속성 목록](shapes/configuration_properties.md)을 참조하세요. 기본 세트의 도형에 대한 데이터 객체를 생성할 때는 사용자 지정 속성을 추가하지 마세요. 사용자 지정 속성을 추가하려면 [사용자 지정 도형을 생성](shapes/custom_shape.md)해야 합니다.
:::

### 기본 도형 유형 설정 {#setting-the-default-shape-type}

다이어그램 구성 객체의 [`defaultShapeType`](api/diagram/defaultshapetype_property.md) 어트리뷰트를 통해 모든 도형의 기본 유형을 설정할 수도 있습니다:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // type: "org" | type: "mindmap" | type: "pert"
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

도형의 구성 객체에 `type` 속성이 없는 경우 이 값이 적용됩니다.

