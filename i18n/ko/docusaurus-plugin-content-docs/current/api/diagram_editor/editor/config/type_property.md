---
sidebar_label: type
title: Editor의 type 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 type 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 확인해 보세요. DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# type

### 설명 {#description}

@short: 필수 항목입니다. Diagram Editor의 모드를 지정합니다

### 사용법 {#usage}

~~~jsx
type?: "default" | "org" | "mindmap";
~~~

### 세부 정보 {#details}

Diagram Editor는 세 가지 모드 중 하나로 초기화할 수 있습니다:

- `type:"default"`는 일부 엔티티 간의 관계를 시각화하는 데 사용됩니다

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"org"`는 계층 구조로 관계를 표현하여 그룹 내 사람들의 구조를 보여주는 데 사용됩니다

<iframe src="https://snippet.dhtmlx.com/og4qm3ja?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"mindmap"`는 관련 아이디어로 둘러싸인 주요 개념을 표현하여 특정 주제에 대한 정보를 정리하는 데 사용됩니다

<iframe src="https://snippet.dhtmlx.com/lo1vm0e8?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**관련 문서**:

- [개요](editor_overview.md)
- [Diagram Editor 시작하기](guides/diagram_editor/initialization.md)

