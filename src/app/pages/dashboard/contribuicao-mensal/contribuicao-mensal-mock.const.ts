export const DATA = {
  labels: [],
  datasets: [
    {
      data: [499999, 149999],
      backgroundColor: ['#594CBE', '#E22E6F'],
      hoverBackgroundColor: ['#594CBE', '#E22E6F'],
    },
  ],
};

export const OPTIONS = {
  cutout: '60%',
  plugins: {
    legend: {
      labels: {},
    },
  },
};

export const CARDS = [
  {
    icon: '../../../assets/svg/coins.svg',
    name: 'Contribuição mensal',
    contribuition_value: 'R$ 500,00',
    contribuition_porcentagem: '5%',
  },
  {
    icon: '../../../assets/svg/coins.svg',
    name: 'Contribuição voluntária',
    contribuition_value: 'R$ 500,00',
  },
];

export interface Card {
  icon: string;
  name: string;
  contribuition_value: string;
  contribuition_porcentagem?: string;
}
