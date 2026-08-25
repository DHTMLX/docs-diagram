---
sidebar_label: LineTitles
title: LineTitles
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Line에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보십시오.
---

# LineTitles {#linetitles}

## 개요 {#overview}

LineTitle은 도형을 연결하는 line에 텍스트를 설정합니다. 다이어그램과 에디터 모두에서 line을 더블 클릭하여 텍스트를 추가하거나, 에디터에서 line의 툴바를 사용하여(line을 클릭하여 활성화한 후) 텍스트를 추가할 수 있습니다. 또한 다이어그램과 에디터 모두에서 더블 클릭을 사용하여 line title을 편집할 수 있습니다.

line에 텍스트를 추가하고 조작하는 또 다른 방법은 [데이터 세트](guides/loading_data.md#preparing-data-to-load)를 준비하는 것입니다.

:::note
LineTitle은 Diagram/Diagram Editor의 기본 모드(type: `"default"`)에서만 사용할 수 있습니다.
:::

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## LineTitle 생성하기 {#creating-line-titles}

line title을 생성하려면, 다이어그램에 로드할 데이터 세트를 준비하는 동안 line title 객체 내부에 `type: "lineTitle"`을 지정해야 합니다:

~~~jsx {5-6}
const data = [
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    // line title 구성하기
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Some text" }
];

// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

### LineTitle 객체의 속성 {#properties-of-a-line-title-object}

line title의 모양과 느낌을 조정하고 위치를 구성할 수 있도록 [line title 객체의 전체 구성 속성 목록](line_titles/configuration_properties.md)을 확인하십시오.

## LineTitle 다루기 {#working-with-line-titles}

[DataCollection API](/api/data_collection/)를 통해 line title을 조작할 수 있습니다.

:::note
아래 예제는 Diagram과 Diagram Editor 모두에 적합합니다.
:::

### LineTitle 추가하기 {#adding-a-line-title}

DataCollection의 [`add`](api/data_collection/add_method.md) 메서드를 통해 line title을 추가할 수 있습니다:

~~~jsx {5-10}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.add({
    type: "lineTitle",
    parent: "line_1",
    text: "Some text",
    fill: "#BCE4CE"
});
~~~

메서드의 매개변수로 새 line title의 구성이 담긴 객체를 전달하십시오.

:::note
[line title 객체의 전체 구성 속성 목록](line_titles/configuration_properties.md)을 참조하십시오.
:::

### LineTitle 추가 차단하기 {#blocking-line-titles-adding}

line title 추가를 방지해야 하는 경우, DataCollection의 [`beforeAdd`](api/data_collection/beforeadd_event.md) 이벤트를 사용할 수 있습니다:

~~~jsx {5}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.events.on("beforeAdd", (item) => item.type !== "lineTitle");
~~~

### LineTitle 반복하기 {#iterating-over-line-titles}

DataCollection의 [`eachChild()`](api/data_collection/eachchild_method.md) 메서드를 사용하여 line의 하위 항목으로서 line title을 반복 처리할 수 있습니다:

~~~jsx {7-9,11-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse([
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Text 1", distance: 50 },
    { type: "lineTitle", id: "title_2", parent: "line_1", text: "Text 2", distance: 70 }
]);
editor.diagram.data.eachChild("line_1", (child) => {
    console.log(child.id); // => "title_1", "title_2"
});
~~~

반복 처리할 title을 가진 line의 id를 첫 번째 매개변수로 전달하십시오. 위 예제에서 콜백 함수는 지정된 line의 각 하위 항목에 적용되어 그 id를 반환합니다.
