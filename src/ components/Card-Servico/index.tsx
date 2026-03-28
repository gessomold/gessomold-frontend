type CardServicoProps = {
    imagem: string,
    titulo: string,
    descricao: string,
    onClick?: () => void;
}
export default function CardServico({ imagem, titulo, descricao, onClick }: CardServicoProps) {
    return (
        <>
            <section
                onClick={onClick}
                className="flex justify-center items-center flex-col w-75 min-h-63 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
                <div>
                    <img className="w-full rounded-t-lg" src={imagem} alt={`Imagem do serviço ${titulo}`} />
                </div>
                <div className="p-4">
                    <h1 className="font-semibold">{titulo}</h1>
                    <h2 className="font-normal text-xs">{descricao}</h2>
                </div>
            </section>
        </>
    )
}