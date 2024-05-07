interface HeadingProps {
  title: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, center }) => {
  return (
    <div className={center ? "text-center": "text-start"}>
      <span className="font-bold text-2xl">{title}</span>
    </div>
  );
};

export default Heading;
