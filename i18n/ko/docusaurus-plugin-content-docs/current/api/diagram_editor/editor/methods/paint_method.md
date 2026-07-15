---
sidebar_label: paint()
title: Editor의 paint 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 paint 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 확인해 보세요. 그리고 DHTMLX Diagram의 30일 무료 평가판을 다운로드하세요.
---

# paint()

### 설명 {#description}

@short: 에디터를 다시 그립니다

### 사용법 {#usage}

~~~jsx
paint(): void;
~~~

### 예제 {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.paint();
~~~
