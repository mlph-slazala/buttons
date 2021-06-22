import React from 'react';

export interface TCButtonProps {
  /**
   * Button Type
   */
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'tertiary'
    | 'tertiary-icon'
    | 'submit'
    | 'primary-icon'
    | 'secondary-icon';

  /**
   * How large should the button be?
   */
  size?: 'sm' | 'lg';
  /**
   * Button contents
   */
  children?: any;
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Outline button
   */
  outline?: boolean;
  /**
   * Active state
   */
  active?: boolean;
  /**
   * Disable State
   */
  disabled?: boolean;
  /**
   * Button block / full-width
   */
  fullWidth?: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
  /**
   * ClassName
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const TCButton: React.FC<TCButtonProps> = ({
  type,
  size,
  children = '',
  outline,
  active,
  disabled,
  fullWidth,
  className,
  onClick,
  ...props
}: TCButtonProps) => {
  const width = fullWidth ? 'btn-block' : '';
  const buttonStyle = type === 'submit' ? 'btn-primary' : `btn-${type}`;
  const buttonSize = size ? `btn-${size}` : '';
  const buttonOutline =
    type === 'secondary' ||
    type === 'tertiary' ||
    type === 'tertiary-icon' ||
    outline
      ? 'btn-outline-primary'
      : '';
  const buttonActive = active ? 'active' : disabled && 'disabled';

  const classString = `${width} ${buttonStyle} ${buttonSize} ${buttonOutline} ${buttonActive} tc-btn btn className`;

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={classString}
      onClick={onClick}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </button>
  );
};

export default TCButton;
