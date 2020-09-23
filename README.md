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




