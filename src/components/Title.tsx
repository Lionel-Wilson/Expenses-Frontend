// src/components/Title.tsx
import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="divStyle">
      <h1>{text}</h1>
    </div>
  );
};

export default Title;
