import routes from './routes';
const app = new App();
this.store = finalCreateStore(buildReducer(reducers), window.__INITIAL_STATE__);
this.routes = routes;

const rootElement = document.getElementById(node);
ReactDOM.render(
    <Provider store={this.store}>
        <div style={{height: '100%'}}>
            {routes}
        </div>
    </Provider>, rootElement);
