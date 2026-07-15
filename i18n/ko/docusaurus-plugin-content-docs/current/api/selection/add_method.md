---
sidebar_label: add()
title: Selection의 add 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 selection의 add 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# add()

### 설명 {#description}

@short: 지정된 항목을 selection 목록에 추가합니다

### 사용법 {#usage}

~~~jsx
add({
    id: string | number,
    join?: boolean,
    batch?: (string | number)[]
}): boolean;
~~~

### 매개변수 {#parameters}

이 메서드는 다음 매개변수를 가진 객체를 인수로 받습니다:

- `id` - (필수) 항목의 id
- `join` - (선택) 선택된 요소를 selection 목록에 추가하는 모드입니다. 이 매개변수가 *false*로 설정되었거나 전달되지 않으면, 이전에 selection 목록에 추가된 항목이 재설정됩니다
- `batch` - (선택) 선택할 항목의 목록입니다(미리 알고 있는 경우)

### 반환값 {#returns}

메서드는 다음을 반환합니다:

- `true` - 요소가 selection 목록에 없었고 성공적으로 추가된 경우
- `false` - 어떤 이유로든 요소가 selection 목록에 추가되지 않은 경우, 예를 들어 요소가 이미 selection 목록에 추가되어 있던 경우

### 예제 {#example}

~~~jsx {8,11-12,15-16}
// "select:true" 옵션으로 diagram을 생성해야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 데이터 로드
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> 항목이 선택된 경우 true를 반환합니다
console.log(diagram.selection.getIds()); // -> ["1"]

// id가 "2"인 항목을 이미 선택된 항목에 추가합니다
diagram.selection.add({ id: "2", join: true });
console.log(diagram.selection.getIds()); // -> ["1", "2"]

// 이전에 선택된 항목을 제거하고 id가 "3"인 항목을 추가합니다
diagram.selection.add({ id: "3" });
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

**변경 로그**: v6.0에서 업데이트

**관련 문서**:

- [diagram.config.select](api/diagram/select_property.md)
- [항목 선택](guides/manipulating_items.md#selecting-items)

**관련 샘플**: [Diagram. Selection. 항목 선택](https://snippet.dhtmlx.com/jyoxn5h7)
