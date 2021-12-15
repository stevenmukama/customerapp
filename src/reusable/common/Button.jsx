import { CButton } from '@coreui/react';
import React from 'react';

const Button = ({color,onClick, text,type,}) => {
    return (
      <>
        <CButton type={type} color={color} onClick={onClick} block>
          {text}
        </CButton>
      </>
    );
};

export default Button;