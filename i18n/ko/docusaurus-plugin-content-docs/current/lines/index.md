---
sidebar_label: 라인
title: 라인
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 라인에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 라인

## 개요 {#overview}

도형을 연결하는 라인의 모양과 느낌은 다이어그램을 초기화하는 모드([기본](#lines-in-the-default-mode), [조직도](#lines-in-the-org-chart-mode), [마인드맵](#lines-in-the-mindmap-mode) 또는 [PERT](#links-in-the-pert-mode))에 따라 정의됩니다.

### 기본 모드의 라인 {#lines-in-the-default-mode}

Diagram의 기본 모드에서는 다양한 도형을 필요한 순서로 ["straight"(기본값) 또는 "elbow"](lines/configuration_properties.md) 라인으로 연결하여 특정 프로세스의 구성도를 만들 수 있습니다.

Diagram/Diagram Editor의 기본 모드에서 라인에 텍스트를 추가하려면 [lineTitle](/line_titles/) 객체의 `text` 속성을 사용하세요.

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

### 조직도 모드의 라인 {#lines-in-the-org-chart-mode}

Diagram의 조직도 모드는 계층적 순서로 ["elbow" 라인](lines/configuration_properties.md)으로 연결된 도형 세트를 포함하는 조직도를 나타냅니다.

<iframe src="https://snippet.dhtmlx.com/98tzmzpg?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

도형 객체의 `dir: "vertical"` 구성 어트리뷰트를 통해 상위 도형에 대해 도형을 연결하는 세로 방향을 정의할 수 있습니다.

### 마인드맵 모드의 라인 {#lines-in-the-mindmap-mode}

Diagram의 마인드맵 모드는 또 다른 종류의 계층적 다이어그램을 렌더링하는 데 사용됩니다. 도형은 ["curved" 라인](lines/configuration_properties.md)으로 연결되며 중앙 도형을 중심으로 배치됩니다.

<iframe src="https://snippet.dhtmlx.com/lo1vm0e8?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

이 모드는 하위 주제의 가지로 둘러싸인 핵심 주제나 아이디어를 표현해야 할 때 유용합니다.

루트 도형을 기준으로 한 하위 도형의 배치는 메인 알고리즘에 의해 자동으로 정의됩니다.
하위 도형의 기본 방향을 변경하려면 다이어그램을 초기화할 때 [`typeConfig`](api/diagram/typeconfig_property.md) 구성 속성을 사용하세요.

### PERT 모드의 링크 {#links-in-the-pert-mode}

Diagram의 PERT 모드는 작업 및 프로젝트의 시퀀스와 그들 간의 연결을 렌더링하기 위한 것입니다. `"task"`, `"milestone"`, `"project"` 유형의 도형은 [`"links"` 커넥터](lines/configuration_properties.md#properties-specific-for-links-in-the-pert-mode)로 연결됩니다.

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>


## 도형 간 연결 설정 {#setting-connections-between-shapes}

Diagram에서 도형을 연결하려면 다음 두 가지 방법 중 하나를 사용할 수 있습니다:

- **라인 객체 사용**

도형을 연결하는 로직을 설명하는 별도의 객체를 지정해야 합니다. 예를 들어:

~~~jsx
const data = [
    // 도형
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager" },
    { id: "3", text: "Technical Director" },
    { id: "4", text: "Manager" },
    { id: "5", text: "Technical Director" },
    // 커넥터
    { "id": "1-2", "from": "1", "to": "2", "type": "dash" },
    { "id": "1-3", "from": "1", "to": "3", "type": "dash" },
    { "id": "1-4", "from": "1", "to": "4", "type": "line" },
    { "id": "1-5", "from": "1", "to": "5", "type": "line" }
];
~~~

라인 객체의 `type` 속성을 사용하면 각 라인에 개별 유형을 설정할 수 있습니다.

:::note
[라인 객체의 전체 구성 속성 목록](lines/configuration_properties.md)을 참조하세요.
:::

- **`"parent"` 어트리뷰트 사용**

:::note
이 방법은 Diagram/Diagram Editor의 기본 모드에서는 작동하지 않습니다.
:::

도형의 구성 객체에 `parent` 속성을 지정하고 그 값으로 상위 도형의 id를 설정할 수 있습니다:

~~~jsx
const data = [
    // 도형
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager", parent: "1" },
    { id: "3", text: "Technical Director", parent: "1" },
    { id: "4", text: "Manager", parent: "1" },
    { id: "5", text: "Technical Director", parent: "1" }
];
~~~

이 경우, 모든 커넥터는 동일한 유형을 갖습니다.

### 기본 라인 유형 설정 {#setting-the-default-line-type}

다이어그램 구성 객체의 [`lineConfig`](api/diagram/lineconfig_property.md) 속성에 있는 `lineType` 매개변수를 통해 다이어그램의 모든 커넥터 라인에 공통 유형을 설정할 수 있습니다:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash" // "dash" | "line"
    }
});
diagram.data.parse(data);
~~~

[라인 객체](lines/configuration_properties.md)에 `type` 속성이 없는 경우 `lineType` 매개변수의 값이 적용됩니다.

### 라인의 연결 유형 설정 {#setting-the-connection-type-of-the-line}

다이어그램 구성 객체의 [`lineConfig`](api/diagram/lineconfig_property.md) 속성에 있는 `connectType` 매개변수를 통해 다이어그램 라인의 연결 유형을 지정할 수 있습니다. 다음과 같은 유형을 제공합니다:

- `"elbow"`(기본 및 조직도 Diagram 모드의 기본 유형)
- `"straight"`
- `"curved"`(마인드맵 Diagram 모드의 기본 유형). `"curved"` 유형의 커넥터 라인은 마인드맵 Diagram 모드에서만 사용된다는 점에 유의하세요

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        connectType: "straight" // 기본 모드의 경우 "elbow" | "straight"
    }
});
diagram.data.parse(data);
~~~

[라인 객체](lines/configuration_properties.md)에 `connectType` 속성이 없는 경우 `connectType` 매개변수의 값이 적용됩니다.
