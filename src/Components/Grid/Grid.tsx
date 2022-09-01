import './Grid.css'
import { NavLink } from 'react-router-dom'


const Grid = () => {
    const navitems = ["Home","About","Contact"]
    return (
        <div className='container'>
            <nav className='navigation-menu'>
                {
                    navitems.map((navitem) => {
                        return(
                            <NavLink to='/' className='nav-items'>{navitem}</NavLink>
                        )
                    })
                }
                <NavLink to='/' id='logo'> Logo</NavLink>

            </nav>
                <aside className='info'>Aside</aside>
                <main className='news-articles'>
                <article className='single-article'>Ar1</article>
                <article className='single-article'>Ar2</article>
                <article className='single-article'>Ar3</article>
                </main>
            <footer className='footer-menu'>Footer</footer>
        </div>
    )
}

export default Grid