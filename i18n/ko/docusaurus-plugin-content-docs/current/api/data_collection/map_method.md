---
sidebar_label: map()
title: Data Collection의 map 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 map 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# map()

### 설명 {#description}

@short: 다이어그램의 모든 항목을 순회합니다

### 사용법 {#usage}

~~~jsx
map(callback: function): array;
~~~

### 매개변수 {#parameters}

- `callback` - (필수) 다이어그램의 각 항목에 대해 호출되는 callback 함수

### 반환값 {#returns}

이 메서드는 각 항목이 callback 함수의 결과인 새로운 배열을 반환합니다

### 예제 {#example}

~~~jsx {7-9}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//다이어그램의 모든 항목(도형, 링크, 그룹, 스윔레인)의 ID 가져오기
diagram.data.map((item) => {
    console.log(item.id);
});
~~~
