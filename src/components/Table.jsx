import React from 'react';

const Table = ({ data, lecture = false }) => {
  return (
    <table className="w-full mx-auto">
      <thead style={{ borderBottom: '2px solid', color: "#aaa6c3" }}>
        <tr className="table-header">
          <th className="pb-3 text-left">Topic</th>
          <th className="pb-3 px-5 text-right">Date</th>
          <th className="pb-3 text-right">Slides</th>
          {lecture ? (<th className="pb-3 text-right">Submission</th>) : (<th className="pb-3 text-right">Worksheet</th>) }
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="py-3 text-left">{item.topic}</td>
            <td className="px-5 text-right">{item.date}</td>
            <td className="text-right">
              <a
                className="hover-glow focus:underline"
                target="_blank"
                rel="noopener noreferrer"
                href={item.slides}
                style={{ color: '#915EFF', fontWeight: 'bold' }}
              >
                Slides
              </a>
            </td>
            {!lecture ? (
              <td className="text-right">
                <a
                  className="hover-glow focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.worksheet}
                  style={{ color: '#915EFF', fontWeight: 'bold' }}
                >
                  Worksheet
                </a>
              </td>
            ) :
            (
              <td className="text-right">
                <a
                  className="hover-glow focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.submission_folder}
                  style={{ color: '#915EFF', fontWeight: 'bold' }}
                >
                  Submission
                </a>
              </td>
            )
          }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
