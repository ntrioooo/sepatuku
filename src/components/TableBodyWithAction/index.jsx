import React from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../configs';
import moment from 'moment';
import Button from '../Button';

export default function TableBodyWithAction({
  data,
  display,
  editUrl,
  deleteAction,
  customAction,
  actionNotDisplay,
  status,
}) {
  const navigate = useNavigate();
  return (
    <tbody>
      {status === 'process' ? (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: 'center' }}>
            <div className="flex items-center justify-center">
              {/* <Spinner animation="border" variant="primary" /> */}
              <div className="text-sm text-gray-500">Loading...</div>
            </div>
          </td>
        </tr>
      ) : data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {Object.keys(data).map(
                (key) =>
                  display.indexOf(key) > -1 && (
                    <td key={key}>
                      {key === 'avatar' ? (
                        <Image
                          height={40}
                          width={40}
                          roundedCircle
                          src={`${config.api_image}/${data[key]}`}
                        />
                      ) : key === 'date' ? (
                        moment(data[key]).format('DD-MM-YYYY, h:mm:ss a')
                      ) : (
                        data[key]
                      )}
                    </td>
                  )
              )}
              {!actionNotDisplay && (
                <td className="px-6 py-4">
                  {customAction && customAction(data._id, data.statusEvent)}
                  {editUrl && (
                    <Button
                      variant="success"
                      size={'sm'}
                      action={() => navigate(`${editUrl}/${data._id}`)}
                    >
                      Edit
                    </Button>
                  )}
                  {deleteAction && (
                    <Button
                      className={'mx-2'}
                      variant="danger"
                      size={'sm'}
                      action={() => deleteAction(data._id)}
                    >
                      Hapus
                    </Button>
                  )}
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: 'center' }}>
            Tidak Ditemukan Data
          </td>
        </tr>
      )}
    </tbody>
  );
}
