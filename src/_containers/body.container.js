import React from 'react';
import {
  BrowserRouter,
  //HashRouter,
  //Switch,
  Route
  //Link
} from 'react-router-dom';

import MenuContainer from './menu.container';
import * as PageDefault from '../_data/page.default';

import CrudScene from '../_scenes/crud.scene';
import ProfileScene from '../_scenes/profile.scene';

export default class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: PageDefault.DEFAULT_VIEW.title,
      url: PageDefault.DEFAULT_VIEW.url
    };
    this.onMenuChange = this.onMenuChange.bind(this);
    //this.props.history.push(this.state.url);
  }

  componentWillMount() {
    //this.props.history.push(this.state.url);
    //hashHistory.push(this.state.url);
  }

  onMenuChange(e) {
    let id = e.target.getAttribute('data-id');
    let title = e.target.getAttribute('data-title');
    let url = e.target.getAttribute('data-url');
    console.log('Requested for a new view: ' + id + ' with URL: ' + url);
    this.setState({ id: id, title: title, url: url });
    //this.props.history.push(url);
  }

  render() {
    return (
      <div>
        <MenuContainer onMenuChange={this.onMenuChange} {...this.props} />
        <BrowserRouter>
          <div>
            <Route
              exact
              path="/"
              render={props => {
                if (this.state.id === 'Pages/Crud') {
                  return <CrudScene {...this.props} />;
                } else {
                  return <ProfileScene {...this.props} />;
                }
              }}
            />
            {/* <Route
              exact
              path="/pages/crud"
              render={props => {
                return <Crud {...this.props} />;
              }}
            />
            <Route
              exact
              path="/pages/profile"
              render={props => {
                return <Profile {...this.props} />;
              }}
            /> */}
          </div>
        </BrowserRouter>
      </div>

      // <BrowserRouter>
      //   <div>
      //     <PageMenu onMenuChange={this.onMenuChange} {...this.props} />
      //     <Route
      //       exact
      //       path="/pages/dashboard"
      //       render={props => {
      //         return <Dashboard {...this.props} />;
      //       }}
      //     />
      //   </div>
      // </BrowserRouter>
      // <HashRouter>
      //   <div>
      //     <PageMenu onMenuChange={this.onMenuChange} />
      //     <div className="my-3 my-md-5">
      //       <div className="container">
      //         <div className="page-header">
      //           <h1 className="page-title">{this.state.title}</h1>
      //         </div>
      //         <Route
      //           path="/component/table"
      //           component={
      //             <DataTable
      //               title={TableMock.TITLE}
      //               headerNames={TableMock.HEADER_NAMES}
      //             />
      //           }
      //         />
      //         <Route path="/pages/crud" component={<Crud />} />
      //       </div>
      //     </div>
      //   </div>
      // </HashRouter>
    );
  }
}
