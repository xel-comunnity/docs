import { Route } from '@solidjs/router';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Document from  '../pages/Document';
export default function ConfigRouter(){
    return (
        <>
            <Route path="/" component={Home}></Route>
            <Route path="/project" component={Project}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/docs" component={Document}></Route>
        </>
    );
}