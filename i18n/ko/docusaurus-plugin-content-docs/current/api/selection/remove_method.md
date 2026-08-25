---
sidebar_label: remove()
title: Selection의 remove 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 selection의 remove 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# remove()

### 설명 {#description}

@short: 인수 없이 호출되면 지정된 항목 또는 선택 목록의 모든 항목을 제거합니다

### 사용법 {#usage}

~~~jsx
remove({
    id: string | number
}): boolean;

//또는

remove(): boolean;
~~~

### 매개변수 {#parameters}

이 메서드는 다음 매개변수를 가진 객체를 인수로 받을 수 있습니다:

- `id` - (필수) 선택 목록에서 제거할 항목의 id

### 반환값 {#returns}

이 메서드는 항목의 선택 해제 또는 목록 초기화가 성공적으로 수행되면 `true`를 반환합니다

### 예제 {#example}

~~~jsx {9}
// diagram은 "select:true" 옵션으로 생성되어야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 데이터 로드
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> 항목이 선택 해제되면 true를 반환합니다
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

인수 없이 호출되면 이 메서드는 선택 목록을 초기화합니다:

~~~jsx {9-10}
// diagram은 "select:true" 옵션으로 생성되어야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 데이터 로드
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// 선택 목록에서 모든 항목 제거
diagram.selection.remove();
console.log(diagram.selection.getIds()); // -> []
~~~

**변경 로그**: v6.0에서 업데이트

**관련 문서**:

- [diagram.config.select](api/diagram/select_property.md)
- [항목 선택](guides/manipulating_items.md#selecting-items)

**관련 샘플**: [Diagram. Selection. 항목 선택](https://snippet.dhtmlx.com/jyoxn5h7)
