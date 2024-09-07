# CSS Modules
- In vanilla CSS, we may encounter clashes if the same CSS classes are defined in multiple files. As an example we declared another list-group class on `App.css` and importing it to `App.tsx` then set background to Blue. Apart from this in `ListGroup.css` we set background to Green. 
	![](assets/Pasted%20image%2020240907131901.png)
- Here we can see a CSS clash. This is the problem CSS modules try to solve.