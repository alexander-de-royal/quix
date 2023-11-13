import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
    const {} = getKindeServerSession()
    
    return (<div></div>)
}

export default Page