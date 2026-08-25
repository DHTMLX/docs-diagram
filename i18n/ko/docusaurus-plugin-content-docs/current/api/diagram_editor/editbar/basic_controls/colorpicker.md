---
sidebar_label: Colorpicker
title: Editbar 기본 컨트롤 - Colorpicker
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Colorpicker 컨트롤에 대해 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 확인하고 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

# Colorpicker

@short: 색상을 선택하기 위한 기본 컨트롤입니다.

![Colorpicker control](/img/editbar-basic-controls/colorpicker.png)

## 사용법 {#usage}

~~~jsx
{
    type: "colorpicker",
    key?: string | string[],
    wrap?: boolean, // 기본값: false

    css?: string,
    disabled?: boolean, // 기본값: false
    hidden?: boolean, // 기본값: false
    height?: string | number | "content", // 기본값: "content"
    width?: string | number | "content", // 기본값: "content"
    padding?: string | number,

    customColors?: string[],
    grayShades?: boolean, // 기본값: true
    icon?: string,
    mode?: "palette" | "picker", // 기본값: "palette"
    palette?: string[][],
    paletteOnly?: boolean, // 기본값: false
    pickerOnly?: boolean, // 기본값: false
    placeholder?: string,

    // `wrap:true`인 경우 Fieldset의 레이블 속성을 확인하세요
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // 기본값: "top"

    // 서비스 속성 및 메서드
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"colorpicker"`로 설정합니다
- `key` - (선택 사항) 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
- `wrap` - (선택 사항) 외부 래핑 표시 여부를 정의합니다. 기본값은 *false*입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `disabled` - (선택 사항) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. 기본값은 *false*입니다
- `hidden` - (선택 사항) 컨트롤의 숨김 여부를 정의합니다. 기본값은 *false*입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 셀과 Colorpicker 컨트롤 테두리 사이의 여백을 설정합니다
- `customColors` - (선택 사항) Colorpicker 하단에 사용자 지정 색상 섹션을 표시합니다
- `grayShades` - (선택 사항) 팔레트에 회색 음영 섹션이 표시되는지 여부를 정의합니다. 기본값은 *true*입니다
- `icon` - (선택 사항) 사용 중인 아이콘 폰트에서 가져온 아이콘의 CSS 클래스입니다
- `mode` - (선택 사항) 컨트롤의 모드입니다: `"palette"` | `"picker"`. 기본값은 `"palette"`입니다
- `palette` - (선택 사항) Colorpicker에 표시할 색상 배열을 포함합니다
- `paletteOnly` - (선택 사항) Colorpicker가 팔레트 모드로만 표시되는지 여부를 정의합니다. 기본값은 *false*입니다
- `pickerOnly` - (선택 사항) Colorpicker가 피커 모드로만 표시되는지 여부를 정의합니다. 기본값은 *false*입니다
- `placeholder` - (선택 사항) 입력 필드에 대한 힌트입니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelPosition` - (선택 사항) 레이블의 위치를 정의합니다: `"left"` | `"top"`. 기본값은 `"top"`입니다
- `labelWidth` - (선택 사항) 컨트롤 레이블의 너비를 설정합니다

### 서비스 속성 및 메서드 {#service-properties-and-methods}

:::warning
기본 유형의 컨트롤에 대한 서비스 속성 및 메서드는 재정의하지 않는 것을 강력히 권장합니다. 재정의할 경우 해당 기능이 손상될 수 있습니다.
:::

- `$on` - (선택 사항) - 이벤트 리스너를 설정할 수 있습니다. 해당 객체는 다음 속성을 갖습니다:
    - `eventName` - 다음 매개변수와 함께 호출되는 콜백 함수입니다:
        - `object` - 다음 속성을 가진 객체입니다:
            - `control` - [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 컨트롤입니다
            - `editor` - Diagram Editor의 객체입니다
            - `id` - Diagram 항목의 id입니다
        - `arguments` - (선택 사항) - [원본 이벤트 인수](https://docs.dhtmlx.com/suite/category/form-colorpicker-events/)입니다
- `$handler` - (선택 사항) - [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 컨트롤의 `change` 및 `input` 이벤트와 DataCollection의 `change` 이벤트 발생 시 동작을 처리할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `id` - Diagram 항목의 id입니다
        - `key` - 지정되거나 수정된 속성의 이름 또는 Diagram 항목 객체 내 해당 속성의 경로입니다
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트의 기반이 되는 [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 컨트롤의 객체입니다
        - `value` - [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 컨트롤의 새 값입니다
- `$setValue` - (선택 사항) - 컨트롤 초기화 시 및 DataCollection에서 값이 변경될 때 [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 컨트롤의 값을 설정할 수 있는 콜백 함수입니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 다음 속성을 가진 객체입니다:
        - `editor` - Diagram Editor의 객체입니다
        - `control` - 컴포넌트의 기반이 되는 [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 컨트롤의 객체입니다
        - `value` - Diagram 항목의 값입니다
- `$layout` - (선택 사항) - 컨트롤의 구조를 설정할 수 있는 콜백 함수입니다. [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 컨트롤의 구성을 반환합니다. 다음 매개변수와 함께 호출됩니다:
    - `object` - 서비스 속성이 제외된 컨트롤의 구성입니다

## 예제 {#example}

~~~jsx {7-25}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "colorpicker",
                        wrap: true,
                        label: "Fill",
                        placeholder: "Select color",
                        grayShades: false,
                        palette: [
                            ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900", "#7fc7af", "#dad8a7"],
                            ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b", "#948c75", "#d5ded9"],
                            ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a", "#cbe86b", "#f2e9e1"],
                            ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58", "#dce9be", "#555152"],
                            ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc", "#005f6b", "#008c9e"],
                            ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634", "#73626e", "#b38184"],
                            ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f", "#fc913a", "#f9d423"],
                            ["#594f4f", "#547980", "#45ada8", "#9de0ad", "#e5fcc2", "#fecea8", "#ff847c"],
                            ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951", "#80bca3", "#f6f7bd"],
                            ["#e94e77", "#d68189", "#c6a49a", "#c6e5d9", "#f4ead5", "#40c0cb", "#f9f2e7"]
                        ]
                    }
                ]
            }
        }
    }
});
~~~
