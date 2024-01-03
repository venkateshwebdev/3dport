import HeadingText from "./components/HeadingText";
const Contact = () => {
    return (
        <div id="Contact" className="h-screen w-full snap-center flex justify-center" onFocus={()=>{console.log("i am on focus")}} >
            <HeadingText title={"Contact me"} />
        </div>
    );
}
 
export default Contact;