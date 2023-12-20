
import PropTypes from 'prop-types'

function Header({bgColor, textColor, text}) {
       const headerStyles = {
        backgroundColor : bgColor,
        color : textColor,
    }
  
     return (
    <>
        <header style={ headerStyles} >
            <div className="container">
                <h2>{text} </h2>
            </div>
        </header>
        
    </>
  )
}

// eslint-disable-next-line react/no-typos
Header.PropTypes  = {
    text : PropTypes.string,
    textColor : PropTypes.string,
    bgColor : PropTypes.string,
}

Header.defaultProps = {
    text : 'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}

export default Header;