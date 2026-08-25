---
sidebar_label: Shapebar
title: 에디터 가이드 - Shapebar
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 Shapebar에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# Shapebar

Shapebar는 Diagram 항목의 미리보기를 렌더링하는 에디터의 일부입니다. 필요한 항목을 선택하여 shapebar에서 그리드 영역으로 드래그할 수 있습니다.

:::note
Shapebar는 기본 모드(type: `"default"`)로 초기화된 에디터에서만 사용할 수 있습니다.
:::

## 기본 섹션 {#default-sections}

기본적으로 shapebar는 *Shapes*, *Groups*, *Swimlanes*의 세 섹션으로 나뉩니다. *Shapes* 섹션에는 모든 기본 도형과 사용자 정의 도형이 포함됩니다.
*Groups*와 *Swimlanes* 섹션에는 항목의 기본 세트가 포함됩니다.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 섹션 {#custom-sections}

shapebar의 구조를 사용자 정의하려면 [`sections`](api/diagram_editor/shapebar/config/sections_property.md) 속성을 사용해야 합니다. 이 속성을 사용하면 원하는 순서로 자체 섹션을 지정하고 해당 섹션에 항목을 배치할 수 있습니다.

`sections` 속성은 *key:value* 쌍의 집합으로 이루어진 객체이며, 여기서 `key`는 섹션의 이름이고 `value`는 해당 섹션에 렌더링될 항목 목록을 담은 배열입니다.

선택한 요소에 따라 특정 섹션의 항목 구성은 다음과 같을 수 있습니다.

1. 기본 섹션 렌더링

`sections` 구성 객체를 사용하여 기본 도형 세트를 렌더링할 수 있습니다. 예를 들면 다음과 같습니다.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }],
                "Base org cards": [{ org: true }],
                "Base groups": [{ group: true }],
                "Base swimlane": [{ swimlane: true }]
            }
        }
    }
});
~~~

2. 문자열 리터럴을 사용한 항목 지정

문자열 리터럴을 사용하여 도형 유형을 지정함으로써 Shapebar 항목을 렌더링할 수 있습니다. 아래 예제를 확인하세요.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom section": ["custom_shape"],
                "Other shapes": ["text", "topic", "circle"]
            }
        }
    }
});
~~~

3. <p id="customization">기본 구성 재정의</p>

또 다른 방법은 도형의 기본 속성을 재정의하여 필요한 매개변수로 렌더링하는 것입니다. 아래 예제는 다양한 텍스트 및 색상 설정을 가진 `circle` 유형의 도형을 렌더링하는 방법을 보여줍니다.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Circles": [
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

이러한 방식으로 모든 유형의 도형을 재구성할 수 있습니다.

4. 한 섹션에서 여러 유형의 항목 결합

프로젝트에서 다양한 요소를 사용하는 경우, Shapebar에 혼합된 유형의 항목으로 섹션을 만들 수 있습니다. 다음 예제를 확인하세요.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }, "text", "topic"],
                "Circles": [
                     "circle",
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

## 동일한 유형의 항목을 다른 설정으로 추가하기 {#adding-items-of-the-same-type-with-different-settings}

라이브러리를 사용하면 에디터의 shapebar에 서로 다른 설정을 가진 동일한 유형(즉, 같은 유형)의 항목을 여러 개 추가할 수 있습니다.
이를 위해서는 다음을 수행해야 합니다.

- 필요한 유형의 항목에 대해 서로 다른 구성을 가진 별도의 객체를 생성합니다. 필요한 만큼 많은 객체를 생성할 수 있습니다
- 생성한 객체의 *이름*을 항목의 *유형*으로 사용하여 [`sections`](api/diagram_editor/shapebar/config/sections_property.md) 속성을 통해 shapebar의 섹션에 추가합니다

## 도형 미리보기 설정 {#setting-the-preview-of-shapes}

에디터의 shapebar에 렌더링되는 항목의 미리보기를 구성하려면 [`preview`](api/diagram_editor/shapebar/config/preview_property.md) 속성을 사용하세요. 이 속성은 두 개의 속성을 포함하는 객체입니다.

- `scale` - (선택 사항) shapebar에 렌더링되는 항목의 배율을 정의하며, 기본값은 0.5입니다
- `gap` - (선택 사항) shapebar에 렌더링되는 항목 사이의 간격을 지정하며, 기본값은 "6px 8px"입니다
(위아래에는 6px, 좌우에는 8px의 간격을 설정합니다)

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

### 도형 미리보기 사용자 정의 {#customizing-a-shape-preview}

특정 도형의 모양을 사용자 정의하려면 도형 객체의 [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) 구성 속성을 적용할 수 있습니다.

이 속성은 다음 두 가지 경우에 적용할 수 있습니다.

- 에디터 객체의 [`defaults`](api/diagram_editor/editor/config/defaults_property.md) 속성을 통해 기본 도형의 기본 구성을 설정할 때
- [`addShape()`](api/diagram/addshape_method.md) 메서드의 `defaults` 속성을 통해 사용자 정의 도형의 기본 구성을 설정할 때

도형 미리보기를 구성하는 세 가지 예제를 살펴보겠습니다.

1\. 사용자 정의 도형에 대해 shapebar에 표시할 이미지를 지정할 수 있습니다. 이를 위해서는 `preview` 속성에 이미지를 로드할 URL 또는 base64 이미지를 문자열 값으로 전달해야 합니다.

~~~jsx {6}
const defaults = {
    title: "Name and First name",
    img: "../avatar-1.jpg",
    height: 115,
    width: 330,
    preview: "../shape_preview.png"
};

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

2\. 이미지를 지정하고 너비와 높이를 정의해야 하는 경우, `preview` 속성을 `img`, `height`, `width` 속성을 가진 객체로 제공해야 합니다.

~~~jsx {4-8}
const defaults = {
    title: "Name and First name", email: "some@mail.com",
    img: "../avatar-1.jpg", height: 115, width: 330,
    preview: {
        img: "../shape_preview.png",
        height: 58,
        width: 165
    }
}

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

:::note
이미지의 정확한 너비와 높이는 설정할 수 있지만, 이미지의 배율은 설정할 수 없습니다.
:::

3\. `scale` 속성을 통해 shapebar에 렌더링되는 특정 도형의 배율을 재정의할 수 있습니다.

~~~jsx {2-4}
const defaults = {
    preview: {
        scale: 0.72
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom shapes": ["personalCard"],
                "OrgChart shapes": ["card", "img-card"]
            },
            preview: {
                scale: 0.65
            }
        }
    }
});

editor.diagram.addShape("personalCard", {
    defaults,
    // ...
});
~~~

:::note
`preview` 속성은 데이터를 JSON 형식으로 내보낼 때 생략됩니다.
:::

## Shapebar 너비 설정 {#setting-the-width-of-shapebar}

shapebar의 기본 너비는 300입니다. [`width`](api/diagram_editor/shapebar/config/width_property.md) 속성을 통해 이를 변경하고 다른 너비를 설정할 수 있습니다. 예를 들면 다음과 같습니다.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // 기본적으로 300
        }
    }
});
~~~

## Shapebar 표시/숨기기 {#showinghiding-the-shapebar}

shapebar의 표시 여부를 제어해야 할 때마다 [`show`](api/diagram_editor/shapebar/config/show_property.md) 속성을 사용할 수 있습니다. 이 속성을 사용하면 Diagram Editor 초기화 시 특정 설정으로 shapebar를 숨겼다가 필요할 때 나중에 표시할 수 있습니다. 기본적으로 shapebar는 표시됩니다.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            show: false // 기본적으로 true
        }
    }
});
~~~

## Shapebar 및 도형 모양 {#shapebar-and-shapes-appearance}

[`css`](api/diagram_editor/shapebar/config/css_property.md) 속성을 사용하여 shapebar에 원하는 모양과 느낌을 제공할 수 있습니다. 이 속성을 사용하면 사용자 정의 CSS 클래스를 지정하여 shapebar의 항목 표시를 원하는 방식으로 스타일링할 수 있습니다.

~~~html {6}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            shapebar: {
                css: "custom_style"
            }
        }
    });
</script>

<style>
    .custom_style {
        background-color: var(--dhx-background-primary);
        font-size: var(--dhx-font-size-large);
    }
</style>
~~~

특정 테마에 대한 기본 색상 구성표를 재정의하거나 자체 CSS 변수를 사용하여 Shapebar 항목의 색상 구성표를 관리하는 방식으로 [도형의 모양을 조정](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar)할 수도 있습니다.
