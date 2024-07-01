interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <div className="divStyle">
      <h1>{text}</h1>
    </div>
  );
}

export default Title;
