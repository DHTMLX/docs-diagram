---
sidebar_label: getIds()
title: Selection의 getIds 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 selection의 getIds 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getIds()

### 설명 {#description}

@short: 선택된 항목의 id 목록을 반환합니다

### 사용법 {#usage}

~~~jsx
getIds(): (string | number)[]
~~~

### 반환값 {#returns}

이 메서드는 선택된 항목의 id 목록을 배열로 반환합니다

### 예제 {#example}

~~~jsx {8}
// diagram은 "select:true" 옵션으로 생성되어야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 데이터 로드
diagram.data.parse(data);

const ids = diagram.selection.getIds(); // -> ["1", "1.1", ...] 또는 []
~~~

**변경 로그**: v6.0에서 추가

**관련 문서**:

- [diagram.config.select](api/diagram/select_property.md)
- [항목 선택](guides/manipulating_items.md#selecting-items)

**관련 샘플**: [Diagram. Selection. 항목 선택](https://snippet.dhtmlx.com/jyoxn5h7)
