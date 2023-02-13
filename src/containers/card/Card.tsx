import React, { FC, ReactNode } from "react";
import "./card.css";

interface CardProps {
  children: ReactNode;
  className: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
