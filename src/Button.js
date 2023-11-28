import ProTypes from "prop-types";
import styles from "./Button.module.css" // css -> js객체로 변환

//컴포넌트나 스타일들을 독립적으로 관리할수 있음
function Button({text}){
    return <button className={styles.btn}>{text}</button> // 객체로 변환하면 클래스 이름 지정안해두됨
}

Button.ProTypes = {
    text: ProTypes.string.isRequired
}

export default Button; 