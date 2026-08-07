---
sidebar_label: DHTMLX MCP server
title: DHTMLX Diagram MCP server for shapes and connector APIs
description: Point an AI assistant at the MCP server and it finds current DHTMLX Diagram docs on shapes, swimlanes, org charts, and the Diagram Editor.
---

# DHTMLX Diagram MCP server: shapes, connectors, and editor APIs

[DHTMLX Diagram](/) gives you real control over [shape geometry](/shapes/configuration_properties), [connector routing](/lines/), and [layout rules](/guides/diagram/configuration), plus any options the editor is configured to allow. Generated code needs to reflect current shape properties, connector methods, and layout options, not the state of an earlier training snapshot.

The DHTMLX MCP server exists precisely for this: it puts the current Diagram documentation in front of the assistant before a single shape gets drawn. Whether you are working with [swimlanes](/swimlanes/), [custom shapes](/shapes/custom_shape), the [Diagram Editor](/guides/diagram_editor/initialization), or any other part of the library, the assistant retrieves the current reference material before generating a response.

### MCP endpoint

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
The DHTMLX MCP server covers all major DHTMLX products, not only DHTMLX Diagram. The same endpoint and configuration steps apply regardless of which component you are working with.
:::

## Diagram work the MCP server speeds up

DHTMLX Diagram's documentation lives in the MCP server's index. Developers query it for things such as:

- Looking up the current API for [shapes](/shapes/default_shapes), [lines](/lines/), [groups](/groups/), or [swimlanes](/swimlanes/).
- Generating ready-to-run Diagram code based on a description.
- Exploring [Editor](/guides/diagram_editor/initialization) configuration options, toolbar controls, and event handling.
- Checking [export](/guides/data_export) options and understanding how to produce PDF or PNG output.
- Configuring auto-layout options for default-mode diagrams using the [diagram configuration](/guides/diagram/configuration).
- Loading diagram data and serializing it back with the available [data methods](/guides/loading_data).
- Handling [Diagram and Editor events](/guides/event_handling) to respond to user interactions.
- Exploring [TypeScript support](/guides/using_typescript) and framework integration for React, Vue, Angular and Svelte.

## Inside a Diagram MCP server request

The DHTMLX MCP server runs a Retrieval-Augmented Generation (RAG) pipeline over the Model Context Protocol (MCP), routing each query to one of two workflows: *Search*, which retrieves matching reference pages for the assistant to work from, or *Inference*, which reads those pages and returns a finished answer directly. Only part of a request actually needs Diagram's documentation, and the assistant extracts just that piece first, handling the rest on its own.

Here's how that plays out for the prompt *"How do I build a DHTMLX Diagram org chart that pulls employee records from my internal HR API and auto-arranges them by department?"*:

1. The assistant picks out the part that needs documentation: how to configure auto-layout for an org chart built from a JSON dataset.
2. The server matches it to the diagram configuration documentation.
3. Since the answer requires generated code, it routes to *Search* (a narrower factual question, like which method controls auto-layout, would go to *Inference*).
4. *Search* pulls the matching pages from a vector index built on the current Diagram docs.
5. Those pages return to the assistant as context.
6. The assistant configures the auto-layout using that context, then writes the HR API fetch logic from its own knowledge instead of guessing at the Diagram API.

This keeps generated Diagram code aligned with the documentation as it stands today.

## Bringing the MCP server into your AI tool

Every tool below reaches the same MCP endpoint through a different door: type a CLI flag into one, paste a JSON block into the next. Register it once per tool, and the connection carries over to every Diagram project you open there:

~~~
https://docs.dhtmlx.com/mcp
~~~

Setup instructions for the most commonly used tools are listed below.

### Claude Code setup

:::info
Full details on connecting MCP servers to Claude Code are available in the [official documentation](https://code.claude.com/docs/en/mcp).
:::

The fastest way to add the DHTMLX MCP server to Claude Code is through the CLI:

~~~bash
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

To configure it manually, add the following entry to your `.mcp.json`:

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor setup

:::info
Cursor's [official documentation](https://cursor.com/en-US/docs/mcp) walks through every MCP configuration option.
:::

Follow the steps below to connect the DHTMLX MCP server to Cursor:

1. Open Settings (`Cmd+Shift+J` on Mac, `Ctrl+Shift+J` on Windows/Linux)
2. Go to **Tools & MCP**
3. Click **Add Custom MCP**
4. Paste this config:

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity

#### Antigravity 2.0

:::info
Antigravity's [official documentation](https://antigravity.google/docs/mcp) covers MCP server integration in full.
:::

These are the steps to complete for connecting DHTMLX MCP server with Google Antigravity:

1. Open the command palette
2. Type "mcp add"
3. Select "HTTP"
4. Provide the following values:
- Name:
~~~
dhtmlx-mcp
~~~
- URL:
~~~
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI

:::info
Migrating from Gemini CLI to Antigravity CLI? The [related guide](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) covers the change.
:::

To connect the DHTMLX MCP server to Antigravity CLI, create `mcp_config.json` in one of these locations:

- Global: `~/.gemini/config/mcp_config.json`
- Workspace: `.agents/mcp_config.json`

Add the following configuration:

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Then run `agy` in the terminal.

### ChatGPT setup

:::info
The [official documentation](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt) covers every step of connecting an MCP server to ChatGPT.
:::

Follow these steps to connect DHTMLX MCP server to ChatGPT:

1. Go to **Settings** → **Apps & Connectors**
2. Click **Advanced settings**
3. Enable **Developer mode**
4. Return to the **Apps & Connectors** screen and click "Create"
5. Configure the connector:
- Name:
~~~
dhtmlx-mcp
~~~
- URL:
~~~
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Click **Create**

Once connected, ChatGPT retrieves Diagram documentation when answering questions during your conversations.

:::info
For intensive coding workflows, other MCP-aware tools may be more efficient.
:::

### Other tools

Most modern AI coding tools (including Windsurf, Cline, Continue.dev, etc.) surface MCP under names such as "Model Context Protocol", "Context Sources", or "Custom integrations" in their settings. Add `https://docs.dhtmlx.com/mcp` as the source URL.

## The privacy side of the MCP server

Nothing about this runs on your machine: the DHTMLX MCP server operates entirely as a remote service, and it keeps no copy of your personal data.

Debugging and service improvements are the only reasons the server logs a query.

Prefer logging off entirely? A commercial deployment supports that. Set it up through `info@dhtmlx.com`.

## Prompts for common Diagram tasks

Vague prompts get vague retrieval. Say which Diagram feature you're after (a shape, the editor, export) and the assistant knows exactly where to look; the groups below sort examples by feature.

**Creating diagrams**

~~~
How do I create a swimlane diagram with custom sections in DHTMLX Diagram? Use the docs.
~~~
~~~
I want to build an org chart from a JSON data set in DHTMLX Diagram. How do I configure the auto-layout?
~~~
~~~
How do I create a flowchart with decision nodes and multiple links in DHTMLX Diagram?
~~~
~~~
How do I use autoPlace() to automatically arrange shapes in DHTMLX Diagram?
~~~

**Working with shapes**

~~~
I want to add custom shapes with icons to DHTMLX Diagram. How do I define a shape template?
~~~
~~~
How do I restrict which shapes a user can place in the DHTMLX Diagram Editor?
~~~
~~~
How do I change the default text style and background color for all shapes in DHTMLX Diagram?
~~~

**Configuring the editor**

~~~
I want to enable inline editing for shape text in DHTMLX Diagram.
~~~
~~~
How do I add a custom toolbar button to the DHTMLX Diagram Editor?
~~~

**Data and export**

~~~
How do I export a DHTMLX Diagram to a PNG file?
~~~
~~~
What format does DHTMLX Diagram use for serialized data, and how do I reload it?
~~~

## Writing prompts the MCP server can act on

- **Name the API surface.** Distinguish between the diagram instance and the editor, for example: "in the DHTMLX Diagram Editor" vs. "on the diagram object". The server retrieves more relevant docs when the target is clear.
- **Include the shape type.** Prompts like "a swimlane shape" or "a custom shape with HTML content" retrieve the correct reference pages faster than generic "a shape".
- **Add "Use the docs"** to your prompt. This phrasing signals to the assistant that it should trigger an MCP lookup rather than answering from training data.
- **Be specific about the version behavior you expect.** If the generated code doesn't match what you see in the docs, add "based on the current DHTMLX Diagram documentation" to force a fresh retrieval.
