---
sidebar_label: lineConfig
title: lineConfig 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 lineConfig 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# lineConfig

### 설명 {#description}

@short: 선택 사항. 커넥터 라인의 기본 설정을 담은 객체입니다

:::info
`lineType`, `lineDirection`, `arrowsHidden` 설정은 editor를 통해 추가되는 새 커넥터 라인에 적용됩니다.
:::

### 사용법 {#usage}

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineDirection?: "backArrow" | "forwardArrow",
    arrowsHidden?: boolean,
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // "curved" 유형은 mindmap 모드에서만 사용됩니다
};
~~~

### 매개변수 {#parameters}

`lineConfig` 객체에는 다음 매개변수가 포함됩니다:

- `lineType` - (선택 사항) 새 커넥터 라인의 기본 유형입니다. 라인 객체에 `"type"` 속성이 없는 경우 이 값이 적용됩니다
- `lineDirection` - (선택 사항) 새 커넥터 라인의 방향입니다
- `arrowsHidden` - (선택 사항) 새 커넥터 라인의 화살표를 숨길지 여부를 정의합니다
- `lineGap` - (선택 사항) 커넥터 라인의 직각 꺾임까지의 거리를 설정합니다
- `connectType` - (선택 사항) 라인의 연결 유형을 설정합니다: `"elbow"` | `"straight"` | `"curved"`(`"curved"` 유형은 mindmap Diagram 모드에서만 사용됨). 라인 객체에 `"connectType"` 속성이 없는 경우 이 값이 적용됩니다

:::note
`lineDirection`, `arrowsHidden`, `lineGap` 매개변수는 editor의 default 모드에서만 작동합니다(*type: `"default"`*)
:::

### 기본 설정 {#default-config}

~~~jsx
lineConfig: {
    lineType:"line",
    lineDirection: "forwardArrow",
    arrowsHidden: false,
    lineGap: 10
}
~~~

`connectType` 매개변수는 다음과 같은 기본값을 가집니다:

- `"elbow"` - default 및 org chart 모드용
- `"curved"` - mindmap 모드용(이 유형은 mindmap 모드에서만 사용됨)

### 예제 {#example}

~~~jsx {2-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineDirection: "backArrow",
        arrowsHidden: true,
        lineGap: 50,
        connectType: "straight"
    },
    // 기타 설정 매개변수
});
~~~

`lineGap` 속성을 적용한 결과는 아래 이미지에 표시되어 있습니다:

![](/img/linegap_config.png)

**변경 로그**:

- `connectType` 매개변수는 v6.1에서 추가되었습니다
- `lineGap` 매개변수는 v5.0에서 추가되었습니다([마이그레이션 문서](migration.md#42---50) 참조)
- v4.2에서 추가

**관련 샘플**: [Diagram editor. 기본 라인(커넥터) 유형 설정하기. 도형 A와 도형 B를 연결해 보세요](https://snippet.dhtmlx.com/22abzn5m)
