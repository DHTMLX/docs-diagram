---
sidebar_label: beforeSubmenuOpen
title: beforeSubmenuOpen 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 beforeSubmenuOpen 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# beforeSubmenuOpen

### 설명 {#description}

@short: 서브헤더의 메뉴가 열리기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
beforeSubmenuOpen: (
    id: string | number,
    event: MouseEvent,
    subHeaderId?: string
) => boolean | void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수를 사용합니다:

- `id` - (필수) 스윔레인의 id
- `event` - (필수) 네이티브 HTML 이벤트 객체
- `subHeaderId` - (선택 사항) 스윔레인의 서브헤더 id

### 반환값 {#returns}

서브헤더가 열리는 것을 차단하려면 `false`를 반환하고, 그렇지 않으면 `true`를 반환합니다

### 예제 {#example}

~~~jsx {9-12}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// 데이터 로드
diagram.data.parse(data);

// 이벤트에 핸들러 연결
diagram.events.on("beforeSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
    return true;
});
~~~

**변경 로그**: v4.0에서 추가

**관련 문서**: [이벤트 처리](guides/event_handling.md)
