---
sidebar_label: typeConfig
title: typeConfig 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 typeConfig 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# typeConfig

:::info
이 속성은 Editor에서 작동하지 않습니다
:::

### 설명 {#description}

@short: 선택 사항입니다. mindmap 및 PERT 모드에서 Diagram에 대한 구성 설정을 제공하는 객체입니다.

mindmap 모드의 Diagram에서 `typeConfig` 속성은 도형의 방향을 정의합니다. 이 속성을 적용하지 않으면 하위 도형은 기본 알고리즘에 따라 자동으로 배치됩니다.

PERT 모드의 Diagram에서 `typeConfig` 속성을 사용하면 task 도형에서 날짜가 렌더링되는 형식을 설정할 수 있습니다.

### 사용법 {#usage}

- mindmap 모드의 경우

~~~jsx
typeConfig?: {
    direction?: "left" | "right";
}

//또는
typeConfig?: {
    side?: {
        left?: string[],
        right?: string[]
    }
}
~~~

- PERT 모드의 경우

~~~jsx
typeConfig?: {
    dateFormat?: string; // 기본적으로 %d-%m-%Y
}
~~~

### 매개변수 {#parameters}

`typeConfig` 객체에는 다음 매개변수 중 하나를 포함할 수 있습니다:

- mindmap 모드의 경우:
    - `direction` - (선택 사항) 그래프의 방향을 설정합니다:
      - `"left"` - 그래프의 하위 도형을 루트 도형의 왼쪽에 배치합니다
      - `"right"` - 그래프의 하위 도형을 루트 도형의 오른쪽에 배치합니다
    - `side` - (선택 사항) 지정된 하위 도형에 대해 필수 방향을 설정하는 객체입니다. 이 객체에는 *key:value* 쌍 집합이 포함되며, 여기서 *key*는 도형의 방향(left, right)이고 *value*는 도형의 id가 담긴 배열입니다
- PERT 모드의 경우:
    - `dateFormat` - (선택 사항) `task` 유형의 도형에서 날짜를 렌더링하는 형식을 설정합니다. 사용자 인터페이스에서 날짜 렌더링에 영향을 미칩니다

:::tip
mindmap 모드의 다이어그램에서는 `direction` 속성 또는 `side` 속성 중 하나를 사용할 수 있습니다. 두 속성을 동시에 사용하지 마십시오!
:::

### 예제 {#example}

- mindmap 모드의 경우:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap",
    typeConfig: {
        direction: "right"
    }
});
~~~

또는

~~~jsx {3-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap",
    typeConfig: {
        side: {
            left: ["2", "3"],
            right: ["4", "5"]
        }
    }
});
~~~

`side` 옵션에 설정되지 않은 다른 하위 도형은 기본 알고리즘에 따라 자동으로 배치된다는 점에 유의하십시오.

- PERT 모드의 경우:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

**변경 로그**:

- PERT 모드의 `dateFormat` 속성은 v6.1에서 추가되었습니다
- v3.1에서 추가되었습니다.

**관련 문서**: [Diagram의 mindmap 모드에서 도형 배치](guides/diagram/configuration.md#arranging-shapes-in-the-mindmap-mode-of-diagram)

**관련 예제**:

- [Diagram. Mindmap 모드. 방향 ("left" | "right")](https://snippet.dhtmlx.com/pzllujx3)
- [Diagram. Mindmap 모드. 사용자 지정 방향](https://snippet.dhtmlx.com/atto9ckg)
- [Diagram과 Gantt. PERT 차트. 전체 통합](https://snippet.dhtmlx.com/gcnx4a9h)
