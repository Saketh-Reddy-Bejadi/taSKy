import "../App.css";

const BackGround = () => {
  return (
    <div
    className={`w-full h-screen fixed text-black  flex items-center justify-center`}
      
      style={{ textShadow: "1px 1px 10px   #632a7a" }}
    >
      <h1 className="text-[13vw] absolute left-[28%] top-[27%] font-serif">
        &ldquo;
      </h1>
      <h1 className="text-[13vw] tracking-tighter leading-none font-medium">
        taSKy
      </h1>
      <h1
        className="text-[13vw] absolute left-[66%] "
        style={{ textShadow: "1px 1px 10px   #632a7a" }}
      >
        .
      </h1>
    </div>
  );
};

export default BackGround;
