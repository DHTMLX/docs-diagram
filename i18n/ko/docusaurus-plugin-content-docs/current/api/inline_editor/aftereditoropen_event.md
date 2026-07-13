---
sidebar_label: afterEditorOpen
title: afterEditorOpen Event
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 afterEditorOpen event에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# afterEditorOpen

### 설명 {#description}

@short: 항목의 인라인 편집기가 열린 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterEditorOpen: (
    id: string | number,
    key: string,
    subId?: string
) => void;
~~~

### 매개변수 {#parameters}

이 event의 callback은 다음 매개변수를 받습니다:

- `id` - (필수) 항목의 ID
- `key` - (필수) 수정된 속성의 이름
- `subId` - (선택 사항) 스윔레인의 서브헤더 또는 라인의 텍스트 요소의 ID

### 예제 {#example}

~~~jsx {9-11}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 데이터 로드
diagram.data.parse(data);

// event에 핸들러 연결
diagram.events.on("afterEditorOpen", (id, key, subId) => {
    console.log(id, key, subId);
});
~~~

**변경 로그**:

- `subHeaderId` 매개변수가 v4.1에서 `subId`로 변경되었습니다
- v4.0에서 추가
