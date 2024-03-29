See a demo video of this plugin on [YouTube](https://www.youtube.com/watch?v=e78RRDp-NZg).

Installation
------------

Open the [hosted plugin site](https://jasonmhoule.github.io/tw5-mermaid/) alongside your wiki. On the sidebar under "Plugins," find this plugin ("Edit and manage Mermaid.js tiddlers") and drag-and-drop to your wiki, then refresh for the plugin to work.

Motivation
----------

The idea of markdown is to allow a nicely rendered output from easy and self-descriptive syntax. [Mermaid.js](https://mermaid-js.github.io/mermaid/#/) extends this concept to a variety of diagrams. This plugin wraps the [Mermaid Live Editor](https://mermaid.live/edit) to make it easy to edit and maintain Mermaid code in your wiki while displaying the rendered output, all within a very lightweight implementation.

### Internet Required

One limitation of this implementation is that internet connection is required since the rendered display is pulled from the Mermaid online service. More limitations are discussed below.

### Alternatives

-   **Use [Mermaid Live Editor](https://mermaid.live/edit) directly** - this plugin embraces the Live Editor and the suggested workflow allows for moving smoothly between the in-wiki editor and Live Editor as needed
-   **Mermaid.js installation within TW5** - this is the most controlled and customizable option. In my experience, the negatives are that the plugin is large (>1MB) and Mermaid rendering could be bit buggy within TW5 and/or sometimes wouldn't play nicely with other plugins.
    -   My other critique is that the plugins I found were not actively maintained or were difficult to access for installation. <https://efurlanm.github.io/mermaid-tw5> seems to have addressed at least the latter.

Suggested Workflow
------------------

The [Mermaid Editor](https://jasonmhoule.github.io/tw5-mermaid/#Mermaid%20Editor) tiddler is used to create and edit diagram tiddlers. These tiddlers contain the Mermaid syntax in fields and display the rendered result as an SVG; from here they may be transcluded as needed. The diagram display also include a link to open the Editor to edit the diagram.

The [Mermaid Editor](https://jasonmhoule.github.io/tw5-mermaid/#Mermaid%20Editor) tiddler is thus the center of the workflow for creating or editing diagrams.

-   Syntax is entered in the text box and this can be rendered automatically as you type (by checking "auto sync") or with manual refreshes.
-   Diagram theme can also be edited by selecting from a standard "Theme" drop-down, or by adding `themeVariables` as an Advanced option.
-   At any point, the current content being edited can be opened on Mermaid Live Editor via a simple link. The [Mermaid Editor](https://jasonmhoule.github.io/tw5-mermaid/#Mermaid%20Editor) also allows you to paste the Mermaid Live Editor URL, which it will parse back into the wiki for you to save or continue editing diagram tiddlers.

Limitations
-----------

-   Requires internet to render diagram images, regardless of editing or viewing.
-   This plugin wraps and is totally dependent on Mermaid Live service for rendering images. Mermaid Live Editor can itself be finnicky at times.
-   While the wrapper of Mermaid Live is fairly generic, it does not wrap the full Mermaid API but only `code`, `theme`, and `themeVariables` to simplify complexity; anything beyond that may not be supported. If you would like to see additional features, please [open an issue](https://github.com/jasonmhoule/tw5-mermaid/issues).

Acknowledgements
----------------

-   This plugin relies entirely on the excellent work of the [Mermaid.js](https://mermaid-js.github.io/mermaid/#/) project and on the availability of the [Mermaid Live Editor](https://mermaid.live/edit).
-   For base64 parsing to enable this plugin I am indebted to <https://tobibeer.github.io/tw5-plugins/#base64>.
