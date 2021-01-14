import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="Home">
            <div className="banner">
                <div className="banner__center">
                    <h1 className="banner__title">Web Builder</h1>
                    <p className="banner__text">Build your dream website without writing a single line of code.</p>
                    <Link to="/Build" className="banner__link">Start Building Now</Link>
                </div>
            </div>

            <div className="services">
                <h2 className="sectionTitle">What Can You Do?</h2>
                
                <div className="services__container">
                    <article className="service">
                        <h3 className="service__title">Use A Simple GUI Tool</h3>
                        <p className="service__text">Simple enough to understand, Docs will make things even easier.</p>
                    </article>

                    <article className="service">
                        <h3 className="service__title">Use Live Demo</h3>
                        <p className="service__text">Live Demo will show how your website actually looks in a browser.</p>
                    </article>
                    <article className="service">
                        <h3 className="service__title">Get Website's Code</h3>
                        <p className="service__text">When you've finished up, Get actual html and css code.</p>
                    </article>
                    <article className="service">
                        <h3 className="service__title">Use WebBuilder For Free</h3>
                        <p className="service__text">Do not sign up, Do not Log in, It is 100% free.</p>
                    </article>
                </div>
            </div>

            <div className="learnMore">
                <div className="learnMore__container">
                    <p className="learnMore__text">Want to learn more about WebBuilder?</p>
                    <Link className="learnMore__link" to="/Docs">Lets Learn</Link>
                </div>
            </div>
        </section>
    )
}
