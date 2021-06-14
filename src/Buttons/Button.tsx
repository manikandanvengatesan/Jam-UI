import React from 'react';

type TButtonType = 'primary' | 'secondary' | 'tertiary';

type TButtonSize = 'small' | 'medium' | 'large';

export interface IButtonProps {
  /*
    Name of the button
   */
  label: string;
  /*
    Size of the button
   */
  size?: TButtonSize;
  /*
    Type of the button
   */
  type?: TButtonType;
  /*
    Event to trigger onClicking the button
   */
  onClick?: () => void;
}

export const Button = (props: IButtonProps): JSX.Element => {
  const { label, onClick } = props;
  return (
    <div>
      <button onClick={onClick}>{label || 'Button'}</button>
    </div>
  );
};
