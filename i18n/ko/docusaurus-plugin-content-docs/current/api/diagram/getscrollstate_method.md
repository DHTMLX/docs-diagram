---
sidebar_label: getScrollState()
title: getScrollState 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 getScrollState 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getScrollState()

### 설명 {#description}

@short: Diagram 내부 스크롤의 위치를 반환합니다

### 사용법 {#usage}

~~~jsx
getScrollState(): object;
~~~

### 반환값 {#returns}

이 메서드는 스크롤 위치를 저장하는 객체를 반환합니다. 여기에는 두 가지 속성이 포함됩니다:

- `x` - 수평 스크롤 위치
- `y` - 수직 스크롤 위치

### 예제 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

const state = diagram.getScrollState();
// diagram.scrollTo( state.x, state.y );
~~~

**관련 문서**: [Diagram 스크롤링](guides/diagram/scrolling_diagram.md)

**관련 샘플**: [Diagram. 콘텐츠 스크롤](https://snippet.dhtmlx.com/f970hbym)
