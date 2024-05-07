const FormWrap = ({children} : {children: React.ReactNode}) => {
    return ( 
        <div className="
        min-h-fit
        h-full
        flex
        items-center
        justify-center
        py-16
        w-full
        ">
            <div className="
            max-w-[650px]
            w-full
            flex
            flex-col
            gap-6
            items-center
            shadow-2xl
            shadow-black/50
            rounded-md
            p-12
            md:p-18
            ">
                {children}
            </div>
        </div>
     );
}
 
export default FormWrap;