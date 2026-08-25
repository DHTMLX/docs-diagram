---
sidebar_label: update()
title: Data Collection의 update 메서드
description: DHTMLX JavaScript Diagram 라이브러리 설명서에서 Data Collection의 update 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고 코드 예제와 라이브 데모를 사용해 보고 DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# update()

### 설명 {#description}

@short: 항목의 속성을 업데이트합니다

:::note
이 메서드는 항목의 *id* 또는 *type*을 변경하는 데 사용할 수 없습니다
:::

### 사용법 {#usage}

~~~jsx
update(
    id: string | number,
    newItem: object
): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 업데이트해야 하는 항목의 id
- `newItem` - (필수) 업데이트해야 하는 속성의 해시

### 예제 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.update(123, { text:"New text" });
~~~

**관련 문서**:  [항목 업데이트](guides/manipulating_items.md#updating-an-item)
