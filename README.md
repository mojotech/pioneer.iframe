Pioneer Iframe
=====================

[![Build Status](http://img.shields.io/travis/mojotech/pioneer.iframe.svg?style=flat
)](https://travis-ci.org/mojotech/pioneer.iframe)
[![Gitter chat](http://img.shields.io/badge/gitter-chat-blue.svg?style=flat
)](https://gitter.im/mojotech/pioneer)

`Widget.Iframe` is a utility class that extends from the base `Pioneer` `Widget` Class.

## Table of contents
  * [Installing](#installing)
  * [Using](#Using)
  * [Api](#api)
    * [Focus](#focus)
    * [Unfocus](#unfocus)

## Installing

    npm install pioneer.iframe

## Using

    pioneer --require node_modules/pioneer.iframe/lib

```js
  MyFrame = Widget.Iframe.extend({
    root: "iframe"
  });

  frame = new MyFrame();
  // Changing the context to interact with the contents of the iframe
  frame.focus();
  // Resetting the context to interact with the iframes parent.
  frame.unfocus();
```

# API

## Focus

  `function focus()...`

  Switches context from the default window to the iframe. All subsequent methods will be performed in the iframe until `unfocus()` is called.
  Returns a promise that resolves to the widget instance on which it was called

## Unfocus

  `function unfocus()...`

  Switches context back to the default window (or the parent of the iframe).
  Returns a promise that resolves to the widget instance on which it was called