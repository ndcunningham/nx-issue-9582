import { MyButtonProps } from './my-button-props';
import styles from './my-button.module.css';

export function MyButton({ caption }: MyButtonProps) {
  return (
    <button className={styles['my-button']}>
      {caption}
    </button>
  );
}

export default MyButton;
