import React from 'react';
import THead from '../Thead';
import TableBodyWithAction from '../TableBodyWithAction';

export default function TableWithAction({
  withoutPagination,
  handlePageClick,
  actionNotDisplay,
  data,
  thead,
  tbody,
  editUrl,
  deleteAction,
  customAction,
  status,
  pages,
}) {
  return (
    <table className="w-full text-md text-left rtl:text-right text-gray-500">
      <THead text={thead} />
      <TableBodyWithAction
        status={status}
        data={data}
        display={tbody}
        editUrl={editUrl}
        deleteAction={deleteAction}
        actionNotDisplay={actionNotDisplay}
        customAction={customAction}
        // withoutPagination={withoutPagination}
        // handlePageClick={handlePageClick}
      />
    </table>
  );
}
