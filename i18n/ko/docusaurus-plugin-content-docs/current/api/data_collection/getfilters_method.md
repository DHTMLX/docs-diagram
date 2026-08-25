---
sidebar_label: getFilters()
title: Data Collection의 getFilters 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 data collection의 getFilters 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# getFilters()

### 설명 {#description}

@short: 적용된 필터가 있는 객체를 반환합니다

### 사용법 {#usage}

~~~jsx
getFilters({ permanent?: boolean }): object;
~~~

### 매개변수 {#parameters}

- `permanent` - (선택 사항) 기본값은 *false*입니다. 영구 필터 목록을 가져올 수 있습니다

### 반환값 {#returns}

이 메서드는 적용된 필터가 있는 객체를 반환하며, 여기서:
- `key` - 필터의 id
- `value` - [`rule` 및 `config` 속성](api/data_collection/filter_method.md#parameters)이 있는 객체

### 예제 {#example}

~~~jsx {6-7}
const diagram = new dhx.Diagram("diagram_container", {
    // 구성 설정
});
diagram.data.parse(data);

const filters = diagram.data.getFilters(); // 적용된 모든 필터를 가져옵니다
console.log(filters);
~~~

**변경 로그**: v6.0에서 추가
