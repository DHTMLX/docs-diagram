---
sidebar_label: Angular와의 통합
title: Angular와의 통합
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Angular와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# Angular와의 통합

:::tip
이 문서를 사용하려면 **Angular**의 기본 개념과 패턴에 익숙해야 합니다. 지식을 되짚어 보려면 [**Angular 문서**](https://angular.dev/overview)를 참고하세요.
:::

DHTMLX Diagram Editor는 **Angular**와 호환됩니다. DHTMLX Diagram Editor를 **Angular**와 함께 사용하는 방법에 대한 코드 예제를 준비했습니다. 자세한 내용은 해당 [**GitHub 예제**](https://github.com/DHTMLX/angular-diagram-demo)를 참고하세요.

## 프로젝트 생성 {#creating-a-project}

:::info
새 프로젝트를 생성하기 전에 [**Angular CLI**](https://angular.dev/tools/cli)와 [**Node.js**](https://nodejs.org/en/)를 설치하세요.
:::

Angular CLI를 사용하여 새 **my-angular-diagram-app** 프로젝트를 생성합니다. 이를 위해 다음 명령을 실행하세요.

~~~json
ng new my-angular-diagram-app
~~~

:::note
이 가이드를 따르려면 새 Angular 앱을 생성할 때 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG/Prerendering)을 비활성화하세요!
:::

위 명령은 필요한 모든 도구를 설치하므로 추가 명령을 실행할 필요가 없습니다.

### 종속성 설치 {#installation-of-dependencies}

그런 다음 앱 디렉터리로 이동합니다.

~~~json
cd my-angular-diagram-app
~~~

종속성을 설치하고 개발 서버를 시작합니다. 이를 위해 [**yarn**](https://yarnpkg.com/) 패키지 관리자를 사용하세요.

~~~json
yarn
yarn start
~~~

앱은 로컬호스트에서 실행되어야 합니다(예: `http://localhost:3000`).

## Diagram Editor 생성 {#creating-diagram-editor}

이제 DHTMLX Diagram Editor 소스 코드를 받아야 합니다. 먼저 앱을 중지하고 Diagram Editor 패키지 설치를 진행하세요.

### 1단계. 패키지 설치 {#step-1-package-installation}

[**평가판 Diagram 패키지**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn)를 다운로드하고 README 파일에 언급된 단계를 따르세요. 평가판 Diagram Editor는 30일 동안만 사용할 수 있습니다.

### 2단계. 컴포넌트 생성 {#step-2-component-creation}

이제 애플리케이션에 Diagram Editor를 추가하기 위한 Angular 컴포넌트를 생성해야 합니다. **src/app/** 디렉터리에 **diagram-editor** 폴더를 생성하고, 그 안에 새 파일을 추가한 다음 **diagram-editor.component.ts**로 이름을 지정하세요. 그런 다음 아래 설명된 단계를 완료하세요.

#### 소스 파일 가져오기 {#import-source-files}

파일을 열고 Diagram Editor 소스 파일을 가져옵니다. 참고 사항:

- PRO 버전을 사용하고 로컬 폴더에서 Diagram Editor 패키지를 설치하는 경우, 가져오기 경로는 다음과 같습니다.

~~~jsx
import { DiagramEditor } from 'dhx-diagram-package';
~~~

- Diagram의 평가판 버전을 사용하는 경우, 다음 경로를 지정하세요.

~~~jsx
import { DiagramEditor } from '@dhx/trial-diagram';
~~~

이 튜토리얼에서는 Diagram의 **평가판(trial)** 버전을 구성하는 방법을 확인할 수 있습니다.

#### 컨테이너 설정 및 Diagram Editor 초기화 {#set-the-container-and-initialize-diagram-editor}

페이지에 Diagram Editor를 표시하려면 컴포넌트를 렌더링할 컨테이너를 설정하고 해당 생성자를 사용하여 Diagram Editor를 초기화해야 합니다.

~~~jsx {1,9,13-14,19-20} title="diagram-editor.component.ts"
import { DiagramEditor } from "@dhx/trial-diagram";
import { IDefaultEditorConfig } from "@dhx/trial-diagram/codebase/types/ts-diagram-editor";
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'diagram-editor', // "app.component.ts" 파일에서 <diagram-editor/>로 사용되는 템플릿 이름
    styleUrls: ['./diagram-editor.component.css'], // css 파일 포함
    template: `<div #container class = "widget"></div>`
})

export class DiagramEditorComponent implements OnInit, OnDestroy {
    // Diagram Editor의 컨테이너 초기화
    @ViewChild('container', { static: true }) editor_container!: ElementRef;

    private _diagram_editor!: DiagramEditor;

    ngOnInit() {
        // Diagram Editor 컴포넌트 초기화
        this._diagram_editor = new DiagramEditor( this.editor_container.nativeElement, { type: "default" } as IDefaultEditorConfig);
    }

    ngOnDestroy() {
        this._diagram_editor.destructor(); // Diagram Editor 소멸
    }
}
~~~

#### 스타일 추가 {#adding-styles}

Diagram Editor를 올바르게 표시하려면 해당 스타일을 제공해야 합니다. 이를 위해 **src/app/diagram-editor/** 디렉터리에 **diagram-editor.component.css** 파일을 생성하고 Diagram Editor와 그 컨테이너에 대한 중요한 스타일을 지정할 수 있습니다.

~~~css title="diagram-editor.component.css"
/* Diagram Editor 스타일 가져오기 */
@import "@dhx/trial-diagram/codebase/diagram.min.css";

/* 초기 페이지의 스타일 지정 */
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Diagram Editor 컨테이너의 스타일 지정 */
.widget {
    height: 100%;
    width: 100%;
}
~~~

#### 데이터 로드 {#loading-data}

Diagram Editor에 데이터를 추가하려면 [**데이터 세트**](https://github.com/DHTMLX/angular-diagram-demo/blob/master/src/app/diagram-editor/data.ts)를 제공해야 합니다. **src/app/diagram-editor/** 디렉터리에 **data.ts** 파일을 생성하고 데이터를 추가할 수 있습니다.

~~~jsx title="data.ts"
export function getData() {
    return [
        { id: 1, x: 880, y: 105, text: "Does user remember his password?", type: "process", lineHeight: 18, fontColor: "#fff", fill: "#3DA0E3", stroke: "#3DA0E3" },
        { id: 2, x: 1080, y: 125, width: 50, "height": 50, text: "XOR", type: "circle", lineHeight: 18, fontColor: "#fff", fill: "#7D8495", stroke: "#7D8495" },
        { id: 3, x: 1160, y: 40, text: "User forgets his password", type: "preparation", lineHeight: 18, fontColor: "#fff", fill: "#33B579", stroke: "#33B579" },
        { id: 3.1, x: 1340, y: 40, text: "Send an E-mail with new password", type: "process", lineHeight: 18, fontColor: "#fff", fill: "#3DA0E3", stroke: "#3DA0E3" },
        { id: 3.2, x: 1520, y: 40, text: "E-mail sent", type: "preparation", fontColor: "#fff", lineHeight: 18, fill: "#33B579", stroke: "#33B579" },
        { id: 4, x: 1160, y: 180, text: "User remembers his password", type: "preparation", lineHeight: 18, fontColor: "#fff", fill: "#33B579", stroke: "#33B579" },
        { id: 5, x: 1340, y: 180, text: "User types in login and password", type: "process", lineHeight: 18, fontColor: "#fff", fill: "#3DA0E3", stroke: "#3DA0E3" },
        // 기타 데이터

        { from: 1, to: 2, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3, type: "dash", toSide: "bottom", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 7.5, type: "dash", fromSide: "bottom", toSide: "top", backArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3.2, type: "dash", fromSide: "top", toSide: "top", stroke: "#7D8495" },
        { from: 3, to: 3.1, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 3.1, to: 3.2, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 4, type: "dash", toSide: "top", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 4, to: 5, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 5, to: 6, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        // 기타 데이터
    ]
}
~~~

그런 다음 ***diagram-editor.component.ts*** 파일을 엽니다. 데이터가 포함된 파일을 가져와서 아래와 같이 `ngOnInit()` 메서드 내에서 [`parse()`](api/diagram_editor/editor/methods/parse_method.md) 메서드를 사용하여 적용하세요.

~~~jsx {3,19,22} title="diagram-editor.component.ts"
import { DiagramEditor } from "@dhx/trial-diagram";
import { IDefaultEditorConfig } from "@dhx/trial-diagram/codebase/types/ts-diagram-editor";
import { getData } from "./data"; // 데이터 가져오기
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'diagram-editor',
    styleUrls: ['./diagram-editor.component.css'],
    template: `<div #container class = "widget"></div>`
})

export class DiagramEditorComponent implements OnInit, OnDestroy {
    @ViewChild('container', { static: true }) editor_container!: ElementRef;

    private _diagram_editor!: DiagramEditor;

    ngOnInit() {
        const data = getData(); // 데이터 속성 초기화
        this._diagram_editor = new DiagramEditor( this.editor_container.nativeElement, { type: "default" } as IDefaultEditorConfig);

        this._diagram_editor.parse(data);
    }

    ngOnDestroy() {
        this._diagram_editor.destructor();
    }
}
~~~

이제 Diagram Editor 컴포넌트를 사용할 준비가 되었습니다. 요소가 페이지에 추가되면 데이터와 함께 Diagram Editor가 초기화됩니다. 필요한 구성 설정도 제공할 수 있습니다. 사용 가능한 전체 속성 목록을 확인하려면 [Diagram Editor API 문서](/category/diagram-editor-api/)를 방문하세요.

#### 이벤트 처리 {#handling-events}

사용자가 Diagram Editor에서 어떤 동작을 수행하면 이벤트가 호출됩니다. 이러한 이벤트를 사용하여 동작을 감지하고 원하는 코드를 실행할 수 있습니다. [전체 이벤트 목록](api/diagram_editor/editor/events/overview.md)을 확인하세요.

**diagram-editor.component.ts** 파일을 열고 다음과 같이 `ngOnInit()` 메서드를 완성하세요.

~~~jsx {5-7} title="diagram-editor.component.ts"
// ...
ngOnInit() {
    this._diagram_editor = new DiagramEditor(this.editor_container.nativeElement, { type: "default" } as IDefaultEditorConfig);

    this._diagram_editor.events.on("zoomIn", (step) => {
        console.log("The diagram in the editor is zoomed in. The step is" + step);
    });
}

ngOnDestroy() {
    this._diagram_editor.destructor();
}
~~~

### 3단계. 앱에 Diagram Editor 추가 {#step-3-adding-diagram-editor-into-the-app}

앱에 ***DiagramEditorComponent***를 추가하려면 ***src/app/app.component.ts*** 파일을 열고 기본 코드를 다음 코드로 바꾸세요.

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<diagram-editor/>` // "diagram-editor.component.ts" 파일에서 생성된 템플릿
})
export class AppComponent {
    name = "";
}
~~~

그런 다음 ***src/app/*** 디렉터리에 ***app.module.ts*** 파일을 생성하고 아래와 같이 *DiagramEditorComponent*를 지정하세요.

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DiagramEditorComponent } from "./diagram-editor/diagram-editor.component";

@NgModule({
    declarations: [AppComponent, DiagramEditorComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

마지막 단계는 ***src/main.ts*** 파일을 열고 기존 코드를 다음 코드로 바꾸는 것입니다.

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

그 후 앱을 시작하면 페이지에 데이터와 함께 로드된 Diagram Editor를 확인할 수 있습니다.

![Diagram Editor 초기화](/img/trial_diagram.png)

이제 DHTMLX Diagram Editor를 Angular와 통합하는 방법을 알게 되었습니다. 특정 요구 사항에 따라 코드를 사용자 정의할 수 있습니다. 최종 예제는 [**GitHub**](https://github.com/DHTMLX/angular-diagram-demo)에서 확인할 수 있습니다.
