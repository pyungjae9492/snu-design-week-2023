import Image from "next/image";

interface CardProps {
    logo: string;
    description: string;
}

export const Card = (props: CardProps) => {
    const { logo, description } = props;
    return (
        <td className="flex flex-col max-w-[290px] items-center justify-between w-full aspect-square p-4 shrink-0 border-[0.5px] border-white">
            <div className="relative flex flex-1 justify-center items-center">
                {logo === "pxd" && <PxdLogo />}
                {logo === "yoondesigngroup" && <YoondesigngroupLogo />}
                {logo === "sandollcloud" && <SandollcloudLogo />}
                {logo === "rixfont" && <RixfontLogo />}
                {logo === "cubicon" && <CubiconLogo />}
                {logo === "dstrict" && <DstrictLogo />}
                {logo === "motemote" && <MotemoteLogo />}
                {logo === "naver" && <NaverLogo />}
                {logo === "josephstacey" && <JosephstaceyLogo />}
                {logo === "sungwonadpia" && <SungwonadpiaLogo />}
                {logo === "beattitude" && <BeattitudeLogo />}
                {logo === "moorim" && <MoorimLogo />}
                {logo === "snudesignalumni" && <SnudesignalumniLogo />}
            </div>
            <div className="flex flex-1 justify-center items-center">
                <p className="text-xs leading-4">
                    {description}
                </p>
            </div>
        </td>
    )
}

const PxdLogo = () => {
    return (
        <Image
            src="/pxd-logo.png"
            width={96}
            height={57}
        />
    )
}

const YoondesigngroupLogo = () => {
    return (
        <Image
            src="/yoondesigngroup-logo.png"
            width={157}
            height={52}
        />
    )
}

const SandollcloudLogo = () => {
    return (
        <Image
            src="/sandollcloud-logo.png"
            width={160}
            height={82}
        />
    )
}

const RixfontLogo = () => {
    return (
        <Image
            src="/rixfont-logo.png"
            width={131}
            height={25}
        />
    )
}

const CubiconLogo = () => {
    return (
        <Image
            src="/cubicon-logo.png"
            width={135}
            height={65}
        />
    )
}

const DstrictLogo = () => {
    return (
        <Image
            src="/dstrict-logo.png"
            width={126}
            height={30}
        />
    )
}

const MotemoteLogo = () => {
    return (
        <Image
            src="/motemote-logo.png"
            width={103}
            height={75}
        />
    )
}

const NaverLogo = () => {
    return (
        <Image
            src="/naver-logo.png"
            width={136}
            height={27}
        />
    )
}

const JosephstaceyLogo = () => {
    return (
        <Image
            src="/josephstacey-logo.png"
            width={210}
            height={38}
        />
    )
}

const SungwonadpiaLogo = () => {
    return (
        <Image
            src="/sungwonadpia-logo.png"
            width={184}
            height={74}
        />
    )
}

const BeattitudeLogo = () => {
    return (
        <Image
            src="/beattitude-logo.png"
            width={181}
            height={19}
        />
    )
}

const MoorimLogo = () => {
    return (
        <Image
            src="/moorim-logo.png"
            width={162}
            height={68}
        />
    )
}

const SnudesignalumniLogo = () => {
    return (
        <Image
            src="/snudesignalumni-logo.png"
            width={109}
            height={88}
        />
    )
}