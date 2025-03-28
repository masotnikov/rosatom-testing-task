import styles from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
  return (
    <button className={styles.button} {...props}>{children}</button>
  )
}

export default MyButton;