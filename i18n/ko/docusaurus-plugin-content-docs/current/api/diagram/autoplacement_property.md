---
sidebar_label: autoplacement
title: autoplacement 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 autoplacement 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# autoplacement

### 설명 {#description}

@short: 선택 사항입니다. 도형의 자동 배치를 위한 구성 설정을 담은 객체입니다

:::info
`autoplacement` 속성은 다이어그램의 기본 모드에서 도형에 대해서만 작동합니다. 그룹이나 스윔레인을 사용하는 경우에는 작동하지 않습니다.

Autoplacement는 [`autoPlace()`](api/diagram/autoplace_method.md) 메서드가 적용된 후에만 적용됩니다.
:::

### 사용법 {#usage}

~~~ts
autoplacement?: {
    mode?: "direct" | "edges", // 기본값은 "direct"
    graphPadding?: number, // 기본값은 200
    placeMode?: "orthogonal" | "radial", // 기본값은 "orthogonal"
    itemPadding?: number, // 기본값은 20
    levelPadding?: number // 기본값은 20
};
~~~

### 매개변수 {#parameters}

`autoplacement` 객체는 다음 매개변수를 가집니다:

- `mode` - (선택 사항) 도형을 연결하는 모드로, `"direct"`(기본값) 또는 `"edges"`입니다
- `graphPadding` - (선택 사항) 둘 이상의 연결되지 않은 다이어그램 사이의 거리를 설정하며, 기본값은 *200*입니다
- `placeMode` - (선택 사항) 도형의 배치 모드를 설정하며, `"orthogonal"`(기본값) 또는 `"radial"`입니다
- `itemPadding` - (선택 사항) 항목 간 최소 여백(최소값은 *1*)이며, 기본값은 *20*입니다
- `levelPadding` - (선택 사항) 계층 레벨 간 최소 여백(최소값은 *1*)이며, 기본값은 *20*입니다

### 기본 설정 {#default-config}

~~~jsx
autoplacement: {
    mode: "direct",
    graphPadding: 200,
    placeMode: "orthogonal",
    itemPadding: 20,
    levelPadding: 20
}
~~~

### 예제 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        placeMode: "radial",
        mode: "direct",
        itemPadding: 10,
        levelPadding: 10,
        graphPadding: 100
    }
});

diagram.data.parse(data);

diagram.autoPlace();
~~~

## 도형 연결 모드 {#modes-of-connecting-shapes}

### "direct" 모드 {#direct-mode}

화살표가 없는 커넥터 선은 "중심에서 중심으로" 정렬됩니다. 직선이고 대각선 형태입니다.

![](/img/direct_mode.png)

### "edges" 모드 {#edges-mode}

커넥터 선은 "측면에서 측면으로" 정렬됩니다.

:::info
선에 화살표를 추가하려면 [라인 객체](lines/configuration_properties.md) 구성에서 `forwardArrow: "filled"` 또는 `backArrow: "filled"`를 지정하십시오.
:::

`"edges"` 모드의 커넥터 선은 다음과 같을 수 있습니다:

- 직선 ([라인 객체](lines/configuration_properties.md)의 `connectType: "straight"` 속성을 설정한 경우)

![](/img/edges_straight_mode.png)

- 또는 90도 곡선 ([라인 객체](lines/configuration_properties.md)의 `connectType: "elbow"` 속성을 설정한 경우)

![](/img/edges_mode.png)

## 도형 배치 모드 {#modes-of-placement-of-shapes}

### "orthogonal" 모드 {#orthogonal-mode}

도형은 수직선과 수평선을 따라 배치됩니다

- `"direct"` 모드 선을 사용한 `"orthogonal"` 배치

![](/img/direct_ortogonal.png)

- `"edges"` 모드 선을 사용한 `"orthogonal"` 배치

![](/img/edges_ortogonal.png)

### "radial" 모드 {#radial-mode}

도형은 중심 도형, 즉 연결이 가장 많은 도형을 기준으로 가상의 원 위에 배치됩니다

- `"direct"` 모드 선을 사용한 `"radial"` 배치

![](/img/direct_radial.png)

- `"edges"` 모드 선을 사용한 `"radial"` 배치

![](/img/edges_radial.png)

**변경 로그**:

- `itemPadding`과 `levelPadding` 매개변수는 v6.1.3에서 추가되었습니다
- `placeMode` 매개변수는 v5.0에서 추가되었습니다

**관련 문서**:

- [도형에 대한 Autoplacement 구성하기](guides/diagram/configuration.md#configuring-autoplacement-for-shapes)
- [자동으로 도형 배치하기](guides/manipulating_items.md#arranging-shapes-automatically)

**관련 예제**:

- [Diagram. 기본 모드. 패딩 옵션이 적용된 방사형 Autoplacement](https://snippet.dhtmlx.com/huut0l1s)
- [Diagram. 기본 모드. Autoplacement를 사용하여 생성된 방사형 데이터셋을 배치하기](https://snippet.dhtmlx.com/rwsime82)
