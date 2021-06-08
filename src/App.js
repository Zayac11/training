import React from 'react'
import './App.css'
import "antd/dist/antd.css";
import {Link, Route, Switch} from 'react-router-dom'
import YupInputs from './Components/YupInputs'
import Hooks from './Components/Hooks'
import MapTest from './Components/MapTest/MapTest'
import Wysiwyg from './Components/TextEditor/Wysiwyg'
import Test from './Components/Test'
import SignupForm from './Components/Formik'
import Print from './Components/Print/Print'
import Search from './Components/Search/Search'
import CameraPhoto from './Components/CameraPhoto/CameraPhoto'
import QrScanner from './Components/QrScanner/QrScanner'
import QrGenerator from './Components/QrGenerator/QrGenerator'
import InputForm from './Components/Input/InputForm'
import PhotoGallery from './Components/PhotoGallery/PhotoGallery'
import BeautifulDnd from './Components/BeautifulDnd/BeautifulDnd'
import {Layout, Menu, Breadcrumb} from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Burger from './Components/Burger/Burger'
import HookFormContainer from './Components/ReactHookForm/HookFormContainer'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            {/*<Menu.Item key="1">nav 1</Menu.Item>*/}
                            {/*<Menu.Item key="2">nav 2</Menu.Item>*/}
                            {/*<Menu.Item key="3">nav 3</Menu.Item>*/}
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                        {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            <Sider className="site-layout-background" width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <SubMenu key="sub1" icon={<UserOutlined />} title="ArtWay">
                                        <Menu.Item key="1"><Link to='/print'>Print</Link></Menu.Item>
                                        <Menu.Item key="2"><Link to='/photo-gallery'>Photo Gallery</Link></Menu.Item>
                                        <Menu.Item key="3"><Link to='/qr-generator'>Qr Generator</Link></Menu.Item>
                                        <Menu.Item key="4"><Link to='/beautiful-dnd'>Beautiful Dnd</Link></Menu.Item>
                                        <Menu.Item key="5"><Link to='/camera-photo'>Camera Photo</Link></Menu.Item>
                                        <Menu.Item key="6"><Link to='/qr-scanner'>Qr Scanner</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="Sandbox">
                                        <Menu.Item key="7"><Link to='/yup-inputs'>YupInputs</Link></Menu.Item>
                                        <Menu.Item key="8"><Link to='/signup-form'>SignupForm</Link></Menu.Item>
                                        <Menu.Item key="9"><Link to='/wysiwyg'>Wysiwyg</Link></Menu.Item>
                                        <Menu.Item key="10"><Link to='/test'>Test</Link></Menu.Item>
                                        <Menu.Item key="11"><Link to='/map-test'>Map Test</Link></Menu.Item>
                                        <Menu.Item key="12"><Link to='/input-form'>Input Form</Link></Menu.Item>
                                        <Menu.Item key="13"><Link to='/hooks'>Hooks</Link></Menu.Item>
                                        <Menu.Item key="14"><Link to='/search'>Search</Link></Menu.Item>
                                        <Menu.Item key="15"><Link to='/burger'>Burger</Link></Menu.Item>
                                        <Menu.Item key="16"><Link to='/hook-form'>HookForm</Link></Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Switch>
                                    <Route path='/print' render={() => <Print />} />
                                    <Route path='/photo-gallery' render={() => <PhotoGallery />} />
                                    <Route path='/qr-generator' render={() => <QrGenerator />} />
                                    <Route path='/beautiful-dnd' render={() => <BeautifulDnd />} />
                                    <Route path='/camera-photo' render={() => <CameraPhoto />} />
                                    <Route path='/qr-scanner' render={() => <QrScanner />} />

                                    <Route path='/yup-inputs' render={() => <YupInputs />} />
                                    <Route path='/signup-form' render={() => <SignupForm />} />
                                    <Route path='/wysiwyg' render={() => <Wysiwyg />} />
                                    <Route path='/test' render={() => <Test />} />
                                    <Route path='/map-test' render={() => <MapTest />} />
                                    <Route path='/input-form' render={() => <InputForm />} />
                                    <Route path='/hooks' render={() => <Hooks />} />
                                    <Route path='/search' render={() => <Search />} />
                                    <Route path='/burger' render={() => <Burger />} />
                                    <Route path='/hook-form' render={() => <HookFormContainer />} />
                                </Switch>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>


            </>
        )
    }

}

export default App
