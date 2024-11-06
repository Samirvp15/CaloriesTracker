
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useActivity } from "../hooks/useActivity"


export default function ActivityList() {

    const { state, dispatch, isEmptyActivities, categoryName } = useActivity()


    return (
        <>

            <h2 className="text-4xl font-bold text-center text-slate-600">
                Comida y Actividades
            </h2>

            {isEmptyActivities ? <p className="text-center my-5">No hay actividades aun ...</p> :

                state.activities.map(activity => (
                    <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 font-bold text-white px-10 py-2
                             ${activity.category === 1 ? 'bg-lime-400' : 'bg-orange-400'}`}>
                                {categoryName(+activity.category)}
                            </p>
                            <p className="text-2xl">{activity.name}</p>
                            <p className="font-black text-4xl text-lime-300">{activity.calories} <span>Calorias</span></p>
                        </div>



                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch({ type: "set-activeId", payload: { id: activity.id } })}
                            >
                                <PencilSquareIcon

                                    className="h-8 w-8 text-gray-700"
                                />
                            </button>

                            <button
                                onClick={() => dispatch({ type: "delete-activity", payload: { id: activity.id } })}
                            >
                                <XCircleIcon

                                    className="h-8 w-8 text-red-700"
                                />
                            </button>
                        </div>
                    </div>
                ))}

        </>
    )
}
