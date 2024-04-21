import "./App.css";
import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
  useId,
  useContext,
  useReducer,
  createContext,
} from "react";
import axios from "axios";
import { wait } from "./utils";

function Estado() {
  const [state, setState] = useState("hola");

  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setState(state === "hola" ? "adios" : "hola");
        }}
      >
        Cambiar
      </button>
    </div>
  );
}

function Efecto1() {
  const [state, setState] = useState(0);

  useEffect(() => {
    document.title = `Hola, esto es el título! ${state}`;

    return () => {};
  }, [state]);

  return (
    <div>
      <h1>useEffect {state}</h1>

      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  );
}

function Efecto2() {
  const [contador, setContador] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setContador((prevValue) => prevValue + 1);
      console.log("setInterval");
    }, 1000);

    return () => {
      // limpieza
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log(contador);
  }, [contador]);

  return (
    <div>
      <h1>contador {contador}</h1>
    </div>
  );
}

const API_URL = "https://rickandmortyapi.com/api/character/?page=1";
function Peticiones() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const uniqueId = useId();

  useEffect(() => {
    const controller = new AbortController();

    wait(3000).finally(() => {
      axios
        .get(API_URL, {
          signal: controller.signal,
        })
        .then((response) => {
          console.log(response.data.results);
          setData(response.data.results);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {isLoading ? <p>Cargando...</p> : null}

      {data.map(({ id, image, name, status, species, gender }) => {
        return (
          <div key={`${uniqueId}-${id}`}>
            <p>{name}</p>
            <p>{status}</p>
            <img src={image} alt={name} />
            <p>{species}</p>
            <p>{gender}</p>
          </div>
        );
      })}
    </div>
  );
}

function EjemploRef() {
  const ref = useRef(null);

  function obtenerValor() {
    console.log(ref.current.value);
  }

  return (
    <div>
      <input type="text" ref={ref} />

      <button onClick={obtenerValor}>Click me</button>
    </div>
  );
}

function EfectoLayout() {
  // tiene acceso antes de que se pinte el html o componente
  useEffect(() => {
    console.log("useEffect");
  }, []);

  // tiene acceso desde que se pinta el html o componente
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return <div>useLayoutEffect</div>;
}

function Callback1() {
  const [contador, setContador] = useState(1);
  const [resultado, setResultado] = useState(0);

  const funcionPesada = useCallback(() => {
    const oldDate = Date.now();

    for (let i = 0; i < contador; i++) {
      for (let j = 0; j < 1000000; j++) {
        setResultado(j + i);
      }
    }

    setContador(contador + 1);

    const curretDate = Date.now();

    console.log((curretDate - oldDate) / 1000);
  }, [contador]);

  return (
    <div>
      <p>iterador: {contador}</p>
      <p>Resultado: {resultado}</p>
      <button onClick={funcionPesada}>Click me</button>
    </div>
  );
}

function Callback2() {
  const [resultado, setResultado] = useState(0);
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const calcular = useCallback(() => {
    let sum = 0;

    for (const numero of numeros) {
      sum += numero * numero;
    }

    setResultado(sum);
  }, [numeros]);

  return (
    <div>
      <p>La suma cuadrada es: {resultado}</p>
      <button onClick={calcular}>Click</button>
    </div>
  );
}

function Memo() {
  const numero = useMemo(() => 2 * 100000, []);

  return <div>memo: {numero}</div>;
}

function ID() {
  const uniqueId1 = useId();
  const uniqueId2 = useId();

  const _uniqueId = useMemo(
    () => Date.now().toString(36) + Math.random().toString(36).substr(2),
    []
  );

  return (
    <div>
      <p>useId 1: {uniqueId1}</p>
      <p>useId 2: {uniqueId2}</p>

      <p>generateId: {_uniqueId}</p>
    </div>
  );
}

const INCREMENTAR = "INCREMENTAR";
const DECREMENTAR = "DECREMENTAR";

const ContadorContext = createContext();

const contadorReducer = (state, action) => {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;

    case DECREMENTAR:
      return state - 1;

    default:
      console.log("no se encontró la acción");
      return;
  }
};

const ContadorProvider = ({ children }) => {
  const [count, dispatch] = useReducer(contadorReducer, 0);

  return (
    <ContadorContext.Provider value={{ count, dispatch }}>
      {children}
    </ContadorContext.Provider>
  );
};

function MostrarContadorComponente() {
  const { count } = useContext(ContadorContext);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

function ContadorControles() {
  const { dispatch } = useContext(ContadorContext);

  return (
    <div>
      <MostrarContadorComponente />
      <button
        onClick={() => {
          dispatch({ type: INCREMENTAR });
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch({ type: DECREMENTAR });
        }}
      >
        -
      </button>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <ContadorProvider>
      {/* <Estado /> */}
      {/* <Efecto1 /> */}

      {/* {visible ? <Efecto2 /> : null} */}

      {/* {visible ? <Peticiones /> : null} */}

      {/* <EjemploRef /> */}

      {/* <EfectoLayout /> */}

      {/* <Callback1 /> */}

      {/* <Callback2 /> */}

      {/* <Memo /> */}

      {/* <ID /> */}

      <ContadorControles />

      <ContadorControles />

      {/* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "Ocultar" : "Mostrar"}
      </button> */}
    </ContadorProvider>
  );
}

export default App;
