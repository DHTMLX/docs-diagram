---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать об интеграции с Angular. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Интеграция с Angular {#integration-with-angular}

:::tip
Чтобы использовать эту документацию, вы должны быть знакомы с основными концепциями и шаблонами **Angular**. Чтобы освежить знания, обратитесь к [**документации Angular**](https://angular.dev/overview).
:::

DHTMLX Diagram Editor совместим с **Angular**. Мы подготовили примеры кода, показывающие, как использовать DHTMLX Diagram Editor с **Angular**. Дополнительную информацию можно найти в соответствующем [**примере на GitHub**](https://github.com/DHTMLX/angular-diagram-demo).

## Создание проекта {#creating-a-project}

:::info
Прежде чем создавать новый проект, установите [**Angular CLI**](https://angular.dev/tools/cli) и [**Node.js**](https://nodejs.org/en/).
:::

Создайте новый проект **my-angular-diagram-app** с помощью Angular CLI. Для этого выполните следующую команду:

~~~json
ng new my-angular-diagram-app
~~~

:::note
Если вы хотите следовать этому руководству, отключите серверный рендеринг (SSR) и статическую генерацию сайта (SSG/Prerendering) при создании нового приложения Angular!
:::

Приведённая выше команда устанавливает все необходимые инструменты, поэтому вам не нужно выполнять дополнительные команды.

### Установка зависимостей {#installation-of-dependencies}

После этого перейдите в каталог приложения:

~~~json
cd my-angular-diagram-app
~~~

Установите зависимости и запустите сервер разработки. Для этого используйте менеджер пакетов [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Приложение должно запуститься на локальном хосте (например, `http://localhost:3000`).

## Создание Diagram Editor {#creating-diagram-editor}

Теперь вам нужно получить исходный код DHTMLX Diagram Editor. Сначала остановите приложение и переходите к установке пакета Diagram Editor.

### Шаг 1. Установка пакета {#step-1-package-installation}

Скачайте [**пробный пакет Diagram**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn) и выполните шаги, описанные в файле README. Обратите внимание, что пробная версия Diagram Editor доступна только в течение 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Теперь вам нужно создать компонент Angular, чтобы добавить Diagram Editor в приложение. Создайте папку **diagram-editor** в каталоге **src/app/**, добавьте в неё новый файл и назовите его **diagram-editor.component.ts**. Затем выполните шаги, описанные ниже.

#### Импорт исходных файлов {#import-source-files}

Откройте файл и импортируйте исходные файлы Diagram Editor. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет Diagram Editor из локальной папки, путь импорта выглядит следующим образом:

~~~jsx
import { DiagramEditor } from 'dhx-diagram-package';
~~~

- если вы используете пробную версию Diagram, укажите следующий путь:

~~~jsx
import { DiagramEditor } from '@dhx/trial-diagram';
~~~

В этом руководстве показано, как настроить **пробную** версию Diagram.

#### Настройка контейнера и инициализация Diagram Editor {#set-the-container-and-initialize-diagram-editor}

Чтобы отобразить Diagram Editor на странице, нужно задать контейнер, внутри которого будет отрисовываться компонент, и инициализировать Diagram Editor с помощью соответствующего конструктора:

~~~jsx {1,9,13-14,19-20} title="diagram-editor.component.ts"
import { DiagramEditor } from "@dhx/trial-diagram";
import { IDefaultEditorConfig } from "@dhx/trial-diagram/codebase/types/ts-diagram-editor";
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'diagram-editor', // имя шаблона, используемое в файле "app.component.ts" как <diagram-editor/>
    styleUrls: ['./diagram-editor.component.css'], // подключение файла css
    template: `<div #container class = "widget"></div>`
})

export class DiagramEditorComponent implements OnInit, OnDestroy {
    // инициализация контейнера для Diagram Editor
    @ViewChild('container', { static: true }) editor_container!: ElementRef;

    private _diagram_editor!: DiagramEditor;

    ngOnInit() {
        // инициализация компонента Diagram Editor
        this._diagram_editor = new DiagramEditor( this.editor_container.nativeElement, { type: "default" } as IDefaultEditorConfig);
    }

    ngOnDestroy() {
        this._diagram_editor.destructor(); // уничтожение Diagram Editor
    }
}
~~~

#### Добавление стилей {#adding-styles}

Чтобы Diagram Editor отображался корректно, нужно указать соответствующие стили. Для этого можно создать файл **diagram-editor.component.css** в каталоге **src/app/diagram-editor/** и задать важные стили для Diagram Editor и его контейнера:

~~~css title="diagram-editor.component.css"
/* импорт стилей Diagram Editor */
@import "@dhx/trial-diagram/codebase/diagram.min.css";

/* стили для начальной страницы */
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* стили для контейнера Diagram Editor */
.widget {
    height: 100%;
    width: 100%;
}
~~~

#### Загрузка данных {#loading-data}

Чтобы добавить данные в Diagram Editor, нужно предоставить [**набор данных**](https://github.com/DHTMLX/angular-diagram-demo/blob/master/src/app/diagram-editor/data.ts). Вы можете создать файл **data.ts** в каталоге **src/app/diagram-editor/** и добавить в него данные:

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
        // другие данные

        { from: 1, to: 2, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3, type: "dash", toSide: "bottom", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 7.5, type: "dash", fromSide: "bottom", toSide: "top", backArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3.2, type: "dash", fromSide: "top", toSide: "top", stroke: "#7D8495" },
        { from: 3, to: 3.1, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 3.1, to: 3.2, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 4, type: "dash", toSide: "top", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 4, to: 5, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 5, to: 6, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        // другие данные
    ]
}
~~~

Затем откройте файл ***diagram-editor.component.ts***. Импортируйте файл с данными и примените их с помощью метода [`parse()`](api/diagram_editor/editor/methods/parse_method.md) внутри метода `ngOnInit()`, как показано ниже.

~~~jsx {3,19,22} title="diagram-editor.component.ts"
import { DiagramEditor } from "@dhx/trial-diagram";
import { IDefaultEditorConfig } from "@dhx/trial-diagram/codebase/types/ts-diagram-editor";
import { getData } from "./data"; // импорт данных
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
        const data = getData(); // инициализация свойства data
        this._diagram_editor = new DiagramEditor( this.editor_container.nativeElement, { type: "default" } as IDefaultEditorConfig);

        this._diagram_editor.parse(data);
    }

    ngOnDestroy() {
        this._diagram_editor.destructor();
    }
}
~~~

Теперь компонент Diagram Editor готов к использованию. Когда элемент будет добавлен на страницу, он инициализирует Diagram Editor с данными. Вы также можете указать необходимые настройки конфигурации. Посетите наш [справочник API Diagram Editor](/category/diagram-editor-api/), чтобы ознакомиться с полным списком доступных свойств.

#### Обработка событий {#handling-events}

Когда пользователь выполняет какое-либо действие в Diagram Editor, возникает событие. Вы можете использовать эти события, чтобы отслеживать действие и запускать нужный код в ответ на него. См. [полный список событий](api/diagram_editor/editor/events/overview.md).

Откройте файл **diagram-editor.component.ts** и дополните метод `ngOnInit()` следующим образом:

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

### Шаг 3. Добавление Diagram Editor в приложение {#step-3-adding-diagram-editor-into-the-app}

Чтобы добавить ***DiagramEditorComponent*** в приложение, откройте файл ***src/app/app.component.ts*** и замените код по умолчанию следующим:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<diagram-editor/>` // шаблон, созданный в файле "diagram-editor.component.ts"
})
export class AppComponent {
    name = "";
}
~~~

Затем создайте файл ***app.module.ts*** в каталоге ***src/app/*** и укажите *DiagramEditorComponent*, как показано ниже:

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

Последний шаг — открыть файл ***src/main.ts*** и заменить существующий код следующим:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

После этого вы можете запустить приложение и увидеть Diagram Editor, загруженный с данными на странице.

![Инициализация Diagram Editor](/img/trial_diagram.png)

Теперь вы знаете, как интегрировать DHTMLX Diagram Editor с Angular. Вы можете настроить код в соответствии со своими требованиями. Итоговый пример можно найти на [**GitHub**](https://github.com/DHTMLX/angular-diagram-demo).
