import { Box, Flex } from "@radix-ui/themes";

interface ViadaDTO {
    id: number;
    nome: string;
    preco: number;
    viandaTypeId: number;
    qualificacao: number;
    ViandaType: {
        id: number;
        nome: string;
    }
}
export function PageMain({ viandas = [] }: { viandas?: ViadaDTO[] }) {
    return (
        <Flex>
            {viandas?.map((vianda) => <Box>{vianda.nome}</Box>)}
        </Flex>
    )
}
