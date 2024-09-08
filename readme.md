# CSS Modules
- CSS modules with this `[ ]` is a little bit ugly. So usually when using CSS modules, prefer to use **Camal** notation. So instead of using `-` we use the Camal notation.
  ``` css 
	/*ListGroup.module.css*/
	.listGroup{
		list-style: none;
		padding: 0%;
	}
	```
- With that we can access this CSS class just like a regular JS object.
  ``` tsx 
	//ListGroup.tsx  
	<ul className={styles.listGroup}>
	```