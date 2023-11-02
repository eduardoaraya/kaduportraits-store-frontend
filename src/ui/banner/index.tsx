import Image from "next/image";

export function Banner() {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center mb-20 bg-magenta-500">
        <img
          src="https://kaduportraits.s3.sa-east-1.amazonaws.com/public/IMG_4385.jpg"
          alt="Banner: bird flying"
        />
      </div>
    </>
  );
}
