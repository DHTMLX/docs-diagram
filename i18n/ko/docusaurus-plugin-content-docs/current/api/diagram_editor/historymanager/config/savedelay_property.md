---
sidebar_label: saveDelay
title: HistoryManager의 saveDelay 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 HistoryManager의 비활성화된 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# saveDelay

### 설명 {#description}

@short: 현재 상태를 저장할 시간 간격을 ms 단위로 설정합니다

### 사용법 {#usage}

~~~jsx
saveDelay: number;
~~~

### 기본 설정 {#default-config}

~~~jsx
saveDelay: 500
~~~

### 예제 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

editor.history.saveDelay = 1000;
~~~

**변경 로그**: v4.1에서 추가
