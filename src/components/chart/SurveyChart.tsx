import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { generateColors } from 'utils/chart';
import { Box } from 'zmp-ui';

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

type Answer = {
  answer: string;
  count: number;
};

type SurveyResult = {
  question: string;
  type: 'one-choice' | 'multiple-choice' | 'text';
  answers: Answer[];
};

type ChartData = {
  question: string;
  chart: JSX.Element;
};

const SurveyCharts: React.FC<{ surveyResults: SurveyResult[] }> = ({ surveyResults }) => {
  const [chartsData, setChartsData] = useState<ChartData[]>([]);

  useEffect(() => {
    const data: ChartData[] = surveyResults.map((survey) => {
      const { type, question, answers } = survey;
      let chartData: ChartData;

      switch (type) {
        case 'one-choice':
          chartData = {
            question,
            chart: (
              <Doughnut
                data={{
                  labels: answers.map((a) => `${a.answer}: ${a.count}`),
                  datasets: [
                    {
                      data: answers.map((a) => a.count),
                      backgroundColor: generateColors(answers.length),
                    },
                  ],
                }}
                options={{
                  // responsive: true,
                  // maintainAspectRatio: false,
                  plugins: {
                    datalabels: {
                      color: '#fff',
                      font: {
                        weight: 'bold',
                        size: 12,
                      },
                      formatter: (value, context) => {
                        const total = (context.dataset.data as number[]).reduce((sum, val) => sum + val, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${percentage}%`;
                      }
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => {
                          const total = (context.dataset.data as number[]).reduce((sum, val) => sum + val, 0);
                          const value = context.raw as number;
                          const percentage = ((value / total) * 100).toFixed(1);
                          return `${percentage}%`;
                        },
                      },
                    },
                  },
                  elements: {
                    arc: {
                      borderWidth: 4,
                    },
                  },
                }}
              />
            ),
          };
          break;

        case 'multiple-choice':
          chartData = {
            question,
            chart: (
              <Bar
                data={{
                  labels: answers.map((a) => a.answer),
                  datasets: [
                    {
                      label: 'Số lượng người chọn',
                      data: answers.map((a) => a.count),
                      backgroundColor: generateColors(answers.length),
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    datalabels: {
                      color: '#000',
                      font: {
                        size: 14,
                        // weight: 'bold',
                      },
                      anchor: 'end',
                      align: 'top',
                      formatter: (value) => value,
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        color: '#000',
                        font: {
                          // weight: 'normal',
                          size: 10
                        }
                      },
                      // border: {
                      //   display: false
                      // },
                      grid: {
                        display: false
                      }
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                        color: '#000',
                        font: {
                          // weight: 'bold',
                          size: 12
                        }
                      },
                      border: {
                        display: false
                      },
                      grid: {
                        display: false
                      }
                    },
                  },
                }}
              />

            ),
          };
          break;

        case 'text':
          chartData = {
            question,
            chart: (
              <div className="overflow-auto max-h-[300px]">
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr className="sticky top-[-1px] bg-white z-10">
                      <th className="border-b p-2 text-left font-medium">STT</th>
                      <th className="border-b p-2 text-center font-medium">Câu trả lời</th>
                    </tr>
                  </thead>
                  <tbody>
                    {answers.map((a, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                      >
                        <td className="border-b p-2">{index + 1}</td>
                        <td className="border-b p-2">{a.answer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
          };
          break;

        default:
          throw new Error(`Unsupported question type: ${type}`);
      }

      return chartData;
    });

    setChartsData(data);
  }, [surveyResults]);

  return (
    <Box>
      {chartsData.map((chart, index) => (
        <Box p={4}>
          <div className="bg-white box-shadow-4 rounded-xl px-3 py-4">
            <div key={index}>
              <h3 className="text-[16px] leading-[22px] font-medium mb-1">{chart.question}</h3>
              {chart.chart}
            </div>
          </div>
        </Box>

      ))}
    </Box>
  );
};

export default SurveyCharts;
