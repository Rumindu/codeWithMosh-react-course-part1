# Exercise - Button component
- Create a Button component which can change Button text, color and it's functionality according to the props values. 

## Some important points
- set default value for button's color. so no need to specify the color every times in button's props.
  ``` tsx 
  //Button.tsx
  const Button = ({ btnColor = "primary" }: Props)
  ```
- Now even after remove `btnColor` prop in `App` component we can see default value in button. But also we have a compilation error.
  ![](assets/Pasted%20image%2020240901114024.png)
- To prevent that error we set `btnColor` prop optional using `?` in Prop's interface.
  ``` tsx
  //Button.tsx 
  interface Props {
    btnColor?: string;
  }
  ```
- To prevent passing invalid color as props
  ``` tsx
  //Button.tsx 
  interface Props {
    btnColor?: "primary" | "secondary" | "danger";
  }
  ```
  - so now we can only set `btnColor` property one of from these values
  