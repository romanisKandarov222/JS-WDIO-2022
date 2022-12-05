___________________Locators: way to reach/find webElement___________________

1. Using id-attribute
    id-attribute is always going to be unique in the DOM
    To check if id-value is unique, In chropath -> //[@id='idValue']
  
    const webElement = await $('#idValue');
    ex:
    const loginEmailInputBox = await $('#email');
  
2. Using other attribute's value instead id-attribute
    To check if any attribute has unique value or not, In chropath -> //tagNam
    [@attrName='attrValue'] 
    NOTE: Attribute's value CANNOT have spaces
  
    const webElement = await $('tagName[attrName=attrValue]')
    ex:
    const loginButton = await $('button[name=login]');
  
3. Using linkText (can be used only for links)
    To check if linkText is unique or not, In chropath -> //a[text()='Link Text']
  
    const webElement = await $('=Link Text')
    ex:
    const linkButton = await $('=Create New Account');
  
4. Using partial linkText (can be used only for links)
    To check if partial linkText is unique or not, In chropath -> //a[contains(text() , 'partial Link Text')]
  
    const webElement = await $('*=partial link text')
    ex:
    const linkButton = await $('*=te N');
  
5. Using other attribute's partial value instead id-attribute
    To check if any attribute has unique partial-value or not, In chropath ->  //tagName[contains(@attrName , 'partialAttrValue')]
    NOTE: Attribute's value CANNOT have spaces
  
    const webElement = await $('tagName[attrName*=partialAttrValue]')
  
6. Using text value
    To check if the text value is unique or not, In chropath ->  //tagName[text() = 'text value']
    const webElement = await $('tagName=text value')
  
7. Using partial text value
    To check if the partial text value is unique or not, In chropath -> //tagName[contains(text() , 'partial text value')]
  
    const webElement = await $('tagName*=partial text value')

8. Using tagName
      To check if tagName is unique, In chropath -> //* //tagName
 
      const webElement = await $('<tagName>');
      ex:
      const loginButton = await $('<button>');
 
9. Using className-attribute
      To check if class's attribute value is unique, In chropath -> //*   //[@class='classAttrValue']
      NOTE: class-Attribute's value CANNOT have spaces
 
      const webElement = await $('.classAttrValue');
 
10. Using xpath
      Types:
      1. Absolute xpath
          a) starts with single slash (/)
          b) tells the route/navigation to reach a particular webElement from html-tag (or root-tag)
          c) not reliable, any changes in the webPage can break the absolute-xpath
 
          ex:
          /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[3]/a[1]
          /html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/ul[1]/li[14]/a[1]
 
      2. Relative xpath
          a) starts with double slash (//)
          b) reliable bcz we can use tagName, attribute or test-value in any combination to create route to reach to a particular webElement.
 
      --> Direct xpath (simple xpath)
      --> Indirect xpath (advanced xpath)
 
 
 
___________________Direct xpath (simple xpath)___________________
 
 1. using attribute's value
     //tagName[@attrName="attribute value"]
     find the tag(tagName) in dom which has attribute (attrName) with value as "attribute value"
 
      const webElement = await $('//tagName[@attrName="attribute value"]');
 
 2. using text value
     //tagName[text()="text value"]
     find the tag(tagName) in dom which has text equals to "text value"
 
      const webElement = await $('//tagName[text()="text value"]');
 
 3. using partial attribute's value
     //tagName[contains(@attrName , "partial attr value")]
     find the tag(tagName) in dom which has attribute(attrName) contains partial value as "partial attr value"
 
      const webElement = await $('//tagName[contains(@attrName , "partial attr value")]');
 
 4. using partial text value
     //tagName[contains(text() , "partial text value")]
     find the tag(tagName) in dom which has text equals to "text value"
 
      const webElement = await $('//tagName[contains(text() , "partial text value")]');

 5. using starting portion of attribute's value
    //tagName[starts-with(@attrName , "starting portion of attrName value")]
    find the tag(tagName) in dom which has attribute(attrName) starts-with "starting portion of attrName value"
 
      const webElement = await $('//tagName[starts-with(@attrName , "starting portion of attrName value")]')
 
 6. using starting portion of text value
     //tagName[starts-with(text() , "starting portion of text value")]
     find the tag(tagName) in dom which has text-value starts-with "starting portion of text value"
 
      const webElement = await $('//tagName[starts-with(text() , "starting portion of text value")]')
 
 7. using not-operator
     //tagName[not(@attrName="attribute value")]
     find the tag(tagName) in dom where attribute (attrName) is NOT value as "attribute value"
 
     //tagName[not(@attrName)]
     find the tag(tagName) in dom which does NOT have attribute (attrName)
 
     //tagName[not(contains(text() , "partial text value"))]  
     find the tag(tagName) in dom where text does NOT contain "partial text value"
 
 8. and/or operator
     //tagName[@attrName="attr value" and text()="text value"]  
     find the tag(tagName) in dom which has attribute (attrName) with value as "attribute value" AND text-value equals to "text value"
 
     //tagName[contains(text(), "partial text val") or starts-with(text() , "starting text value")]
     find the tag(tagName) in dom where text-value contains "partial text val" OR text-value starts-with ""starting text value""
  
 NOTE:
     //tagName[@attrName]
     find the tag(tagName) in dom which has attribute (attrName)
 
     //tagName[text()]
     find the tag(tagName) in dom which has text-value
 
     //*[@attrName = "attr value"]
     find any tag in dom which has attribute (attrName) with value as "attribute value"
 
     //div[contains(text(), "partial text val") or starts-with(text() , "starting text value")]
     suppose div and button tags satisfy the condition(s)
     --> xpath will try to find div-tag only
 

___________________Indirect xpath (advanced xpath)___________________
 
1. using parent/grandparent/grand-grandparent etc
     //select[@id="month"]//option[@selected]
     //select[@id="day"]//option[@selected]
     //div[@id="header"]//div[contains(@class,"selectric-units")]//b
     //div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "mph")]
 
2. using xpath-axes
     1. following-sibling
      //tagName[condition(s)]/following-sibling::tag2[condition(s)]
      ex:
      //h2[text()="November 2022"]/following-sibling::table//button[@disabled]
      //label[text()="Female"]/following-sibling::input
      //h2[text()="November 2022"]/following-sibling::table//button[@data-day="25"] 

     2. preceding-sibling
      //tagName[condition(s)]/preceding-sibling::tagName2[condition(s)]
      ex:
      //section[@id="lodging-search-form-1"]/preceding-sibling::h1
 
      3. following (any tag appearing in the dom after a particular tag)
      //tagName[condition(s)]/following::tagName2[condition(s)]
      ex:
      //a[text()="Create a Page"]/following::a[text()="Log in"] 
 
      4. preceding (any tag appearing in the dom before a particular tag)
      //tagName[condition(s)]/preceding::tagName2[condition(s)] 
 
      5. parent ( to go to parent-tag from child-tag)
      //tagName[condition(s)]/parent::tagName[condition(s)]
 
      .. can also be use like parent-axes
      //section[@id="lodging-search-form-1"]/../../../div[@role]
