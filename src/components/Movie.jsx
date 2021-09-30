import { Col, Image, Row, Space, Typography } from 'antd';
import { AiFillStar } from 'react-icons/ai';
const { Title, Text, Paragraph } = Typography;

const Movie = ({ name, description, movieBg, release, rating }) => {
    return (
        <Space
            direction="vertical"
            size="small"
            className="movieContainer"
        >
            <Row
                justify="space-between"
                align="middle"
                className="title-section"
            >
                <Col xl={14} xs={24}>
                    <Title 
                        level={2}
                        className="nameMovie"
                        >
                        {name}
                    </Title>
                </Col>
                <Col xl={4} xs={24}>
                    <Title 
                        level={4}
                        className="ratingMovie"
                    >
                        {rating} / 10
                        <AiFillStar className="icon-start"/>
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col 
                    xl={6}
                    xs={24}
                    className="movieImg"
                >
                    <Image
                        src={movieBg}
                        width={130}
                    />
                </Col>
                <Col 
                    xs={24}
                    xl={18}
                    className="descriptionMovie"
                    >
                    <Space
                        size="small"
                        direction="vertical"
                        className="description-cont"
                    >
                        <Paragraph className="description-text">
                            {description}
                        </Paragraph>
                        <Text strong className="releaseMovie">
                            Fecha de Estreno: {release}
                        </Text>
                    </Space>
                </Col>
            </Row>
        </Space>
    )
}

export default Movie
