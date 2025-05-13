import React from 'react';
import images from '../theme/imagesPath';

const Btn = ({
  children,
  onClick,
  rightIcon,
  padding,
  className,
  background,
  color,
  iconbackground,
  rightIconChildren,
  onMouseEnter,
  onMouseLeave,
  disabled
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${className} webBtn`}
      style={{
        color: color || "#fff",
        padding: padding,
        background: background || "linear-gradient(86.2deg, #2F98D0 8.59%, #47ADE3 89.8%)",
        border: "none",
        cursor: "pointer"
      }}
    >
      {children}
      {rightIcon && (
        <span
          className="btn-icon"
          style={{ backgroundColor: iconbackground || "#fff" }}
        >
          {
            rightIconChildren ? rightIconChildren : <img src={images.icon_top} alt="icon" />
          }

        </span>
      )}
    </button>
  );
};

export default Btn;
