---
sidebar_label: Groups
title: Groups
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Group에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보십시오.
---

# Groups {#groups}

## Group 개요 {#group-overview}

Group은 Diagram의 별도의 항목 유형입니다. 다양한 방식으로 도형이나 다른 group을 그룹화하여 단순하거나 더 복잡한 다이어그램을 그릴 수 있습니다. 1단계 group과 중첩된 group을 모두 생성할 수 있으며, 이들의 모양과 동작을 구성할 수 있습니다.

:::note
Group은 Diagram/Diagram Editor의 기본 모드(type: `"default"`)에서만 사용할 수 있습니다.
:::

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## Group 생성하기 {#creating-groups}

group을 생성하려면, 다이어그램에 로드할 관련 JSON 구조를 준비하는 동안 group 객체 내부의 `type` 속성 값으로 *"$group"*을 지정합니다:

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
            text: "User Access"
        },
        groupChildren: ["1.1", "1.2"]
    },
    {
        type: "it",
        id: "1.1",
        x: 50,
        y: 75,
        text: "Remote Desktop"
    },
    {
        type: "it",
        id: "1.2",
        x: 200,
        y: 75,
        text: "Login Server"
    },
];

// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

### 속성 {#properties}

group의 위치와 모양을 구성할 수 있는 [`group` 객체의 전체 구성 속성 목록](groups/configuration_properties.md)을 참조하십시오.

## PERT 모드에서 도형 그룹화하기 {#grouping-shapes-in-the-pert-mode}

Diagram의 PERT 모드에서 `"task"` 및 `"milestone"` 유형의 도형을 그룹화하려면 다이어그램의 데이터 세트에서 `"project"` 객체를 사용합니다. `"project"` 객체는 작업과 마일스톤의 컨테이너 역할을 하며, group처럼 작동합니다. 이 객체는 다양한 중첩 수준의 PERT 차트를 생성할 수 있게 해주고 시각적 그룹화를 제공합니다.

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

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

### 속성 {#properties}

project 내 작업과 마일스톤의 위치와 모양을 구성할 수 있는 [`"project"` 객체의 전체 구성 속성 목록](groups/configuration_properties.md#properties-specific-for-project-object)을 참조하십시오.

## Group 헤더 구성하기 {#configuring-the-group-header}

group의 헤더는 기본적으로 비활성화되어 있습니다. 헤더가 있는 group을 생성하려면 group의 구성 객체에서 `header` 속성을 지정해야 합니다.

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {}
    }
];
~~~

이 속성에는 group 헤더의 구성을 손쉽게 조정할 수 있는 여러 속성이 포함되어 있습니다.
예를 들어, 헤더의 높이와 위치를 정의하고, 헤더의 텍스트를 지정하고, 그 설정을 조정할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/6hunrja8?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="470"></iframe>

[group 객체의 전체 API 속성 목록](groups/configuration_properties.md)을 확인하십시오.

### 헤더 아이콘 {#a-header-icon}

group을 접거나 펼치려면 [header](groups/configuration_properties.md) 속성의 `closable` 속성을 활성화하십시오. 그 결과, 사용자가 group을 펼치거나 접을 수 있는 아이콘이 헤더에 추가됩니다.

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
            closable: true
        }
    }
];
~~~

[group 객체](groups/configuration_properties.md)의 `iconColor` 속성을 통해 아이콘의 색상을 변경할 수 있습니다.

## Group 항목의 동작 구성하기 {#configuring-the-behavior-of-group-items}

기본적으로, group의 하위 항목을 group 밖으로 드래그하여 다른 group 안으로 드래그해 넣을 수 있습니다.
group 항목의 동작 방식을 변경하려면 [group 객체](groups/configuration_properties.md)의 `exitArea` 속성에 있는 `groupBehavior` 및 `padding` 속성을 사용하십시오.

:::note
`exitArea` 속성은 구성 대상 group의 1단계 하위 항목의 동작만 정의합니다.
:::

<iframe src="https://snippet.dhtmlx.com/4gxy38ek?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

`groupBehavior` 속성의 `"unbound"` 및 `"boundBorderExtension"` 값을 사용하면 하위 항목을 group 밖으로 이동시킬 수 있는지 여부를 정의하고, 사용자가 항목을 밖으로 드래그하려고 할 때 group의 테두리가 확장되도록 만들 수 있습니다. 필요한 경우 `"boundNoBorderExtension"` 값을 통해 항목을 group 밖으로 드래그하는 기능을 비활성화할 수도 있습니다.

![](/img/group_behavior.gif)

`groupBehavior`가 `"boundNoBorderExtension"` 또는 `"boundBorderExtension"`으로 설정된 경우, 항목을 group 안으로 이동시킬 때 group과 항목 가장자리 사이의 여백을 지정할 수 있습니다. 이를 위해 `padding` 속성을 사용하십시오:

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 830,
        height: 400,
        x: 0,
        y: 0,
        exitArea: {
            groupBehavior: "boundBorderExtension",
            padding: 10
        },
        //fixed: true,
        groupChildren: ["1.1", "1.2", "1.3"]
    },
    // ...
];
~~~
