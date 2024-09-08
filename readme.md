# CSS Modules
- A CSS module is a CSS file in, which all class names are scoped locally, just like a JavaScript module. So they allow us to use the same CSS class name in different files, without worrying about name clashes.
- First we need to rename file to convert existing CSS file to CSS module. Format is `"FileName".modules.css`
  - ex- `ListGroup.css ---> ListGroup.modules.css`
- Then need to update style sheet reference in the `ListGroup.tsx`
	- In plain CSS - `import './ListGroup.css'`
	- In CSS modules - `import styles from './ListGroup.modules.css'`
- Referencing CSS module is just like importing component/object.
- Now `styles` is just a regular JS object that has all CSS classes defined in `ListGroup.modules.css`. Therefore every CSS class defined here is going to be a part of `styles` object.
- Apply CSS class name within `{ }` instead of `" "` like rendering dynamic content in JSX.
  ![](assets/Pasted%20image%2020240908145939.png)
- Now we are getting compiler error due to having hyphen(`-`) in CSS class name. In JS `-` isn't valid property name therefore we couldn't access this property using using dot(`.`) notation instead we have to use square bracket.
	``` tsx 
	<ul className={styles['list-group']}>
	```
- So now we couldn't see any CSS clashes. How does it work?
  ![](assets/Pasted%20image%2020240908153129.png)
  - So here we couldn't see `list-group` class name. It's encoded. As part of bundling application Vite takes all the CSS modules and create unique class. So it will prevent CSS clashing.