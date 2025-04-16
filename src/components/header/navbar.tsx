import { IconNote, IconSmartPhone } from "../imgs/imgs";

const Navbar = () => {
  return (
    <div className="h-full navbar">
      <ul className="list">
        <li className="">
          <a className="element items-center label" href="/product">
            <IconNote />
            Productos
          </a>
        </li>
        <li className="">
          <a className="element label" href="/technicalservice">
            <IconSmartPhone />
            Servicio Tecnico
          </a>
        </li>
      </ul>
      <div className="separator" />
      <ul className="list">
        <li className="element">
          <svg
            className="lucide lucide-users-round"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="#7e8590"
            fill="none"
            viewBox="0 0 24 24"
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 21a8 8 0 0 0-16 0" />
            <circle r={5} cy={8} cx={10} />
            <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
          </svg>
          <p className="label">Tecnicos/Vendedores</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
