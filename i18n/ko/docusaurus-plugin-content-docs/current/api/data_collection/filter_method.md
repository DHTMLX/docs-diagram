---
sidebar_label: filter()
title: Data Collection의 filter 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 data collection의 filter 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# filter()

### 설명 {#description}

@short: 다이어그램에서 항목을 필터링합니다

### 사용법 {#usage}

~~~jsx
filter(
    rule?: function,
    config?: {
        id?: string,
        add?: boolean,
        permanent?: boolean
    }
): void;

// 또는

filter(
    rule?:{
        by?: string | number,
        match?: string | number | boolean,
        compare?: (value, match, item) => {}
    },
    config?:{
        id?: string,
        add?: boolean,
        permanent?: boolean
    }
): void;
~~~

### 매개변수 {#parameters}

- `rule` - (선택 사항) 필터링 기준
  - *function*으로 설정하면 함수에 지정된 규칙에 따라 필터링이 적용됩니다. 이 함수는 매개변수로 데이터 항목의 객체를 받습니다
  - *object*로 설정하면 매개변수에 다음 속성을 지정할 수 있습니다:
    - `by` - (선택 사항) 항목 속성의 키
    - `match` - (선택 사항) 일치시킬 패턴
    - `compare` - (선택 사항) 확장 필터링을 위한 함수입니다. 이 함수는 *true* 또는 *false*를 반환하며 다음 세 가지 매개변수를 받습니다:
      - `value` - 비교할 값
      - `match` - 일치시킬 패턴
      - `item` - 값을 비교할 데이터 항목(예: shape)
- `config` - (선택 사항) 필터링 매개변수를 정의하는 객체입니다. 다음 속성을 포함할 수 있습니다:
  - `id` - (선택 사항) 필터의 id
  - `add` - (선택 사항) 다음 필터링이 이미 필터링된 데이터에 적용될지(<i>true</i>), 또는 초기 데이터에 적용될지(<i>false</i>, 기본값) 정의합니다
  - `permanent` - (선택 사항) 현재 필터를 영구적으로 만들려면 *true*로 설정합니다. 다음 필터링의 구성 객체에 `add:true` 속성이 없어도 이 필터는 적용됩니다. 이러한 필터는 [`resetFilter()`](api/data_collection/resetfilter_method.md) 메서드로만 제거할 수 있습니다

### 예제 {#example}

~~~jsx {6-9,11-12}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

// 함수에 지정된 규칙으로 필터링
diagram.data.filter(function (shape) {
    return shape.id > 3;
});

// shape 속성의 키로 필터링
diagram.data.filter({ by: "text", match: "Read N" });
~~~

다이어그램을 초기 상태로 되돌리려면 매개변수 없이 `filter()` 메서드를 호출하세요.

~~~jsx
diagram.data.filter();
~~~

**관련 문서**:  [항목 필터링](guides/manipulating_items.md#filtering-items)

**관련 샘플**: [Diagram. Data. Shape 필터링](https://snippet.dhtmlx.com/tm43bsgn)

**변경 로그**: v6.0에서 업데이트
