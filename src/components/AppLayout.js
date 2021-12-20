import {Route, Routes } from 'react-router-dom';
import Header from './Header';
import LegalDocuments from './LegalDocuments/LegalDocuments';
import LegalTips from './LegalTips/LegalTips';
import LegalNews from './LegalNews/LegalNews';
import MyFiles from './MyFiles/MyFiles';
import MyDocuments from './MyDocuments/MyDocuments';

const AppLayout = () => {
    return (
        <>
        <Header></Header>
        <Routes>
            <Route path='documents' element={<LegalDocuments/>}></Route>
            <Route path='tips' element={<LegalTips/>} />
            <Route path='news' element={<LegalNews/>} />
            <Route path='myfiles' element={<MyFiles/>} />
            <Route path='mydocuments' element={<MyDocuments/>} />
        </Routes>
        </>
    )
}

export default AppLayout;