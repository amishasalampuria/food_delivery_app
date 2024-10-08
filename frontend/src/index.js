// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from 'react-router-dom';
// import ErrorBoundary from './ErrorBoundary';
// import StoreContextProvider from 'C:/Web_Development/zomato/src/context/StoreContext.js'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//   // <React.StrictMode>
//   //     <BrowserRouter>  
//   //     <ErrorBoundary>
//   //       {/* <StoreContextProvider><App /></StoreContextProvider> */}
//   //       <App />
//   //     </ErrorBoundary>
//   //     </BrowserRouter>
//   // </React.StrictMode> 
  
// <React.StrictMode>
//   <BrowserRouter>   
//     <ErrorBoundary>
//       <StoreContextProvider>
//         <App />
//       </StoreContextProvider>
//     </ErrorBoundary>
//   </BrowserRouter>
// </React.StrictMode>

  
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createRoot } from 'react-dom';
import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import {StoreContextProvider} from './context/StoreContext'; // Update path based on your project structure

// ReactDOM.createRoot is used for Concurrent Mode, but ReactDOM.render is sufficient for most applications
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ErrorBoundary>
//         <StoreContextProvider>
//           <App />
//         </StoreContextProvider>
//       </ErrorBoundary>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <ErrorBoundary>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </ErrorBoundary>
  </BrowserRouter>
</React.StrictMode>
);
reportWebVitals();
