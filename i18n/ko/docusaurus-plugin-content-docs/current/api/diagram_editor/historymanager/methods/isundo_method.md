---
sidebar_label: isUndo()
title: HistoryManager의 isUndo 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 HistoryManager의 isUndo 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 30일 무료 평가판을 다운로드하세요.
---

# isUndo()

### 설명 {#description}

@short: 작업이 되돌려졌는지 확인합니다

### 사용법 {#usage}

~~~jsx
isUndo(): boolean;
~~~

### 예제 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.isUndo();
~~~

### 반환값 {#returns}

이 메서드는 작업이 되돌려진 경우 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다

**변경 로그**: v4.1에서 추가
