---
sidebar_label: clear()
title: Selection의 clear 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 selection의 clear 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# clear()

### 설명 {#description}

@short: 이벤트를 호출하지 않고 selection 목록을 지웁니다

### 사용법 {#usage}

~~~jsx
clear(): void;
~~~

### 예제 {#example}

~~~jsx {8}
// "select:true" 옵션으로 diagram을 생성해야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 데이터 로드
diagram.data.parse(data);

diagram.selection.clear();
// Selection 이벤트는 발생하지 않습니다
~~~

**변경 로그**: v6.0에서 추가

**관련 문서**:

- [diagram.config.select](api/diagram/select_property.md)
- [항목 선택](guides/manipulating_items.md#selecting-items)

**관련 샘플**: [Diagram. Selection. 항목 선택](https://snippet.dhtmlx.com/jyoxn5h7)
