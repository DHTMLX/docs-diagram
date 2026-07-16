---
sidebar_label: 데이터 로드 및 저장
title: 데이터 로드 및 저장
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 데이터 로드 및 저장에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 데이터 로드 및 저장

DHTMLX Diagram에 다음과 같은 방법으로 데이터를 채울 수 있습니다.

- [외부 파일에서 데이터 로드](#external-data-loading)
- [로컬 데이터 소스에서 로드](#loading-from-a-local-source)

## 로드할 데이터 준비 {#preparing-data-to-load}

DHTMLX Diagram은 JSON 형식의 데이터를 사용합니다. 기본, 조직도, 마인드맵 Diagram 모드에서는 데이터 객체 집합을 포함하는 배열입니다. 객체에는 5가지 유형이 있습니다.

- **도형 객체**

~~~jsx {2-5}
const data = [
   // 도형 구성
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // 선 구성
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // 선 제목 구성
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

라이브러리는 공통 옵션과 특정 옵션을 모두 가진 [다양한 유형의 기본 도형](shapes/default_shapes.md)을 제공합니다. `shape` 객체에서 사용 가능한 전체 속성 목록은 [API 참조](shapes/configuration_properties.md)에서 확인하세요.

또한 [사용자 정의 도형 유형](shapes/custom_shape.md)을 생성하고 도형 객체에 원하는 커스텀 속성을 추가할 수 있습니다.

- **선 객체**

~~~jsx {6-8}
const data = [
   // 도형 구성
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // 선 구성
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // 선 제목 구성
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

데이터 세트에 선 객체가 있는지 여부는 선택한 [도형 연결 방식](/lines/#setting-connections-between-shapes)에 따라 달라집니다. `line` 객체에서 사용 가능한 전체 속성 목록은 [API 참조](lines/configuration_properties.md)에서 확인하세요.

- **선 제목 객체**

~~~jsx {9-10}
const data = [
   // 도형 구성
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // 선 구성
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // 선 제목 구성
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

**선 제목** 객체에서 사용 가능한 전체 속성 목록은 [API 참조](line_titles/configuration_properties.md)에서 확인하세요.

- **그룹 객체**

~~~jsx
const data = [
    {
        "type": "$group",
        "id": 1,
        "width": 400,
        "height": 200,
        "x": 0,
        "y": 0,
        "header": {
            "text": "Top and collapsed header with tеxt alignment",
            "editable": true,
            "closable": true,
            "textAlign": "left", // "left", "center", "right"
            "textVerticalAlign": "center", // "top", "center", "bottom"
        },
        // 그룹의 하위 항목
        "groupChildren": [1.1, 1.2],
        "open": false,
    },
    // 그룹에 배치할 도형 구성
    { "type": "rectangle", "id": 1.1, "x": 50, "y": 75, "text": "Shape 1.1" },
    { "type": "rectangle", "id": 1.2, "x": 200, "y": 75, "text": "Shape 1.2" }
];
~~~

`group` 객체에서 사용 가능한 전체 속성 목록은 [API 참조](groups/configuration_properties.md)에서 확인하세요.

- **스윔레인과 그 셀의 객체**

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
    },
   // 스윔레인의 셀 구성
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
   // 셀에 배치할 도형 구성
    {
        "id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
    }
];
~~~

`swimlane`과 그 셀의 객체에서 사용 가능한 전체 구성 속성 목록은 [API 참조](swimlanes/configuration_properties.md)에서 확인하세요.

## PERT 모드에서 Diagram 데이터 다루기 {#working-with-diagram-data-in-the-pert-mode}

PERT 모드에서 Diagram을 다루는 데는 다음과 같은 특이 사항이 있습니다.

- [Diagram에 로드된 데이터](#data-structure-of-diagram-in-the-pert-mode)는 DHTMLX Gantt 데이터 구조를 가집니다
- Diagram에서 데이터를 다룰 때는 다른 Diagram 모드의 데이터와 마찬가지로 [Data Collection](/api/data_collection/)을 통해 처리됩니다
- [내보낸 Diagram 데이터](#saving-and-restoring-state)는 DHTMLX Gantt 데이터 구조를 가집니다

### PERT 모드에서 Diagram의 데이터 구조 {#data-structure-of-diagram-in-the-pert-mode}

PERT 모드에서 Diagram 데이터의 구조는 컴포넌트 간 통합과 데이터 교환을 간소화하기 위해 [DHTMLX Gantt의 데이터 구조](https://docs.dhtmlx.com/gantt/desktop__supported_data_formats.html#json)와 일치합니다. Gantt 데이터세트가 PERT Diagram에 로드되면, 도형 간 연결을 기준으로 태스크와 프로젝트를 자동으로 배치합니다. 도형("task", "milestone", "project")을 위한 `data` 배열과 도형 간 연결을 위한 `links` 배열이 있습니다.

~~~jsx
{
    data: object[]; // 도형 배열(태스크, 마일스톤, 프로젝트)
    links: object[] // 도형 간 연결 배열
};
~~~

이러한 구조를 통해 도형과 그 연결을 독립적으로 처리할 수 있습니다. [링크 작업에 대한 중요 참고 사항을 확인하세요](#processing-links).

PERT 모드의 Diagram은 다음 유형의 도형과 연결을 지원합니다.

- **프로젝트 객체**

~~~jsx {3-4}
const dataset = {
    data: [
        // 프로젝트 도형 구성
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 태스크 도형 구성
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // 링크 객체 구성
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

`project` 객체에서 사용 가능한 전체 구성 속성 목록은 [API 참조](groups/configuration_properties.md#properties-specific-for-project-object)에서 확인하세요.

- **태스크 객체**

~~~jsx {5-9}
const dataset = {
    data: [
        // 프로젝트 도형 구성
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 태스크 도형 구성
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // 링크 객체들 구성
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

`task` 객체에서 사용 가능한 전체 구성 속성 목록은 [API 참조](shapes/configuration_properties.md#properties-specific-for-task-shapes)에서 확인하세요.

- **마일스톤 객체**

~~~jsx {7-8}
const dataset = {
    data: [
        // 프로젝트 도형 구성
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 태스크 도형 구성
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        // 마일스톤 도형 구성
        { id: "1.2", text: "Task #2", parent: "1", type: "milestone", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        //  링크 객체 구성
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

`milestone` 객체에서 사용 가능한 전체 구성 속성 목록은 [API 참조](shapes/configuration_properties.md#properties-specific-for-milestone-shapes)에서 확인하세요.

- **링크 객체**

~~~jsx {11-16}
const dataset = {
    data: [
        // 프로젝트 도형 구성
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 태스크 도형 구성
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // 링크 객체들 구성
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

`link` 객체에서 사용 가능한 전체 구성 속성 목록은 [API 참조](lines/configuration_properties.md#properties-specific-for-links-in-the-pert-mode)에서 확인하세요.

#### 링크 처리 {#processing-links}

:::info 중요
PERT 모드의 Diagram에서는 `type: "0"`("finish" -> "start") 링크만 지원된다는 점에 유의하세요. [DHTMLX Gantt 차트에서 사용되는 다른 모든 유형의 링크](https://docs.dhtmlx.com/gantt/desktop__link_properties.html)도 `type: "0"`으로 처리됩니다.
:::

:::tip
Diagram의 데이터 컬렉션에 있는 항목의 id는 고유해야 하므로, 데이터를 로드하거나 새 링크를 추가할 때 기존 링크의 id에 `$link` 접두사가 추가된다는 점에 유의하세요.

예를 들면 다음과 같습니다.

~~~jsx
{
    data: [...],
    links: [
        { id: "1" }, // diagram에서 "$link:1"로 사용할 수 있습니다
    ]
}

// diagram.data.getItem("$link:1");
~~~
:::

### PERT 모드에서 데이터 로드의 특이 사항 {#specificity-of-data-loading-in-the-pert-mode}

오류를 방지하고 Diagram을 올바르게 렌더링하려면 아래 권장 사항을 따르세요.

- **순환 의존성 없음**. 태스크, 프로젝트, 링크, 혼합 요소 간의 순환은 지원되지 않습니다. 순환 의존성이 감지되면 예외가 발생합니다.
- **부모와 자식 간의 링크는 허용되지 않음**. 부모 요소(예: 프로젝트)와 그 자식 요소 간의 직접 연결은 허용되지 않습니다. 이러한 연결은 데이터 처리 중에 자동으로 삭제됩니다.
- **교차 연결 피하기**. 교차하는 링크는 Diagram을 더 복잡하게 만들고 가독성을 떨어뜨릴 수 있으므로 최소한으로 줄이세요.
- **순차적 데이터 처리**. 데이터는 도착한 순서대로 처리되며, 이는 요소의 배치에 영향을 줄 수 있습니다. 최상의 결과를 얻으려면 데이터를 논리적인 순서로 지정해야 합니다.
- **태스크 순서 지정**. Diagram을 명확하게 유지하고 시각적 혼란을 피하려면 태스크와 프로젝트 간에 선형 또는 순차적 연결을 사용하세요.

위의 규칙은 PERT 분석에 적합한 깔끔하고 비순환적인 그래프를 만들기 위한 것입니다. 데이터가 이러한 규칙을 위반하면 Diagram이 자동으로 수정할 수 있습니다(예: 허용되지 않는 연결을 제거하는 방식으로). 하지만 사전에 데이터 입력을 확인하는 것이 좋습니다.

### Diagram에서 연결되지 않은 자식이 있는 Gantt 태스크 렌더링 {#rendering-gantt-tasks-with-not-connected-children-in-the-diagram}

`type: "task"`인 Gantt 요소는 부모 태스크와 시각적으로 연결되지 않은 자식 요소를 가질 수 있다는 점에 유의하세요. 이러한 관계는 Diagram에 반영되지 않습니다. 이러한 요소를 같은 프로젝트 안에 시각적으로 렌더링하려면 다음과 같이 할 수 있습니다.

- 데이터를 Diagram에 로드할 때 부모 요소에 `type:"project"`를 지정하거나
- 해당 태스크의 *부모 프로젝트* id를 자식 요소에 지정하세요

예를 들면 다음과 같습니다.

~~~jsx
{
    data: [
        { id: "1", type: "project" },
        { id: "1.1", type: "task", parent: "1" },
        { id: "1.1.1", type: "task", parent: "1.1" }
    ]
}
~~~

위 예시에서

- 요소 "1.1"은 프로젝트가 아니며 태스크로 렌더링됩니다.
- 요소 "1.1.1"은 프로젝트가 아닌 부모 "1.1"에 연결되어 있으므로 잘못된 위치에 렌더링됩니다.
- 요소 "1.1"과 "1.1.1"을 같은 프로젝트 안에 시각적으로 렌더링하려면:
    - 요소 "1.1"의 부모 프로젝트 id를 요소 "1.1.1"에 지정하거나(`parent: "1"` 옵션 사용):
    ~~~jsx
    { id: "1.1.1", type: "task", parent: "1" }
    ~~~
    - 또는 부모 요소 "1.1"에 `"task"` 타입 대신 `"project"` 타입을 사용하세요.
    ~~~jsx
     { id: "1.1", type: "project", parent: "1" }
    ~~~

## 외부 데이터 로드 {#external-data-loading}

외부 파일에서 데이터를 로드하려면 [`load()`](api/data_collection/load_method.md) 메서드를 사용하세요. 이 메서드는 데이터가 있는 파일의 URL을 매개변수로 받습니다.

~~~jsx
diagram.data.load("../common/data.json");
~~~

컴포넌트는 AJAX 호출을 수행하며, 원격 URL이 유효한 JSON 데이터를 제공할 것으로 예상합니다.

데이터 로드는 비동기적으로 이루어지므로, 로드 이후에 실행할 코드는 promise로 감싸야 합니다.

~~~jsx
diagram.data.load("/some/data").then(() => {
   diagram.selection.add("123");
});
~~~

**관련 샘플**: [Diagram. 데이터. 데이터 로드](https://snippet.dhtmlx.com/09isp2d8)

## 로컬 소스에서 로드 {#loading-from-a-local-source}

로컬 데이터 소스에서 데이터를 로드하려면 [`parse()`](api/data_collection/parse_method.md) 메서드를 사용하세요. 매개변수로는 [사전 정의된 데이터 세트](#preparing-data-to-load)를 전달해야 하며, 선택적으로 DataDriver 또는 데이터 유형("json"(기본값), "csv", "xml")을 전달할 수 있습니다.

~~~jsx
diagram.data.parse(data, driver);
~~~

**관련 샘플**: [Diagram. 기본 모드. 넓은 플로우차트](https://snippet.dhtmlx.com/4d4k3o8p)

### 에디터에 데이터 로드 {#loading-data-into-the-editor}

데이터 세트를 에디터에 로드하려면 에디터의 [parse()](api/diagram_editor/editor/methods/parse_method.md) 메서드를 사용하세요.

~~~jsx
editor.parse(data);
~~~

**관련 샘플**: [Diagram editor. 기본 모드. 기본 초기화](https://snippet.dhtmlx.com/xshe9ut7)

## 상태 저장 및 복원 {#saving-and-restoring-state}

Diagram의 현재 상태를 저장하려면 [`serialize()`](api/data_collection/serialize_method.md) 메서드를 사용하세요. Diagram 모드에 따라 이 메서드는 Diagram의 데이터를 다음과 같이 변환합니다.

- 기본, 조직도, 마인드맵 Diagram 모드의 경우 - 각 객체가 개별 도형의 구성을 포함하는 객체 배열로 변환됩니다
- PERT Diagram 모드의 경우 - 도형(`"task"`, `"milestone"`, `"project"`)을 위한 `data` 객체 배열과 도형 간 연결을 위한 `links` 객체 배열을 가진 객체로 변환됩니다.

~~~jsx
const state = diagram1.data.serialize();
~~~

PERT Diagram 모드에서는 내보낸 데이터 객체의 *links* 객체가 [DHTMLX Gantt 차트와 동일한 유형](https://docs.dhtmlx.com/gantt/desktop__link_properties.html)을 갖는다는 점에 유의하세요. 즉, Diagram 데이터의 링크 유형이 Gantt의 링크 유형 중 하나와 일치하면 직렬화 과정에서 그대로 유지됩니다. 링크 유형이 지정되지 않았거나 다르게 설정된 경우(예: `type: "line"`), `type: "0"`으로 변환됩니다.

그런 다음 저장된 state에 담긴 데이터를 다른 diagram으로 파싱할 수 있습니다. 예를 들면 다음과 같습니다.

~~~jsx
// 새 diagram 생성
const diagram2 = new dhx.Diagram("diagram_container");
// diagram1의 상태를 diagram2로 파싱
diagram2.data.parse(state);
~~~

## 에디터에 데이터 가져오기 {#importing-data-into-the-editor}

diagram을 에디터와 함께 사용할 때, 에디터 객체의 [import()](api/diagram_editor/editor/methods/import_method.md) 메서드를 통해 diagram의 데이터를 에디터로 가져올 수 있습니다.

~~~jsx
function runEditor() {
    expand();
    editor.import(diagram);
}
~~~

**관련 샘플**: [Diagram. 기본 모드. 넓은 플로우차트](https://snippet.dhtmlx.com/4d4k3o8p)

에디터를 실행하면 diagram의 상태가 에디터로 가져와집니다.
