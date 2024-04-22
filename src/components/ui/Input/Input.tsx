import React, {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";
import cn from "classnames";

import styles from "./Input.module.scss";
import { FormMessage } from "../FormMessage/FormMessage";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  className?: string;
}

const InputInner = (
  props: IInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const {
    value,
    label,
    errorMessage,
    disabled,
    icon,
    className,
    onChange,
    onBlur,
    onFocus,
    ...otherProps
  } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  return (
    <FormMessage message={errorMessage}>
      <div
        className={cn(styles.root, className, {
          [styles.disabled]: disabled,
        })}
      >
        <label
          className={cn(styles.label, {
            [styles.moveLabel]: !!value,
            [styles.focused]: focused,
          })}
        >
          {label}
        </label>
        <input
          {...otherProps}
          ref={ref}
          className={cn(styles.input, {
            [styles.error]: !!errorMessage,
            [styles.withIcon]: !!icon,
          })}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          value={value}
        />
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
    </FormMessage>
  );
};

export const Input = React.forwardRef(InputInner);
