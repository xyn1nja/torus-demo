import TorusSdk, { RedirectResult } from "@toruslabs/customauth";
import { useEffect, useState } from "react"
import styles from "../styles/Home.module.css"

const Auth = () => {
    const [username, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPubAdd, setUserPubAdd] = useState("");
    const [userPhoto, setUserPhoto] = useState("");

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const torus = new TorusSdk({
            baseUrl: window.location.origin,
            redirectPathName: "auth",
            enableLogging: true,
            uxMode: "redirect",
            network: "testnet"
        });
        const userDetails = await torus.getRedirectResult();
        console.log(userDetails);
        if(userDetails && userDetails.result && userDetails.result.userInfo.name) {
            setUsername(userDetails.result.userInfo.name)
        }
        if(userDetails && userDetails.result && userDetails.result.userInfo.email) {
            setUserEmail(userDetails.result.userInfo.email)
        }
        if(userDetails && userDetails.result && userDetails.result.userInfo.profileImage) {
            setUserPhoto(userDetails.result.userInfo.profileImage)
        }
        if(userDetails && userDetails.result && userDetails.result.publicAddress) {
            setUserPubAdd(userDetails.result.publicAddress)
        }
    }

    return (
        <>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome, {username}.
        </h1>
        <div className={styles.description}>
        <p>
            Wallet Address: {userPubAdd}
        </p>
        <p>
            Email Address: {userEmail}
        </p>
        </div>
      </main>
        </>
    )
}

export default Auth;