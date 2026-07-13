---
sidebar_label: shapeIconClick
title: shapeIconClick 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 shapeIconClick 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# shapeIconClick

### 설명 {#description}

@short: 도형 툴바의 아이콘을 클릭할 때 발생합니다

### 사용법 {#usage}

~~~jsx
"shapeIconClick": (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수와 함께 호출됩니다:

- `id` - 아이콘의 id
- `event` - 네이티브 HTML 이벤트 객체

### 예제 {#example}

~~~jsx {23-39}
// Diagram 초기화
const diagram = new dhx.Diagram("diagram_container", {
    select: true,
    // 항목에 대한 버튼이 있는 툴바 설정
    toolbar: [
        {
            id: "add",
            content: "<i class='dxi dxi-plus-box'>"
        },
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>"
        }
    ]
});
// 데이터 로드
diagram.data.parse(data);

diagram.events.on("shapeIconClick", function (action) {
    const selectedId = diagram.selection.getItem().id;
    switch(action) {
        case "download":
            diagram.export.pdf();
            break;
        case "remove":
            diagram.data.remove(selectedId);
            break;
        case "add":
            diagram.data.add({
                text: "New shape",
                parent: selectedId,
            });
            break;
    }
});
~~~

**관련 문서**: [이벤트 처리](guides/event_handling.md)

**관련 샘플**: [Diagram. 구성. 도형 툴바](https://snippet.dhtmlx.com/4if395hd)
