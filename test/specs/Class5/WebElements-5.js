/**
 *  Indirect xpath (advanced xpath)
 * 
 *  1. using parent/grandparent/grand-grandparent etc
 **     //select[@id="month"]//option[@selected]
 **     //select[@id="day"]//option[@selected]
 **     //div[@id="header"]//div[contains(@class,"selectric-units")]//b
 **     //div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "mph")]
 * 
 *  2. using xpath-axes
 *      1. following-sibling (any sibling-tag appearing in the dom after a particular tag)
 **     //tagName[condition(s)]/following-sibling::tag2[condition(s)]
 *      eg:
 **          //h2[text()="November 2022"]/following-sibling::table//button[@disabled]
 **          //label[text()="Female"]/following-sibling::input
 **          //h2[text()="November 2022"]/following-sibling::table//button[@data-day="25"] 
 * 
 *      2. preceding-sibling
 **     //tagName[condition(s)]/preceding-sibling::tagName2[condition(s)]
 *      eg:
 **         //section[@id="lodging-search-form-1"]/preceding-sibling::h1
 * 
 *      3. following (any tag appearing in the dom after a particular tag)
 **     //tagName[condition(s)]/following::tagName2[condition(s)]
 *      eg:
 **         //a[text()="Create a Page"]/following::a[text()="Log in"] 
 * 
 *      4. preceding (any tag appearing in the dom before a particular tag)
 **     //tagName[condition(s)]/preceding::tagName2[condition(s)] 
 * 
 *      5. parent ( to go to parent-tag from child-tag)
 **     //tagName[condition(s)]/parent::tagName[condition(s)]
 * 
 *      .. can also be use like parent-axes
 **     //section[@id="lodging-search-form-1"]/../../../div[@role]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */