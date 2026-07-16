---
sidebar_label: findAll()
title: Data Collection의 findAll 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 data collection의 findAll 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# findAll()

### 설명 {#description}

@short: 지정된 매개변수에 해당하는 모든 항목을 찾습니다

### 사용법 {#usage}

~~~jsx
findAll(rule: object): array;

// 또는

findAll(rule: function): array;
~~~

### 매개변수 {#parameters}

- `rule` - (필수) 지정할 수 있는 검색 기준:
  - 다음 매개변수를 포함하는 객체로 지정:
    - `by: string | function` - 검색 기준(항목 속성의 키 또는 검색 함수)
    - `match: string` - 항목 속성의 값
  - 함수로 지정: `DataCallback(item: T, index?: number, array?: T[])`

### 반환값 {#returns}

이 메서드는 일치하는 항목 객체의 배열을 반환합니다

### 예제 {#example}

~~~jsx {7,10-14}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//속성 키로 shape 검색
const shapes = diagram.data.findAll({ by: "text", match: "Manager" });

//함수로 shape 검색
const shapes = diagram.data.findAll(function (shapes) {
    if( shapes.text === "Manager" || shapes.text === "Marketer" ){
        return true;
    }
});
~~~

**관련 문서**:  [필요한 항목 찾기](guides/manipulating_items.md#finding-the-necessary-item)
