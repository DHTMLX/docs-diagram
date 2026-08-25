---
sidebar_label: 라인 속성
title: 라인 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 라인 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 라인 속성

:::note
색상 값은 HEX 형식으로 지정합니다.
:::

## 공통 속성 {#common-properties}

### 사용법 {#usage}

~~~jsx
const data = [
    // 라인 객체
    {
        type: "line" | "dash",
        id?: string | number,
        from?: string | number,
        to?: string | number,
        connectType?: "straight" | "elbow" | "curved",
        strokeWidth?: number, // 기본값은 2
        stroke?: string
    },
    // 추가 라인 객체
]
~~~

### 설명 {#description}

각 라인 객체는 다음 속성을 포함할 수 있습니다:

- `type` - (필수) 커넥터 라인의 유형입니다: "*line*" 또는 "*dash*"
- `id` - (선택 사항) 커넥터의 id입니다
- `from` - (선택 사항) 상위 도형의 id입니다
- `to` - (선택 사항) 하위 도형의 id입니다
- `connectType` - (선택 사항) 라인의 연결 유형입니다: ["straight"](/lines/#lines-in-the-default-mode), ["elbow"](/lines/#lines-in-the-org-chart-mode)(기본/조직도 모드의 기본 유형), ["curved"](/lines/#lines-in-the-mindmap-mode)(마인드맵 모드의 기본 유형)
- `strokeWidth` - (선택 사항) 라인의 두께입니다. 기본값은 2입니다
- `stroke` - (선택 사항) 라인의 색상입니다. 기본값은 기본 모드에서 "#2198F3", 조직도/마인드맵 모드에서 "#CCC"입니다

## 기본 모드 전용 속성 {#properties-specific-for-the-default-mode}

### 사용법 {#usage-1}

~~~jsx
const data = [
    // 라인 객체
    {
        // ... 공통 속성
        forwardArrow?: string, // 기본값은 "filled"
        backArrow?: string, // 기본값은 "filled"
        fromSide?: "top" | "bottom" | "left" | "right" | "center",
        toSide?: "top" | "bottom" | "left" | "right" | "center",
        cornersRadius?: number,
        customGap?: number,
        points?: [
            { x: number, y: number, custom?: boolean },
            // 추가 포인트 객체
        ]
    },
    // 추가 라인 객체
]
~~~

### 설명 {#description-1}

기본 모드의 다이어그램에 로드할 라인용 데이터 세트를 준비할 때 라인의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `forwardArrow` - (선택 사항) 정방향 화살표 커넥터를 설정하고 화살표의 유형을 정의합니다(기본값은 `"filled"`)
- `backArrow` - (선택 사항) 역방향 화살표 커넥터를 설정하고 화살표의 유형을 정의합니다(기본값은 `"filled"`)
- `fromSide` - (선택 사항) 연결이 시작되는 도형의 측면입니다("*top*", "*bottom*", "*left*","*right*", "*center*")
- `toSide` - (선택 사항) 다른 도형이 연결되는 도형의 측면입니다("*top*", "*bottom*", "*left*", "*right*", "*center*")
- `cornersRadius` - (선택 사항) 커넥터 모서리의 라운딩 반경입니다
- `customGap` - (선택 사항) 도형에서 커넥터 라인의 직각 굴곡부까지의 거리를 설정합니다
- `points` - (선택 사항) 라인의 포인트 객체 배열을 설정합니다. 각 객체는 다음 속성을 포함합니다:
    - `x` - (필수) 포인트의 x 좌표입니다
    - `y` - (필수) 포인트의 y 좌표입니다
    - `custom` - (선택 사항) 포인트의 고정 여부를 정의합니다. *true*인 경우 포인트의 위치는 상호작용 후에만 변경할 수 있습니다

### 예제 {#example}

~~~jsx
const data = [
    // 도형 구성
    { "id": 1, "x": 200, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 200, "y": 320, "text": "Call Client and \n set-up Appointment", "type": "process" },
    // 라인 구성
    {
        "type": "line",
        "stroke": "#0AB169",
        "connectType": "straight",
        "from": 1,
        "to": 2,
        "fromSide": "bottom",
        "toSide": "top",
        "forwardArrow": "filled"
    }
];
~~~

## PERT 모드의 링크 전용 속성 {#properties-specific-for-links-in-the-pert-mode}

### 사용법 {#usage-2}

~~~jsx
const dataset = {
    data: [...], // 도형 배열(작업, 마일스톤, 프로젝트)
    links: [
        // 링크 객체
        {
            id?: string | number,
            source: string | number,
            target: string | number
        },
        // 추가 링크 객체
    ]
}
~~~

### 설명 {#description-2}

PERT 모드의 다이어그램에 로드할 링크용 데이터 세트를 준비할 때 링크의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `id` - (선택 사항) 링크 커넥터의 id입니다
- `source` - (필수) 링크가 시작되는 작업의 id입니다
- `target` - (필수) 링크가 종료되는 작업의 id입니다

:::info 중요
PERT Diagram에서는 `type: "0"`("finish" -> "start") 유형의 링크만 지원된다는 점에 유의하세요. [DHTMLX Gantt 차트에서 사용되는 다른 모든 링크 유형](https://docs.dhtmlx.com/gantt/desktop__link_properties.html)도 `type: "0"`으로 처리됩니다.
:::

:::tip
Diagram의 데이터 컬렉션에 있는 항목의 id는 고유해야 하므로, 데이터를 로드하거나 새 링크를 추가할 때 기존 링크의 id에 `$link` 접두사가 추가된다는 점에 유의하세요.

예를 들어:

~~~jsx
{
    data: [...],
    links: [
        { id: "1" }, // 다이어그램에서 "$link:1"로 사용할 수 있습니다
    ]
}

// diagram.data.getItem("$link:1");
~~~
:::

### 예제 {#example-1}

~~~jsx {11-16}
const dataset = {
    data: [
        // 프로젝트 도형 구성
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 작업 도형 구성
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // 링크 객체 구성
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
};
~~~

**변경 로그**:

- Diagram의 PERT 모드에서 사용되는 `links` 유형의 커넥터가 v6.1에서 추가되었습니다
- `line` 객체의 `title` 속성이 v6.0에서 지원 중단되었습니다

**관련 문서**: [라인 구성](/lines/)
