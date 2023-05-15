import { useState, useEffect } from 'react'
import { useHistory, Route, Switch } from 'react-router-dom'
import { ColorModeContext, useMode } from '../../theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/global/Topbar'
import  Sidebar  from './scenes/global/Sidebar'
import './MainPage.css'
import Incidence from '../Incidence'
import InsertIncidence from '../InsertIncidence'
import HomePage from './scenes/HomePage/HomePage'
import UpdateIncidence from '../UpdateIncidence'
import ChangeDoctorHospital from '../ChangeDoctorHospital'
import InfoDoctor from '../InfoDoctor'
import InfoPatient from '../InfoPatient'
import Otros from '../Otros'

function MainPage() {
  const [user, setUser] = useState({})
  const [logged_In, set_Logged_In_Status] = useState(false)
  const [user_Authorized, setUserAuthorized] = useState(false)
  // MaterialUI mode colors
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);


  // let logged = false
  const history = useHistory()

  useEffect(() => {
    const browser_data = window.localStorage.getItem('LOGIN_STATUS')
    if (browser_data !== null) setUser(JSON.parse(browser_data))
  }, [])

  useEffect(() => {

    set_Logged_In_Status(user.logged_in)
    setUserAuthorized((user.logged_in))

  }, [user])

  const signOut = () => {
    set_Logged_In_Status(false)
    window.localStorage.setItem('LOGIN_STATUS', JSON.stringify({ user_id: '', password: '', logged_in: false, role:'' }))
    window.localStorage.setItem('MAINPAGE_SELECTED', JSON.stringify({ page_selected: '' }))
    setTimeout(() => {
      history.push('/Proj2_DBI/')
      console.log('pushing to /Proj2_DBI/')
      history.go(0)
    }, 3000)
  }

  const verify_Loggin_status = () => {
    if(!(user.user_id===undefined)){
      if((!logged_In)&&(logged_In!=undefined)){
        setTimeout(() => {
          history.push('/Proj2_DBI/')
          history.go(0)
        }, [3000])
      }
    }
  }

  function UserMainPage() {
    return(
      <div>
        {logged_In ?
        <div className="app" >
          <Sidebar isSidebar={isSidebar} style={{height: "100vh"}}/>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}/>
            <Switch>
              <Route path="/Proj2_DBI/MainPage/incidence/">
                <Incidence/>
              </Route>
              <Route path="/Proj2_DBI/MainPage/insert-incidence/">
                <InsertIncidence />
              </Route>
              <Route path="/Proj2_DBI/MainPage/update-incidence/">
                <UpdateIncidence/>
              </Route>
              <Route path="/Proj2_DBI/MainPage/hospitals/">
                <ChangeDoctorHospital/>
              </Route>
              <Route path="/Proj2_DBI/MainPage/new-doctor/">
                <InfoDoctor fullscreen={false} />
              </Route>
              <Route path="/Proj2_DBI/MainPage/new-patient/">
                <InfoPatient fullscreen={false}/>
              </Route>
              <Route path="/Proj2_DBI/MainPage/other/">
                <Otros/>
              </Route>
              <Route path="/Proj2_DBI/MainPage/">
                <HomePage/>
              </Route>
            </Switch>
          </main>
        </div>
        : <div id="logged-out-status" style={{color: 'red'}} > Signing out...</div>}
      </div>
    )
  }

  function UserUnauthorized() {
    
    verify_Loggin_status()
    return (
      <>
        <div>You are not authorized... </div>
        <div>Signing out...</div>
      </>
    )
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="main-page" >
          {user_Authorized ? <UserMainPage /> : <UserUnauthorized/> }
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default MainPage
