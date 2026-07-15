---
sidebar_label: defaultShapeType
title: defaultShapeType 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 defaultShapeType 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# defaultShapeType

### 설명 {#description}

@short: 선택 사항입니다. 도형의 기본 유형입니다

도형 객체에 `"type"` 속성이 없으면 이 값이 적용됩니다

### 사용법 {#usage}

~~~jsx
defaultShapeType?: string;
~~~

### 기본 설정 {#default-config}

- Diagram의 `default` 모드에서 (type: `"default"`)

~~~jsx
defaultShapeType: "rectangle"
~~~

- Diagram의 **조직도** 모드에서 (type: `"org"`)

~~~jsx
defaultShapeType: "card"
~~~

- Diagram의 `mindmap` 모드에서 (type: `"mindmap"`)

~~~jsx
defaultShapeType: "topic"
~~~

- Diagram의 **PERT** 모드에서 (type: `"pert"`)

~~~jsx
defaultShapeType: "task"
~~~

### 예제 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    defaultShapeType: "img-card"
});
~~~

**관련 문서**: [도형 유형 설정](shapes/default_shapes.md#setting-the-type-of-a-shape)
