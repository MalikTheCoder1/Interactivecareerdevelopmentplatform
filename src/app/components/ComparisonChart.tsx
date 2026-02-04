import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const comparisonData = {
  cost: {
    title: 'Cost Efficiency',
    data: [
      { name: 'Traditional Consultant', value: 2500 },
      { name: 'SkillSync Premium', value: 450 },
      { name: 'Online Course', value: 150 },
    ],
    colors: ['rgba(168, 162, 158, 0.6)', 'rgba(20, 184, 166, 0.8)', 'rgba(214, 211, 209, 0.6)'],
    unit: '$',
    suffix: '',
  },
  time: {
    title: 'Time to Offer',
    data: [
      { name: 'Traditional Search', value: 24 },
      { name: 'SkillSync Method', value: 8 },
      { name: 'Networking Only', value: 16 },
    ],
    colors: ['rgba(168, 162, 158, 0.6)', 'rgba(245, 158, 11, 0.8)', 'rgba(214, 211, 209, 0.6)'],
    unit: '',
    suffix: ' weeks',
  },
};

export function ComparisonChart() {
  const [chartType, setChartType] = useState<'cost' | 'time'>('cost');
  const currentData = comparisonData[chartType];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-stone-900 border border-stone-700 px-3 py-2 rounded-lg shadow-lg">
          <p className="text-white text-sm">
            {currentData.unit}{payload[0].value}{currentData.suffix}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-stone-800">The SkillSync Advantage</h3>
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value as 'cost' | 'time')}
          className="bg-white border border-stone-300 text-stone-700 text-sm rounded-lg p-2 focus:ring-teal-500 focus:border-teal-500"
        >
          <option value="cost">Cost Efficiency</option>
          <option value="time">Time to Offer</option>
        </select>
      </div>
      
      <div className="w-full max-w-[600px] h-[350px] md:h-[400px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={currentData.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#78716c', fontSize: 12 }}
              angle={-15}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fill: '#78716c' }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {currentData.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={currentData.colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <p className="text-center text-xs text-stone-400 mt-4">*Based on 2023 market averages for career coaching services.</p>
    </div>
  );
}
