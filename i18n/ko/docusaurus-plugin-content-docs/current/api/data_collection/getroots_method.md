---
sidebar_label: getRoots()
title: Data Collection의 getRoots 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 getRoots 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# getRoots()

### 설명 {#description}

@short: 다이어그램의 모든 루트 항목의 ID가 포함된 배열을 반환합니다

### 사용법 {#usage}

~~~jsx
getRoots(): array
~~~

### 반환값 {#returns}

이 메서드는 루트 항목들의 ID가 포함된 배열을 반환합니다

### 예제 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoots();
~~~

**Change log**: v4.0에서 추가
