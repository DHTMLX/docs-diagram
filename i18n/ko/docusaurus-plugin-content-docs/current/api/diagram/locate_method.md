---
sidebar_label: locate()
title: locate 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 locate 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# locate()

### 설명 {#description}

@short: 지정된 HTML 이벤트 또는 태그에서 항목의 ID를 가져옵니다

### 사용법 {#usage}

~~~jsx
locate(event: object): any;
~~~

### 매개변수 {#parameters}

- `event` - (필수) 네이티브 이벤트 객체

### 반환값 {#returns}

이 메서드는 이벤트/태그와 관련된 도형의 ID를 반환합니다

### 예제 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

const id = diagram.locate(event);
~~~
