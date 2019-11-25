import Layout from '../components/Layout'
// import './style.css'
import style from './style.modules.css'
export default () => (<Layout> 
    <div style={{'color':'blue'}}>
      Welcome to home page
    </div>

    <div className="stark">
      Welcome to starkwang
    </div>

    <div className={style.shudong}>
      Welcome to shudong
    </div>
    
    <div className={style.shudongwang}>
      Welcome to cssModules
    </div>

    <style jsx>{`
      .stark {
        color:red;
        font-size:30px;
      }
    `}
    </style>
</Layout>)