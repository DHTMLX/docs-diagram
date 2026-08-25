---
sidebar_label: afterExpand
title: afterExpand 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 afterExpand 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# afterExpand

### 설명 {#description}

@short: 항목이 확장된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterExpand: (
    id: string | number,
    dir?: string
) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수를 받습니다:

- `id` - (필수) 확장된 항목의 id입니다
- `dir` - (선택 사항) 상위 도형을 기준으로 하위 항목이 표시된 방향입니다(*type:`"topic"`*의 경우 `"left"` 또는 `"right"`, 그 외의 경우에는 undefined)

### 예제 {#example}

~~~jsx {9-11}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("afterExpand", (id, dir) => {
    console.log(diagram.data.getItem(id).text + " was expanded", dir);
});
~~~

**Change log**: `dir` 매개변수는 v3.1에서 추가되었습니다
