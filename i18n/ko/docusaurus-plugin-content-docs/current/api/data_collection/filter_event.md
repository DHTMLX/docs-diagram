---
sidebar_label: filter
title: Data Collection의 filter 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 data collection의 filter 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# filter

### 설명 {#description}

@short: Data Collection을 필터링한 후에 발생합니다

### 사용법 {#usage}

~~~jsx
filter: (filter?: object) => void;
~~~

### 매개변수 {#parameters}

`filter` 이벤트의 콜백은 다음 매개변수와 함께 호출됩니다:

- `object: {key: object }` - 모든 활성 필터를 포함하는 객체이며, 여기서
    - `key` - 활성 필터의 id
    - `object` - [`rule` 및 `config` 속성](api/data_collection/filter_method.md#parameters)이 있는 객체

:::info
Diagram Data Collection의 내부 이벤트를 처리하려면 `on()` 메서드를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {7-9}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.events.on("filter", (filter) => {
    console.log("Items were filtered");
});
~~~
