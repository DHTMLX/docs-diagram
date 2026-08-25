---
sidebar_label: grid
title: Editor의 grid 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 grid 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# grid

### 설명 {#description}

@short: 선택 사항. editor 캔버스에 표시되는 grid를 활성화/비활성화합니다

### 사용법 {#usage}

~~~jsx
grid?: boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx
grid: true
~~~

### 예제 {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "org" | "mindmap" | "default"
    grid: false, // 기본값은 true입니다
    // 기타 설정
});
~~~

**Change log**: v6.0에서 추가
