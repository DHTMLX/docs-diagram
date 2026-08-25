---
sidebar_label: gridStep
title: Editor의 gridStep 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 gridStep 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# gridStep

### 설명 {#description}

@short: 선택 사항. 항목을 이동하는 단계를 정의하는 grid step의 크기를 설정합니다

grid step 값을 변경하면 Grid area의 점 사이 거리도 함께 변경됩니다

### 사용법 {#usage}

~~~jsx
gridStep?: number;
~~~

:::info
지정된 숫자는 1 이상이어야 합니다
:::

### 기본 설정 {#default-config}

~~~jsx
gridStep: 10
~~~

### 예제 {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    gridStep:20
});
~~~

:::note
editor에서 항목을 이동할 때는 화살표 키를 사용하는 것을 권장합니다. 이 방법은 항목을 정확히 한 grid step만큼 이동시키지만, 마우스를 사용하면 항목이 여러 grid step만큼 이동할 수 있습니다.
:::

**Related article**: [Grid area](guides/diagram_editor/grid_area.md)
