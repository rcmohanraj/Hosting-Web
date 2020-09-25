## Cascading Style Sheets

### Specificity
Multiple styles can be applied to same elements. To solve this conflicts CSS have list of rules to pick the specific style.  

1) Inline Styles  
2) Id Selector  
3) Class and Pesudo-Class and Attribute selector  
4) Tag and Pesudo-Element and * selector (if the styling for same tag repeated twice in CSS file, then the latest will be applied, as the CSS file will be read from top to bottom)  

The rule with more information will have higher specificity than the less information rule. For example Combinators are always have high specificity as we have more information in the selector.

### Combinators
Combine multiple selectors to narrow down the specific element for applying the styles

#### 1. Descendant Child ( )
Second Element is a descendant of the first element

```
div p {
    color: green;
}
```

##### Example
Select all the p tags under the div tags. Here the p tag need not to be the direct child

```
<div>
	<h2>H2 Header</h2>
	<p>Applied</p>
	<h3>H3 Header</h3>
	<p>Applied</p>
	<h2>H2 Header</h2>
	<h3>H3 Header</h3>
	<p>Applied</p>
	<h2>
		<p>Applied</p>
	</h2>
</div>

<h1>
	<p>Not Applied</p>
</h1>
<div>
	<p>Applied</p>
</div>
```

#### 2. Child (>)
Second Element is a direct child of the first element

```
div > p {
    color: green;
}
```

##### Example
Select all the p tags that are direct child to the div tag.

```
<div>
	<div></div>
	<p>Applied</p>
	<h3>H3 Header</h3>
	<p>Applied</p>
	<p>Applied</p>
	<h2>
		<p>Not Applied</p>
	</h2>
</div>
```

#### 3. Adjacent or Direct Sibling (+)
i)  Elements has to share the same parent
ii) Second Element comes immediately after the first element

```
h2 + p {
	color: red;
}
```

##### Example
Select all the p tags that are directly follow the h2 tag.

```
<div>
	<h2>H2 Header</h2>
	<p>Applied</p>
	<h3>H3 Header</h3>
	<p>Not Applied</p>
	<h2>H2 Header</h2>
	<h3>H3 Header</h3>
	<p>Not Applied</p>
	<h2>
		<p>Not Applied</p>
	</h2>
</div>
```

#### 4. General Sibling (~)
i)  Elements has to share the same parent
ii) Second Element comes after the first element ( not required to follow immediately)

```
h4 ~ p {
	color: red;
}
```

##### Example
Select all the p tags that are directly or indirectly follow the h4 tag.

```
<div>
	<p>Not Applied</p> 
	<h1>Direct Sibling Demo</h1>
	<h4>H4 Header</h4>
	<p>Applied</p> 
	<h3>H3 Header</h3>
	<p>Applied</p> 
	<h4>H4 Header</h4>
	<h3>H3 Header</h3>
	<p>Applied</p>
	<h4>
		<p>Not Applied</p>
	</h4>
</div>
```

### Pesudo Classes (:)
Its used to change the state of the element.
like :hover or :active

### Pesudo Elements (::)
Its used to change the specific part of the element.
like ::first-letter or ::after or ::before

### Position
Default position for all the HTML element is static

#### Fixed (Positional Context => Always View port)
If we apply position fixed to HTML element, then the element will position based on the view port (using top, bottom, left, right values). The element will be taken out of the document flow. The positional context will be HTML element or view port.
z-index property will not work on the other elements if we are using position other than default. So we need to apply the z-index to the element where we set position fixed. By default z-index set to auto, which means zero. 
If two elements have the position fixed with z-index = 0 or auto then the second or latest element will be displayed above the first element.

#### Absolute (Positional Context => View port or Closest ancestor)
Absolute positional context for an element is defined based on two conditions. 
1) Ancestor positional property of the current element defined means then the closest ancestor which has the position property applied will be the position context of this element.
2) If not then it will take the HTML element as positional context

The Absolute position property applied element will be taken out of the document flow as like the position fixed.

#### Relative (Positional Context => Always Element original position)
The positional context is the element itself. (like moving the element 50px top from its original position, not from view port or any parent). It will stay in the document flow. With values of top, bottom, left, right we can move the element from its parent along with relative position property. It may have chance to overflow from the parent. In that case we need to use overflow:hidden, which will hide this element if its cross the parent element.
##### Tip 
In-case if we want to set overflow:hidden to body tag of our page, then we need to set the html tag as overflow:hidden or auto, because overflow:hidden set on the body element, is moved to apply to the viewport(html) instead. To avoid that happening, you can set the HTML element to not be overflow:visible (either auto or hidden), otherwise the relative positioned element which has body tag as parent can overflow from the parent.

#### Sticky => Combination of relative and fixed
A sticky element toggles between relative and fixed, depending on the user's scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). As soon as the element touches the viewport it will change as position:fixed (using the top property we can define the distance between the viewport and the element). Also once the end of the parent element reached, it will again reset to relative position.


