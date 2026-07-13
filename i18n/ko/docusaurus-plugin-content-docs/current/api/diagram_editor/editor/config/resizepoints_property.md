---
sidebar_label: resizePoints
title: Editor의 resizePoints 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 resizePoints 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# resizePoints

### 설명 {#description}

@short: 선택 사항입니다. 크기 조정 컨트롤을 사용하여 도형의 크기를 조정하는 기능을 활성화/비활성화합니다

### 사용법 {#usage}

~~~jsx
resizePoints?: boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx
resizePoints: true
~~~

### 예제 {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "org" | "mindmap" | "default"
    resizePoints: false, // 기본값: true
    // 기타 설정
});
~~~

**변경 로그**: v6.0에서 추가
