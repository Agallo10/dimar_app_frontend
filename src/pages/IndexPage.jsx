import React, { useEffect, useState } from 'react';
import './indexPage.css';
import { useNavigate } from 'react-router-dom';
import { getEnvVar } from '../helpers';
import { dimarApi } from '../api';

export const IndexPage = () => {

    const navigate = useNavigate();

    const [listFeatures, setListFeatures] = useState([]);
    const [msj, setmsj] = useState('');
    const [msjDownload, setmsjDOwnload] = useState('');
    const [disabled, setDisabled] = useState(true);

    const getListFeatures = async() => {
        try {
          const resp = await dimarApi.get('/features');
          setListFeatures(resp.data.features);
          console.log(resp.data.features);
        } catch (error) {
          console.log(error);
        }
      }

    const insertFeatures = async() => {
        try {
          const resp = await dimarApi.post('/features');
          setmsj(resp.data.msg);
          console.log(resp.data.msg);
        } catch (error) {
          console.log(error);
        }
      }
    const downloadData = async() => {
        try {
          const resp = await dimarApi.post('/features/download');
          setmsjDOwnload(resp.data.msg);
          console.log(resp.data.msg);
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() => {
     getListFeatures();
     isDisabled();
     downloadData();
     //console.log(listFeatures);
    }, []);

    useEffect(() => {
        isDisabled();
    }, [disabled]);
    
    
    const btnNavigator = (e) => {
        e.preventDefault(e);
        console.log('click')
        navigate('/Map', {
            replace: true,
            state: { 
                listFeatures: listFeatures,
             }

        });
    }


    const btnCarga = (e) => {
        e.preventDefault(e);
        insertFeatures();
        isDisabled();
        getListFeatures();
        console.log('click')
    }

    const isDisabled = () => {
        if(listFeatures.length === 0){
            setDisabled(true);
        }else{
            setDisabled(false);
        }
    }

    console.log(msjDownload);

    return (
      <div className="App">
        <div>
        </div>
        <h1>Dimar app</h1>
        <div className="card">
          <button onClick={(e) =>btnCarga(e)}>
          Cargar Datos
          </button>
          <p>{msj}</p>
          
        </div>
        <div className="card">
          <button 
          //disabled={disabled} 
          onClick={(e) =>btnNavigator(e)}>
            Ir al mapa
          </button>
          
        </div>
       
      </div>
    )
}