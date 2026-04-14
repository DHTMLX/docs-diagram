---
sidebar_label: DHTMLX MCP server
title:  Using DHTMLX MCP server with AI coding assistants
description: Access live DHTMLX Diagram documentation in AI coding assistants via the DHTMLX MCP server. Setup guides for Claude Code, Cursor, Gemini CLI, and ChatGPT.
---

# Using DHTMLX MCP server with AI coding assistants

Building diagram applications requires precise control over shapes, connections, layout, and editor configuration. When an AI tool generates [DHTMLX Diagram](/diagram/) code from outdated training data, the result is mismatched APIs, missing properties, and configuration options that no longer exist.

The DHTMLX Model Context Protocol (MCP) server solves this by giving AI tools direct access to the live Diagram documentation. Whether you are working with [swimlanes](/swimlanes/), [custom shapes](/shapes/custom_shape/), the [Diagram Editor](/guides/diagram_editor/initialization/), or any other part of the library, the assistant retrieves the current reference material before generating a response.

**MCP endpoint**

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
The DHTMLX MCP server covers all major DHTMLX products, not only DHTMLX Diagram. The same endpoint and configuration steps apply regardless of which component you are working with.
:::

## Where MCP server helps with Diagram

The MCP server indexes the full DHTMLX Diagram documentation. Common scenarios where the MCP server is useful:

- Looking up the current API for [shapes](/shapes/default_shapes/), [lines](/lines/), [groups](/groups/), or [swimlanes](/swimlanes/).
- Generating ready-to-run Diagram code based on a description.
- Exploring [Editor](/guides/diagram_editor/initialization/) configuration options, toolbar controls, and event handling.
- Checking [export](/guides/data_export/) options and understanding how to produce PDF or PNG output.
- Configuring auto-layout options for org chart and hierarchical diagram arrangements using the [diagram configuration](/guides/diagram/configuration/).
- Loading diagram data and serializing it back with the available [data methods](/guides/loading_data/).
- Handling [Diagram and Editor events](/guides/event_handling/) to respond to user interactions.
- Exploring [TypeScript support](/guides/using_typescript/) and framework integration for React, Vue, and Angular.

## How DHTMLX MCP server works

The server combines a Retrieval-Augmented Generation (RAG) pipeline with MCP so that AI assistants can query documentation on demand rather than relying solely on training data.

For example, when you ask *"How do I configure a swimlane diagram with custom cell headers?"*, the assistant sends the prompt via the MCP endpoint. The server matches it against the swimlanes documentation, retrieves the relevant reference pages, and returns them as context. The assistant then generates code based on the current API rather than a training snapshot.

## Connecting AI tools to Diagram

AI development tools typically support MCP through a CLI command or a JSON configuration file. In both cases the core step is registering the server URL:

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

To configure it manually, add the following entry to your `mcp.json`:

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
Step-by-step MCP setup instructions for Cursor can be found in the [official documentation](https://cursor.com/en-US/docs/mcp).
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

### Gemini CLI setup

:::info
A full walkthrough for adding MCP servers to Gemini CLI is available in the [official documentation](https://geminicli.com/docs/tools/mcp-server/).
:::

To connect DHTMLX MCP server to Gemini via the CLI, use:

~~~bash
gemini mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Alternatively, open `~/.gemini/settings.json` and add:

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Restart Gemini CLI after saving the file.

### Antigravity (Google) setup

:::info
Refer to the [official documentation](https://antigravity.google/docs/mcp) for full details on MCP server integration in Antigravity.
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

### ChatGPT setup

:::info
See the [official documentation](https://developers.openai.com/api/docs/guides/tools-connectors-mcp) for the complete guide on connecting MCP servers to ChatGPT.
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

Once connected, ChatGPT will retrieve Diagram documentation when answering questions during your conversations.

:::note
Note that MCP integration with ChatGPT may result in slower response times. For a faster experience, consider one of the other tools listed on this page.
:::

### Other tools

Most modern AI coding tools (including Windsurf, Cline, and Continue.dev) surface MCP under names such as "Model Context Protocol", "Context Sources", or "Custom integrations" in their settings. Add `https://docs.dhtmlx.com/mcp` as the source URL.

## Privacy and data handling

The DHTMLX MCP server is a cloud-only service that runs remotely, leaves your local environment untouched, and stores no personal user data. Queries may be logged for debugging and service improvement purposes.

Teams that require stricter privacy guarantees can request a commercial deployment with query logging disabled. Contact us at `info@dhtmlx.com` for details.

## Example prompts for Diagram with AI

Once the MCP server is connected, phrase your prompts around a concrete goal so the assistant knows which part of the Diagram API to look up. The prompts below are organized by the task type. You can copy and adapt them as needed.

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
How do I configure auto-layout for an org chart in DHTMLX Diagram Editor?
~~~
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

## Tips for effective Diagram prompts

- **Name the API surface.** Distinguish between the diagram instance and the editor, for example: "in the DHTMLX Diagram Editor" vs. "on the diagram object". The server retrieves more relevant docs when the target is clear.
- **Include the shape type.** Prompts like "a swimlane shape" or "a custom shape with HTML content" retrieve the correct reference pages faster than generic "a shape".
- **Add "Use the docs"** to your prompt. This phrasing signals to the assistant that it should trigger an MCP lookup rather than answering from training data.
- **Be specific about the version behavior you expect.** If the generated code doesn't match what you see in the docs, add "based on the current DHTMLX Diagram documentation" to force a fresh retrieval.
