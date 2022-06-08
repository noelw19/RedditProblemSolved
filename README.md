## found this code on reddit and was asked to find what is breaking the code.


Firstly - all react elements must be contained within a single parent element, meaning only one element is returned, and that element may contain multiple children.

Secondly - the third element (the last div not contained within parent element) that is shown in the broken code sets the props.value as the content using the dangerouslySetInnerHTML property, which can be unsafe depending on where the props.value is coming from if coming from the user then the props.value must escape html tags and render as a string only to mitigate the chance of XXS attacks on this surface.

Thirdly - the onChange property is initially called with 'propshandleChange' which immediately breaks the code because dot notation is not used to properly call the method within, also onChange is an event emitter and returns an event object, which will also break the code because the whatsBrokenProps.handleChange is expecting a string as the arguement, so I fix this by adding an arrow funtion '(e) => {e.target.value}' so that the event object is accessed and the string contained within the event targets value property is taken as the arguement for the handleChange method.

Fourth - The dangerouslySetInnerHTML wont take a string unless a object is passed as an arguement and the string is added as the value for the __html property which removes the tags and only displays the inner text. 

I also threw some random code in to make sure that the code was once again useable.

Please check the RedditBrokenCodeAdvert jpg image for the broken code that was found and fixed.