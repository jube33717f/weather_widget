/**
 * file: Project Router File
 * date: 2021-06-06
 * author: Jubi
 * lastModify: Jubi 2021-06-06
 */
 import React, { Suspense } from 'react';
 import { Route, HashRouter as Router, Switch } from 'react-router-dom';
 import { Row, Col } from 'antd';
 import style from './style.module.scss';
 import loading from '../asserts/sunny-light.svg'
 /* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */
 
 const HomePage = React.lazy(() => import('../pages/HomePage'));
 
 /* <------------------------------------ **** Lazy Loading all the pages END **** ------------------------------------ */
 
 const RootRouter = () => {
     return (
         <Suspense
             fallback={
                 /* <------------------------------------ **** Loading Animation START **** ------------------------------------ */
                 <div>
                 <div>
                     <Row className={style.loadingWrapper} align="middle">
                         <Col className={style.loadingFormCol}>
                             <div className={style.loadingPageWrapper}>
                                 <div className={style.loadingSvg}><img src={loading}/>  </div>
                                 <div className={style.loadingPageTitle}>Weather Forecast</div>
                                 <div className={style.loadingAnimation}>
                                     <div className={style.cubeGrid}>
                                         <div className={style.loadingCube1} />
                                         <div className={style.loadingCube2} />
                                         <div className={style.loadingCube3} />
                                         <div className={style.loadingCube4} />
                                         <div className={style.loadingCube5} />
                                         <div className={style.loadingCube6} />
                                         <div className={style.loadingCube7} />
                                         <div className={style.loadingCube8} />
                                         <div className={style.loadingCube9} />
                                     </div>
                                 </div>
                             </div>
                         </Col>
                     </Row>
                 </div>
             </div>
                
                
                
             }
         >
             <Router>
                 <Switch>
                     <Route path="/" exact component={HomePage} />
                 </Switch>
             </Router>
         </Suspense>
     );
 };
 
 export default RootRouter;