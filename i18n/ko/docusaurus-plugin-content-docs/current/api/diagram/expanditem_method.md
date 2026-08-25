---
sidebar_label: expandItem()
title: expandItem 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 expandItem 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# expandItem()

### 설명 {#description}

@short: 대상 도형의 모든 자식을 표시하거나 그룹/스윔레인을 확장합니다

### 사용법 {#usage}

~~~jsx
expandItem(
    id: string | number,
    dir?: string
): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 항목의 ID
- `dir` - (선택 사항) 루트 도형을 기준으로 자식이 표시될 방향을 정의합니다: `"left"`, `"right"`
  :::note
  `dir` 매개변수는 다이어그램이 마인드맵 모드로 초기화된 경우에만 사용할 수 있습니다(*type:`"mindmap"`*)
  :::

### 예제 {#example}

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.expandItem(123);
~~~

또는

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type:"mindmap"
});
diagram.data.parse(data);

diagram.expandItem("main", "left");
~~~

**변경 로그**: `dir` 매개변수는 v3.1에서 추가되었습니다

**관련 문서**: [항목 확장/축소](guides/manipulating_items.md#expandingcollapsing-items)
