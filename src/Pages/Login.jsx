import React from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const onLogin = (values) => {
        const LoggedIn = true
        localStorage.setItem("Logged", LoggedIn)
        navigate("/cadastros")
        window.location.reload()
        console.log('Success:', values)
    }

  return (
    <div>
        <h1>Bem-vindo</h1>
        <h2>Faça Login para acessar o conteúdo</h2>
        <Form
            name="basic"
            style={{ maxWidth: 350, marginTop: 60, margin: "auto"}}
            initialValues={{ remember: true }}
            onFinish={onLogin}
            autoComplete="off"
        >
            <Form.Item
                label="Nome de Usuário"
                name="username"
                rules={[
                    { 
                        required: true,
                        message: 'Por favor, digite seu nome',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Senha"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, digite sua senha',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Button 
                    type="primary" 
                    htmlType="submit"
                >
                    Login
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Login