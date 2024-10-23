import { categories } from "../data/categories"
import { useState } from "react"

export default function Form() {

    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })

    }


    return (
        <form action="" className="space-y-5 bg-white shadow p-5 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    name="" id="category" value={activity.category}
                    onChange={handleChange}
                    >
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
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>


            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    id="calories"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. 300 o 600"
                    value={activity.calories}
                    onChange={handleChange}
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
