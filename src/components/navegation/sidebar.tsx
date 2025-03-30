const SidebarCard = () => {
  return (
    <div className={`bg-white p-5 shadow-md shadow-purple-200/50 rounded-md`}>
      <ul className="w-full flex flex-col gap-2">
        <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
          <button className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
            Inventario de venta
          </button>
        </li>
        <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
          <button className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
            Invemtario de Celulares
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidebarCard;
