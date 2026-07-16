---
sidebar_label: serialize()
title: Data Collection의 serialize 메서드
description: DHTMLX JavaScript Diagram 라이브러리 설명서에서 Data Collection의 serialize 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고 코드 예제와 라이브 데모를 사용해 보고 DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# serialize()

### 설명 {#description}

@short: 현재 다이어그램 데이터를 내보냅니다

### 사용법 {#usage}

~~~jsx
serialize(): object[] | { data: object[]; links: object[] };
~~~

### 반환값 {#returns}

다이어그램 모드에 따라 메서드는 다음을 반환합니다:

- `object[]` - (기본, 조직도, 마인드맵 Diagram 모드의 경우) Diagram의 각 항목과 링크에 대한 객체 배열
- `{ data: object[]; links: object[] }` - (PERT Diagram 모드의 경우) 다음을 포함하는 객체:
  - `data` 객체 배열 (도형용: `"task"`, `"milestone"`, `"project"`)
  - `links` 객체 배열 (도형 간 연결용)

### 예제 {#example}

- 기본 다이어그램 모드의 경우

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const data = diagram.data.serialize(); // -> [{...}, {...}, {...}, {...}]
~~~

- PERT 다이어그램 모드의 경우

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});
diagram.data.parse(dataset);

const dataset = diagram.data.serialize(); // -> { data: [...], links: [...] };
~~~

PERT Diagram 모드에서는 내보낸 데이터 객체의 `links` 객체가 [DHTMLX Gantt 차트와 동일한 유형](https://docs.dhtmlx.com/gantt/desktop__link_properties.html)을 갖습니다. 즉, Diagram 데이터에서 링크의 유형이 Gantt 링크 유형 중 하나와 일치하면 직렬화 시에도 동일한 유형이 유지됩니다. 링크 유형이 지정되지 않았거나 다르게 설정된 경우(예: `type: "line"`), 해당 유형은 `type: "0"`으로 변환됩니다.

**관련 문서**:  [상태 저장 및 복원](guides/loading_data.md#saving-and-restoring-state)
