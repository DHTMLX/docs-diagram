---
sidebar_label: add()
title: Data Collection의 add 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 add 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# add()

### 설명 {#description}

@short: 다이어그램에 새 항목을 추가합니다

### 사용법 {#usage}

~~~jsx
add(new_item: object | array): string | number | array;
~~~

### 매개변수 {#parameters}

- `new_item` - (필수) 새 항목의 객체 또는 항목 객체의 배열

### 반환값 {#returns}

이 메서드는 항목의 id 또는 항목 id의 배열을 반환합니다

### 예제 {#example}

도형을 연결하는 방법에는 두 가지가 있습니다. parent ID가 지정된 도형을 추가할 수 있습니다:

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "org"
});
diagram.data.parse(data);

diagram.data.add({ id: "3.2", text: "New Item", type: "card", parent: "3" });
~~~

또는 도형과 커넥터 라인 객체를 추가할 수 있습니다:

~~~jsx {2,6-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.add({ type: "card", id: "3.2", text: "New Item" });
diagram.data.add({ type: "line",  from: "3", to: "3.2" });
~~~

**관련 문서**:  [항목 추가](guides/manipulating_items.md#adding-an-item)

**관련 샘플**: [Diagram. 데이터. 항목 추가/삭제](https://snippet.dhtmlx.com/8wi20uop)
