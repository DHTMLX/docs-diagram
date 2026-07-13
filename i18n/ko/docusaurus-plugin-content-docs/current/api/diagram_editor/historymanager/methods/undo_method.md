---
sidebar_label: undo()
title: HistoryManager의 undo 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 HistoryManager의 undo 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# undo()

### 설명 {#description}

@short: Diagram Editor에서 마지막 작업을 되돌립니다

### 사용법 {#usage}

~~~jsx
undo(first?: boolean): void;
~~~

### 매개변수 {#parameters}

- `first` - (선택 사항) 모든 변경 기록을 되돌리려면 *true*

### 예제 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.undo();
~~~

**변경 로그**: v4.1에서 추가
