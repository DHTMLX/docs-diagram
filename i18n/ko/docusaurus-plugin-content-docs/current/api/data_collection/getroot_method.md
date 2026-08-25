---
sidebar_label: getRoot()
title: Data Collection의 getRoot 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 getRoot 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 사용해 볼 수 있으며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getRoot()

### 설명 {#description}

@short: 자식 항목의 id로 루트 항목의 id를 반환합니다

### 사용법 {#usage}

~~~jsx
getRoot(id: string | number): string | number;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 자식 항목의 id

### 반환값 {#returns}

이 메서드는 루트 항목의 id를 반환합니다. 루트 항목은 트리 구조의 첫 번째 항목입니다

### 예제 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoot("id_1.1.1"); // -> "id_1"
~~~

**변경 로그:** v4.0에서 추가
