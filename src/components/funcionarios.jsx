import React from "react";
import { useAsyncValue, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import stylesFuncionarios from "../css/funcionarios.module.css";
import CrearNoticia from "./crearNoticia";
import CrearEvento from "./crearEvento";
import CrearDeporte from "./crearDeporte";
import CrearUsuario from "./crearUsuario";
import EditarUsuarios from "./editarUsuarios";
import AdminNoticias from "./adminNoticias";
import AdminDeportes from "./adminDeportes";
import AdminEventos from "./adminEventos";
import VerMasDeporte from "./VerMasDeporte";
import VerMasUsuario from "./VerMasUsuario";
import Consultas from "./consultas";
import Consulta from "./consulta";
import VerMasConsultas from "./VerMasConsultas";

function Funcionarios() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userRol = searchParams.get("userRol");
  if (userRol !== "administrador") {
    return (
      <>
        <h1 className="acces_N" style={{ textAlign: "center" }}>
          Acceso Denegado
        </h1>
      </>
    );
  }
  const [mostrarCrearDeporte, setMostrarCrearDeporte] = useState(true);
  const [mostrarCrearEvento, setMostrarCrearEvento] = useState(false);
  const [mostrarCrearNoticia, setMostrarCrearNoticia] = useState(false);
  const [mostrarUsuario, setMostrarUsuarios] = useState(false);
  const [mostrarConsulta, setMostrarConsulta] = useState(false);





    const handleNoticia = () => {
      setMostrarCrearDeporte(false);
      setMostrarCrearEvento(false);
      setMostrarCrearNoticia(!mostrarCrearNoticia);
      setMostrarUsuarios(false);
      setMostrarConsulta(false)
    }
    const handleEvento=()=>{
      setMostrarCrearDeporte(false);
      setMostrarCrearEvento(!mostrarCrearEvento);
      setMostrarCrearNoticia(false);
      setMostrarUsuarios(false);
      setMostrarConsulta(false)
    }
    const handleDeporte=()=>{
      setMostrarCrearDeporte(!mostrarCrearDeporte);
      setMostrarCrearEvento(false);
      setMostrarCrearNoticia(false);
      setMostrarUsuarios(false);
      setMostrarConsulta(false)
    }

    const handleUsuario=()=>{
      setMostrarCrearDeporte(false);
      setMostrarCrearEvento(false);
      setMostrarCrearNoticia(false);
      setMostrarUsuarios(!mostrarUsuario);
      setMostrarConsulta(false)
    }
    
    const handleConsulta=()=>{
      setMostrarCrearDeporte(false);
      setMostrarCrearEvento(false);
      setMostrarCrearNoticia(false);
      setMostrarUsuarios(false);
      setMostrarConsulta(!mostrarConsulta)
    }







    const [dataNoticia, setDataNoticia] = useState([]);
    const [dataDeporte, setDataDeporte] = useState([]);
    const [dataEvento, setDataEvento] = useState([]);
    const [dataUsuario, setDataUsuario] = useState([]);
    const [dataConsulta, setDataConsulta] = useState([]);

    useEffect(() => {
      fetch('http://localhost/archivos2/noticias/recibirNoticia.php')
        .then((response) => response.json())
        .then((dataNoticia) => setDataNoticia(dataNoticia))
        .catch((error) => console.error("Error al obtener los datos:", error));
    }, []);

    useEffect(() => {
      fetch('http://localhost/archivos2/deportes/recibirAdmin.php')
        .then((response) => response.json())
        .then((dataDeporte) => setDataDeporte(dataDeporte))
        .catch((error) => console.error("Error al obtener los datos:", error));
    }, []);

    useEffect(() => {
      fetch('http://localhost/archivos2/eventos/recibirAdmin.php')
        .then((response) => response.json())
        .then((dataEvento) => setDataEvento(dataEvento))
        .catch((error) => console.error("Error al obtener los datos:", error));
    }, []);

    useEffect(() => {
      fetch('http://localhost/archivos2/usuarios/recibirUsuario.php')
        .then((response) => response.json())
        .then((dataUsuario) => setDataUsuario(dataUsuario.usuario))
        .catch((error) => console.error("Error al obtener los datos:", error));
    }, []);

    useEffect(() => {
      fetch('http://localhost/archivos2/contacto/recibirContacto.php')
        .then((response) => response.json())
        .then((dataConsulta) => setDataConsulta(dataConsulta))
        .catch((error) => console.error("Error al obtener los datos:", error));
    }, []);






    const fetchNoticia = async () => {
      try {
        const response = await fetch('http://localhost/archivos2/noticias/recibirNoticia.php');
        if (response.ok) {
          const data = await response.json();
          setDataNoticia(data);
        } else {
          console.error('Error al obtener la noticia');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
  
    useEffect(() => {
      fetchNoticia();
    }, []);
    useEffect(() => {
      const intervalId = setInterval(fetchNoticia, 1000);
      return () => clearInterval(intervalId);
    }, []); 


    const fetchDeporte = async () => {
      try {
        const response = await fetch('http://localhost/archivos2/deportes/recibirAdmin.php');
        if (response.ok) {
          const data = await response.json();
          setDataDeporte(data);
        } else {
          console.error('Error al obtener del deporte');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
  
    useEffect(() => {
      fetchDeporte();
    }, []);
    useEffect(() => {
      const intervalId = setInterval(fetchDeporte, 1000);
      return () => clearInterval(intervalId);
    }, []); 
    

    const fetchEvento = async () => {
      try {
        const response = await fetch('http://localhost/archivos2/eventos/recibirAdmin.php');
        if (response.ok) {
          const data = await response.json();
          setDataEvento(data);
        } else {
          console.error('Error al obtener del evento');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    useEffect(() => {
      fetchEvento();
    }, []);
    useEffect(() => {
      const intervalId = setInterval(fetchEvento, 1000);
      return () => clearInterval(intervalId);
    }, []); 


    const fetchConsulta = async () => {
      try {
        const response = await fetch('http://localhost/archivos2/contacto/recibirContacto.php');
        if (response.ok) {
          const data = await response.json();
          setDataConsulta(data);
        } else {
          console.error('Error al obtener del evento');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    useEffect(() => {
      fetchConsulta();
    }, []);
    useEffect(() => {
      const intervalId = setInterval(fetchConsulta, 1000);
      return () => clearInterval(intervalId);
    }, []); 










    const [Id, setId] = useState('');
    const [Deporte, setDeporte] = useState('');
    const [Descripcion, setDescripcion] = useState('');
    const [Fecha, setFecha] = useState('');
    const [Img, setImg] = useState('');
    const [Localidad, setLocalidad] = useState('');
    const [Ubicacion, setUbicacion] = useState('');
    const [Option1, setOption1] = useState('');

    const InfoDeporteModal = (Id, Deporte, Descripcion, Fecha, Localidad, Img, Ubicacion, Option1) =>{
      setId(Id);
      setDeporte(Deporte);
      setDescripcion(Descripcion);
      setFecha(Fecha);
      setLocalidad(Localidad);
      setImg(Img);
      setUbicacion(Ubicacion)
      setOption1(Option1);


      toggleLogin()
    }



    const [CI, setCI] = useState('');
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Nacimiento, setNacimiento] = useState('');
    const [Sexo, setSexo] = useState('');
    const [CedulaFoto, setCedulaFoto] = useState('');
    const [CarnetFoto, setCarnetFoto] = useState('');
    const [Domicilio, setDomicilio] = useState('');
    const [Celular, setCelular] = useState('');
    const [Asistencia, setAsistencia] = useState('');
    const [AsistenciaNombre, setAsistenciaNombre] = useState('');
    const [Diabetes, setDiabetes] = useState('');
    const [Hipertension, setHipertension] = useState('');
    const [Asma, setAsma] = useState('');
    const [Alergias, setAlergias] = useState('');
    const [Fracturas, setFracturas] = useState('');
    const [Otros, setOtros] = useState('');
    const [Lentes, setLentes] = useState('');
    const [TipoLentes, setTipoLentes] = useState('');
    const [NombreTutor, setNombreTutor] = useState('');
    const [RolTutor, setRolTutor] = useState('');
    const [Lugar, setLugar] = useState('');
    const [FechaUsuario, setFechaUsuario] = useState('');
    const [CITutor, setCITutor] = useState('');
    const [DeporteId, setDeporteId] = useState('');
    const [deporte, setdeporte] = useState('');



const InfoUsuarioModal = (CI, Nombre, Apellido, Nacimiento, Sexo, CedulaFoto, CarnetFoto, Domicilio, Celular, Asistencia, AsistenciaNombre, Diabetes,
  Hipertension, Asma, Alergias, Fracturas, Otros, Lentes, TipoLentes, NombreTutor, RolTutor, Lugar, FechaUsuario, CITutor,DeporteId,deporte)=>{

    setCI(CI);
    setNombre(Nombre)
    setApellido(Apellido);
    setNacimiento(Nacimiento);
    setSexo(Sexo);
    setCedulaFoto(CedulaFoto);
    setCarnetFoto(CarnetFoto);
    setDomicilio(Domicilio);
    setCelular(Celular);
    setAsistencia(Asistencia);
    setAsistenciaNombre(AsistenciaNombre);
    setDiabetes(Diabetes);
    setHipertension(Hipertension);
    setAsma(Asma);
    setAlergias(Alergias);
    setFracturas(Fracturas);
    setOtros(Otros);
    setLentes(Lentes);
    setTipoLentes(TipoLentes);
    setNombreTutor(NombreTutor);
    setRolTutor(RolTutor);
    setLugar(Lugar);
    setFechaUsuario(FechaUsuario);
    setCITutor(CITutor);
    setDeporteId(DeporteId);
    setdeporte(deporte);


  toggleUser()

}




const [nombreConsulta, setNombreConsulta] =useState ('')
const [emailConsulta, setEmailConsulta] = useState ('');
const [telefonoConsulta, setTelefonoConsulta] = useState ('');
const [asuntoConsulta, setAsuntoConsulta] = useState ('');
const [mensajeConsulta, setMensajeConsulta] = useState ('');


const infoConsulta = ( nombreConsulta, emailConsulta, telefonoConsulta, asuntoConsulta, mensajeConsulta) => {
  
  setNombreConsulta(nombreConsulta);
  setEmailConsulta(emailConsulta);
  setTelefonoConsulta(telefonoConsulta);
  setAsuntoConsulta(asuntoConsulta);
  setMensajeConsulta(mensajeConsulta);

  toggleConsulta()
}




    const [showModal, setshowModal] = useState(false);

    const toggleLogin = () => {
      setshowModal((prevshowModal) => !prevshowModal);
    };


    const [showModalUser, setshowModalUser] = useState(false);

    const toggleUser = () => {
      setshowModalUser((prevshowModalUser) => !prevshowModalUser);
    };


    const [showConsulta, setShowConsulta] = useState(false);

    const toggleConsulta = ( ) =>{
      setShowConsulta((prevshowConsulta) => !prevshowConsulta)

    }




    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        toggleUser();
      }
    });


  return (
    <>
    




    <div className={`${stylesFuncionarios.modal} ${showModal ? `${stylesFuncionarios.show}` : ``}`} id="algo">

        {
          <VerMasDeporte
          id={Id}
          deporte={Deporte}
          descripcion={Descripcion}
          fecha={Fecha}
          localidad={Localidad}
          imagen_base64={Img}
          ubicacion={Ubicacion}
          option1={Option1}

          cerrar={() => {InfoDeporteModal(toggleLogin)}}
        />}
    <div className={`${stylesFuncionarios.modalUser} ${showModalUser ? `${stylesFuncionarios.showUser}` : ``}`}>
      {
            <VerMasUsuario
              ci={CI}
              nombre={Nombre}
              apellido={Apellido}
              nacimiento={Nacimiento}
              asistencia={Asistencia}
              cedulafoto={CedulaFoto}
              carnetfoto={CarnetFoto}
              celular={Celular}
              asistencianombre={AsistenciaNombre}
              sexo={Sexo}
              domicilio={Domicilio}
              diabetes={Diabetes}
              hipertension={Hipertension}
              asma={Asma}
              alergias={Alergias}
              fracturas={Fracturas}
              otros={Otros}
              lentes={Lentes}
              tipoLentes={TipoLentes}
              nombreTutor={NombreTutor}
              rolTutor={RolTutor}
              lugar={Lugar}
              fechaUsuario={FechaUsuario}
              ciTutor={CITutor}
              deporteId={DeporteId}
              deporte={deporte}
              cerrar={() => {InfoUsuarioModal(toggleUser)}}
            />}

</div>
    <div className={`${stylesFuncionarios.modalConsulta} ${showConsulta ? `${stylesFuncionarios.showConsulta}` : ``}`}>

        {
          <VerMasConsultas
          nombre={nombreConsulta}
          email={emailConsulta}
          telefono={telefonoConsulta}
          asunto={asuntoConsulta}
          mensaje={mensajeConsulta}
          
          cerrar={() => {infoConsulta(toggleConsulta)}}
          />}
    </div>



          






      </div>
      
    <div className={stylesFuncionarios.fila}>

      <aside className={stylesFuncionarios.barra}>
        <div className={stylesFuncionarios.logo}>
          <img className={stylesFuncionarios.img}  src="/LOGO actual.svg" alt="logo empresa Dynamo" />
        </div>


        <div className={`${stylesFuncionarios.cosas}`}>
              <div className={`${stylesFuncionarios.deportes} ${stylesFuncionarios.elem} ${mostrarCrearDeporte ? stylesFuncionarios.activo : ''}`}><h1 className={`${stylesFuncionarios.h1}`}><a className={`${stylesFuncionarios.btn_aside}`} onClick={handleDeporte}>Deportes</a></h1></div>
              <div className={`${stylesFuncionarios.eventos} ${stylesFuncionarios.elem} ${mostrarCrearEvento ? stylesFuncionarios.activo : ''}`}><h1 className={`${stylesFuncionarios.h1}`}><a className={`${stylesFuncionarios.btn_aside}`} onClick={handleEvento}>Eventos</a></h1></div>
              <div className={`${stylesFuncionarios.noticias} ${stylesFuncionarios.elem} ${mostrarCrearNoticia ? stylesFuncionarios.activo : ''}`}><h1 className={`${stylesFuncionarios.h1}`}><a className={`${stylesFuncionarios.btn_aside}`} onClick={handleNoticia}>Noticias</a></h1></div>
              <div className={`${stylesFuncionarios.noticias} ${stylesFuncionarios.elem} ${mostrarUsuario ? stylesFuncionarios.activo : ''}`}><h1 className={`${stylesFuncionarios.h1}`}><a className={`${stylesFuncionarios.btn_aside}`} onClick={handleUsuario}>Usuarios</a></h1></div>
              <div className={`${stylesFuncionarios.noticias} ${stylesFuncionarios.elem} ${mostrarConsulta ? stylesFuncionarios.activo : ''}`}><h1 className={`${stylesFuncionarios.h1}`}><a className={`${stylesFuncionarios.btn_aside}`} onClick={handleConsulta}>Consultas</a></h1></div>
        </div>
        
        <div className={`${stylesFuncionarios.menu}`}>
          <a className={`${stylesFuncionarios.a} ${stylesFuncionarios.zoom}`} href="#"  id="menuButton"><img className={`${stylesFuncionarios.img}`} src="/list.svg" /></a>
          <div className={`${stylesFuncionarios.dropdown_content}`} id="dropdownContent">
            <a className={`${stylesFuncionarios.btn_menu} ${stylesFuncionarios.a}`} onClick={handleDeporte}>Deportes</a>
            <a className={`${stylesFuncionarios.btn_menu} ${stylesFuncionarios.a}`} onClick={handleEvento}>Eventos</a>
            <a className={`${stylesFuncionarios.btn_menu} ${stylesFuncionarios.a}`} onClick={handleNoticia}>Noticias</a>
            <a className={`${stylesFuncionarios.btn_menu} ${stylesFuncionarios.a}`} onClick={handleUsuario}>Usuarios</a>
            <a className={`${stylesFuncionarios.btn_menu} ${stylesFuncionarios.a}`} onClick={handleConsulta}>Consultas</a>
          </div>
        </div>
      


      </aside>

      <div id="crear" className={`${stylesFuncionarios.crear}`}>
        {mostrarCrearNoticia && <AdminNoticias />}
        {mostrarCrearNoticia && dataNoticia.map((noticia) => (
          <CrearNoticia
            id={noticia.id}
            titulo={noticia.titulo}
            deporte={noticia.deporte}
            descripcion={noticia.descripcion}
            fecha={noticia.fecha}
            imagen_base64={noticia.imagen_base64}
          />
        )) }

        {mostrarCrearEvento && <AdminEventos />}
        {mostrarCrearEvento && dataEvento.map((evento) => (
          <CrearEvento
            id={evento.id}
            titulo={evento.titulo}
            deporte={evento.deporte}
            info={evento.info}
            localidad={evento.localidad}
            fecha={evento.fecha}
            imagen_base64={evento.imagen_base64}
          />
        )) }


        {mostrarCrearDeporte && <AdminDeportes />}
        {mostrarCrearDeporte && dataDeporte.map((deporte) => (
          <CrearDeporte
            id={deporte.id}
            deporte={deporte.deporte}
            descripcion={deporte.descripcion}
            fecha={deporte.fecha}
            localidad={deporte.localidad}
            imagen_base64={deporte.imagen_base64}
            option1={Option1}
            modal={() => {InfoDeporteModal(
              deporte.Id,
              deporte.deporte,
              deporte.descripcion,
              deporte.fecha,
              deporte.localidad,
              deporte.imagen_base64,
              deporte.ubicacion,
              deporte.option1
              )} }
          />
        )) }
  
        
        {mostrarUsuario && <EditarUsuarios/>}
        {mostrarUsuario && dataUsuario.map((usuario) => (
          <CrearUsuario
            ci={usuario.ci}
            nombre={usuario.nombre}
            apellido={usuario.apellido}
            celular={usuario.celular}
            nacimiento={usuario.nacimiento}
            deporteid={usuario.deporteid}
      
            modal={
              () => {InfoUsuarioModal(
                usuario.ci,
                usuario.nombre,
                usuario.apellido,
                usuario.nacimiento,
                usuario.sexo,
                usuario.cedulafoto,
                usuario.carnetfoto,
                usuario.domicilio,
                usuario.celular,
                usuario.asistencia,
                usuario.asistencianombre,
                usuario.diabetes,
                usuario.hipertension,
                usuario.asma,
                usuario.alergias,
                usuario.fracturas,
                usuario.otros,
                usuario.lentes,
                usuario.tipolentes,
                usuario.nombretutor,
                usuario.roltutor,
                usuario.lugar,
                usuario.fecha,
                usuario.citutor,
                usuario.deporteid
            
                )} 
            }
          />
        )) }


{mostrarConsulta && <Consultas/>}
{mostrarConsulta && dataConsulta.map((consulta) => (
          <Consulta
            nombre={consulta.nombre}
            email={consulta.email}
            telefono={consulta.telefono}
            asunto={consulta.asunto}
            mensaje={consulta.mensaje}

            modal={
              () => {
                infoConsulta(
                  consulta.nombre,
                  consulta.email,
                  consulta.telefono,
                  consulta.asunto,
                  consulta.mensaje
                )
              }
            }
          />
        )) }







      </div>

    </div>


    {/* -------------------mobile--------------- */}


<div className={`${stylesFuncionarios.cont_tabla}`}>

    <div className={`${stylesFuncionarios.tabla_mobile}`}>

      <div className={`${stylesFuncionarios.fila1}`}>
        <div className={`${stylesFuncionarios.actividad_mobile} ${stylesFuncionarios.act_deporte}`}>
          <p>Futbol</p>
        </div>
        <div className={`${stylesFuncionarios.actividad_mobile} ${stylesFuncionarios.act_localidad}`}>
          <p>Risso</p>
        </div>
      </div>

      <div className={`${stylesFuncionarios.fila2}  ${mostrarCrearDeporte ? stylesFuncionarios.activo : ''}`}>
        <div className={`${stylesFuncionarios.actividad}`}><p className={`${stylesFuncionarios.izquierda}`}>Docente:</p> <p className={`${stylesFuncionarios.derecha}`}>Diego Lugano</p></div>
        <div className={`${stylesFuncionarios.actividad}`}><p className={`${stylesFuncionarios.izquierda}`}>Lugar:</p> <p className={`${stylesFuncionarios.derecha}`}>Plaza deportes</p></div>
        <div className={`${stylesFuncionarios.actividad}`}><p className={`${stylesFuncionarios.izquierda}`}>Fecha:</p> <p className={`${stylesFuncionarios.derecha}`}>1/6/23</p></div>
        <div className={`${stylesFuncionarios.actividad}`}><p className={`${stylesFuncionarios.izquierda}`}>Horario:</p> <p className={`${stylesFuncionarios.derecha}`}>14hs a 16hs</p></div>

      </div>

      <div className={`${stylesFuncionarios.fila3}`}>
        <div className={`${stylesFuncionarios.espacio}`}></div>
        <div className={`${stylesFuncionarios.espacio}`}></div>
        <div className={`${stylesFuncionarios.btn_edit} ${stylesFuncionarios.espacio}`}>
          <svg className={`${stylesFuncionarios.edit}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
            <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42"  rx="0" ry="0">
              <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535"  rx="0" ry="0">
                <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                  <g className={`${stylesFuncionarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                    <path rx="0" ry="0"  d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                    </path>
                  </g>
                </g>
                <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                  <g className={`${stylesFuncionarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                    <path rx="0" ry="0"  d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                    </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className={`${stylesFuncionarios.espacio}`}></div>
        <div className={`${stylesFuncionarios.espacio}`}></div>
        <div className={`${stylesFuncionarios.btn_del} ${stylesFuncionarios.espacio}`}>
          <svg className={`${stylesFuncionarios.del}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="17.901" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
            <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
              <g className={`${stylesFuncionarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                <path rx="0" ry="0"  d="M2398.454,600.997L2391.444,600.997L2398.064,594.034C2398.622,593.454,2398.935,592.663,2398.934,591.839C2398.935,591.027,2398.621,590.249,2398.064,589.686L2394.644,586.073C2393.499,584.884,2391.654,584.888,2390.514,586.084L2381.934,595.086C2380.801,596.291,2380.801,598.229,2381.934,599.434L2383.414,600.999L2381.554,600.999C2381.278,600.999,2381.054,601.234,2381.054,601.524C2381.054,601.814,2381.278,602.049,2381.554,602.049L2398.454,602.049C2398.731,602.049,2398.955,601.814,2398.955,601.523C2398.955,601.232,2398.731,600.997,2398.454,600.997ZZM2391.214,586.819C2391.974,586.041,2393.184,586.041,2393.944,586.819L2397.364,590.431C2397.730,590.803,2397.936,591.315,2397.934,591.849C2397.934,592.389,2397.729,592.907,2397.364,593.288L2391.724,599.211L2385.574,592.742ZM2390.024,600.997L2384.824,600.997L2382.644,598.686C2381.897,597.896,2381.897,596.620,2382.644,595.830L2384.874,593.488L2391.024,599.947Z">
                </path>
              </g>
            </g>
          </svg>
        </div>

        <div className={`${stylesFuncionarios.espacio}`}></div>

        <div className={`${stylesFuncionarios.btn_arriba} ${stylesFuncionarios.espacio}`}>
          <svg className={`${stylesFuncionarios.arriba}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="19.866" xmlns="http://www.w3.org/2000/svg"  id="screenshot-fc514b5e-bea0-802b-8002-f23abc56fadc" version="1.1" viewBox="3085.067 1080.068 19.866 19.866" height="19.866">
            <g id="shape-fc514b5e-bea0-802b-8002-f23abc56fadc"  rx="0" ry="0">
              <g id="shape-fc514b5e-bea0-802b-8002-f23abc573a95"  rx="0" ry="0">
                <g id="shape-fc514b5e-bea0-802b-8002-f23abc57c894">
                  <g className={`${stylesFuncionarios.fills}`} id="fills-fc514b5e-bea0-802b-8002-f23abc57c894">
                    <path rx="0" ry="0" d="M3094.650,1088.150C3094.742,1088.056,3094.868,1088.004,3095.000,1088.004C3095.132,1088.004,3095.258,1088.056,3095.350,1088.150L3098.350,1091.150C3098.540,1091.344,3098.538,1091.655,3098.346,1091.846C3098.155,1092.038,3097.844,1092.040,3097.650,1091.850L3095.000,1089.210L3092.350,1091.850C3092.156,1092.040,3091.845,1092.038,3091.654,1091.846C3091.462,1091.655,3091.460,1091.344,3091.650,1091.150Z">
                    </path>
                  </g>
                </g>
                <g id="shape-fc514b5e-bea0-802b-8002-f23abc580381">
                  <g className={`${stylesFuncionarios.fills}`} id="fills-fc514b5e-bea0-802b-8002-f23abc580381">
                    <path rx="0" ry="0" d="M3085.067,1090.000C3085.068,1084.514,3089.515,1080.068,3095.001,1080.068C3100.486,1080.068,3104.933,1084.516,3104.933,1090.001C3104.933,1095.487,3100.486,1099.934,3095.000,1099.934C3089.516,1099.928,3085.073,1095.484,3085.067,1090.000ZZM3103.933,1090.000C3103.932,1085.067,3099.933,1081.068,3094.999,1081.068C3090.066,1081.068,3086.067,1085.068,3086.067,1090.001C3086.067,1094.935,3090.067,1098.934,3095.000,1098.934C3099.932,1098.928,3103.928,1094.932,3103.933,1090.000ZZ">
                    </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

      </div>

    </div>

</div>

    </>
  );
}


export default Funcionarios;
