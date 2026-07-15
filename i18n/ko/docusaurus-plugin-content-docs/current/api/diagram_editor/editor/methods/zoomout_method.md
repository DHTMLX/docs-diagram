---
sidebar_label: zoomOut()
title: zoomOut Method of Editor
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 zoomOut 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# zoomOut()

### 설명 {#description}

@short: 다이어그램을 축소합니다

### 사용법 {#usage}

~~~jsx
zoomOut(step?: number): void;
~~~

### 매개변수 {#parameters}

- `step` - (선택 사항) 다이어그램을 축소하는 단계; *기본값: 0.05*

### 예제 {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.zoomOut(0.1);
~~~

**변경 로그**: v4.1에서 추가
