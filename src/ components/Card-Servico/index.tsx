type CardServicoProps = {
    imagem: string,
    titulo: string,
    descricao: string
}
export default function CardServico({ imagem, titulo, descricao }: CardServicoProps) {
    return (
        <>
            <section className="flex justify-center items-center flex-col w-75 min-h-63  shadow-md ">
                <div>
                    <img className="w-full rounded-t-lg" src={imagem} alt="Imagem" />
                </div>
                <div className="p-4   ">
                    <h1 className="font-semibold ">{titulo}</h1>
                    <h2 className=" font-normal text-xs">{descricao}</h2>
                </div>
            </section>
        </>
    )
}