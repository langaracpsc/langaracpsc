import Divider from "@/components/Divider"
import AfResources from "@/components/resources/AfResources"
import { ResourcesHero } from "@/components/resources/HeroResources"
import NfResources from "@/components/resources/NfResources"



const Resource: React.FC = () => {





    return(
        <div className="  pl-5 pr-5 min-h-screen pb-10 bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(241,90,34,0.2)] via-black to-black">
        <ResourcesHero/>
        <Divider/>
        <AfResources/>
        <Divider/>
        <NfResources/>

        
        </div>
    )

}

export {
    Resource
}

