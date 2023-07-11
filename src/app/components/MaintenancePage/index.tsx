import Image from "next/image"

export default function MaintenancePage(){
    return (
        <div className="absolute w-full h-full bg-blue-200 flex flex-col justify-center items-center">
            <Image className="animate-float" alt="Logo da All Stack" src={"/logo.png"} width={250} height={250}></Image>
            <div className="px-5 py-2 max-w-xs border-solid border-blue-800 border-2 bg-slate-400 rounded-lg">
                <h1 className="w-full text-center font-bold">Atenção!</h1>
                <p className="text-center">Página em construção. Volte em breve.</p>
            </div>
        </div>
    )
}