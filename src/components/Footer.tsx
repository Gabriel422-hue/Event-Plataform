import { LogoRocket } from "./LogoRocket";



export function Footer() {
  return (
    <footer className="py-6 border-t border-gray-600 flex justify-between items-center">
      <div className=" px-6 flex gap-4 items-center">
        <LogoRocket/> 
        <p className=" text-gray-300 text-sm">
          Rocketseat - Todos os direitos reservados
        </p>
      </div>
      <a className=" py-8 px-3 m-0  text-gray-300 text-sm " href="#">
        Políticas e privacidade
      </a>
    </footer>
  );
}
