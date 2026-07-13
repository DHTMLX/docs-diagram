---
sidebar_label: reset()
title: HistoryManager의 reset 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 HistoryManager의 reset 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# reset()

### 설명 {#description}

@short: 이전 변경 사항을 재설정하고 현재 상태를 저장합니다

### 사용법 {#usage}

~~~jsx
reset(): void;
~~~

### 예제 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.reset();
~~~

**변경 로그**: v4.1에서 추가
