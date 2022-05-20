import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'

import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-05-01T00:00:00.000Z',
      '2022-05-02T00:00:00.000Z',
      '2022-05-03T00:00:00.000Z',
      '2022-05-04T00:00:00.000Z',
      '2022-05-05T00:00:00.000Z',
      '2022-05-06T00:00:00.000Z',
      '2022-05-07T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  }
}

const series = [
  { name: 'news.subscribers', data: [31, 120, 42, 11, 55, 109, 9] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex 
        width="100%" 
        maxWidth={1480} 
        marginX="auto" 
        marginY="6" 
        paddingX="6"
      >
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            padding={["6", "8"]}
            backgroundColor="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">Inscritos da semana</Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            padding={["6", "8"]}
            backgroundColor="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">Taxa de abertura</Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}