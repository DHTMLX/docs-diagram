---
sidebar_label: hotkeys
title: Editor의 hotkeys 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 editor의 hotkeys 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# hotkeys

### 설명 {#description}

@short: 선택 사항. editor 내 다양한 작업에 대한 키보드 단축키(hotkeys)를 관리할 수 있습니다

모든 hotkeys를 완전히 비활성화하거나, 특정 조합을 비활성화하거나, 사용자 지정 함수로 동작을 재정의할 수 있습니다.

:::note
기본 hotkeys를 활성화하거나 비활성화하면 editor의 Toolbar에 표시되는 툴팁이나 레이블의 표시 여부에도 영향을 미친다는 점에 유의하세요.
:::

### 사용법 {#usage}

~~~jsx
hotkeys?:
    | boolean
    | {
        [key: string]: false | ((event: KeyboardEvent) => void);
      };
~~~

### 매개변수 {#parameters}

- `hotkeys: boolean` - *false*로 설정하면 모든 표준 hotkeys가 비활성화됩니다. *true*로 설정하면 모든 표준 hotkeys가 활성화됩니다
- `hotkeys: object` - 키가 hotkey 이름(예: `"ctrl+c"`, `"delete"`)에 해당하는 객체이며, 값은 다음과 같은 방식으로 동작을 정의합니다:
	- `false` - 지정된 hotkey를 비활성화합니다
	- `(event: KeyboardEvent) => void` - 이 hotkey가 눌렸을 때 실행되는 사용자 지정 함수를 정의합니다. 이 함수는 인수로 `KeyboardEvent` 객체를 받습니다

### 예제 {#example}

- 모든 hotkeys 비활성화하기

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: false,
});
~~~

- 특정 hotkeys 비활성화하기(다음 예제에서는 `Ctrl+C`와 `Ctrl+V`)

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: {
        "ctrl+c": false,
        "ctrl+v": false
    },
});
~~~

- hotkey 동작 재정의하기

~~~jsx
let editor = null;

editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: {
        // 선택한 요소를 제거하도록 "delete" 키를 재정의합니다
        "delete": () => editor.diagram.data.remove(editor.diagram.selection.getIds()),
        // 사용자 지정 hotkey "Ctrl+F"를 추가합니다
        "ctrl+f": () => console.log("custom search"),
    },
});
~~~

### 설명 {#description-1}

아래 표는 표준 hotkeys가 수행하는 작업과 재정의할 수 있는 hotkeys에 대한 매개변수 키 문자열을 설명합니다:

#### Hotkeys 표 {#hotkeys-table}

| Hotkey 조합             | 설명                                          | 매개변수 키 문자열    |
|--------------------------------|------------------------------------------------------|-------------------------|
| `Alt+1`                        | Shapebar 표시/숨기기(default 모드에서만 해당)             | `"alt+1"`               |
| `Alt+2`                        | Editbar 표시/숨기기                                  | `"alt+2"`               |
| `Alt+3`                        | Grid Area 표시/숨기기                                | `"alt+3"`               |
| `Ctrl+Z` (Win), `CMD+Z` (macOS)| 최근 작업 취소                            | `"ctrl+z"`              |
| `Ctrl+Shift+Z` (Win), `CMD+Shift+Z` (macOS)| 취소된 작업으로 복귀           | `"ctrl+shift+z"`        |
| `Ctrl+D` (Win), `CMD+D` (macOS)| 선택한 요소 복제(default 모드에서만 해당)    | `"ctrl+d"`              |
| `Ctrl+C` (Win), `CMD+C` (macOS)| 선택한 요소 복사(default 모드에서만 해당)        | `"ctrl+c"`              |
| `Ctrl+V` (Win), `CMD+V` (macOS)| 선택한 요소 붙여넣기(default 모드에서만 해당)        | `"ctrl+v"`              |
| `Ctrl+Alt+C` (Win), `CMD+Alt+C` (macOS)| 선택한 항목의 스타일 복사(동일한 종류의 요소에만 적용 가능)| `"alt+ctrl+c"`       |
| `Ctrl+Alt+V` (Win), `CMD+Alt+V` (macOS)| 복사한 스타일을 선택한 항목에 적용(동일한 종류의 요소에만 적용 가능)| `"alt+ctrl+v"` |
| `Ctrl+A` (Win), `CMD+A` (macOS)| 모든 항목 선택                                    | `"ctrl+a"`              |
| `Ctrl+Shift+A` (Win), `CMD+Shift+A` (macOS)| 선택한 모든 항목 선택 해제             | `"ctrl+shift+a"`        |
| `Shift+Left Click`             | 선택한 항목 목록에 항목 추가           | (`hotkeys` 매개변수 키에 직접 해당하지 않음) |
| `Alt+Left Click`               | 선택한 항목 선택 해제                          | (`hotkeys` 매개변수 키에 직접 해당하지 않음) |
| `Delete` (`Del`), `Backspace`  | 항목 삭제                                   | `"delete"`, `"backspace"` |
| `Arrow-Left`, `Arrow-Right`, `Arrow-Up`, `Arrow-Down`| 선택한 항목 이동       | `"arrowLeft"`, `"arrowRight"`, `"arrowUp"`, `"arrowDown"` |
| `Ctrl+Mousewheel` (Win), `CMD+Mousewheel` (macOS)| 배율 값 증가/감소 | (`hotkeys` 매개변수 키에 직접 해당하지 않음) |

**변경 로그**:

- `hotkeys` 속성은 v6.1에서 추가되었습니다

**관련 샘플**:

- [Diagram Editor. API를 통해 hotkeys 추가, 수정 및 비활성화 관리하기](https://snippet.dhtmlx.com/8ads5dq8)