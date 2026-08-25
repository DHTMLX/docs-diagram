---
sidebar_label: autoPlace()
title: autoPlace 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 autoPlace 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# autoPlace()

:::info
`autoPlace()` 메서드는 다이어그램의 기본 모드에서 도형에 대해서만 작동합니다
:::

### 설명 {#description}

@short: 연결된 다이어그램 도형을 계층 구조로 자동 정렬합니다

### 사용법 {#usage}

~~~ts
autoPlace(config?: object): void;
~~~

### 매개변수 {#parameters}

- `config` - (선택 사항) autoplacement의 구성 설정을 담은 객체입니다. 지정하지 않으면 기본 설정이 적용됩니다. 여기에서 다음 매개변수를 지정할 수 있습니다:
    - `mode` - (선택 사항) 도형을 연결하는 모드로, `"direct"`(기본값) 또는 `"edges"`입니다
    - `graphPadding` - (선택 사항) 연결되지 않은 다이어그램 사이의 거리를 설정하며, 기본값은 *200*입니다
    - `placeMode` - (선택 사항) 도형의 배치 모드를 설정하며, `"orthogonal"`(기본값) 또는 `"radial"`입니다
    - `itemPadding` - (선택 사항) 항목 간 최소 여백(최소값은 *1*)이며, 기본값은 *20*입니다
    - `levelPadding` - (선택 사항) 계층 레벨 간 최소 여백(최소값은 *1*)이며, 기본값은 *20*입니다

### 예제 {#example}

~~~jsx {4-7}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
    mode: "edges",
    placeMode: "radial"
});
~~~

## 도형 연결 모드 {#modes-of-connecting-shapes}

### "direct" 모드 {#direct-mode}

화살표가 없는 커넥터 선은 "중심에서 중심으로" 정렬되며, 직선이고 대각선 형태입니다.

![](/img/direct_mode.png)

### "edges" 모드 {#edges-mode}

커넥터 선은 "측면에서 측면으로" 정렬됩니다.

:::note
링크에 `fromSide`와 `toSide`가 설정되어 있으면 autoplacement 알고리즘은 해당 값을 유지하지만 배치 계산 시에는 사용하지 않습니다. 링크를 정의하는 핵심 속성은 `from`과 `to`이며, `fromSide`와 `toSide`는 알고리즘에 의해 자동으로 계산됩니다.
:::

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
- `autoplacement` 속성은 v3.0에서 추가되었습니다

**관련 문서**: [자동으로 도형 배치하기](guides/manipulating_items.md#arranging-shapes-automatically)

**관련 예제**:
- [Diagram. 기본 모드. 패딩 옵션이 적용된 방사형 Autoplacement](https://snippet.dhtmlx.com/huut0l1s)
- [Diagram. 기본 모드. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)
