import Image from "next/image";

export async function Welcome() {
  return (
    <div className=" text-secondary">
      <div className="flex leading-8 md:flex-row flex-col">
        <div className="p-3">
          <p className="mt-3">
            Bem-vindo ao nosso mundo de paixão pelo esporte e fotografia! É um
            prazer receber você em nosso site de venda de fotos esportivas, onde
            a energia e a emoção dos momentos esportivos ganham vida através das
            lentes de nossos talentosos fotógrafos.
          </p>
          <p className="mt-3">
            Nosso objetivo é capturar a essência e a beleza do esporte,
            congelando instantes incríveis que celebram o espírito competitivo,
            a dedicação e a superação. Se você é um apaixonado por esportes, um
            atleta em busca de inspiração, ou simplesmente alguém que aprecia a
            magia da fotografia esportiva, você está no lugar certo.
          </p>
          <p className="mt-3">
            Explore nossa vasta coleção de fotos esportivas que abrangem uma
            variedade de modalidades e eventos. Seja o futebol, basquete,
            corrida, natação, ou qualquer outro esporte, temos imagens que vão
            cativar a sua imaginação. Cada foto conta uma história, cada imagem
            captura um momento de triunfo, emoção e determinação.
          </p>
        </div>
        <div className="p-3">
          <p className="mt-3">
            Navegue, escolha e adquira as fotos que mais ressoam com você. Elas
            podem decorar suas paredes, inspirar seu dia a dia ou ser um
            presente perfeito para um entusiasta do esporte. Além disso, nosso
            processo de compra é simples e seguro, garantindo que você obtenha
            as fotos de alta qualidade que merece.
          </p>
          <p className="mt-3">
            Agradecemos por nos escolher como sua fonte de imagens esportivas
            excepcionais. Junte-se a nós na celebração do esporte e na
            apreciação da fotografia que o torna eterno. Seja bem-vindo e comece
            sua jornada pela incrível coleção de fotos esportivas que temos para
            oferecer.
          </p>
          <p className="mt-3">
            Obrigado por sua visita, e que sua paixão pelo esporte seja sempre
            acompanhada de imagens memoráveis! Comemore o esporte, celebre a
            fotografia, e aproveite sua estadia em nosso site.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ShortWelcome() {
  return (
    <div className="w-full flex flex-col">
      <div className="container m-auto w-full">
        <div className="w-full h-[300px] bg-secondary"></div>
      </div>
      <div className="container m-auto w-full lg:my-[75px]">
        <div className="flex flex-row justify-center items-center sm:p-5">
          <h1 className="font-body text-4xl lg:text-7xl text-primary text-center">
            Shiki
          </h1>
          <span className="font-body text-xl lg:text-4xl text-primary text-center ml-1">
            aromas
          </span>
        </div>
      </div>
    </div>
  );
}
