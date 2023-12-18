import { IMenu } from '../../Models/Menu'
import Menu from '../Menu/Menu'

const CoreJS = () => {
    const CoreJSMenu:IMenu[] =[{ title: "ES6", route: "" },
    { title: "Dom Manipulation", route: "dom-manipulation" },
    { title: "Scoping and Hoisting", route: "" },
    { title: "Closures", route: "closure" },
    { title: "Async Await", route: "" },
    { title: "Web Storage", route: "web-storage" },
    { title: "Event-Loop", route: "" }
    ]
  return (
    <>
    <div>
        <h2>CORE JS MENU</h2>
        <Menu menus={CoreJSMenu}/>
    </div>
    </>
  )
}

export default CoreJS