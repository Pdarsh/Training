import React from 'react'
import './Grid.css'

const Grid = () => {
    return (
        <div className='container'>
            <nav>
                <a href="#0">Home</a>
                <a href="#0">About</a>
                <a href="#0">Contact</a>
                <a href="#0" id='logo'>Logo</a>
            </nav>
                <aside>Aside</aside>
                <main>
                <article>Ar1</article>
                <article>Ar2</article>
                <article>Ar3</article>
                </main>
            <footer>Footer</footer>
        </div>
    )
}

export default Grid