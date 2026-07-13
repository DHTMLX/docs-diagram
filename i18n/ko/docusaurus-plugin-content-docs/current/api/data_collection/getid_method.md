---
sidebar_label: getId()
title: Data Collection의 getId 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 getId 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 사용해 볼 수 있으며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getId()

### 설명 {#description}

@short: 인덱스로 항목의 id를 반환합니다

### 사용법 {#usage}

~~~jsx
getId(index: number): string | number;
~~~

### 매개변수 {#parameters}

- `index` - (필수) 항목의 인덱스

### 반환값 {#returns}

이 메서드는 항목의 id를 반환합니다

### 예제 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const id = diagram.data.getId(0); // -> "1" 반환
~~~
