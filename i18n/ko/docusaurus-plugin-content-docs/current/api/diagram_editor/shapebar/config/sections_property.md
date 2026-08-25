---
sidebar_label: sections
title: Shapebar의 sections 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Shapebar의 sections 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# sections

[shapebar의 기본 섹션](guides/diagram_editor/shapebar.md#default-sections)은 *도형*, *그룹*, *스윔레인*입니다.

`sections` 속성을 사용하면 shapebar의 구조를 변경하고 필요한 항목을 표시할 수 있습니다.

### 설명 {#description}

@short: 선택 사항입니다. 에디터의 shapebar에 표시될 항목의 섹션을 지정하는 객체입니다.

### 사용법 {#usage}

~~~jsx
sections?: {
    [name: string]: (obj | string)[]
};
~~~

### 매개변수 {#parameters}

`sections` 객체는 다음과 같은 *key:value* 쌍의 집합을 포함할 수 있습니다:
- `key` - 사용자가 지정한 섹션의 이름
- `value` - 다음을 포함할 수 있는 배열:
  - <span id="basic">기본 도형 집합</span>을 렌더링하기 위한 하나의 *key:value* 쌍이 있는 객체입니다. 사용 가능한 쌍 목록은 아래와 같습니다:
    - `{flowShapes: true}` - (선택 사항) 사용 가능한 모든 유형의 [Flow-chart](shapes/default_shapes.md#shapes-in-the-default-mode) 도형을 표시합니다.
    - `{org: true}` - (선택 사항) Org 도형을 표시합니다: `"card"` 및 `"img-card"` 도형 유형
    - `{group: true}` - (선택 사항) 기본 그룹 집합을 표시합니다.
    - `{swimlane: true}` - (선택 사항) 기본 스윔레인 집합을 표시합니다.
  - 섹션에 렌더링될 항목의 특정 유형을 나타내는 문자열 값입니다(예: `"text"`, `"topic"` 등)
  - 모든 도형의 기본 속성을 재정의하기 위한 여러 *key:value* 쌍이 있는 객체입니다

### 예제 {#example}

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 기본 Shapebar를 표시합니다
        // 또는 객체를 통해 Shapebar 구성
        shapebar: {
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

### 세부 정보 {#details}

선택한 요소에 따라 특정 섹션의 항목 구성은 다음과 같을 수 있습니다:

1. 기본 섹션 렌더링

`sections` 구성 객체를 사용하여 기본 도형 집합을 렌더링할 수 있습니다. 예를 들면:

~~~jsx {5-10}
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

2. 문자열 리터럴을 사용하여 항목 지정하기

문자열 리터럴을 사용하여 도형 유형을 지정함으로써 Shapebar 항목을 렌더링할 수 있습니다. 아래 예제를 확인하십시오:

~~~jsx {5-8}
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

3. 기본 구성 재정의하기

또 다른 방법은 모든 도형의 기본 속성을 재정의하여 필요한 매개변수로 렌더링하는 것입니다. 아래 예제는 다양한 텍스트 및 색상 설정을 가진 `circle` 유형의 도형을 렌더링하는 방법을 보여줍니다:

~~~jsx {5-23}
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

4. 섹션에서 서로 다른 유형의 항목 결합하기

프로젝트에서 다양한 요소의 사용을 전제로 하는 경우, Shapebar에 혼합된 유형의 항목을 가진 섹션을 만들 수 있습니다. 다음 예제를 확인하십시오:

~~~jsx {7-27}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 기본 Shapebar를 표시합니다
        // 또는 객체를 통해 Shapebar 구성
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

**관련 문서:** [Shapebar](guides/diagram_editor/shapebar.md#custom-sections)

**변경 로그:** v6.0에서 추가
