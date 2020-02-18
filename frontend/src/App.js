/* Nested Routing */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// import getActivityByCityName from './helpers/fetcher'

//components
import Home from './screens/home/components/Home'
import Main from './screens/main/components/Main'
import Trips from './screens/trips/components/Trips'

import DayList from './screens/main/components/DayList';
import ActivityItem from './components/ActivityItem';


export default function App() {
  return (
    
    <div className='flexbox'>
     <Router>
      <div>
      <Link to="/">Home</Link>
        <Switch>
          <Route path="/main/:city/:budget" component={Main} />
          <Route path="/trips/:user" component={Trips} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}



    // <h2>Main</h2>
    // <DayList id="day-1" className="day_list">
    //   <ActivityItem id="activity-1" className="activity" draggable='true'>
    //     <p>Activity 1</p>
    //   </ActivityItem>
    // </DayList>

    // <DayList id="day-2" className="day_list">
    //   <ActivityItem id="activity-2" className="activity" draggable='true'>
    //   <p>Activity 2</p>
    //   </ActivityItem>
    // </DayList>

// <ul>
// <li>
//  
// </li>
// <li>
//   <Link to="/main">Main</Link>
// </li>
// <li>
//   <Link to="/trips">trips</Link>
// </li>
// </ul>


// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }