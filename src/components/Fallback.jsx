const FallbackForThree = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center text-white p-10">
      <div
        className="text-5xl italic text-transparent font-bold uppercase text-center flex flex-col"
        style={{ WebkitTextStroke: "1px white" }}
      >
        Venkatesh,<span>Web developer</span>
      </div>
      <p className="text-lg w-1/2 max-md:w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a soluta
        quisquam neque dolores, iure sit veniam asperiores eum ipsam distinctio
        aliquid ducimus cupiditate facere voluptas nisi adipisci, mollitia
        recusandae.
      </p>
      <p className="text-lg w-1/2 max-md:w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a soluta
        quisquam neque dolores, iure sit veniam asperiores eum ipsam distinctio
        aliquid ducimus cupiditate facere voluptas nisi adipisci, mollitia
        recusandae.
      </p>
    </div>
  );
};

export default FallbackForThree;
