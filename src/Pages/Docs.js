import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import DisplayOperations from '../Components/docsComp/DisplayOperations';
import CreatingElement from '../Components/docsComp/CreatingElement';
import StylingElement from '../Components/docsComp/StylingElement';
import HowToDeploy from '../Components/docsComp/HowToDeploy';

export default function Docs() {
    return (
        <section className="docs">
            <ul className="docs__ul">
                <li className="docs__li">
                    <Link className="docs__link" to="/Docs">Display Operations</Link>
                </li>
                <li className="docs__li">
                    <Link className="docs__link" to="/Docs/creating-element">Creating Element</Link>
                </li>
                <li className="docs__li">
                    <Link className="docs__link" to="/Docs/styling-element">Styling Element</Link>
                </li>
                <li className="docs__li">
                    <Link className="docs__link" to="/Docs/how-to-deploy">How To Deploy</Link>
                </li>
            </ul>

            <div className="docs__container">
                <Switch>
                    <Route exact path="/Docs" component={DisplayOperations}/>
                    <Route path="/Docs/creating-element" component={CreatingElement}/>
                    <Route path="/Docs/styling-element" component={StylingElement}/>
                    <Route path="/Docs/how-to-deploy" component={HowToDeploy}/>
                </Switch>
            </div>
        </section>
    )
}
