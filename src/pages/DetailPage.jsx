import React from 'react';
import { Button, Col, Empty, Image, Row, Space, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { URL_IMAGES } from '../redux/actions/index';
import { Link } from 'react-router-dom';
import { routes } from '../helpers/routes';
import Movies from '../components/Movies';
import '../index.css';
const { Title, Text } = Typography;
const DetailPage = () => {
    const actor = useSelector(state => state.actor);
    return (
        <Space
            direction="vertical"
            size="middle"
            className="detailContainer"
        >
            <Link axact to={routes.home}>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="button-returner"
                    icon={<ArrowLeftOutlined/>}
                >
                    Regresar
                </Button>
            </Link>
            <span className="line"/>
            {
                actor ? 
                <Row
                    justify="center"
                    align="top"
                >
                    <Col 
                        xl={8} 
                        xs={24}
                        >
                        <Space
                            direction="vertical"
                            align="center"
                            size="smallleft-information"
                            className="left-information"
                        >
                            <Image
                                src={`${URL_IMAGES}${actor.results[0].profile_path}`}
                                width={200}
                            />
                            <Title level={2}>
                                {actor.results[0].name}
                            </Title>
                            <Title
                                level={3}
                            >
                                {actor.results[0].gender === 2 ? "Hombre" : "Mujer"}
                            </Title>
                            <Text
                                className="popularity"
                                strong
                            >
                                Popularidad : {actor.results[0].popularity}
                            </Text>
                        </Space>
                    </Col>
                    <Col 
                        xl={15}
                        xs={24}
                        >
                        <Movies 
                            movies={actor.results[0].known_for} 
                            urlImg={URL_IMAGES}
                        />
                    </Col>
                </Row>
                :
                <>
                    <Empty
                        description="No se encontraron resultados."
                        className="not-results"
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    />
                </>
            }
            
        </Space>
    )
}

export default DetailPage
