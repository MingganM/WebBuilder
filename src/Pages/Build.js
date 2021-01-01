import React, { Component } from 'react';
import BuildMarkup from '../Components/BuildMarkup';
import BuildStyle from '../Components/BuildStyle';
import BuildDisplay from '../Components/BuildDisplay';

export default class Build extends Component {
    render() {
        return (
            <section className="Build">
                <BuildMarkup />
                <BuildDisplay />
                <BuildStyle />
            </section>
        )
    }
}
