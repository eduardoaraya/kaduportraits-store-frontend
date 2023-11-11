import Image from "next/image";

export function Banner() {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center">
        <figure
          className="w-full h-[800px]"
          style={{
            background: `#222 no-repeat center url(https://kaduportraits.s3.sa-east-1.amazonaws.com/public/IMG_4620.jpg)`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></figure>
      </div>
    </>
  );
}
