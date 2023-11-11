export function PriceInfo(): JSX.Element {
  return (
    <>
      <div className="flex gap-10 md:gap-20 flex-col md:flex-row leading-8">
        <div className="w-full flex flex-col justify-center items-center h-[150px] md:h-auto rounded-md">
          <p className="uppercase font-bold text-primary text-2xl md:mb-5">
            R$ 6,99
          </p>
          <p className="uppercase font-bold text-tertiary">Qualidade Baixa</p>
          <p className="text-tertiary text-center">
            Não aconselhado editar ou adicionar filtro a imagem
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center h-[150px] md:h-auto rounded-md">
          <p className="uppercase font-bold text-primary text-2xl md:mb-5">
            R$ 9,99
          </p>
          <p className="uppercase font-bold text-tertiary">Qualidade Média</p>
          <p className="text-tertiary text-center">
            Ideal para fazer edições e postagens nas redes sociais.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center h-[150px] md:h-auto rounded-md">
          <p className="uppercase font-bold text-primary text-2xl md:mb-5">
            R$ 14,99
          </p>
          <p className="uppercase font-bold text-tertiary">Qualidade Alta</p>
          <p className="text-tertiary text-center">
            Ideal para impressões. Imagem com muitos detalhes.
          </p>
        </div>
      </div>
    </>
  );
}
