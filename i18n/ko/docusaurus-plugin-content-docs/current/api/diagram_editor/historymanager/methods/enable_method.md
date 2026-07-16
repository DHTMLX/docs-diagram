---
sidebar_label: enable()
title: HistoryManager의 enable 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 HistoryManager의 enable 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 30일 무료 평가판을 다운로드하세요.
---

# enable()

### 설명 {#description}

@short: HistoryManager의 작동을 다시 시작하고 현재 상태를 초기 상태로 저장합니다

### 사용법 {#usage}

~~~jsx
enable(): void;
~~~

### 예제 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.enable();
~~~

**변경 로그**: v4.1에서 추가
