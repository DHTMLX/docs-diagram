---
sidebar_label: destructor()
title: destructor 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 destructor 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---
# destructor()

### 설명 {#description}

@short: 다이어그램 인스턴스를 제거하고 점유된 리소스를 해제합니다

### 사용법 {#usage}

~~~jsx
destructor(): void;
~~~

### 예제 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.destructor();
~~~

**변경 로그**: v3.0에서 추가되었습니다
