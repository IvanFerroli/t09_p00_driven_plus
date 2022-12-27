import avatar from "../assets/img/Vector"

export default function Headers(props) {
    const logo = props.membershipImage
    const nome = 'Fulano'
    return(
        <>
        <div>
        <img src={logo} alt="logo"/>
        <img src={avatar} alt="avatar"/>
        </div>
        <span>Olá, {nome}</span>
        </>
    )
}