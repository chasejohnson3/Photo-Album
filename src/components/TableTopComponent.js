import React from 'react';
import Table from '../TableTop.js'

const TableTop = () => {
  return (
      <div className="jumbotron">
        <h1 className="display-3">Table Tops</h1>
		{<Table/>}
      </div>
  );
}


export default TableTop;