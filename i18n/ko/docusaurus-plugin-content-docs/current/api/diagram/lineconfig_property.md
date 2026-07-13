---
sidebar_label: lineConfig
title: lineConfig 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 lineConfig 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# lineConfig

### 설명 {#description}

@short: 선택 사항. 커넥터 라인의 기본 설정을 담은 객체입니다

### 사용법 {#usage}

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // the "curved" type is used only in the mindmap mode
};
~~~

### 매개변수 {#parameters}

`lineConfig` 객체는 다음 매개변수를 포함합니다:

- `lineType` - (선택 사항) 커넥터 라인의 기본 유형입니다. 라인 객체에 `"type"` 속성이 없는 경우 이 값이 적용됩니다
- `lineGap` - (선택 사항) 커넥터 라인의 직각 굴절 지점까지의 거리를 설정합니다
- `connectType` - (선택 사항) 라인의 연결 유형을 설정합니다: `"elbow"` | `"straight"` | `"curved"` (`"curved"` 유형은 마인드맵 Diagram 모드에서만 사용됩니다). 라인 객체에 `"connectType"` 속성이 없는 경우 이 값이 적용됩니다

:::info
`lineType` 및 `connectType` 설정 값은 라인 객체에 동일한 설정이 없는 경우 적용됩니다.
:::

### 기본 설정 {#default-config}

~~~jsx
lineConfig: {
    lineType: "line",
    lineGap: 10
}
~~~

`connectType` 매개변수는 다음과 같은 기본값을 가집니다:

- `"elbow"` - 기본 및 조직도 Diagram 모드에 사용됩니다
- `"curved"` - 마인드맵 Diagram 모드에 사용됩니다(이 유형은 마인드맵 Diagram 모드에서만 사용됩니다)

### 예제 {#example}

~~~jsx {2-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineGap: 50,
        connectType: "straight"
    },
    // 기타 설정 매개변수
});
~~~

`lineGap` 속성을 적용한 결과는 아래 이미지에 나와 있습니다:

![](/img/linegap_config.png)

**관련 샘플**: [Diagram. 기본 모드. 액티비티 다이어그램](https://snippet.dhtmlx.com/a9t2z2dt)

**변경 로그**:

- `connectType` 매개변수가 v6.1에서 추가되었습니다
- `lineGap` 매개변수가 v5.0에서 추가되었습니다 ([마이그레이션 문서](migration.md#42---50) 참고)
- v4.2에서 추가

**관련 문서**: [도형 간 연결 설정](/lines/#setting-connections-between-shapes)
