---
sidebar_label: select
title: select 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 select 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보세요.
---

# select

### 설명 {#description}

@short: 선택 사항입니다. 다이어그램에서 선택 기능을 활성화합니다

### 사용법 {#usage}

~~~jsx
select?: boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx
select: false
~~~

### 예제 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
~~~

**관련 문서**:

- [항목 선택 활성화](guides/diagram/configuration.md#enabling-items-selection)
- [항목 선택](guides/manipulating_items.md#selecting-items)
