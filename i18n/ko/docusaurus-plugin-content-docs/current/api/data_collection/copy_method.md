---
sidebar_label: copy()
title: Data Collection의 copy 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 copy 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# copy()

### 설명 {#description}

@short: 지정된 위치에 항목의 복사본을 생성합니다

### 사용법 {#usage}

~~~jsx
copy(
    id: string | number | array,
    index: number,
    target?: object
): string | number | array;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 복사할 항목의 id(들)
- `index` - (필수) 복사본을 생성할 인덱스
- `target` - (선택 사항) 대상 Data Collection 객체

### 반환값 {#returns}

이 메서드는 항목의 id 또는 항목 id들의 배열을 반환합니다

### 예제 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.copy("4",5); // id가 4인 도형을 인덱스 5의 위치로 복사합니다
~~~
