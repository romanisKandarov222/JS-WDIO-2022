WebElements:
    - textBox
    - buttons
    - text/copy
    - images
    - hyperlinks
    - dropdowns
    - radio buttons (one selection)
    - check-box (multiple choice)
    - alert

Interactions:
    - click
    - type
    - drag and drop
    - if it selected / enabled / displayed    


___________________Document Object Model (DOM)___________________
Written code generates an HTML/XML document (DOM) -> makes the Webpage
<html>
    <head> </head>
    <body> </body>
</html>

eg: html, body, head, link, script, div, input, form

NOTE: tagNames CANNOT have spaces
<tag1 attr1="value1" attr2="value2" attr3 attr4="value4" attr5="value five" attr6="value six">
tag -> tag1
attribute of tag1 -> att1, attr2, attr3, attr4, attr5, att6
NOTE: attribute-names CANNOT have spaces

value of attr1 = value1
value of attr2 = value2
value of attr3 = none/undefined
value of attr4 = value4
value of attr5 = value five
value of attr6 = value six

<input type="text" class="inputtext _55r1 _2qcn" id="email" name="email" 
placeholder="Email address or phone number" value tabindex="0" aria-label="Email address or phone number">
tag -> input
attributes of input-tag -> type, class, id, name, placeholder, aria-label, tabindex, value
  
<tag1 attr1="value1" attr2="value2" attr3 attr4="value4" attr5="value five" attr6="value six">My Text value</tag1>
tag -> tag1
attribute of tag1 -> att1, attr2, attr3, attr4, attr5, att6
NOTE: attribute-names CANNOT have spaces
  
tag1 has text = My Text value
  
<button value="1" class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy" name="login" data-testid="royal_login_button" type="submit" id="u_0_5_ju">Log in</button>
  
text of button-tag -> Log in
  
attributes of button-tag -> value, class, name, data-testid, type, id
 
    <tag1 attr11="val1" attr12="val2" attr13>
        <tag2 attr21="val21" attr22="val22">
            text value
        </tag2>
        <tag3>
            text value again
        </tag3>
    </tag1>
     
number of attributes of tag3 -> 0
text-value of tag3 -> text value again
  
number of attributes of tag2 -> 2 (attr21, attr22)
text-value of tag2 -> text value
  
number of attributes of tag1 -> 3 (attr11, attr12, attr13)
text-value of tag1 -> no text with tag1





___________________Steps to interact with webElement___________________
1. Find the unique locator strategy to find webElement
2. Based on the strategy, use respect code to find webElement
3. once webElement is found, interact with webElement
  
To find webElement: function -> $
  
Interactions:
1. To click on a particular webElement
    function: click()
  
2. To type in a particular webElement
    function: setValue()  / input: String input which we want to type in the webElement


3. To find if a particular webElement is enabled or not
    function: isEnabled()
        if webElement is enabled
            function returns true
        otherwise
            function returns false
   
4. To find if a particular webElement is displayed or not
    function: isDisplayed()
        if webElement is displayed
            function returns true
        otherwise
            function returns false
  
5. To find if a particular webElement is selected or not
    function: isSelected()
        if webElement is selected
            function returns true
        otherwise
            function returns false

6. To get the value of an attribute
       function: getAttribute()
       input: attributeName
       return type: string
  
   7. To get the Text value of a webElement
       function: getText()
       return type: string



___________________Links___________________
    - always have a-tag
    - text of a-tag (link) is known as linkText
    - value of href-attribute defines where user will land after clicking the link.
  
<a href="https://www.oculus.com/" title="Learn more about Oculus" target="_blank">Oculus</a>
  
attributes of a-tag -> href, target, title
text of a-tag -> Oculus
value of href-attribute -> https://www.oculus.com/
