import Image from "next/image"

export default function MiniCV() {
    return (
        <div className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start gap-6 px-6 pt-6 bg-black border border-y-zinc-800 rounded-2xl">
            <div className="relative min-w-72 h-64 xl:self-end">
                <Image src="/photo.png" alt="Profile Photo" fill />
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
                    <span
                        className="
                            bg-gradient-to-r from-red-500 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
                    >
                        Phillippe Caetano
                    </span>
                    <span>Full Stack Developer</span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">
                    I am passionate about technology and the limitless possibilities of IT, with
                    over 22 years of experience in internet solutions development.
                </p>
            </div>
        </div>
    )
}
