
"Enter key" Error solved!!
Error: switch to Url Shortener and press Enter...it triggers the submit button instead of shorten button. 

Note:
1. button(first child of p tag) is triggered when pressed enter. (submit button)
2. Or we can also say, the first button is triggered when pressed enter. Check that by swapping those button element's position.

Error Solved !!

when switching to URL shortener:

I used pTag.replaceChild(newChild,oldChild) to replace submit button completely with shorten button. There's only one button(shorten) within p Tag now. Inspect the element to see the change(replacement).

And vice-versa when switching to datamuse Api.
