---
sidebar_label: serialize()
title: serialize Method of Editor
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 serialize 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# serialize()

### 설명 {#description}

@short: editor의 데이터를 JSON 객체 배열로 직렬화합니다

### 사용법 {#usage}

~~~jsx
serialize(): array;
~~~

### 반환값 {#returns}

이 메서드는 editor 데이터의 각 항목에 대해 JSON 객체 배열을 반환합니다

### 예제 {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

const data = editor.serialize();
~~~

**관련 샘플**: [Diagram Editor. 조직도 모드. 라이브 에디터](https://snippet.dhtmlx.com/bng7ego7)
