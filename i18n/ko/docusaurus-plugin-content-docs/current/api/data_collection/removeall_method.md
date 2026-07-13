---
sidebar_label: removeAll()
title: Data Collection의 removeAll 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 removeAll 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# removeAll()

### 설명 {#description}

@short: 다이어그램에서 모든 항목을 삭제합니다

### 사용법 {#usage}

~~~jsx
removeAll(): void;
~~~

### 예제 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.removeAll();
~~~

**관련 문서**:  [항목 삭제](guides/manipulating_items.md#deleting-items)

**관련 샘플**: [Diagram. Data. 항목 추가/삭제](https://snippet.dhtmlx.com/8wi20uop)
