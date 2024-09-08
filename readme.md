# CSS Modules
- what if we want to add multiple CSS classes to the element
  ``` tsx 
	//ListGroup.tsx 
	<ul className={[styles.listGroup,styles.container].join(' ')}>
	```
- why `join` ?
  
  ![](assets/Pasted%20image%2020240908215548.png)