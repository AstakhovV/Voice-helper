import React from 'react';
import Layout from '../../templates/Layout';
import { useHistory } from '../../../store/history';

const HistoryPage = () => {
  const { history } = useHistory();

  return (
    <Layout
      content={() => (
        <div className="flex p-4 flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {history.map((item) => (
              <li
                key={item.id}
                className="flex gap-4 justify-between rounded bg-slate-500 p-2"
              >
                <p>{item.command}</p>
                <p>{item.date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  );
};

export default HistoryPage;
