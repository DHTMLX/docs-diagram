---
sidebar_label: parse()
title: Data Collection의 parse 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 parse 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# parse()

### 설명 {#description}

@short: 로컬 데이터 소스에서 다이어그램으로 데이터를 로드하고 처리합니다

### 사용법 {#usage}

~~~jsx
parse(
    data: object[] | { data: object[]; links: object[] } | string,
    driver?: object | string
): void;
~~~

### 매개변수 {#parameters}

- `data: object[] | { data: object[]; links: object[] } | string` - (필수) 로드할 데이터입니다. 지원되는 모든 데이터 형식으로 데이터를 로드할 수 있습니다. 데이터 구조는 다이어그램 모드에 따라 다릅니다:
    - default, org chart, mindmap Diagram 모드의 경우 데이터 객체 집합을 포함하는 배열로 설정됩니다
    ~~~jsx
    data: object[]; // 모든 도형과 연결선의 배열
    ~~~
    - PERT Diagram 모드의 경우 다음을 포함하는 객체입니다:
      -  `data` 배열(도형용: `"task"`, `"milestone"`, `"project"`)
      -  `links` 배열(도형 간 연결용)
    ~~~jsx
    {
        data: object[]; // 도형의 배열(작업, 마일스톤, 프로젝트)
        links: object[] // 도형 간 연결의 배열
    };
    ~~~
- `driver` - (선택) `DataDriver` 또는 데이터 유형(`"json"`, `"csv"`, `"xml"`), 기본값은 `"json"`입니다

### 예제 {#example}

- diagram의 org chart 모드의 경우:

~~~jsx
const data = [
    {
        id: "1",
        text: "Chairman & CEO",
        title: "Henry Bennett",
        img: "../common/img/avatar-1.png"
    },
    {
        id: "2",
        text: "Manager",
        title: "Mildred Kim",
        img: "../common/img/avatar-2.png"
    },
    {
        id: "3",
        text: "Technical Director",
        title: "Jerry Wagner",
        img: "../common/img/avatar-3.png"
    },
    { id: "1-2", from: "1", to: "2", type: "line" },
    { id: "1-3", from: "1", to: "3", type: "line" }
];

const diagram = new dhx.Diagram("diagram_container", {
    type: "org"
});

diagram.data.parse(data);
~~~

- diagram의 PERT 모드의 경우:

~~~jsx
const dataset = {
    data: [
        { id: "1", text: "Project #1", type: "project", parent: null },
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
    ],
    links: [
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" },
    ]
};

const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});

diagram.data.parse(dataset);
~~~

**관련 문서**:  [데이터 로드 및 저장](guides/loading_data.md)

**관련 예제**:
- [Diagram. Org chart 모드. 기본 초기화](https://snippet.dhtmlx.com/5ign6fyy)
- [Diagram. PERT chart. 초기화](https://snippet.dhtmlx.com/4h5fi7xd)
