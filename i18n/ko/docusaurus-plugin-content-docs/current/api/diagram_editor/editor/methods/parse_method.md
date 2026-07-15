---
sidebar_label: parse()
title: Editor의 parse 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 parse 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 확인해 보세요. 그리고 DHTMLX Diagram의 30일 무료 평가판을 다운로드하세요.
---

# parse()

### 설명 {#description}

@short: 로컬 데이터 소스에서 에디터로 데이터를 로드합니다

### 사용법 {#usage}

~~~jsx
parse(data: array): void;
~~~

### 매개변수 {#parameters}

- `data` - (필수) 에디터로 파싱할 데이터

지원되는 모든 데이터 형식으로 데이터를 로드할 수 있습니다. 자세한 내용은 [`parse()`](api/data_collection/parse_method.md) 문서를 참고하세요.

### 예제 {#example}

~~~jsx
const data = [
    // 도형
    {
        "id": "a",
        "x": 50,
        "y": 53,
        "type": "triangle",
        "text": "Shape 1",
        "height": 50,
        "width": 50
    },
    {
        "id": "b",
        "x": 367,
        "y": 158,
        "type": "rectangle",
        "text": "Shape 2"
    },

    // 연결선
    {
        "id": "ab",
        "from":"a",
        "to":"b",
        "type": "line"
    },
];

const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);
~~~

**관련 예제**:

- [Diagram editor. 기본 모드. 기본 초기화](https://snippet.dhtmlx.com/xshe9ut7)
- [Diagram editor. 조직도 모드. 기본 초기화](https://snippet.dhtmlx.com/og4qm3ja)
- [Diagram editor. 마인드맵 모드. 감정 마인드맵](https://snippet.dhtmlx.com/lo1vm0e8)
