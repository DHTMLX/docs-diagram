---
sidebar_label: shapeType
title: Editor의 shapeType 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 shapeType 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 확인해 보세요. DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# shapeType

### 설명 {#description}

@short: 선택 사항입니다. 항목의 유형입니다

shape 객체에 `"type"` 속성이 없는 경우 이 값이 적용됩니다

### 사용법 {#usage}

~~~jsx
shapeType?: string;
~~~

### 기본 설정 {#default-config}

Editor의 기본 모드(type: `"default"`)에서:

~~~jsx
shapeType: "rectangle"
~~~

Editor의 조직도 모드(type: `"card"`)에서:

~~~jsx
shapeType: "card"
~~~

Editor의 마인드맵 모드(type: `"topic"`)에서:

~~~jsx
shapeType: "topic"
~~~

### 예제 {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    shapeType: "circle"
});
~~~

**관련 문서**:  [기본 도형](shapes/default_shapes.md)
