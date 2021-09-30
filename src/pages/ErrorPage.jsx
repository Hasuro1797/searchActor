import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Empty, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../helpers/routes'

const ErrorPage = () => {
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
            <Empty
                description="Error 404 Not Found"
                className="not-results"
                image="https://www.thermofisher.com/diagnostic-education/etc.clientlibs/diagnostics/components/structure/page/clientlib/resources/404-error.png"
            />
        </Space>
    )
}

export default ErrorPage
