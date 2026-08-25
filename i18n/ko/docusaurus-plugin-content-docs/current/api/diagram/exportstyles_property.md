---
sidebar_label: exportStyles
title: exportStyles 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 exportStyles 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# exportStyles

:::info
기본적으로 페이지에 포함된 모든 CSS 스타일은 DHTMLX Diagram을 내보낼 때 내보내기 서비스로 전송됩니다. 그 결과 요청 크기가 증가하여 요청이 실패할 수 있습니다.

이 문제를 방지하려면 `exportStyles` 속성을 적용하여 내보낸 데이터의 크기를 줄일 수 있습니다.
:::

### 설명 {#description}

@short: 선택 사항입니다. 다이어그램을 내보낼 때 내보내기 서비스로 전송될 스타일을 정의합니다

### 사용법 {#usage}

~~~jsx
exportStyles?: boolean;
//또는
exportStyles?: string[];
~~~

### 기본 설정 {#default-config}

~~~jsx
exportStyles: true
~~~

### 예제 {#example}

`exportStyles` 속성을 *false*로 설정하여 모든 스타일이 내보내기 서비스로 전송되지 않도록 합니다:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles: false
});
~~~

또는 내보내려는 스타일 집합을 정의할 수 있습니다. 이를 위해 원하는 스타일의 절대 경로를 문자열 값으로 `exportStyles` 배열에 설정해야 합니다:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles:[
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ]
});
~~~

:::tip
절대 경로만 사용해야 하며 상대 경로는 사용할 수 없습니다
:::

**변경 로그**: v3.1에서 추가

**관련 문서**: [다이어그램 내보내기](guides/data_export.md)

**관련 샘플**: [Diagram. 내보내기. 스타일 내보내기](https://snippet.dhtmlx.com/jm8if6nh)
