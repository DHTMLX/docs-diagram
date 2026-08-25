---
sidebar_label: 사용자 지정 도형
title: 사용자 지정 도형
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 사용자 지정 도형에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 사용자 지정 도형

기본 도형이 요구 사항에 맞지 않는 경우 사용자 지정 도형을 만들 수 있습니다.

이미지, 텍스트, IP 주소를 표시하는 새로운 `networkCard` 도형을 만들고 싶다고 가정해 보겠습니다.

<iframe src="https://snippet.dhtmlx.com/u1xqyo9w?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

이를 위해서는 다음 단계를 수행해야 합니다:

1\. [`addShape()`](api/diagram/addshape_method.md) 메서드를 적용하여 도형에 대한 고유한 이름(이 예제에서는 *"networkCard"*)을 추가하고 템플릿을 제공합니다:

~~~jsx
diagram.addShape("networkCard", {
    template: ({ img, text, ip }) => (`
        <section class="dhx-diagram-demo_network-card">
            <img src="${img}" alt="${text}"></img>
            <span>${text}</span>
            <span>${ip}</span>
        </section>
    `),
    // type:"networkCard"인 도형의 기본 구성
    defaults: {
        width: 160,
        height: 160,
        img: path.network + "desktop.svg",
        text: "Network Card",
        ip: "138.68.41.78"
    }
});
~~~

`defaults` 어트리뷰트는 `"networkCard"` 도형의 기본 구성을 정의하는 데 사용됩니다. 필요한 경우 지정된 속성의 값은 개별 도형의 구성 객체에서 변경할 수 있습니다.

2\. 다이어그램에 로드할 데이터 세트를 준비할 때 도형 객체 내 `type` 어트리뷰트의 값으로 도형의 고유한 이름을 사용합니다.

:::note
사용자 지정 도형의 데이터 객체에는 사용자 지정 속성을 포함하여 임의의 [구성 속성](shapes/configuration_properties.md)을 포함할 수 있습니다.
:::

~~~jsx
const networkDiagram = [
    {
        "id": 1,
        "type": "networkCard",
        "x": 0,
        "y": 380,
        // text와 ip 어트리뷰트의 기본값 변경
        "text": "Remote expert desktop",
        "ip": "192.168.32.2" // 사용자 지정 속성
    },
    // 추가 옵션
]
~~~

*text*와 *ip* 속성의 기본값을 변경하기 위해 도형의 구성 객체에 동일한 속성을 새로운 값과 함께 지정했습니다.
따라서 *"Network Card"* 텍스트 값은 *"Remote expert desktop"*으로 대체되고, *"138.68.41.78"* ip 값은 *"192.168.32.2"*로 대체됩니다.

## 사용자 지정 도형의 이벤트 핸들러 {#event-handlers-for-custom-shapes}

사용자가 사용자 지정 도형과 상호작용할 때 발생하는 이벤트에 핸들러를 추가해야 할 수 있습니다. 이는 [`addShape()`](api/diagram/addshape_method.md) 메서드의 `eventHandlers` 어트리뷰트를 통해 도형 템플릿의 HTML 요소에 이벤트 핸들러를 추가하여 수행할 수 있습니다.

아래 예제에서는 사용자가 `toggle_container` 클래스를 가진 아이콘을 클릭하면 컨텍스트 메뉴가 열립니다:

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

`eventHandlers` 객체는 다음과 같은 *key:value* 쌍의 집합을 포함합니다:

- *key* - 이벤트의 이름입니다. 이벤트 이름 앞에 `'on'` 접두사가 사용된다는 점에 유의하세요(onclick, onmouseover).
- *value* - *key:value* 쌍을 포함하는 객체이며, 여기서 *key*는 핸들러가 적용될 CSS 클래스 이름이고 *value*는 두 개의 매개변수를 받는 함수입니다:
	- `event` - 이벤트 객체입니다
	- `shape` - 도형 객체입니다

*서로 다른 사용자 지정 도형에는 서로 다른 CSS 클래스를 사용하는 것이 좋습니다.*
