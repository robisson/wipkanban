import React, {Component} from 'react'
import NotificationConfig from './NotificationConfig'
import PermissionConfig from './PermissionConfig'
import ConfigureBoard from './ConfigureBoard'

class TitleBoard extends Component {

    render() {
        return (
            <div>
                <div className="col-lg-6">
                    <input type="hidden" id="idquadro" defaultValue={this.props.title}/>
                    <h1 id="nomeQuadro">{this.props.title}</h1>
                    <div className="form-group hide" id="campoNomeQuadro">
                        <input
                            type="text"
                            required="required"
                            className="form-control input-lg"
                            name="nome"/>
                    </div>
                </div>
                <div className="col-lg-6 text-right">
                    <NotificationConfig/>
                    <PermissionConfig/>
                    <ConfigureBoard/>
                </div>
            </div>
        );
    }

}

export default TitleBoard;