import Form from "./components/Form"
import { useReducer, useEffect, useMemo } from "react"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"




function App() {


  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])


  const canRestartApp = () => useMemo(() => state.activities.length, [state.activities])

  return (
    <>

      <header className=" bg-blue-800 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>

          <button
            className="bg-gray-700 hover:bg-gray-900 font-bold p-2 
          uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: 'restart-app' })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className=" bg-blue-600 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form

            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      <section className="p-10 max-w-4xl mx-auto">
        <ActivityList

          activities={state.activities}
          dispatch={dispatch}

        />
      </section>

    </>
  )
}

export default App
