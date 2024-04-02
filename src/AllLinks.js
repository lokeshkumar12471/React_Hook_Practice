import './App.css';
import { Link } from 'react-router-dom';
function AllLinks() {
    return (
        <div className="App mt-3">
            <Link to={'/destructuring'} className='btn btn-primary btn-sm'>Destructuring</Link>
            <br /><br />
            <Link to={'/spreadoperator'} className='btn btn-primary btn-sm'>SpreadOperator</Link>
            <br /><br />
            <Link to={'/restoperator'} className='btn btn-primary btn-sm'>RestOperator</Link>
            <br /><br />
            <Link to={'/array'} className='btn btn-primary btn-sm'>Array</Link>
            <br /><br />
            <Link to={'/arrayshift'} className='btn btn-primary btn-sm'>Arrayshift</Link>
            <br /><br />
            <Link to={'/arraypop'} className='btn btn-primary btn-sm'>Arraypop</Link>
            <br /><br />
            <Link to={'/arraysplice'} className='btn btn-primary btn-sm'>Arraysplice</Link>
            <br /><br />
            <Link to={'/redux'} className='btn btn-primary btn-sm'>Redux</Link>
            <br /><br />
            <Link to={'/mount'} className='btn btn-primary btn-sm'>Mount</Link>
            <br /><br />
            <Link to={'/dom'} className='btn btn-primary btn-sm'>Dom</Link>
            <br /><br />
            <Link to={'/clickhoc'} className='btn btn-primary btn-sm'>ClickWithHoc</Link>
            <br /><br />
            <Link to={'/hoverhoc'} className='btn btn-primary btn-sm'>HoverWithHoc</Link>
            <br /><br />
            <Link to={'/authhocexample'} className='btn btn-primary btn-sm'>AuthHocExample</Link>
            <br /><br />
            <Link to={'/forlistcomp'} className='btn btn-primary btn-sm'>ForListCompWithHoc</Link>
            <br /><br />
            <Link to={'/customhooksubfirst'} className='btn btn-primary btn-sm'>CustomHookSubFirst</Link>
            <br /><br />
            <Link to={'/customhooksubsecond'} className='btn btn-primary btn-sm'>CustomHookSubSecond</Link>
            <br /><br />
            <Link to={'/customhooksubthird'} className='btn btn-primary btn-sm'>CustomHookSubThird</Link>
            <br /><br />
            <Link to={'/customhooksubfourth'} className='btn btn-primary btn-sm'>CustomHookSubFourth</Link>
            <br /><br />
            <Link to={'/reffirstexample'} className='btn btn-primary btn-sm'>RefFirstExample</Link>
            <br /><br />
            <Link to={'/refsecondexample'} className='btn btn-primary btn-sm'>RefSecondExample</Link>
            <br /><br />
            <Link to={'/refthirdexample'} className='btn btn-primary btn-sm'>RefThirdExample</Link>
            <br /><br />
            <Link to={'/reffourthexample'} className='btn btn-primary btn-sm'>RefFourthExample</Link>
            <br /><br />
            <Link to={'/reffifthexample'} className='btn btn-primary btn-sm'>RefFifthExample</Link>
            <br /><br />
            <Link to={'/parentcomponent'} className='btn btn-primary btn-sm'>ParentComponent</Link>
            <br /><br />
            <Link to={'/contexthooksubfirst'} className='btn btn-primary btn-sm'>ContextHookSubFirst</Link>
            <br /><br />
            <Link to={'/contextHooksubsecond'} className='btn btn-primary btn-sm'>ContextHookSubSecond</Link>
            <br /><br />
            <Link to={'/reducerfirstexample'} className='btn btn-primary btn-sm'>ReducerFirstExample</Link>
            <br /><br />
            <Link to={'/reducersecondexample'} className='btn btn-primary btn-sm'>ReducerSecondExample</Link>
            <br /><br />
            <Link to={'/reducerthirdexample'} className='btn btn-primary btn-sm'>ReducerThirdExample</Link>
            <br /><br />
            <Link to={'/parentcallback'} className='btn btn-primary btn-sm'>ParentCallBack</Link>
            <br /><br />
            <Link to={'/memofirstexample'} className='btn btn-primary btn-sm'>MemoFirstExample</Link>
            <br /><br />
            <Link to={'/memosecondexample'} className='btn btn-primary btn-sm'>MemoSecondExample</Link>
            <br /><br />
            <Link to={'/memothirdexample'} className='btn btn-primary btn-sm'>MemoThirdExample</Link>
            <br /><br />
            <Link to={'/memofourthexample'} className='btn btn-primary btn-sm'>MemoFourthExample</Link>
            <br /><br />
            <Link to={'/lazyloadingfirstexample'} className='btn btn-primary btn-sm'>LazyLoadingFirstExample</Link>
            <br /><br />
            <Link to={'/lazyloadingsecondexample'} className='btn btn-primary btn-sm'>LazyLoadingSecondExample</Link>
            <br /><br />
            <h6>Stateful components in React manage their own state, allowing them to store and update data
                internally, while stateless components simply render UI based on the props they receive and don't manage their own state.</h6>
            <hr />
            <h6>Control Component:- Element data can be controlled by parent component through callbacks like onChange();</h6>
            <h6>Uncontroller Components:- Element's data can be controlled by the Dom itself like useRefHook()</h6>
            <hr />
            <h6>Redux Concept</h6>
            <h6>useSelector Hook</h6>
            <h6>The useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store. It is a replacement for the traditional mapStateToProps function used in class-based components.</h6>
            <br />
            <h6>The useDispatch hook is used to update the state of the component and return a new state.</h6>
        </div>

    );
}

export default AllLinks;
