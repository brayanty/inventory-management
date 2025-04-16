import { useEffect, useState } from "react";
import { useSearchStore } from "../store/filters";
import { useCategoryListStore } from "../store/category";
import Modal from "../common/Modal";

interface TechnicalServiceEntry {
  id: string;
  client: string;
  device: string;
  status: string;
  entryDate: string;
  exitDate: string | null;
}

const TechnicalService = () => {
  const [isFormAdmission, setisFormAdmission] = useState<boolean>(false);

  const { categorySelect, setCategoryList } = useCategoryListStore();

  const [devices, setDevices] = useState<TechnicalServiceEntry[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<
    TechnicalServiceEntry[]
  >([]);

  const [formData, setFormData] = useState({ client: "", device: "" });
  const { search, setSearch } = useSearchStore();

  useEffect(() => {
    const fakeCategories = [
      { category: "Todos" },
      { category: "En reparación" },
      { category: "Reparado" },
      { category: "No reparado" },
    ];
    setCategoryList(fakeCategories);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleAddDevice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.client || !formData.device) return;

    const newDevice: TechnicalServiceEntry = {
      id: Date.now().toString(),
      client: formData.client,
      device: formData.device,
      status: "En reparación",
      entryDate: new Date().toISOString().split("T")[0],
      exitDate: null,
    };

    setDevices((prev) => [...prev, newDevice]);
    setFormData({ client: "", device: "" });
  };

  const handleStatusChange = (
    id: string,
    status: "Reparado" | "No reparado"
  ) => {
    setDevices((prev) =>
      prev.map((dev) =>
        dev.id === id
          ? {
              ...dev,
              status,
              exitDate: new Date().toISOString().split("T")[0],
            }
          : dev
      )
    );
  };
  useEffect(() => {
    const stored = localStorage.getItem("devices");
    if (stored) setDevices(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("devices", JSON.stringify(devices));
  }, [devices]);

  // Filtro aplicado a la lista de dispositivos
  useEffect(() => {
    setFilteredDevices(
      devices.filter((d) => {
        const matchesSearch =
          d.client.toLowerCase().includes(search.toLowerCase()) ||
          d.device.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
          categorySelect === "Todos" || d.status === categorySelect;

        return matchesSearch && matchesStatus;
      })
    );
  }, [categorySelect, devices, search]);

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Servicio Técnico</h2>
      <button
        onClick={() => setisFormAdmission(true)}
        type="button"
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Formulario de Ingreso
      </button>

      {/* Búsqueda y filtro */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar por cliente o dispositivo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-gray-700 w-full md:w-1/2"
        />
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300 border-collapse">
          <thead className="bg-gray-700 text-xs uppercase">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Dispositivo</th>
              <th className="p-2">Estado</th>
              <th className="p-2">Ingreso</th>
              <th className="p-2">Salida</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((d) => (
              <tr key={d.id} className="border-b border-gray-600">
                <td className="p-2">{d.client}</td>
                <td className="p-2">{d.device}</td>
                <td className="p-2">{d.status}</td>
                <td className="p-2">{d.entryDate}</td>
                <td className="p-2">{d.exitDate || "-"}</td>
                <td className="p-2">
                  {d.status === "En reparación" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleStatusChange(d.id, "Reparado")}
                        className="bg-green-600 px-2 py-1 rounded hover:bg-green-700"
                      >
                        Reparado
                      </button>
                      <button
                        onClick={() => handleStatusChange(d.id, "No reparado")}
                        className="bg-red-600 px-2 py-1 rounded hover:bg-red-700"
                      >
                        No reparado
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {filteredDevices.length === 0 && (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No se encontraron resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Formulario de ingreso */}
      <Modal
        title="Fomulario de Ingreso"
        isOpen={isFormAdmission}
        onClose={() => setisFormAdmission(false)}
      >
        <form
          onSubmit={handleAddDevice}
          className="h-full w-full text-black flex flex-col justify-center items-center gap-4"
        >
          <label className="flex flex-col" htmlFor="client">
            <span>Cliente: </span>
            <input
              type="text"
              name="client"
              id="client"
              value={formData.client}
              onChange={handleInputChange}
              placeholder="Petrolino Sinforoso"
              className="p-2 rounded"
            />
          </label>
          <label className="flex flex-col" htmlFor="device">
            {" "}
            <span>Dispositivo: </span>
            <input
              type="text"
              name="device"
              id="device"
              value={formData.device}
              onChange={handleInputChange}
              placeholder="Iphone 14 Pro Max"
              className="p-2 rounded"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Registrar ingreso
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default TechnicalService;
