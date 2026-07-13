---
sidebar_label: 단축키
title: 에디터 가이드 - 단축키 목록
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 단축키에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram 무료 30일 평가판을 다운로드하세요.
---

# 단축키 목록 {#hotkey-list}

이 섹션에서는 에디터에서 다이어그램을 만들 때 사용할 수 있는 표준 단축키 목록, 각 단축키가 수행하는 작업에 대한 설명, 재정의할 수 있는 단축키의 키 문자열 매개변수를 설명합니다. 에디터 내에서 키보드 단축키를 관리하려면 [`hotkeys`](api/diagram_editor/editor/config/hotkeys_property.md) 속성을 적용하세요.

| Hotkey combination             | Description                                          | Parameter key string    |
|--------------------------------|------------------------------------------------------|-------------------------|
| `Alt+1`                        | 도형 바 표시/숨기기(기본 모드에서만)             | `"alt+1"`               |
| `Alt+2`                        | 편집 바 표시/숨기기                                  | `"alt+2"`               |
| `Alt+3`                        | 그리드 영역 표시/숨기기                                | `"alt+3"`               |
| `Ctrl+Z` (Win), `CMD+Z` (macOS)| 최근 작업을 취소합니다                            | `"ctrl+z"`              |
| `Ctrl+Shift+Z` (Win), `CMD+Shift+Z` (macOS)| 취소한 작업을 다시 실행합니다           | `"ctrl+shift+z"`        |
| `Ctrl+D` (Win), `CMD+D` (macOS)| 선택한 요소를 복제합니다(기본 모드에서만)    | `"ctrl+d"`              |
| `Ctrl+C` (Win), `CMD+C` (macOS)| 선택한 요소를 복사합니다(기본 모드에서만)        | `"ctrl+c"`              |
| `Ctrl+V` (Win), `CMD+V` (macOS)| 선택한 요소를 붙여넣습니다(기본 모드에서만)        | `"ctrl+v"`              |
| `Ctrl+Alt+C` (Win), `CMD+Alt+C` (macOS)| 선택한 항목의 스타일을 복사합니다(동일한 종류의 요소에만 적용 가능)| `"alt+ctrl+c"`       |
| `Ctrl+Alt+V` (Win), `CMD+Alt+V` (macOS)| 복사한 스타일을 선택한 항목에 적용합니다(동일한 종류의 요소에만 적용 가능)| `"alt+ctrl+v"` |
| `Ctrl+A` (Win), `CMD+A` (macOS)| 모든 항목을 선택합니다                                    | `"ctrl+a"`              |
| `Ctrl+Shift+A` (Win), `CMD+Shift+A` (macOS)| 선택한 모든 항목의 선택을 해제합니다             | `"ctrl+shift+a"`        |
| `Shift+Left Click`             | 선택한 항목 목록에 항목을 추가합니다           | (`hotkeys` 매개변수 키에 직접 해당하지 않음) |
| `Alt+Left Click`               | 선택한 항목의 선택을 해제합니다                          | (`hotkeys` 매개변수 키에 직접 해당하지 않음) |
| `Delete` (`Del`), `Backspace`  | 항목을 삭제합니다                                   | `"delete"`, `"backspace"` |
| `Arrow-Left`, `Arrow-Right`, `Arrow-Up`, `Arrow-Down`| 선택한 항목을 이동합니다       | `"arrowLeft"`, `"arrowRight"`, `"arrowUp"`, `"arrowDown"` |
| `Ctrl+Mousewheel` (Win), `CMD+Mousewheel` (macOS)| 배율 값을 늘리거나 줄입니다 | (`hotkeys` 매개변수 키에 직접 해당하지 않음) |
| `Ctrl+Enter` (Win), `CMD+Enter` (macOS) | 선택한 요소에 대한 인라인 텍스트 에디터를 엽니다. 더블클릭의 대안으로 사용할 수 있습니다. 편집 가능한 `text` 속성이 있는 도형에만 적용됩니다. | `"ctrl+enter"` |

## 인라인 텍스트 에디터 단축키 {#inline-text-editor-shortcuts}

다음 단축키는 [인라인 텍스트 에디터](guides/inline_editing.md)가 활성화되어 있을 때 사용할 수 있습니다. 이 단축키는 `hotkeys` 속성을 통해 구성할 수 없습니다.

| Hotkey | Description |
|--------|-------------|
| `Ctrl+Enter` (Win), `CMD+Enter` (macOS) | 선택한 요소에 대한 인라인 텍스트 에디터를 엽니다. 더블클릭의 대안으로 사용할 수 있습니다. 편집 가능한 `text` 속성이 있는 도형에만 적용됩니다. |
| `Shift+Enter` | 에디터를 닫지 않고 줄바꿈(`\n`)을 삽입합니다. |
| `Delete` (`Del`), `Backspace` | 커서 위치의 문자를 삭제합니다. 요소 자체는 삭제되지 않습니다. |
| `Enter` | 현재 텍스트를 확정하고 에디터를 닫습니다. 에디터는 입력하는 동안 변경 사항을 동적으로 적용하므로 Enter를 누르면 편집이 성공적으로 완료된 것으로 표시됩니다. |
| `Escape` | 저장되지 않은 모든 변경 사항을 취소하고 에디터를 닫아 요소의 텍스트를 편집을 시작하기 전 값으로 복원합니다. |
