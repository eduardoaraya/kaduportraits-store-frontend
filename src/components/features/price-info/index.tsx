export function PriceInfo(): JSX.Element {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-10 md:gap-10 leading-8">
        <div className="col-span-3 flex flex-col justify-center items-center md:h-auto rounded-md bg-highlight p-16">
          <p className="font-medium text-secondary text-2xl md:mb-5">🌿</p>
          <p className="uppercase font-semibold text-primary">Planta</p>
          <p className="text-primary font-body text-md p-5 text-center">
            Representa aromas naturais, terrosos e calmantes. Destaca as
            fragrâncias frescas e verdes que trazem uma sensação de
            tranquilidade e conexão com a natureza.
          </p>
        </div>
        <div className="col-span-3 flex flex-col justify-center items-center md:h-auto rounded-md bg-highlight p-16">
          <p className="font-medium text-secondary text-2xl md:mb-5">🌹</p>
          <p className="uppercase font-semibold text-primary">A Rosa</p>
          <p className="text-primary font-body text-md p-5 text-center">
            Simboliza elegância, romance e beleza atemporal. Reflete as
            fragrâncias florais clássicas e sofisticadas que capturam a essência
            das rosas em plena floração.
          </p>
        </div>
        <div className="col-span-3 flex flex-col justify-center items-center md:h-auto rounded-md bg-highlight p-16">
          <p className="font-medium text-secondary text-2xl md:mb-5">🌞</p>
          <p className="uppercase font-semibold text-primary">Sol</p>
          <p className="text-primary font-body text-md p-5 text-center">
            Calor, energia e radiância. Ele incorpora as fragrâncias vibrantes e
            revigorantes que lembram dias ensolarados, estimulando os sentidos
            com notas alegres e brilhantes.
          </p>
        </div>
        <div className="col-span-3 flex flex-col justify-center items-center md:h-auto rounded-md bg-highlight p-16">
          <p className="font-medium text-secondary text-2xl md:mb-5">❄️</p>
          <p className="uppercase font-semibold text-primary">Neve</p>
          <p className="text-primary font-body text-md p-5 text-center">
            Representa as fragrâncias frescas, revigorantes e refrescantes
            frequentemente associadas ao inverno e à pureza do gelo. Evoca a
            sensação de uma paisagem nevada, trazendo uma sensação de pureza e
            tranquilidade.
          </p>
        </div>
      </div>
    </>
  );
}
