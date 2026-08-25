---
sidebar_label: 항목 조작
title: 항목 조작
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 항목 조작에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---
# 항목 조작

[Diagram Editor](guides/diagram_editor/initialization.md)를 통해 Diagram 항목을 조작할 수 있습니다. 이 문서에서는 컴포넌트의 API를 통해 DHTMLX Diagram의 항목을 조작하는 방법을 살펴봅니다.

## 개요 {#overview}

이 문서에는 다음 내용을 다루는 섹션이 포함되어 있습니다.

- [계층 구조 순서로 도형을 자동으로 배치하는 방법](#arranging-shapes-automatically);
- 항목에 대해 다양한 작업을 수행하는 방법, 특히 다음 사항:
    - 항목 [추가](#adding-an-item)/[업데이트](#updating-an-item)/[삭제](#deleting-items);
    - diagram에 [항목이 존재하는지 확인](#checking-existence-of-the-item)하고 [가져오기](#getting-an-item);
    - [항목 선택](#selecting-items);
    - diagram에 항목이 많을 경우 화면에 표시되도록 [필요한 항목으로 스크롤](#showing-the-necessary-item);
    - [항목 확장/축소](#expandingcollapsing-items);
    - 특정 기준에 맞는 [항목 찾기](#finding-the-necessary-item);
    - 특정 항목만 렌더링하도록 [diagram 필터링](#filtering-items);
- [그룹의 하위 항목에 대한 드래그 앤 드롭을 관리하는 방법](#drag-n-drop-of-group-items);
- [스윔레인과 그 셀을 다루는 방법](#working-with-swimlane-cells), 구체적으로:
    - 활성 스윔레인 [설정/재설정](#settingresetting-the-active-swimlane);
    - [스윔레인 서브헤더의 유형 가져오기](#getting-the-type-of-the-subheader);
    - 열/행 [추가](#adding-a-columnrow)/[제거](#removing-a-columnrow)/[이동](#moving-a-columnrow);
    - 셀의 [id](#getting-the-id-of-a-cell)/[인덱스](#getting-the-index-of-a-cell) 가져오기 및 [셀에서 수행 가능한 작업 확인](#validating-cells).

## 도형 자동 배치 {#arranging-shapes-automatically}

라이브러리는 기본 모드로 초기화된 diagram의 도형과 커넥터에 대해 자동 배치를 구현할 수 있는 기능을 제공합니다. 자동 배치를 사용하면 다음이 가능합니다.

- 연결된 도형을 한 번에 대칭적인 순서로 배치;
- JSON 형식으로 로드되거나 서버에서 로드된 데이터를 계층 구조로 배치.

자동 배치를 수행하려면 [`autoPlace()`](api/diagram/autoplace_method.md) 메서드를 사용하세요. 이 메서드는 하나의 매개변수를 받을 수 있습니다.

- `config` - (*object*) 선택 사항, 자동 배치의 구성 설정을 담은 객체입니다. 이 객체에는 다음 속성이 포함될 수 있습니다.
    - `mode` - (*string*) 선택 사항, 도형 연결 모드로 `"direct"`(기본값) 또는 `"edges"`
    - `graphPadding` - (*number*) 선택 사항, 연결되지 않은 diagram 간의 거리를 설정하며 기본값은 *200*
    - `placeMode` - (*string*) 선택 사항, 도형 배치 모드를 설정하며 `"orthogonal"`(기본값) 또는 `"radial"`
    - `itemPadding` - (*number*) 선택 사항, 항목 간 최소 패딩(최소값은 *1*)이며 기본값은 *20*
    - `levelPadding` - (*number*) 선택 사항, 계층 레벨 간 최소 패딩(최소값은 *1*)이며 기본값은 *20*

:::note
`autoPlace()` 메서드는 diagram의 기본 모드에서 도형에 대해서만 작동합니다. 그룹이나 스윔레인을 사용하는 경우 자동 배치는 작동하지 않습니다.
:::

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
    mode: "edges",
    graphPadding: 100,
    placeMode: "radial",
    itemPadding: 10,
    levelPadding: 10
});
~~~

**관련 샘플**: [Diagram. 기본 모드. 자동 배치](https://snippet.dhtmlx.com/f3uekgjw)

메서드에 매개변수를 전달하지 않으면 기본 설정이 적용됩니다.

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace();
~~~

Diagram의 [`autoplacement`](api/diagram/autoplacement_property.md) 구성 옵션을 사용하고 `autoPlace()` 메서드를 적용하여 자동 배치 설정을 구성할 수도 있습니다. 아래 예시는 자동 배치를 사용하여 방사형 데이터세트를 생성하고 배치하는 방법을 보여줍니다.

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    scale: 0.3,
    autoplacement: {
        placeMode: "radial",
        mode: "direct"
    }
});

diagram.data.parse(getNodes(120, 5));

diagram.autoPlace({
    itemPadding: 10,
    levelPadding: 10,
    graphPadding: 100,
});
~~~

![생성된 방사형 데이터세트를 사용한 자동 배치](/img/radial_datasets_generator.png)

**관련 샘플:** [Diagram. 기본 모드. 자동 배치를 사용하여 생성된 방사형 데이터세트 배치](https://snippet.dhtmlx.com/rwsime82)

## 항목 추가 {#adding-an-item}

diagram에 새 항목을 추가하려면 `data` 객체의 [`add()`](api/data_collection/add_method.md) 메서드를 적용하세요.

~~~jsx
diagram.data.add({ id: "3.2", text: "New Item", parent: "3" });
~~~

예를 들어, 다음 속성을 가진 새 도형 객체를 추가했습니다.

- `id` - (*string|number*) 도형의 고유 id
- `text` - (*string*) 도형에 렌더링될 텍스트
- `parent` - (*string|number*) 부모 도형의 id

도형 객체의 사용 가능한 모든 속성은 [API 섹션](shapes/configuration_properties.md)에서 확인할 수 있습니다.

**관련 샘플**: [Diagram. 데이터. 항목 추가/삭제](https://snippet.dhtmlx.com/8wi20uop)

## 항목 가져오기 {#getting-an-item}

항목의 id를 `data` 객체의 [`getItem()`](api/data_collection/getitem_method.md)  메서드에 전달하여 해당 항목의 객체를 가져올 수 있습니다. 예를 들면 다음과 같습니다.

~~~jsx
const shape = diagram.data.getItem(1);
~~~

항목을 가져온 후에는 다음과 같이 원래 속성에 접근할 수 있습니다.

~~~jsx
const shape = diagram.data.getItem(1);
const text = shape.text;
~~~

## 항목의 id 가져오기 {#getting-the-id-of-an-item}

항목의 id를 모를 경우, [`getId()`](api/data_collection/getid_method.md) 메서드를 사용하여 가져올 수 있습니다. 이 메서드는 항목의 인덱스를 매개변수로 받습니다.

~~~jsx
const id = diagram.data.getId(0); // -> "1" 반환
~~~

## 항목의 인덱스 가져오기 {#getting-the-index-of-an-item}

항목의 id를 [`getIndex()`](api/data_collection/getindex_method.md) 메서드에 전달하여 해당 항목의 인덱스를 가져올 수 있습니다.

~~~jsx
const id = diagram.data.getIndex("1"); // -> 0 반환
~~~

## 항목 삭제 {#deleting-items}

### 단일 항목 삭제 {#deleting-a-single-item}

불필요한 항목을 삭제하려면 `data` 객체의 [`remove()`](api/data_collection/remove_method.md) 메서드를 사용하고 해당 항목의 id를 매개변수로 전달하세요.

~~~jsx
diagram.data.remove("3.2");
~~~

:::note
diagram이 조직도 또는 마인드맵 모드로 초기화된 경우, 도형을 삭제하면 해당 도형의 커넥터와 모든 하위 도형도 함께 제거됩니다.
:::

### 모든 항목 삭제 {#deleting-all-the-items}

필요한 경우, 모든 항목을 한 번에 삭제하여 diagram을 지울 수 있습니다. 이를 위해 `data` 객체의 [`removeAll()`](api/data_collection/removeall_method.md) 메서드를 적용하세요.

~~~jsx
diagram.data.removeAll();
~~~

**관련 샘플**: [Diagram. 데이터. 항목 추가/삭제](https://snippet.dhtmlx.com/8wi20uop)

## 항목 업데이트 {#updating-an-item}

`data` 객체의 [`update()`](api/data_collection/update_method.md) 메서드를 사용하여 항목의 모양과 내용을 업데이트할 수 있습니다.

~~~jsx
diagram.data.update("1", { text: "Some new text" });
~~~

매개변수로는 다음 두 가지를 전달해야 합니다.

- `id` - (*string|number*) 항목의 id
- `config` - (*object*) 업데이트된 구성 속성을 담은 객체

**관련 샘플**: [Diagram. 데이터. 항목 업데이트](https://snippet.dhtmlx.com/y8uk4sbj)

## 항목 존재 여부 확인 {#checking-existence-of-the-item}

`data` 컬렉션의 [`exists()`](api/data_collection/exists_method.md) 메서드를 통해 diagram에 항목이 존재하는지 확인할 수 있습니다. 이 메서드는 항목의 id를 매개변수로 받으며, 항목이 존재하면 *true*를 반환합니다.

~~~jsx
const shapeExists = diagram.data.exists("1");
~~~

## 항목 선택 {#selecting-items}

### 항목 선택하기 {#selecting-an-item}

항목을 선택하려면 먼저 diagram에 대해 [선택 기능을 활성화](guides/diagram/configuration.md#enabling-items-selection)한 다음, 원하는 항목을 선택하기 위해 `selection` 객체의 [add()](api/selection/add_method.md) 메서드를 호출해야 합니다.

~~~jsx {8,11-12,15-16}
// diagram은 "select:true" 옵션으로 생성되어야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 데이터 로드
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> 항목이 선택되었으면 true 반환
console.log(diagram.selection.getIds()); // -> ["1"]

// 이미 선택된 항목에 id가 "2"인 항목을 추가
diagram.selection.add({ id: "2", join: true });
console.log(diagram.selection.getIds()); // -> ["1", "2"]

// 이전에 선택된 항목을 제거하고 id가 "3"인 항목을 추가
diagram.selection.add({ id: "3" });
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

이 메서드는 다음 매개변수를 가진 객체를 인자로 받습니다.

- `id` - (필수) 선택 목록에 추가할 항목의 id
- `join` - (선택 사항) 선택된 요소를 선택 목록에 추가하는 모드입니다. 이 매개변수가 *false*로 설정되거나 전달되지 않으면, 이전에 선택 목록에 추가된 항목이 초기화됩니다
- `batch` - (선택 사항) 선택할 항목의 목록(미리 알고 있는 경우)

이 메서드는 다음을 반환합니다.

- `true` - 요소가 목록에 없었고 성공적으로 추가된 경우
- `false` - 어떤 이유로든 요소가 목록에 추가되지 않은 경우(예: 요소가 이미 목록에 추가되어 있던 경우)

### 항목 선택 해제 {#unselecting-an-item}

선택 목록에서 항목을 제거하려면 `selection` 객체의 [`remove()`](api/selection/remove_method.md) 메서드를 사용하세요.

~~~jsx {2}
console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> 항목이 선택 해제되었으면 true 반환
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

이 메서드는 *선택 해제할 항목의 id*를 담은 객체를 매개변수로 받을 수 있습니다. 항목이 선택 목록에서 성공적으로 제거되면 *true*를 반환합니다.

다음과 같이 인자 없이 메서드를 호출하여 선택 목록을 지울 수도 있습니다.

~~~jsx {2-3}
console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// 선택 목록에서 모든 항목을 제거
diagram.selection.remove();
console.log(diagram.selection.getIds()); // -> []
~~~

### 선택된 항목의 id 가져오기 {#getting-the-ids-of-selected-items}

`selection` 객체의 [`getIds()`](api/selection/getids_method.md) 메서드를 사용하여 현재 선택된 항목들의 id 목록을 가져올 수 있습니다.

~~~jsx
const ids = diagram.selection.getIds(); // -> ["1", "1.1" ...] or []
~~~

이 메서드는 선택된 항목과 하위 항목의 id 배열을, 현재 선택된 항목이 없으면 빈 배열을 반환합니다.

### 선택된 항목의 객체 가져오기 {#getting-the-object-of-a-selected-item}

`selection` 객체의 [`getItem()`](api/selection/getitem_method.md) 메서드를 사용하여 선택된 항목의 객체를 가져올 수 있습니다. 이 메서드는 다음 매개변수를 담은 객체를 인자로 받을 수 있습니다.

- `id` - (필수) - 해당 항목의 id

매개변수 없이 메서드를 호출하여 마지막으로 선택된 항목의 객체를 가져올 수도 있습니다. 이 메서드의 기능을 살펴보려면 아래 예시를 확인하세요.

~~~jsx {9-11,13-15,17-19}
// diagram은 "select:true" 옵션으로 생성되어야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 데이터 로드
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// 마지막으로 선택된 항목 가져오기
const item = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner"}

// id로 선택된 항목 가져오기
const item = diagram.selection.getItem({ id: "1" });
// -> {id: "1", text: "Chairman & CEO", title: "Henry Bennett"}

// 선택 목록에 없는 항목을 가져오려고 시도
const item = diagram.selection.getItem({ id: "4" });
// -> 선택 목록에 지정된 id의 항목이 없으므로 undefined 반환
~~~

### 선택 목록 지우기 {#clearing-the-selection-list}

이벤트를 발생시키지 않고 선택 목록을 지워야 할 때는 [`clear()`](api/selection/clear_method.md) 메서드를 사용하세요.

~~~jsx
diagram.selection.clear();
~~~

### 항목 선택 여부 확인 {#checking-whether-an-item-is-selected}

API를 통해 선택된 Diagram 항목 목록에 특정 항목이 있는지 확인하는 방법이 있습니다. 이를 위해 `selection` 객체의 [`includes()`](api/selection/includes_method.md) 메서드를 사용하세요.

~~~jsx {2-3}
diagram.selection.getIds(); // -> ["1", "2", "3"]
diagram.selection.includes({ id: "1" }) // true 반환
diagram.selection.includes({ id: "4" }) // false 반환
~~~

이 메서드는 다음 매개변수를 담은 객체를 인자로 받습니다.

- `id` - (*string|number*) 필수, 확인할 항목의 id

**관련 샘플**: [Diagram. 선택. 항목 선택](https://snippet.dhtmlx.com/jyoxn5h7)

## 항목 확장/축소 {#expandingcollapsing-items}

하위 도형을 가진 도형이나 그룹/스윔레인은 해당 API 메서드인 [expandItem()](api/diagram/expanditem_method.md)과 [collapseItem()](api/diagram/collapseitem_method.md)을 통해 확장하거나 축소할 수 있습니다.

두 메서드 모두 두 개의 매개변수를 받습니다.

- `id` - (*string|number*) 항목의 id
- `dir` - (*string*) 선택 사항, 부모 도형을 기준으로 하위 항목이 숨겨지거나 표시될 방향을 정의합니다: `"left"`, `"right"`

~~~jsx
// id가 "3"인 항목 확장
diagram.expandItem("3");

// id가 "3"인 항목 축소
diagram.collapseItem("3");
~~~

:::note
`dir` 속성은 Diagram의 마인드맵 모드(type:`"mindmap"`)에서만 사용할 수 있습니다.
:::

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.data.parse(data);

diagram.collapseItem("main", "left");
// 또는
diagram.expandItem("main", "left");
~~~

## 필요한 항목 표시 {#showing-the-necessary-item}

항목이 많은 대규모 diagram이 있는 경우, 원하는 항목을 화면에 표시할 수 있습니다.
이를 위해 항목의 id를 매개변수로 받는 [`showItem()`](api/diagram/showitem_method.md) 메서드를 적용하세요.

~~~jsx
diagram.showItem("2.1");
~~~

**관련 샘플**: [Diagram. 콘텐츠 스크롤](https://snippet.dhtmlx.com/f970hbym)

[DHTMLX Diagram의 스크롤에 대해 자세히 알아보기](guides/diagram/scrolling_diagram.md).

## 필요한 항목 찾기 {#finding-the-necessary-item}

Diagram 컴포넌트의 API를 사용하여 diagram에서 필요한 항목을 찾을 수 있습니다. `data` 컬렉션의 [`find()`](api/data_collection/find_method.md) 메서드가 이 작업을 수행하는 데 도움이 됩니다.
이 메서드는 검색 조건을 매개변수로 받아 지정된 조건에 일치하는 첫 번째 도형 객체를 반환합니다.

~~~jsx
// 속성 키로 도형 검색
const shape = diagram.data.find({by:"text",match:"Manager"});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}

// 함수로 도형 검색
const shape = diagram.data.find((shape) => {
    if(shape.text==="Manager"||shape.text==="Marketer"){
        return true;
    }
});
~~~

**관련 샘플**: [Diagram. 데이터. 필요한 도형 찾기](https://snippet.dhtmlx.com/sete9z73)

### 검색 조건에 맞는 모든 항목 찾기 {#finding-all-the-items-that-meet-the-search-criteria}

`data` 컬렉션의 [`findAll()`](api/data_collection/findall_method.md) 메서드를 통해 설정된 조건에 맞는 모든 항목을 찾을 수도 있습니다. 이 메서드는 `find()` 메서드와 동일한 매개변수를 받으며 항목 객체의 배열을 반환합니다.

~~~jsx
// 속성 키로 도형 검색
const shapes = diagram.data.findAll({by:"text",match:"Manager"});

// 함수로 도형 검색
const shapes = diagram.data.findAll((shapes) => {
    if(shapes.text==="Manager"||shapes.text==="Marketer"){
        return true;
    }
});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
// ->{id:"2.1",text:"Marketer",title:"Charles Little", img: "../avatar-4.png", …}
~~~

## 항목 필터링 {#filtering-items}

`data` 컬렉션의 [`filter()`](api/data_collection/filter_method.md) 메서드를 통해 diagram을 필터링하고 필터 조건에 맞는 항목만 렌더링할 수 있습니다. 이 메서드는 필터링된 항목만 표시하고 나머지는 숨깁니다.

<iframe src="https://snippet.dhtmlx.com/tm43bsgn?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 그룹 항목의 드래그 앤 드롭 {#drag-n-drop-of-group-items}

그룹의 기본 설정을 사용하면 그룹 내 하위 항목의 순서를 변경하거나 그룹 간에 항목을 드래그할 수 있습니다.

필요한 경우, 하위 항목을 다른 그룹으로 드래그하는 것을 비활성화하고 부모 그룹 내에서만 항목을 드래그할 수 있도록 설정할 수 있습니다. 또한 부모 그룹 테두리의 동작을 조정하여 사용자가 하위 항목을 그룹 밖으로 드래그할 때 테두리가 확장될지 여부를 정의할 수 있습니다.

그룹 항목의 동작을 구성하는 방법에 대한 자세한 내용은 [관련 문서](/groups/#configuring-the-behavior-of-group-items)를 참고하세요.

## 스윔레인 셀 다루기 {#working-with-swimlane-cells}

[CellManager API](/api/cell_manager/)를 사용하여 스윔레인 셀을 관리할 수 있습니다. 예를 들어, 행이나 열로 셀을 추가, 이동, 제거하거나 셀을 검증하는 등 다양한 작업을 수행할 수 있습니다.

다음과 같은 구성의 스윔레인을 예로 들어보겠습니다.

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 600,
        layout: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        header: {
            text: "Swimlane",
            position: "top"
        },
        subHeaderRows: {
            headers:[
                { text: "Subheader 1", id: "s1" },
                { text: "Subheader 2", id: "s2" },
                { text: "Subheader 3", id: "s3" }
            ]
        }
    }
];
~~~

그리고 사용 가능한 API 메서드를 사용하여 스윔레인의 셀을 다루는 방법을 살펴보겠습니다.

### 활성 스윔레인 설정/재설정 {#settingresetting-the-active-swimlane}

스윔레인의 셀을 조작하려면 먼저 활성 스윔레인을 설정해야 합니다. 이는 cellManager 객체의 [`setSwimlane()`](api/cell_manager/setswimlane_method.md) 메서드를 통해 수행할 수 있습니다.

~~~jsx
diagram.cellManager.setSwimlane("main");
~~~

또는 selection 객체의 [`add()`](api/selection/add_method.md) 메서드를 통해서도 수행할 수 있습니다.

~~~jsx
diagram.selection.add("main");
~~~

스윔레인이나 그 셀에 대한 작업을 마친 후에는 cellManager 객체의 [`resetSwimlane()`](api/cell_manager/resetswimlane_method.md) 메서드를 적용하여 스윔레인의 선택을 해제할 수 있습니다.

~~~jsx
diagram.cellManager.resetSwimlane();
~~~

### 열/행 추가 {#adding-a-columnrow}

스윔레인에 행 또는 열로 셀 집합을 추가할 수 있습니다. 이를 위해 cellManager 객체의 [`add()`](api/cell_manager/add_method.md) 메서드를 적용하고 다음 두 매개변수를 전달해야 합니다.
- 새 열/행이 추가될 셀 위치의 시작 인덱스;
- 추가 방향: 행을 추가할 경우 *`"up"` | `"down"`*, 열을 추가할 경우 *`"left"` | `"right"`*.

~~~jsx
// 지정된 행 아래에 새 행 추가
diagram.cellManager.add(0, "down");

// 지정된 열의 왼쪽에 새 열 추가
diagram.cellManager.add(0, "left");
~~~

### 열/행 제거 {#removing-a-columnrow}

스윔레인에서 행 또는 열로 셀 집합을 제거하려면 cellManager 객체의 [`remove()`](api/cell_manager/remove_method.md) 메서드를 사용하세요. 이 메서드는 두 개의 매개변수를 받습니다.

- 열/행이 제거될 위치의 인덱스;
- 제거할 항목의 유형: *`"col"` | `"row"`*

~~~jsx
// 스윔레인에서 첫 번째 행 제거
diagram.cellManager.remove(0, "row");

// 스윔레인에서 두 번째 열 제거
diagram.cellManager.remove(1, "col");
~~~

### 열/행 이동 {#moving-a-columnrow}

cellManager 객체의 [`move()`](api/cell_manager/move_method.md) 메서드를 적용하여 스윔레인의 열이나 행 위치를 변경할 수 있습니다. 이 메서드를 사용하면 열을 한 칸 오른쪽이나 왼쪽으로, 행을 한 칸 위나 아래로 이동할 수 있습니다. 이 메서드는 두 개의 매개변수를 받습니다.

- 이동할 열/행의 현재 위치 인덱스
- 항목 이동 방향: 행을 이동할 경우 *`"up"` | `"down"`*, 열을 이동할 경우 *`"left"` | `"right"`*

~~~jsx
// 첫 번째 행을 한 칸 아래로 이동
diagram.cellManager.move(0, "down");

// 세 번째 열을 한 칸 왼쪽으로 이동
diagram.cellManager.move(2, "left");
~~~

### 셀 검증 {#validating-cells}

cellManager 객체의 [`validation()`](api/cell_manager/validation_method.md) 메서드를 통해 지정된 셀에 대해 추가, 제거, 이동과 같은 작업이 가능한지 확인할 수 있습니다.

~~~jsx
// 인덱스 0의 셀을 아래로 이동할 수 있는지 확인
diagram.cellManager.validation(0, "down", "move"); // true
~~~

### 서브헤더의 유형 가져오기 {#getting-the-type-of-the-subheader}

스윔레인의 서브헤더 유형을 반환하려면 cellManager 객체의 [`getSubHeaderType()`](api/cell_manager/getsubheadertype_method.md) 메서드를 사용하세요. 이 메서드는 서브헤더의 id를 매개변수로 받습니다.

~~~jsx
diagram.cellManager.getSubHeaderType("s1"); // "row" 반환
~~~

### 셀의 id 가져오기 {#getting-the-id-of-a-cell}

셀이 속한 열/행의 첫 번째 셀 id를 가져올 수 있습니다. 이는 cellManager 객체의 [`getCellId()`](api/cell_manager/getcellid_method.md) 메서드를 통해 수행할 수 있습니다. 이 메서드는 두 개의 매개변수를 받습니다.

- 행/열의 첫 번째 셀 인덱스;
- 항목의 유형: *`"col"` | `"row"`*.

~~~jsx
// 첫 번째 행의 첫 번째 셀 id 반환
diagram.cellManager.getCellId(0, "row"); // 1 반환

// 세 번째 열의 첫 번째 셀 id 반환
diagram.cellManager.getCellId(2, "col"); // 3 반환
~~~

cellManager 객체의 [`getSubHeaderCellId()`](api/cell_manager/getsubheadercellid_method.md) 메서드를 사용하여 서브헤더가 속한 셀의 id를 가져올 수도 있습니다. 이 메서드는 스윔레인 서브헤더의 id를 매개변수로 받습니다.

~~~jsx
// 서브헤더가 속한 셀의 id 반환
diagram.cellManager.getSubHeaderCellId("s2"); // 4 반환
~~~

### 셀의 인덱스 가져오기 {#getting-the-index-of-a-cell}

스윔레인 셀의 인덱스를 가져와야 할 때는 cellManager 객체의 [`getCellIndex()`](api/cell_manager/getcellindex_method.md) 메서드를 사용하세요. 이 메서드는 두 개의 매개변수를 받습니다.

- 셀의 id;
- 항목의 유형: *`"col"` | `"row"`*.

:::note
같은 행(또는 열)에 속한 모든 셀은 동일한 인덱스를 갖습니다.
:::

~~~js
layout: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
],
~~~

~~~jsx
// 셀이 열에 속하는 경우, id=2인 셀의 인덱스 반환
diagram.cellManager.getCellIndex(2, "col"); // 1 반환

// 셀이 열에 속하는 경우, id=5인 셀의 인덱스 반환
diagram.cellManager.getCellIndex(8, "col"); // 1 반환

// 셀이 행에 속하는 경우, id=2인 셀의 인덱스 반환
diagram.cellManager.getCellIndex(2, "row"); // 0 반환

// 셀이 행에 속하는 경우, id=5인 셀의 인덱스 반환
diagram.cellManager.getCellIndex(8, "row"); // 2 반환
~~~

cellManager 객체의 [`getSubHeaderCellIndex()`](api/cell_manager/getsubheadercellindex_method.md) 메서드를 사용하여 서브헤더가 속한 셀의 인덱스를 가져올 수도 있습니다. 이 메서드는 스윔레인 서브헤더의 id를 매개변수로 받습니다.

~~~jsx
// 서브헤더가 속한 셀의 인덱스 반환
diagram.cellManager.getSubHeaderCellIndex("s2"); // 1 반환
~~~
