---
sidebar_label: disable()
title: HistoryManager의 disable 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 HistoryManager의 disable 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# disable()

### 설명 {#description}

@short: HistoryManager를 차단합니다

### 사용법 {#usage}

~~~jsx
disable(): void;
~~~

### 예제 {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.disable();
~~~

:::note
History manager를 비활성화하면 단축키로 작업 내역을 다룰 수 없다는 점에 유의하세요.
:::

**변경 로그**: v4.1에서 추가
