import { categories } from "../data/categories"


export default function Form() {


    return (
        <form action="" className="space-y-5 bg-white shadow p-5 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    name="" id="category">
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>


            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                <input
                    id="activity"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Bicicleta"
                />
            </div>


            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Calorias:</label>
                <input
                    id="activity"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. 300 o 600"
                />
            </div>

            <input type="submit"
             className="bg-gray-800 hover:bg-gray-900 w-full 
             p-2 font-bold uppercase text-white cursor-pointer"
             value='Guardar Comida o Guardar Ejercicio'
             />


        </form>
    )
}
