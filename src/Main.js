import { Switch, Route} from 'react-router-dom';
import Home from './Components/Home'
import Services from './Components/Services'
import Doctors from './Components/Doctors'

const Main = props => {
    return(
        <Switch>
            <Route exact path ='/' render={ props =>  <Home />} />

            <Route exact path ='/services' render={ props =>  <Services />} />

            <Route exact path ='/doctors' render={ props =>  <Doctors />} />
        </Switch>
    )
}
export default Main;