import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

interface HeadingProps {
    title: string;
    center?: boolean;
  }
  
  const NotFound: React.FC<HeadingProps> = ({ title }) => {
    return (
      <div className="flex flex-col justify-center items-center text-center py-44">
        <div className="text-2xl">{title}</div>
        <Link
            href={"/"}
            className="text-black flex items-center gap-1 mt-2 hover:text-red-600"
          >
            <MdArrowBack />
            <span>Kembali ke Home</span>
          </Link>
      </div>
      
    );
  };
  
  export default NotFound;
  