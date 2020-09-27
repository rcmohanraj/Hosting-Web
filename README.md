
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

-----------------------------------------------------

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

-----------------------------------------------------

### Background Properties
Background size value can be given in pixels or percentages. It contains two values first value is Width and second value is Height. We can also give predefined values like **contain and cover**.

#### background-size: cover
It will find out which part of the image is higher and will set the width and it used to fill the image always fit into the container.

#### background-size: contain
It will display full image without cropping. But we may end up having empty space in the container.

#### background-position
Background position value can be given in pixel or percentages. It contains two values first value is X axis (left edge) and second value is Y axis (top edge).  
X axis value in pixel defines how the left edge of the image should be positioned relative to the left edge of the surrounding container.  
Y axis value in pixel defines how the top edge of the image should be positioned relative to the top edge of the surrounding container.

X axis value in percentages defines how the excess space of the image should be positioned or cropped from the surrounding container.  
Y axis value in percentages defines how the top edge of the image should be positioned  or cropped from the surrounding container. The default value for Y axis is 50% percentage which means 50% crop at top and bottom. If we give 10% then in top 10% and 90% will be cropped from bottom.

We can also give predefined values like **center and cover**.

#### background-position: center  (which is same as X=> 50% and Y => 50%)
If we set as center, the part of the image that do not fit into the container, 50% percent will be cropped from left, right and top, bottom. Center of Image will be the center of the container.

#### background-position: left top (which is same as X=> 0% and Y => 0%)
It means the image will be aligned to the left and top and excess image will be cropped in right and bottom.

We can also give left bottom as well left 10% bottom 20% means left side 10% crop and bottom 20% crop.

List of background properties
1) background-image			=> Sets one or more background  
2) background-color 		=> Sets a solid background color  
3) background-position		=> Sets initial position relative to background position layer (only applies to background-image)  
4) background-size			=> Sets size of the background-image  (only applies to background-image)  
5) background-repeat		=> Define how background-image are repeated (only applies to background-image)  
6) background-origin		=> Allows to set background position area (only applies to background-image)    
7) background-clip			=> Defines whether background extends underneath border  
8) background-attachment	=> Scrolling behavior of background image  (only applies to background-image)  

**background-origin and background-clip** are similar to box-sizing: border-box (where it will consider border and padding along the width of the content). By default it will have padding-box which means it will consider only content and padding, not the space of border.

```
background-image: url("freedom.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: left 10% bottom 20%;
background-origin: border-box;
background-clip: border-box;
```

##### Shorthand background property
After the image URL we need to give position and size by separating these two with slash. For the origin and clip, if the last value is same it will apply to both and ifs different, first value will be taken for origin and second will be taken for clip.

```
background: url("freedom.jpg") left 10% bottom 20% / cover no-repeat border-box padding-box scroll;
(or)
background: url("freedom.jpg") left 10% bottom 20% / cover no-repeat border-box scroll;
```

##### Tip 
Height of the image in the surrounding container as well as the height with percentage in the image container will not take effect because be default width and height of the actual image will be taken into consideration. To summarize percentage values on image don't work when the image container is an inline element, if the container changed to inline-block, it will take the percentage values from the surrounding container.

#### Filters
Filters are used to change the visual representation of the element. Examples are grayscale, brightness etc.,

#### SVG
We can select individual elements in the single image icon and we can style individually.
Important styles are fill: color, stroke: color, storke-width:10px 

-----------------------------------------------------

### Units

1) Pixel
2) Percentage
3) em
4) root em
5) View port height
6) View port width

#### Which are the properties can having these units?
1) font-size
2) padding
3) border
4) margin
5) width
6) height
7) top, bottom, left, right

#### Size calculation
Absolute Length	=> User setting in browser font size is ignored => px  
Viewport Length	=> Adjust the element to the current viewport 	=> vh, vw, vmim, vmax, %  
Font Relative Length => Adjust to the default font size 		=> rem, em, %  

#### How percentage units are calculated ? => Percentage unit for an element is decided based on the containing block or parent of that element
1) If the element is positioned as fixed, then the containing block is viewport so viewport size(width or height) will be taken into consideration for that child element.  
2) If the element is positioned as absolute then the containing block is, ancestor element content plus padding. Ancestor elements are decided either closest element which is not positioned as static or if there is no parent element have positioned value other than static then viewport size(width or height) will be taken into consideration for that child element.  
3) If the element is positioned as static or relative then the containing block is, ancestor element content which will be a closest block level element.  

#### em and rem
If we set em in the font-size, the computed value will be em*16px. Imagine we are setting font-size:1.2em for the parent element(1.2em=19.2px) and child element (1.1em).  
Parent element font-size will be 1.2em which 19.2px but if we set child element font-size it has to be 1.1*16 = 17.6 but the computed font-size will be 21.12(19.2*1.1em). 
The child element will compute the font-size based on the parent element font size. To avoid this behavior we need to rem, which will basically take the unit from the root element which is html tag.  

Viewport height and width always refers to the viewport size.

#### Which Units to Choose?
1) font-size				=> for root element we don't need to set any. it will use browser font-size. But for other elements we can use rem. em can be used for children.
2) padding and margin		=> rem or px
3) border					=> px
4) width and height 		=> % or vw and vh
5) top, bottom, left, right	=> %

We can use margin:auto for centering the elements. But it can be applied to block level elements with explicitly assigned width.

-----------------------------------------------------
### Backdrop and Mobile Menu

Added z-index with position:fixed to make sure the backdrop div is appearing above all other tags. With help of Javascript DOM operations, added and removed the css classes for showing or hiding the popup as well mobile menu during the button clicks.

```
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan .button');
const mobileNavBar = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');


for(let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
		
        backdrop.classList.add('open');
        modal.classList.add('open');
    });;
}

const closeBackdrop = function() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
}

backdrop.addEventListener('click', function() {
    mobileNavBar.classList.remove('open');
    closeBackdrop();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeBackdrop);
}

toggleButton.addEventListener('click', function() {
    // backdrop.style.display = 'block';
    // mobileNavBar.style.display = 'block';
    backdrop.classList.add('open');
    mobileNavBar.classList.add('open');
});

```

We have two way of specifying the CSS property in Javscript. 
1) modal.style.backgroundImage 
2) modal.style['background-image']

##### Tip
Have to change the CSS property notations in the camel case while directly access from the element.style object

-----------------------------------------------------

### Responsive Design

Response design is depends on hardware and software pixels. If we change to mobile in the Dev Tools of the browser, our entire page is displayed into mobile device. Even though we selected the mobile device with less pixel, still we can able to see entire desktop version of our application inside the selected mobile device. To make effect of the mobile width in the Dev Tools we need to add the below viewport meta tag. This viewport meta tag helps us to adjust our site to the device viewport.  
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, 
    user-scalable=yes, maximum-scale=2.0, minimum-scale=1.5">
```
name=viewport 			=> means it should target the viewport area inside our browser, that should display our browser  
width=device-width		=> sets the actual device width to the application width, if this value not present we will not able to scale for mobile devices  
initial-scale=1.0		=> sets the initial scale value of the application  
user-scalable=yes		=> sets whether the user can able to zoom in or not. by default its yes, so the user can zoom-in and zoom-out.  
maximum-scale=2.0		=> sets the scale on the maximum value a user can zoom-in the application  
minimum-scale=1.5		=> sets the scale on the minimum value a user can zoom-out the application  

Now when the pixel is reduced in normal mode and mobile mode will have same responsive state of our application. From the below URL we can able to find the physical width and the respective CSS width for most of the mobile devices. With the help of this, we can able to define the CSS behavior on the different devices using Media Queries.  

https://www.mydevice.io/#compare-devices

#### Media Queries
Change the design depending on the device size.

##### Approach 1 => Build from mobile design to desktop design
```
//If the min-width is equal or greater than 40rem or 640pixels then apply the styles in the media block.
@media (min-width: 40rem) {
	#product-overview h1 {
		font-size: 4rem;
	}
}
```

##### Approach 2 => Build from desktop design to mobile design
```
//If the max-width is equal or less than 40rem or 640pixels then apply the styles in the media block.
@media (max-width: 40rem) {
	#product-overview h1 {
		font-size: 2rem;
	}
}
```
We can also define min-height and orientation:portrait in media queries. Apply style only two conditions matched with and operator(**and**) also apply style if anyone condition met using or operator (**,**).
```
@media (max-width: 40rem) and (min-height: 40rem) {
	/* styles */
}

@media (max-width: 40rem), (orientation:portrait) {
	/* styles */
}
```
-----------------------------------------------------
