---
sidebar_label: exists()
title: Data Collection의 exists 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 exists 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# exists()

### 설명 {#description}

@short: 지정된 항목이 다이어그램에 존재하는지 확인합니다

### 사용법 {#usage}

~~~jsx
exists(id: string | number): boolean;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 확인할 항목의 id

### 반환값 {#returns}

이 메서드는 항목이 존재하면 `true`를, 존재하지 않으면 `false`를 반환합니다

### 예제 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const shape = diagram.data.exists("1");
~~~
