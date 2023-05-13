interface PaginaProps {
    externa?: boolean
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
            flex flex-col min-h-screen
            bg-gradient-to-r from-zinc-900 via-black to-zinc-900
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}
//Flex é a forma de Organizar os Elementos na Tela e o col diz que é em formato de Coluna diz também que tem um tamanho mínimo ou seja o tamanho da tela é o tamanho Mínimo da página.