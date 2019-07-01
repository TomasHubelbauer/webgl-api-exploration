# WebGL API Exploration

[GitHub Pages]()

This document enumerates the WebGL API methods, fields and various other related
resources and serves as a "form" for me to fill in in my quest to explore the
WebGL API. The idea is that familiarizing myself with each of these, even if
briefly at best for most, will improve my overall understanding of the scope and
feature set of WebGL and give me the nomenclature and understanding of WebGL
required to be able to effectively search for information as I go developing
software using WebGL.

This README is fetched and parsed by the accompanying web application which itself
probes the WebGL API in the browser for all its members. Headings in this document
which match a WebGL member name have their content be displayed in the application.

To run the application either run the file directly in Firefox or use `npx serve .`
in Chrome or other browsers.

- Add GitHub Pages URL
- Find out what a stencil buffer is
- Make a demo of drawing single points and polylines
- Find out how `LINES` and `LINE_STRIP` differ
- Find out how the triangle variations differ
- Make a demo of `blendFunc` and `blendFuncSeparate` and the equations methods
- Find out what `ARRAY_BUFFER_BINDING` does
- Find out what the default face culling is and make a demo for it
- See if `VIEWPORT` changes if the `canvas` dimensions change because `getContext`
  always returns the same instance which doesn't seem to adjust for dimensions

## `DEPTH_BUFFER_BIT`

A constant passed to `clear` to clear the depth buffer.

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Clearing_buffers

## `STENCIL_BUFFER_BIT`

A constant passed to `clear` to clear the stencil buffer.

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Clearing_buffers

## `COLOR_BUFFER_BIT`

A constant passed to `clear` to clear the color buffer.

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Clearing_buffers

## `POINTS`

Passed to `drawElements` or `drawArrays` to draw single points.

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Rendering_primitives

## `LINES`

Passed to `drawElements` or `drawArrays` to draw a polyline.

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Rendering_primitives

## `LINE_LOOP`

Passed to `drawElements` or `drawArrays` to draw line segments (pairs of vertices).

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Rendering_primitives

## `LINE_STRIP`

## `TRIANGLES`

## `ZERO`

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Blending_modes

## `CW`

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Front_face_directions

## `CCW`

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Front_face_directions
