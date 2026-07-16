---
sidebar_label: change
title: Data Collection의 change 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 change 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# change

### 설명 {#description}

@short: 다이어그램의 데이터 세트가 변경될 때 발생합니다

### 사용법 {#usage}

~~~jsx
change: (
    id?: string,
    status?: "add" | "update" | "delete" | "load"
    updatedItem?: object
) => void;
~~~

### 매개변수 {#parameters}

이 이벤트의 콜백은 다음 매개변수를 받습니다:

- `id` - (선택 사항) 변경된 항목의 id
- `status` - (선택 사항) 변경 상태: `"add"`, `"update"`, `"delete"`, `"load"`
- `updatedItem` - (선택 사항) 변경된 항목의 객체

:::info
핸들러 함수가 매개변수를 전혀 받지 않는 경우도 있습니다. 예를 들어 모든 도형이 제거되면서 데이터 세트가 다이어그램으로 파싱되는 경우입니다.
:::

### 예제 {#example}

~~~jsx {9-11}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("change", function (id, status, shape) {
    console.log("The " + id + " has been " + status);
});
~~~
