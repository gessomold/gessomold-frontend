type CardServicoProps = {
    imagem?: string;
    titulo: string;
    descricao: string;
    onClick?: () => void;
}

export default function CardServico({ imagem, titulo, descricao, onClick }: CardServicoProps) {
    return (
        <section
            onClick={onClick}
            className="flex flex-col w-full max-w-[340px] sm:max-w-none mx-auto shadow-md cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-white h-full"
        >
            <div className="w-full h-40 bg-gray-100 flex-shrink-0">
                {imagem ? (
                    <img
                        className="w-full h-full object-cover"
                        src={imagem}
                        alt={`Imagem do serviço ${titulo}`}
                    />
                ) : (
                    <div className="flex w-full h-full items-center justify-center text-gray-400 text-sm">
                        Sem imagem
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h1 className="font-semibold text-gray-900">{titulo}</h1>
                <h2 className="font-normal text-xs text-gray-600 mt-2">{descricao}</h2>
            </div>
        </section>
    )
}