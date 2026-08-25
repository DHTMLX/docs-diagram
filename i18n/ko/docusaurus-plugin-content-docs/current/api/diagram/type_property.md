---
sidebar_label: type
title: type 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 type 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# type

### 설명 {#description}

@short: 필수입니다. Diagram 초기화 모드를 정의합니다.

### 사용법 {#usage}

~~~jsx
type: "default" | "org" | "mindmap" | "pert";
~~~

### 예제 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // "org" | "mindmap" | "pert"
});
~~~

### Diagram 모드 {#diagram-modes}

DHTMLX Diagram은 다음 모드 중 하나로 초기화할 수 있습니다: `"default"`, `"org"`, `"mindmap"` 또는 `"pert"`. 필요한 모드를 적용하려면 `type` 속성에 해당하는 값을 지정하십시오:

- `type:"default"`는 일부 엔터티 간의 관계를 시각화하는 데 사용됩니다

<iframe src="https://snippet.dhtmlx.com/f3uekgjw?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"org"`는 계층 구조로 관계를 표현하여 그룹의 구조를 보여주는 데 사용됩니다

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"mindmap"`은 주요 개념을 관련 아이디어로 둘러싸서 표현함으로써 특정 주제에 대한 정보를 정리하는 데 사용됩니다

<iframe src="https://snippet.dhtmlx.com/twd25ww1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"pert"`는 작업 및 프로젝트의 순서를 보여 주고 이들 간의 연결을 시각화하는 데 사용됩니다. 이 유형의 다이어그램은 크리티컬 패스 추정 및 프로젝트 계획에도 유용합니다

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**변경 로그**:

- `"pert"` 유형은 v6.1에서 추가되었습니다

**관련 문서**:

- [개요](/)
- [Diagram 시작하기](guides/diagram/initialization.md)
