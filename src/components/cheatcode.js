import React from 'react'
import './cheatcode.css'
var _ = require('lodash');

class CheatCode extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            flag: true,
            text: 'text',
            array : [],
            portafolio: 'hiddentext'
        }
    }

    componentDidMount() {
		document.addEventListener('keydown', this.typingCheat, false);
	}

	typingCheat = (event) => {

        const { array } = this.state;
        console.log(array);
        console.log(event.key);
		switch (event.key) {
        case 'ArrowUp':

			if (_.isEqual(array, []) ) {
                array.push(1); 
            }else if(_.isEqual(array, [1]) ){
                array.push(1);
            }else{
                array.splice(0,array.length)
            }
            break;
        case 'ArrowDown':
			if (_.isEqual(array, [1, 1])) {
                array.push(1); 
            }else if(_.isEqual(array, [1, 1, 1])){
                array.push(1);
            }else{
                array.splice(0,array.length)
            }
            break;

        case 'ArrowLeft':
			if (_.isEqual(array, [1, 1, 1, 1])) {
                array.push(1); 
            }else if(_.isEqual(array, [1, 1, 1, 1, 1, 1])){
                array.push(1);
            }else{
                array.splice(0,array.length)
            }
            break;
            
        case 'ArrowRight':
			if (_.isEqual(array, [1, 1, 1, 1, 1])) {
                array.push(1); 
            }else if(_.isEqual(array, [1, 1, 1, 1, 1, 1, 1])){
                array.push(1);
            }else{
                array.splice(0,array.length)
            }
            break;
        }
        this.setState({ array: array });
        
        console.log(array);
        if(_.isEqual(array, [1, 1, 1, 1, 1, 1, 1, 1]) ){
            this.setState({ text: 'hiddentext', portafolio: 'portafolio'})
        }
    }

    render(){
        return(
            <div>
            <div className={this.state.portafolio}>
                <h1 className = 'titulo'> Portafolio</h1>

                <div className='nombre'>   
                <div class="card-container">
                    <div class="card">
                        <div class="side"><img src="https://i.imgur.com/f8Z1wSe.jpg" alt="Jose Ramirez"></img> </div>
                        <div class="side back">Mi nombre es Jose Ramirez</div>
                    </div>
                </div> 
                </div>

                <div className = 'main'>
                <h2> Soy un alumno de la clase de Sistemas y tecnologias Web</h2>
                <h2> En es portafolio presento algunas de las cosas que aprendi durante el semestre</h2>
                <h2> Como mucho de los otros portafolios vistos, espero que este sea el primero de muchos</h2>
                </div>

                <div className='extra'>
                <div class="card-container">
                    <div class="card">
                        <div class="side"><img src="https://i.imgur.com/EkxWRQd.png" alt="Jose Ramirez"></img> </div>
                        <div class="side back">Quisera ir a un GDC</div>
                    </div>
                </div>
                </div>
                

            </div>
            <div className='container'>
                <h1 className={this.state.text}>
                    Insert the cheat code . . .   
                </h1> 
            </div>
            </div>
        )
    }
}

export default CheatCode;