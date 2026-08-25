---
sidebar_label: showItem()
title: showItem 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 showItem 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# showItem()

### 설명 {#description}

@short: 스크롤을 조정하여 대상 항목이 표시되도록 합니다

### 사용법 {#usage}

~~~jsx
showItem(id: string | number): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 대상 항목의 **ID**

### 예제 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.showItem(123);
~~~

**관련 예제**:

- [Diagram. 도형 검색](https://snippet.dhtmlx.com/d7kvzq4r)
- [Diagram. 콘텐츠 스크롤](https://snippet.dhtmlx.com/f970hbym)
