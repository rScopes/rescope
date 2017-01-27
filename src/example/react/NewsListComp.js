'use strict';

import React from "react";
import Rescope from "../../Store";

export default window.NewsListComp = class NewsListComp extends React.Component {

    constructor( props ) {
        super(...arguments);
        this.state = {};
        Rescope.map(this, ["userEvents"])
    }

    render() {
        return (
            <div className="NewsListComp container" style={{minHeight : "100%"}}>
                <h1>Mes events</h1>
                {
                    this.state.userEvents &&
                    this.state.userEvents.events.map(
                        ( evt, i ) =>
                            <div style={{border : "solid 1px lightgrey", borderRadius : "3px"}} key={i}>
                                <b><u>
                                    <center>Event type : {evt.type}</center>
                                </u></b>
                                <p>{evt.text}</p>
                            </div>
                    )
                }

            </div>
        );
    }
};