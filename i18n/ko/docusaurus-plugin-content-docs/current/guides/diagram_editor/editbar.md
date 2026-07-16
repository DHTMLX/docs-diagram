---
sidebar_label: 편집 바
title: 에디터 가이드 - 편집 바
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 편집 바에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram 무료 30일 평가판을 다운로드하세요.
---

# 편집 바 {#editbar}

각 Diagram 요소별로, 또는 다양한 조건을 고려하여 [요소 그룹](guides/items_index.md) 단위로 편집 바 컨트롤을 구성할 수 있습니다. 이를 위해 편집 바의 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 설정을 사용합니다.

개별 [도형](/category/shapes)에 대해 편집 바 컨트롤을 구성하려면 아래 예제와 같이 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 설정 내에 해당 **도형 유형**을 지정해야 합니다.

~~~jsx {6-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [ // "pert" 도형에 대한 편집 바 컨트롤 구성
                    { type: "arrange", $properties: { angle: { hidden: true } }},
                    // ... 기타 편집 바 컨트롤 구성
                ],
                // ... 기타 도형 구성
            }
        }
    }
});
~~~

[요소 그룹](guides/items_index.md)을 구성하려면 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 설정 내에서 다음 서비스 속성을 사용해야 합니다.

- [`$default`](#configure-editbar-for-the-grid-area) - 요소가 선택되지 않았거나 두 개 이상의 요소가 선택된 경우 편집 바 컨트롤을 구성할 수 있습니다
- [`$shape`](#configure-editbar-for-shapes) - [커스텀 도형을 포함한 모든 도형](/category/shapes)에 대해 편집 바 컨트롤을 구성할 수 있습니다
- [`$group`](#configure-editbar-for-group-elements) - [`group`](/groups/) 유형의 모든 요소에 대해 편집 바 컨트롤을 구성할 수 있습니다
- [`$swimlane`](#configure-editbar-for-swimlanes) - [`swimlane`](/swimlanes/) 유형의 모든 요소에 대해 편집 바 컨트롤을 구성할 수 있습니다
- [`$line`](#configure-editbar-for-lines) - [`line`](/lines/) 유형의 모든 요소에 대해 편집 바 컨트롤을 구성할 수 있습니다
- [`$lineTitle`](#configure-editbar-for-line-titles) - [`lineTitle`](/line_titles/) 유형의 모든 요소에 대해 편집 바 컨트롤을 구성할 수 있습니다

<iframe src="https://snippet.dhtmlx.com/ealq0m4l?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 그리드 영역에 대한 편집 바 구성 {#configure-editbar-for-the-grid-area}

`$default` 서비스 속성을 사용하면 요소가 선택되지 않았거나 두 개 이상의 요소가 선택된 경우 편집 바 컨트롤을 구성할 수 있습니다.

~~~jsx
properties: {
    $default: [
        {
            type: "gridStep",
            readOnly: true,
            // ...
        }
    ]
}
~~~

**관련 복합 컨트롤:** [그리드 스텝](api/diagram_editor/editbar/complex_controls/gridstep.md), [테두리](api/diagram_editor/editbar/complex_controls/border.md), [배치](api/diagram_editor/editbar/complex_controls/arrange.md)

## 도형에 대한 편집 바 구성 {#configure-editbar-for-shapes}

`$shape` 서비스 속성을 사용하면 [커스텀 도형을 포함한 모든 도형](/category/shapes)에 대해 편집 바 컨트롤을 구성할 수 있습니다.

~~~jsx
properties: {
    $shape: [
        {
            type: "position",
            $properties: {
                dx: { disabled: true },
                // ...
            },
            // ...
        }
    ]
}
~~~

**관련 복합 컨트롤:** [테두리](api/diagram_editor/editbar/complex_controls/border.md), [배치](api/diagram_editor/editbar/complex_controls/arrange.md), [위치](api/diagram_editor/editbar/complex_controls/position.md), [크기](api/diagram_editor/editbar/complex_controls/size.md), [텍스트 정렬](api/diagram_editor/editbar/complex_controls/textalign.md), [텍스트 스타일](api/diagram_editor/editbar/complex_controls/textstyle.md)

## 그룹 요소에 대한 편집 바 구성 {#configure-editbar-for-group-elements}

`$group` 서비스 속성을 사용하면 [`group`](/groups/) 유형의 모든 요소에 대해 편집 바 컨트롤을 구성할 수 있습니다.

~~~jsx
properties: {
    $group: [
        {
            type: "header",
            label: "Group header style",
            // ...
        }
    ]
}
~~~

**관련 복합 컨트롤:** [테두리](api/diagram_editor/editbar/complex_controls/border.md), [배치](api/diagram_editor/editbar/complex_controls/arrange.md), [헤더](api/diagram_editor/editbar/complex_controls/header.md), [공통 헤더](api/diagram_editor/editbar/complex_controls/headercommon.md), [헤더 위치](api/diagram_editor/editbar/complex_controls/headerposition.md), [크기](api/diagram_editor/editbar/complex_controls/size.md), [텍스트 정렬](api/diagram_editor/editbar/complex_controls/textalign.md), [텍스트 스타일](api/diagram_editor/editbar/complex_controls/textstyle.md)

## 스윔레인에 대한 편집 바 구성 {#configure-editbar-for-swimlanes}

`$swimlane` 서비스 속성을 사용하면 [`swimlane`](/swimlanes/) 유형의 모든 요소에 대해 편집 바 컨트롤을 구성할 수 있습니다.

~~~jsx
properties: {
    $swimlane: [
        {
            type: "header",
            label: "Swimlane header style",
            // ...
        }
    ]
}
~~~

**관련 복합 컨트롤:** [테두리](api/diagram_editor/editbar/complex_controls/border.md), [배치](api/diagram_editor/editbar/complex_controls/arrange.md), [헤더](api/diagram_editor/editbar/complex_controls/header.md), [공통 헤더](api/diagram_editor/editbar/complex_controls/headercommon.md), [헤더 위치](api/diagram_editor/editbar/complex_controls/headerposition.md), [크기](api/diagram_editor/editbar/complex_controls/size.md), [텍스트 정렬](api/diagram_editor/editbar/complex_controls/textalign.md), [텍스트 스타일](api/diagram_editor/editbar/complex_controls/textstyle.md)

## 선에 대한 편집 바 구성 {#configure-editbar-for-lines}

`$line` 서비스 속성을 사용하면 [`line`](/lines/) 유형의 모든 요소에 대해 편집 바 컨트롤을 구성할 수 있습니다.

~~~jsx
properties: {
    $line: [
        {
            type: "lineShape",
            label: "Line connection type",
            // ...
        }
    ]
}
~~~

**관련 복합 컨트롤:** [테두리](api/diagram_editor/editbar/complex_controls/border.md), [선 모양](api/diagram_editor/editbar/complex_controls/lineshape.md), [포인터 보기](api/diagram_editor/editbar/complex_controls/pointerview.md)

## 선 제목에 대한 편집 바 구성 {#configure-editbar-for-line-titles}

`$lineTitle` 서비스 속성을 사용하면 [`lineTitle`](/line_titles/) 유형의 모든 요소에 대해 편집 바 컨트롤을 구성할 수 있습니다.

~~~jsx
properties: {
    $lineTitles: [
        {
            type: "textAlign",
            label: "Text align",
            // ...
        },
        // ...
    ]
}
~~~

**관련 복합 컨트롤:**  [텍스트 정렬](api/diagram_editor/editbar/complex_controls/textalign.md), [텍스트 스타일](api/diagram_editor/editbar/complex_controls/textstyle.md)

## 커스텀 편집 바 컨트롤 생성 및 구성 {#create-and-configure-custom-editbar-controls}

편집 바 뷰의 [`controls`](api/diagram_editor/editbar/config/controls_property.md) 속성을 사용하여 [**기본 컨트롤**](api/diagram_editor/editbar/basic_controls_overview.md) 및/또는 [**복합 컨트롤**](api/diagram_editor/editbar/complex_controls_overview.md)을 기반으로 커스텀 컨트롤을 생성할 수 있습니다.

:::warning
[***기본 컨트롤***](api/diagram_editor/editbar/basic_controls_overview.md) 및/또는 [***복합 컨트롤***](api/diagram_editor/editbar/complex_controls_overview.md)에서 사용하는 기본 컨트롤 유형의 이름을 커스텀 컨트롤의 이름으로 사용하지 않는 것이 좋습니다. 오류를 방지하려면 각 커스텀 컨트롤에 고유한 이름을 사용하세요!
:::

커스텀 컨트롤을 생성한 후에는 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 속성을 통해 필요한 Diagram 요소에 적용해야 합니다.

<iframe src="https://snippet.dhtmlx.com/w8mrh3ay?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
