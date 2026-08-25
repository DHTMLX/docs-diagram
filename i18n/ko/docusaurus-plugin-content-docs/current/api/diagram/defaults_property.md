---
sidebar_label: defaults
title: defaults 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 defaults 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# defaults

### 설명 {#description}

@short: 선택 사항입니다. 도형 또는 라인의 기본 설정을 지정하는 객체입니다

### 사용법 {#usage}

~~~jsx
defaults?: {
    [type: string]: object
};
~~~

### 매개변수 {#parameters}

`defaults` 속성은 일련의 `key:value` 쌍을 포함하는 객체입니다. 여기서 *key*는 도형 또는 라인의 유형이고, *value*는 해당 [도형](shapes/configuration_properties.md) 또는 [라인](lines/configuration_properties.md)의 설정값을 담은 객체입니다.

:::note
도형/라인의 기본 설정에서는 `type`과 `id`를 정의할 수 없습니다
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
    // "line" 유형의 모든 라인에 대한 기본 설정
    line: {
        strokeWidth: 3,
        stroke: "#245CE0"
    },
    // "dash" 유형의 모든 라인에 대한 기본 설정
    dash: {
        strokeWidth: 3,
        stroke: "#245CE0"
    }
};

const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    defaults
});
~~~

:::note
개별 유형의 도형/라인에 대한 기본 설정을 정의한 후에는, 해당 유형의 도형/라인에 대해 [데이터 세트를 준비](guides/loading_data.md#preparing-data-to-load)하는 과정에서 이 속성들을 생략하거나 값을 재정의할 수 있습니다.
:::

**변경 로그**: 라인에 대한 기본 설정을 지정하는 기능이 v4.2에서 추가되었습니다

**관련 문서**:

- [도형의 기본 설정 지정](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape)
- [도형 미리보기 설정](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)
