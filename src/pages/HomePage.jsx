import React from 'react';
import { Upload, message, Space } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { REACT_APP_HEADER_KEY, URL_NOMADA, fethActor } from '../redux/actions/index.js';
import { useHistory } from 'react-router';
import 'antd/dist/antd.css';
import '../index.css';
import { routes } from '../helpers/routes.js';
import { useDispatch } from 'react-redux';

const HomePage = () => {
    const { Dragger } = Upload;
    const history = useHistory();
    const dispatch = useDispatch();
    const props = {
        name: 'file',
        multiple: false,
        accept: 'image/jpeg,image/png',
        action: `${URL_NOMADA}`,
        headers:{
            'Nomada': `${REACT_APP_HEADER_KEY}`
        }, 
        onChange(info) {
            const { status } = info.file
            if (status === 'done') {
                const { error, actorName } = info.file.response;
                if(!error){
                    dispatch(fethActor(actorName));
                    history.push(routes.datail);
                }else{
                    message.error(`${info.file.name}. No se encontro resultados.`);
                }
            } else if (status === 'error') {
                message.error(`${info.file.name}. El archivo fallo.`);
            }
        }
    };

    return (
        <Space 
            align="center" 
            className="homeContainer"
        >
            <Dragger
                {...props}
                className="dragger"
            >
                <p className="icon">
                    <InboxOutlined />
                </p>
                <p className="messageTitle">
                    Has Click o arrastra una imagen
                </p>
                <p className="messageText">
                    Selecciona la foto de un actor famoso pasa saber quién es y en que peliculas ha salido.
                </p>
            </Dragger>
        </Space>
    )
}

export default HomePage
