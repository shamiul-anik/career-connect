import React from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Statistics = () => {
  
  // Assignment Data
  const data = [
    { assignmentNo: 'A1', name: 'Assignment-1', marks: 57 },
    { assignmentNo: 'A2', name: 'Assignment-2', marks: 60 },
    { assignmentNo: 'A3', name: 'Assignment-3', marks: 60 },
    { assignmentNo: 'A4', name: 'Assignment-4', marks: 50 },
    { assignmentNo: 'A5', name: 'Assignment-5', marks: 45 },
    { assignmentNo: 'A6', name: 'Assignment-6', marks: 58 },
    { assignmentNo: 'A7', name: 'Assignment-7', marks: 60 },
    { assignmentNo: 'A8', name: 'Assignment-8', marks: 60 },
    { assignmentNo: 'A9', name: 'Assignment-9', marks: 60 },
  ];

  return (
    <div className="min-h-[calc(100dvh-611px)]">
      
      <CommonBanner></CommonBanner>

      {/* Area Chart for Assignment Data */}
      <div className="max-w-7xl mx-auto mt-12 lg:mt-24 p-4">
        <div className="w-full h-48 lg:h-[450px]">
          <ResponsiveContainer>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="assignmentNo" />
              <YAxis label={{ value: 'Marks', angle: -90, position: 'insideLeft' }} />
              {/* <Legend /> */}
              <Legend payload={[{ value: 'Assignment Marks' }]} />
              <Tooltip
                formatter={(value, name) => [value, name === 'marks' ? 'Marks' : name]}
                labelFormatter={(label) => `${label}`}
              />
              <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default Statistics;