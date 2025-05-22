import React, { useContext, useEffect, useState, memo} from 'react'
import JsonToTable from '../JsonToTable/JsonToTable.jsx'
import getReportFromDate from '../../api/getReportFromDate.js'

import { ApiData } from '../../App.jsx';
import downloadXLSX from '../../api/downloadXLSX.js';
import { FormInputs } from '../../pages/Home.jsx';

export default function ReportViewer() {
  const { date } = useContext(FormInputs); 
  const {report} = useContext(ApiData);

  return(
  <section>
    <div className="table-wraper">
      <JsonToTable json={report}/>
    </div>
    <div className="buttons-area">
        <button onClick={ () => {
          downloadXLSX(date);
        }}>Baixar</button> 
    </div>
  </section>
)
}
