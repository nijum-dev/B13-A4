## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:getElementById() selects an element by its id and returns only one element because id is unique.

getElementsByClassName() selects elements by class name and can return multiple elements as a collection.

querySelector() selects the first element that matches a CSS selector (id, class, tag, etc.).

querySelectorAll() selects all elements that match a CSS selector and returns them as a list.

So, getElementById returns one by id, getElementsByClassName returns many by class, querySelector returns first match, and querySelectorAll returns all matches.

## 2. How do you create and insert a new element into the DOM?

Ans: To create and insert a new element into the DOM, first we create the element using document.createElement(). Then we add content to it, and finally insert it into the document using methods like appendChild() or append().
Example:

let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
document.body.appendChild(newElement);

## 3.What is Event Bubbling? And how does it work?
Ans:Event Bubbling is a process in JavaScript where an event starts from the target element and then moves upward to its parent elements.
When an event happens on a child element, it first runs on that element, then on its parent, then on the grandparent, and continues up to the document.

Example:
If a button is inside a div and both have click events, when we click the button, first the button’s event runs, then the div’s event runs.
So, in event bubbling, the event flows from the innermost element to the outer elements (bottom to top).

## 4.What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Bubbling is a process in JavaScript where an event starts from the target element and then moves upward to its parent elements.
When an event happens on a child element, it first runs on that element, then on its parent, then on the grandparent, and continues up to the document.

Example:
If a button is inside a div and both have click events, when we click the button, first the button’s event runs, then the div’s event runs.

So, in event bubbling, the event flows from the innermost element to the outer elements (bottom to top).

## 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() and stopPropagation() are both event methods in JavaScript, but they do different things.
preventDefault() is used to stop the default action of an element. For example, when clicking a link, it normally opens another page. If we use preventDefault(), the link will not open.
stopPropagation() is used to stop the event from moving to parent elements. It prevents event bubbling. If we click a child element, the event will not go to its parent.

So, preventDefault() stops the default behavior of an element, while stopPropagation() stops the event from bubbling to parent elements.

