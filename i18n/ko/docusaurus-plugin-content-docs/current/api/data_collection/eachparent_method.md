---
sidebar_label: eachParent()
title: Data Collection의 eachParent 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 eachParent 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# eachParent()

### 설명 {#description}

@short: 지정된 항목의 모든 부모 항목을 순회합니다

### 사용법 {#usage}

~~~jsx
eachParent(
    id: string | number,
    callback: function,
    self?: boolean
): void
~~~

### 매개변수 {#parameters}

- `id` - (필수) 항목의 id
- `callback` - (필수) 항목의 각 부모에 적용될 콜백 함수
- `self` - (선택 사항) 콜백 함수가 지정된 항목 자체에 대해서도 순회할지 여부를 정의합니다. 기본값은 *false*입니다.

### 예제 {#example}

~~~jsx {6-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.eachParent("id_1.1.1", (item) => {
    console.log(item);
}, false);
~~~

**변경 로그**: v4.0에서 추가
