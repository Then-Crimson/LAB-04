import React from 'react';

const MyComponent = () =>{

    const handleClick = () => {
        alert('Genial! Creaste un nuevo componente, es hora de un descanso.');
        
    }

    const imageStyle = {
        position : 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }

    const buttonStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0px 0px 10px white',
        transition: '0.3s',
        zIndex: 1
    };

    const buttonHoverStyle = {
        boxShadow: '0px 0px 20px white',
        transition: '0.3s'
    };

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div>
            <img src="/src/images/DkSouls.jpg" alt="Mimahe" style={imageStyle}  />
            <button onClick={handleClick}

            style={isHovered ? buttonHoverStyle : buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            
            >
                Haz clic en mí
            </button>
        </div>
    );

}
export default MyComponent;