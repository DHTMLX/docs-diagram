---
sidebar_label: LineTitle 속성
title: LineTitle 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 LineTitle 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보십시오.
---

# LineTitle 속성 {#linetitle-properties}

:::note
색상 값은 HEX 형식으로 지정합니다.
:::

### 사용법 {#usage}

~~~jsx
const data = [
    // line title 객체
    {
        type: "lineTitle",
        id?: string | number,
        text: string,
        parent: string | number,

        distance?: number, // 기본값은 50
        autoPosition?: boolean, // 기본값은 true
        editable?: boolean, // 기본값은 true
        fixed?: boolean, // 기본값은 false
        hidden?: boolean, // 기본값은 false

        fill?: string,
        fontSize?: string | number, // 기본값은 14
        lineHeight?: string | number, // 기본값은 14
        fontStyle?: "normal" | "italic" | "oblique", // 기본값은 "normal"
        fontColor?: string, // 기본값은 "#4C4C4C"
        fontWeight?: string, // 기본값은 "500"
        textAlign?: "center" | "left" | "right" // 기본값은 "center"
    },
    // 그 밖의 line 객체
];
~~~

### 설명 {#description}

각 line title 객체에는 다음 속성이 포함될 수 있습니다:

- `type` - (필수) 항목의 유형, `"lineTitle"`로 설정합니다
- `id` - (선택 사항) line title의 id, 기본적으로 자동 생성됩니다
- `parent` - (필수) 제목을 표시할 대상 line의 id
- `text` - (필수) line title의 텍스트
- `distance` - (선택 사항) line 위에서 제목이 표시되는 지점까지의 거리를 0에서 100 범위로 지정하며, 기본값은 50입니다
- `autoPosition` - (선택 사항) 텍스트의 방향을 정의합니다. *true*로 설정하면 텍스트의 방향이 line의 방향과 동일해지고, *false*이면 텍스트의 방향이 항상 수평이 됩니다; 기본값은 *true*입니다
- `editable` - (선택 사항) 더블 클릭하여 항목의 텍스트를 편집하는 기능을 활성화/비활성화합니다; 기본값은 *true*입니다
- `fixed` - (선택 사항) 지정된 `distance` 값으로 항목의 텍스트를 고정하는 기능을 활성화/비활성화합니다; 기본값은 *false*입니다
- `hidden` - (선택 사항) 텍스트를 숨길지 여부를 정의합니다; 기본값은 *false*입니다
- `fill` - (선택 사항) line title 항목의 배경 색상
- `fontSize` - (선택 사항) 글꼴 크기, 기본값은 14입니다
- `lineHeight` - (선택 사항) 텍스트 줄의 높이, 기본값은 14입니다
- `fontStyle` - (선택 사항) 텍스트 글꼴의 스타일: `"normal"` (기본값), `"italic"`, `"oblique"`
- `fontColor` - (선택 사항) 텍스트 글꼴의 색상, 기본값은 "#4C4C4C"입니다
- `fontWeight` - (선택 사항) 텍스트 글꼴 굵기, 가능한 값은 다음과 같습니다: `"normal"`, `"bold"`, `"bolder"`, `"lighter"`, `"100"`~`"900"` 값이며, `"400"`은 normal과 동일하고, `"600"` 이상은 가장 굵은 글꼴입니다; 기본값은 `"500"`입니다
- `textAlign` - (선택 사항) 텍스트의 정렬: `"center"`(기본값), `"left"`, `"right"`

### 예제 {#example}

~~~jsx
const data = [
    // 도형 구성하기
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },

    // line 구성하기
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },

    // line title 구성하기
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Some text" }
];
~~~

**관련 문서**: [LineTitle 구성하기](/line_titles/)
