import styled from 'styled-components'

const Button = ({children}) => {
    return(
        <ButtonWrapper>
            {children}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button`
    cursor: pointer;
    text-decoration: none;
    border: 2px solid rgba(255, 255, 255, 0.87);
    background: rgba(0, 0, 0, 0.4);
    color: rgba(255, 255, 255, 0.87);
    padding: 16px;
    height: auto;
    margin: 10px 5px;
    font-size: 16px;
    font-weight: 200;
`

export default Button;