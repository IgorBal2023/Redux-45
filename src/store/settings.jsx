import { useDispatch, useSelector } from "react-redux"
import { changeTheme } from "./theme/actions";

export const Settings = () =>{
    const dispatch = useDispatch();
    const theme = useSelector((state)=>state.theme);
    const onClick = ()=>{
        const newTheme = theme === "light" ? "dark": "light";
        dispatch(changeTheme(newTheme));
    }
    return(
        <section>
            <p>Current theme: {theme}</p>
            <button onClick={onClick}>Change theme</button>
        </section>
    )
}