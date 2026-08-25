---
sidebar_label: afterItemRotate
title: Editor의 afterItemRotate 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 afterItemRotate 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# afterItemRotate

### 설명 {#description}

@short: 항목이 회전한 후 발생합니다.

### 사용법 {#usage}

~~~jsx
"afterItemRotate": ({
    id: string | number,
    angle: number
}) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수가 포함된 객체와 함께 호출됩니다:

- `id` - 회전된 항목의 id
- `angle` - 항목의 새 회전 각도(도 단위)

### 예제 {#example}

~~~jsx
// Diagram Editor 초기화
const editor = new dhx.DiagramEditor("editor_container");
// 데이터 로드
editor.parse(data);

// 이벤트에 핸들러 연결
editor.events.on("afterItemRotate", ({ id, angle }) => {
    console.log(`The item ${id} has been rotated by the angle: ${angle}`);
});
~~~

**변경 로그**:

- 이 이벤트는 v6.1에서 추가되었습니다

**관련 API**:

- [`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md)
- [`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

**관련 샘플**:

- [Diagram Editor. 이벤트를 통한 도형 이동, 회전 및 크기 조정 관리](https://snippet.dhtmlx.com/qldjbbm7)