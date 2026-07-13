---
sidebar_label: find()
title: Data Collection의 find 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 data collection의 find 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# find()

### 설명 {#description}

@short: 지정된 매개변수에 해당하는 항목을 찾습니다

### 사용법 {#usage}

~~~jsx
find(rule: object): object;

// 또는

find(rule: function): object;
~~~

### 매개변수 {#parameters}

- `rule` - (필수) 지정할 수 있는 검색 기준:
  - 다음 매개변수를 포함하는 객체로 지정:
    - `by: string | function` - 검색 기준(항목 속성의 키 또는 검색 함수)
    - `match: string` - 항목 속성의 값
  - 함수로 지정: `DataCallback(item: T, index?: number, array?: T[])`

### 반환값 {#returns}

이 메서드는 지정된 기준과 일치하는 항목의 첫 번째 객체를 반환합니다

### 예제 {#example}

~~~jsx {7,10-12}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//속성 키로 shape 검색
const shape = diagram.data.find({ by: "text", match: "Manager" });

//함수에 지정된 규칙으로 shape 검색
const shape = diagram.data.find((shape) => {
    if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});
~~~

**관련 문서**:  [필요한 항목 찾기](guides/manipulating_items.md#finding-the-necessary-item)

**관련 샘플**: [Diagram. Data. 필요한 Shape 찾기](https://snippet.dhtmlx.com/sete9z73)
