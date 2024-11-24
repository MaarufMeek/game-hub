import {Platform} from "../hooks/usePlatforms";
import {FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import {SiNintendo} from "react-icons/si";
import {MdPhoneAndroid, MdPhoneIphone} from "react-icons/md";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";

interface Props {
    platform: Platform [];
    darkMode: boolean;
}

const PlatformIconList = ({platform, darkMode}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        android: MdPhoneAndroid,
        web: BsGlobe
    }
    return (
        <div style={{
            display: "flex",
            gap: "15px",
            color: `${darkMode ? '#C59E23FF' : '#071841'}`,
            flexWrap: "wrap"
        }}

             className="mt-3 overflow-auto"
        >
            {platform.map((platform) => {
                const Icon = iconMap[platform.slug]; // Get the component
                if (!Icon) return '';
                return <Icon key={platform.slug}/>; // Render the component
            })}
        </div>
    );
}

export default PlatformIconList;