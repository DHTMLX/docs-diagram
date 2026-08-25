---
sidebar_label: load()
title: Data Collection의 load 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 load 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# load()

### 설명 {#description}

@short: 외부 파일에서 데이터를 로드합니다

### 사용법 {#usage}

~~~jsx
load(
    url: string | object,
    driver?: object | string
): promise;
~~~

### 매개변수 {#parameters}

- `url` - (필수) 외부 파일의 URL 또는 URL이 구성된 `DataProxy`
- `driver` - (선택) `DataDriver` 또는 데이터 유형(`"json"`, `"csv"`, `"xml"`), 기본값은 `"json"`

### 반환값 {#returns}

이 메서드는 데이터 로드의 promise를 반환합니다

### 예제 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.load("../common/data.json");
~~~

### 세부 사항 {#details}

컴포넌트는 AJAX 호출을 수행하며 원격 URL이 유효한 JSON 데이터를 제공할 것으로 예상합니다.

데이터 로드는 비동기적으로 처리되므로, 로드 이후에 실행할 코드는 promise로 감싸야 합니다:

~~~jsx
diagram.data.load("../some/data").then(() => {
    diagram.selection.add(123);
});
~~~

**관련 문서**:  [데이터 로드 및 저장](guides/loading_data.md)

**관련 샘플**: [Diagram. 데이터. 데이터 로드](https://snippet.dhtmlx.com/09isp2d8)
