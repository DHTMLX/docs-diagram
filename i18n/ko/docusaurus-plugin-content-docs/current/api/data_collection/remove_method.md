---
sidebar_label: remove()
title: Data Collection의 remove 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 remove 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# remove()

### 설명 {#description}

@short: 다이어그램에서 지정된 항목을 삭제합니다

:::note
다이어그램이 org(`type: "org"`) 또는 mindmap(`type: "mindmap"`) 모드로 초기화된 경우, 도형을 삭제하면 이 도형에 대한 링크와 모든 하위 도형도 함께 제거됩니다
:::

### 사용법 {#usage}

~~~jsx
remove(id: string | number | array): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 삭제할 항목의 id(들)

### 예제 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.remove("2");
~~~

**관련 문서**:  [항목 삭제](guides/manipulating_items.md#deleting-items)

**관련 샘플**: [Diagram. Data. 항목 추가/삭제](https://snippet.dhtmlx.com/8wi20uop)
