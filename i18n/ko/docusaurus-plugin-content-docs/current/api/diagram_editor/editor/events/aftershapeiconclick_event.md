---
sidebar_label: afterShapeIconClick
title: Editor의 afterShapeIconClick 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 afterShapeIconClick 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# afterShapeIconClick

### 설명 {#description}

@short: 항목별 툴바의 컨트롤을 클릭한 후 발생합니다.

### 사용법 {#usage}

~~~jsx
"afterShapeIconClick": (
    iconId: string,
    shape: object
) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수와 함께 호출됩니다:

- `iconId` - 툴바 컨트롤의 유형 또는 id
- `shape` - 항목 구성이 포함된 객체

:::info
내부 Diagram Editor 이벤트를 처리하려면 `on()` 메서드를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {6-11}
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");
// 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.events.on("afterShapeIconClick", (iconId, shape) => {
    console.log(`
        You've clicked the ${iconId} toolbar control of the shape ${shape.id}
    `);
});
~~~

**변경 로그**: v3.1에서 추가되었습니다
