---
sidebar_label: afterEditorEditing
title: afterEditorEditing Event
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 afterEditorEditing event에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# afterEditorEditing

### 설명 {#description}

@short: 인라인 편집기를 통해 항목의 텍스트 값이 수정된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterEditorEditing: (
    value: string,
    id: string | number,
    key: string,
    subId?: string
) => void;
~~~

### 매개변수 {#parameters}

이 event의 callback은 다음 매개변수를 받습니다:

- `value` - (필수) 항목의 새 값
- `id`- (필수) 항목의 ID
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
diagram.events.on("afterEditorEditing", (value, id, key, subId) => {
    console.log(value, id, key, subId);
});
~~~

**변경 로그**:

- `subHeaderId` 매개변수가 v4.1에서 `subId`로 변경되었습니다
- v4.0에서 추가
