---
sidebar_label: Vue.js와의 통합
title: Vue.js와의 통합
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Vue.js와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# Vue와의 통합 {#integration-with-vue}

:::tip
이 문서를 읽기 전에 [**Vue**](https://vuejs.org/)의 기본 개념과 패턴에 익숙해지는 것이 좋습니다. 지식을 다시 확인하려면 [**Vue 3 문서**](https://vuejs.org/guide/introduction.html#getting-started)를 참고하세요.
:::

DHTMLX Diagram Editor는 **Vue**와 호환됩니다. **Vue 3**에서 DHTMLX Diagram Editor를 사용하는 방법에 대한 코드 예제를 준비했습니다. 자세한 내용은 해당 [**GitHub 예제**](https://github.com/DHTMLX/vue-diagram-demo)를 참고하세요.

## 프로젝트 생성 {#creating-a-project}

:::info
새 프로젝트를 만들기 전에 [**Node.js**](https://nodejs.org/en/)를 설치하세요.
:::

**Vue** 프로젝트를 생성하려면 다음 명령을 실행합니다.

~~~json
npm create vue@latest
~~~

이 명령은 공식 **Vue** 프로젝트 스캐폴딩 도구인 `create-vue`를 설치하고 실행합니다. 자세한 내용은 [Vue.js 빠른 시작](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)에서 확인하세요.

프로젝트 이름을 **my-vue-diagram-app**으로 지정하겠습니다.

### 종속성 설치 {#installation-of-dependencies}

앱 디렉터리로 이동합니다.

~~~json
cd my-vue-diagram-app
~~~

종속성을 설치하고 개발 서버를 시작합니다. 이를 위해 패키지 매니저를 사용합니다.

- [**yarn**](https://yarnpkg.com/)을 사용하는 경우 다음 명령을 실행합니다.

~~~jsx
yarn
yarn start // 또는 yarn dev
~~~

- [**npm**](https://www.npmjs.com/)을 사용하는 경우 다음 명령을 실행합니다.

~~~json
npm install
npm run dev
~~~

앱은 로컬호스트에서 실행됩니다(예: `http://localhost:3000`).

## Diagram Editor 생성 {#creating-diagram-editor}

이제 DHTMLX Diagram Editor의 소스 코드를 가져와야 합니다. 먼저 앱을 중지하고 Diagram Editor 패키지 설치를 진행합니다.

### 1단계. 패키지 설치 {#step-1-package-installation}

[**평가판 Diagram Editor 패키지**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn)를 다운로드하고 README 파일에 언급된 단계를 따르세요. 평가판 Diagram Editor는 30일 동안만 사용할 수 있습니다.

### 2단계. 컴포넌트 생성 {#step-2-component-creation}

이제 애플리케이션에 Diagram Editor를 추가할 Vue 컴포넌트를 만들어야 합니다. ***src/components/*** 디렉터리에 새 파일을 만들고 이름을 ***DiagramEditor.vue***로 지정합니다.

#### 소스 파일 임포트 {#import-source-files}

***DiagramEditor.vue*** 파일을 열고 Diagram Editor 소스 파일을 임포트합니다. 다음 사항에 유의하세요.

- PRO 버전을 사용하고 로컬 폴더에서 Diagram Editor 패키지를 설치하는 경우, 임포트 경로는 다음과 같습니다.

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
</script>
~~~

사용하는 패키지에 따라 소스 파일이 압축(minified)되어 있을 수 있습니다. 이 경우 CSS 파일을 **diagram.min.css**로 임포트해야 합니다.

- Diagram Editor의 평가판을 사용하는 경우, 다음 경로를 지정합니다.

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
</script>
~~~

이 튜토리얼에서는 Diagram Editor의 **평가판** 버전을 구성하는 방법을 확인할 수 있습니다.

#### 컨테이너 설정 및 Diagram Editor 초기화 {#set-the-container-and-initialize-diagram-editor}

페이지에 Diagram Editor를 표시하려면 Diagram Editor용 컨테이너를 생성하고, 해당 생성자를 사용해 이 컴포넌트를 초기화해야 합니다.

~~~html {2,7-8,18} title="DiagramEditor.vue"
<script>
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default {
    mounted() {
        // Diagram Editor 컴포넌트를 초기화합니다
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });
    },

    unmounted() {
        this.diagram_editor.destructor(); // Diagram Editor를 소멸시킵니다
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### 스타일 추가 {#adding-styles}

Diagram Editor를 올바르게 표시하려면 프로젝트의 CSS 파일에 Diagram Editor와 그 컨테이너에 필요한 스타일을 지정해야 합니다.

~~~css title="style.css"
/* 초기 페이지에 대한 스타일 지정 */
html,
body,
#root { /* #root 컨테이너를 사용하는지 확인하세요 */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Diagram Editor 컨테이너에 대한 스타일 지정 */
.widget {
    height: 100%;
    width: 100%;
}
~~~

#### 데이터 로드 {#loading-data}

Diagram Editor에 데이터를 추가하려면 [**데이터 세트**](https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/data.js)를 제공해야 합니다. ***src/*** 디렉터리에 ***data.js*** 파일을 만들고 여기에 데이터를 추가할 수 있습니다.

~~~jsx title="data.js"
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

그런 다음 ***App.vue*** 파일을 열어 데이터를 임포트하고, 내부 `data()` 메서드를 통해 초기화합니다. 이후 새로 생성한 `<DiagramEditor/>` 컴포넌트에 `props`로 데이터를 전달할 수 있습니다.

~~~html {3,7-9,14} title="App.vue"
<script>
import DiagramEditor from "./components/DiagramEditor.vue";
import { getData } from "./data";

export default {
    components: { DiagramEditor },
    data() {
        return { data: getData() };
    }
};
</script>

<template>
    <DiagramEditor :data="data" />
</template>

~~~

***DiagramEditor.vue*** 파일로 이동하여 [`parse()`](api/diagram_editor/editor/methods/parse_method.md) 메서드를 통해 전달된 `props`를 Diagram Editor에 적용합니다.

~~~html {6,10} title="DiagramEditor.vue"
<script>
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default {
    props: ["data"],

    mounted() {
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });
        this.diagram_editor.parse(this.data);
    },

    unmounted() {
        this.diagram_editor.destructor();
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

이제 Diagram Editor 컴포넌트를 사용할 준비가 되었습니다. 요소가 페이지에 추가되면 데이터와 함께 Diagram Editor가 초기화됩니다. 필요한 구성 설정도 함께 제공할 수 있습니다. 사용 가능한 전체 속성 목록을 확인하려면 [Diagram Editor API 문서](/category/diagram-editor-api/)를 방문하세요.

#### 이벤트 처리 {#handling-events}

사용자가 Diagram Editor에서 어떤 동작을 수행하면 이벤트가 발생합니다. 이러한 이벤트를 사용하여 동작을 감지하고 원하는 코드를 실행할 수 있습니다. [전체 이벤트 목록](api/diagram_editor/editor/events/overview.md)을 참고하세요.

***DiagramEditor.vue***를 열고 `mounted()` 메서드를 완성합니다.

~~~html {8-10} title="DiagramEditor.vue"
<script>
// ...
export default {
    // ...
    mounted: function() {
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });

        this.diagram_editor.events.on("zoomIn", (step) => {
            console.log("The diagram in the editor is zoomed in. The step is" + step);
        });
    }
    //...
}
</script>

//...
~~~

이후 앱을 시작하면 페이지에서 데이터와 함께 로드된 Diagram Editor를 확인할 수 있습니다.

![Diagram Editor initialization](/img/trial_diagram.png)

이제 DHTMLX Diagram Editor를 Vue와 통합하는 방법을 알게 되었습니다. 특정 요구 사항에 맞게 코드를 사용자 지정할 수 있습니다. 최종 예제는 [**GitHub**](https://github.com/DHTMLX/vue-diagram-demo)에서 확인할 수 있습니다.
