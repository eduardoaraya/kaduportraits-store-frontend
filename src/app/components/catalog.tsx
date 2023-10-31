import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Content = {
  Key: string;
  Size: number;
};

type Catalog = {
  data: Content[];
  url: string;
};

export default function Catalog({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {content.Catalog.filter((photo: Content) => photo.Size > 0).map(
        (photo: Content) => (
          <Image
            alt="logo"
            width="400"
            height="100"
            src={content.url + photo.Key}
          ></Image>
        )
      )}
    </div>
  );
}

export const getStaticProps = (async (context) => {
  const res = await fetch(
    "https://5v6kiswwi4.execute-api.sa-east-1.amazonaws.com/v1/getCatalog"
  );
  const content = await res.json();
  return { props: { content } };
}) satisfies GetStaticProps<{
  content: Catalog;
}>;
