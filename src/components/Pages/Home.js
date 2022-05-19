import React from 'react'
import './Home.css';
import Navigation from '../common/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation />
            <main>
                <section>
                    <h3>Welcome To ORB</h3>
                    <h1>The CV that gets the job (done)</h1>

                    <a class="botton1">signup</a>

                    <a class="botton2">signin</a>
                </section>
            </main>
        </div>

    )
}

export default Home