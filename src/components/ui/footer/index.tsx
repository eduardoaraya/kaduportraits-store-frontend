export function Footer(): JSX.Element {
  return (
    <footer className="h-[250px]">
      <div className="container m-auto h-full">
        <div className="h-full py-10 flex justify-between items-end text-secondary text-sm">
          <span>kaduportraits.com.br</span>
          <span>Todos os direitos reservados - {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
