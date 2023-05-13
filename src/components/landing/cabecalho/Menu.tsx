import { IconBrandGoogle } from "@tabler/icons-react"
import { useContext } from "react"
import MenuItem from "./Menuitem"

export default function Menu() {
    function loginGoogle() {
        alert("Login com Google")
    }

    return (
        <div>
            <MenuItem
                onClick={loginGoogle}
                className="bg-gradient-to-r from-indigo-600 to-cyan-600"
            >
                <div className="flex items-center gap-2">
                    <IconBrandGoogle size={15} />
                    <span>Login</span>
                </div>
            </MenuItem>
        </div>
    )
}