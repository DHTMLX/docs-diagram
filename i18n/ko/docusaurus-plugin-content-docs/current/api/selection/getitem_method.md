---
sidebar_label: getItem()
title: Selection의 getItem 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 selection의 getItem 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getItem()

### 설명 {#description}

@short: 지정된 선택 항목의 객체를 반환하며, 인수 없이 호출하면 마지막으로 선택된 항목의 객체를 반환합니다

### 사용법 {#usage}

~~~jsx
getItem({
    id: string | number
}): object;

//또는

getItem(): object;
~~~

### 매개변수 {#parameters}

이 메서드는 다음 매개변수를 가진 객체를 인수로 받습니다:

- `id` - (필수) 해당 항목의 id

### 반환값 {#returns}

이 메서드는 지정된 항목이 선택 목록에 있으면 해당 항목의 객체를 반환하고, 인수 없이 호출되면 마지막으로 선택된 항목의 객체를 반환합니다

### 예제 {#example}

~~~jsx {9-11,13-15,17-19}
// diagram은 "select:true" 옵션으로 생성되어야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 데이터 로드
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// 마지막으로 선택된 항목 가져오기
const item = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner"}

// id로 선택된 항목 가져오기
const item = diagram.selection.getItem({ id: "1" });
// -> {id: "1", text: "Chairman & CEO", title: "Henry Bennett"}

// 선택 목록에 없는 항목을 가져오려는 시도
const item = diagram.selection.getItem({ id: "4" });
// -> 지정된 id를 가진 항목이 선택 목록에 없으므로 undefined를 반환합니다
~~~

**변경 로그**: v6.0에서 업데이트

**관련 문서**:

- [diagram.config.select](api/diagram/select_property.md)
- [항목 선택](guides/manipulating_items.md#selecting-items)

**관련 샘플**: [Diagram. Selection. 항목 선택](https://snippet.dhtmlx.com/jyoxn5h7)
