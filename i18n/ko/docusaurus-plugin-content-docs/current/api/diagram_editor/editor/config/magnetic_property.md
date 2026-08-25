---
sidebar_label: magnetic
title: Editor의 magnetic 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 magnetic 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# magnetic

:::info
`magnetic` 속성은 editor의 `default` 모드(`type: "default"`)에서만 작동합니다
:::

### 설명 {#description}

@short: 선택 사항입니다. 도형을 이동할 때 스냅 라인을 표시할지 여부를 정의합니다. 표시하는 경우 스냅 라인의 모양을 구성할 수 있습니다

:::tip
스냅 라인은 이동 중인 도형의 중심 또는 최외곽 측면 좌표가 인근의 정적 도형의 중심 또는 최외곽 측면 좌표와 일치할 때 나타납니다
:::

### 사용법 {#usage}

~~~jsx
magnetic?: {
    show?: boolean,
    lineWidth?: number,
    lineColor?: string
} | boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx
magnetic: true
~~~

magnetic 모드는 다음과 같은 구성으로 활성화됩니다:

~~~jsx
magnetic: {
    show: true,
    lineWidth: 2,
    lineColor: "#000"
}
~~~

### 매개변수 {#parameters}

객체인 경우 `magnetic` 속성에는 다음 매개변수를 포함할 수 있습니다:

- `show` - (선택 사항) 도형을 이동할 때 스냅 라인을 활성화/비활성화합니다
- `lineWidth` - (선택 사항) 스냅 라인의 너비입니다(기본값은 2)
- `lineColor` - (선택 사항) 스냅 라인의 색상입니다(기본값은 *"#000"*)

### 예제 {#example}

~~~jsx {3-7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    magnetic: {
        show: true,
        lineWidth: 2,
        lineColor: "#B0B8CD"
    }
});
~~~

**변경 로그**: `show` 매개변수는 v6.0에서 추가되었습니다
