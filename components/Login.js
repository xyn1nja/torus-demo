import { useEffect, useState } from "react"
import TorusSdk, { UX_MODE } from "@toruslabs/customauth";
import styles from "../styles/Home.module.css"

const Login = () => {
    const [torus, setTorus] = useState(null);

    useEffect(() => {
        instantiateTorus();
    }, []);

    const instantiateTorus = async () => {
        try {
            const torus = new TorusSdk({
                baseUrl: window.location.origin,
                redirectPathName: "auth",
                enableLogging: true,
                network: "testnet",
                uxMode: UX_MODE.REDIRECT
            });
            setTorus(torus);
            console.log(torus);
            await torus.init({skipSw: true});
            console.log(torus);
        } catch (error) {
            console.log(error)
        }
    };

    const handleLogin = async () => {
        try {
                await torus.triggerLogin({
                typeOfLogin: "google",
                verifier: process.env.NEXT_PUBLIC_VERIFIER,
                clientId: process.env.NEXT_PUBLIC_CLIENT_ID
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <p className={styles.description}>Please login:</p>
        <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login;