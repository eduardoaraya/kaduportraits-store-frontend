export async function Welcome() {
  return (
    <div className="md:p-10 p-5 text-secondary">
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
    <div className="p-10 md:p-20 grid grid-cols-4 gap-10 bg-secondary shadow-md rounded-md">
      <div className="col-span-4 md:col-span-2 text-tertiary leading-8">
        <p className="mt-3">
          <span className="text-primary font-bold uppercase text-2xl">
            Bem-vindo
          </span>{" "}
          ao nosso mundo de paixão pelo esporte e fotografia!
        </p>
        <p className="mt-3">
          É um prazer receber você em nosso site de venda de fotos esportivas,
          <br /> onde a energia e a emoção dos momentos esportivos ganham vida
          <br /> através das lentes de nossos talentosos fotógrafos.
        </p>
      </div>
      <div className="col-span-4 md:col-span-2 text-tertiary leading-8">
        <p className="mt-3">
          Navegue, escolha e adquira as fotos que mais ressoam com você.
          <br />
          Elas podem decorar suas paredes, inspirar seu dia a dia ou ser um
          presente perfeito para um entusiasta do esporte.
          <br />
          Além disso, nosso processo de compra é simples e seguro, garantindo
          que você obtenha as fotos de alta qualidade que merece.
        </p>
      </div>
    </div>
  );
}
