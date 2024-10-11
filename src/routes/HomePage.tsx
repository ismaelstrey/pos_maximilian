import { Box, Flex, Text } from "@radix-ui/themes";
import { PageMain } from "../components/main";
import { useEffect, useState } from "react";


export default function HomePage() {
    const [viandas, setViandas] = useState([])
    useEffect(() => {
        async function getAllViandas() {
            const response = await fetch("https://entrega-one-umber.vercel.app/api/vianda")
            const resData = await response.json()
            setViandas(resData)
        }
        getAllViandas()
    }, [])
    return (
        <Flex>
            <Box><Text className="bg-red-500">
                <PageMain viandas={viandas} />
            </Text></Box>
        </Flex>
    )
}
