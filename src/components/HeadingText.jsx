const HeadingText = ({title}) => {
    return (
        <div className="uppercase italic text-6xl max-md:text-4xl text-center mt-36 text-transparent font-bold hover:text-black z-50 transition-colors h-fit duration-1000" style={{WebkitTextStroke:"1px black"}}>{title}.</div>

    );
}
 
export default HeadingText;