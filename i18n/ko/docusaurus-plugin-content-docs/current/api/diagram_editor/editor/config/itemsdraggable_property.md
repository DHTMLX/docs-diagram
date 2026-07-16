---
sidebar_label: itemsDraggable
title: Editor의 itemsDraggable 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 itemsDraggable 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# itemsDraggable

:::info
이 속성은 org chart 및 mindmap 모드에서만 작동합니다. 이동한 항목은 모든 하위 항목과 함께 드래그됩니다.
:::

### 설명 {#description}

@short: 선택 사항. 항목을 한 부모 항목에서 다른 부모 항목으로 드래그하는 기능을 활성화/비활성화합니다

### 사용법 {#usage}

~~~jsx
itemsDraggable?: boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx
itemsDraggable: true
~~~

### 예제 {#example}

~~~jsx
const editor = new dhx.DiagramEditor(document.body, {
    type: "org", //  org" or "mindmap"
    itemsDraggable: false
});
~~~

**Change log**: v4.1에서 추가
