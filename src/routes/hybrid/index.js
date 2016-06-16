import  React from 'react'
import  App from '../../components/HybridApp';
import error from '../error';
import home from './home';

export default {
  path: '/hybrid',

  children: [
    home,
    error,
  ],
  
  
  async action({next, render, context}) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <App context={context}>{component}</App>
    );
  }
}
