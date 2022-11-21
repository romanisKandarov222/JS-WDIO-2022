/**
 ** Locators: way to reach/find webElement
 * 
 *  8. //! Using tagName
 *      To check if tagName is unique, In chropath -> //* //tagName
 * 
 *      const webElement = await $('<tagName>');
 * 
 *      eg:
 *      const loginButton = await $('<button>');
 * 
 *  9. //! Using className-attribute
 *      To check if class's attribute value is unique, In chropath -> //*   //[@class='classAttrValue']
 *      NOTE: class-Attribute's value CANNOT have spaces
 * 
 *      const webElement = await $('.classAttrValue');
 * 
 *  10. //! xpath
 *      Types:
 *?      1. Absolute xpath
 *          a) starts with single slash (/)
 *          b) tells the route/navigation to reach a particular webElement from html-tag (or root-tag)
 *          c) not reliable, any changes in the webPage can break the absolute-xpath
 * 
 *          eg:
 *          /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[3]/a[1]
 *          /html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/ul[1]/li[14]/a[1]
 * 
 *?      2. Relative xpath
 *          a) starts with double slash (//)
 *          b) reliable bcz we can use tagName, attribute or test-value in any combination to create route to reach to a particular webElement.
 * 
 *      --> Direct xpath (simple xpath)
 *      --> Indirect xpath (advanced xpath)
 * 
 * 
 * 
 */

/**
 * Direct xpath (simple xpath)
 * 
 *? 1. using attribute's value
 **     //tagName[@attrName="attribute value"]
 *      find the tag(tagName) in dom which has attribute (attrName) with value as "attribute value"
 * 
 *      const webElement = await $('//tagName[@attrName="attribute value"]');
 * 
 *? 2. using text value
 **     //tagName[text()="text value"]
 *      find the tag(tagName) in dom which has text equals to "text value"
 * 
 *      const webElement = await $('//tagName[text()="text value"]');
 * 
 *? 3. using partial attribute's value
 **     //tagName[contains(@attrName , "partial attr value")]
 *      find the tag(tagName) in dom which has attribute(attrName) contains partial value as "partial attr value"
 * 
 *      const webElement = await $('//tagName[contains(@attrName , "partial attr value")]');
 * 
 *? 4. using partial text value
 **     //tagName[contains(text() , "partial text value")]
 *      find the tag(tagName) in dom which has text equals to "text value"
 * 
 *      const webElement = await $('//tagName[contains(text() , "partial text value")]');
 * 
 * ? 5. 
 */


/**
 *? Steps to interact with webElement:
 *  1. Find the unique locator strategy to find webElement
 *  2. Based on the strategy, use respect code to find webElement
 *  3. Once webElement is found, interact with webElement
 * 
 * To find webElement:
 *?  function -> $
 * 
 */

/**
 //! Interactions:
   1. To click on a particular webElement
       //* function: click()
  
   2. To type in a particular webElement
       //* function: setValue()
       input: String input which we want to type in the webElement
  
   3. To find if a particular webElement is enabled or not
       //* function: isEnabled()
           if webElement is enabled
               function returns true
           otherwise
               function returns false
   
   4. To find if a particular webElement is displayed or not
       //* function: isDisplayed()
           if webElement is displayed
               function returns true
           otherwise
               function returns false
  
   5. To find if a particular webElement is selected or not
       //* function: isSelected()
           if webElement is selected
               function returns true
           otherwise
               function returns false
  
   6. To get the value of an attribute
       //* function: getAttribute()
       input: attributeName
       return type: string
  
   7. To get the Text value of a webElement
       //* function: getText()
       return type: string
  
 */

/**
  //! Links:
    - always have a-tag
    - text of a-tag (link) is known as linkText
    - value of href-attribute defines where user will land after clicking the link.
  
  
  <a href="https://www.oculus.com/" title="Learn more about Oculus" target="_blank">Oculus</a>
  
  attributes of a-tag -> href, target, title
  text of a-tag -> Oculus
  value of href-attribute -> https://www.oculus.com/
 */