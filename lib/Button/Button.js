import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';

import Loader from '../_icons/Loader';

const Button = ({ children, label, onClick, loading, disabled, primary, secondary, theme, size, icon, loader}) => {

  const sizeStyles = {
    'large': {
      padding: '0 15px',
      fontSize: '24px',
      lineHeight: '38px'
    },
    'medium': {
      padding: '0 10px',
      fontSize: '16px',
      lineHeight: '30px'
    },
    'small': {
      padding: '0 5px',
      fontSize: '14px',
      lineHeight: '28px'
    }
  }

  const themeStyles = {
    'solid': {
      background: primary,
      color: secondary,
      boxShadow: `inset 0 0 0 0 ${secondary}`
    },
    'outline': {
      background: secondary,
      color: primary,
      boxShadow: `inset 0 0 0 1px ${primary}`
    }
  }

  const backgroundColor = Color(themeStyles[theme].background);

  const Btn = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 2px;
    color: ${themeStyles[theme].color};
    background: ${themeStyles[theme].background};
    box-shadow: ${themeStyles[theme].boxShadow};
    padding: ${sizeStyles[size].padding};
    font-size: ${sizeStyles[size].fontSize};
    line-height: ${sizeStyles[size].lineHeight};
    transition: all 300ms;
    outline: none;

    &:hover {
      background: ${backgroundColor.light() ? backgroundColor.darken(0.05).string() : backgroundColor.lighten(0.1).string()};
    }
    &:active {
      background: ${backgroundColor.darken(0.2).string()};
    }
  `;

  const Icon = styled.span`
    margin-right: ${label || children ? '5px' : 0};
    width: 20px;
    line-height: 20px;
    display: inline-block;
  `;

  return (
    <Btn onClick={onClick}>
      <Loader visible={loading} {...loader} color={theme == 'solid' ? secondary : primary} style={{'marginRight': label || children ? '5px' : 0}} />
      {icon && !loading ? <Icon>{icon}</Icon> : null}
      {label}
      {children}
    </Btn>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.string,
  secondary: PropTypes.string,
  theme: PropTypes.oneOf([
    'solid',
    'outline'
  ]),
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small'
  ]),
  icon: PropTypes.node,
  loader: PropTypes.shape({
    type: PropTypes.oneOf([
      'rolling'
    ]),
    size: PropTypes.number,
    stroke: PropTypes.number
  })
};

Button.defaultProps = {
    children: null,
    label: null,
    onClick: f => f,
    loading: false,
    disabled: false,
    primary: '#27ae60',
    secondary: '#fff',
    theme: 'solid',
    size: 'medium',
    icon: null,
    loader: {
      type: 'rolling',
      size: 20,
      stroke: 10
    }
}

export default Button;
