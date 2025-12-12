# A simple yet fully customizable drop-down-menu

## This module works with 3 parameters.

**NB: Make sure parent element and it's children follow correct hierarchy.**

1. _Parameter-1_ <menuDivElement> - A **Unique parent** element selector, eg: <#elementID> or <.elementClassName>

2. _Parameter-2_ <menuBtnElement> - The **First Child** as Title: div element, eg: <#elementID> or <.elementClassName>

3. _Parameter-3_ <menuListElement> - The **Second Child** as List: ordered or Unordered List element, eg: <#elementID> or <.elementClassName>

_Code example (module imported as ```menuDisplay```):_

**html**
```html
<nav>
    <menu class="menuItem1">
        <div class="title">Button-1</div>
        <ul class="drop-down-list">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </menu>
    <menu class="menuItem2">
        <div class="title">Button-2</div>
        <ul class="drop-down-list">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </menu>
    <menu class="menuItem3">
        <div class="title">Button-3</div>
        <ul class="drop-down-list">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </menu>
</nav>
```
**javascript**
```js
menuDisplay(".menuItem1", ".title", "ul")
menuDisplay(".menuItem2", ".title", "ul")
menuDisplay(".menuItem3", ".title", "ul")
```
