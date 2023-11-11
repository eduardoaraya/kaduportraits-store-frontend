export function Footer(): JSX.Element {
  return (
    <footer className="h-[150px]">
      <div className="container m-auto h-full p-5 md:px-20">
        <div className="h-full pt-10 flex justify-between items-end text-secondary">
          <span>kaduportraits.com.br</span>
          <span>Todos os direitos reservados - {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
