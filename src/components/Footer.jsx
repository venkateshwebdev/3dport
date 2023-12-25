const Footer = () => {
  return (
    <div>
      <div
        className="text-2xl max-md:text-lg fixed left-5 bottom-5 font-bold flex gap-5 max-md:gap-2 items-center justify-between"
      >
        GI <span className="w-12 max-md:w-9 h-1 border-2 border-black"></span> IN
        <span className="w-12 h-1 max-md:w-9 border-2 border-black"></span> IG
      </div>
      <div className="fixed right-5 text-4xl max-md:lg font-bold bottom-5 text-transparent" style={{ WebkitTextStroke: "1px black" }}>'001</div>
    </div>
  );
};

export default Footer;
