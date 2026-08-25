---
sidebar_label: defaults
title: Editor의 defaults 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editor의 defaults 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# defaults

### 설명 {#description}

@short: 선택 사항입니다. 도형 또는 선의 기본 설정을 지정하는 객체입니다.

### 사용법 {#usage}

~~~jsx
defaults?: {
    [type: string]: object
};
~~~

### 매개변수 {#parameters}

`defaults` 객체에는 `key:value` 쌍의 집합이 포함될 수 있습니다. 여기서 *key*는 도형 또는 선의 유형이고, *value*는 이에 해당하는 [도형](shapes/configuration_properties.md) 또는 [선](lines/configuration_properties.md)의 구성 설정 집합입니다.

:::note
`type` 및 `id` 속성은 도형/선의 기본 설정에서 정의할 수 없습니다.
:::

### 예제 {#example}

~~~jsx {24}
const defaults = {
    // "rectangle" 유형의 모든 도형에 대한 기본 설정
    rectangle: {
        fill: "#CEEFE1",
        stroke: "#0AB169",
        strokeWidth: 2,
        width: 140,
        height: 140,
        text: "Default text"
    },
    // "line" 유형의 모든 선에 대한 기본 설정
    line: {
        strokeWidth: 3,
        stroke: "#245CE0"
    },
    // "dash" 유형의 모든 선에 대한 기본 설정
    dash: {
        strokeWidth: 3,
        stroke: "#245CE0"
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    defaults
});
~~~

:::info
개별 유형의 도형/선에 대한 기본 설정을 정의한 후에는, 해당 유형의 도형/선에 대해 [데이터 세트를 준비](guides/loading_data.md#preparing-data-to-load)할 때 이러한 속성을 생략하거나 값을 재정의할 수 있습니다.
:::

**변경 로그:** 선에 대한 기본 설정을 지정하는 기능이 v4.2에서 추가되었습니다.

**관련 문서:**

- [도형의 기본 설정 구성하기](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape)
- [도형 미리보기 설정하기](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)

**관련 샘플:** [Diagram editor. 기본 선(커넥터) 유형 설정하기. 도형 A를 도형 B에 연결해 보기](https://snippet.dhtmlx.com/22abzn5m)
