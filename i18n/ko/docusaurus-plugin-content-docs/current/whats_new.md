---
sidebar_label: 새로운 기능
title: 새로운 기능
description: DHTMLX JavaScript Diagram 라이브러리에 대한 새로운 정보를 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 새로운 기능 {#whats-new}

Diagram을 이전 버전에서 업데이트하는 경우, 자세한 내용은 [최신 버전으로 마이그레이션](migration.md) 문서를 확인하십시오.

## 버전 6.1.7 {#version-6.1.7}

2026년 8월 5일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. 도형을 그룹이나 스윔레인으로 이동한 후 연결선의 시각적 컨트롤이 사라지던 문제를 수정했습니다.
- Diagram Editor. 회전된 도형의 연결점에 새 커넥터가 스냅되는 방식을 수정했습니다.
- Diagram Editor. 그룹 내 도형을 회전할 때 연결선이 끊어지거나 어긋나던 문제를 수정했습니다.
- Diagram Editor. 수평 슬라이더와 수직 슬라이더가 모두 표시된 상태에서 `dhx_slide` 슬라이더가 올바르게 작동하도록 수정했습니다.
- Diagram Editor. 100%가 아닌 확대/축소 수준에서 `dhx_slide` 요소가 표시되는 방식을 수정했습니다.
- Diagram Editor. 선 미리보기가 연결점에 정확히 정렬되도록 위치를 수정했습니다.
- Diagram Editor. 접힌 도형바 섹션이 다이어그램 영역을 클릭하면 자동으로 펼쳐지던 문제를 수정했습니다.
- Diagram. 사용자 지정 도형 속성의 기본값 `true`가 명시적으로 지정된 `false` 값을 덮어쓰던 문제를 수정했습니다.
- Diagram. 스크롤바를 클릭하면 현재 선택된 요소가 해제되던 문제를 수정했습니다.

## 버전 6.1.6 {#version-6.1.6}

2026년 7월 1일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram. `mindmap` 모드에서 `ShapeCollection`(`DataCollection`)을 통해 Diagram에 데이터를 로드할 때 발생하던 오류를 수정했습니다.

## 버전 6.1.5 {#version-6.1.5}

2026년 6월 17일에 출시되었습니다.

### 업데이트 {#updates}

- Diagram Editor. 새로운 키보드 단축키로 텍스트 편집 경험을 개선했습니다: 편집을 시작하려면 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, 줄바꿈에는 <kbd>Shift</kbd>+<kbd>Enter</kbd>, 확인에는 <kbd>Enter</kbd>, 변경 사항을 취소하려면 <kbd>Escape</kbd>를 사용합니다.

### 수정 사항 {#fixes}

- Diagram Editor. swimlane 그룹을 통과하는 선을 선택할 수 없던 문제를 수정했습니다.
- Diagram Editor. 연결선을 현재 화면 밖의 도형으로 드래그할 때 자동 스크롤 기능을 추가했습니다.
- Diagram Editor. 텍스트 편집 중 도형이 삭제되던 버그를 수정했습니다.
- Diagram. `backArrow: "filled"` 속성을 사용하는 선이 Safari에서 올바르게 렌더링되지 않던 버그를 수정했습니다.

## 버전 6.1.3 {#version-6.1.3}

2026년 5월 21일에 출시되었습니다.

### 업데이트 {#updates}

- Diagram / Diagram Editor. 자동 배치 로직을 개선했습니다. [`autoPlace()`](api/diagram/autoplace_method.md) Diagram 메서드와 [`autoplacement`](api/diagram/autoplacement_property.md) 설정 객체에 새로운 `itemPadding` 및 `levelPadding` 속성을 추가하여 도형과 레벨 사이의 간격을 제어할 수 있도록 했습니다.

### 수정 사항 {#fixes}

- Diagram. 자동 배치를 적용할 때 도형 간 거리가 잘못 계산되던 문제를 수정했습니다.
- Diagram. [`autoPlace()`](api/diagram/autoplace_method.md) 호출 시 [`fromSide` 및 `toSide`](lines/configuration_properties.md) 선 값이 무시되던 문제를 수정하여 다이어그램 구조가 일관되게 유지되도록 했습니다.
- Diagram. `Radial` 자동 배치 알고리즘을 리팩터링하여 도형 간 거리가 지나치게 커지는 문제를 수정하고, 더 조밀한 레이아웃을 제공하도록 했습니다.

## 버전 6.1.2 {#version-6.1.2}

2026년 4월 2일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. 좌표가 음수인 도형에 대한 커넥터 생성 문제를 수정했습니다.
- Diagram Editor. 인라인 텍스트 편집 중 <kbd>Backspace</kbd> 키를 누르면 도형 또는 선 제목이 삭제되던 문제를 수정했습니다.
- Export. HTML 삽입을 통해 임의의 로컬 파일에 접근할 수 있었던 PDF/PNG 내보내기의 보안 취약점을, 정제 처리 개선과 환경 강화를 통해 수정했습니다.

## 버전 6.1.1 {#version-6.1.1}

2026년 2월 5일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. 항목을 아래쪽 및 오른쪽으로 이동할 때 캔버스가 자동으로 스크롤되지 않는 문제.

## 버전 6.1 {#version-6.1}

2025년 11월 25일에 출시되었습니다.

### 새로운 기능 {#new-functionality}

- Gantt 데이터 세트로부터 Diagram PERT 차트를 생성하는 기능:
    - [새로운 `"pert"` 타입](api/diagram/type_property.md)을 통해 설정하는 [새로운 PERT 모드](/#diagram-in-the-pert-mode)
    - [새로운 도형 타입: `"task"` 및 `"milestone"`](shapes/default_shapes.md#shapes-in-the-pert-mode)
    - [새로운 그룹 타입: `"project"`](/groups/#grouping-shapes-in-the-pert-mode) (작업과 마일스톤을 그룹화하기 위한)
- Diagram Editor. 편집기 내에서 키보드 단축키(hotkey)를 관리하는 기능:
    - 새로운 [`hotkeys`](api/diagram_editor/editor/config/hotkeys_property.md) 설정 속성을 통해 기존 단축키를 수정하거나 끄고, 새로운 단축키를 추가할 수 있습니다.
- Diagram Editor. 새로운 이벤트 세트를 통해 도형의 크기 조정 및 회전을 관리하는 기능:
[`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md),
[`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md),
[`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md),
[`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md),
[`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md),
[`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

### 업데이트 {#updates}

- DataCollection API. PERT 모드 관련 업데이트:
    - [`parse()`](api/data_collection/parse_method.md) 메서드는 첫 번째 매개변수로 `data` 및 `links` 배열을 포함하는 객체를 받을 수 있습니다.
    - [`serialize()`](api/data_collection/serialize_method.md) 메서드는 `data` 및 `links` 배열을 포함하는 객체를 반환할 수 있습니다.
- Diagram API. PERT 모드의 작업(task) 도형에서 날짜 렌더링 형식을 설정하는 기능:
    - [`typeConfig`](api/diagram/typeconfig_property.md) 설정 속성에 새로운 `dateFormat` 매개변수가 추가되었습니다.
- Diagram/Diagram Editor API. 선의 연결 타입을 정의하는 기능:
    - Diagram의 [`lineConfig`](api/diagram/lineconfig_property.md) 설정 속성에 새로운 `connectType` 매개변수가 추가되었습니다.
    - Diagram Editor의 [`lineConfig`](api/diagram_editor/editor/config/lineconfig_property.md) 설정 속성에 새로운 `connectType` 매개변수가 추가되었습니다.
- Export API. [`pdf()`](api/export/pdf_method.md) 및 [`png()`](api/export/png_method.md) 내보내기 함수가 데이터 내보내기의 프로미스(promise)를 반환합니다.

### 수정 사항 {#fixes}

- Diagram Editor. Safari 브라우저에서 도형에 마우스를 올렸을 때 발생하던 스크립트 오류.
- Diagram Editor. 항목 제거 후 발생하던 콘솔 경고.

### [AI 통합](guides/ai-integrations/ai-demo.md)에 관한 새로운 데모 {#new-demo-on-ai-integration}

- [DHTMLX Diagram Org Chart AI Builder](https://dhtmlx.com/docs/demo/ai-org-chart-builder/)


### 새로운 샘플 {#new-samples}

- [Diagram. PERT 차트. 초기화](https://snippet.dhtmlx.com/4h5fi7xd)
- [Diagram 및 Gantt. PERT 차트. 초기화](https://snippet.dhtmlx.com/409jj9uh)
- [Diagram 및 Gantt. PERT 차트. 전체 통합](https://snippet.dhtmlx.com/gcnx4a9h)
- [Diagram 및 Gantt. PERT 차트. 팝업 창](https://snippet.dhtmlx.com/fvfysbdb)
- [Diagram 및 Gantt. PERT 차트. 사용자 지정 도형과 스타일링(사용자 지정 CSS)](https://snippet.dhtmlx.com/mtk92awx)
- [Diagram. PERT 차트. 다양한 데이터 세트](https://snippet.dhtmlx.com/2j2y8vy6)
- [Diagram. PERT 차트. 작업 필터링/검색](https://snippet.dhtmlx.com/1b2bmmxk)
- [Diagram. PERT 차트. 작업 정보를 위한 사용자 지정 사이드바](https://snippet.dhtmlx.com/712lsox0)
- [Diagram. PERT 차트. 테마](https://snippet.dhtmlx.com/2e5y5u6m)
- [Diagram. Export. 왼쪽 하단 워터마크](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. Export. 반복되는 워터마크](https://snippet.dhtmlx.com/emkea55j)
- [Diagram. 인터랙티브 전기 회로도](https://snippet.dhtmlx.com/cisyixkq)
- [Diagram Editor. 이벤트를 통한 도형의 이동, 회전, 크기 조정 관리](https://snippet.dhtmlx.com/qldjbbm7)
- [Diagram Editor. API를 통한 단축키 추가, 수정, 비활성화 관리](https://snippet.dhtmlx.com/8ads5dq8)
- [Diagram Editor. 피시본 다이어그램. 원인과 해결책](https://snippet.dhtmlx.com/7vhwtiba)
- [Diagram Editor. 피시본 다이어그램. 다중 원인](https://snippet.dhtmlx.com/0dgjwt6u)


## 버전 6.0.11 {#version-6.0.11}

2025년 6월 18일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. 확대/축소 시 도형이 잘못 이동하는 문제.

## 버전 6.0.10 {#version-6.0.10}

2025년 3월 10일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram. 선 너비를 편집하는 동안 선 도형의 화살표 크기가 조정되던 문제.

## 버전 6.0.9 {#version-6.0.9}

2025년 2월 4일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. 항목이 있는 그룹을 이동하거나 항목을 그룹으로/그룹에서 이동하는 문제.
- Diagram. 선택된 도형에 대해 `itemMouseOver` 및 `itemMouseOut` 이벤트가 발생하지 않는 문제.

## 버전 6.0.8 {#version-6.0.8}

2024년 12월 5일에 출시되었습니다.

- 프레임워크로 가져오기(import) 시 로컬 평가판 패키지와 관련된 문제.

## 버전 6.0.7 {#version-6.0.7}

2024년 11월 27일에 출시되었습니다.

- Diagram Editor. Editbar를 사용한 도형 편집 중 발생하던 오류.
- Diagram Editor. 인라인 편집 탐색 중 도형 이동과 관련된 문제.

## 버전 6.0.4 {#version-6.0.4}

2024년 10월 1일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. `destructor()` 메서드를 호출하면 오류가 발생하는 문제.

## 버전 6.0.3 {#version-6.0.3}

2024년 8월 28일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. Editbar의 `calendar`, `combobox`, `colorpicker`, `form`, `timepicker`에 서로 다른 로케일을 적용하는 문제.
- Diagram Editor. Layout 셀에 Diagram Editor를 추가하는 문제.
- Diagram Editor. `default` 모드에서 `shapeToolbar` 속성이 선택 사항이 아닌 문제.
- Diagram Editor. 사용자 지정 도형에 미리 보기 이미지가 있을 때 호버 동작이 올바르지 않은 문제.


## 버전 6.0.2 {#version-6.0.2}

2024년 7월 16일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram. 자동 배치. 도형이 다른 도형 아래에 가려지는 문제.

## 버전 6.0.1 {#version-6.0.1}

2024년 6월 24일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. 메모리 누수.
- Diagram Editor. Toolbar에서 수직 및 수평 분산 배치를 클릭할 때 발생하는 스크립트 오류.
- Diagram. [`getSubHeaderCellId()`](api/cell_manager/getsubheadercellid_method.md) 메서드 호출 시 발생하는 타입 문제.

## 버전 6.0 {#version-6.0}

2024년 5월 16일에 출시되었습니다.

### 주요 변경 사항 {#breaking-changes}

이번 업데이트는 Diagram과 Diagram Editor의 구조와 기능에 중요한 변경 사항을 도입합니다. 최신 버전에 맞춰 대응하려면 [마이그레이션 문서](migration.md#50---60)를 확인하십시오.

### 새로운 기능 {#new-functionality}

- Diagram Editor 재구성: [`view`](api/diagram_editor/editor/config/view_property.md) 속성을 통해 각 부분과 상호작용하고 가시성을 관리할 수 있는 기능을 제공하며, 다음과 같은 설정을 포함합니다:
    - [Toolbar](guides/diagram_editor/toolbar.md) - 사용자가 편집 과정을 제어할 수 있도록 돕는 Diagram Editor의 상단 부분입니다([API 개요](api/diagram_editor/toolbar/api_overview.md) 참조).
    - [Shapebar](guides/diagram_editor/shapebar.md) - (이전 왼쪽 패널) Diagram 항목의 미리 보기를 렌더링하는 Diagram Editor의 부분입니다([API 개요](api/diagram_editor/shapebar/api_overview.md) 참조).
    - [Editbar](guides/diagram_editor/editbar.md) - (이전 오른쪽 패널) 사용자가 Diagram 항목을 편집할 수 있도록 하는 Diagram Editor의 부분입니다([API 개요](api/diagram_editor/editbar/api_overview.md) 참조). 다음 작업을 수행할 수 있습니다:
        - 미리 정의된 [기본 컨트롤](api/diagram_editor/editbar/basic_controls_overview.md) 및 [복합 컨트롤](api/diagram_editor/editbar/complex_controls_overview.md) 세트
        - 제공된 조건에 따른 [기본 컨트롤](api/diagram_editor/editbar/basic_controls_overview.md) 및 [복합 컨트롤](api/diagram_editor/editbar/complex_controls_overview.md)의 조정 가능한 설정
        - 제공된 조건에 따른 Editbar 패널의 동적 관리([예제](https://snippet.dhtmlx.com/ealq0m4l?mode=wide))
        - 사용자 지정 컨트롤 생성([예제](https://snippet.dhtmlx.com/1p0wemnn?mode=wide))
        - HTML 콘텐츠 생성([예제](https://snippet.dhtmlx.com/vcnt647v?mode=wide))
- Diagram Editor. [Copy manager API](api/diagram_editor/copymanager/api_overview.md)가 추가되었습니다.
- Diagram Editor. [Shapebar](api/diagram_editor/shapebar/config/show_property.md), [Editbar](guides/diagram_editor/editbar.md), [Toolbar](guides/diagram_editor/toolbar.md)를 표시/숨김 처리하는 기능.
- Diagram Editor. [destructor()](api/diagram_editor/editor/methods/destructor_method.md) 메서드가 추가되었습니다.
- Diagram Editor. [연결 지점을 숨기는](api/diagram_editor/editor/config/connectionpoints_property.md) 기능.
- Diagram Editor. [크기 조정 지점을 숨기는](api/diagram_editor/editor/config/resizepoints_property.md) 기능.
- Diagram Editor. [그리드를 숨기는](api/diagram_editor/editor/config/grid_property.md) 기능.
- 다중 선택 기능이 추가된 [Selection API](/api/selection/)의 업그레이드.
- 선의 제목은 자체 [설정 속성](line_titles/configuration_properties.md)을 가진 별도의 객체인 [`lineTitles`](/line_titles/)로 선언됩니다.
- [새로운 테마 지원](../category/themes/): Dark, Light High Contrast, Dark High Contrast([예제](https://snippet.dhtmlx.com/9twmlfus))
- Diagram Editor. CSS 변수를 재정의하고 사용자 지정 변수를 사용하여 [Shapebar 항목의 색상 구성표](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar)를 사용자 지정하는 기능.

### 업데이트 {#updates}

- Diagram Editor. [로케일](guides/localization.md)이 업데이트되었습니다.
- Diagram Editor. [단축키](guides/diagram_editor/hot_keys.md) 목록이 확장되었습니다.
- Diagram Editor. Shapebar 항목을 그리드로 끌어다 놓을 때의 동작과 모양이 개선되었습니다.
- Diagram Editor. [`zoomIn`](api/diagram_editor/editor/events/zoomin_event.md) / [`zoomOut`](api/diagram_editor/editor/events/zoomout_event.md) 이벤트의 콜백 함수가 `step` 매개변수와 함께 호출됩니다.
- Diagram Editor. [`magnetic`](api/diagram_editor/editor/config/magnetic_property.md) 설정 옵션의 기능이 확장되었습니다.
- Diagram Editor. Editor 객체의 이동 [이벤트](api/diagram_editor/editor/events/overview.md)가 업데이트되었습니다:
[`afterGroupMove`](api/diagram_editor/editor/events/aftergroupmove_event.md),
[`afterItemCatch`](api/diagram_editor/editor/events/afteritemcatch_event.md),
[`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md),
[`afterLineTitleMove`](api/diagram_editor/editor/events/afterlinetitlemove_event.md),
[`afterShapeMove`](api/diagram_editor/editor/events/aftershapemove_event.md),
[`beforeGroupMove`](api/diagram_editor/editor/events/beforegroupmove_event.md),
[`beforeItemCatch`](api/diagram_editor/editor/events/beforeitemcatch_event.md),
[`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md),
[`beforeLineTitleMove`](api/diagram_editor/editor/events/beforelinetitlemove_event.md),
[`beforeShapeMove`](api/diagram_editor/editor/events/beforeshapemove_event.md),
[`groupMoveEnd`](api/diagram_editor/editor/events/groupmoveend_event.md),
[`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md),
[`itemTarget`](api/diagram_editor/editor/events/itemtarget_event.md),
[`lineTitleMoveEnd`](api/diagram_editor/editor/events/linetitlemoveend_event.md),
[`shapeMoveEnd`](api/diagram_editor/editor/events/shapemoveend_event.md)
- [DataCollection API를 통해 선 제목을 다루는](/line_titles/#working-with-line-titles) 기능.

### 지원 중단된 API {#deprecated-api}

- #### 속성

    - Diagram Editor의 `controls` 속성은 지원 중단되었으며 더 이상 지원되지 않습니다.
    - Diagram Editor의 `editMode` 속성은 지원 중단되었으며 더 이상 지원되지 않습니다.
    - Diagram Editor의 `gapPreview` 속성은 지원 중단되었으며 더 이상 지원되지 않습니다.
    - Diagram Editor의 `reservedWidth` 속성은 지원 중단되었으며 더 이상 지원되지 않습니다.
    - Diagram Editor의 `scalePreview` 속성은 지원 중단되었으며 더 이상 지원되지 않습니다.
    - Diagram Editor의 `shapeBarWidth` 속성은 지원 중단되었으며 더 이상 지원되지 않습니다.
    - Diagram Editor의 `shapeSections` 속성은 지원 중단되었으며 더 이상 지원되지 않습니다.
    - [Line](lines/configuration_properties.md) 데이터의 `title` 속성은 지원 중단되었으며 더 이상 지원되지 않습니다.

- #### 메서드

    - Diagram의 Selection 객체의 `getId()` 메서드는 지원 중단되었으며 더 이상 지원되지 않습니다.
    - Diagram의 Selection 객체의 `getSubId()` 메서드는 지원 중단되었으며 더 이상 지원되지 않습니다.
    - Diagram Editor의 `setViewMode()` 메서드는 지원 중단되었으며 더 이상 지원되지 않습니다.

- #### 이벤트

    - Toolbar에 해당 버튼이 없으므로 Diagram Editor의 다음 이벤트는 지원 중단되었으며 더 이상 지원되지 않습니다: `resetButton`, `applyButton`, `visibility`, `exportData`, `importData`, `autoLayout`
    - Diagram Editor의 `changeGridStep` 이벤트는 지원 중단되었으며 더 이상 지원되지 않습니다.

### 수정 사항 {#fixes}

- Diagram Editor. 데이터 가져오기 후 파일을 선택하지 않고 "Import data" 버튼을 두 번째로 클릭할 때 발생하는 콘솔 오류를 수정했습니다.
- Diagram Editor. 새 도형 추가가 차단되는 문제를 수정했습니다.
- Diagram Editor. 요소를 수동으로 선택하는 동안 선을 복사하는 문제를 수정했습니다.
- Diagram Editor. `mindmap`/`org` 모드에서 루트 도형이 하위 도형에 가까울 때 드래그가 되지 않는 문제를 수정했습니다.
- Diagram Editor. <kbd>Shift</kbd> 키로 도형을 선택할 때 추가 클릭이 필요했던 잘못된 선택 동작을 수정했습니다.
- Diagram Editor. 그룹과 swimlane을 함께 이동하는 문제를 수정했습니다.
- Diagram Editor. 사용하지 않는 선/커넥터 제거 문제를 수정했습니다.
- Diagram Editor. 서로 다른 부모의 항목을 대상 항목으로 이동하는 기능을 수정했습니다(`org`/`mindmap` 모드용).
- Diagram Editor. Shapebar 요소의 기본값을 설정하는 기능을 수정했습니다.
- Diagram Editor. 이동한 항목을 도형 위로 호버할 때 커넥터가 나타나는 문제를 수정했습니다.
- Diagram Editor. `mindmap`/`org` 모드에서 메뉴를 통해 선택된 항목을 제거할 수 없는 문제를 수정했습니다.
- Diagram Editor. 데이터 가져오기가 한 번만 작동하는 문제를 수정했습니다.
- Diagram Editor. 커넥터 이동 중 성능을 개선했습니다.
- Diagram Editor. `historyManager`에서 커넥터 이동 중 작업 기록 저장을 제한했습니다.
- Diagram Editor. 가장 가까운 커넥터를 검색하는 로직을 최적화했습니다.
- 복잡한 위젯에서의 로컬라이제이션을 수정했습니다.

## 버전 5.0.3 {#version-5.0.3}

2023년 7월 12일에 출시되었습니다.

### 수정 사항 {#fixes}

- 데이터 파싱 후 [autoPlace()](api/diagram/autoplace_method.md) 메서드를 호출할 때 오류가 발생하던 문제를 수정했습니다.

## 버전 5.0.2 {#version-5.0.2}

2023년 5월 30일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. 다중 선택 이동 중 사용자 지정 지점이 이동하지 않는 문제를 수정했습니다.
- Diagram Editor. 도형을 자기 자신에게 연결할 수 없는 문제를 수정했습니다.
- [exportStyles](api/diagram/exportstyles_property.md) 없이 기본 다이어그램을 내보낼 때 발생하는 문제를 수정했습니다.
- 소스를 가져오는 동안 `setImmediate()` 메서드 정의와 관련하여 promiz.js 라이브러리에서 오류가 발생하던 문제를 수정했습니다.
- Export 객체의 URL 경로 형성 문제를 수정했습니다.
- Export를 위한 타입이 추가되었습니다.

## 버전 5.0.1 {#version-5.0.1}

2023년 1월 19일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram Editor. 데이터를 내보낸 후 다시 불러올 때 선이 항상 제자리에 그려지지 않던 문제를 수정했습니다.
    - 이제 default 모드에서 선의 좌표를 정의할 수 있습니다(선 객체의 새로운 [`points`](lines/configuration_properties.md#properties-specific-for-the-default-mode) 속성).
- Diagram Editor. 확대/축소 레벨을 변경한 후 그리드에서 도형을 드래그하는 문제를 수정했습니다.
- 도형이 없는 상태에서 "Auto layout" 버튼을 클릭한 후 발생하는 오류를 수정했습니다.
- 편집기를 통해 선을 생성한 후 [기본 설정](api/diagram/defaults_property.md) 표시 문제를 수정했습니다.
- `"radial"` 모드에서 도형을 자동 배치할 때 나타나던 Diagram/Diagram Editor의 스케일 문제를 수정했습니다.

## 버전 5.0 {#version-5.0}

2022년 9월 7일에 출시되었습니다.

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-5-0/" target="_blank">블로그에서 릴리스 리뷰 보기</a>

### 주요 변경 사항 {#breaking-changes}

새 릴리스는 `lineGap` 속성에 일부 변경 사항을 도입합니다. 최신 버전에 맞춰 대응하려면 [마이그레이션 문서](migration.md#42---50)를 확인하십시오.

### 새로운 기능 {#new-functionality}

#### Diagram {#diagram}

- [도형 자동 배치](guides/diagram/configuration.md#configuring-autoplacement-for-shapes)의 Radial 알고리즘:
    - [`autoplacement`](api/diagram/autoplacement_property.md) 속성에 `placemode` 매개변수가 추가되었습니다.
    - [`autoPlace()`](api/diagram/autoplace_method.md) 메서드에 `placemode` 매개변수가 추가되었습니다.
- 툴바 아이콘에 대한 툴팁을 설정하는 기능:
    - [`toolbar`](api/diagram/toolbar_property.md) 속성에 아이콘 객체의 `tooltip` 매개변수가 추가되었습니다.

#### Diagram Editor {#diagram-editor}

- 도형 자동 배치의 Radial 알고리즘:
    - [`autoplacement`](api/diagram_editor/editor/config/autoplacement_property.md) 속성에 `placemode` 매개변수가 추가되었습니다.
    - [Toolbar](guides/diagram_editor/toolbar.md)의 **Auto Layout** 버튼은 이제 도형 자동 배치를 위한 *Orthogonal*과 *Radial* 두 가지 옵션을 제공합니다.
- 그리드 영역에서 도형을 더 정밀하게 배치하기 위한 [스냅 라인](guides/diagram_editor/grid_area.md#enablingdisabling-snap-lines).
- 새로운 [`magnetic`](api/diagram_editor/editor/config/magnetic_property.md) 속성을 통해 스냅 라인을 설정하는 기능.
- <kbd>Alt</kbd> (<kbd>Option</kbd>) + <kbd>Ctrl</kbd> (<kbd>Cmd</kbd>) + <kbd>С</kbd> => <kbd>Alt</kbd> (<kbd>Option</kbd>) + <kbd>Ctrl</kbd> (<kbd>Cmd</kbd>) + <kbd>V</kbd>를 통해 항목의 스타일을 복사하고 붙여넣는 기능(**[예제](https://snippet.dhtmlx.com/klgvu3jq)** 참조).
- 그리드 영역에서 [여러 항목을 정렬하고 분산 배치하는](guides/diagram_editor/grid_area.md#aligning-multiple-items) 기능.
- 이제 항목의 개인 툴바에서 컨트롤 위에 마우스를 올리면 툴팁이 나타납니다.
- 항목별 툴바에서 툴팁을 로컬라이제이션하기 위한 [로케일 옵션](guides/localization.md) 목록이 확장되었습니다.
- [사용자 지정 툴바 아이콘](guides/diagram_editor/grid_area.md#configuring-the-toolbar-of-an-item)에 대한 툴팁을 설정하는 기능:
    - [`shapeToolbar`](api/diagram_editor/editor/config/shapetoolbar_property.md) 속성에 아이콘 객체의 `tooltip` 매개변수가 추가되었습니다.
- [그리드 영역](guides/diagram_editor/grid_area.md)의 디자인이 개선되었습니다. 이제 그리드 영역의 점 사이 간격이 그리드 간격 값에 따라 달라집니다.

### 수정 사항 {#fixes}

- 파일을 로드한 후 Editor의 오른쪽 패널에서 로딩 아이콘이 사라지지 않던 문제를 수정했습니다.

## 버전 4.2 {#version-4.2}

2022년 3월 3일에 출시되었습니다.

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-2-touch-support-default-settings-connector-lines-default-section-sets-editors-left-panel/" target="_blank">블로그에서 릴리스 리뷰 보기</a>

### 새로운 기능 {#new-functionality}

- [터치 지원](guides/touch_support.md)
- Diagram의 [`lineConfig`](api/diagram/lineconfig_property.md) 속성을 통해 선의 기본 설정을 지정하는 기능
- Diagram Editor의 [`lineConfig`](api/diagram_editor/editor/config/lineconfig_property.md) 속성을 통해 편집기에서 생성된 새 선의 기본 설정을 지정하는 기능
- [편집기 왼쪽 패널의 섹션을 설정할 때](guides/diagram_editor/shapebar.md#custom-sections) 필요한 순서로 org 도형, 그룹, swimlane의 기본 세트를 추가하는 기능

### 업데이트 {#updates}

- Diagram의 `defaultLinkType` 속성은 지원 중단되었습니다. [마이그레이션](migration.md#41---42) 문서를 확인하십시오.
- Diagram Editor의 `shapeSections` 속성이 업데이트되었습니다. [마이그레이션](migration.md#41---42) 문서를 확인하십시오.
- 이제 특정 타입의 도형뿐만 아니라 선에 대해서도 기본 설정을 정의할 수 있습니다:
    - Diagram의 [`defaults`](api/diagram/defaults_property.md) 속성이 업데이트되었습니다.
    - Diagram Editor의 [`defaults`](api/diagram_editor/editor/config/defaults_property.md) 속성이 업데이트되었습니다.
- [도형 연결 모드](api/diagram/autoplace_method.md#modes-of-connecting-shapes)에 대한 문서가 업데이트되었습니다.

## 버전 4.1 {#version-4.1}

2021년 12월 7일에 출시되었습니다.

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-1-partners-assistants-org-charts-moving-shapes-children-connector-titles-much/" target="_blank">블로그에서 릴리스 리뷰 보기</a>

### 새로운 기능 {#new-functionality}

- org chart 모드에서 [파트너 도형](/#assistant-and-partner-shapes)을 추가하는 기능
- org chart 모드에서 [어시스턴트 도형](/#assistant-and-partner-shapes)을 추가하는 기능
- default 모드에서 [선에 제목을 추가하는](/#line-titles) 기능
- org chart 및 mindmap 모드의 Editor에서 [도형을 드래그 앤 드롭하여](editor_overview.md#editor-in-the-org-chart-mode) 한 부모에서 다른 부모로 이동하는 기능. 도형은 하위 항목과 함께 드래그됩니다.
- org chart 및 mindmap 모드의 Editor에서 [대상 항목의 스타일을 지정하는](guides/customization.md#styling-target-shapes) 기능

### API {#api}

- Diagram 객체의 새로운 이벤트: [`emptyAreaDblClick`](api/diagram/emptyareadblclick_event.md), [`emptyAreaMouseDown`](api/diagram/emptyareamousedown_event.md), [`lineTitleClick`](api/diagram/linetitleclick_event.md), [`lineTitleDblClick`](api/diagram/linetitledblclick_event.md), [`lineTitleMouseDown`](api/diagram/linetitlemousedown_event.md)
- org chart 모드에 특화된 새로운 [도형 속성](shapes/configuration_properties.md#properties-specific-for-the-org-chart-mode): `assistant`, `partner`, `catchItem`, `giveItem`
- mindmap 모드에 특화된 새로운 [도형 속성](shapes/configuration_properties.md#properties-specific-for-the-mindmap-mode): `catchItem`, `giveItem`
- default 모드에 특화된 새로운 [선 속성](lines/configuration_properties.md#properties-specific-for-the-default-mode): `title`
- Editor 객체의 새로운 메서드: `setViewMode()`, `zoomIn()`, `zoomOut()`
- Editor 객체의 새로운 이벤트: [`beforeLineTitleMove`](api/diagram_editor/editor/events/beforelinetitlemove_event.md), [`afterLineTitleMove`](api/diagram_editor/editor/events/afterlinetitlemove_event.md), [`lineTitleMoveEnd`](api/diagram_editor/editor/events/linetitlemoveend_event.md), [`itemTarget`](api/diagram_editor/editor/events/itemtarget_event.md), [`beforeItemCatch`](api/diagram_editor/editor/events/beforeitemcatch_event.md), [`afterItemCatch`](api/diagram_editor/editor/events/afteritemcatch_event.md)
- Editor 객체의 새로운 속성: [`itemsDraggable`](api/diagram_editor/editor/config/itemsdraggable_property.md)
- 새로운 HistoryManager 메서드: [`add()`](api/diagram_editor/historymanager/methods/add_method.md), [`disable()`](api/diagram_editor/historymanager/methods/disable_method.md), [`enable()`](api/diagram_editor/historymanager/methods/enable_method.md), [`isRedo()`](api/diagram_editor/historymanager/methods/isredo_method.md), [`redo()`](api/diagram_editor/historymanager/methods/redo_method.md), [`reset()`](api/diagram_editor/historymanager/methods/reset_method.md), [`undo()`](api/diagram_editor/historymanager/methods/undo_method.md)
- 새로운 HistoryManager 속성: `disabled`, [`saveDelay`](api/diagram_editor/historymanager/config/savedelay_property.md)
- 새로운 Selection 메서드: `getSubId()`

### 업데이트 {#updates}

- [InlineEditor](/api/inline_editor/)의 이벤트가 업데이트되었습니다: *subHeaderId* 매개변수가 *subId*로 변경되었습니다.
- [Selection API](/api/selection/#events)의 이벤트가 업데이트되었습니다: *subId* 매개변수가 추가되었습니다.
- default 모드의 도형 기본 타입이 [*"rectangle"*](shapes/configuration_properties.md#common-properties)로 변경되었습니다.

### 수정 사항 {#fixes}

- 모든 유형의 다이어그램에 대한 성능이 개선되었습니다.
- Editor의 Toolbar에서 *undo/redo* 버튼의 잘못된 동작을 수정했습니다.

## 버전 4.0.1 {#version-4.0.1}

2021년 9월 16일에 출시되었습니다.

### 수정 사항 {#fixes}

- 도형을 회전할 때 커넥터 표시 문제를 수정했습니다.
- 다이어그램의 축소된(minified) 스타일을 수정했습니다.
- org chart/mindmap 모드에서 다이어그램 편집기에 새 항목을 추가할 때 알고리즘 동작 문제를 수정했습니다.
- 텍스트 스타일 작업 시 편집기 오른쪽 패널의 동작 문제를 수정했습니다.

## 버전 4.0 {#version-4.0}

2021년 9월 7일에 출시되었습니다.

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-0-groups-swimlanes-angular-react-vue-demos/" target="_blank">블로그에서 릴리스 리뷰 보기</a>

### 새로운 기능 {#new-functionality}

- 새로운 다이어그램 항목이 추가되었습니다: [그룹](/groups/), [Swimlanes](/swimlanes/)
- Diagram Editor 왼쪽 패널에 새로운 섹션이 추가되었습니다: [그룹, Swimlanes](guides/diagram_editor/shapebar.md#default-sections)
- [그룹, Swimlanes를 위해 편집기 오른쪽 패널에 새로운 사이드바 옵션이 추가되었습니다](guides/diagram_editor/editbar.md)
- UI를 통해 [그룹](guides/diagram_editor/grid_area.md#managing-groups) 및 [Swimlanes](guides/diagram_editor/grid_area.md#managing-swimlanes)를 편집하는 기능
- [로케일 옵션](guides/localization.md) 목록이 확장되었습니다.
- [CellManager API](/api/cell_manager/)를 통해 swimlane의 셀을 조작하는 기능
- 항목을 더블클릭하여 텍스트를 편집하는 기능
- [Angular용 DHTMLX Diagram](guides/integrations/angular_integration.md) 데모가 추가되었습니다.
- [React용 DHTMLX Diagram](guides/integrations/react_integration.md) 데모가 추가되었습니다.
- [Vue.js용 DHTMLX Diagram](guides/integrations/vue_integration.md) 데모가 추가되었습니다.
- [스타일과 설정이 다른 동일한 항목을 편집기 왼쪽 패널에 추가하는](guides/diagram_editor/shapebar.md) 기능

### API {#api}

- 새로운 [CellManager API](/api/cell_manager/) 메서드: [add()](api/cell_manager/add_method.md), [getCellId()](api/cell_manager/getcellid_method.md), [getCellIndex()](api/cell_manager/getcellindex_method.md), [getSubHeaderCellId()](api/cell_manager/getsubheadercellid_method.md), [getSubHeaderCellIndex()](api/cell_manager/getsubheadercellindex_method.md), [getSubHeaderType()](api/cell_manager/getsubheadertype_method.md), [move()](api/cell_manager/move_method.md), [remove()](api/cell_manager/remove_method.md), [resetSwimlane()](api/cell_manager/resetswimlane_method.md), [setSwimlane()](api/cell_manager/setswimlane_method.md), [validation()](api/cell_manager/validation_method.md)
- 새로운 [CellManager API](/api/cell_manager/) 이벤트: [afterCellsAdd](api/cell_manager/aftercellsadd_event.md), [afterCellsMove](api/cell_manager/aftercellsmove_event.md), [afterCellsRemove](api/cell_manager/aftercellsremove_event.md), [afterCellsValidation](api/cell_manager/aftercellsvalidation_event.md), [beforeCellsAdd](api/cell_manager/beforecellsadd_event.md), [beforeCellsMove](api/cell_manager/beforecellsmove_event.md), [beforeCellsRemove](api/cell_manager/beforecellsremove_event.md), [beforeCellsValidation](api/cell_manager/beforecellsvalidation_event.md)
- Diagram 객체의 새로운 이벤트: [afterSubmenuOpen](api/diagram/aftersubmenuopen_event.md), [beforeSubmenuOpen](api/diagram/beforesubmenuopen_event.md), [groupClick](api/diagram/groupclick_event.md), [groupDblClick](api/diagram/groupdblclick_event.md), [groupHeaderClick](api/diagram/groupheaderclick_event.md), [groupHeaderDblClick](api/diagram/groupheaderdblclick_event.md), [groupMouseDown](api/diagram/groupmousedown_event.md), [itemClick](api/diagram/itemclick_event.md), [itemDblClick](api/diagram/itemdblclick_event.md), [itemMouseDown](api/diagram/itemmousedown_event.md), [itemMouseOut](api/diagram/itemmouseout_event.md), [itemMouseOver](api/diagram/itemmouseover_event.md), [lineDblClick](api/diagram/linedblclick_event.md), [lineMouseDown](api/diagram/linemousedown_event.md)
- Editor 객체의 새로운 이벤트: [shapeMoveEnd](api/diagram_editor/editor/events/shapemoveend_event.md), [beforeItemMove](api/diagram_editor/editor/events/beforeitemmove_event.md), [afterItemMove](api/diagram_editor/editor/events/afteritemmove_event.md), [itemMoveEnd](api/diagram_editor/editor/events/itemmoveend_event.md), [beforeGroupMove](api/diagram_editor/editor/events/beforegroupmove_event.md), [afterGroupMove](api/diagram_editor/editor/events/aftergroupmove_event.md), [groupMoveEnd](api/diagram_editor/editor/events/groupmoveend_event.md)
- DataCollection의 새로운 메서드: [eachChild()](api/data_collection/eachchild_method.md), [eachParent()](api/data_collection/eachparent_method.md), [getRoot()](api/data_collection/getroot_method.md), [getRoots()](api/data_collection/getroots_method.md)
- InlineEditor의 새로운 이벤트: [afterEditorClose](api/inline_editor/aftereditorclose_event.md), [afterEditorEditing](api/inline_editor/aftereditorediting_event.md), [afterEditorOpen](api/inline_editor/aftereditoropen_event.md), [beforeEditorClose](api/inline_editor/beforeeditorclose_event.md), [beforeEditorEditing](api/inline_editor/beforeeditorediting_event.md), [beforeEditorOpen](api/inline_editor/beforeeditoropen_event.md)
- [도형 객체](shapes/configuration_properties.md)의 새로운 "editable" 및 "fixed" 설정 속성

### 업데이트 {#updates}

- 키보드 탐색이 개선되었습니다.
- 도형 디자인이 재설계되었습니다.
- Editor 객체의 이벤트가 업데이트되었습니다: [beforeShapeMove](api/diagram_editor/editor/events/beforeshapemove_event.md) 및 [afterShapeMove](api/diagram_editor/editor/events/aftershapemove_event.md)
- Shape Collection API의 구조가 업그레이드되었습니다.

### 수정 사항 {#fixes}

- 편집기에서 TypeScript 타입 정의의 잘못된 동작을 수정했습니다.
- HTML 폼 내부에 배치된 편집기에서 툴바 버튼을 누르면 폼 전송이 트리거되던 문제를 수정했습니다.
- 이제 회전 각도가 0도 또는 360도인 경우에만 요소의 크기를 조정할 수 있습니다.
- Diagram 스타일의 성능을 대폭 최적화했습니다.

## 버전 3.1 {#version-3.1}

2021년 4월 15일에 출시되었습니다.

### 새로운 기능 {#new-functionality}

- [TypeScript 지원](guides/using_typescript.md)
- DHTMLX Diagram에 새로운 mindmap 모드([type:"mindmap"](api/diagram/type_property.md))가 추가되었습니다.
- diagram 객체의 [typeConfig](api/diagram/typeconfig_property.md) 설정 속성을 통해 [Diagram의 mindmap 모드에서 루트 도형에 대한 하위 도형의 방향을 설정하는](guides/diagram/configuration.md#arranging-shapes-in-the-mindmap-mode-of-diagram) 기능
- [addShape()](api/diagram/addshape_method.md) 메서드의 "eventHandlers" 속성을 통해 [사용자 지정 도형에 대한 사용자 지정 이벤트 핸들러를 추가하는](shapes/custom_shape.md#event-handlers-for-custom-shapes) 기능
- Editor 객체의 [shapeToolbar](api/diagram_editor/editor/config/shapetoolbar_property.md) 속성을 통해 [그리드 영역](guides/diagram_editor/grid_area.md)에서 항목 편집을 위한 개인 툴바를 사용자 지정하는 기능
- Editor 객체의 새로운 이벤트: [BeforeShapeIconClick](api/diagram_editor/editor/events/beforeshapeiconclick_event.md) 및 [AfterShapeIconClick](api/diagram_editor/editor/events/aftershapeiconclick_event.md), [BeforeShapeMove](api/diagram_editor/editor/events/beforeshapemove_event.md) 및 [AfterShapeMove](api/diagram_editor/editor/events/aftershapeiconclick_event.md)
- diagram 객체의 [exportStyles](api/diagram/exportstyles_property.md) 설정 옵션을 통해 내보내기 서비스로 CSS 스타일을 전송하지 않도록 취소하는 기능

### 업데이트 {#updates}

- diagram 객체의 [type](api/diagram/type_property.md) 설정 속성이 업데이트되었습니다: 새로운 "default" 및 "mindmap" 값이 추가되었습니다.
- [collapseItem()](api/diagram/collapseitem_method.md) 및 [expandItem()](api/diagram/expanditem_method.md) 메서드가 업데이트되었습니다: 두 번째 "dir" 매개변수가 추가되었습니다.
- [beforeCollapse](api/diagram/beforecollapse_event.md), [afterCollapse](api/diagram/aftercollapse_event.md), [beforeExpand](api/diagram/beforeexpand_event.md), [afterExpand](api/diagram/afterexpand_event.md) 이벤트가 업데이트되었습니다: 두 번째 "dir" 매개변수가 추가되었습니다.

### 수정 사항 {#fixes}

- 모든 유형의 DHTMLX Diagram에 대한 선택 모듈 문제를 수정했습니다.
- 확대된 다이어그램에 "showItem()" 메서드를 적용할 때, default 모드로 초기화된 다이어그램의 스크롤 문제를 수정했습니다.
- HTML 템플릿에 대한 DOM Parser의 잘못된 동작을 수정했습니다.
- 하위 도형을 축소한 후 루트 도형이 축소되던 문제를 수정했습니다.
- 도형 텍스트 서식 지정 문제를 수정했습니다.
- 편집기 오른쪽 패널의 텍스트 영역 필드에 긴 텍스트를 추가한 후 나타나던 문제를 수정했습니다.
- 사용자 지정 도형의 텍스트에 특수 문자를 추가하는 문제를 수정했습니다.
- 사용자 지정 도형에 대해 콘솔에 표시되는 경고 문제를 수정했습니다.
- 편집기에서 루트 도형을 삭제할 때 발생하는 스크립트 오류를 수정했습니다.
- 편집기가 설정되지 않은 상태에서 "Auto Layout" 버튼을 적용할 때 콘솔에 표시되는 오류 문제를 수정했습니다.
- default 모드로 초기화된 편집기에서 오른쪽 패널의 도형 매개변수 추적 문제를 수정했습니다.
- 편집기의 default 모드에서 도형의 포커스 제거 문제를 수정했습니다.
- 편집기가 default 모드로 초기화되었을 때 필요한 순서로 도형 사이에 커넥터를 설정하는 문제를 수정했습니다.
- 편집기의 org chart 모드에서 <kbd>Ctrl</kbd>+<kbd>A</kbd> 조합의 잘못된 동작을 수정했습니다.
- 연결된 도형을 복사할 때 도형이 커넥터 없이 붙여넣기되던 문제를 수정했습니다.
- 이제 편집기가 org chart 모드로 초기화되었을 때 키보드 탐색을 사용하여 편집기에서 루트 도형을 제거할 수 없습니다.

## 버전 3.0.4 {#version-3.0.4}

2021년 1월 27일에 출시되었습니다.

### 수정 사항 {#fixes}

- 페이지의 입력 필드로 작업할 때, default 모드로 초기화된 Editor에서 선택된 도형의 잘못된 동작을 수정했습니다.
- 축소/확장된 항목이 부모 항목과 함께 작동하지 않던 문제를 수정했습니다.
- 하위 항목이 숨겨져 있을 때 [showItem()](api/diagram/showitem_method.md) 메서드의 잘못된 동작을 수정했습니다.

## 버전 3.0.3 {#version-3.0.3}

2020년 12월 23일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram 내보내기 서비스 관련 문제를 수정했습니다.

## 버전 3.0.2 {#version-3.0.2}

2020년 7월 14일에 출시되었습니다.

### 수정 사항 {#fixes}

- org chart 모드로 초기화된 Editor로 JSON에서 데이터를 가져오는 문제를 수정했습니다.
- 편집기 오른쪽 패널을 설정하는 동안 [addShape()](api/diagram/addshape_method.md) 메서드의 잘못된 동작을 수정했습니다.
- Editor의 툴바에서 historyManager 컨트롤의 동작이 개선되었습니다.

## 버전 3.0.1 {#version-3.0.1}

2020년 5월 29일에 출시되었습니다.

### 수정 사항 {#fixes}

- [autoPlace()](api/diagram/autoplace_method.md) 메서드 관련 문제를 수정했습니다.
- PNG/PDF 내보내기 모듈 관련 문제를 수정했습니다.

## 버전 3.0 {#version-3.0}

2020년 5월 12일에 출시되었습니다.

### 주요 변경 사항 {#breaking-changes}

새 업데이트는 몇 가지 변경 사항과 개선 사항을 도입합니다. 최신 버전에 맞춰 대응하려면 [마이그레이션](migration.md#22---30) 문서를 확인하십시오.

### 새로운 기능 {#new-functionality}

- 계층 구조에서 [연결된 도형을 자동으로 배치하기](guides/manipulating_items.md#arranging-shapes-automatically) 위한 새로운 [autoPlace()](api/diagram/autoplace_method.md) 메서드와 [autoplacement](api/diagram/autoplacement_property.md) 속성이 추가되었습니다.
- [Diagram](api/diagram/defaults_property.md) 또는 [Diagram Editor](api/diagram_editor/editor/config/defaults_property.md) 초기화 시 `defaults` 속성을 통해 [도형의 기본 설정을 지정하는](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape) 기능
- Diagram과 Diagram Editor에서 [사용자 지정 도형을 생성하기](shapes/custom_shape.md) 위한 [addShape()](api/diagram/addshape_method.md) 메서드가 추가되었습니다.
- Editor 객체의 새로운 속성: `controls`, [defaults](api/diagram_editor/editor/config/defaults_property.md), `shapeSections`, `shapeBarWidth`, `scalePreview`, [scale](api/diagram_editor/editor/config/scale_property.md), `gapPreview`
- *Grid Step* 사이드바 옵션이 [편집기 오른쪽 패널](guides/diagram_editor/editbar.md)에 추가되었습니다.
- Editor 객체의 `controls` 속성을 통해 Editor의 툴바 버튼과 *Grid Step* 사이드바 옵션을 표시/숨김 처리하는 기능
- [addShape()](api/diagram/addshape_method.md) 메서드의 `properties` 속성을 통해 [편집기 오른쪽 패널에서 사용자 지정 도형의 속성을 편집하기 위한 사이드바 옵션을 설정하는](guides/diagram_editor/editbar.md) 기능
- [편집기 왼쪽 패널의 섹션을 사용자 지정하는](guides/diagram_editor/shapebar.md#custom-sections) 기능
- 도형 객체의 [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) 속성을 통해 [편집기 왼쪽 패널에 렌더링되는 도형의 모양을 사용자 지정하는](guides/diagram_editor/shapebar.md) 기능
- Editor에서 [여러 도형을 선택, 복사, 붙여넣기, 삭제, 이동하는](guides/diagram_editor/grid_area.md#manipulating-multiple-items) 기능
- default 모드로 초기화된 편집기에서 [여러 커넥터 선을 선택하고 삭제하는](guides/diagram_editor/grid_area.md#manipulating-multiple-items) 기능
- 툴바의 ["Import Data"](guides/diagram_editor/toolbar.md) 버튼을 통해 JSON 파일에서 Editor로 데이터를 가져오는 기능
- [destructor()](api/diagram/destructor_method.md) 메서드가 추가되었습니다.

### 업데이트 {#updates}

- IE에서 사용자 지정 HTML 템플릿을 사용하는 기능
- Diagram Editor UI가 업데이트되고 개선되었습니다.
- 중심에서 중심으로 도형을 연결하는 기능
- Editor의 단축키 세트가 업데이트되었습니다.
- default 모드로 초기화된 편집기에서 *text* 도형에 커넥터 선을 설정하는 기능
- *text* 도형의 콘텐츠 너비 자동 맞춤이 추가되었습니다.

## 버전 2.2.1 {#version-2.2.1}

2019년 12월 30일에 출시되었습니다.

### 수정 사항 {#fixes}

- Diagram 편집기에서 이미지 로더에 대한 IE 지원 문제.

## 버전 2.2 {#version-2.2}

2019년 11월 27일에 출시되었습니다.

### 새로운 기능 {#new-functionality}

- SVG와 HTML 템플릿을 사용하여 사용자 지정 도형을 생성하는 기능
- 다양한 유형의 도형으로 다이어그램을 구성하는 기능
- [툴바](guides/diagram_editor/toolbar.md)의 Export data 버튼을 통해 Diagram Editor에서 JSON 형식으로 데이터를 내보내는 기능
- [showExport](migration.md#toolbar-buttons-in-editor) 옵션과 `exportData` 이벤트가 Diagram Editor에 추가되었습니다.

### 수정 사항 {#fixes}

- 다이어그램을 PDF 및 PNG 형식으로 내보낼 때 발생하는 문제를 수정했습니다.
- 마우스 이벤트의 잘못된 동작을 수정했습니다.
- org chart 모드로 초기화된 다이어그램에서 하위 도형을 삭제하는 문제를 수정했습니다.
- Diagram Editor의 오른쪽 및 왼쪽 패널의 잘못된 동작을 수정했습니다.
- 도형과 커넥터의 고유 ID 자동 생성 문제를 수정했습니다.

## 버전 2.1.1 {#version-2.1.1}

2019년 10월 11일에 출시되었습니다.

### 수정 사항 {#fixes}
- IE에서 img-card 관련 문제.

## 버전 2.1 {#version-2.1}

2017년 5월 22일에 출시되었습니다.

### 새로운 기능 {#new-functionality}

- 명확한 다이어그램을 구축하기 위한 편리한 [Diagram 편집기](guides/diagram_editor/initialization.md)
- [도형](shapes/configuration_properties.md) 및 [선](lines/configuration_properties.md)에 대한 풍부한 설정 옵션 세트
- [Diagram](guides/customization.md)을 사용자 지정하는 더 다양한 가능성

### 업데이트 {#updates}

- 편집기에서 Diagram을 편집하기 위한 [단축키](guides/diagram_editor/hot_keys.md)가 추가되었습니다.
- 새로운 이벤트 [emptyAreaClick](api/diagram/emptyareaclick_event.md)이 추가되었습니다.
- `lineGap` 설정 옵션이 추가되었습니다.

## 버전 2.0 {#version-2.0}

2017년 2월 15일에 출시되었습니다.

### 주요 변경 사항 {#breaking-changes}

API 구조가 작업을 단순화하기 위해 완전히 재구성되고 개선되었습니다. 모든 변경 사항을 확인하려면 [마이그레이션](migration.md#11---20) 문서를 따르십시오.

### 새로운 기능 {#new-functionality}

- 다양한 다이어그램을 생성하고 스타일을 지정하는 기능
- 다양한 [도형](shapes/default_shapes.md) 및 [선](/lines/)
- [PDF 형식으로 내보내기](guides/data_export.md)
- [PNG 형식으로 내보내기](guides/data_export.md)

### 업데이트 {#updates}

- [필요한 도형을 찾는](guides/manipulating_items.md#finding-the-necessary-item) 기능
- [지정된 조건으로 도형을 필터링하는](guides/manipulating_items.md#filtering-items) 기능
- 도형과의 상호작용을 단순화하기 위해 [도형에 아이콘이 있는 툴바를 추가하는](guides/diagram/configuration.md#setting-toolbar-for-shapes) 기능
- 향상된 성능
- 모든 HTML 컨테이너에 맞추고 내장된 자동 크기 조정을 지원하는 기능

## 버전 1.1 {#version-1.1}

2017년 12월 5일에 출시되었습니다.

### 새로운 기능 {#new-functionality}

- [org chart 모드에서 Editor 사용하기](api/diagram_editor/editor/config/type_property.md)
- [상태를 저장하고 복원하는](guides/loading_data.md#saving-and-restoring-state) 기능
- 확장된 [사용자 지정 가능성](guides/customization.md)

### 업데이트 {#updates}

- [확장된 API](api/diagram/api_overview.md): 새로운 메서드, 속성, 이벤트

## 버전 1.0 {#version-1.0}

2017년 9월 29일에 출시되었습니다.

### 초기 기능 {#initial-functionality}

- Organogram 모드
- 수직 및 수평 자동 배치 전략
- JSON에서 데이터 로드
- 데이터 및 분기 상태를 관리하는 API
