---
sidebar_label: scrollTo()
title: scrollTo 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 scrollTo 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보세요.
---

# scrollTo()

### 설명 {#description}

@short: 다이어그램의 내부 스크롤을 지정된 위치로 설정합니다

### 사용법 {#usage}

~~~jsx
scrollTo(x: number, y: number): void;
~~~

### 매개변수 {#parameters}

- `x` - (필수) 수평 스크롤 위치
- `y` - (필수) 수직 스크롤 위치

### 예제 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.scrollTo(100, 80);
~~~

**관련 문서**: [다이어그램 스크롤하기](guides/diagram/scrolling_diagram.md)
