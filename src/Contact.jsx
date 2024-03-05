import HeadingText from "./components/HeadingText";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="h-screen w-full relative snap-center flex flex-col  items-center justify-center p-5 transition-all"
    >
      {/* <HeadingText title={"CONTACT ME"} /> */}
      <div className="absolute right-5 bottom-5 text-2xl max-md:text-lg font-bold">#CONTACT ME</div>
    </div>
  );
};

export default Contact;
