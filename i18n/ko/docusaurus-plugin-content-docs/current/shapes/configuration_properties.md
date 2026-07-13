---
sidebar_label: 도형 속성
title: 도형 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 도형 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 도형 속성

:::note
색상 값은 HEX 형식으로 지정합니다.
:::

## 공통 속성 {#common-properties}

### 사용법 {#usage}

~~~jsx
const data = [
    // 도형 객체
    {
        type: string,
        id?: string | number,
        x?: number, // Diagram의 기본 모드에서 필수
        y?: number, // Diagram의 기본 모드에서 필수
        text?: string,
        editable?: boolean, // 기본값은 true
        height?: number,
        width?: number,
        fixed?: boolean, // 기본값은 false
        hidden?: boolean
    },
    // 추가 도형 객체
]
~~~

### 설명 {#description}

각 도형 객체는 다음 속성을 포함할 수 있습니다:

- `type` - (필수) 도형의 유형입니다(기본값: 기본 모드에서는 `"rectangle"`, 조직도 모드에서는 `"card"`, 마인드맵 모드에서는 `"topic"`, PERT 모드에서는 `"task"`)
- `id` - (선택 사항) 도형의 고유 id입니다
- `x` - (선택 사항) 도형 위치의 x 좌표입니다. 이 속성은 Diagram의 기본 모드에서는 **필수**입니다
- `y` - (선택 사항) 도형 위치의 y 좌표입니다. 이 속성은 Diagram의 기본 모드에서는 **필수**입니다
- `text` - (선택 사항) 도형에 표시될 텍스트입니다
- `editable` - (선택 사항) 더블 클릭으로 도형의 텍스트를 편집하는 기능을 활성화/비활성화합니다. 기본값은 *true*입니다. <br/>*이 속성은 사용자 지정 도형에는 사용할 수 없습니다.*
- `height` - (선택 사항) 도형의 높이입니다
- `width` - (선택 사항) 도형의 너비입니다
- `fixed` - (선택 사항) 도형의 이동 및 크기 조정을 활성화/비활성화합니다. 기본값은 *false*입니다
- `hidden` - (선택 사항) 도형을 숨길지 여부를 정의합니다

:::note
`"text"`/`"topic"` 도형의 경우 `height`와 `width` 값은 도형의 콘텐츠에 따라 자동으로 계산됩니다.
:::

## 사용자 지정 속성 {#custom-properties}

### 사용법 {#usage-1}

~~~jsx
const data = [
    // 도형 객체
    {
        // ... 공통 속성
        [key: string]?: any, // 사용자 지정 속성
        // ... 추가 사용자 지정 속성
    },
    // 추가 도형 객체
]
~~~

### 설명 {#description-1}

사용자 지정 도형용 데이터 세트를 준비할 때 도형의 구성 객체에 원하는 사용자 지정 속성을 추가할 수 있습니다:

- `key` - (선택 사항) 사용자 지정 도형을 위한 사용자 지정 속성입니다. 자세한 내용은 [사용자 지정 도형](shapes/custom_shape.md) 문서를 참조하세요. <br/>*사용자 지정 속성의 이름으로는 고유한 이름을 사용하세요. 다이어그램 도형 객체의 내부 속성을 재정의하는 것은 금지되어 있으며, 이를 어길 경우 다이어그램과 편집기가 올바르게 작동하지 않습니다.*

### 예제 {#example}

~~~jsx
const data = [
    {
        "id": "main",
        "name": "Kristin Mccoy",
        "post": "Medical director",
        "phone": "(405) 555-0128",
        "mail": "kmccoy@gmail.com",
        "photo": "../img/avatar-01.jpg"
    }
];
~~~

## 기본 모드 전용 속성 {#properties-specific-for-the-default-mode}

### 사용법 {#usage-2}

~~~jsx
const data = [
    // 도형 객체
    {
        // ... 공통 속성
        angle?: number,

        // 또는
        preview?: string,
        // 또는
        preview?: {
            img?: string,
            width?: number | string,
            height?: number | string,
            gap?: number | string,
            scale?: number
        }
    },
    // 추가 도형 객체
]
~~~

### 설명 {#description-2}

기본 모드의 다이어그램에 로드할 도형용 데이터 세트를 준비할 때 도형의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `angle` - (선택 사항) 도형 회전 각도입니다
- `preview` - (선택 사항) 이미지 경로/base64 이미지이거나, [편집기의 shapebar에 표시되는 도형 미리보기를 구성하기 위한](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes) 설정을 담은 객체입니다. 객체인 경우 다음과 같은 선택적 속성 집합을 포함할 수 있습니다:
  - `img` - (선택 사항) 이미지 경로 또는 base64 이미지입니다
  - `width` - (선택 사항) 이미지의 너비입니다
  - `height` - (선택 사항) 이미지의 높이입니다
  - `gap` - (선택 사항) 지정된 도형 유형에 대한 [preview](api/diagram_editor/shapebar/config/preview_property.md) 속성의 `gap` 어트리뷰트 값을 설정합니다
  - `scale` - (선택 사항) 지정된 도형 유형에 대한 [preview](api/diagram_editor/shapebar/config/preview_property.md) 속성의 `scale` 어트리뷰트 값을 설정합니다
   :::info
   `scale` 속성은 `img`, `width`, `height` 속성과 함께 적용할 수 없습니다
   :::

### 예제 {#example-1}

~~~jsx
const data = [
    { id: 1, x: 280, y: 0, text: "Start", type: "start", angle: 10 }
];
~~~

## 조직도 모드 전용 속성 {#properties-specific-for-the-org-chart-mode}

### 사용법 {#usage-3}

~~~jsx
const data = [
    // 도형 객체
    {
        // ... 공통 속성
        parent?: string | number,
        dx?: number,
        dy?: number,
        dir?: string,
        open?: boolean, // 기본값은 true
        assistant?: boolean,
        partner?: boolean,
        catchItem?: boolean,
        giveItem?: boolean

    },
    // 추가 도형 객체
]
~~~

### 설명 {#description-3}

조직도 모드의 다이어그램에 로드할 도형용 데이터 세트를 준비할 때 도형의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `parent` - (선택 사항) 상위 도형의 id입니다
- `dx` - (선택 사항) 도형의 왼쪽 오프셋입니다
- `dy` - (선택 사항) 도형의 위쪽 오프셋입니다
- `dir` - (선택 사항) 도형을 연결하는 방향입니다. 도형을 세로로 연결하려면 이 어트리뷰트를 `"vertical"` 값으로 설정하세요
- `open` - (선택 사항) 현재 도형의 하위 항목 표시 여부를 정의합니다. 기본값은 *true*입니다
- `assistant` - (선택 사항) 도형이 상위 도형의 어시스턴트 항목인지 여부를 정의합니다
- `partner` - (선택 사항) 도형이 상위 도형의 파트너 항목인지 여부를 정의합니다
- `catchItem` - (선택 사항) 항목이 이동 중인 항목을 캐치할 수 있는지 여부를 정의합니다
- `giveItem` - (선택 사항) 항목을 이동할 수 있는지 여부를 정의합니다

### 예제 {#example-2}

~~~jsx
const data = [
    {
        "id": "1",
        "text": "item 1",
    },
    {
        "id": "2",
        "text": "item 2",
        "parent": "1",
        "dir": "vertical"
    },
    {
        "id": "1.1",
        "text": "assistant for 1",
        "parent": "1",
        "assistant": true
    },
    {
        "id": "1.2",
        "text": "partner for 1",
        "parent": "1",
        "partner": true
    }
];
~~~

**관련 샘플**: [Diagram. 조직도 모드. 중첩된 세로 목록](https://snippet.dhtmlx.com/98tzmzpg)

## 마인드맵 모드 전용 속성 {#properties-specific-for-the-mindmap-mode}

### 사용법 {#usage-4}

~~~jsx
const data = [
    // 도형 객체
    {
        // ... 공통 속성
        parent?: string | number,
        dx?: number,
        dy?: number,
        open?: boolean, // 기본값은 true
        openDir?:{
            left?: boolean,
            right?: boolean
        },
        catchItem?: boolean,
        giveItem?: boolean
    },
    // 추가 도형 객체
]
~~~

### 설명 {#description-4}

마인드맵 모드의 다이어그램에 로드할 도형용 데이터 세트를 준비할 때 도형의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `parent` - (선택 사항) 상위 도형의 id입니다
- `dx` - (선택 사항) 도형의 왼쪽 오프셋입니다
- `dy` - (선택 사항) 도형의 위쪽 오프셋입니다
- `open` - (선택 사항) 현재 도형의 하위 항목 표시 여부를 정의합니다. 기본값은 *true*입니다
- `openDir` - (선택 사항) 루트 도형의 하위 항목을 표시/숨김 처리합니다. 이 객체는 두 개의 어트리뷰트를 사용합니다:
    - `left` - (선택 사항) 루트 도형 왼쪽의 하위 항목을 표시/숨김 처리합니다
    - `right` - (선택 사항) 루트 도형 오른쪽의 하위 항목을 표시/숨김 처리합니다
- `catchItem` - (선택 사항) 항목이 이동 중인 항목을 캐치할 수 있는지 여부를 정의합니다
- `giveItem` - (선택 사항) 항목을 이동할 수 있는지 여부를 정의합니다

**관련 샘플**: [Diagram editor. 마인드맵 모드. 감정 마인드맵](https://snippet.dhtmlx.com/lo1vm0e8)

:::info
자세한 내용은 [DHTMLX 라이브러리로 JavaScript 마인드맵 다이어그램을 만드는 방법](https://dhtmlx.com/blog/create-javascript-mindmap-diagram-dhtmlx-library/) 문서를 참조하세요
:::

### 예제 {#example-3}

~~~jsx
const data = [
    {
        id: "1",
        text: "main",
        openDir: {
            left: true,
            right: false
        }
    },
    {
        id: "2",
        text: "2",
        parent: "1",
        giveItem: false
    },
    {
        id: "3",
        text: "3",
        parent: "1",
        catchItem: false
    },
    {
        id: "4",
        text: "4",
        parent: "1"
    }
];
~~~

## "text", "topic" 및 플로우차트 도형 전용 속성 {#properties-specific-for-text-topic-and-flow-chart-shapes}

### 사용법 {#usage-5}

~~~jsx
const data = [
    // 도형 객체
    {
        // ... 공통 속성
        fill?: string,
        stroke?: string,
        strokeWidth?: number, // 기본값은 1
        strokeType?: "line" | "dash", // 기본값은 "line"
        strokeDash?: string,
        fontColor?: string,
        fontStyle?: "normal" | "italic" | "oblique", // 기본값은 "normal"
        fontWeight?: string, // 기본값은 "normal"
        fontSize?: number, // 기본값은 14
        textAlign?: "left" | "center" | "right", // 기본값은 "center"
        textVerticalAlign?: "top" | "center" | "bottom", // 기본값은 "center"
        lineHeight?: number // 기본값은 14
    },
    // 추가 도형 객체
]
~~~

### 설명 {#description-5}

`"text"`, `"topic"` 및 플로우차트 도형용 데이터 세트를 준비할 때 도형의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `fill` - (선택 사항) 도형의 색상입니다
- `stroke` - (선택 사항) 도형 외곽선의 색상입니다
- `strokeWidth` - (선택 사항) 도형 외곽선의 두께입니다. 기본값은 1입니다
- `strokeType` - (선택 사항) 외곽선 스트로크의 유형입니다. `"line"`(기본값), 점선의 경우 `"dash"`입니다
- `strokeDash` - (선택 사항) 점선 외곽선의 대시와 간격 패턴입니다
- `fontColor` - (선택 사항) 텍스트 글꼴의 색상입니다
- `fontStyle` - (선택 사항) 텍스트 글꼴의 스타일입니다. `"normal"`(기본값), `"italic"` 또는 `"oblique"`가 가능합니다
- `fontWeight` - (선택 사항) 텍스트 글꼴의 두께입니다. 가능한 값은 `"normal"`(기본값), `"bold"`, `"bolder"`, `"lighter"`, `"100"`~`"900"` 값이며, `"400"`은 normal과 동일하고 `"600"` 이상은 가장 굵은 글꼴입니다
- `fontSize` - (선택 사항) 픽셀 단위의 글꼴 크기입니다. 기본값은 14입니다
- `textAlign` - (선택 사항) 도형 내 텍스트의 정렬 방식입니다: `"left"`, `"center"`(기본값), `"right"`
- `textVerticalAlign` - (선택 사항) 도형 내 텍스트의 세로 정렬 방식입니다:`"top"`,`"center"`(기본값),`"bottom"`
- `lineHeight` - (선택 사항) 줄의 높이입니다. 기본값은 14입니다

### 예제 {#example-4}

~~~jsx
const data = [
    {
        "id": "u1585139915192",
        "type": "text",
        "x": 25,
        "y": 280,
        "text": "Investment decision",
        "width": 150,
        "height": 16,
        "lineHeight": 14,
        "fontSize": "16",
        "fontColor": "rgba(0,0,0,0.70)"
    }
];
~~~

## "card" 도형 전용 속성 {#properties-specific-for-card-shapes}

### 사용법 {#usage-6}

~~~jsx
const data = [
    // 도형 객체
    {
        // ... 공통 속성
        headerColor?: string
    },
    // 추가 도형 객체
]
~~~

### 설명 {#description-6}

`"card"` 도형용 데이터 세트를 준비할 때 도형의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `headerColor` - (선택 사항) 도형 헤더의 색상입니다

### 예제 {#example-5}

~~~jsx
const data = [
    {
        "id": 1,
        "type": "card",
        "text": "item: 1",
    },
    {
        "id": 2,
        "type": "card",
        "text": "item: 2",
        "parent": 1,
        "headerColor": "#5874CD"
    },
];
~~~

## "img-card" 도형 전용 속성 {#properties-specific-for-img-card-shapes}

### 사용법 {#usage-7}

~~~jsx
const data = [
    // 도형 객체
    {
        // ... 공통 속성
        img?: string,
        title?: string,
        headerColor?: string
    },
    // 추가 도형 객체
]
~~~

### 설명 {#description-7}

`"img-card"` 도형용 데이터 세트를 준비할 때 도형의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `img` - (선택 사항) 도형의 이미지입니다
- `title` - (선택 사항) 도형의 제목입니다
- `headerColor` - (선택 사항) 도형 헤더의 색상입니다

### 예제 {#example-6}

~~~jsx
const data = [
    {
        "id": "1",
        "type": "img-card",
        "text": "Chairman & CEO",
        "title": "Henry Bennett",
        "img": "../img/avatar-01.png",
        "headerColor": ""
    },
    {
        "id": "2",
        "type": "img-card",
        "text": "QA Lead",
        "title": "Emma Lynch",
        "img": "../img/avatar-02.png",
        "parent": "1",
        "headerColor": "#5874CD"
    }
];
~~~

## "task" 도형 전용 속성 {#properties-specific-for-task-shapes}

### 사용법 {#usage-8}

~~~jsx
const data = [
    // 도형 객체
    {
        type: "task",
        duration: number,
        start_date: string | Date,
        end_date?: string | Date,
        text?: string,
        parent?: string | number | null
        //... 공통 속성
    },
    // 추가 도형 객체
]
~~~

### 설명 {#description-8}

`"task"` 도형용 데이터 세트를 준비할 때 도형의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `text` - (선택 사항) 작업에 대한 설명입니다
- `start_date` - (필수) 작업의 시작 날짜입니다
- `end_date` - (선택 사항) 작업의 종료 날짜입니다
- `duration` - (필수) 작업의 기간입니다
- `parent` - (선택 사항) 작업의 상위 프로젝트 id입니다

### 예제 {#example-7}

~~~jsx
const data = [
    {
        "id": "4.2.1",
        "text": "Functional Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 18),
        "duration": 2
    }
];
~~~

## "milestone" 도형 전용 속성 {#properties-specific-for-milestone-shapes}

### 사용법 {#usage-9}

~~~jsx
const data = [
    // 도형 객체
    {
        type: "milestone",
        text?: string,
        parent?: string | number | null
        //... 공통 속성
    }
    // 추가 도형 객체
]
~~~

### 설명 {#description-9}

`"milestone"` 도형용 데이터 세트를 준비할 때 도형의 구성 객체에 다음 속성을 추가할 수 있습니다:

- `text` - (선택 사항) 작업에 대한 설명입니다
- `parent` - (선택 사항) 작업의 상위 프로젝트 id입니다

### 예제 {#example-8}

~~~jsx
const data = [
     {
        "id": "5.2",
        "text": "Product Launch",
        "type": "milestone",
        "parent": "5",
        "start_date": new Date(2026, 2, 1),
        "duration": 1
    }
];
~~~


**관련 문서**:

- [기본 도형](shapes/default_shapes.md)
- [사용자 지정 도형](shapes/custom_shape.md)
