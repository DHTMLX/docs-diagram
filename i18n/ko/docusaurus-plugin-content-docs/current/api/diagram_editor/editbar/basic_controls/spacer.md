---
sidebar_label: Spacer
title: Editbar 기본 컨트롤 - Spacer
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Spacer 컨트롤을 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 직접 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Spacer

@short: 공간을 차지하여 Editbar의 컨트롤을 배치하고 정렬하는 기본 컨트롤입니다.

## 사용법 {#usage}

~~~jsx
{
    type: "spacer"
}
~~~

## 설명 {#description}

- `type` - (필수) 컨트롤의 유형입니다. `"spacer"`로 설정합니다

## 예제 {#example}

~~~jsx {10,12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    { type: "input", key: "name", label: "Task name" },
                    { type: "input", key: "id", label: "ID", readOnly: true },
                    { type: "spacer" },
                    { type: "button", text: "Send", full: true },
                    { type: "spacer" }
                ]
            }
        }
    }
});
~~~
