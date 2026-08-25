---
sidebar_label: paint()
title: paint 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 paint 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보세요.
---

# paint()

### 설명 {#description}

@short: 다이어그램을 다시 그립니다

### 사용법 {#usage}

~~~jsx
paint(): void;
~~~

### 예제 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.paint();
~~~
