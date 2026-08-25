---
sidebar_label: import()
title: Editor의 import 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 import 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 확인해 보세요. 그리고 DHTMLX Diagram의 30일 무료 평가판을 다운로드하세요.
---

# import()

### 설명 {#description}

@short: 기존 다이어그램의 데이터를 에디터로 가져옵니다

### 사용법 {#usage}

~~~jsx
import(diagram: object): void;
~~~

### 매개변수 {#parameters}

- `diagram` - (필수) 다이어그램 객체

### 예제 {#example}

~~~jsx
// Diagram 초기화
const diagram = new dhx.Diagram("diagram", {
    type: "org"
});
// Diagram에 데이터 로드
diagram.data.parse(data);

// Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");

// Diagram에서 Editor로 데이터 가져오기
editor.import(diagram);
~~~

지원되는 모든 데이터 형식으로 데이터를 로드할 수 있습니다. 자세한 내용은 [`parse()`](api/data_collection/parse_method.md) 문서를 참고하세요.

**관련 샘플**: [Diagram editor. 조직도 모드. 라이브 에디터](https://snippet.dhtmlx.com/bng7ego7)
