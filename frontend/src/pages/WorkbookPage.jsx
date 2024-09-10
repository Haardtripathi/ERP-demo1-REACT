/* eslint-disable no-unused-vars */
import React,{ useState } from 'react'
import { useEffect } from 'react';
import WorkbookTable from '../components/WorkbookTable'
import { getWorkbook } from '../services/workbookApi/WorkbookApi';

const WorkbookPage = () => {

  return (
    <WorkbookTable/>
  )
}

export default WorkbookPage