"use client";

import Container from "../../../components/utils/Container";


type Props = {
    price: {
        rangeFrom:number,
        rangeTo:number
    }
    setPrice: React.Dispatch<React.SetStateAction<{rangeFrom:number, rangeTo:number}>>
    // selectedCategories:string[]
    // setSelectedCategories:React.Dispatch<React.SetStateAction<string[]>>
};

const Filter = (props: Props) => {
  // const toggleCategory = (category:string) => {
  //   props.setSelectedCategories((prevCategories) => 
  //     prevCategories.includes(category)
  //   ? prevCategories.filter((c) => c !== category):
  //   [...prevCategories,category]
  //   )
  // }

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "rangeFrom" ? parseInt(e.target.value) : e.target.value;
    props.setPrice({
      ...props.price,
      [e.target.name]: value,
    });
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "rangeTo" ? parseInt(e.target.value) : e.target.value;
    props.setPrice({
      ...props.price,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <div className="border-b-[0.5px] pb-10">
        <div className="px-5 py-4 border-b-[0.5px] mb-5">
          <h1 className="text-neutral-800">Harga</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 px-5 overflow-hidden">
          <div>
            <label htmlFor="" className="text-[15px] opacity-75">
              Dari
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1">Rp</span>
              <input 
              type="number"
              className="w-[200px] outline-none border-[1px] border-black rounded px-2 text-center py-[2px]" 
              name="rangeFrom"
              onChange={handleMinChange} value={props.price.rangeFrom}
              
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 px-5 overflow-hidden">
          <div>
            <label htmlFor="" className="text-[15px] opacity-75">
              Sampai
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1">Rp</span>
              <input
               type="number" 
               className="w-[200px] outline-none border-[1px] border-black rounded px-2 text-center py-[2px]"
               name="rangeTo"
               onChange={handleMaxChange} value={props.price.rangeTo}
               />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
