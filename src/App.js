import './App.css';
import Destructuring from './components/Destructuring';
import RestOperator from './components/RestOperator';
import SpreadOperator from './components/SpreadOperator';
import { Suspense, lazy } from 'react'
import Array, { Arrayshift, Arraypop, Arraysplice } from './components/Array';
import Mount from './components/Lifecycle/Mount';
import Dom from './components/Dom';
import CustomHookSubFirst from './components/Customhooks/CustomHookSubFirst';
import CustomHookSubSecond from './components/Customhooks/CustomHookSubSecond';
import CustomHookSubThird from './components/Customhooks/CustomHookSubThird';
import AuthHocExample from './components/Hoc/Example_2/AuthHocExample';
import HoverHoc from './components/Hoc/Example_1/HoverHoc';
import ClickHoc from './components/Hoc/Example_1/ClickHoc';
import ForListComp from './components/Hoc/Example_3/ForListComp';
import CustomHookSubFourth from './components/Customhooks/CustomHookSubFourth';
import RefFirstExample from './components/RefHook/RefFirstExample';
import RefSecondExample from './components/RefHook/RefSecondExample';
import RefThirdExample from './components/RefHook/RefThirdExample';
import RefFourthExample from './components/RefHook/RefFourthExample';
import RefFifthExample from './components/RefHook/RefFifthExample';
import ParentComponent from './components/PropDrilling/PropDrlling';
import ContextHookSubFirst from './components/ContextHook/ContextHookSubFirst';
import ContextHookSubSecond from './components/ContextHook/ContextHookSubSecond';
import ReducerFirstExample from './components/UseReducer/ReducerFirstExample';
import ReducerSecondExample from './components/UseReducer/ReducerSecondExample';
import ReducerThirdExample from './components/UseReducer/ReducerThirdExample';
import ParentCallBack from './components/CallBackHook/ParentCallBack';
import MemoFirstExample from './components/useMemoHook/MemoFirstExample';
import MemoSecondExample from './components/useMemoHook/MemoSecondExample';
import MemoThirdExample from './components/useMemoHook/MemoThirdExample';
import MemoFourthExample from './components/useMemoHook/MemoFourthExample';
import { Route, Routes } from 'react-router-dom';
import AllLinks from './AllLinks';
import LazyLoadingSecondExample from './components/LazyLoading/LazyLoadingSecondExample';
import Redux from './components/Redux/ReduxFirstExample';
import Account from './components/Redux/Account';
function App() {
  const FastLoading = lazy(() => import('./components/LazyLoading/LazyLoadingFirstExample'))
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<AllLinks />} />
        <Route exact path='/destructuring' element={<Destructuring />} />
        <Route exact path='/restoperator' element={<RestOperator />} />
        <Route exact path='/spreadoperator' element={<SpreadOperator />} />
        <Route exact path='/array' element={<Array />} />
        <Route exact path='/arrayshift' element={<Arrayshift />} />
        <Route exact path='/arraypop' element={<Arraypop />} />
        <Route exact path='/arraysplice' element={<Arraysplice />} />
        <Route exact path='/redux' element={<Redux />} />
        <Route exact path='/reduxaccount' element={<Account />} />
        <Route exact path='/mount' element={<Mount />} />
        <Route exact path='/dom' element={<Dom />} />
        <Route exact path='/customhooksubfirst' element={<CustomHookSubFirst />} />
        <Route exact path='/customhooksubsecond' element={<CustomHookSubSecond />} />
        <Route exact path='/customhooksubthird' element={<CustomHookSubThird />} />
        <Route exact path='/authhocexample' element={<AuthHocExample />} />
        <Route exact path='/hoverhoc' element={<HoverHoc />} />
        <Route exact path='/clickhoc' element={<ClickHoc />} />
        <Route exact path='/forlistcomp' element={<ForListComp />} />
        <Route exact path='/customhooksubfourth' element={<CustomHookSubFourth />} />
        <Route exact path='/reffirstexample' element={<RefFirstExample />} />
        <Route exact path='/refsecondexample' element={<RefSecondExample />} />
        <Route exact path='/refthirdexample' element={<RefThirdExample />} />
        <Route exact path='/reffourthexample' element={<RefFourthExample />} />
        <Route exact path='/reffifthexample' element={<RefFifthExample />} />
        <Route exact path='/parentcomponent' element={<ParentComponent />} />
        <Route exact path='/contexthooksubfirst' element={<ContextHookSubFirst />} />
        <Route exact path='/contextHooksubsecond' element={<ContextHookSubSecond />} />
        <Route exact path='/reducerfirstexample' element={<ReducerFirstExample />} />
        <Route exact path='/reducersecondexample' element={<ReducerSecondExample />} />
        <Route exact path='/reducerthirdexample' element={<ReducerThirdExample />} />
        <Route exact path='/parentcallback' element={<ParentCallBack />} />
        <Route exact path='/memofirstexample' element={<MemoFirstExample />} />
        <Route exact path='/memosecondexample' element={<MemoSecondExample />} />
        <Route exact path='/memothirdexample' element={<MemoThirdExample />} />
        <Route exact path='/memofourthexample' element={<MemoFourthExample />} />
        <Route exact path='/lazyloadingfirstexample' element={<Suspense fallback='Loading....'><FastLoading /></Suspense>} />
        <Route exact path='/lazyloadingsecondexample' element={<LazyLoadingSecondExample />} />

      </Routes>
    </div>

  );
}

export default App;
